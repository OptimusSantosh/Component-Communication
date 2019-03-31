import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import {DataService} from '../app/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  // When @Input is used in Child to pass data from parent to child 
  // In Html we need [childMessage] = "parentMessage"
  parentMessage = "message from parent";

  // When ViewChild is used to send data from parant to Child
  // Here we need to import @ViewChild and implement AfterViewInit
  // As you can see I need to import ChildComponent too and pass it down to @ViewChild then in ngAfterViewInit and ngOnInit I need // to set local messageFromViewChild variable to the variable which is used in ChildComponent ie messageFromChild.
  @ViewChild(ChildComponent) child;
  
  messageFromViewChild:string;


  // Below is the variable messageFromOutputChild which is used to capture message from chid. This is an example of output and
  // event emitter , here We need $event to get the value.
  messageFromOutputChild: string;

  recieveMessageFromChild($event) {
    this.messageFromOutputChild = $event; 
  }

  messageFromService: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.messageFromViewChild = this.child.messageFromChild;
    this.data.currentMessage.subscribe(messageFromService => this.messageFromService = messageFromService)
  }

  ngAfterViewInit() {
    //this.message = this.child.messageFromChild;
  }

}