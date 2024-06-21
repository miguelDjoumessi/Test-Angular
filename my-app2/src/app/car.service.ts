import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CarService{
    cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

    getCars(): string[] {
      return this.cars;
    }
  
    getCar(id: number) {
      return this.cars[id];
    }
}

/*
    -le decorateur @injectable() permet de rendre un service(les ressources d'une classe) injectable par la DI(injecteur de dependance).
    -la fonction "inject(nom du service)" permet d'appelé le service dans un composant NB: instancier une propriete de la classe appelant avec 
*/