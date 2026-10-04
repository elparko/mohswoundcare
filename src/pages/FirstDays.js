import { Link } from 'react-router-dom';
import Page, { Box, Cite } from '../components/Page';
import WhenToCall from '../components/WhenToCall';

export default function FirstDays() {
  return (
    <Page
      title="The first 48 hours"
      eyebrow="Start here"
      lede="What to do on the day of surgery and the next two days. This applies to every kind of Mohs wound."
      next={{ to: '/#wound-type', label: 'Daily care for your type of wound' }}
    >
      <Box kind="summary" title="The short version">
        <ul>
          <li>
            Leave the bandage from the clinic on and keep it dry for as long as your surgeon said. This is usually 24 to
            48 hours.
          </li>
          <li>Rest. Do not bend over, lift heavy things, or exercise.</li>
          <li>If the wound bleeds, press on it firmly for 20 minutes by the clock without lifting to check.</li>
          <li>Keep taking medicines your doctor prescribed, including blood thinners, unless you were told to stop.</li>
          <li>Swelling and bruising are normal. They are usually worst around day 2.</li>
        </ul>
      </Box>
      <h2>The bandage from the clinic</h2>
      <p>
        You will go home with a thick bandage that presses on the wound. It lowers the chance of bleeding and swelling.
        Leave it on and keep it dry.
        <Cite id={['nebraska-mohs-aftercare', 'ummc-mohs']} />
      </p>
      <p>
        Surgeons differ on how long. Some say until the next day. Others say 2 days.
        <Cite id={['ucla-mohs-faq', 'nebraska-mohs-aftercare', 'sanchez-2024-wound-care-review']} /> Follow what your
        surgeon told you. When the bandage comes off, start the daily care for{' '}
        <Link to="/#wound-type">your type of wound</Link>.
      </p>
      <h2 id="bleeding">If the wound bleeds</h2>
      <p>
        Bleeding is most likely in the first 2 days.
        <Cite id={['bunick-2011-hemorrhagic', 'statpearls-mohs-complications']} /> A small spot of blood on the bandage
        is normal. <Cite id="alberta-staples-healthwise" /> If blood soaks through the bandage or runs out from under
        it:
      </p>
      <Box kind="danger" title="Call 911 right away if" headingLevel={3}>
        {' '}
        <p>
          {' '}
          Bleeding is heavy and firm pressure is not slowing it. <Cite id="mp-bleeding" /> Or you feel dizzy or faint,
          or your skin is pale, cool, and clammy. <Cite id="mp-shock" /> Keep pressing while you wait for help.{' '}
        </p>{' '}
      </Box>{' '}
      <p>Otherwise, follow these steps:</p>{' '}
      <ol className="steps">
        <li>
          <strong>Lie down or sit down.</strong>
          Stay calm.
        </li>
        <li>
          <strong>Press firmly.</strong>
          Press hard with a clean gauze pad or a folded clean cloth, right over the bleeding spot. You can press on top
          of the bandage. If blood soaks through, add more gauze on top. Do not pull the old gauze off.
          <Cite id={['bunick-2011-hemorrhagic', 'dartmouth-mohs-handbook', 'mp-bleeding']} />
        </li>
        <li>
          <strong>Hold for 20 minutes by the clock.</strong>
          Keep pressing the whole time. Do not lift to check. Lifting early lets the bleeding start again.
          <Cite id={['roswell-mohs', 'ummc-mohs', 'aad-biopsy']} />
        </li>
        <li>
          <strong>Still bleeding? Press for 20 more minutes.</strong>
          <Cite id={['roswell-mohs', 'statpearls-mohs-complications']} />
        </li>
        <li>
          <strong>Still bleeding after that? Get help.</strong>
          Call your surgeon's office, using the after-hours number if it is late. If you cannot reach them, go to the
          emergency room or call 911.
          <Cite id={['ummc-mohs', 'roswell-mohs', 'mp-bleeding']} />
        </li>
      </ol>
      <Box kind="warn" title="A swelling that grows fast" headingLevel={3}>
        <p>
          Call your surgeon right away if a firm, painful lump grows quickly under the wound. This can be blood
          collecting under the skin. It is most urgent near the eye or on the neck.{' '}
          <Cite id={['bunick-2011-hemorrhagic', 'statpearls-mohs-complications']} /> If it is near your eye or on your
          neck, and you cannot reach your surgeon, go to the emergency room.
        </p>
      </Box>
      <h2>Your usual medicines</h2>
      <p>
        If a doctor told you to take aspirin, including baby aspirin, warfarin (Coumadin), or clopidogrel (Plavix), keep
        taking it. Do this unless that doctor or your surgeon told you to stop. Guidelines for skin cancer surgery say
        to continue these medicines.
        <Cite id={['asps-measures', 'bordeaux-2011']} /> Stopping them around surgery has led to strokes, heart attacks,
        and deaths.
        <Cite id={['kovich-2003', 'otley-2003']} />
      </p>
      <p>
        For newer blood thinners such as apixaban (Eliquis), rivaroxaban (Xarelto), or dabigatran (Pradaxa), doctors'
        plans differ. Follow the plan your surgeon and the doctor who prescribes it gave you.
        <Cite id={['siscos-2021', 'isted-2018', 'asps-measures']} />
      </p>
      <p>
        Do not take extra aspirin, ibuprofen (Advil, Motrin), or naproxen (Aleve) for pain unless your surgeon says it
        is OK.
        <Cite id={['ummc-mohs', 'roswell-mohs']} /> See <Link to="/pain">Pain</Link> for what to take instead.
      </p>
      <h2>Swelling and bruising</h2>
      <p>
        Swelling is usually worst about 2 days after surgery. It then slowly gets better over 1 to 2 weeks.
        <Cite id={['nebraska-mohs-aftercare', 'dartmouth-mohs-handbook']} />
      </p>
      <p>
        Surgery on the forehead, temple, nose, or cheek can cause puffy eyelids or a black eye. Surgery on the lip often
        causes a lot of swelling. These are normal and go away on their own.
        <Cite id={['bunick-2011-hemorrhagic', 'dartmouth-mohs-handbook']} />
      </p>
      <h3>What helps</h3>
      <ul>
        <li>
          <strong>Ice:</strong> Wrap an ice pack or a bag of frozen peas in a thin towel. Hold it around the edges of
          the bandage for about 20 minutes. Do this a few times a day for the first day or two. Never put ice right on
          the skin. Keep the bandage dry.
          <Cite id={['nebraska-mohs-aftercare', 'ummc-mohs', 'mp-cold']} />
        </li>
        <li>
          <strong>Keep it raised:</strong> If the wound is on your head or face, sleep with your head on two pillows. If
          it is on an arm or leg, rest with it raised above your heart when you can.
          <Cite id={['ummc-mohs', 'mp-flaps']} />
        </li>
      </ul>
      <h2>Rest</h2>
      <p>
        Plan to rest for the rest of the day of surgery. The first 48 hours matter most.
        <Cite id={['dartmouth-mohs-handbook', 'ucla-mohs-faq']} /> Do not bend over, lift heavy things, or exercise.
        These raise your blood pressure and can start bleeding.
        <Cite id="bunick-2011-hemorrhagic" /> For how long to keep this up, see <Link to="/daily-life">Daily life</Link>
        .
      </p>
      <p>
        After surgery on the lip, eat soft foods, try not to talk or laugh too much, and do not use a straw. Do this for
        as long as your surgeon says. Take care when putting in or taking out dentures.
        <Cite id="bunick-2011-hemorrhagic" />
      </p>
      <WhenToCall />
    </Page>
  );
}
