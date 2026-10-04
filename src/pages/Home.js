import { Link } from 'react-router-dom';
import { Cite, Cited, Box, useTitle } from '../components/Page';
import { AlertIcon, PhoneIcon } from '../components/Art';

const CLOSURES = [
  {
    to: '/stitches',
    name: 'Stitches',
    aka: 'Also called sutures. This includes skin flaps.',
    desc: 'Thread holds the edges of the wound together. You may see small knots of blue or black thread.',
  },
  {
    to: '/tape-strips',
    name: 'Tape strips',
    aka: 'Also called Steri-Strips.',
    desc: 'Thin strips of white paper tape lie across the wound. There may be stitches under the skin too.',
  },
  {
    to: '/staples',
    name: 'Staples',
    aka: 'Small metal clips.',
    desc: 'Small metal staples hold the wound closed.',
  },
  {
    to: '/skin-graft',
    name: 'Skin graft',
    aka: 'Skin moved from another spot.',
    desc: 'A patch of skin from another part of your body covers the wound. A padded dressing is often stitched on top.',
  },
  {
    to: '/open-wound',
    name: 'Left open to heal',
    aka: 'Also called second intention healing.',
    desc: 'No stitches. The wound fills in and closes on its own over several weeks.',
  },
];

const TOPICS = [
  { to: '/warning-signs', name: 'Warning signs', desc: 'Infection, what is normal, and when to call.' },
  { to: '/pain', name: 'Pain', desc: 'Which pain medicine to take, and how much.' },
  { to: '/scars-and-sun', name: 'Scars and sun', desc: 'How scars change, and protecting your skin.' },
  { to: '/daily-life', name: 'Daily life', desc: 'Showering, exercise, sleep, and smoking.' },
  { to: '/resources', name: 'Resources', desc: 'Trusted places to learn more.' },
  { to: '/about', name: 'About this site', desc: 'Who wrote it and how it is sourced.' },
];

export default function Home() {
  useTitle();
  return (
    <Cited>
      <section className="hero">
        <span className="eyebrow">After Mohs surgery</span>
        <hr className="rule" />
        <h1>Caring for your wound at home</h1>
        <p className="lede">
          Clear, step-by-step instructions, with a source for every medical statement. If your surgeon told you
          something different, follow your surgeon.
        </p>
      </section>

      <Link to="/first-48-hours" className="start-card">
        <span>
          <span className="kicker">Just had surgery? Start here</span>
          <span className="title">The first 48 hours, and what to do if it bleeds</span>
        </span>
        <span className="arrow" aria-hidden="true">
          →
        </span>
      </Link>

      <section aria-labelledby="wound-type" className="home-section">
        <h2 id="wound-type">How was your wound closed?</h2>
        <p>
          Choose the one that matches your wound. Not sure? Look at the papers you were given after surgery, or call
          your surgeon's office and ask.
        </p>
        <ul className="closure-list">
          {CLOSURES.map((c, i) => (
            <li key={c.to}>
              <Link to={c.to} className="closure-link">
                <span className="num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="name">{c.name}</span>
                  <span className="aka">{c.aka}</span>
                  <span className="desc">{c.desc}</span>
                </span>
                <span className="go" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="when-to-call" className="home-section">
        <h2 id="when-to-call">When to get help</h2>
        <div className="home-alerts">
          <Box kind="danger" title="Call 911 if" icon={<AlertIcon />} headingLevel={3}>
            <ul>
              <li>
                {' '}
                Bleeding is heavy and firm pressure is not slowing it. Keep pressing while you call.{' '}
                <Cite id="mp-bleeding" />{' '}
              </li>{' '}
              <li>
                {' '}
                You feel dizzy or faint while bleeding. <Cite id="mp-shock" />{' '}
              </li>{' '}
              <li>
                {' '}
                Bleeding will not stop after two rounds of firm pressure for 20 minutes each, and you cannot reach your
                surgeon.
                <Cite id={['mp-bleeding', 'ummc-mohs', 'roswell-mohs']} />
              </li>
              <li>
                You have trouble breathing, or you feel confused.
                <Cite id={['mp-fever', 'cdc-sepsis-about']} />
              </li>
            </ul>
          </Box>
          <Box kind="warn" title="Call your surgeon's office today if" icon={<PhoneIcon />} headingLevel={3}>
            <ul>
              <li>
                You have a fever of 100.4°F (38°C) or higher, or chills.
                <Cite id={['dartmouth-mohs-handbook', 'mp-ssi']} />
              </li>
              <li>
                Redness, swelling, or pain is spreading or getting worse after the first 2 days.{' '}
                <Cite id={['mp-ssi', 'mp-wound-closed', 'firoz-2010', 'nebraska-mohs-aftercare']} />
              </li>
              <li>
                Red streaks spread out from the wound.
                <Cite id="mp-lymphangitis" />
              </li>
              <li>
                Thick yellow, green, or tan fluid comes from the wound, or it smells bad.
                <Cite id="mp-wound-closed" />
              </li>
            </ul>
          </Box>
        </div>
        <p>
          <Link to="/warning-signs">All warning signs, and what is normal</Link>
        </p>
      </section>

      <section aria-labelledby="topics" className="home-section">
        <h2 id="topics">Other topics</h2>
        <ul className="topic-list">
          {TOPICS.map((t) => (
            <li key={t.to}>
              <Link to={t.to}>
                <span className="name">{t.name}</span>
                <span className="desc">{t.desc}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Cited>
  );
}
