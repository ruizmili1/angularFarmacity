import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  productos: any[] = [];
  isCartOpen: boolean = false;
  tarjeta: any;
productoSeleccionado: any;


  constructor() {}

  ngOnInit(): void {}
}
