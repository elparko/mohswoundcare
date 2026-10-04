import { Link } from 'react-router-dom';
import Page, { Box, Cite } from '../components/Page';
import WhenToCall from '../components/WhenToCall';

export default function WarningSigns() {
  return (
    <Page
      title="Warning signs and infection"
      eyebrow="When to get help"
      lede="What is normal while you heal, what is not, and who to call."
      prev={{ to: '/first-48-hours', label: 'The first 48 hours' }}
      next={{ to: '/pain', label: 'Pain' }}
    >
      <WhenToCall showLink={false} />

      <h2>What is normal</h2>
      <p>
        Some discomfort, redness, and swelling after surgery are expected. They should slowly get better.
        <Cite id="acms-postop" />
      </p>
      <Box kind="note" title="These are usually normal" headingLevel={3}>
        <ul>
          <li>
            Pain that is worst on the day of surgery and gets a little better each day.
            <Cite id="firoz-2010" />
          </li>
          <li>
            Swelling and bruising, especially near the eyes. They fade over 1 to 2 weeks.
            <Cite id={['roswell-mohs', 'dartmouth-mohs-handbook']} />
          </li>
          <li>
            A thin ring of pink or red skin right at the wound edge that slowly fades.
            <Cite id={['roswell-mohs', 'mp-normal-incision']} />
          </li>
          <li>
            A small amount of clear, pink, or blood-tinged fluid on the bandage in the first days.
            <Cite id={['mp-normal-incision', 'roswell-mohs']} />
          </li>
          <li>
            A little oozing of blood that stops when you press on it.{' '}
            <Cite id={['bunick-2011-hemorrhagic', 'aad-biopsy']} />
          </li>
          <li>
            Mild discomfort around the wound that slowly gets better.
            <Cite id="acms-postop" />
          </li>
        </ul>
      </Box>
      <p>
        The key question is the direction. Normal redness, swelling, and pain get better day by day. With infection,
        they get worse after the first 2 days.
        <Cite id={['mp-ssi', 'firoz-2010']} />
      </p>

      <h2>How common is infection?</h2>
      <p>
        Infection after Mohs surgery is uncommon. In large studies, about 1 in 100 patients or fewer got one.
        <Cite id={['rogers-2010', 'alam-2013']} />
      </p>
      <p>The chance is somewhat higher:</p>
      <ul>
        <li>
          After skin flap repairs.
          <Cite id="rogers-2010" />
        </li>
        <li>
          On the legs, scalp, back, or genitals.
          <Cite id="bordeaux-2011" />
        </li>
        <li>
          When blood collects under the wound.
          <Cite id="rogers-2010" />
        </li>
        <li>
          In people who smoke.
          <Cite id={['sorensen-2012-smoking-ma', 'miller-2018']} />
        </li>
      </ul>
      <p>
        Signs of infection usually start a few days after surgery, often between day 3 and day 7.
        <Cite id="cc-ssi" /> Look at your wound every day when you change the bandage.
      </p>

      <h2>Signs of infection</h2>
      <ul>
        <li>
          Redness, swelling, warmth, or pain that spreads or gets worse after the first 2 days.
          <Cite id={['mp-ssi', 'mp-wound-closed']} />
        </li>
        <li>
          Thick yellow, green, or tan fluid, or a bad smell.
          <Cite id={['mp-wound-closed', 'roswell-mohs']} />
        </li>
        <li>
          Fever of 100.4°F (38°C) or higher, or chills.
          <Cite id={['dartmouth-mohs-handbook', 'mp-ssi']} />
        </li>
        <li>
          Red streaks spreading out from the wound. This can spread within hours.
          <Cite id="mp-lymphangitis" />
        </li>
        <li>
          The wound gets bigger or deeper, or opens up. <Cite id={['mp-wound-closed', 'bunick-2011-hemorrhagic']} />
        </li>
      </ul>
      <p>If you notice any of these, call your surgeon's office the same day. See the lists at the top of this page.</p>

      <h2>Do I need antibiotics?</h2>
      <p>
        Most people do not need antibiotic pills after Mohs surgery.
        <Cite id={['rogers-2010', 'asps-measures', 'wright-2008']} /> Your surgeon may prescribe them in some cases.
        Examples are flaps on the nose, skin grafts, wedge repairs of the lip or ear, and surgery on the leg or groin.
        <Cite id="wright-2008" />
      </p>
      <p>
        If you are given antibiotics, take them exactly as prescribed. Do not save them for later or share them.
        <Cite id="cdc-antibiotics" />
      </p>
      <p>
        You also do not need antibiotic ointment, unless your surgeon prescribes it. <Cite id="smack-1996" /> See the
        care page for <Link to="/#wound-type">your type of wound</Link>.
      </p>
    </Page>
  );
}
