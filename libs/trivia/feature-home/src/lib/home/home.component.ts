import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'rlma-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  adsas: Subject<string> = new Subject<string>();
  router = inject(Router);
  formBuilder = inject(FormBuilder);

  newGameForm = this.formBuilder.group({
    playerName: ['', [Validators.required, Validators.maxLength(15)]],
  });

  createRoom() {
    if (this.newGameForm.valid) {
      const gameId = uuidv4();
      const queryParams = { gameId };
      this.router.navigate(['/setup'], { queryParams });
    }
  }

  get playerName() {
    return this.newGameForm.get('playerName');
  }
}
