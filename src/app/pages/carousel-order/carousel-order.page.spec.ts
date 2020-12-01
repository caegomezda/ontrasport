import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarouselOrderPage } from './carousel-order.page';

describe('CarouselOrderPage', () => {
  let component: CarouselOrderPage;
  let fixture: ComponentFixture<CarouselOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
