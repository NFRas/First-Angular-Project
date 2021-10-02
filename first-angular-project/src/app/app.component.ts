import { Component } from '@angular/core';

@Component ({
  selector: 'app-component-overview',
  templateUrl: './component-overview.component.html', 
  styleUrls: ['./component-overview.component.css'],
})

export class componentOverviewComponent {

}

//components with manual template and style (instead of inserting sheets)

import {  mycomponent } from '@angular/core';

@mycomponent ({
  selector: 'yellow-world',
  template: `<h1> Header goes like this </h1>
            <p> and the paragraph goes like this</p>`,
  styles: [ `h1 {font-weight: normal; }`]
})

export class yellowWorldComponent {
  
}