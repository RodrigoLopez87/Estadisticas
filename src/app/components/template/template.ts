import { Component, input } from '@angular/core';
import { TemplateData } from 'src/app/models/template';

@Component({
  selector: 'app-template',
  imports: [],
  templateUrl: './template.html',
  styleUrls: ['./template.scss']
})
export class Template {
  templateData = input.required<TemplateData>();
}
