import Page, { Box, Cite } from '../components/Page';

export default function ScarsAndSun() {
  return (
    <Page
      title="Scars, sun, and skin checks"
      eyebrow="After healing"
      lede="How your scar will change, what helps, and how to protect your skin from here on."
      prev={{ to: '/pain', label: 'Pain' }}
      next={{ to: '/daily-life', label: 'Daily life' }}
    >
      <Box kind="summary" title="The short version">
        <ul>
          <li>Your scar will keep getting flatter and lighter for a year or more.</li>
          <li>Do not put vitamin E on your scar. It does not help and often causes a rash.</li>
          <li>Once the wound has healed, put sunscreen on the scar every day.</li>
          <li>Because you had skin cancer, protect all your skin from the sun for life.</li>
          <li>See your skin doctor for a skin check at least once a year.</li>
        </ul>
      </Box>

      <h2>How your scar will change</h2>
      <ul className="timeline">
        <li>
          <span className="when">First weeks</span>
          <span>
            A pink or red scar is normal. The redness fades with time.
            <Cite id="acms-faq" />
          </span>
        </li>
        <li>
          <span className="when">4 to 6 weeks</span>
          <span>
            The scar may feel firm, tight, or bumpy as it pulls in. On the face this is almost always temporary.
            <Cite id="acms-faq" />
          </span>
        </li>
        <li>
          <span className="when">Up to 1 year or more</span>
          <span>
            The scar keeps getting stronger, flatter, and lighter.
            <Cite id={['acms-faq', 'acms-postop', 'statpearls-phases']} />
          </span>
        </li>
      </ul>
      <p>
        Give your scar time before you judge how it will look. If you have concerns, ask your surgeon at your follow-up
        visit.
      </p>

      <h2>What helps a scar</h2>
      <h3>Sunscreen</h3>
      <p>
        Once the wound has healed, put sunscreen on the scar. Sun can turn a new scar red or brown. Sunscreen can help
        it fade faster.
        <Cite id="aad-wound-care-scars" />
      </p>
      <h3>Silicone gel or sheets</h3>
      <p>
        Silicone gel or sheets are the most-used scar product. They help most for thick or raised scars.
        <Cite id="monstrey-2014" /> The research on them is limited.
        <Cite id="cochrane-silicone-2013" /> Use them only on skin that has fully closed. Follow the directions on the
        package.
        <Cite id="aad-wound-care-scars" /> Ask your surgeon whether you need them.
      </p>
      <h3>Massage</h3>
      <p>
        Scar massage is optional. Studies on it are small and weak.
        <Cite id="shin-2012" /> If your surgeon suggests it, ask when to start and how often.
      </p>

      <Box kind="warn" title="Do not use vitamin E" headingLevel={3}>
        <p>
          In one study after skin cancer surgery, vitamin E did not help the scar in 9 of 10 cases. It sometimes made
          the scar look worse. One in 3 people got an itchy rash from it.
          <Cite id="baumann-1999" />
        </p>
      </Box>

      <h2>Protecting your skin from the sun</h2>
      <p>
        Sun protection after skin cancer can prevent new skin cancers.
        <Cite id={['aad-scc-after', 'aad-bcc-after']} /> You do not need to avoid the sun completely. You need to
        protect your skin every day.
        <Cite id="aad-bcc-after" />
      </p>
      <ol className="steps">
        <li>
          <strong>Choose the right sunscreen.</strong>
          The label should say broad spectrum, SPF 30 or higher, and water resistant.
          <Cite id={['aad-bcc-after', 'aad-scc-after']} />
        </li>
        <li>
          <strong>Put it on 15 minutes before you go outside.</strong>
          Use at least 1 teaspoon for your face.
          <Cite id="aad-bcc-after" />
        </li>
        <li>
          <strong>Put it on again every 2 hours,</strong> and after swimming or sweating.
          <Cite id={['aad-bcc-after', 'aad-safe-sun']} />
        </li>
        <li>
          <strong>Cover up.</strong>
          Wear a wide-brimmed hat, long sleeves, and sunglasses that block UV light.
          <Cite id="aad-bcc-after" />
        </li>
        <li>
          <strong>Find shade in the middle of the day.</strong>
          If your shadow is shorter than you are, the sun is strong. Water, sand, snow, and cement reflect sun onto your
          skin.
          <Cite id={['aad-safe-sun', 'cdc-prevention']} />
        </li>
        <li>
          <strong>Never use tanning beds or sunlamps.</strong>
          <Cite id="aad-bcc-after" />
        </li>
      </ol>
      <p>
        The UV Index tells you how strong the sun will be each day. Most weather apps show it. The U.S. Environmental
        Protection Agency (EPA) also has a free UV Index app.
        <Cite id="epa-uv-index" />
      </p>

      <h2>Skin checks</h2>
      <p>
        After a first skin cancer, about 4 in 10 people get another one within 5 years. After more than one, about 8 in
        10 do.
        <Cite id="wehner-2015" /> Having had skin cancer also raises your risk of melanoma.
        <Cite id="aad-bcc-after" />
      </p>
      <ul>
        <li>
          See your skin doctor for a full skin check at least once a year, or more often if they ask.
          <Cite id={['aad-bcc-guideline-page', 'firnhaber-2020']} />
        </li>
        <li>
          Check your own skin as often as your skin doctor tells you. Use a mirror, or ask someone to check your back.
          <Cite id={['aad-bcc-after', 'aad-scc-after']} />
        </li>
        <li>
          Call your skin doctor right away if any spot, including your Mohs scar, grows, bleeds, or changes.
          <Cite id="aad-scc-after" />
        </li>
      </ul>

      <h3>Signs of basal cell and squamous cell skin cancer</h3>
      <p>
        Most people who have Mohs surgery had one of these two types.
        <Cite id="aad-mohs" /> Look for:
      </p>
      <ul>
        <li>
          A sore that does not heal, or heals and comes back.
          <Cite id={['aad-bcc', 'aad-scc']} />
        </li>
        <li>
          A firm bump that may be shiny, pink, or dome-shaped.
          <Cite id={['aad-bcc', 'aad-scc']} />
        </li>
        <li>
          A rough, scaly patch.
          <Cite id={['aad-bcc', 'aad-scc']} />
        </li>
        <li>
          A new spot that looks like a scar, or a change in an old scar.
          <Cite id={['aad-bcc', 'aad-scc']} />
        </li>
        <li>
          A growth that looks like a wart or a small horn.
          <Cite id="aad-scc" />
        </li>
      </ul>

      <h3>Signs of melanoma: the ABCDEs</h3>
      <p>
        Melanoma is another type of skin cancer. Check your moles for these signs:
        <Cite id="aad-abcde" />
      </p>
      <ul>
        <li>
          <strong>A</strong>symmetry: one half does not match the other.
        </li>
        <li>
          <strong>B</strong>order: the edge is uneven or blurry.
        </li>
        <li>
          <strong>C</strong>olor: more than one color.
        </li>
        <li>
          <strong>D</strong>iameter: usually bigger than a pencil eraser, about 6 millimeters (¼ inch), but it can be
          smaller.
        </li>
        <li>
          <strong>E</strong>volving: changing in size, shape, or color.
        </li>
      </ul>
      <p>
        Also see your skin doctor for any new spot. Go for a spot that looks different from your others, or one that
        itches or bleeds.
        <Cite id="aad-abcde" />
      </p>
    </Page>
  );
}
