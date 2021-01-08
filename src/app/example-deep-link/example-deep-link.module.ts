import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExampleDeepLinkPageRoutingModule } from './example-deep-link-routing.module';

import { ExampleDeepLinkPage } from './example-deep-link.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExampleDeepLinkPageRoutingModule
  ],
  declarations: [ExampleDeepLinkPage]
})
export class ExampleDeepLinkPageModule {}
