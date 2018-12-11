import { Component } from '@angular/core';
import { TimerService } from './timerService';
import { StateService } from './stateServece';
import { AffichageComponent } from './affichage/affichage.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TimerService, StateService]
})

export class AppComponent {
  // title = 'tpChronometre';
  private _btnPlay:string = 'Démarrer';
  // private _timer = new Timer();
  // private _state = new State();
  constructor(private _timer: TimerService, private _state: StateService) {}

  play() {
    this._timer.start();
    this._state.setPlay();
    this._btnPlay = 'Continuer';
  }

  stop() {
    this._timer.stop();
    this._state.setStop();
  }

  back() {
    this._timer.reset();
    this._state.setBack();
    this._btnPlay = 'Démarrer';
  }
}
