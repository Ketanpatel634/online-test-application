import { Injectable } from '@angular/core';
import { Quizformat } from '../quizdisplay/quizformat';

@Injectable({
  providedIn: 'root'
})
export class QuizcontentsService {

	path:string =""; 
	user_option = ["","","","","","","","","",""];
	cans = [];
	currentu ="";
   
	constructor() {}

	mymethod(data:string){
		this.path = data;
	}

	User_option_update(ind:number,data:string){
		this.user_option[ind] = data; 
	}

	UserPass:any[]=[
		{
			"Ufname":"Prashant",
			"Ulname":"Singh",
			"Umail":"pras@gmail.com",
			"Upass":"dont123"

			
		},
		{
			"Ufname":"Rishu",
			"Ulname":"Singh",
			"Umail":"rishu@gmail.com",
			"Upass":"need123"
			
		}

	]

	html_content:Quizformat[] = [
		{
			qid: '1',
			qtext: 'What does the abbreviation HTML stand for?',
			op1: 'HyperText Markup Language.',
			op2: 'HighText Markup Language.',
			op3: 'HyperText Markdown Language.',
			op4: 'None of the above.',
			ans: 'HyperText Markup Language.',
		  },
		  {
			qid: '2',
			qtext: 'How many sizes of headers are available in HTML by default?',
			op1: '5',
			op2: '1',
			op3: '3',
			op4: '6',
			ans: '6',
		  },
		  {
			qid: '3',
			qtext: 'What is the smallest header in HTML by default',
			op1: 'h1',
			op2: 'h2',
			op3: 'h6',
			op4: 'h4',
			ans: 'h6',
		  },
	  
		  {
			qid: '4',
			qtext: 'What are the types of lists available in HTML?',
			op1: 'Ordered, Unordered Lists',
			op2: 'Bulleted, Numbered Lists',
			op3: 'Named, Unnamed Lists',
			op4: 'None of the above',
			ans: 'Ordered, Unordered Lists',
		  },
		  {
			qid: '5',
			qtext: 'How to create an ordered list in HTML?',
			op1: 'ul',
			op2: 'ol',
			op3: 'href',
			op4: 'b',
			ans: 'ol',
		  },
		  {
			qid: '6',
			qtext: 'HTML files are saved by default with the extension?',
			op1: '.html',
			op2: '.http',
			op3: '.ht',
			op4: 'None of the above',
			ans: '.html',
		  },
		  {
			qid: '7',
			qtext: 'We enclose HTML tags within?',
			op1: '{ }',
			op2: '( )',
			op3: '< >',
			op4: '[ ]',
			ans: '< >',
		  },
		  {
			qid: '8',
			qtext: 'What is the effect of the bold tag?',
			op1: 'It converts the text within it to bold font.',
			op2: 'It is used to write black-colored font.',
			op3: 'It is used to change the font size.',
			op4: 'None of the above',
			ans: 'It converts the text within it to bold font.',
		  },
	  
		  {
			qid: '9',
			qtext: 'How to display preformatted text in HTML?',
			op1: 'p',
			op2: 'pre',
			op3: 'hr',
			op4: 'None of the above',
			ans: 'pre',
		  },
		  {
			qid: '10',
			qtext: 'Which of the following tags doesn’t require a closing tag?',
			op1: 'br',
			op2: 'hr',
			op3: 'Both A and B',
			op4: 'None of the above',
			ans: 'Both A and B',
		  },
	]

	css_content:Quizformat[] = [
		{
			qid: '1',
			qtext: 'The full form of CSS is:',
			op1: 'Cascading Style Sheets',
			op2: 'Coloured Special Sheets',
			op3: 'Color and Style Sheets',
			op4: 'None of the above',
			ans: 'Cascading Style Sheets',
		  },
		  {
			qid: '2',
			qtext: 'How can we change the background color of an element?',
			op1: 'background-color',
			op2: 'color',
			op3: 'Both A and B',
			op4: 'None of the above',
			ans: 'background-color',
		  },
		  {
			qid: '3',
			qtext: 'How can we change the text color of an element?',
			op1: 'background-color',
			op2: 'color',
			op3: 'Both A and B',
			op4: 'None of the above',
			ans: 'color',
		  },
		  {
			qid: '4',
			qtext: 'In how many ways can CSS be written in?',
			op1: '1',
			op2: '2',
			op3: '3',
			op4: '4',
			ans: '3',
		  },
		  {
			qid: '5',
			qtext:
			  'What type of CSS is generally recommended for designing large web pages?',
			op1: 'Inline',
			op2: 'Internal',
			op3: 'External',
			op4: 'None of the above',
			ans: 'External',
		  },
		  {
			qid: '6',
			qtext: 'Which HTML tag is used to declare internal CSS?',
			op1: '<style>',
			op2: '<link>',
			op3: '<script>',
			op4: 'None of the above',
			ans: '<style>',
		  },
		  {
			qid: '7',
			qtext: 'How can we select an element with a specific ID in CSS?',
			op1: '#',
			op2: '.',
			op3: '^',
			op4: 'None of the above',
			ans: '#',
		  },
		  {
			qid: '8',
			qtext: 'How can we select an element with a specific Class in CSS?',
			op1: '#',
			op2: '.',
			op3: '^',
			op4: 'None of the above',
			ans: '.',
		  },
		  {
			qid: '9',
			qtext: 'How can we write comments in CSS?',
			op1: '/**/',
			op2: '//',
			op3: '#',
			op4: 'All of the above',
			ans: '/**/',
		  },
		  {
			qid: '10',
			qtext: 'The CSS property used to specify the transparency of an element is?',
			op1: 'opacity',
			op2: 'visibility',
			op3: 'filter',
			op4: 'radius',
			ans: 'opacity',
		  },
	]

	js_content:Quizformat[] = [
		{
			qid: '1',
			qtext: 'Javascript is an _______ language?',
			op1: 'Object-Oriented',
			op2: 'Object-Based',
			op3: 'Procedural',
			op4: 'None of the above',
			ans: 'Object-Oriented',
		  },
		  {
			qid: '2',
			qtext: 'Which of the following keywords is used to define a variable in Javascript?',
			op1: 'var',
			op2: 'let',
			op3: 'Both A and B',
			op4: 'None of the above',
			ans: 'Both A and B',
		  },
		  {
			qid: '3',
			qtext:
			  'Which of the following methods is used to access HTML elements using Javascript?',
			op1: 'getElementById()',
			op2: 'getElementByClassName()',
			op3: 'Both A and B',
			op4: 'None of the above',
			ans: 'Both A and B',
		  },
		  {
			qid: '4',
			qtext: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
			op1: 'Throws an error',
			op2: 'Ignores the statements',
			op3: 'Give a warning',
			op4: 'None of the above',
			ans: 'Ignores the statements',
		  },
		  {
			qid: '5',
			qtext: 'Which of the following methods can be used to display data in some form using Javascript?',
			op1: 'document.write()',
			op2: 'console.log()',
			op3: 'window.alert()',
			op4: 'All of the above',
			ans: 'All of the above',
		  },
		  {
			qid: '6',
			qtext: 'How can a datatype be declared to be a constant type?',
			op1: 'const',
			op2: 'var',
			op3: 'let',
			op4: 'constant',
			ans: 'const',
		  },
		  {
			qid: '7',
			qtext: 'What keyword is used to check whether a given property is valid or not?',
			op1: 'in',
			op2: 'is in',
			op3: 'exists',
			op4: 'lies',
			ans: 'in',
		  },
		  {
			qid: '8',
			qtext: 'When an operator’s value is NULL, the typeof returned by the unary operator is:',
			op1: 'Boolean',
			op2: 'Undefined',
			op3: 'Object',
			op4: 'Integer',
			ans: 'Object',
		  },
		  {
			qid: '9',
			qtext: 'What does the Javascript “debugger” statement do?',
			op1: 'It will debug all the errors in the program at runtime.',
			op2: 'It acts as a breakpoint in a program.',
			op3: 'It will debug error in the current statement if any.',
			op4: 'All of the above',
			ans: 'It acts as a breakpoint in a program.',
		  },
		  {
			qid: '10',
			qtext: 'What is the output of the following code snippet? : "print(NaN === NaN);"',
			op1: 'True',
			op2: 'False',
			op3: 'Undefined',
			op4: 'Error',
			ans: 'False',
		  },
	];
}
