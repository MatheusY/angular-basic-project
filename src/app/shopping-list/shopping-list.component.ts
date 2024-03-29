import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private igChangeSub: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => (this.ingredients = ingredients)
    );
    this.loggingService.printLog('Hello from Shopping list component ngOnit');
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
