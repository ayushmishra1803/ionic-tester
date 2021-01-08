import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleDeepLinkPage } from './example-deep-link.page';

const routes: Routes = [
  {
    path: '',
    component: ExampleDeepLinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleDeepLinkPageRoutingModule {}
