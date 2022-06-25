import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulticstoreAppComponent } from './bulticstore-app.component';

describe('BulticstoreAppComponent', () => {
  let component: BulticstoreAppComponent;
  let fixture: ComponentFixture<BulticstoreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulticstoreAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulticstoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
