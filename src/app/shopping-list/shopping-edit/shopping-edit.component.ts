import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm!: NgForm;
  subscription!: Subscription;
  editMode = false;
  editedItemNumber!: number;
  editedItem!: Ingredient;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.subscription = this.shoppingService.startEditing.subscribe(
      (index: number) => {
        this.editedItemNumber = index;
        this.editMode = true;
        this.editedItem = this.shoppingService.getEditIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    console.log(newIngredient);

    if (this.editMode) {
      this.shoppingService.updateIngredient(
        this.editedItemNumber,
        newIngredient
      );
    } else {
      this.shoppingService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingService.deleteIngredient(this.editedItemNumber);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
