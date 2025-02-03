import { Component, Input, OnInit } from '@angular/core';
import { IData } from '../../Interfaces/IData';

@Component({
  selector: 'app-number-header',
  templateUrl: './NumberHeader.component.html',
  styleUrls: ['./NumberHeader.component.css']
})
export class NumberHeaderComponent {
  @Input() data!: IData;
  constructor() { }

  dropDownHide(event:HTMLDivElement){
    event.classList.add("hidden")
    event.classList.remove("block")
  }
  dropDownShaw(event:HTMLDivElement){
    event.classList.add("block")
    event.classList.remove("hidden")
  }
}
