import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
    @Input() label: string = ''
    @Input() values: string[] = []
    constructor() {}
}
