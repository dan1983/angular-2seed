
import {Component, Input} from 'angular2/core';

@Component({
  selector: 'lovecounter',
  template:
  `<i
  		class="glyphicon glyphicon-heart"
  		[class.highlighted]="!isLiked"
  	  (click) = "onClick()">
  </i>
  <span>{{counter}}</span>`,
  styles:[`
      .glyphicon-heart {
        color:#ccc;
        cursor:pointer;
        }
        .highlighted {
          color:deepink;
        }
      `]
})

export class LoveCounterComponent {
@Input () counter = 0;
@Input () isLiked = false;


onClick(){
  this.isLiked =!this.isLiked;
  this.counter += this.isLiked?1:-1;


}








}
