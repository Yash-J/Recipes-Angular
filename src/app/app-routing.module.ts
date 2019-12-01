import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import { AuthComponent } from './auth/auth.component';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';

const appRoutes: Routes = [
	{path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes), RecipesRoutingModule],
	exports: [RouterModule]
})
export class AppRoutingModule{}
