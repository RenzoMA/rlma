import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from './player/player.service';

@NgModule({
  imports: [CommonModule],
  providers: [PlayerService],
})
export class TriviaDataAccessModule {}
