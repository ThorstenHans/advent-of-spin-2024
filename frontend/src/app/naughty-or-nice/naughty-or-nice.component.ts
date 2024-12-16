import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NaughtyOrNiceService } from '../naughty-or-nice.service';

@Component({
  selector: 'app-naughty-or-nice',
  imports: [CommonModule, FormsModule],
  templateUrl: './naughty-or-nice.component.html',
  styleUrl: './naughty-or-nice.component.css'
})
export class NaughtyOrNiceComponent {
  protected name: string = "";
  protected score: number | undefined = undefined;

  constructor(private readonly _naughtyOrNiceService: NaughtyOrNiceService) { }

  onSubmit() {
    if (this.name.length < 3) {
      return;
    }
    this._naughtyOrNiceService.getScore(this.name)
      .subscribe(res => {
        this.score = res.score;
      });
  }
}
