const SOURCES = {
  'rogers-2010': {
    cite: 'Rogers HD, et al. Prospective study of wound infections in Mohs micrographic surgery using clean surgical technique in the absence of prophylactic antibiotics. J Am Acad Dermatol. 2010;63(5):842-51.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/20800320/',
  },
  'alam-2013': {
    cite: 'Alam M, et al. Adverse events associated with Mohs micrographic surgery: multicenter prospective cohort study of 20,821 cases at 23 centers. JAMA Dermatol. 2013;149(12):1378-85.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/24080866/',
  },
  'bordeaux-2011': {
    cite: 'Bordeaux JS, et al. Prospective evaluation of dermatologic surgery complications including patients on multiple antiplatelet and anticoagulant medications. J Am Acad Dermatol. 2011;65(3):576-83.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/21782278/',
  },
  'otley-2003': {
    cite: 'Otley CC. Continuation of medically necessary aspirin and warfarin during cutaneous surgery. Mayo Clin Proc. 2003;78(11):1392-6.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/14601698/',
  },
  'kovich-2003': {
    cite: 'Kovich O, Otley CC. Thrombotic complications related to discontinuation of warfarin and aspirin therapy perioperatively for cutaneous operation. J Am Acad Dermatol. 2003;48(2):233-7.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/12582394/',
  },
  'isted-2018': {
    cite: 'Isted A, Cooper L, Colville RJ. Bleeding on the cutting edge: a systematic review of anticoagulant and antiplatelet continuation in minor cutaneous surgery. J Plast Reconstr Aesthet Surg. 2018;71(4):455-67.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29233507/',
  },
  'siscos-2021': {
    cite: 'Siscos SM, et al. Thrombotic complications with interruption of direct oral anticoagulants in dermatologic surgery. J Am Acad Dermatol. 2021;84(2):425-31.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33045293/',
  },
  'asps-measures': {
    cite: 'American Society of Plastic Surgeons. Reconstruction After Skin Cancer Resection: performance measure specifications (quotes guideline recommendations 3b, 4a, 4b, 5a verbatim).',
    url: 'https://www.plasticsurgery.org/documents/medical-professionals/quality-resources/Measure-Specifications-Reconstruction-Skin-Cancer-Resection.pdf',
  },
  'wright-2008': {
    cite: 'Wright TI, et al. Antibiotic prophylaxis in dermatologic surgery: advisory statement 2008. J Am Acad Dermatol. 2008;59(3):464-73.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/18694679/',
  },
  'smack-1996': {
    cite: 'Smack DP, et al. Infection and allergy incidence in ambulatory surgery patients using white petrolatum vs bacitracin ointment. JAMA. 1996;276(12):972-7.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/8805732/',
  },
  'miller-2018': {
    cite: 'Miller MQ, et al. Association of Mohs reconstructive surgery timing with postoperative complications. JAMA Facial Plast Surg. 2018;20(2):122-7.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/28880987/',
  },
  'sniezek-2011': {
    cite: 'Sniezek PJ, Brodland DG, Zitelli JA. A randomized controlled trial comparing acetaminophen, acetaminophen and ibuprofen, and acetaminophen and codeine for postoperative pain relief after Mohs surgery and cutaneous reconstruction. Dermatol Surg. 2011;37(7):1007-13.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/21561527/',
  },
  'derry-2013': {
    cite: 'Derry CJ, Derry S, Moore RA. Single dose oral ibuprofen plus paracetamol (acetaminophen) for acute postoperative pain. Cochrane Database Syst Rev. 2013;(6):CD010210.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/23794268/',
  },
  'firoz-2010': {
    cite: 'Firoz BF, et al. An analysis of pain and analgesia after Mohs micrographic surgery. J Am Acad Dermatol. 2010;63(1):79-86.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/20542176/',
  },
  'chen-2015': {
    cite: 'Chen AF, et al. Prediction of postoperative pain after Mohs micrographic surgery with 2 validated pain anxiety scales. Dermatol Surg. 2015;41(1):40-7.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/25521098/',
  },
  'donigan-2021': {
    cite: 'Donigan JM, et al. Opioid prescribing recommendations after Mohs micrographic surgery and reconstruction: a Delphi consensus. Dermatol Surg. 2021;47(2):167-9.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/32769528/',
  },
  'mclawhorn-2020': {
    cite: 'McLawhorn JM, et al. An expert panel consensus on opioid-prescribing guidelines for dermatologic procedures. J Am Acad Dermatol. 2020;82(3):700-8.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/31756403/',
  },
  'beers-2023': {
    cite: '2023 American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. J Am Geriatr Soc. 2023;71(7):2052-81.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12478568/',
  },
  'fda-acetaminophen': {
    cite: 'U.S. Food and Drug Administration. Acetaminophen (Safe Use of Over-the-Counter Pain Relievers and Fever Reducers).',
    url: 'https://www.fda.gov/drugs/safe-use-over-counter-pain-relievers-and-fever-reducers/acetaminophen',
  },
  'dailymed-tylenol-es': {
    cite: 'DailyMed. TYLENOL EXTRA STRENGTH (acetaminophen 500 mg) tablet, film coated. Kenvue Brands LLC. Set ID 103d109d-f520-409c-8da2-eb6b0fbec891.',
    url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=103d109d-f520-409c-8da2-eb6b0fbec891',
  },
  'dailymed-tylenol-rs': {
    cite: 'DailyMed. TYLENOL REGULAR STRENGTH (acetaminophen 325 mg) tablet. Kenvue Brands LLC. Set ID 1622f694-4d63-4c56-8737-fae31f0ecfb7.',
    url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1622f694-4d63-4c56-8737-fae31f0ecfb7',
  },
  'dailymed-advil': {
    cite: 'DailyMed. ADVIL (ibuprofen 200 mg) capsule, liquid filled. Haleon US Holdings LLC. Set ID 1f01c10a-9434-91a4-2ee4-352315a6b610.',
    url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1f01c10a-9434-91a4-2ee4-352315a6b610',
  },
  'fda-ibu-asa-2006': {
    cite: 'FDA Science Paper (9/8/2006). Concomitant Use of Ibuprofen and Aspirin: Potential for Attenuation of the Anti-Platelet Effect of Aspirin.',
    url: 'https://www.fda.gov/media/76636/download',
  },
  'cdc-sepsis-about': {
    cite: 'CDC. About Sepsis.',
    url: 'https://www.cdc.gov/sepsis/about/index.html',
  },
  'cdc-sepsis-patients': {
    cite: 'CDC. CDC helps patients and their families Get Ahead of Sepsis (drop-in article, 2022).',
    url: 'https://www.cdc.gov/sepsis/media/pdfs/Drop-in-Article-for-Patients-Families-2022-508.pdf',
  },
  'cdc-antibiotics': {
    cite: 'CDC. Antibiotic Use: About.',
    url: 'https://www.cdc.gov/antibiotic-use/about/index.html',
  },
  'mp-lymphangitis': {
    cite: 'MedlinePlus Medical Encyclopedia. Lymphangitis.',
    url: 'https://medlineplus.gov/ency/article/007296.htm',
  },
  'mp-fever': {
    cite: 'MedlinePlus Medical Encyclopedia. Fever.',
    url: 'https://medlineplus.gov/ency/article/003090.htm',
  },
  'mp-anaphylaxis': {
    cite: 'MedlinePlus Medical Encyclopedia. Anaphylaxis.',
    url: 'https://medlineplus.gov/ency/article/000844.htm',
  },
  'mp-bleeding': {
    cite: 'MedlinePlus Medical Encyclopedia. Bleeding.',
    url: 'https://medlineplus.gov/ency/article/000045.htm',
  },
  'mp-ssi': {
    cite: 'MedlinePlus Medical Encyclopedia. Surgical wound infection - treatment.',
    url: 'https://medlineplus.gov/ency/article/007645.htm',
  },
  'mp-wound-closed': {
    cite: 'MedlinePlus. Surgical wound care - closed.',
    url: 'https://medlineplus.gov/ency/patientinstructions/000738.htm',
  },
  'mp-flaps': {
    cite: 'MedlinePlus. Skin flaps and grafts - self-care.',
    url: 'https://medlineplus.gov/ency/patientinstructions/000743.htm',
  },
  'mp-cold': {
    cite: 'MedlinePlus. Inguinal hernia repair - discharge (cold compress instructions).',
    url: 'https://medlineplus.gov/ency/patientinstructions/000274.htm',
  },
  'mp-normal-incision': {
    cite: 'MedlinePlus. Gallbladder removal - open - discharge (normal redness/drainage wording).',
    url: 'https://medlineplus.gov/ency/patientinstructions/000118.htm',
  },
  'cc-ssi': {
    cite: 'Cleveland Clinic. Surgical Wound Infection.',
    url: 'https://my.clevelandclinic.org/health/diseases/surgical-wound-infection',
  },
  'aad-biopsy': {
    cite: 'American Academy of Dermatology. 6 skin biopsy wound care tips from dermatologists.',
    url: 'https://www.aad.org/news/6-skin-biopsy-wound-care-tips-from-dermatologists',
  },
  'acms-postop': {
    cite: 'American College of Mohs Surgery. Post-Operative Care (patient page).',
    url: 'https://www.mohscollege.org/for-patients/about-mohs-surgery/post-operative-care',
  },
  'roswell-mohs': {
    cite: 'Roswell Park Comprehensive Cancer Center. After Mohs Surgery.',
    url: 'https://www.roswellpark.org/cancer/skin/treatment/mohs-surgery/after-surgery',
  },
  'ummc-mohs': {
    cite: 'University of Mississippi Medical Center. Postoperative Care of Mohs Surgery - Excisions.',
    url: 'https://umc.edu/Healthcare/ENT/Patient-Handouts/Adult/PSCSC/Mohs_postop.html',
  },
  'saco-2015-topical-abx-ma': {
    cite: 'Saco M, Howe N, Nathoo R, Cherpelis B. Topical antibiotic prophylaxis for prevention of surgical wound infections from dermatologic procedures: a systematic review and meta-analysis. J Dermatolog Treat. 2015;26(2):151-8.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/24646178/',
  },
  'sheth-2008-topical-antimicrobials': {
    cite: 'Sheth VM, Weitzul S. Postoperative topical antimicrobial use. Dermatitis. 2008;19(4):181-9.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/18674453/',
  },
  'gette-1992-acd-antibiotics': {
    cite: 'Gette MT, Marks JG Jr, Maloney ME. Frequency of postoperative allergic contact dermatitis to topical antibiotics. Arch Dermatol. 1992;128(3):365-7.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/1532297/',
  },
  'nijhawan-2013-emollient-survey': {
    cite: "Nijhawan RI, Smith LA, Mariwalla K. Mohs surgeons' use of topical emollients in postoperative wound care. Dermatol Surg. 2013;39(8):1260-3.",
    url: 'https://pubmed.ncbi.nlm.nih.gov/23777421/',
  },
  'junker-2013-moist-healing': {
    cite: 'Junker JP, Kamel RA, Caterson EJ, Eriksson E. Clinical impact upon wound healing and inflammation in moist, wet, and dry environments. Adv Wound Care. 2013;2(7):348-356.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/24587972/',
  },
  'heal-2006-sutures-wet': {
    cite: 'Heal C, Buettner P, Raasch B, et al. Can sutures get wet? Prospective randomised controlled trial of wound management in general practice. BMJ. 2006;332(7549):1053-6.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/16636023/',
  },
  'toon-2015-cochrane-bathing': {
    cite: 'Toon CD, Sinha S, Davidson BR, Gurusamy KS. Early versus delayed post-operative bathing or showering to prevent wound complications. Cochrane Database Syst Rev. 2015;(7):CD010075.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/26204454/',
  },
  'dayton-2013-showering-sr': {
    cite: 'Dayton P, Feilmeier M, Sedberry S. Does postoperative showering or bathing of a surgical site increase the incidence of infection? A systematic review of the literature. J Foot Ankle Surg. 2013;52(5):612-4.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/23587992/',
  },
  'bunick-2011-hemorrhagic': {
    cite: 'Bunick CG, Aasi SZ. Hemorrhagic complications in dermatologic surgery. Dermatol Ther. 2011;24(6):537-50.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4075187/',
  },
  'statpearls-mohs-complications': {
    cite: 'Concilla A, Chavez AE. Mohs Micrographic Surgery Surgical Complication Management. StatPearls. Updated May 2, 2024.',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK603734/',
  },
  'statpearls-mohs-periop': {
    cite: 'Taylor A, Muse ME. Mohs Micrographic Surgery Safe and Effective Perioperative Care. StatPearls. Updated Feb 5, 2025.',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK611989/',
  },
  'sanchez-2024-wound-care-review': {
    cite: 'Sanchez-Puigdollers A, Toll A, Morgado-Carrasco D. Postoperative wound care in dermatologic surgery: update and narrative review. Actas Dermosifiliogr. 2024;115(10):T957-T966.',
    url: 'https://www.actasdermo.org/en-translated-article-postoperative-wound-care-articulo-S0001731024007130',
  },
  'forsch-2008-afp-laceration': {
    cite: 'Forsch RT. Essentials of skin laceration repair. Am Fam Physician. 2008;78(8):945-51.',
    url: 'https://www.aafp.org/pubs/afp/issues/2008/1015/p945.html',
  },
  'statpearls-facial-laceration': {
    cite: 'StatPearls. Oral and Maxillofacial Surgery, Facial Laceration Repair. Updated May 26, 2023.',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK570584/',
  },
  'cleveland-incision-care': {
    cite: 'Cleveland Clinic. Incision & Surgical Wound Care: Sutures, Stitches, Steri-Strips & Staples. Last reviewed 11/15/2023.',
    url: 'https://my.clevelandclinic.org/health/treatments/15709-incision-care',
  },
  'alberta-staples-healthwise': {
    cite: 'Alberta Health Services MyHealth.Alberta.ca (content by Ignite Healthwise). Cuts Closed With Staples: Care Instructions. Current as of July 31, 2024.',
    url: 'https://myhealth.alberta.ca/Health/aftercareinformation/pages/conditions.aspx?hwid=abo7752',
  },
  'zitelli-1983-second-intention': {
    cite: 'Zitelli JA. Wound healing by secondary intention. A cosmetic appraisal. J Am Acad Dermatol. 1983;9(3):407-15.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/6630602/',
  },
  'gil-lianes-2025-sih-review': {
    cite: 'Gil-Lianes J, Marti-Marti I, Morgado-Carrasco D. Secondary intention healing after Mohs micrographic surgery: an updated review of classic and novel applications, benefits and complications. Actas Dermosifiliogr. 2025;116(5):511-520.',
    url: 'https://www.actasdermo.org/en-secondary-intention-healing-after-mohs-articulo-S0001731024010585',
  },
  'potluru-2025-sih-review': {
    cite: 'Potluru A, Pawlik O, Barlow R, Veitch D, Wernham A. A review of secondary intention healing in dermatology and dermatological surgery: part 1. Clin Exp Dermatol. 2025;50(6):1094-1100.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/39774606/',
  },
  'willenbrink-2024-leg-sih-rct': {
    cite: 'Willenbrink TJ, Brodland DG. Pinch grafts versus second intention wound healing for Mohs micrographic surgery defects below the knee: a prospective randomized trial. Dermatol Surg. 2024;50(11):1010-1016.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/39088685/',
  },
  'scherz-2025-leg-compression-rct': {
    cite: 'Scherz LA, Walkosak CC, Renzi MA Jr, et al. Assessing the efficacy of compression therapy on second intention wound healing after dermatologic surgery: a randomized, controlled trial. Dermatol Surg. 2025;51(12):1119-1122.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/40464396/',
  },
  'statpearls-ftsg': {
    cite: 'Ramsey ML, Walker B, Marietta M, Patel BC. Full-Thickness Skin Grafts. StatPearls. Updated Mar 5, 2025.',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK532875/',
  },
  'statpearls-skin-grafting': {
    cite: 'Prohaska J, Cook C. Skin Grafting. StatPearls. Updated Aug 16, 2023.',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK532874/',
  },
  'langtry-1998-no-bolster': {
    cite: 'Langtry JA, Kirkham P, Martin IC, Fordyce A. Tie-over bolster dressings may not be necessary to secure small full thickness skin grafts. Dermatol Surg. 1998;24(12):1350-3.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/9865202/',
  },
  'armstrong-2022-no-bolster': {
    cite: 'Armstrong D, Van Gijn D, Newlands C. Are tie-over bolster dressings necessary for healing or success of full thickness skin graft reconstruction following facial skin cancer excision? Br J Oral Maxillofac Surg. 2022;60(7):951-955.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/35491324/',
  },
  'davis-2022-vumc-ftsg': {
    cite: 'Davis R. Full Thickness Skin Graft. Open Manual of Surgery in Resource-Limited Settings. Vanderbilt University Medical Center Global Surgical Atlas; May 2022.',
    url: 'https://www.vumc.org/global-surgical-atlas/sites/default/files/public_files/PDF/Full%20thickness%20skin%20graft.pdf',
  },
  'mskcc-ftsg-patient': {
    cite: 'Memorial Sloan Kettering Cancer Center. About Your Full-Thickness Skin Graft. Updated June 19, 2026.',
    url: 'https://www.mskcc.org/cancer-care/patient-education/full-thickness-skin-graft',
  },
  'erickson-2022-periop-survey': {
    cite: 'Erickson SP, Schneider SL, Cohen JL, Alam M, Council ML. Perioperative practices in dermatologic surgery. Dermatol Surg. 2022;48(9):924-926.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/35862644/',
  },
  'sorensen-2012-smoking-ma': {
    cite: 'S\u00f8rensen LT. Wound healing and infection in surgery. The clinical impact of smoking and smoking cessation: a systematic review and meta-analysis. Arch Surg. 2012;147(4):373-83.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/22508785/',
  },
  'goldminz-1991-smoking-flaps': {
    cite: 'Goldminz D, Bennett RG. Cigarette smoking and flap and full-thickness graft necrosis. Arch Dermatol. 1991;127(7):1012-5.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/2064398/',
  },
  'wang-2019-smoking-mohs': {
    cite: 'Wang CY, Dudzinski J, Nguyen D, Armbrecht E, Maher IA. Association of smoking and other factors with the outcome of Mohs reconstruction using flaps or grafts. JAMA Facial Plast Surg. 2019;21(5):407-413.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/31194217/',
  },
  'aad-wound-care-scars': {
    cite: 'American Academy of Dermatology. Minimize a scar: Proper wound care tips from dermatologists. Last updated 7/2/2025.',
    url: 'https://www.aad.org/public/everyday-care/injured-skin/burns/wound-care-minimize-scars',
  },
  'dartmouth-mohs-handbook': {
    cite: 'Dartmouth-Hitchcock Dermatology. Mohs Micrographic Surgery Patient Handbook (PE-201903-71).',
    url: 'https://www.dartmouth-hitchcock.org/sites/default/files/2020-12/mohs-handbook.pdf',
  },
  'nebraska-mohs-aftercare': {
    cite: 'Nebraska Medicine (Adam Sutton, MD). Your Mohs surgery recovery aftercare plan. Sept 5, 2025.',
    url: 'https://www.nebraskamed.com/health/conditions-and-services/dermatology/your-mohs-surgery-recovery-aftercare-plan',
  },
  'ucla-mohs-faq': {
    cite: 'UCLA Dermatology. Post-Operative Wound Care Instructions / Mohs FAQs (PDF).',
    url: 'https://www.uclahealth.org/sites/default/files/documents/MohsFAQsFinal.pdf?f=330e750b',
  },
  'aad-mohs': {
    cite: 'American Academy of Dermatology (AAD). What is Mohs surgery? Last updated 5/17/21.',
    url: 'https://www.aad.org/public/diseases/skin-cancer/types/common/melanoma/mohs-surgery',
  },
  'acms-faq': {
    cite: 'ACMS. Mohs Surgery FAQs.',
    url: 'https://www.mohscollege.org/for-patients/about-mohs-surgery/mohs-surgery-faqs',
  },
  'statpearls-mohs': {
    cite: 'Prickett KA, Ramsey ML. Mohs Micrographic Surgery. StatPearls; updated 2023 Jul 25. NBK441833.',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK441833/',
  },
  'statpearls-phases': {
    cite: 'Wallace HA, Basehore BM, Zito PM. Wound Healing Phases. StatPearls; 2023 Jun 12. NBK470443.',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK470443/',
  },
  'guo-2010': {
    cite: 'Guo S, DiPietro LA. Factors affecting wound healing. J Dent Res. 2010;89(3):219-29.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/20139336/',
  },
  'baumann-1999': {
    cite: 'Baumann LS, Spencer J. The effects of topical vitamin E on the cosmetic appearance of scars. Dermatol Surg. 1999;25(4):311-5.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/10417589/',
  },
  'cochrane-silicone-2013': {
    cite: "O'Brien L, Jones DJ. Silicone gel sheeting for preventing and treating hypertrophic and keloid scars. Cochrane Database Syst Rev. 2013;(9):CD003826.",
    url: 'https://pubmed.ncbi.nlm.nih.gov/24030657/',
  },
  'monstrey-2014': {
    cite: 'Monstrey S, et al. Updated scar management practical guidelines: non-invasive and invasive measures. J Plast Reconstr Aesthet Surg. 2014;67(8):1017-25.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/24888226/',
  },
  'shin-2012': {
    cite: 'Shin TM, Bordeaux JS. The role of massage in scar management: a literature review. Dermatol Surg. 2012;38(3):414-23.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/22093081/',
  },
  'aad-bcc-after': {
    cite: 'AAD. Basal cell carcinoma: Outcome and life after treatment. Last updated Oct 1, 2025.',
    url: 'https://www.aad.org/public/diseases/skin-cancer/basal-cell-carcinoma/outcome-life-after-treatment',
  },
  'aad-scc-after': {
    cite: 'AAD. Squamous cell carcinoma: Outlook and life after treatment. Last updated Jan 13, 2026.',
    url: 'https://www.aad.org/public/diseases/skin-cancer/squamous-cell-carcinoma/outlook-life-after-treatment',
  },
  'aad-bcc': {
    cite: 'AAD. Basal cell carcinoma: Overview (symptoms section). Last updated Oct 1, 2025.',
    url: 'https://www.aad.org/public/diseases/skin-cancer/basal-cell-carcinoma',
  },
  'aad-scc': {
    cite: 'AAD. Squamous cell carcinoma: Overview (symptoms section). Last updated Jan 13, 2026.',
    url: 'https://www.aad.org/public/diseases/skin-cancer/squamous-cell-carcinoma',
  },
  'aad-abcde': {
    cite: 'AAD. What to look for: ABCDEs of melanoma.',
    url: 'https://www.aad.org/public/diseases/skin-cancer/abcdes-melanoma',
  },
  'aad-safe-sun': {
    cite: 'AAD. How to prevent skin cancer / practice safe sun. Last updated 4/11/24.',
    url: 'https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/practice-safe-sun',
  },
  'aad-bcc-guideline-page': {
    cite: 'AAD. Basal cell carcinoma clinical guideline (member page summarizing Kim 2018).',
    url: 'https://www.aad.org/member/clinical-quality/guidelines/bcc',
  },
  'firnhaber-2020': {
    cite: 'Firnhaber JM. Basal Cell and Cutaneous Squamous Cell Carcinomas: Diagnosis and Treatment. Am Fam Physician. 2020;102(6):339-346.',
    url: 'https://www.aafp.org/pubs/afp/issues/2020/0915/p339.html',
  },
  'cdc-prevention': {
    cite: 'CDC. Reducing Risk for Skin Cancer. Last reviewed June 17, 2026.',
    url: 'https://www.cdc.gov/skin-cancer/prevention/index.html',
  },
  'epa-uv-index': {
    cite: 'US EPA. The UV Index.',
    url: 'https://www.epa.gov/sunsafety/uv-index-1',
  },
  'wehner-2015': {
    cite: 'Wehner MR, et al. Timing of subsequent new tumors in patients who present with basal cell carcinoma or cutaneous squamous cell carcinoma. JAMA Dermatol. 2015;151(4):382-8.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/25588079/',
  },
  'stechmiller-2010': {
    cite: 'Stechmiller JK. Understanding the role of nutrition and wound healing. Nutr Clin Pract. 2010;25(1):61-8.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/20130158/',
  },
  'bauer-2013': {
    cite: 'Bauer J, et al. Evidence-based recommendations for optimal dietary protein intake in older people: PROT-AGE Study Group. J Am Med Dir Assoc. 2013;14(8):542-59.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/23867520/',
  },
  'nasem-water-2004': {
    cite: 'National Academies. Report Sets Dietary Intake Levels for Water, Salt, and Potassium\u2026 (news release, Feb 11, 2004).',
    url: 'https://www.nationalacademies.org/news/report-sets-dietary-intake-levels-for-water-salt-and-potassium-to-maintain-health-and-reduce-chronic-disease-risk',
  },
  'medlineplus-hf-fluids': {
    cite: 'MedlinePlus. Heart failure \u2013 fluids and diuretics.',
    url: 'https://medlineplus.gov/ency/patientinstructions/000112.htm',
  },
  'cdc-quitline': {
    cite: 'CDC. Five Reasons Why Calling a Quitline Can Be Key to Your Success. Tips From Former Smokers.',
    url: 'https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/quitline/index.html',
  },
  'mp-shock': {
    cite: 'MedlinePlus Medical Encyclopedia. Shock.',
    url: 'https://medlineplus.gov/ency/article/000039.htm',
  },
  'diana-2019-lanolin-ointment': {
    cite: 'Diana DZ, Leon HK, Darrell R. The low prevalence of allergic contact dermatitis using a petrolatum ointment containing lanolin alcohol. J Drugs Dermatol. 2019;18(10):1002-1004.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/31584778/',
  },
};

export default SOURCES;
