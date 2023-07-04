import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { triviaFeatureSetupRoutes } from './lib.routes';
import { SetupComponent } from './setup/setup.component';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(triviaFeatureSetupRoutes), AvatarModule],
  declarations: [SetupComponent],
  exports: [SetupComponent],
})
export class TriviaFeatureSetupModule {}
