import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalBasePage } from './modal-base.page';

describe('ModalBasePage', () => {
  let component: ModalBasePage;
  let fixture: ComponentFixture<ModalBasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalBasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
