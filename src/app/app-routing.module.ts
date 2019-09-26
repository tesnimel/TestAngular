import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ResearchComponent} from './research/research.component';
import {ResultComponent} from './result/result.component';

const routes: Routes = [
  {path: 'research', component: ResearchComponent},
  {path: 'result/:words', component: ResultComponent},
  {path: '**', redirectTo: 'research', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
