import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-parent',
  templateUrl: './cart-parent.component.html',
  styleUrls: ['./cart-parent.component.css']
})
export class CartParentComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
