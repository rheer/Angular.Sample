import { Observable, of, from } from 'rxjs';
import { Instrument } from '../../models/instrument.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { InstrumentsEntityCollectionService } from 'src/app/store/instruments-entity-collection.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InstrumentsResolver implements Resolve<Observable<Instrument[]>> {

    constructor(private instrumentsEntityCollectionService: InstrumentsEntityCollectionService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Instrument[]> {
        return this.instrumentsEntityCollectionService.getAll();
    }

}