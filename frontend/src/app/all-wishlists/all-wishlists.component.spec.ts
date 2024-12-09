import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWishlistsComponent } from './all-wishlists.component';

describe('AllWishlistsComponent', () => {
  let component: AllWishlistsComponent;
  let fixture: ComponentFixture<AllWishlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllWishlistsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllWishlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
