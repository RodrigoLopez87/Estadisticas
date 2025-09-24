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
      description: "Caja de herramientas",
      movimientos: [
        { id: 1, description: "Compra inicial", amount: 10 },
        { id: 2, description: "Uso en obra", amount: -2 }
      ]
    },
    {
      id: 102,
      description: "Tornillos",
      movimientos: [
        { id: 3, description: "Reposición", amount: 200 },
        { id: 4, description: "Consumo diario", amount: -30 }
      ]
    }
  ]
};
}
