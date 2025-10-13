import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
import { SideBar } from './component/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
