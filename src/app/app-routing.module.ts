import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clients', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
