import { Component, OnInit } from '@angular/core';
import {MathserviceService} from '../mathservice.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css'],

  //May be can get exclusive seperate instance of service using 'providers' as below
  providers:[MathserviceService]
})
export class MathComponent implements OnInit {

  //injecting of math service happens in ctor
  constructor(private mathSvc:MathserviceService) {

    console.log("In ctor  of MathComponent : " + mathSvc.add(3,4));

   }

  ngOnInit() {
    console.log("In ngOnInit of math : " + this.mathSvc.result);
  }

}
