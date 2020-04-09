import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input() page :number;
  @Output() newPage = new EventEmitter()

  
  
  constructor() { }

  ngOnInit(): void {
  }

 /* newPage(e){
    if (this.page > 1){
      this.page -= 1;
    }
    else {
      this.page += 1;
    }
   
  }*/
  
  prevPage(){
    if(this.page > 0){
      this.newPage.emit(this.page - 1); // emit the event "newPage" with the value page - 1
    }
  }

  nextPage(){
    this.newPage.emit(this.page + 1); // emit the event "newPage" with the value page + 1
  }
  



}


  