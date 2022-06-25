import { Component, OnInit } from '@angular/core';
import { BooksServices } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  livros: any;
  BooksServices : BooksServices
  constructor(BooksServices : BooksServices) {
    this.BooksServices = BooksServices;   }

  ngOnInit(): void {
    this.livros = this.BooksServices.getBock().subscribe((data =>
      {
        this.livros = data;
        console.log(this.livros)
      }))
  }

}
