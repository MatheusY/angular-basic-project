import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input('item') recipe: Recipe;
  @Output() selectedItem = new EventEmitter<void>();

  onSelectedItem() {
    this.selectedItem.emit();
  }
}
