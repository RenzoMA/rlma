import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PlayerActions } from '../actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { PlayerService } from '@rlma/trivia/data-access';

@Injectable()
export class PlayerEffects {
  loadPlayers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayerActions.loadPlayers),
      switchMap(({gameId}) => {
        return this.playerService
          .getPlayers(gameId)
          .pipe(
            map((players) => PlayerActions.loadPlayersSuccess({ players }))
          );
      }),
      catchError((error) => of(PlayerActions.loadPlayersFailure({ error })))
    )
  );

  constructor(
    private actions$: Actions,
    private playerService: PlayerService
  ) {}
}
