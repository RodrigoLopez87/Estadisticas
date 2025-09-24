import { Routes } from "@angular/router";
import { Home } from "./pages/home/home";
import { Config } from "./pages/config/config";
import { Templates } from "./pages/templates/templates";

export const routeConfig: Routes = [
  { path: '', component: Home, title: 'Home' }, 
  { path: 'config', component: Config, title: 'Configuración' }, 
  { path: 'plantilla', component: Templates, title: 'Plantillas' }, 
];

export default routeConfig;