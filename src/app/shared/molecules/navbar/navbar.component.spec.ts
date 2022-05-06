import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DarkModeTogglerSelectorComponent } from '../../atoms/dark-mode-toggler-selector/dark-mode-toggler-selector.component';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let a: HTMLElement;
  let nav: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavbarComponent, DarkModeTogglerSelectorComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;

    a = fixture.nativeElement.querySelector('a');
    nav = fixture.nativeElement.querySelector('nav');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    component.title = 'title';
    fixture.detectChanges();

    expect(a.textContent).toContain('title');
  });

  it('should render as much links as provided', () => {
    const links = [
      { href: '', label: '1', isExternal: false },
      { href: '', label: '2', isExternal: false },
      { href: '', label: '3', isExternal: false },
    ];

    component.links = links;
    fixture.detectChanges();

    const navbarLinks = nav.querySelectorAll('app-navbar-link');

    expect(nav.childElementCount).toBe(links.length);
    expect(navbarLinks.length).toBe(links.length);
  });
});
