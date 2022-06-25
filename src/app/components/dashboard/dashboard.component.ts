import { ClientsService } from './../../services'
import { Component, OnInit } from '@angular/core'
import {
    ClientInterface,
    ClientStatusEnum,
    ClientTypeEnum,
} from 'src/app/interfaces'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    public clients: ClientInterface[] = []
    public contractTypes = Object.values(ClientTypeEnum)
    public clientStatus = Object.values(ClientStatusEnum)

    constructor(private clientsService: ClientsService) {}

    public ngOnInit(): void {
        this.clientsService.getClients().subscribe(res => {
            this.clients = res
        })
    }
}
