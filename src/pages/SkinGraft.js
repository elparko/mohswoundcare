import { Link } from 'react-router-dom';
import Page, { Box, Cite } from '../components/Page';
import WhenToCall from '../components/WhenToCall';

export default function SkinGraft() {
  return (
    <Page
      title="Caring for a skin graft"
      eyebrow="Wound type 04"
      lede="For wounds covered with a patch of skin taken from another part of your body."
      prev={{ to: '/staples', label: 'Staples' }}
      next={{ to: '/warning-signs', label: 'Warning signs' }}
    >
      <Box kind="summary" title="The short version">
        <ul>
          <li>Do not remove the padded dressing on the graft. Keep it dry.</li>
          <li>It usually stays on for about 1 week. Your surgeon takes it off at a clinic visit.</li>
          <li>Protect the graft from bumps, rubbing, and pressure.</li>
          <li>
            The spot the skin came from is usually closed with stitches. Care for it the way your surgeon told you.
          </li>
          <li>A graft often looks dark red or purple at first. It gets lighter over months.</li>
        </ul>
      </Box>

      <h2>What a skin graft is</h2>
      <p>
        Your surgeon took a piece of skin from another spot and sewed it over the wound. Common spots are in front of or
        behind the ear, above the collarbone, or the inner arm.
        <Cite id="statpearls-skin-grafting" />
      </p>
      <p>
        For the graft to survive, it must stay pressed flat against the wound while new blood vessels grow into it. This
        connection is fragile. Rubbing, bumps, a pocket of blood under the graft, or infection can make it fail.
        <Cite id="statpearls-skin-grafting" />
      </p>

      <h2>The padded dressing (bolster)</h2>
      <p>
        Your surgeon may have stitched a padded dressing, called a bolster, on top of the graft. It holds the graft
        tight against the wound.
        <Cite id="statpearls-ftsg" />
      </p>
      <ul>
        <li>
          <strong>Do not touch it or take it off.</strong> Leave it in place for as long as your surgeon says.
          <Cite id="mp-flaps" />
        </li>
        <li>
          <strong>Keep it dry.</strong> Do not let the dressing get wet.
          <Cite id={['mp-flaps', 'mskcc-ftsg-patient']} /> Keep the area around it clean and free of dirt and sweat.
          <Cite id="mp-flaps" />
        </li>
        <li>
          <strong>It usually stays on for about 1 week,</strong> often 4 to 7 days. Your surgeon removes it at a clinic
          visit.
          <Cite id={['statpearls-ftsg', 'mp-flaps', 'sanchez-2024-wound-care-review']} />
        </li>
      </ul>
      <p>
        Some surgeons do not use a bolster for small grafts. They use a light dressing instead.
        <Cite id={['langtry-1998-no-bolster', 'armstrong-2022-no-bolster']} /> Follow the instructions you were given.
      </p>

      <h2>Protect the graft</h2>
      <ul>
        <li>
          Try not to bump, rub, or stretch the area.
          <Cite id={['mp-flaps', 'statpearls-skin-grafting']} />
        </li>
        <li>
          Raise the area above your heart when you can, using pillows. This helps with swelling.
          <Cite id="mp-flaps" />
        </li>
        <li>
          If your surgeon says it is OK, you can hold an ice pack on the bandage. Keep the bandage dry.
          <Cite id="mp-flaps" />
        </li>
        <li>
          Avoid hard exercise for several days. Ask your surgeon how long.
          <Cite id="mp-flaps" />
        </li>
        <li>
          Do not smoke. In one study, people who smoked a pack or more a day had part of a graft or flap die 3 times as
          often as nonsmokers.
          <Cite id={['goldminz-1991-smoking-flaps', 'statpearls-ftsg']} />
        </li>
      </ul>

      <h2>The spot the skin came from</h2>
      <p>
        The place where the skin was taken is usually closed with stitches. <Cite id="statpearls-ftsg" /> Follow your
        surgeon's instructions for its bandage. Some surgeons leave that bandage on for 4 to 7 days. Others have you
        take it off after 2 days and care for it like <Link to="/stitches">other stitches</Link>.{' '}
        <Cite id={['mp-flaps', 'mskcc-ftsg-patient']} /> This spot can hurt more than the graft itself.
        <Cite id="mp-flaps" />
      </p>

      <h2>After the bolster comes off</h2>
      <p>
        When the bolster comes off, the graft often looks dark red, purple, or bruised. This is common. What matters
        most is that the graft is stuck down to the wound, and your surgeon will check that.{' '}
        <Cite id="davis-2022-vumc-ftsg" /> Call your surgeon if the graft turns white, or if it turns very black in the
        first 2 weeks. <Cite id="statpearls-skin-grafting" />
      </p>
      <p>
        At first the graft and the spot the skin came from look dark pink. Over the next few months they get lighter and
        blend in more.
        <Cite id="mskcc-ftsg-patient" /> The area may itch as it heals. Do not scratch or pick at it.
        <Cite id="mp-flaps" /> Your surgeon will tell you how to care for the graft from then on.
      </p>

      <h2>What to expect</h2>
      <ul className="timeline">
        <li>
          <span className="when">Days 1 to 7</span>
          <span>The bolster stays on. Keep it dry. Some swelling and bruising are normal.</span>
        </li>
        <li>
          <span className="when">About 1 week</span>
          <span>The bolster comes off at a clinic visit. The graft may look dark red or purple.</span>
        </li>
        <li>
          <span className="when">Next few months</span>
          <span>
            The graft slowly gets lighter.
            <Cite id="mskcc-ftsg-patient" />
          </span>
        </li>
      </ul>

      <WhenToCall />
    </Page>
  );
}
