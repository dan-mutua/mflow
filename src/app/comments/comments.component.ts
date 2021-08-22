import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
    title= 'comment'
  likes: number=0;
  dislikes: number=0;

  likeButtonClick(){
    this.likes++;
  }

  dislikeButtonClick(){
   this.dislikes++;
  }

  ngOnInit(): void {
  }

}
