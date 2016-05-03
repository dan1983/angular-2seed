import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponet} from './favorite.component';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    <courses></courses>
    <authors></authors>
    <start></start>`,
    directives : [CoursesComponent,AuthorsComponent,FavoriteComponet]
})
export class AppComponent { }