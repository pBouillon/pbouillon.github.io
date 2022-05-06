import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Article } from 'src/app/core/models/article.model';
import { DevService } from 'src/app/core/services/dev.service';

import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
  let devServiceSpy: jasmine.SpyObj<DevService>;
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async () => {
    devServiceSpy = jasmine.createSpyObj('DevService', ['getArticles']);

    await TestBed.configureTestingModule({
      declarations: [BlogComponent],
      providers: [{ provide: DevService, useValue: devServiceSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const expectedArticles: Article[] = [
      {
        url: 'url1',
        title: 'title1',
        description: 'description1',
        tags: ['tag1', 'tag2'],
      },
      {
        url: 'url2',
        title: 'title2',
        description: 'description2',
        tags: ['tag3', 'tag4'],
      },
    ];

    devServiceSpy.getArticles.and.returnValue(of(expectedArticles));

    expect(component).toBeTruthy();
  });
});
