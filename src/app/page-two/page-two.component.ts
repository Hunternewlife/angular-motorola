import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

interface Card {
  name: string;
  iconName: string;
  items: string[];
}

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  cards: Card[] = [
    {
      name: "Mission-Critical Communications", 
      iconName: "settings_remote",
      items: ["P25 Police Radios", "P25 Fire Radios", "Education Portable Radios", "Professional Portable Radios", "Healthcare Portable Radios", "Fire Pager Fire", "Station Alerting", "Fire Personnel Accountability"]
    },
    {
      name: "Video Security & Access Control", 
      iconName: "chrome_reader_mode",
      items: ["Police Body-Worn Cameras", "Police License Plate Readers", "Police In Car Video", "Police Video Surveillance", " Education Video Security", "Healthcare Video Security", "Healthcare Access Control"]
    },
    {
      name: "Command Center Software", 
      iconName: "screen_lock_landscape",
      items: ["Police NG9-1-1 Software", "Police Dispatch Software (CAD)", "Police Records Management Software (RMS)", "Police Evidence Management"]
    },
    {
      name: "Cybersecurity Services", 
      iconName: "security",
      items: ["Cybersecurity Advisory Services", "Managed Security Services", "Cybersecurity Training", "Security Patching"]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    center: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    margin: 10,
    dots: false,
    navSpeed: 600, 
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      600: {
        items: 2
      },
      875: {
        items: 3
      },
      1200: {
        items: 4
      }
    },
    nav: true
  }
}
