import { createReducer, on } from '@ngrx/store';
import { PlayerActions } from '../actions';
import { TriviaPlayer } from '@rlma/trivia/data-access';

export const playerFeatureKey = 'player';

export interface State {
  players: TriviaPlayer[];
}

const initialState: State = {
  players: [],
};

export const reducer = createReducer(
  initialState,
  on(PlayerActions.loadPlayers, (state, { gameId }) => {
    return { players: [] };
  }),
  on(PlayerActions.loadPlayersSuccess, (state, { players }) => ({
    ...state,
    players
  })),
  on(PlayerActions.loadPlayersFailure, (state, { error }) => ({
    ...state
  }))
);

export const getPlayers = (state: State) => state.players;
