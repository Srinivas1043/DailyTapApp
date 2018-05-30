import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PausePage } from './pause';

@NgModule({
  declarations: [
    PausePage,
  ],
  imports: [
    IonicPageModule.forChild(PausePage),
  ],
})
export class PausePageModule {}
