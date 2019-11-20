import { Injectable } from '@angular/core';
import { Trade } from '../models/trade.model';
//import { createSelector } from '@ngrx/store'
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';

@Injectable({
    providedIn: 'root'
})
export class TradesEntityCollectionService extends EntityCollectionServiceBase<Trade> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('trade', serviceElementsFactory);
    }

}
