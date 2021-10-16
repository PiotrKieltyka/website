import { WebsiteDBService } from './websitedb.service';
import { of } from 'rxjs';
import { BlogPost } from '../../models/blogpost.model';

const expectedPosts: Array<BlogPost> = [
  {
    _id: '6161b94050e9400008ad2500',
    title: 'What’s new with DevTools: Cross-Browser Edition.',
    date: 'October 9, 2021',
    link: 'https://www.smashingmagazine.com/2021/09/devtools-cross-browser-edition/',
    content:
      'Learn what’s new with developer tools in Firefox, Edge, Chrome and Safari. Discover new and powerful features that will help you be more comfortable and productive when testing and debugging across browsers.',
  },
  {
    _id: '6161b8f450e9400008ad24fd',
    title: 'Design patterns in JavaScript.',
    date: 'October 5, 2021',
    link: 'https://dev.to/zeeshanhshaheen/design-patterns-in-javascript-1pgm',
    content: '20+ Design Patterns explanation in JavaScript.',
  },
  {
    _id: '6161b84650e9400008ad24f9',
    title: 'Designing beautiful shadows in CSS.',
    date: 'October 1, 2021',
    link: 'https://www.joshwcomeau.com/css/designing-shadows/',
    content: 'Click below if you want to know how to make prettier shadows.',
  },
];

describe('Website DB Service', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: WebsiteDBService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new WebsiteDBService(httpClientSpy as any);
  });

  it('should return expected blog posts', () => {
    httpClientSpy.get.and.returnValue(of(expectedPosts));
    service
      .getAllPosts()
      .subscribe((posts) => expect(posts).toEqual(expectedPosts));
  });
});
