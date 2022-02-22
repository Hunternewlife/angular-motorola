import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public isMobile: boolean = false;

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
