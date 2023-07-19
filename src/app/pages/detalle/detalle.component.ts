import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MapaComponent } from 'src/app/modals/mapa/mapa.component';
import { IplService } from 'src/app/services/ipl.service';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnChanges {
  @Input()
  ip: string = '';

  info: any = {};
  constructor(private ipl: IplService, public dialog: MatDialog) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["ip"]) {
      this.info_ip(this.ip);
    }
  }

  info_ip(ip?:string) {
    this.ipl.getIP(ip).then((resp: any) => {
      this.info = resp;
      console.log(resp);
      
    });
  }

  abrirUbicacion(lat: number, lng: number): void {
    this.dialog.open(MapaComponent, {
      data: {
        lat,
        lng
      },
      width: '90%', // Establece el ancho fijo deseado
      height: '90%', // Establece el alto fijo deseado
    });
  }

}
