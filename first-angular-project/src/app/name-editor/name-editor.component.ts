import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {
  accountInfo!: FormGroup;

  constructor() { }

  ngOnInit(): void {
     this.accountInfo = new FormGroup({
       'emailName' : new FormControl(),
       'thePassword' : new FormControl()
     })
  }

  showInputs () {
    console.log(this.accountInfo.value);
  }
}
