import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  reports = []
  constructor(private http:HttpClient) { 
  }

  get(){
    var arr = [];
     this.http.get<Object>('https://218.selfip.net/apps/ijDGYtynEX/collections/cmpt218/documents/').subscribe(
      (data)=>{
        for(var i =0; i<Object.keys(data).length;i++){
         arr.push(data[i].data);
        }
      }
    )
    this.reports = arr;
    return this.reports;
  }
  
  getDataAsPromise(){
    return this.http.get<Object>('https://218.selfip.net/apps/ijDGYtynEX/collections/cmpt218/documents/');
  }

  add(newReport){
    this.reports.push(newReport);
    var key:String = "user" + this.reports.length;
    console.log(key);
    this.http.post('https://218.selfip.net/apps/ijDGYtynEX/collections/cmpt218/documents/', {
      "key": key,
      "data": newReport
    }).subscribe((data=>{
    }))
  }

  delete(deleteReport){
    //indexOf
    //slice
  }

  getExistingLocations(){
    var locations:string[] = [];
    for(var i=0; i<this.reports.length; i++){
      if(!locations.includes(this.reports[i].location))
      locations.push(this.reports[i].location)
    }
    return locations;
  }

  geocode() {
    var coordinates = [];
    for(var i =0; i<this.reports.length; i++){
      console.log("d");
      var location:{lat, lng};
      axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: this.reports[i].location, 
          key:'AIzaSyAWuwqwu7WE9MREQiUPvnmmGWxO7peOhIY'
          }
      })
      .then(function(response){
        location = response.data.results[0].geometry.location;
        coordinates.push(location);
      })
      .catch(function(error){
        console.log(error)
      });
    }
    console.log(coordinates);
    return coordinates;
  }
}