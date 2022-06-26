import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogClientOptionsComponent } from './dialog-client-options.component';

describe('DialogClientOptionsComponent', () => {
  let component: DialogClientOptionsComponent;
  let fixture: ComponentFixture<DialogClientOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogClientOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogClientOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
