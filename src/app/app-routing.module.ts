import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltascComponent } from './compras/altasc/altasc.component';
import { BajascComponent } from './compras/bajasc/bajasc.component';
import { CambioscComponent } from './compras/cambiosc/cambiosc.component';
import { ComprasModule } from './compras/compras.module';
import { AltasComponent } from './usuarios/altas/altas.component';
import { BajasComponent } from './usuarios/bajas/bajas.component';
import { CambiosComponent } from './usuarios/cambios/cambios.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosComponent } from './usuarios/usuarios/usuarios.component';
import { AltasvComponent } from './ventas/altasv/altasv.component';
import { BajasvComponent } from './ventas/bajasv/bajasv.component';
import { CambiosvComponent } from './ventas/cambiosv/cambiosv.component';
import { VentasModule } from './ventas/ventas.module';

const routes: Routes = [
  {
  path:'usuarios',
  component: UsuariosModule,
  children:[
    {
      path:'altasu',
      component: AltasComponent,

    },
    {
      path:'bajasu',
      component: BajasComponent,
    },
    {
      path:'cambiosu',
      component: CambiosComponent,
    }
  ],
},
{
  path:'ventas',
  component: VentasModule,
  children:[
    {
      path:'altasv',
      component: AltasvComponent,
    },
    {
      path:'bajasv',
      component: BajasvComponent,
    },
    {
      path:'cambiosv',
      component: CambiosvComponent,
    }
  ]
},
{
  path:'compras',
  component: ComprasModule,
  children:[
    {
      path:'altasc',
      component: AltascComponent,
    },
    {
      path:'bajasc',
      component: BajascComponent
    },
    {
      path:'cambiosc',
      component: CambioscComponent,
    }
  ]
},

/*{path:'altasusu',component AltasComponent},
{path:'materias',component: MateriasComponent},
{path:'', redirectTo:'/alumno',pathMatch:'full'},
{path:'error',component: ErrorComponent},*/
{path:'', component: UsuariosComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
