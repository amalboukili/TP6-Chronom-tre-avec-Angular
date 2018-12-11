export class Timer {
    private min: number = 0;
    private sec: number = 0;
    private totalSec:number = 0;
    private _timer;

    get _min(): number {return this.min; }
    get _sec(): number { return this.sec; }

    start() {
        this._timer = setInterval(() => {
            this.min = Math.floor(++this.totalSec / 60);
            this.sec = this.totalSec - this.min / 60;
        }, 1000);
    }

    stop() {
        clearInterval(this._timer);
    }

    reset() {
        this.min = this.sec = this.totalSec = 0;
    }

}