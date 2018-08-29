import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTrollComponent } from './index-troll.component';

describe('IndexTrollComponent', () => {
  let component: IndexTrollComponent;
  let fixture: ComponentFixture<IndexTrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexTrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
