import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
 

  tarjetas: any[] = [
    {
      id: 1,
      titulo: 'Antimicótico',
      imagen: '../../assets/fluconazol150mg.jpg',
      descripcion: '',
      precio: ' $ 6,000',
    },
    {
      id: 2,
      titulo: 'Ansiolítico ',
      imagen: '../../assets/diazepam.png',
      descripcion: '',
      precio: ' $ 4,349',
    },
    {
      id: 3,
      titulo: 'Antiviral',
      imagen: '../../assets/aciclovir.png',
      descripcion: '',
      precio: '$ 15,500',
    },
    {
      id: 4,
      titulo: 'Antipsicótico',
      imagen: '../../assets/clorpromazina.png',
      descripcion: '',
      precio: '$ 9,000',
    },
  ];

  producto: any = {};
  cantidad: number = 1;
  isCartOpen: any;

  agregarAlCarro(producto: any) {
    console.log(
      'Producto agregado al carrito:',
      producto,
      'Cantidad:',
      this.cantidad
    );
  }

  constructor(
  ){}

  ngOnInit(): void {
 
  }
}
