import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product = {
    id: 1,
    name: "iphone 15",
    price: 20000,
    imageUrl:"1.jpeg",
    description: "Iyi Telefon",
    isActive: true
  }

  productsList = ["iphone 14","iphone 15","iphone 16"]
  products = [
    {
      id: 1,
      name: "iphone 14",
      price: 20000,
      imageUrl:"1.jpeg",
      description: "Iyi Telefon",
      isActive: true
    },
    {
      id: 2,
      name: "iphone 15",
      price: 30000,
      imageUrl:"2.jpeg",
      description: "Iyi Telefon",
      isActive: false
    },
    {
      id: 3,
      name: "iphone 16",
      price: 40000,
      imageUrl:"3.jpeg",
      description: "Iyi Telefon",
      isActive: true
    }
  ]

}
