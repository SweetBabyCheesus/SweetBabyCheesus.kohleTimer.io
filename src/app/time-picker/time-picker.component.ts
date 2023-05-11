import { Component, OnInit, Inject } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { NOTYF } from '../../shared/utils/notyf.token';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css'],
})
export class TimePickerComponent implements OnInit {
  constructor(
    private clipboard: Clipboard,
    @Inject(NOTYF) private notyf: Notyf
  ) {}
  date: any;
  showMortdog = false;
  showdanke = false;
  ngOnInit(): void {
    this.date = new Date();
    // Get timestamp in Milliseconds
    const timestamp = this.date.getTime();
    console.log('aktuelles datum als timestamp: ' + timestamp);
    this.timestamp = Math.floor(timestamp / 1000);
  }
  timestamp: any;

  timeinput(event: any) {
    let hour = event.slice(0, 2);
    let minute = event.slice(3, 5);

    //aktuelles Datum
    const date = new Date();
    console.log('aktuelles datum: ' + date);

    // Get timestamp in Milliseconds
    let time = date.getTime();
    console.log('aktuelles datum als timestamp: ' + time);
    date.setMinutes(minute);
    date.setHours(hour);
    let idk = date.getTime();
    this.timestamp = Math.floor(idk / 1000);
    //this.timestamp = event;
    console.log(Date);
    console.log(this.timestamp);
  }
  hide(){this.showMortdog = false}
  copy() {
    setTimeout(() => this.showMortdog = true, 55)
    this.clipboard.copy(
      'Mortdog sieh zu, dass du <t:' + this.timestamp + ':R> auflegst!'
    );
    setTimeout(() => this.showMortdog = false, 5000)
    this.notyf.success('Junge, ich wünsch dir n <br> Triple-W-Rauch!');
    setTimeout(() => this.showdanke = true, 1500)
    setTimeout(() => this.showdanke = false, 5000)
  }
  danke(){
    
  }
}
