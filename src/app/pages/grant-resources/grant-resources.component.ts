import { Component, OnInit } from '@angular/core';

interface Card {
  name: string;
  imgPath: string;
}

@Component({
  selector: 'app-grant-resources',
  templateUrl: './grant-resources.component.html',
  styleUrls: ['./grant-resources.component.scss']
})
export class GrantResourcesComponent implements OnInit {

  cards: Card[] = [
    {
      name: 'Top Grants Preparation Tips Webinar',
      imgPath: '../../assets/images/cheng.png'
    },
    {
      name: '2021 AFG Communications Project eBook',
      imgPath: '../../assets/images/mask.png'
    },
    {
      name: 'ARP Funding Opportunities Guide',
      imgPath: '../../assets/images/build.png'
    },
    {
      name: 'How to Submit a Successful Grant Application Guide',
      imgPath: '../../assets/images/sir.png'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
