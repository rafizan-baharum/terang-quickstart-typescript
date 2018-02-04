import {Component} from '@angular/core';
@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage {

  public constructor() {

    // variable declaration
    let count: number;
    let arrayOfNumber: number[];

    // variable assignment
    count = 10;
    arrayOfNumber = [10, 11, 12, 121, 11, 212];

    // print out
    console.log('count: ' + count);
    console.log('arrayOfNumber: ' + arrayOfNumber);

  }
}
