import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductosComponent } from './productos/productos.component';
import { DetailsCardModalComponent } from './details-card-modal/details-card-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalService } from './modal.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    CatalogoComponent,
    CardComponent,
    HomeComponent,
    CarritoComponent,
    ProductosComponent,
    DetailsCardModalComponent,

   
  ],
  imports: [BrowserModule, AppRoutingModule, MatMenuModule, MatIconModule, 
    MatDialogModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
