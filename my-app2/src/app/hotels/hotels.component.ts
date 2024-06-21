import { Component, Input, Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent {
  title = 'ma liste d\'hotels'
  @Input() comon =''; 
  @Output() addItemEvent: EventEmitter<string> = new EventEmitter();
  addItem(){
    this.addItemEvent.emit("bonjour cher parent 😁😁");
  }
}

// decorateur @Input pour la transmission des donnees du parent vers l'enfant
// decorateur @Output pour la transmission des donnees de l'enfant vers le parent
/* 
    @defer bloc used pour differer le chargement des composants d'une page 
    il est associer au @placeholder bloc qui chargera instantanement un code html intermediaire
    et du @loading bloc qui lui affichera un code html d'attente du bloc reel
    leur attribut sont "on viewport" pour @defer "minimum duree(s)" pour @placeholder et @loading
    "after" pour le loading

    Syntaxique 
    ==> @defer(on viewport) {
          ...bloc htmt reel
        } @placeholder(minimum){
          ...bloc intermediaire
        } @loading(minimum xs){
          ...bloc d'attente
        }
*/