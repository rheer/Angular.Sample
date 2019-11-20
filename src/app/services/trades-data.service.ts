import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Trade } from '../models/trade.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


export class TradesDataService extends DefaultDataService<Trade> {

    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Trade', http, httpUrlGenerator);
    }

    getAll(): Observable<Trade[]> {
        return super.getAll().pipe(map(trades => trades.map(trade => this.map(trade))));
    }

    private map(trade: Trade): Trade {
        return { ... trade }
    }

}