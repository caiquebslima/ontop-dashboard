import { OnInit, Component, Input } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { DialogClientOptionsComponent } from '../dialog-client-options/dialog-client-options.component'

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
    @Input() data: any[]
    @Input() columns: any[]
    displayedColumns: string[]
    constructor(public dialog: MatDialog) {}

    ngOnInit(): void {
        this.displayedColumns = this.columns.map(c => c.columnDef)
    }

    openDialog() {
        this.dialog.open(DialogClientOptionsComponent, {
            restoreFocus: false,
        })
    }
}
