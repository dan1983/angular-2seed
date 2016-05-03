import  {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
	selector: '[autoGrow]',
	host:{
		'(focus)': 'onFocus()',
		'(blur)' : 'onBlur()'
		}
})

export class 	AutoGrowDirective {
	
	constructor (private el:ElementRef, private rendere: Renderer){

	}


	onFocus(){
		this.rendere.setElementStyle(this.el.nativeElement,'width','200')

	}
	onBlur(){
		this.rendere.setElementStyle(this.el.nativeElement,'width','120')


	}
}

