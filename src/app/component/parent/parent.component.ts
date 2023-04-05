import { AfterContentChecked, AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnChanges, DoCheck,AfterContentInit{

  isChild=false

  channelName="";

  constructor(){
    console.log("parent component is called")
  }

  ngOnInit(){
    console.log("parent OnInit is also called")
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnchanges is called.")
  }

  toggleChild(){
    this.isChild=!this.isChild;
  }
  ngDoCheck(): void {
    console.log("parent DoCheck is called")
  }

  ngAfterContentInit(): void {
    console.log("parent ngAfterContentInit")
  }
}
