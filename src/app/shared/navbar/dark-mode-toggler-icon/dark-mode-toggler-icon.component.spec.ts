import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DarkModeTogglerIconComponent } from './dark-mode-toggler-icon.component';

describe('DarkModeTogglerIconComponent', () => {
  let component: DarkModeTogglerIconComponent;
  let fixture: ComponentFixture<DarkModeTogglerIconComponent>;
  let button: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DarkModeTogglerIconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkModeTogglerIconComponent);
    component = fixture.componentInstance;

    button = fixture.nativeElement.querySelector('button');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the moon icon when not in dark mode', () => {
    component.isDarkModeEnabled = false;
    fixture.detectChanges();

    const icon = button.querySelector('i')!;
    expect(icon.classList.contains('bi-moon-stars')).toBeTrue();
  });

  it('should display the sun icon when in dark mode', () => {
    component.isDarkModeEnabled = true;
    fixture.detectChanges();

    const icon = button.querySelector('i')!;
    expect(icon.classList.contains('bi-sun')).toBeTrue();
  });
});
