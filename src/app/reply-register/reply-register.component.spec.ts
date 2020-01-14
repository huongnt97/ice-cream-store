import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyRegisterComponent } from './reply-register.component';

describe('ReplyRegisterComponent', () => {
  let component: ReplyRegisterComponent;
  let fixture: ComponentFixture<ReplyRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
