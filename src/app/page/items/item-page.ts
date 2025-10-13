import {Component, inject, Inject} from "@angular/core";
import { MatButton, MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import {Form, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ItemService} from '../../services/ItemService';
import {CreateItemDto} from '../../types/CreateItemDto';


@Component({
    selector: "item-page",
    imports: [MatInputModule, MatFormFieldModule, MatLabel, MatTableModule, MatButtonModule, ReactiveFormsModule],
    templateUrl: "./item-page.html",
})

export class ItemPage {
    readonly itemService: ItemService = inject(ItemService);

    createModelOpen: boolean = false;
    columns_displayed: string[] = ['id', 'name'];
    data: ItemList[] = [{
        id: 12,
        name: "teasdas"
    }]

    formulary: FormGroup;

    constructor(itemService: ItemService) {
      this.formulary = new FormGroup({
        "name": new FormControl(),
        "code": new FormControl(),
        "description": new FormControl(),
        "barcode": new FormControl()
      },{
        updateOn: 'submit'
      })
    }

    async onSubmit() {
      const newItem = new CreateItemDto(
        this.formulary.value.barcode,
        this.formulary.value.code,
        this.formulary.value.description,
        this.formulary.value.name,
      );
      await this.itemService.create(newItem);
      this.formulary.reset();
      this.createModelOpen = false;
    }
}
