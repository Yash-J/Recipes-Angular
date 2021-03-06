import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import * as RecipeActions from '../recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  /*styleUrls: ['./app.component.css']*/
})

export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(private store: Store<fromApp.AppState> ) {}
  onSaveData() {
   // this.dataStorageService.storeRecipes();
   this.store.dispatch(new RecipeActions.StoreRecipes());
  }
  onFetchData() {
  //  this.dataStorageService.fetchRecipes().subscribe();
  this.store.dispatch(new RecipeActions.FetchRecipes());
  }
   ngOnInit() {
     this.userSub = this.store.select('auth').pipe(map( authState => authState.user )).subscribe(user => {
      // this.isAuthenticated = !user ? false : true;
      this.isAuthenticated = !!user ;
     });
   }
   ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
