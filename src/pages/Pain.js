import { Link } from 'react-router-dom';
import Page, { Box, Cite } from '../components/Page';
import { AlertIcon } from '../components/Art';

export default function Pain() {
  return (
    <Page
      title="Pain after Mohs surgery"
      eyebrow="Comfort"
      lede="What to expect, which medicines to use, and how much is safe."
      prev={{ to: '/warning-signs', label: 'Warning signs' }}
      next={{ to: '/scars-and-sun', label: 'Scars and sun' }}
    >
      <Box kind="summary" title="The short version">
        <ul>
          <li>Pain is usually worst on the day of surgery and gets better each day.</li>
          <li>Start with acetaminophen (Tylenol). Never take more than the daily limit on the label.</li>
          <li>
            If your doctor says ibuprofen is safe for you, taking it with acetaminophen works better than acetaminophen
            alone.
          </li>
          <li>Many older adults should not take ibuprofen. Check the list below.</li>
          <li>Keep taking aspirin your doctor prescribed. Do not take extra aspirin for pain.</li>
        </ul>
      </Box>

      <h2>What to expect</h2>
      <p>
        Pain is usually worst on the day of surgery. It then gets better each day after that. About half of patients
        take any pain medicine on the day of surgery, and fewer each day after.
        <Cite id="firoz-2010" />
      </p>
      <p>
        You may have more pain after a skin flap, surgery on more than one spot, or surgery on the legs. Wounds left
        open to heal often hurt less.
        <Cite id={['firoz-2010', 'chen-2015']} />
      </p>

      <h2>Acetaminophen (Tylenol): start here</h2>
      <p>
        For most people, acetaminophen is the first choice. Ibuprofen has more risks for older adults.
        <Cite id={['mclawhorn-2020', 'beers-2023', 'dailymed-advil']} /> Follow the label, and never take more than the
        daily limit shown here.
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">Tablet</th>
              <th scope="col">How much</th>
              <th scope="col">Most in 24 hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Extra Strength, 500 mg</td>
              <td>
                2 tablets every 6 hours as needed
                <Cite id="dailymed-tylenol-es" />
              </td>
              <td>6 tablets (3,000 mg)</td>
            </tr>
            <tr>
              <td>Regular Strength, 325 mg</td>
              <td>
                2 tablets every 4 to 6 hours as needed
                <Cite id="dailymed-tylenol-rs" />
              </td>
              <td>10 tablets (3,250 mg)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Box kind="warn" title="Acetaminophen safety" headingLevel={3}>
        <ul>
          <li>
            Many prescription pain pills and cold and flu medicines also contain acetaminophen. Count them toward your
            daily total. Do not take two products with acetaminophen at once.
            <Cite id={['fda-acetaminophen', 'dailymed-tylenol-es']} />
          </li>
          <li>
            Ask your doctor or pharmacist first if you have liver disease or take warfarin (Coumadin). Also ask if you
            drink 3 or more alcoholic drinks a day.
            <Cite id={['fda-acetaminophen', 'dailymed-tylenol-es']} />
          </li>
        </ul>
      </Box>

      <h2>Adding ibuprofen, if it is safe for you</h2>
      <p>
        In a study of Mohs patients, acetaminophen and ibuprofen together worked better than acetaminophen alone. They
        also worked better than acetaminophen with codeine.
        <Cite id={['sniezek-2011', 'derry-2013']} /> In that study, both were taken at the same time.
        <Cite id="sniezek-2011" />
      </p>
      <p>
        Only add ibuprofen if your surgeon or doctor says it is safe for you. Many people who have Mohs surgery should
        not take it.
      </p>
      <Box
        kind="danger"
        title="Ask your doctor before taking ibuprofen if any of these are true"
        icon={<AlertIcon />}
        headingLevel={3}
      >
        <h4>Medicines you take</h4>
        <ul>
          <li>
            A blood thinner, or aspirin every day.
            <Cite id={['beers-2023', 'dailymed-advil']} />
          </li>
          <li>
            A steroid medicine, such as prednisone.
            <Cite id={['dailymed-advil', 'beers-2023']} />
          </li>
          <li>
            Another anti-inflammatory medicine, such as naproxen (Aleve) or meloxicam.
            <Cite id="dailymed-advil" />
          </li>
          <li>
            Water pills (diuretics).
            <Cite id="dailymed-advil" />
          </li>
        </ul>
        <h4>Your health</h4>
        <ul>
          <li>
            Kidney disease.
            <Cite id={['dailymed-advil', 'beers-2023']} />
          </li>
          <li>
            Heart failure, heart disease, high blood pressure, or a past stroke.
            <Cite id={['dailymed-advil', 'beers-2023']} />
          </li>
          <li>
            A past stomach ulcer or stomach bleeding.
            <Cite id={['dailymed-advil', 'beers-2023']} />
          </li>
          <li>
            Liver cirrhosis or asthma.
            <Cite id="dailymed-advil" />
          </li>
        </ul>
        <h4>Other</h4>
        <ul>
          <li>
            You are 60 or older. Your risk of stomach bleeding is higher.
            <Cite id="dailymed-advil" />
          </li>
          <li>
            You have 3 or more alcoholic drinks a day.
            <Cite id="dailymed-advil" />
          </li>
          <li>
            You have had an allergic reaction to any pain reliever. If so, do not take ibuprofen.
            <Cite id="dailymed-advil" />
          </li>
        </ul>
        <p>
          Naproxen (Aleve) has the same kinds of risks. Do not take it instead of ibuprofen without asking.
          <Cite id="beers-2023" />
        </p>
      </Box>
      <p>If your doctor says ibuprofen is OK, follow the label:</p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">Tablet</th>
              <th scope="col">How much</th>
              <th scope="col">Most in 24 hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ibuprofen (Advil, Motrin), 200 mg</td>
              <td>
                1 tablet every 4 to 6 hours. If 1 does not help, 2 tablets.
                <Cite id="dailymed-advil" />
              </td>
              <td>6 tablets (1,200 mg)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li>
          Use the smallest dose that works, for the fewest days.
          <Cite id="dailymed-advil" />
        </li>
        <li>
          If you take a daily low-dose aspirin for your heart, ibuprofen can make the aspirin work less well. Ask your
          doctor or pharmacist about timing.
          <Cite id={['dailymed-advil', 'fda-ibu-asa-2006']} />
        </li>
        <li>
          Stop ibuprofen and call a doctor if you feel faint or vomit blood. Also stop and call if you have black or
          bloody stools, or stomach pain that does not go away.
          <Cite id="dailymed-advil" />
        </li>
      </ul>

      <h2>Aspirin</h2>
      <p>
        Some people take aspirin, including baby aspirin, for the heart, a stent, a stroke, or a blood clot. If a doctor
        told you to take it, keep taking it. Do not stop unless that doctor or your surgeon tells you to. Stopping it
        around surgery has led to strokes and heart attacks.
        <Cite id={['asps-measures', 'kovich-2003']} />
      </p>
      <p>
        Do not take extra aspirin for pain after surgery. It can make bleeding more likely.
        <Cite id={['ummc-mohs', 'roswell-mohs']} />
      </p>

      <h2>Prescription pain pills</h2>
      <p>
        Most people do not need opioid pain pills, sometimes called narcotics, after Mohs surgery. Acetaminophen, with
        or without ibuprofen, is usually enough.
        <Cite id={['donigan-2021', 'mclawhorn-2020', 'asps-measures']} />
      </p>
      <p>
        If you are prescribed one, take it exactly as directed. Some of these pills also contain acetaminophen. Check
        the label or ask your pharmacist, and count it toward your daily limit.{' '}
        <Cite id={['fda-acetaminophen', 'dailymed-tylenol-es']} />
      </p>

      <h2>Without medicine</h2>
      <ul>
        <li>
          <strong>Ice:</strong> In the first day or two, wrap an ice pack in a towel. Hold it near the bandage for 15 to
          20 minutes at a time. Keep the bandage dry.
          <Cite id={['mp-cold', 'ummc-mohs']} />
        </li>
        <li>
          <strong>Keep it raised:</strong> Raise the wound above your heart when you can. For the head or face, sleep on
          two pillows.
          <Cite id={['ummc-mohs', 'mp-flaps']} />
        </li>
      </ul>

      <Box kind="danger" title="Call 911 if" icon={<AlertIcon />} headingLevel={3}>
        <p>
          Your face, lips, tongue, or throat swell, or you have trouble breathing, after taking a medicine.
          <Cite id="mp-anaphylaxis" />
        </p>
      </Box>
      <p>
        Call your surgeon's office if your pain gets worse after the first 2 days. Also call if your pain medicine does
        not help.
        <Cite id={['firoz-2010', 'mp-flaps']} /> If you still need pain medicine after 10 days, ask your doctor.{' '}
        <Cite id={['dailymed-tylenol-es', 'dailymed-advil']} /> See <Link to="/warning-signs">Warning signs</Link>.
      </p>
    </Page>
  );
}
