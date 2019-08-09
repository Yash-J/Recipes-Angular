import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	@Output()recipeWasSelected=new EventEmitter<Recipe>();
recipes:Recipe[]=[
	new Recipe('Test Recipe 1','this is simply a test','https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-3-1.jpg'),
	new Recipe('Test Recipe 2','this is simply a test','https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-3-1.jpg')
];
  constructor() { }

  ngOnInit() {
  }
	onRecipeSelected(recipe:Recipe){
		this.recipeWasSelected.emit(recipe);

	}
}
