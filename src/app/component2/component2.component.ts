import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  
  // public value="Utkarsh";

  @Output() public childEvent=new EventEmitter<string>();

  function(childInput)
  {
    //document.write(childInput);
    this.childEvent.emit(childInput);
  }
  constructor() { }

  ngOnInit() {
  }

}
