import { Component, Input } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input('item') recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onSelectedItem() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
