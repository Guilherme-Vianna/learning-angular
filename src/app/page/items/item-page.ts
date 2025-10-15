import { Component, computed, createEnvironmentInjector, effect, inject, Inject, OnInit } from "@angular/core";
import { MatButton, MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ItemService } from '../../services/ItemService';
import { CreateItemDto } from '../../types/CreateItemDto';
import { last, lastValueFrom } from "rxjs";
import { ItemList } from "../../types/ItemList";
import { signal } from "@angular/core";


@Component({
  selector: "item-page",
  imports: [MatInputModule, MatFormFieldModule, MatLabel, MatTableModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: "./item-page.html",
})


export class ItemPage {
  readonly itemService: ItemService = inject(ItemService);

  createModelOpen = signal(false);
  columns_displayed: string[] = ['name', 'code', 'description', 'barcode'];
  data = signal<ItemList[]>([])

  formulary: FormGroup = new FormGroup({
    "name": new FormControl(),
    "code": new FormControl(),
    "description": new FormControl(),
    "barcode": new FormControl()
  }, {
    updateOn: 'submit'
  });

  fetchItems() {
    this.itemService.getAllItems().subscribe(result => {
      this.data.set(result.map(x => new ItemList(x.id, x.code, x.name, x.description, x.barcode)))
    })
  }

  constructor() {
    this.fetchItems()
  }

  async onSubmit() {
    const newItem = new CreateItemDto(
      this.formulary.value.barcode,
      this.formulary.value.code,
      this.formulary.value.description,
      this.formulary.value.name,
    );
    this.itemService.create(newItem).subscribe(() => {
      this.formulary.reset();
      this.createModelOpen.set(false);
      this.fetchItems()
    });
  }
}
