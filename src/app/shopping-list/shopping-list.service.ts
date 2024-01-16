import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService implements OnInit {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addShoppingItem(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
