import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './App';
import SOURCES from './content/sources';

const PAGES = [
  ['/', /caring for your wound at home/i],
  ['/first-48-hours', /the first 48 hours/i],
  ['/stitches', /caring for stitches/i],
  ['/tape-strips', /caring for tape strips/i],
  ['/staples', /caring for staples/i],
  ['/skin-graft', /caring for a skin graft/i],
  ['/open-wound', /caring for a wound left open/i],
  ['/warning-signs', /warning signs and infection/i],
  ['/pain', /pain after mohs surgery/i],
  ['/scars-and-sun', /scars, sun, and skin checks/i],
  ['/daily-life', /daily life while you heal/i],
  ['/resources', /resources/i],
  ['/about', /about this site/i],
];

beforeAll(() => {
  window.scrollTo = () => {};
  Element.prototype.scrollIntoView = () => {};
});

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>,
  );
}

test.each(PAGES)('%s renders its heading', (path, heading) => {
  renderAt(path);
  expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
});

test.each(PAGES.filter(([path]) => path !== '/about'))('%s numbers every citation and lists it', (path) => {
  const { container } = renderAt(path);
  const listed = [...container.querySelectorAll('.sources li')].map((li) => li.id.replace('src-', ''));
  const cited = [...container.querySelectorAll('.cite a')].map((a) => a.getAttribute('href').replace('#src-', ''));
  expect(listed.length).toBeGreaterThan(0);
  expect(new Set(cited)).toEqual(new Set(listed));
  const firstUse = cited.filter((id, i) => cited.indexOf(id) === i);
  expect(firstUse).toEqual(listed);
});

test.each([
  ['/second-intention', /caring for a wound left open/i],
  ['/steri-strips', /caring for tape strips/i],
  ['/non-steri-strip', /caring for stitches/i],
  ['/staple-care', /caring for staples/i],
  ['/infection-info', /warning signs and infection/i],
  ['/pain-management', /pain after mohs surgery/i],
  ['/general-info', /daily life while you heal/i],
  ['/further-reading', /resources/i],
])('old link %s redirects', (path, heading) => {
  renderAt(path);
  expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
});

test('every source has a citation and an https link', () => {
  for (const [id, source] of Object.entries(SOURCES)) {
    expect(source.cite.length).toBeGreaterThan(10);
    expect(source.url).toMatch(/^https:\/\//);
    expect(id).toMatch(/^[a-z0-9-]+$/);
  }
});

test('every source in the list is cited on some page', () => {
  const cited = new Set();
  for (const [path] of PAGES) {
    const { container, unmount } = renderAt(path);
    container.querySelectorAll('.sources li').forEach((li) => cited.add(li.id.replace('src-', '')));
    unmount();
  }
  expect([...cited].sort()).toEqual(Object.keys(SOURCES).sort());
});
