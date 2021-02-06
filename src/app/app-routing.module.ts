import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactModule } from './@public/pages/contact/contact.module';
import { UsersModule } from './@admin/pages/users/users.module';

const routes: Routes = [

{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash:true,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
