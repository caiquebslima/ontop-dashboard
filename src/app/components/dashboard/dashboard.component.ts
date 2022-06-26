import { ClientsService } from './../../services'
import { Component, OnInit } from '@angular/core'
import {
    ClientInterface,
    ClientStatusEnum,
    ClientTypeEnum,
} from 'src/app/interfaces'
import { FormControl } from '@angular/forms'
import { debounceTime } from 'rxjs'
import { MatTableDataSource } from '@angular/material/table'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    public clients: ClientInterface[] = []
    public allClients: ClientInterface[] = []
    public dataSource: MatTableDataSource<ClientInterface>
    public contractTypes = Object.values(ClientTypeEnum)
    public clientStatus = Object.values(ClientStatusEnum)
    public showFilters: boolean = false
    public tableColumns = [
        {
            columnDef: 'picture',
            header: '',
            cell: (element: ClientInterface) => `${element.picture}`,
            switchCase: 'picture',
        },
        {
            columnDef: 'name',
            header: 'Contractor Name',
            cell: (element: ClientInterface) =>
                `${element.first_name} ${element.last_name}`,
        },
        {
            columnDef: 'type',
            header: 'Type',
            cell: (element: ClientInterface) => `${element.type}`,
        },
        {
            columnDef: 'date',
            header: 'Start Date',
            cell: (element: ClientInterface) => `${element.start_date}`,
            switchCase: 'datePipe',
        },
        {
            columnDef: 'amount',
            header: 'Amount',
            cell: (element: ClientInterface) => `${element.amount}`,
            switchCase: 'currencyPipe',
        },
        {
            columnDef: 'status',
            header: 'Status',
            cell: (element: ClientInterface) => ` ${element.status}`,
            switchCase: 'status',
        },
        {
            columnDef: 'contextMenu',
            header: '',
            cell: (element: ClientInterface) => ``,
            switchCase: 'menu',
        },
    ]
    public filterName: FormControl = new FormControl('')
    public filterContractType: string
    public filterStatus: string
    public startDate: Date | null
    public endDate: Date | null

    constructor(private clientsService: ClientsService) {}

    public ngOnInit(): void {
        this.clientsService.getClients().subscribe(clients => {
            clients.forEach(client => {
                client.start_date = new Date(client.start_date)
            })
            this.clients = clients
            this.allClients = clients
            this.dataSource = new MatTableDataSource(clients)
        })
        this.nameFilterWatch()
    }

    public clearFilters() {
        this.filterName.reset()
        this.filterContractType = ''
        this.filterStatus = ''
        this.startDate = null
        this.endDate = null
        this.dataSource.filter = ''
        this.dataSource.data = this.allClients
    }

    public filtersSwitch(): void {
        this.showFilters = !this.showFilters
    }

    public filterByContractType() {
        this.dataSource.filter = this.filterContractType.trim().toLowerCase()
    }
    public filterByStatus() {
        this.dataSource.filter = this.filterStatus.trim().toLowerCase()
    }
    public filterByRange(dates: Date[]) {
        this.startDate = dates[0]
        this.endDate = dates[1]
        this.dataSource.data = this.dataSource.data.filter(
            client =>
                client.start_date >= dates[0] && client.start_date <= dates[1],
        )
    }

    private nameFilterWatch() {
        this.filterName.valueChanges.pipe(debounceTime(200)).subscribe(val => {
            if (val) {
                this.dataSource.filter = val
            } else {
                this.dataSource.filter = ''
            }
        })
    }
}
