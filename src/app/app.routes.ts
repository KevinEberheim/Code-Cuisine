import { Routes } from '@angular/router';
import { Start } from './pages/start/start';
import { GenerateRecipe } from './pages/generate-recipe/generate-recipe';
import { Preferences } from './pages/preferences/preferences';

export const routes: Routes = [
    { path: '', component: Start },
    { path: 'generate-recipe', component: GenerateRecipe },
    { path: 'preferences', component: Preferences }
];