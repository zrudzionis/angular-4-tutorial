import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { DropdownDirective } from './shared/dropdown.directive';
import { StorageService } from './shared/storage.service';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { IngredientsService } from './shopping-list/ingredients.service';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipesService } from './recipes/recipes.service';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,

    DropdownDirective,

    ShoppingListComponent,
    ShoppingEditComponent,

    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    HeaderComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    AuthComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    StorageService,
    IngredientsService,
    RecipesService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
