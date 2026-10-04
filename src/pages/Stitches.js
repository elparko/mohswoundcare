import { Link } from 'react-router-dom';
import Page, { Box, Cite } from '../components/Page';
import WhenToCall from '../components/WhenToCall';

export default function Stitches() {
  return (
    <Page
      title="Caring for stitches"
      eyebrow="Wound type 01"
      lede="For wounds closed with stitches, also called sutures. This includes skin flaps, where nearby skin was moved to cover the wound."
      prev={{ to: '/first-48-hours', label: 'The first 48 hours' }}
      next={{ to: '/warning-signs', label: 'Warning signs' }}
    >
      <Box kind="summary" title="The short version">
        <ul>
          <li>
            First, leave the clinic bandage on and dry for 24 to 48 hours. See{' '}
            <Link to="/first-48-hours">The first 48 hours</Link>.
          </li>
          <li>Then, once a day: wash gently with soap and water, pat dry, add plain petroleum jelly, and cover.</li>
          <li>You do not need antibiotic ointment.</li>
          <li>You can usually shower once the first bandage is off. Do not soak the wound.</li>
          <li>Keep doing this until your stitches come out.</li>
        </ul>
      </Box>

      <h2>What you need</h2>
      <ul className="checklist">
        <li>Mild soap, such as unscented Dove or Cetaphil</li>
        <li>Cotton swabs (Q-tips)</li>
        <li>Plain petroleum jelly, such as Vaseline</li>
        <li>Non-stick pads, such as Telfa</li>
        <li>Paper tape</li>
        <li>Clean scissors</li>
      </ul>

      <h2>Daily care, step by step</h2>
      <p>Start this after the first bandage comes off. Do it once a day.</p>
      <ol className="steps">
        <li>
          <strong>Wash your hands.</strong>
          Use soap and water.
        </li>
        <li>
          <strong>Take off the old bandage.</strong>
          If it sticks, wet it with warm water and wait a minute. Then peel it off slowly.
        </li>
        <li>
          <strong>Wash the wound gently.</strong>
          Use mild soap and water. Rinse, then pat dry with a clean towel or gauze. Do not scrub.
          <Cite id={['aad-wound-care-scars', 'nebraska-mohs-aftercare']} />
        </li>
        <li>
          <strong>Soften any crust.</strong>
          If there is dried crust, lay wet gauze on it for 15 to 20 minutes. Then gently wipe with a cotton swab. Do not
          pick at it.
          <Cite id="dartmouth-mohs-handbook" />
        </li>
        <li>
          <strong>Add petroleum jelly.</strong>
          Use a clean cotton swab to spread a layer of plain petroleum jelly over the stitches.
          <Cite id="dartmouth-mohs-handbook" />
        </li>
        <li>
          <strong>Cover it.</strong>
          Put a non-stick pad on top and hold it in place with paper tape.
          <Cite id="dartmouth-mohs-handbook" />
        </li>
      </ol>
      <p>
        Change the bandage once a day, and any time it gets wet or soaked through. Keep doing this until your stitches
        come out or the wound has healed.
        <Cite id="dartmouth-mohs-handbook" />
      </p>

      <h2>Why plain petroleum jelly?</h2>
      <p>
        Petroleum jelly keeps the wound from drying out and forming a scab. Wounds with scabs take longer to heal.
        <Cite id={['aad-wound-care-scars', 'junker-2013-moist-healing']} />
      </p>
      <p>
        In a large study of skin surgery patients, plain petroleum jelly prevented infection as well as antibiotic
        ointment.
        <Cite id={['smack-1996', 'saco-2015-topical-abx-ma']} /> Antibiotic ointments, especially ones with neomycin
        such as Neosporin, can cause an itchy, red allergic rash.
        <Cite id={['sheth-2008-topical-antimicrobials', 'gette-1992-acd-antibiotics']} />
      </p>
      <p>
        Some surgeons recommend Aquaphor, a petroleum jelly ointment with lanolin.{' '}
        <Cite id="diana-2019-lanolin-ointment" /> A few still recommend an antibiotic ointment.
        <Cite id="nijhawan-2013-emollient-survey" /> If your surgeon told you which one to use, use that one.
      </p>

      <h2>Showering</h2>
      <p>
        You can usually shower once the first bandage is off, after 24 to 48 hours. Let the water run gently over the
        wound. Do not aim the spray right at it. Pat dry, then do your daily care.
        <Cite id={['dartmouth-mohs-handbook', 'cleveland-incision-care']} />
      </p>
      <p>
        In a study of 857 patients, getting stitches wet in the first 48 hours did not raise infection risk.
        <Cite id={['heal-2006-sutures-wet', 'dayton-2013-showering-sr']} /> The research on this is limited, and
        surgeons differ.
        <Cite id="toon-2015-cochrane-bathing" /> Follow your surgeon's timing.
      </p>
      <p>
        Do not soak the wound. That means no baths, hot tubs, or swimming until your stitches are out.
        <Cite id={['dartmouth-mohs-handbook', 'cleveland-incision-care']} />
      </p>

      <h2>When stitches come out</h2>
      <p>
        Your surgeon will tell you when to come back. After Mohs surgery this is often 1 to 2 weeks, depending on where
        the wound is.
        <Cite id="ucla-mohs-faq" /> For simple cuts, stitches usually come out at these times. After Mohs surgery your
        surgeon may wait longer.
        <Cite id={['forsch-2008-afp-laceration', 'statpearls-facial-laceration']} />
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">Where the wound is</th>
              <th scope="col">Usual time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Face</td>
              <td>About 3 to 6 days</td>
            </tr>
            <tr>
              <td>Scalp and arms</td>
              <td>7 to 10 days</td>
            </tr>
            <tr>
              <td>Chest, back, and legs</td>
              <td>10 to 14 days</td>
            </tr>
            <tr>
              <td>Hands and feet</td>
              <td>10 to 14 days</td>
            </tr>
            <tr>
              <td>Palms and soles of the feet</td>
              <td>14 to 21 days</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Some stitches dissolve on their own and do not need to be removed. This can take a few weeks to a few months.{' '}
        <Cite id="cleveland-incision-care" /> Sometimes a bit of thread pokes out of the scar. If that happens, call
        your surgeon. <Cite id="dartmouth-mohs-handbook" /> Do not miss your removal visit. Stitches left in too long
        can leave marks.
        <Cite id="nebraska-mohs-aftercare" />
      </p>

      <h2>If you had a skin flap</h2>
      <p>
        Care for a flap the same way as other stitches. Flaps have a somewhat higher chance of infection than other
        repairs, so check the wound every day.
        <Cite id="rogers-2010" />
      </p>
      <p>
        Smoking makes problems with flaps much more likely, including the edge of the flap dying. If you smoke, not
        smoking while you heal gives the flap the best chance.
        <Cite id={['wang-2019-smoking-mohs', 'goldminz-1991-smoking-flaps']} />
      </p>

      <h2>What to expect</h2>
      <ul className="timeline">
        <li>
          <span className="when">Days 1 to 2</span>
          <span>
            Swelling, bruising, and some pain are normal.{' '}
            <Cite id={['acms-postop', 'firoz-2010', 'dartmouth-mohs-handbook']} /> Keep the first bandage on and dry.
            See <Link to="/first-48-hours">The first 48 hours</Link>.
          </span>
        </li>
        <li>
          <span className="when">Day 2 until removal</span>
          <span>
            Swelling and bruising slowly fade over 1 to 2 weeks.
            <Cite id={['nebraska-mohs-aftercare', 'dartmouth-mohs-handbook']} /> A thin ring of pink or red skin right
            along the wound edge is normal and fades slowly.
            <Cite id="roswell-mohs" />
          </span>
        </li>
        <li>
          <span className="when">After removal</span>
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
