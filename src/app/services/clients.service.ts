import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable, tap } from 'rxjs'
import { ClientInterface } from '../interfaces'

@Injectable({
    providedIn: 'root',
})
export class ClientsService {
    constructor(private httpClient: HttpClient) {}

    public getClients(): Observable<ClientInterface[]> {
        return this.httpClient.get<ClientInterface[]>(
            'assets/sample_data/MOCK_DATA.json',
        )
    }
}
