import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-input-text',
    templateUrl: './input-text.component.html',
})
export class InputTextComponent {
    @Input() label: string = ''
    @Input() icon: string = ''
    constructor() {}
}
