import {Component} from '@angular/core';
import { Sidenav } from './sidenav/sidenav';
import { RouterModule } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Sidenav, RouterModule, Header, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  title = 'default';
}
