import { Component, OnInit,ChangeDetectorRef } from '@angular/core';


declare var moment: any;

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit{
  // oneDay = 24*60*60*1000;
  //
  // today = new Date();
  // mday = new Date(2018,1,22);

  remDays = 0;
  now = null;
  end = null;
  duration = null;
  daysm = 0;




  constructor() {

//console.log("cop loaded "+this.date);
  }

  ngOnInit(){
  // this.days = Math.round(Math.abs((this.mday.getTime() - this.today.getTime())/(this.oneDay)));
  // console.log("rem days: "+this.days);
  // console.log("dates "+this.today+"---"+this.mday);
  // console.log(this.daysm);
      setTimeout(()=> this.do(), 500);
  }


  do(){
    this.now = moment(new Date()); //todays date
    //console.log (new Date('2011-04-12'.replace(/-/g, "/")));
    this.end = moment(new Date('2018-01-22'.replace(/-/g, "/"))); // another date
    this.duration = moment.duration(this.end.diff(this.now));
    this.daysm = this.duration.asDays();
    this.remDays = Math.ceil(this.daysm);

  }

}
