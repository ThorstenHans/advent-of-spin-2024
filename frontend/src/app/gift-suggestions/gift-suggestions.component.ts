import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GiftSuggestionsService } from '../gift-suggestions.service';

@Component({
  selector: 'app-gift-suggestions',
  imports: [CommonModule, FormsModule],
  templateUrl: './gift-suggestions.component.html',
  styleUrl: './gift-suggestions.component.css'
})
export class GiftSuggestionsComponent {
  protected name: string = "";
  protected age: number = 10;
  protected likes: string = "";
  protected suggestions: string = "";
  constructor(private readonly _giftSuggestionsService: GiftSuggestionsService) { }
  public onSubmit() {
    if (this.name.length < 3 || this.likes.length < 3) {
      return;
    }

    this._giftSuggestionsService.suggest(this.name, this.age, this.likes).subscribe(suggestions => {
      this.suggestions = suggestions.giftSuggestions;
    });
  }
}
