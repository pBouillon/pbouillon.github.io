import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarLinkComponent } from './navbar-link.component';

describe('NavbarLinkComponent', () => {
  let component: NavbarLinkComponent;
  let fixture: ComponentFixture<NavbarLinkComponent>;
  let a: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavbarLinkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLinkComponent);
    component = fixture.componentInstance;
    a = fixture.nativeElement.querySelector('a');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label', () => {
    component.label = 'Label';
    fixture.detectChanges();
    expect(a.textContent).toContain('Label');
  });

  it('should not render the icon when the target is not external', () => {
    component.isExternal = false;
    fixture.detectChanges();
    expect(a.querySelector('i')).toBeFalsy();
  });

  it('should render the icon when the target is external', () => {
    component.isExternal = true;
    fixture.detectChanges();
    expect(a.querySelector('i')).toBeTruthy();
  });
});
