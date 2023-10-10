import { InjectionToken, APP_INITIALIZER } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AppConfig } from './models';

export const CONFIG_TOKEN = new InjectionToken<AppConfig>('configData');
export let CONFIG: AppConfig = { apiEndpoint: '' };

export function appInitializer(http: HttpClient): () => Observable<any> {
  return () => {
    return http.get<AppConfig>('./assets/config.json').pipe(
      tap((config) => {
        CONFIG = config;
      })
    );
  };
}

export const configProvider = {
  provide: APP_INITIALIZER,
  useFactory: appInitializer,
  deps: [HttpClient],
  multi: true,
};
