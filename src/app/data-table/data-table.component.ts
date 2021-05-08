import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  reports;
  constructor(private rs: ReportService){
  }

  ngOnInit(): void {
    this.reports = this.rs.get();
    for(var i =0; i<this.reports.length; i++){
      var deleteButton = document.getElementById("deleteButton" + (i+1));
      console.log("deleteButton");
      deleteButton.onclick = function() {
    }
  }
}
}