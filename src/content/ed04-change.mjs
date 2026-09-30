import { R } from "../lib/routes.mjs";
import { cover, patternDiagram, issueBarrierAction, participationLadder } from "../lib/graphics.mjs";
import { S } from "./sources.mjs";

export default {
  ed: "04",
  slug: "from-voice-to-change",
  path: R.ed04,
  badge: "Archive Edition 04",
  eyebrow: "Voice Pack Archive",
  title: "From Voice to Change",
  seoTitle: "From Voice to Change: Voice Pack Archive Edition 04",
  description: "Archive Edition 04 of the Aletheia Voice Pack: recognising when individual experiences form a pattern, sharing lived experience safely, and how young people can influence schools, services and policy.",
  question: "“How can young people change the systems affecting our health?”",
  lede: "When enough people describe the same experience, it stops being a personal story and becomes evidence. This edition is about noticing that shift, and what young people can do with it.",
  framework: ["Understand", "Navigate", "Advocate", "Connect", "Amplify", "Change"],
  tags: ["Lived experience", "Systems", "Health equity", "Safe storytelling", "Youth participation"],
  readTime: "About 35 minutes to read",
  audience: "For ages 14+",
  cover: cover("04"),
  pdf: "Aletheia-Voice-Pack-Archive-Edition-04-From-Voice-to-Change.pdf",
  ogImage: "voice-pack-archive-04-og.png",
  annotation: "This is the edition our current programs grew out of. Young people kept telling us versions of the same story, and we realised self-advocacy alone asks each person to fight the same fight, one appointment at a time. Edition 04 was our first attempt to connect personal health agency with collective voice. It was the foundation for Aletheia’s youth consultation, roundtables, Youth Executive Council and research work.",
  chapters: [
    {
      id: "understand", short: "When it’s not just you", eyebrow: "Understand", title: "When it’s not just you",
      intro: [
        "You tell a friend your period pain was brushed off. She says the same thing happened to her. Then her cousin. Then half your group chat.",
        "At some point, it stops being bad luck. If lots of people have the same experience, something in the way things are set up is producing it. That’s what people mean by a system: the rules, habits, funding, training and beliefs that shape what happens to everyone, not just you.",
      ],
      blocks: [
        { type: "figure", svg: patternDiagram(), caption: "One story is easy to dismiss. A pattern is much harder to ignore." },
        { type: "grid", cols: "g2", items: [
          { type: "card", title: "Evidence that it’s a pattern", items: [`For endometriosis, Australia’s national guideline notes an average delay of 6 to 8 years from symptoms to diagnosis, and names symptom normalisation and stigma as key causes.`, `In 2024 the Victorian Government ran an Inquiry into Women’s Pain. Thousands of women and girls described pain being dismissed or not taken seriously.`, "Young people, CALD communities, LGBTQIA+ people and people with disability often face extra barriers to being heard."] },
          { type: "card", tone: "tint", title: "What a systems lens changes", items: ["You stop asking only “What did I do wrong?” and start asking “Why does this keep happening?”", "Your experience becomes useful information, not just something that happened to you", "The solutions get bigger than one appointment: training, school curriculum, guidelines, access", "You realise you don’t have to fix it alone"] },
        ]},
        { type: "figure", heading: "Issue → barrier → action", svg: issueBarrierAction(), caption: "Every issue has barriers that keep it in place. Advocacy works best when it targets a specific barrier." },
        { type: "vocab", cols: "g2", items: [
          { term: "Health equity", what: "Everyone having a fair chance to be as healthy as possible, which sometimes means more support for people facing more barriers. It’s different from treating everyone the same." },
          { term: "Lived experience", what: "Knowledge that comes from going through something yourself. In health, it’s increasingly recognised as a form of expertise that sits alongside research and clinical knowledge." },
        ]},
      ],
    },
    {
      id: "navigate", short: "Your care first", eyebrow: "Navigate", title: "Your own care still comes first",
      intro: "Seeing the bigger picture doesn’t mean putting your own health on hold. You can push for change and still need to get your own pain looked at on Tuesday.",
      blocks: [
        { type: "grid", cols: "g3", items: [
          { type: "card", title: "Keep your record", body: "Your tracker and notes protect your own care, and they’re the most accurate version of your story if you ever choose to share it." },
          { type: "card", title: "Use the tools", body: `Scripts, rights and pathways from <a href="${R.ed03}">Edition 03</a> still apply. Systems thinking adds to them; it doesn’t replace them.` },
          { type: "card", title: "You don’t owe your story", body: "You can advocate for change without ever sharing your personal health details. Your voice counts either way." },
        ]},
      ],
    },
    {
      id: "connect", short: "Share safely", eyebrow: "Connect", title: "Sharing lived experience, safely",
      intro: "Stories change minds. But once a story is out, you can’t take it back. Sharing well means protecting yourself, and anyone else in the story.",
      blocks: [
        { type: "check", title: "Before you share your story", items: ["I’m sharing because I want to, not because I feel I have to", "I know who will see it, and where it will be published", "I’ve decided whether to use my name, first name only, or stay anonymous", "I’ve left out details that could identify other people (family, doctors, schools)", "I’ve left out details I might not want public in five years", "I know whether I can review or withdraw it before it’s published", "I have someone to talk to afterwards if it brings things up"] },
        { type: "grid", cols: "g2", items: [
          { type: "card", title: "Tell the part that helps others", body: "You don’t need to share everything. Often the most useful part is one moment and what it changed:", items: ["What happened", "How it affected your life", "What would have helped", "What you’d want decision-makers to change"] },
          { type: "card", title: "Hearing other people’s stories", body: "If a friend shares something with you:", items: ["Listen first, and believe them", "Don’t repeat it without asking", "Share what helped you, if they want", "Point them to support if they’re struggling", "If someone is at risk of harm, tell a trusted adult"] },
        ]},
        { type: "card", tone: "tint", title: "Starting conversations at home and in community", body: "In many cultures, health is discussed indirectly or not at all. Change often starts with one careful conversation. Try starting from something general (“I read that lots of women have endometriosis and don’t know it”) rather than personal, and choose a person who’s likely to listen, like an aunt or older cousin, not the whole family at dinner." },
      ],
    },
    {
      id: "amplify", short: "Where voices count", eyebrow: "Amplify", title: "Where young voices can count",
      intro: "Decisions about health are made in schools, clinics, hospitals, councils and parliaments. More of them are open to young people than you might think.",
      blocks: [
        { type: "table", caption: "Ways young people can influence health decisions", head: ["Where", "How young people take part", "Start with"], rows: [
          ["Your school", "Student voice on health classes, period products, wellbeing policy", "Your SRC, or a teacher who’ll champion it. VicSRC supports student voice in Victoria."],
          ["Health services", "Feedback and complaints are counted and reviewed. Many services run youth advisory groups", "Feedback forms, or a service’s youth or consumer advisory group"],
          ["Hospitals", "Youth advisory councils advise on patient experience", "For example, the Royal Children’s Hospital’s Youth @ the Kids, for ages 12–25"],
          ["Councils", "Youth councils and consultations on local services", "Your local council’s youth services team"],
          ["Governments", "Inquiries and consultations take written submissions, often from anyone", "Watch for open consultations; a short submission from lived experience counts"],
          ["Public conversation", "Opinion pieces, blogs, podcasts, social content", "Youth-led platforms that support new writers"],
        ]},
        { type: "steps", heading: "Writing to someone who can change something", items: [
          { title: "Say who you are and why you care", body: "One or two lines. “I’m a Year 10 student in Melbourne who has had period pain dismissed.”" },
          { title: "Describe the problem, and show it’s bigger than you", body: "One short example, and one piece of evidence that it’s common." },
          { title: "Ask for one specific thing", body: "“Include period pain and when to see a GP in the Year 8 health curriculum.” Specific asks get specific answers." },
          { title: "Offer to help", body: "Offer to share a youth perspective, meet, or help test a resource. Then follow up in two to three weeks." },
        ]},
      ],
    },
    {
      id: "change", short: "Change, not tokenism", eyebrow: "Change", title: "Real participation, not tokenism",
      intro: "Being invited in is a start. What matters is whether young people actually influence what happens.",
      blocks: [
        { type: "figure", svg: participationLadder(), caption: "Adapted from well-known models of youth participation. Higher isn’t always better for every decision, but young people should always know how their input was used." },
        { type: "grid", cols: "g2", items: [
          { type: "card", title: "Signs it’s genuine", items: ["You’re told what the decision is and what can still change", "You get information in plain language, in time to prepare", "You’re told afterwards what was done with your input", "Young people from different backgrounds are involved, not just one", "It’s safe, supported and, where possible, paid or recognised"] },
          { type: "card", title: "Questions to ask when you’re invited", items: ["What decision will this feed into?", "Who makes the final call?", "How will you tell us what changed?", "Who else is being asked?", "What support is there if topics are personal?"] },
        ]},
        { type: "scenario", tag: "Maya, three years on", title: "From her story to a submission", body: [
          "After her referral, Maya gets answers, but it took years. When she mentions it in class, three other students say something similar happened to them.",
          "With her SRC and a teacher’s support, she runs a short anonymous survey about period pain and school. She doesn’t collect names or health details, explains how the answers will be used, and gets the school’s approval first.",
          "Forty students respond. Most say they’ve missed class because of period pain, and many say they didn’t know when pain was worth seeing a GP about. The SRC turns this into a two-page summary and a short submission when a youth consultation on health education opens.",
        ], fic: "Maya and these figures are fictional, used to show how the process works." },
        { type: "reflect", title: "Your first step", prompts: ["What’s one experience you’ve heard more than once from people your age?", "What barrier keeps it happening?", "Who has the power to change that barrier?", "What’s one small thing you could do this month?"] },
      ],
    },
  ],
  next: {
    title: "From collective voice to the Aletheia you see today",
    body: "Edition 04 recognised that young people’s experiences could shape systems. Our current programs are how we put that into practice, and the current Voice Pack is where it all comes together.",
    links: [
      [R.consultation, "Youth Consultation", "Young people’s input into real decisions"],
      [R.roundtables, "Youth Roundtables", "Young people and decision-makers in one room"],
      [R.council, "Youth Executive Council", "Youth leadership inside Aletheia"],
      [R.research, "Youth Research", "Lived experience as evidence"],
      [R.current, "The current Voice Pack", "Heard. Understood. Me. (April 2026)"],
    ],
  },
  prev: { href: R.ed03, label: "Edition 03 · Use Your Voice" },
  nextEd: { href: R.current, label: "Current edition · Heard. Understood. Me." },
  sources: [S.guidelineEndo, S.vicInquiry, S.vicPain, S.rchYak, S.hcc, S.whoHL],
  helpCount: 4,
};
