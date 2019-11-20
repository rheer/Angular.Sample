import { Injectable } from '@angular/core';
import { Instrument } from '../models/instrument.model';

import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({
    providedIn: 'root'
})
export class InstrumentsEntityCollectionService extends EntityCollectionServiceBase<Instrument> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('instrument', serviceElementsFactory)
    }
}
