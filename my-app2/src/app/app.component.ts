import { Component, Input, inject } from "@angular/core";
import { HotelsComponent } from "./hotels/hotels.component";
import { RouterOutlet, RouterLink } from "@angular/router";
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators} from "@angular/forms";
import { CarService } from "./car.service";
import { UpperCasePipe } from "@angular/common";
import { ReversePipe } from "./reverse.pipe";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl:'./app.component.html',
    styleUrls: [],
    imports: [
      HotelsComponent,
      RouterOutlet,
      RouterLink,
      FormsModule,
      ReactiveFormsModule,
      UpperCasePipe,
      ReversePipe
    ]
})
export class AppComponent {
  title = 'Test-Angular';
  ChildMessage = '';
  user = 'j\'ai ete pipé par un pipe personnalisé';
  profilUser = new FormGroup({
    nom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  display = '';
  // carService = inject(CarService);
  constructor(private carService: CarService){
    this.display = this.carService.getCars().join('; ');
  }
  receiveMesssage(message: string){
    this.ChildMessage = message;
  }
  handleSubmit(){
    alert(this.profilUser.value.nom + ' | ' + this.profilUser.value.email);
  }
}

/*
  RouterOutlet Component permet d'etablir un point de sortir pour du contenu html(affiche du code html)
  RouterLink permet de creer des liens dynamic evitant des recharge inutile de la page  
*/

/*
  -FormsModule API permet au composant de lie de manier dynamic les propriete d'un composant au formulaire
  -ngModel directive de FormsModule permettant d'etablir une liaison dynamic entre une propriete et un champs de formulaire
  -[()] permet d'etablir une liaison bidirectionnel (valeur-evenement) entre la vue et la propriete
  -reactiveFormsModule permet de rendre le traitment des formulaire plus reactif. preciser sur le form la propriete formGroup corresp avec la directive [formGroup]
  -FormControl classe du form-pakage permettant utiliser pour reprensenter les controls de formulaire (entré user,...)
  -FromGroup classe permttant de ressembler tout les formControl d'un formulaire
  -Validator class du package form permettant d'effectuer des operation de validation des entrees user (Validator.required: verifier si un champ n'est pas vide, Validator.email)
  -La propriete valid de la class formGroup permet de verifie si le formulaire est valide (sa valeur initiale est true)   
  -la fonction "inject(nom du service)" permet d'appelé le service dans un composant NB: instancier une propriete de la classe appelant avec 
  -les Pipes sont des fonction permet de modifier la facon dont les datas vont etre afficher({{data|namePipe:'attribut1'}})
*/