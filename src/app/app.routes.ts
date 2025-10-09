import { Routes } from '@angular/router';
import { ItemPage } from './page/items/item-page';

export const routes: Routes = [
    {
        "path": "",
        "component": ItemPage
    },
    {
        "path": "items",
        "component": ItemPage
    }
];
