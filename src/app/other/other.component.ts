import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor() { 
    console.log("In OtherComponent constructor ")
  }

  ngOnInit() {
    console.log("In OtherComponent ngOnInit ..!!");
  }

}
