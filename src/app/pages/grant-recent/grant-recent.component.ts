import { Component, OnInit } from '@angular/core';

interface Post {
  title : String,
  content: String
}

@Component({
  selector: 'app-grant-recent',
  templateUrl: './grant-recent.component.html',
  styleUrls: ['./grant-recent.component.scss']
})
export class GrantRecentComponent implements OnInit {

  posts : Post[] = [
    {
      title: 'FY21 Byrne justice Assistance Grant',
      content: '$277M available to provide states and local units of government with critical funding necessary to support a range of programs.'
    },
    {
      title: 'FY21 Byrne justice Assistance Grant',
      content: '$277M available to provide states and local units of government with critical funding necessary to support a range of programs.'
    },
    {
      title: 'FY21 Urban Areas Security Initiative',
      content: '$615M in available funds, the UASI program assists high-threat, high-density Urban Areas to protect against emergencies.'
    },
    {
      title: 'FY21 Operation Stonegarden Grant',
      content: '$90M in funds, the OPSG program supports local, tribal, territorial, state and federal agencies to secure borders.'
    },
    {
      title: 'FY21 State Homeland Security Program',
      content: '$415M in available funds, the SHSP program assists state, local, tribal, & territorial efforts to protect against terror'
    },
    {
      title: 'FY21 Emergency Management Performance Grant',
      content: '$355.1M in funds, the EMPG provides grants to states to assist local, territorial, and tribal gov preparing for hazards.'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
