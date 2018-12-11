import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TimerService } from './timerService';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { AffichageComponent } from './affichage/affichage.component';

@NgModule({
  declarations: [
    AppComponent, AffichageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
