import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  stringProperty = "Hello String";
  intProperty = 40;

  colorProperty = "green";

  constructor() { }

  ngOnInit() {
  }

  applyStyle() {
    // console.log("applyStyle called ..!!!");
    return false;
  }

  changeIntProperty() {
    this.intProperty = 55;
  }
}
