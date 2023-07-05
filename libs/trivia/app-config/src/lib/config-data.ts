import { InjectionToken, APP_INITIALIZER } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AppConfig } from './models';

export const CONFIG_DATA = new InjectionToken<{ data: AppConfig }>(
  'configData'
);
export const CONFIG: { data: AppConfig } = { data: { apiEndpoint: '' } };

export function appInitializer(http: HttpClient): () => Observable<any> {
  return () => {
    return http.get<AppConfig>('./assets/config.json').pipe(
      tap((config) => {
        CONFIG.data = config;
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
