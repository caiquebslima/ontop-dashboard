import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
    @Input() label: string
    @Input() values: string[]
    @Input() value: string
    @Output() valueChange = new EventEmitter<string>()
    constructor() {}

    public emitValueChange() {
        this.valueChange.emit(this.value)
    }
}
