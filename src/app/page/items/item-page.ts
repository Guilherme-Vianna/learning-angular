import { Component } from "@angular/core";
import { MatButton, MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import {Form, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';


@Component({
    selector: "item-page",
  imports: [MatInputModule, MatFormFieldModule, MatLabel, MatTableModule, MatButtonModule, ReactiveFormsModule],
    templateUrl: "./item-page.html"
})

export class ItemPage {
    columns_displayed: string[] = ['id', 'name'];
    data: ItemList[] = [{
        id: 12,
        name: "teasdas"
    }]

    formulario: FormGroup;

    constructor() {
      this.formulario = new FormGroup({
        "name": new FormControl(),
        "code": new FormControl(),
        "description": new FormControl(),
        "barcode": new FormControl()
      },{
        updateOn: 'submit'
      })

    }

    onSubmit() {
        console.log(this.formulario.value);
    }
}
