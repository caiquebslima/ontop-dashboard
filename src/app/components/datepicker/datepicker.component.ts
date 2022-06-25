import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker.component.html',
})
export class DatepickerComponent {
    @Input() label: string = ''
    constructor() {}
}
