import { Link } from 'react-router-dom';
import Page, { Box, Cite } from '../components/Page';

export default function DailyLife() {
  return (
    <Page
      title="Daily life while you heal"
      eyebrow="Everyday questions"
      lede="Exercise, showering, sleep, smoking, and eating while your wound heals."
      prev={{ to: '/scars-and-sun', label: 'Scars and sun' }}
      next={{ to: '/resources', label: 'Resources' }}
    >
      <Box kind="summary" title="The short version">
        <ul>
          <li>Rest on the day of surgery. Avoid hard exercise, heavy lifting, and bending over for 1 to 2 weeks.</li>
          <li>You can usually shower after the first 24 to 48 hours. Do not soak the wound.</li>
          <li>Sleep with your head raised if the wound is on your head or face.</li>
          <li>Do not smoke. Smoking slows healing.</li>
          <li>Eat regular meals with protein.</li>
        </ul>
      </Box>

      <h2>Exercise and activity</h2>
      <p>
        The first 48 hours matter most. Plan to rest for the rest of the day of surgery.
        <Cite id="dartmouth-mohs-handbook" />
      </p>
      <p>
        For about 1 to 2 weeks, avoid hard exercise, heavy lifting, and bending over. These raise your heart rate and
        pull on the wound. That can cause bleeding, swelling, or open the stitches.{' '}
        <Cite id={['bunick-2011-hemorrhagic', 'ucla-mohs-faq', 'dartmouth-mohs-handbook']} />
      </p>
      <p>Surgeons give different limits. Two examples from major medical centers:</p>
      <ul>
        <li>
          No bending, heavy lifting, or hard activity for 1 week. No aerobic exercise or weight lifting for 2 weeks.
          <Cite id="roswell-mohs" />
        </li>
        <li>
          Do not lift more than 10 pounds for 1 to 2 weeks.
          <Cite id="dartmouth-mohs-handbook" />
        </li>
      </ul>
      <p>
        These limits come from surgeons' experience, and there is little research on them.{' '}
        <Cite id="erickson-2022-periop-survey" /> Your surgeon may give you different limits based on where your wound
        is. Follow theirs.
      </p>

      <h2>Showering, baths, and swimming</h2>
      <ul>
        <li>
          You can usually shower once the first bandage comes off, after 24 to 48 hours.
          <Cite id={['dartmouth-mohs-handbook', 'mp-wound-closed']} />
        </li>
        <li>
          Getting a closed wound wet in the shower does not seem to raise the chance of infection.
          <Cite id="heal-2006-sutures-wet" />
        </li>
        <li>
          Do not soak the wound in a bath, hot tub, or pool. Wait until stitches are out, or until your surgeon says an
          open wound has healed. Soaking can make the wound open up or get infected.
          <Cite id={['dartmouth-mohs-handbook', 'mp-wound-closed']} />
        </li>
        <li>
          Do not put makeup, lotion, or powder on the wound until it has healed.
          <Cite id="mp-wound-closed" />
        </li>
      </ul>
      <p>
        The care page for <Link to="/#wound-type">your type of wound</Link> has more detail.
      </p>

      <h2>Sleep</h2>
      <p>
        If the wound is on your head or face, sleep with your head raised on two pillows. If it is on an arm or leg,
        raise it above your heart when you can. This helps with swelling.
        <Cite id={['ummc-mohs', 'mp-flaps']} />
      </p>

      <h2>Smoking</h2>
      <p>
        Smoking slows healing. It raises the chance of infection, of the wound opening, and of skin at the edges dying.
        <Cite id="sorensen-2012-smoking-ma" /> After Mohs repairs with flaps or grafts, people who smoked had more
        problems.
        <Cite id="wang-2019-smoking-mohs" />
      </p>
      <p>
        If you smoke, stop for at least 1 to 2 weeks before and after surgery. Longer is better.
        <Cite id="statpearls-mohs-periop" /> Stopping around surgery lowers the chance of infection.
        <Cite id="sorensen-2012-smoking-ma" /> For free help quitting, call 1-800-QUIT-NOW (1-800-784-8669).
        <Cite id="cdc-quitline" />
      </p>

      <h2>Alcohol</h2>
      <p>
        Heavy drinking can slow healing.
        <Cite id="guo-2010" /> If you take acetaminophen (Tylenol), read the alcohol warning on the{' '}
        <Link to="/pain">Pain</Link> page.
      </p>

      <h2>Eating and drinking</h2>
      <ul>
        <li>
          Eat regular meals. Your body needs enough food to repair skin. Poor nutrition can slow healing and raise the
          chance of infection.
          <Cite id="stechmiller-2010" />
        </li>
        <li>
          Include protein at meals, such as eggs, fish, chicken, beans, milk, or yogurt. Older adults often need more
          protein than younger adults.
          <Cite id="bauer-2013" />
        </li>
        <li>
          If you have kidney disease, ask your doctor how much protein is right for you.
          <Cite id="bauer-2013" />
        </li>
        <li>
          Most healthy people get enough fluid by drinking when they are thirsty. You do not need a set number of
          glasses. <Cite id="nasem-water-2004" /> If you take water pills or have kidney or heart problems, ask your
          doctor how much to drink.
        </li>
        <li>
          If your doctor told you to limit fluids or salt, for example for heart failure, keep following that.
          <Cite id="medlineplus-hf-fluids" />
        </li>
        <li>
          If you have lost weight without trying, or do not feel like eating, tell your doctor.
          <Cite id="stechmiller-2010" />
        </li>
      </ul>

      <h2>Other health conditions</h2>
      <p>
        Diabetes, some medicines such as steroids, and older age can slow healing.
        <Cite id="guo-2010" /> Keep taking your usual medicines unless a doctor tells you to stop. If you have diabetes,
        ask your doctor about your blood sugar goals while you heal.
      </p>
    </Page>
  );
}
