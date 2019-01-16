// Gère les import de toute l'appli
// Déclare tous les composants de l'appli

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { FormsModule } from '@angular/forms';   // Two ways binding

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports:[
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
