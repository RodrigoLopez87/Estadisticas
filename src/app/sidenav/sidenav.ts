import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  imports: [RouterLink, NgClass],
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.scss'],
})
export class Sidenav {
    collapsed = true;
    navData = navbarData;

    toggleCollapse(): void {
        this.collapsed = !this.collapsed;
    }

    closeSidenav(): void {
        this.collapsed = true;
    }
}