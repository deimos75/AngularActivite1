import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})


export class PostListItemComponent implements OnInit {

  // Paramètres venant du template d'un autre composant
  @Input() titleParam: string;
  @Input() contentParam: string;
  @Input() loveItsParam: number;
  @Input() dateParam: Date;
  
  // Variables
  signeLoveIts = '';

  constructor() {
  }
  
  ngOnInit() {
    this.couleur();
  }


  // Initialisation de la couleur des posts
  couleur(){
    if(this.loveItsParam > 0){
      return this.signeLoveIts = 'positif';
    }else if(this.loveItsParam < 0){
      return this.signeLoveIts = 'negatif';
    }else{
      return this.signeLoveIts = 'zero';
    }
  }


  // Fonctions Click -> changement de la couleur des posts
  onLoveItsPlus(){
    this.loveItsParam++;
    this.couleur();
    console.log('LoveIts = ' + this.loveItsParam);
  }

  onLoveItsMinus(){
    this.loveItsParam--;
    this.couleur();
    console.log('LoveIts = ' + this.loveItsParam);
  }

}