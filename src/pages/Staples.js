import { Link } from 'react-router-dom';
import Page, { Box, Cite } from '../components/Page';
import WhenToCall from '../components/WhenToCall';

export default function Staples() {
  return (
    <Page
      title="Caring for staples"
      eyebrow="Wound type 03"
      lede="For wounds closed with small metal staples. There may also be stitches deeper down that dissolve on their own."
      prev={{ to: '/tape-strips', label: 'Tape strips' }}
      next={{ to: '/warning-signs', label: 'Warning signs' }}
    >
      <Box kind="summary" title="The short version">
        <ul>
          <li>
            First, keep the wound dry for 24 to 48 hours. See <Link to="/first-48-hours">The first 48 hours</Link>.
          </li>
          <li>
            Then wash gently with water, add a thin layer of petroleum jelly over the staples, and cover if needed.
          </li>
          <li>You can usually shower after 24 to 48 hours. Do not soak the wound.</li>
          <li>Never take staples out yourself. They usually come out at a clinic visit in 7 to 14 days.</li>
        </ul>
      </Box>

      <h2>What you need</h2>
      <ul className="checklist">
        <li>Mild soap</li>
        <li>Cotton swabs (Q-tips)</li>
        <li>Plain petroleum jelly, such as Vaseline</li>
        <li>Non-stick pads, such as Telfa</li>
        <li>Paper tape</li>
      </ul>

      <h2>Daily care, step by step</h2>
      <p>Start after the first 24 to 48 hours, unless your surgeon told you something different.</p>
      <ol className="steps">
        <li>
          <strong>Wash your hands.</strong>
        </li>
        <li>
          <strong>Clean around the staples.</strong>
          Gently wash with clean water or mild soap and water. Do not use hydrogen peroxide or rubbing alcohol. They can
          slow healing. <Cite id={['alberta-staples-healthwise', 'cleveland-incision-care']} />
        </li>
        <li>
          <strong>Pat dry.</strong>
          Use a clean towel or gauze. Do not rub.
          <Cite id="mp-wound-closed" />
        </li>
        <li>
          <strong>Add petroleum jelly.</strong>
          Spread a thin layer over the staple line with a clean cotton swab. This keeps the wound from drying out and
          scabbing.
          <Cite id={['alberta-staples-healthwise', 'aad-wound-care-scars']} />
        </li>
        <li>
          <strong>Cover if needed.</strong>
          A non-stick pad keeps the staples from catching on clothing or bedding. Replace it when it gets dirty or wet.
          <Cite id={['alberta-staples-healthwise', 'mp-wound-closed']} />
        </li>
      </ol>
      <p>
        You do not need antibiotic ointment. Plain petroleum jelly prevents infection as well, with less chance of an
        allergic rash.
        <Cite id="smack-1996" />
      </p>

      <h2>Showering</h2>
      <p>
        After the first 24 to 48 hours you can usually shower, if your surgeon says it is OK. Let water run gently over
        the area and pat it dry.
        <Cite id={['alberta-staples-healthwise', 'mp-wound-closed']} /> Getting the wound wet in the shower does not
        seem to raise the chance of infection.
        <Cite id="heal-2006-sutures-wet" />
      </p>
      <p>
        Do not soak the wound in a bath, hot tub, or pool. Wait until the staples are out and the wound has healed.
        <Cite id={['alberta-staples-healthwise', 'mp-wound-closed']} />
      </p>

      <h2>Getting the staples out</h2>
      <p>
        Never try to take staples out yourself. Your surgeon's office will remove them, usually in 7 to 14 days. On the
        scalp, it is often 7 to 10 days.
        <Cite id={['alberta-staples-healthwise', 'statpearls-facial-laceration']} />
      </p>
      <p>
        Go to your removal visit on time. Staples left in too long can leave small marks along the scar.{' '}
        <Cite id={['statpearls-facial-laceration', 'nebraska-mohs-aftercare']} />
      </p>

      <h2>Activity</h2>
      <p>
        Avoid anything that could pull the wound open. For 1 to 2 weeks, avoid hard exercise, heavy lifting, and bending
        over. Surgeons give different limits, so follow yours.
        <Cite id={['alberta-staples-healthwise', 'dartmouth-mohs-handbook', 'erickson-2022-periop-survey']} /> See{' '}
        <Link to="/daily-life">Daily life</Link>.
      </p>

      <h2>What to expect</h2>
      <ul className="timeline">
        <li>
          <span className="when">Days 1 to 2</span>
          <span>
            A little oozing of blood is normal.
            <Cite id="alberta-staples-healthwise" />
          </span>
        </li>
        <li>
          <span className="when">Days 3 to 14</span>
          <span>
            Swelling goes down. A thin ring of pink skin along the wound is normal.
            <Cite id="roswell-mohs" /> The staples come out at your clinic visit.
          </span>
        </li>
        <li>
          <span className="when">After removal</span>
          <span>
            The scar keeps softening and fading for a year or more.
            <Cite id={['acms-postop', 'dartmouth-mohs-handbook']} /> See <Link to="/scars-and-sun">Scars and sun</Link>.
          </span>
        </li>
      </ul>

      <WhenToCall />
    </Page>
  );
}
