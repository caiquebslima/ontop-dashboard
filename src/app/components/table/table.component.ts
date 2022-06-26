import { OnInit, Component, Input } from '@angular/core'

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
    @Input() data: any[]
    @Input() columns: any[]
    displayedColumns: string[]
    constructor() {}

    ngOnInit(): void {
        this.displayedColumns = this.columns.map(c => c.columnDef)
    }
}
