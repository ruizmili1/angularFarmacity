import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsCardModalComponent } from './details-card-modal/details-card-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  producto: any;
  open: any;

  constructor(private modalService: ModalService) { }

  verDetalle() {
    this.modalService.open(DetailsCardModalComponent, {
      data: { producto: this.producto },
    });
  }

}
