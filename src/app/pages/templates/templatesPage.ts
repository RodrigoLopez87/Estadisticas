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
  
  templateData: TemplateData = {
  id: 1,
  description: "Control de stock",
  objects: [
      {
        id: 101,
        description: "Objeto1",
        movimientos: [
          { id: 1, description: "Entrada", amount: 10 },
          { id: 2, description: "Salida", amount: 5 },
          { id: 3, description: "Entrada2", amount: 10 },
          { id: 4, description: "Salida2", amount: 5 }
        ]
      },
      {
        id: 102,
        description: "Objeto2",
        movimientos: [
          { id: 1, description: "Entrada", amount: 10 },
          { id: 2, description: "Salida", amount: 5 },
          { id: 3, description: "Entrada2", amount: 10 },
          { id: 4, description: "Salida2", amount: 5 }
        ]
      }
    ]
  };
}
