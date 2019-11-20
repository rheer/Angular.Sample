import { Component, OnInit, OnDestroy } from '@angular/core';
import { Instrument } from 'src/app/models/instrument.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { InstrumentsEntityCollectionService } from 'src/app/store/instruments-entity-collection.service';
//import { EntityAction } from '@ngrx/data';


@Component({
  selector: 'app-instrument-list-route-container',
  templateUrl: './instrument-list-route-container.component.html',
  styleUrls: ['./instrument-list-route-container.component.css']
})
export class InstrumentListRouteContainerComponent implements OnInit, OnDestroy {


  instruments$: Observable<Instrument[]>;
  instruments: Instrument[];
  sub: Subscription

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private instrumentsEntityCollectionService: InstrumentsEntityCollectionService) { 
      this.instruments$ = this.instrumentsEntityCollectionService.entities$;
      //this.error$ = this.instrumentsEntityCollectionService.errors$
    }

  ngOnInit() {
    //this.instruments$ = this.route.snapshot.data['instruments$'];
    
    this.instrumentsEntityCollectionService.getAll()
    // this.instrumentService.errors$.subscribe(err => {
    //   const x = err;
    // })

    // this.sub = this.instrumentService.entities$.subscribe(instrs => {
    //   const x = instrs;
    // })


    // this.route.data.subscribe(data => {
    //   const instruments$ = data['instruments$'];
    //   if (instruments$) {
    //     this.instruments$ = instruments$;
    //     this.instruments$.subscribe(x => {
    //       this.instruments = x
    //     })
    //   }
    // });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }

  public onSelectedInstrumentIdChanged($event: number): void {
    //this.router.navigate(['./'], { queryParams: { instrumentId: $event}, relativeTo: this.route })
    this.router.navigate(['./', $event], { relativeTo: this.route});
  }


}
