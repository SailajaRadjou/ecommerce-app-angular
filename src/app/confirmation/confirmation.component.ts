import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var randomize = require('randomatic');
@Component({
  selector: 'app-confirmation',
  templateUrl: 'confirmation.component.html' ,
  styleUrls: ['confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  code: string;
  constructor(private route: ActivatedRoute) { }
  name: any;
  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
    
    this.code = randomize('A0', 16);
    console.log(this.name+" ---- "+this.code);
  }

}
