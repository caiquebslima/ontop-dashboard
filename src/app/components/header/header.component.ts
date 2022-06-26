import { Component } from '@angular/core'
import { HeaderMenuItemInterface } from 'src/app/interfaces/header.interface'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    showHamburguerMenu: boolean
    menuItems: HeaderMenuItemInterface[] = [
        {
            icon: 'user.svg',
            label: 'Contracts',
            selected: true,
        },
        {
            icon: 'document.svg',
            label: 'Documents',
            selected: false,
        },
        {
            icon: 'credit_card.svg',
            label: 'Payout',
            selected: false,
        },
        {
            icon: 'calendar.svg',
            label: 'Time',
            selected: false,
        },
    ]

    public toggleHamburguerMenu() {
        this.showHamburguerMenu = !this.showHamburguerMenu
    }
}
