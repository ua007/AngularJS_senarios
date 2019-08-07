import { Component, OnInit, Output, ViewChild, AfterViewInit, EventEmitter } from '@angular/core';
//import { Component2Component } from '../component2/component2.component';


@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  // public valueFromComponent2:string;

  // @ViewChild(Component2Component,{static:false}) child;

  // ngAfterViewInit()
  // {
  //   this.valueFromComponent2=this.child.value;
  // }

 // @Output() public parentEvent = new EventEmitter();
  public message;

  sentMessage(value)
  {
    this.message=value.toString();
    //this.parentEvent.emit(this.message);
  }
 
  constructor() { }

  ngOnInit() {
  }

}
