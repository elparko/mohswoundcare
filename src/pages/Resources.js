import Page, { Cite } from '../components/Page';

const GROUPS = [
  {
    heading: 'Mohs surgery and recovery',
    links: [
      {
        name: 'What to expect after Mohs surgery',
        org: 'American College of Mohs Surgery',
        href: 'https://www.mohscollege.org/for-patients/about-mohs-surgery/post-operative-care',
      },
      {
        name: 'Mohs surgery questions and answers',
        org: 'American College of Mohs Surgery',
        href: 'https://www.mohscollege.org/for-patients/about-mohs-surgery/mohs-surgery-faqs',
      },
      {
        name: 'What is Mohs surgery?',
        org: 'American Academy of Dermatology',
        href: 'https://www.aad.org/public/diseases/skin-cancer/types/common/melanoma/mohs-surgery',
      },
      {
        name: 'Caring for a closed surgical wound',
        org: 'MedlinePlus, National Library of Medicine',
        href: 'https://medlineplus.gov/ency/patientinstructions/000738.htm',
      },
      {
        name: 'Caring for skin flaps and grafts',
        org: 'MedlinePlus, National Library of Medicine',
        href: 'https://medlineplus.gov/ency/patientinstructions/000743.htm',
      },
    ],
  },
  {
    heading: 'Life after skin cancer',
    links: [
      {
        name: 'Basal cell carcinoma: life after treatment',
        org: 'American Academy of Dermatology',
        href: 'https://www.aad.org/public/diseases/skin-cancer/basal-cell-carcinoma/outcome-life-after-treatment',
      },
      {
        name: 'Squamous cell carcinoma: life after treatment',
        org: 'American Academy of Dermatology',
        href: 'https://www.aad.org/public/diseases/skin-cancer/squamous-cell-carcinoma/outlook-life-after-treatment',
      },
      {
        name: 'How to check your own skin',
        org: 'American Academy of Dermatology',
        href: 'https://www.aad.org/public/diseases/skin-cancer/find/check-skin',
      },
      {
        name: 'Skin cancer treatment, patient version',
        org: 'National Cancer Institute',
        href: 'https://www.cancer.gov/types/skin/patient/skin-treatment-pdq',
      },
    ],
  },
  {
    heading: 'Sun protection',
    links: [
      {
        name: 'How to protect your skin from the sun',
        org: 'American Academy of Dermatology',
        href: 'https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/practice-safe-sun',
      },
      {
        name: 'Reducing your risk of skin cancer',
        org: 'Centers for Disease Control and Prevention (CDC)',
        href: 'https://www.cdc.gov/skin-cancer/prevention/index.html',
      },
      {
        name: 'The daily UV Index and free app',
        org: 'U.S. Environmental Protection Agency (EPA)',
        href: 'https://www.epa.gov/sunsafety/uv-index-1',
      },
    ],
  },
  {
    heading: 'Help with quitting smoking',
    links: [
      {
        name: 'Free quit-smoking coaching by phone: 1-800-QUIT-NOW',
        org: 'Centers for Disease Control and Prevention (CDC)',
        href: 'https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/quitline/index.html',
      },
    ],
  },
];

export default function Resources() {
  return (
    <Page
      title="Resources"
      eyebrow="Learn more"
      lede="Trusted places to learn more, from medical societies and U.S. government health agencies."
      prev={{ to: '/daily-life', label: 'Daily life' }}
      next={{ to: '/about', label: 'About this site' }}
    >
      <h2>About Mohs surgery</h2>
      <p>
        Mohs surgery removes skin cancer one thin layer at a time. The surgeon checks each layer under a microscope
        while you wait, until no cancer cells are seen.
        <Cite id="aad-mohs" /> This keeps as much healthy skin as possible.
        <Cite id="aad-mohs" />
      </p>
      <p>
        Mohs has a high cure rate. For a first-time basal cell skin cancer, it cures about 99 out of 100.
        <Cite id={['statpearls-mohs', 'acms-postop']} /> For squamous cell skin cancer, it cures about 92 to 99 out of
        100.
        <Cite id="statpearls-mohs" />
      </p>

      {GROUPS.map((group) => (
        <section key={group.heading}>
          <h2>{group.heading}</h2>
          <ul className="resource-list">
            {group.links.map((link) => (
              <li key={link.href}>
                <a className="name" href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
                <p>{link.org}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <h2>Where to buy supplies</h2>
      <p>
        Petroleum jelly, non-stick pads, paper tape, and gauze are sold at any pharmacy, in the store or online. You do
        not need special brands.
      </p>
    </Page>
  );
}
