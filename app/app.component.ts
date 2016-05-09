import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponet} from './favorite.component';
import {LoveCounterComponent} from './lovecounter.component';
import {CounterComponent} from './counter.component';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    <courses></courses>
    <authors></authors>
   <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
   <lovecounter [counter]="post.counter" [isLiked]="post.isLiked"></lovecounter><br>
   <counter [voteCount]="post.voteCount" [myVote]="post.myVote" (vote)="onCounterChange($event)"></counter>
   `
,
  directives : [CoursesComponent,AuthorsComponent,FavoriteComponet,LoveCounterComponent,CounterComponent]
})
export class AppComponent {
	post = {
		title:"Title",
		isFavorite: false,
    isLiked: false,
    counter: 14,
    myVote:0,
    voteCount:118



	}

	onFavoriteChange($event){
		console.log($event);

	}

  onCounterChange($event){
    console.log($event);

  }



}
