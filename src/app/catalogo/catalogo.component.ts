import { Component, Input, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  // getProductosFiltrados(): any {
  // throw new Error('Method not implemented.');
  // }
  id: number = 0;
  titulo: string = '';
  descripcion: string = '';
  precio: number = 0;
  imagen: string = '';

  tarjetas: any[] = [
    {
      id: 1,
      titulo: 'Antimicótico',
      imagen: '../../assets/fluconazol150mg.jpg',
      descripcion:
        'Fluconazol se utiliza para tratar las infecciones por hongos, incluidas las infecciones por levaduras de la vagina, la boca, la garganta, el esófago ,abdomen, pulmones, sangre y otros órganos.',
      precio: ' $ 6,000',
    },
    {
      id: 2,
      titulo: 'Ansiolítico ',
      imagen: '../../assets/diazepam.png',
      descripcion:
        'Diazepam se emplea para tratar la ansiedad y como relajante muscular, entre otros usos. El diazepam, más conocido por su nombre comercial, Valium, es un fármaco de la familia de las benzodiacepinas con efecto ansiolítico, sedante, anticonvulsivante y miorrelajante.',
      precio: ' $ 4,349',
    },
    {
      id: 3,
      titulo: 'Antiviral',
      imagen: '../../assets/aciclovir.png',
      descripcion:
        'Aciclovir se usa para reducir el dolor y acelerar la curación de las heridas o ampollas en las personas que tienen varicela, herpes zóster y en aquellas que tienen por primera vez o que vuelven a tener brotes del herpes',
      precio: '$ 15,500',
    },
    {
      id: 4,
      titulo: 'Antipsicótico',
      imagen: '../../assets/clorpromazina.png',
      descripcion:
        'La clorpromazina se usa para tratar los síntomas de esquizofrenia y otros trastornos psicóticos',
      precio: '$ 9,000',
    },
  ];
  constructor() {}
  ngOnInit() {}

  // productos: any[] = [];
  // categoriaSeleccionada: string = '';

  // constructor(private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.http.get('assets/productos.json').subscribe((data: any) => {
  //     this.productos = data;
  //   });
  // }
  // @Input() productos: any[] = [];
}
