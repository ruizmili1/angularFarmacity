import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../productos';
import { MatDialog } from '@angular/material/dialog';
import { DetailsCardModalComponent } from '../details-card-modal/details-card-modal.component';
import { ModalService } from '../modal.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() tarjeta: any;
  @Input() producto!: Producto;
  @Input() tipo: any='';

  cantidad: number = 1;
  modalService: any;

  agregarAlCarro(producto: Producto) {
    this.producto = producto;
    this.cantidad = 1;

    console.log(
      'Producto agregado al carrito:',
      this.producto.titulo,
      this.producto.descripcion,
      this.producto.precio,
      'Cantidad:',
      this.cantidad
    );
  } 
  
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.tipo,'tipo',this.tarjeta.tipo)
    if(this.tipo == this.tarjeta.tipo){
      console.log('iguales',)
    }
  }

  verDetalle() {
    // Abrir modal con detalles del producto
    this.modalService.open(DetailsCardModalComponent, {
      data: { producto: this.producto }, // Pasar el producto al componente modal
    });
  }

  @Output() productoSeleccionado = new EventEmitter<any>();
}

