import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-covid-form',
  templateUrl: './covid-form.component.html',
  styleUrls: ['./covid-form.component.css']
})
export class CovidFormComponent implements OnInit {
  form: FormGroup;
  existingLocations: string[] = this.rs.getExistingLocations();

  constructor(private rs:ReportService) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({name: new FormControl(''), location: new FormControl(''), phone: new FormControl(''), date: new FormControl('')});
    var reportButton = document.getElementById("reportButton");
    var reportForm = document.getElementById("reportForm");
    reportForm.style.display = "none"; 
    reportButton.onclick = function() {
      reportForm.style.display = "block";
      reportForm.scrollIntoView();
    }
  }

  onSubmit(newReport){
    var date:String = newReport.date;
    date = date.replace("T", ", ");
    newReport["reportNumber"] = this.rs.reports.length + 1;
    newReport.date = date;
    if(newReport.name!==""&&newReport.date!==""&&newReport.location!==""&&newReport.phone!==""){
    this.rs.add(newReport);
    this.existingLocations = this.rs.getExistingLocations();
    }
    else{
      window.alert("Please fill all the details to continue!");
    }
  }
}

