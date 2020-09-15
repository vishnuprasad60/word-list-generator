import { Component } from '@angular/core';
import arrayWords from "../utils/words";
import * as math from 'mathjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  words = '';
  limit = 10;
  randomLim:number;
  randomStart:number;
  handleSlideChange(newLimit:number) {
    this.limit = newLimit;
  }

  generate() {
    this.randomLim = math.floor(math.random()*51);
    this.randomStart = math.floor(this.randomLim+1);
    this.words = arrayWords.slice(this.randomStart, this.randomLim).join(' ');
  }
}
