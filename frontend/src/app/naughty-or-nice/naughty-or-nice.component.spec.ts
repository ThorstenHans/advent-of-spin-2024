import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaughtyOrNiceComponent } from './naughty-or-nice.component';

describe('NaughtyOrNiceComponent', () => {
  let component: NaughtyOrNiceComponent;
  let fixture: ComponentFixture<NaughtyOrNiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaughtyOrNiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaughtyOrNiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
