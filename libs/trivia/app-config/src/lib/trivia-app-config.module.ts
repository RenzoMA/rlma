import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONFIG, CONFIG_DATA, configProvider } from './config-data';

@NgModule({
  imports: [CommonModule],
})
export class TriviaAppConfigModule {
  static forRoot(): ModuleWithProviders<TriviaAppConfigModule> {
    return {
      ngModule: TriviaAppConfigModule,
      providers: [
        {
          provide: CONFIG_DATA,
          useValue: CONFIG,
        },
        configProvider
      ],
    };
  }
}
