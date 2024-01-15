import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;
  @Output() addShoppingItem = new EventEmitter<Ingredient>();

  onAdd() {
    this.addShoppingItem.emit({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value,
    });
  }
}
