import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Instrument } from 'src/app/models/instrument.model';
import { ActivatedRoute } from '@angular/router';
import { InstrumentsEntityCollectionService } from 'src/app/store/instruments-entity-collection.service';
import { Observable, Subscription } from 'rxjs';
import { select } from '@ngrx/store';
import { Trade } from 'src/app/models/trade.model';
import { TradesEntityCollectionService } from 'src/app/store/trades-entity-collection.service';
import { map } from 'rxjs/operators';
import { InstrumentChangesEventArgs, InstrumentChangeType } from 'src/app/presentations/instrument-detail-presentation/instrument-detail-presentation.component';

@Component({
  selector: 'app-instrument-detail-route-container',
  templateUrl: './instrument-detail-route-container.component.html',
  styleUrls: ['./instrument-detail-route-container.component.css']
})
export class InstrumentDetailRouteContainerComponent implements OnInit, OnDestroy {

  instrument$: Observable<Instrument>;
  instrumentId: string;
  trades$: Observable<Trade[]>;
  getInstrumentSubscription: Subscription;
  sub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private instrumentsEntityCollectionService: InstrumentsEntityCollectionService,
    private tradesEntityCollectionService: TradesEntityCollectionService
    ) { }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    this.getInstrumentSubscription.unsubscribe();
  }

  ngOnInit() {
    this.tradesEntityCollectionService.getAll()
    this.sub = this.getInstrumentSubscription = this.route.params.subscribe(params => {

      this.instrumentId = params["instrumentId"];
      if (this.instrumentId !== null) {
        this.instrument$ = this.instrumentsEntityCollectionService.entities$.pipe(
          select(x => x.find(y => y.id == this.instrumentId)),
          // map(instr => {
          //   if (instr == null) {
          //     const newInstr = new Instrument();
          //     newInstr.id = instrumentId;
          //     newInstr.new = true;
          //     return newInstr;
          //   }
          //   return instr;
          // }))
        )
        this.trades$ = this.tradesEntityCollectionService.entities$.pipe(select(e => e.filter(x => x.instrumentId == this.instrumentId)))
      }
    });

    // const sub = this.route.params.subscribe(params => {
    //   const instrumentId = +params['instrumentId'];
    //   if (instrumentId !== null) {
    //     this.instrument$ = this.instrumentService.getByKey(instrumentId)
    //   // this.instrumentService.getByKey(instrumentId).subscribe(x => {
    //     //   this.instrument = x;
    //     // });
    //   }
    // });

    // this.route.queryParams.subscribe(queryParams => {
    //   if (queryParams.instrumentId) {
    //     this.instrumentService.getByKey(queryParams.instrumentId)
    //   }
    //   // const a = queryParams.instrumentId
    //   // const instrumentId = queryParams.get('instrumentId')
    //   // if (instrumentId != null) {
    //   //   this.instrumentService.getByKey(instrumentId)
    //   // }
    // })

    // this.route.paramMap.subscribe(params => {
    //   if (params.instrumentId) {

    //   }
    // })

    //this.instrument = this.route.snapshot.data['instrument'];
    //const routeParams = this.route.snapshot.params;
    // this.route.params.subscribe(params => {
    //   if (params['instrument']) {
    //     this.instrument = params['instrument'];
    //   }
    // });

    // this.route.data.pipe(map(data => { data.instrument.json()})).subscribe(res => {
    //   console.log(res)
    // })
    // //map(data => data.instrument.json()).subscribe((res) => {
    //   console.log(res)
    // })

    // this.route.data.subscribe(data => {
    //   const instrument$ = data['instrument$'];
    //   if (instrument$) {
    //     this.instrument$ = instrument$;
    //   }
    // });
  }

  onInstrumentChanged($event: InstrumentChangesEventArgs) {

    switch($event.changeType) {
      case InstrumentChangeType.Add : 
        this.instrumentsEntityCollectionService.add($event.instrument)
        break;
      case InstrumentChangeType.Update : 
        this.instrumentsEntityCollectionService.update($event.instrument)
        break;
      case InstrumentChangeType.Delete : 
        this.instrumentsEntityCollectionService.delete($event.instrument.id)
        break;
    }
  }
}
