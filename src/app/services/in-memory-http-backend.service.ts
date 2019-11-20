import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable({
    providedIn: 'root'
})
export class InMemoryHttpBackendService implements InMemoryDbService {

    constructor() { }
    createDb() {
        const uuid1 = UUID.UUID();
        const uuid2 = UUID.UUID();
        const uuid3 = UUID.UUID();
        const uuid4 = UUID.UUID();
        const instrument = [
            { id: uuid1, name: 'UBS AG', ticker: 'UBSN'},
            { id: uuid2, name: 'Credit Suisse AG', ticker: 'CS'},
            { id: uuid3, name: 'HSBC', ticker: 'HSBC'},
            { id: uuid4, name: 'City Bank', ticker: 'CTBK'}
        ]
        const trade = [
            { id: UUID.UUID(), instrumentId: uuid1, price: 1.1, tradeDate: new Date() },
            { id: UUID.UUID(), instrumentId: uuid1, price: 3.44, tradeDate: new Date()},
            { id: UUID.UUID(), instrumentId: uuid2, price: 112.04, tradeDate: new Date()},
            { id: UUID.UUID(), instrumentId: uuid2, price: 109.3, tradeDate: new Date()}
        ]
        return {instrument, trade}
    }

}