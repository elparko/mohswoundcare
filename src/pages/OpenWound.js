import { Link } from 'react-router-dom';
import Page, { Box, Cite } from '../components/Page';
import WhenToCall from '../components/WhenToCall';

export default function OpenWound() {
  return (
    <Page
      title="Caring for a wound left open to heal"
      eyebrow="Wound type 05"
      lede="For wounds with no stitches, left to fill in and close on their own. Doctors call this healing by second intention."
      prev={{ to: '/skin-graft', label: 'Skin graft' }}
      next={{ to: '/warning-signs', label: 'Warning signs' }}
    >
      <Box kind="summary" title="The short version">
        <ul>
          <li>
            First, leave the clinic bandage on and dry for 24 to 48 hours.{' '}
            <Cite id={['ummc-mohs', 'dartmouth-mohs-handbook']} /> See{' '}
            <Link to="/first-48-hours">The first 48 hours</Link>.
          </li>
          <li>Then, once a day: wash gently, cover the wound with petroleum jelly, and put on a non-stick bandage.</li>
          <li>Keep the wound moist and covered until new skin has grown over it. Do not let it dry out and scab.</li>
          <li>Small wounds on the face often close in 3 to 6 weeks. Wounds below the knee often take 2 to 3 months.</li>
        </ul>
      </Box>

      <h2>How an open wound heals</h2>
      <p>
        An open wound heals from the bottom up. First, red, bumpy new tissue fills it in. Then new skin grows in from
        the edges, and the wound pulls in and gets smaller.
        <Cite id="potluru-2025-sih-review" />
      </p>
      <p>
        Where the wound is affects how it looks when healed. Wounds in curved-in places often heal so well the scar is
        hard to see. Examples are the inner corner of the eye and the bowl of the ear. Wounds on rounded places, like
        the tip of the nose or the cheek, may leave a small dent.
        <Cite id={['zitelli-1983-second-intention', 'gil-lianes-2025-sih-review']} />
      </p>
      <p>
        Open wounds often hurt less than wounds closed with stitches.
        <Cite id="statpearls-mohs-periop" />
      </p>

      <h2>What you need</h2>
      <ul className="checklist">
        <li>Mild soap</li>
        <li>Cotton swabs (Q-tips) and gauze</li>
        <li>Plain petroleum jelly, such as Vaseline</li>
        <li>Non-stick pads, such as Telfa</li>
        <li>Paper tape</li>
        <li>Clean scissors</li>
      </ul>

      <h2>Daily care, step by step</h2>
      <p>Start after the first bandage comes off. Do it once a day.</p>
      <ol className="steps">
        <li>
          <strong>Wash your hands.</strong>
        </li>
        <li>
          <strong>Take off the old bandage.</strong>
          If it sticks, wet it with warm water and wait a minute. Then peel it off slowly.
        </li>
        <li>
          <strong>Wash the wound gently.</strong>
          Use mild soap and water. Rinse, then pat dry. Do not scrub.
          <Cite id="aad-wound-care-scars" />
        </li>
        <li>
          <strong>Soften any crust.</strong>
          If there is dried crust, lay wet gauze on it for 15 to 20 minutes, then gently wipe it away.
          <Cite id="dartmouth-mohs-handbook" />
        </li>
        <li>
          <strong>Cover the wound with petroleum jelly.</strong>
          Use a clean cotton swab. Cover the whole wound.
          <Cite id={['gil-lianes-2025-sih-review', 'aad-wound-care-scars']} />
        </li>
        <li>
          <strong>Put on a non-stick bandage.</strong>
          Cut a non-stick pad a little bigger than the wound and hold it in place with paper tape.
          <Cite id="gil-lianes-2025-sih-review" />
        </li>
      </ol>
      <p>
        Keeping the wound moist matters. A wound that dries out and scabs heals more slowly.
        <Cite id="aad-wound-care-scars" /> You do not need antibiotic ointment. Plain petroleum jelly prevents infection
        as well.
        <Cite id="smack-1996" />
      </p>
      <p>
        Most people change the bandage once a day. Some surgeons use special dressings that stay on for several days.
        <Cite id={['roswell-mohs', 'gil-lianes-2025-sih-review']} /> Follow your surgeon's plan.
      </p>

      <h2>Showering</h2>
      <p>
        You can usually shower once the first bandage is off. Let water run gently over the wound, pat dry, then do your
        daily care. <Cite id="dartmouth-mohs-handbook" /> Do not soak the wound in a bath, hot tub, or pool until your
        surgeon says it has healed. Soaking can make the wound open up or get infected. <Cite id="mp-wound-closed" />
      </p>

      <h2>How long it takes</h2>
      <p>The time depends on how big and deep the wound is, and where it is.</p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">Wound</th>
              <th scope="col">Usual time to close</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Small or shallow, on the face or scalp</td>
              <td>
                About 3 to 6 weeks
                <Cite id="gil-lianes-2025-sih-review" />
              </td>
            </tr>
            <tr>
              <td>Larger or deeper, on the face or scalp</td>
              <td>
                6 to 10 weeks, sometimes longer
                <Cite id="gil-lianes-2025-sih-review" />
              </td>
            </tr>
            <tr>
              <td>Bone showing in the wound</td>
              <td>
                Several months
                <Cite id="gil-lianes-2025-sih-review" />
              </td>
            </tr>
            <tr>
              <td>Below the knee</td>
              <td>
                About 2 to 3 months
                <Cite id={['willenbrink-2024-leg-sih-rct', 'scherz-2025-leg-compression-rct']} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Keep doing your daily care until new skin covers the whole wound. Your surgeon will check how it is healing.
      </p>

      <h2>What to expect</h2>
      <ul className="timeline">
        <li>
          <span className="when">Days 1 to 2</span>
          <span>
            {' '}
            Keep the first bandage on and dry. Some swelling and bruising are normal.{' '}
            <Cite id={['ummc-mohs', 'roswell-mohs', 'dartmouth-mohs-handbook']} />{' '}
          </span>
        </li>
        <li>
          <span className="when">First weeks</span>
          <span>
            Red, bumpy tissue slowly fills the wound from the bottom.
            <Cite id="potluru-2025-sih-review" />
          </span>
        </li>
        <li>
          <span className="when">Later weeks</span>
          <span>
            Pink new skin grows in from the edges and the wound gets smaller.
            <Cite id="potluru-2025-sih-review" />
          </span>
        </li>
        <li>
          <span className="when">After it closes</span>
          <span>
            The new skin is pink at first. The scar keeps changing for a year or more.
            <Cite id="dartmouth-mohs-handbook" /> See <Link to="/scars-and-sun">Scars and sun</Link>.
          </span>
        </li>
      </ul>
      <p>
        If you are not sure whether something looks normal, call your surgeon's office. You can also send them a photo
        if they accept them.
      </p>

      <WhenToCall />
    </Page>
  );
}
