import { Component, OnInit, Input,  SimpleChanges } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input() data: any ;
  returnedArray:any;
  pageSize: Number= 10;

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.data.slice(startItem, endItem);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data && !changes.data.isFirstChange()) {
      this.returnedArray = this.data.slice(0, this.pageSize);
    }
  }

  ngOnInit() {
    this.returnedArray = this.data.slice(0, this.pageSize);
  }

}
