import { Component, input, signal, computed } from '@angular/core';
import { TemplateData } from 'src/app/models/template';
import { Movement } from 'src/app/models/movement';
import { Objeto } from 'src/app/models/objeto';

@Component({
  selector: 'app-template',
  imports: [],
  templateUrl: './template.html',
  styleUrls: ['./template.scss']
})
export class Template {
  templateData = input.required<TemplateData>();

  private valuesSignal = signal(new Map<number, Map<number, number>>());


  readonly columns = computed(() => {
  const colsMap = new Map<number, Movement>();
  for (const obj of this.templateData().objects || []) {
  for (const mov of obj.movimientos || []) {
  if (!colsMap.has(mov.id)) colsMap.set(mov.id, mov);
  }
  }
  return Array.from(colsMap.values());
  });


  getValue(objId: number, movId: number): number | null {
  const map = this.valuesSignal();
  const row = map.get(objId);
  return row?.get(movId) ?? null;
  }


  setValue(objId: number, movId: number, value: number | null) {
  const map = new Map(this.valuesSignal());
  const row = new Map(map.get(objId) ?? undefined);


  if (value === null || Number.isNaN(value)) {
  row.delete(movId);
  } else {
  row.set(movId, value);
  }

  if (row.size > 0) map.set(objId, row);
  else map.delete(objId);

  this.valuesSignal.set(map);
  }

  getAllValues() {
  const out: Record<number, Record<number, number>> = {};
  for (const [objId, row] of this.valuesSignal().entries()) {
  out[objId] = {};
  for (const [movId, val] of row.entries()) out[objId][movId] = val;
  }
  return out;
  }

}
