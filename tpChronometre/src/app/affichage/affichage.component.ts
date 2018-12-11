import { Component, OnInit } from '@angular/core';
import {TimerService } from '../timerService';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {

  constructor(private _timer: TimerService) { }

  ngOnInit() {
  }

}
