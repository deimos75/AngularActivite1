import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})


export class PostListComponent implements OnInit {

  // Paramètre récupérant le tableau des posts du component parent (cf html)
  @Input() postsParam: string;

  title = 'Posts';

  constructor() { }

  ngOnInit() {
  }

}
