import { Component } from '@angular/core';
import { Oficina } from 'src/app/models/oficinas';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [MatCardModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {

  oficinas: Oficina[] = [
    { id: 1, name: 'Oficina 1', status: true },
    { id: 2, name: 'Oficina 2', status: false },
    { id: 3, name: 'Oficina 3', status: true },
    { id: 4, name: 'Oficina 4', status: true },
    { id: 5, name: 'Oficina 5', status: false },
    { id: 6, name: 'Oficina 6', status: true },
    { id: 7, name: 'Oficina 7', status: true },
    { id: 8, name: 'Oficina 8', status: true },
  ];

}