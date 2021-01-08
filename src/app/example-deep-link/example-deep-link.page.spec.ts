import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExampleDeepLinkPage } from './example-deep-link.page';

describe('ExampleDeepLinkPage', () => {
  let component: ExampleDeepLinkPage;
  let fixture: ComponentFixture<ExampleDeepLinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDeepLinkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleDeepLinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
