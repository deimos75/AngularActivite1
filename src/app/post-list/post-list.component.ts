import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})


export class PostListComponent implements OnInit {

  // Création d'un paramètre récupérant le tableau des posts d'un autre component (html)
  @Input() postsParam: string;

  title = 'Posts';

  constructor() { }

  ngOnInit() {
  }

}
