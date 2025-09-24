import { Routes } from "@angular/router";
import { Home } from "./pages/home/home";
import { Config } from "./pages/config/config";
import { TemplatesPage } from "./pages/templates/templatesPage";

export const routeConfig: Routes = [
  { path: '', component: Home, title: 'Home' }, 
  { path: 'config', component: Config, title: 'Configuración' }, 
  { path: 'plantilla', component: TemplatesPage, title: 'Plantillas' }, 
];

export default routeConfig;