import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatDatepickerInputEvent } from '@angular/material/datepicker'

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker.component.html',
})
export class DatepickerComponent {
    @Input() label: string
    @Output() dateSelection = new EventEmitter<any[]>()
    @Input() startDate: Date | null
    @Input() endDate: Date | null
    constructor() {}

    public startDateChange(e: MatDatepickerInputEvent<Date>) {
        this.startDate = e.value
    }
    public endDateChange(e: MatDatepickerInputEvent<Date>) {
        this.endDate = e.value
        this.dateSelection.emit([this.startDate, this.endDate])
    }
}
