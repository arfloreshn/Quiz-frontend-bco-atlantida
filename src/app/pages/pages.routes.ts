import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../shared/dashboard/dashboard.component";
import { NotfoundComponent } from "../shared/notfound/notfound.component";

import { FrmempleadosComponent } from './frmempleados/frmempleados.component';
import { FrmprofesionesComponent } from "./frmprofesiones/frmprofesiones.component";
import { FrmpuestosComponent } from "./frmpuestos/frmpuestos.component";
import { FrmclimaComponent } from './frmclima/frmclima.component';


const pagesRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, data: { titulo: 'dashboard' } },
    { path: 'empleados', component: FrmempleadosComponent, data: { titulo: 'Mantenimiento de empleados' } },
    { path: 'profesiones', component: FrmprofesionesComponent, data: { titulo: 'Mantenimiento de profesiones' } },
    { path: 'puestos', component: FrmpuestosComponent, data: { titulo: 'Mantenimiento de puestos' } },
    { path: 'clima', component: FrmclimaComponent, data: { titulo: 'Mantenimiento de puestos' } },

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent }

];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
