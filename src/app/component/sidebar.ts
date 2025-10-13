import { Component } from "@angular/core";
import { MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer } from "@angular/material/sidenav";

@Component({
    selector: 'sidebar',
    imports: [MatDrawer, MatDrawerContainer],
    templateUrl: './sidebar.html'
})

export class SideBar {
    isOpen = false;
}
