import { Component, OnInit } from '@angular/core';
import { Mflow } from '../mflow';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  mflows: Mflow[] = [
    new Mflow(1, 'Mandela', "It always seems impossible until it's done-",0,0),
    new Mflow(2,
      'Steve Jobs',
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -",0,0
    ),
    new Mflow(3,
      'Mother Teresa',
      'Spread love everywhere you go. Let no one ever come to you without leaving happier. -',0,0
    ),
    new Mflow(4,
      'Aristotle',
      'It is during our darkest moments that we must focus to see the light. -',0,0
    ),
    new Mflow(5,
      'Thomas A. Edison',
      "Many of life's failures are people who did not realize how close they were to success when they gave up. -",0,0
    ),
    new Mflow(6,
      'Marilyn Monroe',
      "Keep smiling, because life is a beautiful thing and there's so much to smile about. -",0,0
    ),
    new Mflow(7,
      'Bob Marley',
      'Love the life you live. Live the life you love. -',0,0
    ),
  ];

  title = 'comment';
  get quoteFunc(){
    return this.createQuote.bind(this);
  }
  createQuote(author:string, quote:string){
    let num = this.mflows.length+1
    this.mflows.push(
      new Mflow(num, author, quote, 0,0)
    )
  }

  likesButtonClick(index:any) {
    this.mflows[index].likes += 1;
  }

  dislikeButtonClick(index:any) {
    this.mflows[index].dislikes += 1;
  }

 

  ngOnInit(): void {}
}
