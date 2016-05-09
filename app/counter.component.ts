import {Component,Input,Output,EventEmitter} from 'angular2/core';


@Component ({
  selector: 'counter',
  template:
  `<div class="container-vote">
  <i class="glyphicon glyphicon-menu-up vote button"
  		[class.ligt]="myVote == 1"

  		(click) = "upVote()">
  </i><br>
  <span>{{voteCount + myVote }}</span><br>
  <i class="glyphicon glyphicon-menu-down vote button"
  		[class.dark]="myVote == -1"

  		(click) = "downVote()"><br>
  </i>
  </div><br>

  `,
  style:[
    	`.container-vote i,.container-vote span{
          width:20px;
      },
      .glyphicon-menu-down-dark, glyphicon-menu-up-dark{
        color: grey;

      },
      .glyphicon-menu-down-light, glyphicon-menu-up-light{
        color: yelow ;

      }`
  ]
  })

export class CounterComponent {

  @Input() voteCount = 0;
  @Input() myVote = 0;
  @Output() vote = new EventEmitter();

  upVote() {
    if(this.myVote==1)
    return;
    this.myVote++;
		this.vote.emit({myVote:this.myVote});

	}
  downVote() {
    if(this.myVote==-1)
    return;
    this.myVote--;
	  this.vote.emit({myVote:this.myVote});
  }











}
