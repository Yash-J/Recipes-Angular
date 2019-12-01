import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';

const appRoutes: Routes = [
	{path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes), RecipesRoutingModule],
	exports: [RouterModule]
})
export class AppRoutingModule{}
