/// <reference types="@types/googlemaps" />

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  @ViewChild('gmap') gmapElement;
  map: google.maps.Map;

  constructor(private rs:ReportService) { }

  ngAfterViewInit() {
    var mapProp = {
      center: new google.maps.LatLng(49.2, -123),
      zoom: 10
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    var coordinates = this.rs.geocode();
    console.log(coordinates);
    var marker = [];
    for(var i =0; i<this.rs.reports.length; i++){
      console.log(coordinates[i]);
      marker.push(new google.maps.Marker({ 
        position: {"lat":coordinates[i].lat, "lng":coordinates[i].lng},
        map: this.map,
        title: this.rs.reports[i].location
      }));
    }
    const marker1 = new google.maps.Marker({ 
      position: { lat: 49.2276, lng: -123.0076 },
      map: this.map,
      title: 'Metrotown'
    });
    const marker2 = new google.maps.Marker({
      position: { lat: 49.1867, lng: -122.8490 },
      map: this.map,
      title: 'SFU Surrey'
    });
    const marker3 = new google.maps.Marker({
      position: { lat: 49.276765, lng: -122.917957 },
      map: this.map,
      title: 'SFU Burnaby'
    });

  }
}
