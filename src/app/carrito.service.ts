import { Injectable } from '@angular/core';
import { Producto } from './productos';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private productosSeleccionados: Producto[] = [];

  constructor() {}

  getProductosSeleccionados(): Producto[] {
    return this.productosSeleccionados;
  }

  agregarProducto(producto: Producto) {
    this.productosSeleccionados.push(producto);
  }

  eliminarProducto(producto: Producto) {
    this.productosSeleccionados = this.productosSeleccionados.filter(
      (p) => p.id !== producto.id
    );
  }
}
