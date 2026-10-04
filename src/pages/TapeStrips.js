import { Link } from 'react-router-dom';
import Page, { Box, Cite } from '../components/Page';
import WhenToCall from '../components/WhenToCall';

export default function TapeStrips() {
  return (
    <Page
      title="Caring for tape strips"
      eyebrow="Wound type 02"
      lede="For wounds closed with thin strips of paper tape, often called Steri-Strips. There may also be stitches under the skin that dissolve on their own."
      prev={{ to: '/stitches', label: 'Stitches' }}
      next={{ to: '/warning-signs', label: 'Warning signs' }}
    >
      <Box kind="summary" title="The short version">
        <ul>
          <li>
            First, leave the clinic bandage on and dry for 24 to 48 hours. See{' '}
            <Link to="/first-48-hours">The first 48 hours</Link>.
          </li>
          <li>Leave the strips alone. They usually fall off on their own within 2 weeks.</li>
          <li>You can shower with them on. Pat them dry. Do not soak them.</li>
          <li>If the ends curl up, trim them with clean scissors. Do not peel the strips off.</li>
          <li>If any are still on after 2 weeks, peel them off gently.</li>
        </ul>
      </Box>

      <h2>Leave the strips in place</h2>
      <p>
        The strips help hold the edges of the wound together while it heals. Leave them alone. They usually fall off on
        their own within about 2 weeks.
        <Cite id="cleveland-incision-care" />
      </p>
      <p>
        If you have stitches under the skin, they dissolve on their own. This can take a few weeks to a few months.
        <Cite id="cleveland-incision-care" />
      </p>

      <h2>Showering</h2>
      <ol className="steps">
        <li>
          <strong>Wait until the first bandage is off.</strong>
          This is usually 24 to 48 hours after surgery, or as your surgeon said.
          <Cite id={['mp-wound-closed', 'dartmouth-mohs-handbook']} />
        </li>
        <li>
          <strong>Shower with the strips on.</strong>
          Let the water run gently over them. Do not scrub.
          <Cite id={['cleveland-incision-care', 'mp-wound-closed']} />
        </li>
        <li>
          <strong>Pat dry.</strong>
          Gently pat the area with a clean towel.
          <Cite id="mp-wound-closed" />
        </li>
      </ol>
      <p>
        Getting a closed wound wet in the shower does not seem to raise the chance of infection.
        <Cite id="heal-2006-sutures-wet" /> But do not soak it. No baths, hot tubs, or swimming until the wound has
        healed. Soaking can make the wound open up or get infected.
        <Cite id={['mp-wound-closed', 'cleveland-incision-care']} />
      </p>

      <h2>Things to avoid</h2>
      <ul>
        <li>
          Do not put lotion, cream, powder, or makeup on the strips or the wound, unless your surgeon tells you to.
          <Cite id="mp-wound-closed" />
        </li>
        <li>
          Do not peel the strips off early. Peeling them can irritate your skin.
          <Cite id="cleveland-incision-care" />
        </li>
        <li>
          Do not wear tight clothing that rubs on the area.
          <Cite id="mp-wound-closed" />
        </li>
      </ul>

      <h2>If the ends curl up</h2>
      <p>
        It is normal for the ends of the strips to start lifting after a few days. Trim the loose ends with clean
        scissors. Leave the part that is still stuck down.
        <Cite id="cleveland-incision-care" />
      </p>

      <h2>After 2 weeks</h2>
      <p>
        If any strips are still on after 2 weeks, take them off gently, unless your surgeon told you something
        different. Peel each one off slowly and gently.
        <Cite id="cleveland-incision-care" />
      </p>

      <h2>Activity</h2>
      <p>
        Avoid hard exercise, heavy lifting, and bending over for 1 to 2 weeks. These can pull on the wound. Surgeons
        give different limits, so follow yours.
        <Cite id={['dartmouth-mohs-handbook', 'erickson-2022-periop-survey']} /> See{' '}
        <Link to="/daily-life">Daily life</Link> for more.
      </p>

      <h2>What to expect</h2>
      <ul className="timeline">
        <li>
          <span className="when">Days 1 to 2</span>
          <span>
            Swelling, bruising, and some pain are normal.{' '}
            <Cite id={['acms-postop', 'firoz-2010', 'dartmouth-mohs-handbook']} /> Keep the first bandage on and dry.
          </span>
        </li>
        <li>
          <span className="when">Days 3 to 14</span>
          <span>
            The ends of the strips start to curl, and the strips fall off.
            <Cite id="cleveland-incision-care" /> A thin pink line along the wound is normal.
            <Cite id="roswell-mohs" />
          </span>
        </li>
        <li>
          <span className="when">After the strips are off</span>
          <span>
            The scar will look pink at first. It keeps softening and fading for a year or more.
            <Cite id={['acms-postop', 'dartmouth-mohs-handbook']} /> See <Link to="/scars-and-sun">Scars and sun</Link>.
          </span>
        </li>
      </ul>

      <WhenToCall />
    </Page>
  );
}
