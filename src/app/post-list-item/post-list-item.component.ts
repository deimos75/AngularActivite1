import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})


export class PostListItemComponent implements OnInit {

  // Paramètres venant du template du composant parent (données d'un post)
  @Input() titleParam: string;
  @Input() contentParam: string;
  @Input() loveItsParam: number;

  // Variables
  signeLoveIts = '';
  post: Post;


  constructor() {
  }

  ngOnInit() {
    this.post = new Post(this.titleParam, this.contentParam, this.loveItsParam);
    this.initCouleur();
  }


  // Initialisation de la couleur des posts
  initCouleur() {
    if (this.loveItsParam > 0) {
      return this.signeLoveIts = 'positif';
    } else if (this.loveItsParam < 0) {
      return this.signeLoveIts = 'negatif';
    } else {
      return this.signeLoveIts = 'zero';
    }
  }


  // Fonctions Click -> changement de la couleur des posts
  onLoveItsPlus() {
    this.loveItsParam++;
    this.couleur();
    console.log('LoveIts = ' + this.loveItsParam);
  }

  onLoveItsMinus() {
    this.loveItsParam--;
    this.couleur();
    console.log('LoveIts = ' + this.loveItsParam);
  }

}

// Classe représentant un post
export class Post {
  titre: string;
  contenu: string;
  loveIts: number;
  date: Date;

  constructor(titreParam: string, contenuParam: string, loveItsParam: number) {
    this.titre = titreParam;
    this.contenu = contenuParam;
    this.loveIts = loveItsParam;
    this.date = new Date();
  }

}
