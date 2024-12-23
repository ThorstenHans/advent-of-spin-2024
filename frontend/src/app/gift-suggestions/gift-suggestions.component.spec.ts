import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftSuggestionsComponent } from './gift-suggestions.component';

describe('GiftSuggestionsComponent', () => {
  let component: GiftSuggestionsComponent;
  let fixture: ComponentFixture<GiftSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftSuggestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
