import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

interface Industry {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  public isMobile: boolean = false;

  industries: Industry[] = [
    {value: 'ind-0', viewValue: 'E-comerce'},
    {value: 'ind-1', viewValue: 'Retail'},
    {value: 'ind-2', viewValue: 'Sass'}
  ];

  constructor( breakpointObserver: BreakpointObserver ) {
    breakpointObserver.observe([
      '(max-width: 768px)'
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
   }

  ngOnInit(): void {
  }

}
