import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
     private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://torange.biz/photo/6/IMAGE/eggs-egg-chicken-flamenco-recipes-julia-6050.jpg',[
            new Ingredient('burger',5),
            new Ingredient('meat', 4)
        ]),
        new Recipe('A Test Recipe', 'This is simply a test', 'https://torange.biz/photo/6/IMAGE/eggs-egg-chicken-flamenco-recipes-julia-6050.jpg',[
            new Ingredient('meat',10),
            new Ingredient('french fries', 20)
        ])
      ];
constructor(private slService:ShoppingListService){

}
      getRecipes(){
          return this.recipes.slice();
      }
      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
} 