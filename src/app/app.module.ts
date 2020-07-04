import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListComponent } from './drug/list/list.component';
import { AddComponent } from './drug/add/add.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [AppComponent, ListComponent, AddComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    PaginationModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
