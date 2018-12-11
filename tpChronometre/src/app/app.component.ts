import { Component } from '@angular/core';
import { Timer } from './timer';
import { State } from './state';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tpChronometre';
  private _btnPlay:string = 'Démarrer';
  private _timer = new Timer();
  private _state = new State();

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
