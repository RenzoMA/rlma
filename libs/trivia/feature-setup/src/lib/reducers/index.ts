import * as fromRoot from '@rlma/trivia/root-state';
import * as fromPlayer from './player.reducer';
import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action,
} from '@ngrx/store';

export const setupFeatureKey = 'setup';

export interface SetupState {
  [fromPlayer.playerFeatureKey]: fromPlayer.State;
}

export interface State extends fromRoot.State {
  [setupFeatureKey]: SetupState;
}

export function reducers(state: SetupState | undefined, action: Action) {
  return combineReducers({
    [fromPlayer.playerFeatureKey]: fromPlayer.reducer,
  })(state, action);
}

export const selectSetupState =
  createFeatureSelector<SetupState>(setupFeatureKey);

export const selectPlayerState = createSelector(
  selectSetupState,
  (state) => state.player
);

export const selectPlayers = createSelector(
  selectPlayerState,
  fromPlayer.getPlayers
)
