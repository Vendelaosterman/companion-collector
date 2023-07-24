import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/pokemon';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {

  @Input() book?:Book
  @Output() bookSelected:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  bookClicked():void{
    this.bookSelected.emit(this.book?.id)
  }

}
