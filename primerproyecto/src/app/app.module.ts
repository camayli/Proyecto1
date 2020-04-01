import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './Admin/admin-list/admin-list.component';
import { AdminEditComponent } from './Admin/admin-edit/admin-edit.component';
import { AdminViewComponent } from './Admin/admin-view/admin-view.component';
import { HttpClientModule } from '@angular/common/http';
import { CoordiEditComponent } from './Coordi/coordi-edit/coordi-edit.component';
import { CoordiListComponent } from './Coordi/coordi-list/coordi-list.component';
import { CoordiViewComponent } from './Coordi/coordi-view/coordi-view.component';
import { CoordiCreateComponent } from './Coordi/coordi-create/coordi-create.component';
import { AdminList1Component } from './Admin/admin-list1/admin-list1.component';


const routes: Routes = [
  {path: 'sesion', component: LoginComponent},
  {path: 'vista', component: AdminList1Component},
  {path: 'admin', component: AdminListComponent},
  {path: 'coordi', component: CoordiListComponent},
  {path: '', component: InicioComponent, pathMatch: 'full' },
  {path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    InicioComponent,
    AdminListComponent,
    AdminEditComponent,
    AdminViewComponent,
    CoordiEditComponent,
    CoordiListComponent,
    CoordiViewComponent,
    CoordiCreateComponent,
    AdminList1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
