import { Component } from '@angular/core';
import { drugs } from './drug/shared/shared.dto'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public searchData: any = [];
  public sortOrder: number;
  listData:any = drugs;

  title = 'flight-search-ang';
  public headerTitle = 'tesstssssss'
  constructor() {
  }
  onSearchClick(data) {
    this.searchData = data;
  }
  onClickAdd(data)
  { 
    if(data)
    {
      this.listData =[data, ...this.listData];  
      alert('Added Success');
    }
  }
}
