import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { filter, map, of, switchMap, take, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromSetup from '../reducers';
import { PlayerActions } from '../actions';
import * as fromRoot from '@rlma/trivia/root-state';

@Component({
  selector: 'rlma-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupComponent implements OnInit {
  store = inject(Store);
  clipboard = inject(Clipboard);

  players$ = this.store.select(fromSetup.selectPlayers);

  gameId$ = this.store.select(fromRoot.selectQueryParam('gameId')).pipe(
    filter((gameId) => !!gameId),
    map((gameId) => gameId as string)
  );
  
  loadPlayers$ = this.gameId$.pipe(
    tap((gameId: string) => {
      this.store.dispatch(PlayerActions.loadPlayers({ gameId }));
    })
  );

  emptySlots$ = this.players$.pipe(
    map((players) => {
      return Array(8 - players.length).fill(undefined);
    })
  );

  ngOnInit(): void {}

  copyToClipboard() {
    this.gameId$
      .pipe(
        take(1),
        switchMap((gameId) => of(this.clipboard.copy(gameId)))
      )
      .subscribe();
  }
}
