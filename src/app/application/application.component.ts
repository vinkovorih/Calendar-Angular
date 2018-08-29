import { Component, OnInit } from '@angular/core';
import {DataManipulationService} from '../data-manipulation.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor(private dataService: DataManipulationService) { }

  application: any = {};
  countries: any[] = [];
  ngOnInit() {
    this.dataService.getCountries().subscribe(res => this.countries = res);
  }

  applicate(){
    this.dataService.applicate(this.application).subscribe(
      result => alert(result.message)
    )
  }



}
