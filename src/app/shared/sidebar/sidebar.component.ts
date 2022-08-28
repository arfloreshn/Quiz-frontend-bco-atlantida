import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Catalogos',
        icon: 'pi pi-pw pi-file',
        items: [
          { label: 'Empleados', routerLink: "/empleados", icon: 'pi pi-fw pi-user-plus' },
          { label: 'Profesiones', routerLink: "/profesiones", icon: 'pi pi-fw pi-filter' },
          { label: 'Puestos', routerLink: "/puestos", icon: 'pi pi-fw pi-filter' },
          { label: 'Clima', routerLink: "/clima", icon: 'pi pi-fw pi-filter' }

        ]

      },
      {
        label: 'Reportes',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Empleados', routerLink: "/empleados", icon: 'pi pi-fw pi-user-plus' },
          { label: 'Profesiones', routerLink: "/profesiones", icon: 'pi pi-fw pi-filter' },
          { label: 'Puestos', routerLink: "/puestos", icon: 'pi pi-fw pi-filter' }
        ]
      },
      {
        label: 'Perfil',
        items: [
          { label: 'Personalizar', routerLink: "/empleados", icon: 'pi pi-fw pi-user-plus' },
          { label: 'Salir', routerLink: "/puestos", icon: 'pi pi-fw pi-filter' }
        ]
      },
    ];
  }

}
