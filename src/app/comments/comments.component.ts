import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  title = 'comment';
  likes: number = 0;
  dislikes: number = 0;
  likes2: number = 0;
  dislikes2: number = 0;

  likesButtonClick() {
    this.likes++;
  }

  dislikeButtonClick() {
    this.dislikes++;
  }

  likesButtonClick1() {
    this.likes++;
  }

  dislikeButtonClick1() {
    this.dislikes++;
  }

  ngOnInit(): void {}
}
