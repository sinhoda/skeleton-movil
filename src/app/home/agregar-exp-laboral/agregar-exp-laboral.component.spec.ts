import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarExpLaboralComponent } from './agregar-exp-laboral.component';

describe('AgregarExpLaboralComponent', () => {
  let component: AgregarExpLaboralComponent;
  let fixture: ComponentFixture<AgregarExpLaboralComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarExpLaboralComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarExpLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
