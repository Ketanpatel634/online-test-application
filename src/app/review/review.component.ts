import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quizformat } from '../quizdisplay/quizformat';
import { QuizcontentsService } from '../services/quizcontents.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
	point:number = 0;
	userans:any[];
	cans:string[];
	filecontent:any [];
	constructor(private _content:QuizcontentsService) { }

	ngOnInit(): void {

		if(this._content.path=="HTML"){
			this.filecontent = this._content.html_content;	
		}
		else if(this._content.path=="CSS"){
			this.filecontent = this._content.css_content;
		}
		else{
			this.filecontent = this._content.js_content;
		}

		this.userans = this._content.user_option;
		this.cans = this._content.cans;
		for(var i=0;i<10;++i){
			if(this.userans[i].length==0){
				this.filecontent[i]["uans"] = "Not Attempted";
			}
			else{
				this.filecontent[i]["uans"] = this.userans[i];
			}
			
			if(this.userans[i]==this.cans[i]){
				this.filecontent[i]["col"] = true;
			}
			else{
				this.filecontent[i]["col"] = false;
			}
		}
		this.score();

	}
	score(){
		for(var i=0;i<10;++i){
			if(this.userans[i]==this.cans[i]){
				this.point+=10;
			}
			
		}
	}
}
