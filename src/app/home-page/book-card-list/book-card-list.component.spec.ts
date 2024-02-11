import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardListComponent } from './book-card-list.component';

describe('BookCardListComponent', () => {
  let component: BookCardListComponent;
  let fixture: ComponentFixture<BookCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
