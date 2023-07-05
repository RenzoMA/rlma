import { createAction, props } from '@ngrx/store';
import { TriviaPlayer } from '@rlma/trivia/data-access';
export const loadPlayers = createAction(
    '[Players] Load Players',
    props<{ gameId: string }>()
);


export const loadPlayersSuccess = createAction(
    '[Players] Load Players Success',
    props<{ players: TriviaPlayer[] }>()
);


export const loadPlayersFailure = createAction(
    '[Players] Load Players Failure',
    props<{ error: string }>()
);

