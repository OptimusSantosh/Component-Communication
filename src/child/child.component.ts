import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childMessage: string;

  messageUsingOutput: string = "Example on how output and EventEmitter works";

  messageFromChild = "Example on how ViewChild and AfterViewInit works";

  @Output() messageEvent = new EventEmitter<string>();

  sendMessageFromChild(){
    this.messageEvent.emit(this.messageUsingOutput);
  }
  
  constructor() { }

  ngOnInit() {
  }

}