import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  @Input() tipo: any = '';

  tipoRoute: string = '';
  productos: any = [
    {
      id: 1,
      titulo: 'Analgésicos',
      descripcion: '',
      precio: 1,
      imagen: '../../assets/actron600.jpg',
      tipo: 'Analgesicos',
    },
    {
      id: 2,
      titulo: 'Analgésicos',
      descripcion: '',
      precio: '2,500',
      imagen: '../../assets/paracetamol.jpg',
      tipo: 'Analgesicos',
    },
    {
      id: 3,
      titulo: 'Analgésicos',
      descripcion: '',
      precio: '999',
      imagen: '../../assets/aspirina.jpg',
      tipo: 'Analgesicos ',
    },
    {
      id: 4,
      titulo: 'Antibióticos',
      descripcion: '',
      precio: 1,
      imagen: '../../assets/amoxicilina.jpg',
      tipo: 'Antibioticos',
    },
    {
      id: 5,
      titulo: 'Antibióticos',
      descripcion: '',
      precio: 1,
      imagen: '../../assets/azitromizina.jpg',
      tipo: 'Antibioticos',
    },
    {
      id: 6,
      titulo: 'Antibióticos',
      descripcion: '',
      precio: 1,
      imagen: '../../assets/ciprofloxacino.jpg',
      tipo: 'Antibioticos',
    },
    {
      id: 7,
      titulo: 'Antihistaminicos',
      descripcion: '',
      precio: 1,
      imagen: '../../assets/losartan.jpg',
      tipo: 'Antihistaminicos',
    },
    {
      id: 8,
      titulo: 'Antihistaminicos',
      descripcion: '',
      precio: 1,
      imagen: '../../assets/enalapril.jpg',
      tipo: 'Antihistaminicos',
    },
    {
      id: 9,
      titulo: 'Antihistaminicos',
      descripcion: '',
      precio: 1,
      imagen: '../../assets/amoldipina.jpg',
      tipo: 'Antihistaminicos',
    },

    {
      id: 10,
      titulo: 'Antihipertensivos',
      descripcion: '',
      precio: 1,
      imagen: '../../assets/loratadina.jpg',
      tipo: 'Antihipertensivos',
    },
    {
      id: 11,
      titulo: 'Antihipertensivos',
      descripcion: '',
      precio: 1,
      imagen: '../../assets/cetirizina.jpg',
      tipo: 'Antihipertensivos',
    },
    {
      id: 12,
      titulo: 'Antihipertensivos',
      descripcion: '',
      precio: 1,
      imagen: '../../assets/desloratadina.jpg',
      tipo: 'Antihipertensivos',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      console.log('route', p['tipo']);
      this.tipoRoute = p['tipo'];
    });
  }
}
