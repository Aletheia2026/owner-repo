import { R } from "../lib/routes.mjs";
import { cover, internalAnatomy, externalAnatomy, cycleWheel, pubertyTimeline } from "../lib/graphics.mjs";
import { S } from "./sources.mjs";

export default {
  ed: "01",
  slug: "know-your-body",
  path: R.ed01,
  badge: "Archive Edition 01",
  eyebrow: "Voice Pack Archive",
  title: "Know Your Body",
  seoTitle: "Know Your Body: Voice Pack Archive Edition 01",
  description: "Archive Edition 01 of the Aletheia Voice Pack: plain, shame-free health education on anatomy, puberty, hormones and periods, with myth-busting and clear signs for when to see a GP.",
  question: "“What is happening in my body?”",
  lede: "The health class a lot of us never got. What your body is made of, what changes in puberty, how a period actually works, and the words for all of it, said plainly and without embarrassment.",
  framework: ["Learn", "Understand", "Normalise"],
  tags: ["Anatomy", "Puberty", "Periods", "Hormones", "Myths vs facts"],
  readTime: "About 25 minutes to read",
  audience: "For ages 12+",
  cover: cover("01"),
  pdf: "Aletheia-Voice-Pack-Archive-Edition-01-Know-Your-Body.pdf",
  ogImage: "voice-pack-archive-01-og.png",
  annotation: "This is the earliest Voice Pack in our archive. It reflects the stage of Aletheia’s work when we believed the main problem was missing information: if young people simply knew how their bodies worked, the shame would lift. That was true, and it still is. It just wasn’t the whole story. Our work has since grown into language, healthcare navigation, youth advocacy and systems change, but everything we make still starts here.",
  chapters: [
    {
      id: "start", short: "Start here", eyebrow: "Before we begin", title: "Your body is not inappropriate",
      intro: [
        "A lot of us learned about our bodies in whispers. From a sibling, a group chat, a diagram in a textbook that the teacher skipped. Some of us learned that certain parts of our body didn’t have names, or had names you weren’t supposed to say out loud.",
        "This pack does the opposite. It uses the real words, explains them plainly, and treats your body as what it is: normal, worth understanding, and yours.",
      ],
      blocks: [
        { type: "grid", cols: "g3", items: [
          { type: "card", kicker: "Learn", title: "What’s there", body: "The parts of the body, inside and out, and what each one does." },
          { type: "card", kicker: "Understand", title: "What’s happening", body: "Puberty, hormones and the menstrual cycle, step by step." },
          { type: "card", kicker: "Normalise", title: "What’s normal", body: "Myths, facts and the wide range of bodies that are completely healthy." },
        ]},
        { type: "callout", icon: "i", title: "A note on words", body: "We use the correct medical names, because they’re the ones a doctor will understand and because nothing about them is rude. This pack focuses on the bodies of girls and people with a uterus, because that’s where the silence has been loudest. Not everyone with these body parts is a girl, and not every girl has them. Everyone deserves to understand the body they live in." },
      ],
    },
    {
      id: "learn", short: "Your body, labelled", eyebrow: "Learn", title: "Your body, labelled",
      intro: "Most of the reproductive system is inside the body, which is part of why it feels mysterious. Here are the main parts, what they’re called and what they do.",
      blocks: [
        { type: "figure", heading: "Inside: the reproductive organs", svg: internalAnatomy(), caption: "Front view, simplified. The uterus is roughly the size of a small pear and sits low in the pelvis, between the bladder and the bowel." },
        { type: "vocab", cols: "g2", items: [
          { term: "Uterus", pron: "YOO-ter-us · also called the womb", what: "A hollow, muscular organ. Each month its lining thickens in case of pregnancy, then sheds if there isn’t one. That shedding is a period.", note: "The uterus is a muscle. Period cramps happen when it squeezes to push the lining out." },
          { term: "Ovaries", pron: "OH-va-rees", what: "Two small organs, one on each side, that store eggs and make the hormones oestrogen and progesterone.", note: "You’re born with all the eggs you will ever have. From puberty, usually one is released each cycle." },
          { term: "Fallopian tubes", pron: "fa-LOH-pee-an", what: "Two thin tubes that carry an egg from the ovary towards the uterus. If sperm meets an egg, it usually happens here." },
          { term: "Cervix", pron: "SER-vix", what: "The narrow lower end of the uterus that opens into the vagina. Period blood passes through it. Cervical screening checks this area from age 25." },
          { term: "Vagina", pron: "va-JY-na", what: "A stretchy, muscular canal from the cervix to the outside of the body. Period blood leaves through it, and it’s where a tampon or menstrual cup goes.", note: "The vagina is inside. The parts you can see on the outside are the vulva." },
          { term: "Hymen", pron: "HY-men", what: "A thin, flexible piece of tissue around the vaginal opening. It varies a lot between people and naturally stretches over time.", note: "It doesn’t “break” in a way that shows anything about someone’s sexual history. More in the myths section." },
        ]},
        { type: "figure", heading: "Outside: the vulva", svg: externalAnatomy(), caption: "A simplified diagram, not a realistic drawing. Real vulvas vary a lot in colour, size and shape, including labia that are uneven or longer than the outer labia. All of that is normal." },
        { type: "vocab", cols: "g3", items: [
          { term: "Vulva", what: "The name for all the outside parts together: the mons, labia, clitoris and the urethral and vaginal openings." },
          { term: "Labia", what: "The outer and inner folds of skin (lips) that protect the openings. Inner labia often show past the outer ones." },
          { term: "Clitoris", what: "A sensitive organ. Only the tip (glans) is visible; most of it extends inside the body." },
          { term: "Urethral opening", what: "A small opening where urine (wee) leaves. It’s separate from the vagina." },
          { term: "Vaginal opening", what: "Below the urethra. Period blood and discharge leave here." },
          { term: "Anus", what: "Where poo leaves the body. It’s behind the vulva, not part of it." },
        ]},
        { type: "card", tone: "tint", title: "Other bodies, too", body: "Bodies with testes go through puberty as well: the testes start producing sperm and testosterone, the voice deepens, and wet dreams and unexpected erections are common and normal. Knowing how other bodies work helps everyone talk about health without awkwardness, and it matters for intersex people and anyone whose body doesn’t match a textbook." },
      ],
    },
    {
      id: "puberty", short: "Puberty and hormones", eyebrow: "Understand", title: "Puberty, and the hormones behind it",
      intro: "Puberty is the few years when your body shifts from a child’s to an adult’s. It usually starts somewhere between 8 and 13, it doesn’t follow a fixed order, and it isn’t a race.",
      blocks: [
        { type: "figure", svg: pubertyTimeline(), caption: "Common ranges for girls and people with a uterus. Periods usually start about two years after breast buds appear." },
        { type: "h3", text: "The messengers: your hormones" },
        { type: "p", text: "Hormones are chemical messengers. They travel in your blood and tell different parts of your body what to do. A small part of the brain (the hypothalamus) and a gland beneath it (the pituitary) start puberty by signalling the ovaries to switch on." },
        { type: "vocab", cols: "g2", items: [
          { term: "Oestrogen", pron: "EES-tro-jen", what: "Builds the lining of the uterus, and drives breast development, wider hips and changes to skin and discharge.", corner: "Ovaries" },
          { term: "Progesterone", pron: "pro-JES-te-rone", what: "Rises after ovulation to keep the lining ready. When it drops, the lining sheds and a period starts.", corner: "Ovaries" },
          { term: "FSH and LH", what: "Follicle-stimulating hormone and luteinising hormone. They come from the pituitary and tell the ovaries to mature and release an egg.", corner: "Brain" },
          { term: "Testosterone", what: "Present in everyone, at different levels. In people with ovaries it contributes to body hair, oily skin and sex drive.", corner: "Everyone" },
        ]},
        { type: "grid", cols: "g2", items: [
          { type: "card", title: "Changes you might notice", items: ["Breast buds, which can be tender or uneven at first", "Hair under the arms, on the legs and around the vulva", "A growth spurt, and wider hips", "More sweat and body odour, and oilier skin or pimples", "Clear or white discharge from the vagina, often a few months before the first period", "Stronger or quicker-changing feelings"] },
          { type: "card", title: "All of these are normal", items: ["One breast growing faster than the other", "Stretch marks on hips, thighs or breasts", "Starting earlier or later than your friends", "Discharge that changes through the month", "Feeling awkward in a body that’s changing fast"] },
        ]},
      ],
    },
    {
      id: "cycle", short: "How a period works", eyebrow: "Understand", title: "How a period actually works",
      intro: "A period is not the body “getting rid of bad blood”. It’s the uterus shedding a lining it no longer needs. Here’s the whole cycle.",
      blocks: [
        { type: "figure", svg: cycleWheel(), caption: "Day 1 is the first day of bleeding. “28 days” is an average, not a rule." },
        { type: "steps", items: [
          { title: "The period (about days 1–5)", body: "Progesterone drops, so the lining of the uterus breaks down and leaves through the cervix and vagina as blood and tissue. Bleeding usually lasts 2 to 7 days." },
          { title: "The follicular phase", body: "FSH tells the ovaries to ripen some eggs. Oestrogen rises, the lining starts to rebuild, and discharge often becomes clearer and stretchier." },
          { title: "Ovulation (around the middle)", body: "LH surges and one egg is released into a fallopian tube. Some people feel a twinge on one side. This is when pregnancy is most likely." },
          { title: "The luteal phase", body: "Progesterone keeps the lining ready. If there’s no pregnancy, hormone levels fall, and some people notice sore breasts, bloating or mood changes (PMS) before the next period." },
        ]},
        { type: "grid", cols: "g3", items: [
          { type: "card", kicker: "How long", title: "21 to 45 days", body: "The time from the first day of one period to the first day of the next. Cycles are often irregular for the first year or two after periods start." },
          { type: "card", kicker: "How much", title: "A few tablespoons", body: "It looks like more, but most of a period is only a few tablespoons of fluid across the whole thing. Blood mixes with tissue and mucus." },
          { type: "card", kicker: "What colour", title: "Red to brown", body: "Bright red, dark red and brown are all normal. Brown is older blood. Small clots can be normal too. Clots bigger than a 50-cent coin are worth mentioning to a GP." },
        ]},
        { type: "h3", text: "Period products" },
        { type: "table", caption: "Period products compared", head: ["Product", "How it works", "Good to know"], rows: [
          ["Pads", "Stick to underwear and absorb blood.", "Change every 3 to 6 hours or when full. A good first product."],
          ["Tampons", "Sit inside the vagina and absorb blood.", "Use the lowest absorbency you need and change every 4 to 8 hours. Never leave one in longer than 8 hours."],
          ["Menstrual cups and discs", "Sit inside and collect blood. Empty, rinse, reuse.", "Can stay in for up to 12 hours. Sizing matters, so check the brand’s guide."],
          ["Period underwear", "Underwear with an absorbent layer.", "Reusable. Good for light days, overnight, or as back-up."],
        ]},
        { type: "callout", urgent: true, icon: "!", title: "Toxic shock syndrome (TSS): rare, but know the signs", body: "TSS is a rare but serious illness linked to tampons and cups. If you suddenly get a high fever, vomiting or diarrhoea, a rash that looks like sunburn, dizziness or fainting while using one: take it out and get urgent medical help straight away. In an emergency, call 000." },
        { type: "scenario", tag: "Scenario", title: "Maya and the cramps no one explained", body: [
          "Maya is 13. On the first day of her period she gets a deep, dragging ache low in her tummy and her lower back. She’s heard “cramps” before, but she thought it meant something small, and she wonders if something’s wrong.",
          "In her health notes she finds the answer: during a period the uterus, which is a muscle, squeezes to push the lining out. Chemicals called prostaglandins cause those contractions, and they can make you feel sore, and sometimes a bit sick or loose in the tummy. It’s common. Heat packs, gentle movement and period pain relief from a pharmacist often help.",
          "She also reads the other half: pain that stops you going to school, or doesn’t get better with the usual things, is worth talking to a GP about. She files that away.",
        ], fic: "Maya is fictional. You’ll meet her again in the later editions of this archive." },
      ],
    },
    {
      id: "normalise", short: "Myths and facts", eyebrow: "Normalise", title: "Myths, facts, and the things people whisper",
      intro: "Myths stick around because nobody corrects them out loud. So let’s.",
      blocks: [
        { type: "mythfact", items: [
          ["You can’t swim or play sport on your period.", "You can do anything you usually do. Tampons, cups and period swimwear make swimming easy, and exercise can ease cramps."],
          ["Using a tampon means you’re not a virgin anymore.", "Tampons don’t change anything about virginity. Virginity is a social idea, not a body part, and the hymen stretches naturally."],
          ["Period blood is dirty or unhygienic.", "It’s blood and tissue from the uterus, not waste. It’s no dirtier than blood from a cut."],
          ["You can’t get pregnant on your period.", "It’s less likely, but possible, especially with short or irregular cycles. Periods are not contraception."],
          ["PMS is just an excuse to be moody.", "Hormone changes before a period can cause real physical and emotional symptoms. They’re recognised by doctors."],
          ["Bad period pain is just something you have to put up with.", "Some pain is common. Pain that stops you living your life is not something to put up with, and it’s worth seeing a GP."],
          ["Discharge means something is wrong.", "Clear or white discharge is normal and keeps the vagina healthy. It changes through your cycle."],
          ["Everyone’s periods sync up when they live together.", "Research hasn’t shown that periods reliably sync. Cycles vary, so they sometimes line up by chance."],
        ]},
        { type: "h3", text: "Say it plainly" },
        { type: "p", text: "Families and cultures have lots of nicknames for periods and bodies, and that’s fine at home. At the doctor, the real word saves time and gets you taken seriously. Here are a few swaps." },
        { type: "table", caption: "Everyday words and their medical names", head: ["What people sometimes say", "The word a doctor uses", "Meaning"], rows: [
          ["“Down there”", "Vulva / vagina", "Outside parts / the internal canal"],
          ["“That time of the month”", "Period, menstruation", "The bleeding part of the cycle"],
          ["“Women’s problems”", "Gynaecological symptoms", "Anything to do with the reproductive organs"],
          ["“My tummy hurts”", "Pelvic pain, period pain", "Pain low in the belly, between the hips"],
          ["“Spotting”", "Bleeding between periods", "Light bleeding outside your period"],
        ]},
        { type: "reflect", title: "Your turn", prompts: ["What’s one thing about your body that you were never told, and wish you had been?", "What word for a body part feels awkward to say? Try saying it out loud once. Nothing happens."], lines: false },
      ],
    },
    {
      id: "check-in", short: "When to check in", eyebrow: "Normalise", title: "What’s normal, and when to check in",
      intro: "Bodies vary a lot, and most changes are healthy. These are the signs that it’s worth talking to a GP or school nurse. You’re not overreacting by asking.",
      blocks: [
        { type: "levels",
          l1: { label: "Common", title: "Usually normal", items: ["Irregular periods in the first 1–2 years", "Mild cramps that ease with heat or pain relief", "Discharge that changes through the month", "Sore breasts or bloating before a period"] },
          l2: { label: "Book a GP", title: "Worth checking", items: ["No period by 15, or none 3 years after breast buds", "Signs of puberty before 8", "Periods that stop for 3 months or more", "Cycles shorter than 21 or longer than 45 days", "Bleeding for more than 7 days", "Changing a pad or tampon every 1–2 hours", "Pain that makes you miss school or plans", "Bleeding between periods"] },
          l3: { label: "Get help now", title: "Urgent", items: ["Soaking a pad or tampon every hour for several hours, or feeling faint or dizzy", "Sudden, severe pain in your tummy or pelvis", "TSS signs: high fever, rash, vomiting while using a tampon or cup", "Call 000 in an emergency, or healthdirect on 1800 022 222 for advice"] },
        },
        { type: "callout", icon: "✓", title: "Going to the GP about your period is normal", body: "GPs talk about periods every day. You can go on your own from about 14 or 15, and in many situations what you say can be kept confidential. Later editions of this pack go much further into how to explain what’s happening and what to ask." },
      ],
    },
  ],
  next: {
    title: "From knowing your body to the rest of our work",
    body: "Plain, accurate body knowledge is still where Aletheia starts. It became the Health Literacy pillar, it shapes our digital health education, and it sits inside every Empower Pack alongside first-period essentials.",
    links: [
      [R.fivePillars, "Five Pillars", "Health Literacy 101 is the first of them"],
      [R.digitalHealth, "Digital Health Education", "Plain-language articles and myth-busting"],
      [R.empower, "Empower Packs", "Voice Packs with period and health essentials"],
      [R.ed02, "Next: Archive Edition 02", "Knowing your body was not enough on its own"],
    ],
  },
  nextEd: { href: R.ed02, label: "Edition 02 · Find the Words" },
  prev: { href: R.archive, label: "The Voice Pack Archive" },
  sources: [S.rchPeriods, S.acogCycle, S.acogHMB, S.hopkinsPuberty, S.bhcPeriods, S.bhcTSS],
  helpCount: 4,
};
