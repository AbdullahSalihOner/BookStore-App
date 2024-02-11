import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTableListComponent } from './book-table-list.component';

describe('BookTableListComponent', () => {
  let component: BookTableListComponent;
  let fixture: ComponentFixture<BookTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTableListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
