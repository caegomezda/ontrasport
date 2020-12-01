import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartModalPage } from './start-modal.page';

describe('StartModalPage', () => {
  let component: StartModalPage;
  let fixture: ComponentFixture<StartModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
