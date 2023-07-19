import { Component, Inject, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  //Variables para el mapa de mapbox
  mapbox = (mapboxgl as typeof mapboxgl);
  // map!: mapboxgl.Map;
  map!: any;
  public lat: any = -21.529409;
  public lng: any = -64.731242;
  private style = 'mapbox://styles/mapbox/satellite-streets-v12';
  constructor(public dialogRef: MatDialogRef<MapaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.mapbox.accessToken = 'pk.eyJ1IjoiZG9naW1hcGJveCIsImEiOiJjbGs3OGRjaHUwNXF1M2xuejVjbG8wc3BpIn0.PCmcwIcWtoAqDTNR7cBUWw';
  }

  ngOnInit(): void {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.data.lng, this.data.lat]
    });
    this.map.on('load', () => {
      this.map.resize();
      new mapboxgl.Marker().setLngLat([this.data.lng, this.data.lat]).addTo(this.map);
    });
  }

}
