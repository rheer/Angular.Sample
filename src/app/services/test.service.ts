import { HttpClient } from '@angular/common/http';


export class TestService {
    BASE_URL = 'http://localhost/api'
    ENDPOINT = 'test'


    constructor(private httpClient: HttpClient) {}

    // getInstruments(): Observable<Instrument[]> {
    //     return this.httpClient.get<Instrument[]>(`${this.BASE_URL}/${this.ENDPOINT}`);
    // }

    // createInstrument(instrument: Instrument): Observable<Instrument> {
    //     return this.httpClient.post<Instrument>(`${this.BASE_URL}`, instrument);
    // }

    // updateInstrument(instrument: Instrument): Observable<Instrument> {
    //     return this.httpClient.put<Instrument>(`${this.BASE_URL}/${this.ENDPOINT}/${instrument.id}`, instrument);
    // }

    // deleteInstrument(instrumentId: number) {
    //     return this.httpClient.delete(`${this.BASE_URL}/${this.ENDPOINT}/${instrumentId}`);
    // }

    // getInstrument(instrumentId: number): Observable<Instrument> {
    //     return this.httpClient.get<Instrument>(`${this.BASE_URL}/${this.ENDPOINT}/${instrumentId}`);
    // }

    // https://www.npmjs.com/package/@xmlking/angular-in-memory-web-api
}