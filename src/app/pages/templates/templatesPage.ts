import { Component } from '@angular/core';
import { Template } from 'src/app/components/template/template';
import { TemplateData } from 'src/app/models/template';

@Component({
  selector: 'app-templates',
  imports: [Template],
  templateUrl: './templatesPage.html',
  styleUrls: ['./templatesPage.scss']
})
export class TemplatesPage {
  
  newTemplateData: any;

  templateData: TemplateData = {
  id: 1,
  description: "Control de stock",
  objects: [
      {
        id: 101,
        description: "Objeto1",
        movimientos: [
          { id: 1, description: "Entrada", amount: 0 },
          { id: 2, description: "Salida", amount: 0 },
          { id: 3, description: "Entrada2", amount: 0 },
          { id: 4, description: "Salida2", amount: 0 },
          { id: 5, description: "Entrada3", amount: 0 },
          { id: 6, description: "Salida3", amount: 0 }
        ]
      },
      {
        id: 102,
        description: "Objeto2",
        movimientos: [
          { id: 1, description: "Entrada", amount: 1 },
          { id: 2, description: "Salida", amount: 2 },
          { id: 3, description: "Entrada2", amount: 1 },
          { id: 4, description: "Salida2", amount: 2 },
          { id: 5, description: "Entrada3", amount: 1 },
          { id: 6, description: "Salida3", amount: 2 }
        ]
      }
    ]
  };

  onPrint() {
    this.newTemplateData = JSON.stringify(this.templateData, null, 2);
  }
}
