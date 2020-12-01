import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabCardSlidePage } from './tab-card-slide.page';

describe('TabCardSlidePage', () => {
  let component: TabCardSlidePage;
  let fixture: ComponentFixture<TabCardSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCardSlidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabCardSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
