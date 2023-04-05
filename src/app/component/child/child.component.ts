import { AfterContentChecked,AfterViewChecked,AfterViewInit, AfterContentInit, Component ,ContentChild,DoCheck,Input,OnChanges,OnDestroy,OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements 
  OnInit,
  OnDestroy,
  OnChanges,
   DoCheck, 
   AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
    {  
  counter=0

  interval:any;

  @Input()
  channelName="";

  @ContentChild('projectedContent') projectedContent:any;
  @ViewChild('childContent',{static:false}) childContent:any
  constructor(){
    console.log("child component is called")
  }

  ngOnInit() {
    console.log("child OnInit is also called") 
    console.log('Child OnInit-' + this.projectedContent)
    console.log('Child OnInit-' + this.childContent)


    //  this.interval = setInterval(()=>{
    //   this.counter=this.counter+1;
    //   console.log(this.counter)
    // },1000);
  }

  ngOnChanges(): void {
    console.log("ngOnchanges is called.")
    console.log('Child OnChanges-' + this.projectedContent)
    console.log('Child OnChanges-' + this.childContent)

  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
    console.log("child Destroy is called")
    console.log('Child OnDestroy-' + this.projectedContent)
    console.log('Child OnDestroy-' + this.childContent)

  }

  ngDoCheck(){
    console.log("ngDoCheck is called")
    console.log('Child OnDoCheck-' + this.projectedContent)
    console.log('Child OnDoCheck-' + this.childContent)

  }

  ngAfterContentInit(): void {
    console.log("child ngAfterContentInit")
    console.log('Child AfterContentInit-' + this.projectedContent)
    console.log('Child OnContentInit-' + this.childContent)

  }

  ngAfterContentChecked(): void {
    console.log("child ngAfterContentChecked")
    console.log('Child AfterContentChecked-' + this.projectedContent)
    console.log('Child OnContentChecked-' + this.childContent)
  }
  ngAfterViewInit(){
    console.log("child ngAfterViewInit")
    console.log('Child AfterViewInit-' + this.projectedContent)
    console.log('Child OnViewInit-' + this.childContent)
  }
  ngAfterViewChecked(){
    console.log("child ngAfterViewChecked")
    console.log('Child AfterViewChecked-' + this.projectedContent)
    console.log('Child OnViewChecked-' + this.childContent)
  }
  

}
