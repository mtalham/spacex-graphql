import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {LaunchListComponent} from './launch-list/launch-list.component';
import {LaunchDetailsComponent} from './launch-details/launch-details.component';

const routes: Routes = [
  {path: '', component: LaunchListComponent},
  {path: ':id', component: LaunchDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
