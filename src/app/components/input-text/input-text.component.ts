import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
    selector: 'app-input-text',
    templateUrl: './input-text.component.html',
})
export class InputTextComponent {
    @Input() label: string
    @Input() icon: string
    @Input() formControl: FormControl
    constructor() {}
}
