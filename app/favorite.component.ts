import {Component} from 'angular2/core';

@Component ({

	selector:'start',
	template: `
	<i
		class="glyphicon"
		[class.glyphicon-star-empty]="!isFavorite"
		[class.glyphicon-star]="isFavorite"
		(click) = "onClick()"
	>
	</i>
	`
})

export class FavoriteComponet {
	isFavorite =false;

	onClick(){
		this.isFavorite = !this.isFavorite;

	}


}





