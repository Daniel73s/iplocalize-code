import { Component } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  public textoBuscar = '';
  public texto='';
  Buscarip() {
    if(this.esIPv4(this.textoBuscar)){
      this.texto= this.textoBuscar
    }else{
      this.textoBuscar='';
      this.texto='';
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: ' Ingrese un ip valido v4 ',
      })
    }
  }



  private esIPv4(texto: string): boolean {
    const regexIPv4 = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
    const partes = regexIPv4.exec(texto);
  
    if (!partes) {
      return false; // El texto no cumple el formato de IPv4
    }
  
    // Verificar que cada parte esté entre 0 y 255
    for (let i = 1; i <= 4; i++) {
      const numero = parseInt(partes[i], 10);
      if (isNaN(numero) || numero < 0 || numero > 255) {
        return false;
      }
    }
  
    return true; // El texto es una dirección IPv4 válida
  }
}
