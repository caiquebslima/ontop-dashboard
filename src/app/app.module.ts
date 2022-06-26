import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { UserMenuComponent } from './components/user-menu/user-menu.component'
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { HttpClientModule } from '@angular/common/http'
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { DatepickerComponent } from './components/datepicker/datepicker.component'
import { DropdownComponent } from './components/dropdown/dropdown.component'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { TableComponent } from './components/table/table.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatChipsModule } from '@angular/material/chips'
import { MatTableResponsiveDirective } from './directives/mat-table-responsive.directive'
import { MatDialogModule } from '@angular/material/dialog'
import { DialogClientOptionsComponent } from './components/dialog-client-options/dialog-client-options.component'
import { MatListModule } from '@angular/material/list'
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        DashboardComponent,
        UserMenuComponent,
        DatepickerComponent,
        DropdownComponent,
        TableComponent,
        MatTableResponsiveDirective,
        DialogClientOptionsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatInputModule,
        MatDatepickerModule,
        HttpClientModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        MatChipsModule,
        MatDialogModule,
        MatListModule,
    ],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-US' }],
    bootstrap: [AppComponent],
})
export class AppModule {}
