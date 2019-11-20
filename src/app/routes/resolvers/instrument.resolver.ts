import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, EMPTY, of } from 'rxjs';
import { Instrument } from '../../models/instrument.model';
import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { InstrumentsEntityCollectionService } from 'src/app/store/instruments-entity-collection.service';

@Injectable({
    providedIn: 'root'
})
export class InstrumentResolver implements Resolve<Observable<Instrument>> {
    constructor(private instrumentsEntityCollectionService: InstrumentsEntityCollectionService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Instrument> {
        //return this.instrumentsService.getInstrument(+route.params['instrumentId']);
        return this.instrumentsEntityCollectionService.getByKey(+route.params['instrumentId']);
    }
}