import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosMarcaComponent } from './modelos-marca.component';

describe('ModelosMarcaComponent', () => {
  let component: ModelosMarcaComponent;
  let fixture: ComponentFixture<ModelosMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelosMarcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelosMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
