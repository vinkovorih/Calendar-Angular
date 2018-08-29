import { Component, OnInit } from '@angular/core';
import {DataManipulationService} from '../data-manipulation.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  roster: any[];

  constructor(private dataService: DataManipulationService) {
  }

  ngOnInit() {
    this.dataService.getRoster().subscribe(roster => this.roster = roster);
  }

  groupBy(arr, property) {
    return arr.reduce(function(array, x) {
      if (!array[x[property]]) { array[x[property]] = []; }
      array[x[property]].push(x);
      return array;
    }, {});
  }
}
