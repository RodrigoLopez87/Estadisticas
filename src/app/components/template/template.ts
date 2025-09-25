import { Component, input, signal, computed, OnInit } from '@angular/core';
import { TemplateData } from 'src/app/models/template';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-template',
  imports: [],
  templateUrl: './template.html',
  styleUrls: ['./template.scss']
})
export class Template implements OnInit {
  templateData = input.required<TemplateData>();
  headers : string[] = [];
  headersCounter = 0;
  footers : string[] = [];
  private valuesSignal = signal(new Map<number, Map<number, number>>());

  ngOnInit() {
    this.headers = ["Objeto"];

    // si hay al menos un objeto, tomar sus movimientos
    if (this.templateData().objects.length > 0) {
      const primerObjeto = this.templateData().objects[0];
      const movimientos = primerObjeto.movimientos.map(m => m.description);
      this.headers.push(...movimientos);
    }
    this.headers.push("Total");
    this.headersCounter = this.headers.length;

    this.footers = ["Totales"];
    if (this.templateData().objects.length > 0) {
      const primerObjeto = this.templateData().objects[0];
      const movimientos = primerObjeto.movimientos.map(m => m.description);
      this.footers.push(...movimientos);
    }
    this.footers.push("");
  }


}
