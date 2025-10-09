import { Component } from "@angular/core";
import { MatButton, MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";


@Component({
    selector: "item-page",
    imports: [MatTableModule, MatButtonModule],
    templateUrl: "./item-page.html"
})

export class ItemPage {
    columns_displayed: string[] = ['id', 'name'];
    data: ItemList[] = [{
        id: 12,
        name: "teasdas"
    }]
}