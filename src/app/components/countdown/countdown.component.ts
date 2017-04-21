import { Component, OnInit } from '@angular/core';

declare var moment: any;

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit{
  oneDay = 24*60*60*1000;

  today = new Date();
  mday = new Date(2018,1,22);

  days=0;

  now = moment(new Date()); //todays date
  end = moment("2018-1-22"); // another date
  duration = moment.duration(this.end.diff(this.now));
  daysm = this.duration.asDays();
  remDays = Math.ceil(this.daysm);


  constructor() {

//console.log("cop loaded "+this.date);
  }

  ngOnInit(){
  // this.days = Math.round(Math.abs((this.mday.getTime() - this.today.getTime())/(this.oneDay)));
  // console.log("rem days: "+this.days);
  // console.log("dates "+this.today+"---"+this.mday);
  // console.log(this.daysm);
  }


}
