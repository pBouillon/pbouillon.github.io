import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DarkModeTogglerSelectorComponent } from './dark-mode-toggler-selector.component';

describe('DarkModeTogglerSelectorComponent', () => {
  let component: DarkModeTogglerSelectorComponent;
  let fixture: ComponentFixture<DarkModeTogglerSelectorComponent>;
  let selector: HTMLSelectElement;
  let span: HTMLSpanElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DarkModeTogglerSelectorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkModeTogglerSelectorComponent);
    component = fixture.componentInstance;

    selector = fixture.nativeElement.querySelector('select');
    span = fixture.nativeElement.querySelector('span');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the moon icon when not in dark mode', () => {
    component.isDarkModeEnabled = false;
    fixture.detectChanges();

    const icon = span.querySelectorAll('i')[0];

    expect(selector.value).toBe('light');
    expect(span.textContent).toContain('Clair');
    expect(icon.classList.contains('bi-sun')).toBeTruthy();
  });

  it('should display the sun icon when in dark mode', () => {
    component.isDarkModeEnabled = true;
    fixture.detectChanges();

    const icon = span.querySelectorAll('i')[0];

    expect(selector.value).toBe('dark');
    expect(span.textContent).toContain('Sombre');
    expect(icon.classList.contains('bi-moon-stars')).toBeTruthy();
  });
});
