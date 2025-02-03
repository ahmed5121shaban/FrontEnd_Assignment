import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { IData } from '../../Interfaces/IData';

@Component({
  selector: 'app-number-parent',
  templateUrl: './NumberParent.component.html',
  styleUrls: ['./NumberParent.component.css']
})
export class NumberParentComponent implements OnInit {

  data!: IData;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.dataService.getData().subscribe((response) => {
      this.data = response;
    });
  }

}
