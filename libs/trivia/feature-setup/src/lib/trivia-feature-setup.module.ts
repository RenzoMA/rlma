import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { triviaFeatureSetupRoutes } from './lib.routes';
import { SetupComponent } from './setup/setup.component';
import { AvatarModule } from 'primeng/avatar';
import * as fromSetup from './reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PlayerEffects } from './effects';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(triviaFeatureSetupRoutes),
    AvatarModule,
    StoreModule.forFeature(fromSetup.setupFeatureKey, fromSetup.reducers),
    EffectsModule.forFeature(PlayerEffects),
    ButtonModule
  ],
  declarations: [SetupComponent],
  exports: [SetupComponent],
})
export class TriviaFeatureSetupModule {}
