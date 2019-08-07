import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public message;

  sentMessage(msg)
  {
    this.message=msg.toString();
  }
  constructor() { }

  ngOnInit() {
  }

}
