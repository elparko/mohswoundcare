import { useTitle } from '../components/Page';
import ContactForm from '../components/ContactForm';
import { LAST_REVIEWED } from '../content/site';

export default function About() {
  useTitle('About this site');
  return (
    <article className="article">
      <header className="masthead">
        <span className="eyebrow">About</span>
        <hr className="rule" />
        <h1>About this site</h1>
        <p className="lede">Who wrote it, where the information comes from, and how to reach me.</p>
      </header>

      <h2 id="author">Who wrote it</h2>
      <p>
        This site was written by Parker Smith, a medical student at LSU Health Shreveport. Before medical school I
        worked for a year as a medical assistant in a Mohs surgery clinic. Patients often went home with questions they
        forgot to ask. I made this site so the answers are easy to find and easy to read.
      </p>
      <p>
        <strong>I am not a doctor, and no doctor has reviewed this site yet.</strong> When a doctor reviews it, their
        name and the date will be listed here.
      </p>
      <p>
        More about me: <a href="https://elparko.com">elparko.com</a> and{' '}
        <a href="https://www.linkedin.com/in/parker-smith1/">my LinkedIn profile</a>.
      </p>

      <h2 id="purpose">Who this site is for</h2>
      <p>
        This site is for adults who have had Mohs surgery, and the people who help care for them. It gives general
        information about caring for the wound at home.
      </p>
      <p>
        It does not replace the instructions your surgeon gave you. If they are different, follow your surgeon. I cannot
        give advice about your own wound. For that, call your surgeon's office. For an emergency, call 911.
      </p>

      <h2 id="sources">How the information is chosen</h2>
      <ul>
        <li>
          Every health statement comes from a published source. Sources include medical journals, the National Library
          of Medicine, the U.S. Food and Drug Administration (FDA), the Centers for Disease Control and Prevention
          (CDC), the American Academy of Dermatology, and the American College of Mohs Surgery.
        </li>
        <li>Each page lists its sources at the bottom. Numbers in brackets, like [1], point to them.</li>
        <li>Where surgeons give different advice, the page says so.</li>
        <li>Where the research is weak or limited, the page says so.</li>
        <li>All pages were last reviewed in {LAST_REVIEWED}.</li>
      </ul>

      <h2 id="funding">Money and conflicts of interest</h2>
      <p>
        This site has no ads and no sponsors. I pay for it myself and earn no money from it. No company has paid to be
        mentioned. Brand names, such as Vaseline, are given only as examples. I have no financial ties to any product
        named on this site.
      </p>

      <h2 id="privacy">Privacy</h2>
      <p>
        This site does not use cookies, ads, or analytics, and it does not collect your personal information. The
        contact form below does not send anything by itself. It opens your own email app with your message filled in.
        Emails are read only by me and are not shared.
      </p>

      <h2 id="contact">Report a mistake or contact me</h2>
      <p>
        If you find a mistake, a broken link, or something hard to understand, please tell me. I will correct confirmed
        mistakes as soon as I can.
      </p>
      <ContactForm />
    </article>
  );
}
