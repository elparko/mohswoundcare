import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import './styles.css';
import { LAST_REVIEWED } from './content/site';

import Home from './pages/Home';
import FirstDays from './pages/FirstDays';
import Stitches from './pages/Stitches';
import TapeStrips from './pages/TapeStrips';
import Staples from './pages/Staples';
import SkinGraft from './pages/SkinGraft';
import OpenWound from './pages/OpenWound';
import WarningSigns from './pages/WarningSigns';
import Pain from './pages/Pain';
import ScarsAndSun from './pages/ScarsAndSun';
import DailyLife from './pages/DailyLife';
import Resources from './pages/Resources';
import About from './pages/About';

const LEGACY_PATHS = {
  '/second-intention': '/open-wound',
  '/steri-strips': '/tape-strips',
  '/non-steri-strip': '/stitches',
  '/staple-care': '/staples',
  '/infection-info': '/warning-signs',
  '/pain-management': '/pain',
  '/general-info': '/daily-life',
  '/further-reading': '/resources',
  '/about-author': '/about',
};

const WOUND_TYPES = [
  { to: '/stitches', label: 'Stitches' },
  { to: '/tape-strips', label: 'Tape strips' },
  { to: '/staples', label: 'Staples' },
  { to: '/skin-graft', label: 'Skin graft' },
  { to: '/open-wound', label: 'Left open to heal' },
];

const TOPICS = [
  { to: '/warning-signs', label: 'Warning signs', urgent: true },
  { to: '/pain', label: 'Pain' },
  { to: '/scars-and-sun', label: 'Scars and sun' },
  { to: '/daily-life', label: 'Daily life' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About' },
];

const TEXT_SIZES = [
  { value: 'normal', label: 'A', className: 'ts-1', name: 'Normal text' },
  { value: 'large', label: 'A', className: 'ts-2', name: 'Large text' },
  { value: 'largest', label: 'A', className: 'ts-3', name: 'Largest text' },
];

function readStoredSize() {
  try {
    return localStorage.getItem('text-size') || 'normal';
  } catch {
    return 'normal';
  }
}

function TextSize({ size, setSize, className }) {
  return (
    <div className={`text-size ${className}`} role="group" aria-label="Text size">
      <span className="text-size-label" aria-hidden="true">
        Text size
      </span>
      {TEXT_SIZES.map((option) => (
        <button
          key={option.value}
          type="button"
          className={option.className}
          aria-pressed={size === option.value}
          aria-label={option.name}
          onClick={() => setSize(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(readStoredSize);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    document.documentElement.dataset.text = size;
    try {
      localStorage.setItem('text-size', size);
    } catch {}
  }, [size]);

  const item = (link, className) => (
    <li key={link.to} className={className}>
      <NavLink to={link.to} end className={link.urgent ? 'nav-urgent' : undefined}>
        {link.label}
      </NavLink>
    </li>
  );

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <div className="wrap header-bar">
        <Link to="/" className="wordmark" aria-label="Mohs Wound Care, home">
          <span className="wordmark-name">Mohs Wound Care</span>
          <span className="wordmark-tag">Aftercare, step by step</span>
        </Link>
        <div className="header-tools">
          <TextSize size={size} setSize={setSize} className="text-size-bar" />
          <button
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? 'Close menu' : 'Menu'}
          </button>
        </div>
      </div>
      <div className="wrap">
        <hr className="rule" />
      </div>
      <nav id="site-nav" className={`site-nav${open ? ' open' : ''}`} aria-label="Main">
        <div className="wrap">
          <TextSize size={size} setSize={setSize} className="text-size-menu" />
          <ul>
            {item({ to: '/', label: 'Home' })}
            {item({ to: '/first-48-hours', label: 'First 48 hours' })}
            <li className="desktop-only">
              <Link to="/#wound-type">Wound types</Link>
            </li>
            <li className="nav-group-label" aria-hidden="true">
              How was your wound closed?
            </li>
            {WOUND_TYPES.map((link) => item(link, 'mobile-only'))}
            <li className="nav-group-label" aria-hidden="true">
              Other topics
            </li>
            {TOPICS.map((link) => item(link))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-row">
          <div>
            <p className="footer-emergency">Medical emergency? Call 911.</p>
            <p className="footer-note">
              For questions about your own wound, call your surgeon's office. The number is on the papers you got after
              surgery. This site gives general information. If it differs from what your surgeon told you, follow your
              surgeon.
            </p>
          </div>
        </div>
        <p className="footer-meta">
          Written by Parker Smith, medical student. Not yet reviewed by a doctor. Last reviewed {LAST_REVIEWED}. No ads,
          no sponsors.
          <br />
          <Link to="/about#author">About the author</Link> · <Link to="/about#sources">How sources are chosen</Link> ·{' '}
          <Link to="/about#privacy">Privacy</Link> · <Link to="/about#contact">Report a mistake</Link> · ©{' '}
          {new Date().getFullYear()} Parker Smith
        </p>
      </div>
    </footer>
  );
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function LegacyHashRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const { hash } = window.location;
    if (hash.startsWith('#/')) {
      const path = hash.slice(1);
      navigate(LEGACY_PATHS[path] || path, { replace: true });
    }
  }, [navigate]);

  return null;
}

export function AppRoutes() {
  return (
    <>
      <LegacyHashRedirect />
      <ScrollManager />
      <Header />
      <main id="main">
        <div className="wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/first-48-hours" element={<FirstDays />} />
            <Route path="/stitches" element={<Stitches />} />
            <Route path="/tape-strips" element={<TapeStrips />} />
            <Route path="/staples" element={<Staples />} />
            <Route path="/skin-graft" element={<SkinGraft />} />
            <Route path="/open-wound" element={<OpenWound />} />
            <Route path="/warning-signs" element={<WarningSigns />} />
            <Route path="/pain" element={<Pain />} />
            <Route path="/scars-and-sun" element={<ScarsAndSun />} />
            <Route path="/daily-life" element={<DailyLife />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            {Object.entries(LEGACY_PATHS).map(([from, to]) => (
              <Route key={from} path={from} element={<Navigate to={to} replace />} />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
