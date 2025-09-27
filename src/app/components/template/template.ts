import { Component, input, output, OnInit, computed } from '@angular/core';
import { TemplateData } from 'src/app/models/template';

@Component({
  selector: 'app-template',
  imports: [],
  templateUrl: './template.html',
  styleUrls: ['./template.scss']
})
export class Template implements OnInit {
  templateData = input.required<TemplateData>();
  templateDataChange = output<TemplateData>();
  
  objectTotals = computed(() =>
  this.templateData().objects.map(obj =>
    obj.movimientos.reduce((acc, mov) => acc + mov.amount, 0)
  ));

  movementTotals = computed(() => {
    const data = this.templateData();
    if (data.objects.length === 0) return [];

    const numMovs = data.objects[0].movimientos.length;

    return Array.from({ length: numMovs }, (_, j) =>
      data.objects.reduce(
        (acc, obj) => acc + obj.movimientos[j].amount,
        0
      )
    );
  });

  headers : string[] = [];
  headersCounter = 0;
  footers : string[] = [];

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

    //calculo totales por objeto
    // this.updateObjectTotals();
  }

  updateAmount(objId: number, movId: number, value: string) {
    const newData: TemplateData = {
      ...this.templateData(),
      objects: this.templateData().objects.map(o =>
        o.id === objId
          ? {
              ...o,
              movimientos: o.movimientos.map(m =>
                m.id === movId
                  ? { ...m, amount: +value } 
                  : m
              )
            }
          : o
      )
    };
    this.templateDataChange.emit(newData);
    // this.updateObjectTotals();
  }

  // updateObjectTotals() {
  //   this.objectTotals = this.templateData().objects.map(obj =>
  //     obj.movimientos.reduce((acc, mov) => acc + mov.amount, 0)
  //   );
  // }


}
