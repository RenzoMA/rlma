import { InjectionToken, APP_INITIALIZER } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export const CONFIG_DATA = new InjectionToken<any>('configData');
export const CONFIG = { data: {} };

export function appInitializer(
  http: HttpClient
): () => Observable<any> {
  return () => {
    return http.get('./assets/config.json').pipe(
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
