import { Injectable } from '@angular/core';
@Injectable()

export class StateService {
    private _play: boolean = true;
    private _stop: boolean = false;
    private _back: boolean = false;

    get stop(): boolean { return this._stop; }
    get play(): boolean { return this._play; }
    get back(): boolean { return this._back; }

    setStop() {
        this._stop = false;
        this._play = this._back = true;
    }

    setPlay() {
        this._stop = true;
        this._play = this._back = false;
    }

    setBack() {
        this._play = true;
        this._stop = this._back = false;
    }
}
