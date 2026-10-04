import { Link } from 'react-router-dom';
import { Box, Cite } from './Page';
import { AlertIcon, PhoneIcon } from './Art';

export default function WhenToCall({ showLink = true }) {
  return (
    <section aria-labelledby="when-to-call">
      <h2 id="when-to-call">When to get help</h2>
      <Box kind="danger" title="Call 911 or go to the emergency room now if" icon={<AlertIcon />} headingLevel={3}>
        <ul>
          <li>
            You feel confused, or someone has trouble waking you.
            <Cite id={['mp-fever', 'cdc-sepsis-about']} />
          </li>
          <li>
            You have trouble breathing.
            <Cite id={['mp-fever', 'cdc-sepsis-about']} />
          </li>
          <li>
            You have a fever, chills, or feel very cold. You also have a racing heart, clammy or sweaty skin, or extreme
            pain. This can be sepsis, a dangerous reaction to infection. People 65 and older are at higher risk.
            <Cite id={['cdc-sepsis-about', 'cdc-sepsis-patients']} />
          </li>
          <li>
            Your face, lips, tongue, or throat swell, or you start wheezing, after taking a medicine.
            <Cite id="mp-anaphylaxis" />
          </li>
          <li>
            Bleeding is heavy and firm pressure is not slowing it. Keep pressing while you call.{' '}
            <Cite id="mp-bleeding" />{' '}
          </li>{' '}
          <li>
            {' '}
            You feel dizzy or faint, or your skin is pale, cool, and clammy. <Cite id="mp-shock" />{' '}
          </li>{' '}
          <li>
            {' '}
            Bleeding will not stop after two rounds of firm pressure for 20 minutes each, and you cannot reach your
            surgeon.
            <Cite id={['mp-bleeding', 'ummc-mohs', 'roswell-mohs']} />
          </li>
        </ul>
      </Box>
      <Box kind="warn" title="Call your surgeon's office today if" icon={<PhoneIcon />} headingLevel={3}>
        <p>At night or on weekends, use the after-hours number. Do not wait until the next day.</p>
        <ul>
          <li>
            You have a fever of 100.4°F (38°C) or higher, or chills. If your surgeon gave you a different number, use
            theirs.
            <Cite id={['dartmouth-mohs-handbook', 'mp-ssi']} />
          </li>
          <li>
            Red streaks spread out from the wound. If you cannot reach your surgeon, go to the emergency room.
            <Cite id="mp-lymphangitis" />
          </li>
          <li>
            Redness, swelling, warmth, or pain is spreading or getting worse after the first 2 days.
            <Cite id={['mp-ssi', 'mp-wound-closed', 'firoz-2010']} />
          </li>
          <li>
            Thick yellow, green, or tan fluid comes from the wound, or it smells bad.
            <Cite id={['mp-wound-closed', 'roswell-mohs']} />
          </li>
          <li>
            Bleeding is still going after 20 minutes of firm pressure, or a firm, painful lump grows quickly under the
            wound. Keep pressing while you call. If the lump is near your eye or on your neck, and you cannot reach your
            surgeon, go to the emergency room.
            <Cite id={['aad-biopsy', 'roswell-mohs', 'bunick-2011-hemorrhagic']} />
          </li>
          <li>
            The wound opens, gets bigger or deeper, or turns dark. Or the edge of a flap or graft lifts up.{' '}
            <Cite id={['mp-wound-closed', 'dartmouth-mohs-handbook', 'ummc-mohs', 'mp-flaps']} />
          </li>
          <li>
            Pain does not get better with your pain medicine.
            <Cite id="mp-flaps" />
          </li>
        </ul>
      </Box>
      {showLink && (
        <p>
          <Link to="/warning-signs">What is normal, and more about infection</Link>
        </p>
      )}
    </section>
  );
}
