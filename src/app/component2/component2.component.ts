import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Output() public parentEvent=new EventEmitter();

  public message1;
  
  constructor() { }

  ngOnInit() {
  }
  catchMessage(catchedMessage)
  {
    this.message1=catchedMessage.toString();
    this.parentEvent.emit(this.message1);
  }
}
