import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'setup',
    loadChildren: () =>
      import('@rlma/trivia/feature-setup').then(
        (m) => m.TriviaFeatureSetupModule
      ),
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('@rlma/trivia/feature-home').then(
        (m) => m.TriviaFeatureHomeModule
      ),
    pathMatch: 'full',
  },
];
