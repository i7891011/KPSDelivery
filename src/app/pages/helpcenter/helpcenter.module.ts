import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HelpcenterPage } from './helpcenter.page';

const routes: Routes = [
  {
    path: '',
    component: HelpcenterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HelpcenterPage]
})
export class HelpcenterPageModule {}
