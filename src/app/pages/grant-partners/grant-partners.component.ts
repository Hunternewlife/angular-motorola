import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grant-partners',
  templateUrl: './grant-partners.component.html',
  styleUrls: ['./grant-partners.component.scss']
})
export class GrantPartnersComponent implements OnInit {

  constructor() { }

  public partners = [
    "../../assets/images/education.png",
    "../../assets/images/gov.png",
    "../../assets/images/fireg.png",
    "../../assets/images/policeg.png",
    "../../assets/images/correction.png",
  ];

  ngOnInit(): void {
  }

}
