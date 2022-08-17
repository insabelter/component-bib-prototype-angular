import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() timeLimit : number = 5;
  running : boolean = false;
  @Output() runningChanged = new EventEmitter<Boolean>();
  timeLeft : number = 0;
  interval : any;

  constructor() { }

  ngOnInit(): void {
    this.timeLeft = this.timeLimit;
    this.startTimer()
  }

  resetTimer() {
    this.timeLeft = this.timeLimit;
    clearInterval(this.interval);
    this.startTimer()
  }

  startTimer() {
    this.running = true;
    this.runningChanged.emit(true);
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.running = false;
        this.runningChanged.emit(false);
      }
    },1000)
  }

  pauseTimer() {
    this.running = false;
    this.runningChanged.emit(false);
    clearInterval(this.interval);
  }

}
