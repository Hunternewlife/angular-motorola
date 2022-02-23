import { Component, OnInit } from '@angular/core';

interface Perk {
  name: string;
  iconPath: string;
  info: string;
}

@Component({
  selector: 'app-grant-industry',
  templateUrl: './grant-industry.component.html',
  styleUrls: ['./grant-industry.component.scss']
})
export class GrantIndustryComponent implements OnInit {

  perks: Perk[] = [
    {
      name: 'Cybersecurity Government Grants', 
      iconPath: '../../assets/images/screen.png', 
      info: 'Cybersecurity grants are available to help upgrade your local government, technology and IT technology.'
    },
    {
      name: 'Education Government Grants', 
      iconPath: '../../assets/images/hat.png', 
      info: 'Access the technology your school needs to keep everyone safe. Leverage a private network to ensure learning extends on and off campus.'
    },
    {
      name: 'Fire & Emergency Medical Services Grants', 
      iconPath: '../../assets/images/fireman.png', 
      info: 'Grant programs are available to help fire and emergency services professionals stay on top of the technology changes.'
    },
    {
      name: 'Government Healthcare Grants', 
      iconPath: '../../assets/images/health.png', 
      info: 'Healthcare grants are available to help your critical medical infrastructure conduct safe and efficient operations in emergencies.'
    },
    {
      name: 'Police & Law Enforcement Grants', 
      iconPath: '../../assets/images/police.png', 
      info: 'Grant programs for police and law enforcement are available to upgrade communications technology to keep your communities and officers safe.'
    },
    {
      name: 'Port Security & Transportation Grants', 
      iconPath: '../../assets/images/delivery.png', 
      info: 'Port security grant programs are available to the transportation and port security industry to help keep communities productive, cleaner and safely on the move.'
    }
    
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
