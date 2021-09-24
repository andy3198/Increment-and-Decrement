import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';

  constructor() { }

  ngOnInit(): void {
  }
  defaultNumber1 = 0;
  defaultNumber2 = 0;
  rndNumber = (Math.random() * 10).toFixed(0);


  encriment(){
    this.defaultNumber1 =  this.defaultNumber1 += Math.floor(Math.random( ) * 10);

  }
  decriment(){
    this.defaultNumber2 =  this.defaultNumber2 -= Math.floor(Math.random( ) * 10);
  }
}
/*
export class RndNumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  defaultNumber = 0;
  rndNumber = (Math.random() * 10).toFixed(0);


  encriment(){
    this.defaultNumber =  this.defaultNumber += Math.floor(Math.random( ) * 10);

  }
  decriment(){
    this.defaultNumber =  this.defaultNumber -= Math.floor(Math.random( ) * 10);
  }
}



export class AppComponent {
  title = 'my-app';



  projectcount:number = 0;
  //same process
  accuratecount:number = 0;

  //we have created setinterval function with arrow function and
  //and set them in a variable that is projectcountstop.
  projectcountstop:any = setInterval(()=>{
    this.projectcount++;
    //we need to stop this at  particular point; will use if condition
    if(this.projectcount ==287)
    {
      //clearinterval will stop tha function
      clearInterval(this.projectcountstop);
    }

  },10) //10 is milisecond you can control it


  accuratecountstop:any = setInterval(()=>{
    this.accuratecount++;
    if(this.accuratecount == 95)
    {

      clearInterval(this.accuratecountstop);
    }
  },10)


}*/
