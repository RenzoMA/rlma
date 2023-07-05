import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { TriviaPlayer } from '../models/trivia-player';

export const PLAYERS = [
  { id: '1', name: 'Player 1', avatar: 'rm' },
  { id: '2', name: 'Player 2', avatar: 'ga' },
  { id: '3', name: 'Player 3', avatar: 'he' },
];

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor() {}

  getPlayers(gameId: string): Observable<TriviaPlayer[]> {
    return of(PLAYERS).pipe(delay(2000));
  }
}
