import { Component, Input, OnInit } from '@angular/core';
// import { Mflow } from '../mflow';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  @Input() createQuote: any;
  constructor() { }

  ngOnInit(): void {
  }

}
