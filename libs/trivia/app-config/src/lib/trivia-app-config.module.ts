import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONFIG, CONFIG_TOKEN, configProvider } from './config-data';

@NgModule({
  imports: [CommonModule],
})
export class TriviaAppConfigModule {
  static forRoot(): ModuleWithProviders<TriviaAppConfigModule> {
    return {
      ngModule: TriviaAppConfigModule,
      providers: [
        configProvider,
        {
          provide: CONFIG_TOKEN,
          useFactory: () => CONFIG,
        }
      ],
    };
  }
}
