import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit(): void {}
}
