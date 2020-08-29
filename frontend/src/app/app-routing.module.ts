import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomePageComponent} from './components/welcome-page/welcome-page.component';
import {FormComponent} from './components/form/form.component';

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'form', component: FormComponent},
  {path: '**', component: WelcomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
