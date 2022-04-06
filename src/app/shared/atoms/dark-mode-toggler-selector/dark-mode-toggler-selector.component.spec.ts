import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DarkModeTogglerSelectorComponent } from './dark-mode-toggler-selector.component';

describe('DarkModeTogglerSelectorComponent', () => {
  let component: DarkModeTogglerSelectorComponent;
  let fixture: ComponentFixture<DarkModeTogglerSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DarkModeTogglerSelectorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkModeTogglerSelectorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
