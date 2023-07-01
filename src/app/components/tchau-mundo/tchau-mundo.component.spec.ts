import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchauMundoComponent } from './tchau-mundo.component';

describe('TchauMundoComponent', () => {
  let component: TchauMundoComponent;
  let fixture: ComponentFixture<TchauMundoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TchauMundoComponent]
    });
    fixture = TestBed.createComponent(TchauMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
