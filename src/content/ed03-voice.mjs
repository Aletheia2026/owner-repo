import { R } from "../lib/routes.mjs";
import { cover, appointmentFlow, afterTree, systemMap } from "../lib/graphics.mjs";
import { S } from "./sources.mjs";

export default {
  ed: "03",
  slug: "use-your-voice",
  path: R.ed03,
  badge: "Archive Edition 03",
  eyebrow: "Voice Pack Archive",
  title: "Use Your Voice",
  seoTitle: "Use Your Voice: Voice Pack Archive Edition 03",
  description: "Archive Edition 03 of the Aletheia Voice Pack: recognising medical dismissal, preparing for appointments, conversation scripts, navigating Australian healthcare, your rights (consent, confidentiality, interpreters) and inclusive care.",
  question: "“What do I do when I’m not being heard?”",
  lede: "You can understand your body and describe it clearly, and still walk out of an appointment feeling brushed off. This edition is about what happens next: how to hold your ground, find your way through the system, and know your rights.",
  framework: ["Understand", "Prepare", "Communicate", "Navigate", "Advocate"],
  tags: ["Medical dismissal", "Scripts", "Healthcare navigation", "Rights", "Inclusive care"],
  readTime: "About 35 minutes to read",
  audience: "For ages 14+",
  cover: cover("03"),
  pdf: "Aletheia-Voice-Pack-Archive-Edition-03-Use-Your-Voice.pdf",
  ogImage: "voice-pack-archive-03-og.png",
  annotation: "By this edition, the stories young people were sharing with us had changed. Many had the knowledge and the words, and were still being told it was “just stress”, “normal for your age”, or nothing at all. We stopped treating dismissal as a gap in the young person’s skills and started naming it for what it is. This is where Aletheia’s self-advocacy and healthcare-navigation work took shape.",
  chapters: [
    {
      id: "understand", short: "When you’re not heard", eyebrow: "Understand", title: "When you’re not heard",
      intro: [
        "Medical dismissal is when your concerns aren’t properly listened to, investigated or explained. It isn’t always rude or obvious. It can sound kind. It can come from someone who means well. The result is the same: you leave without answers, and start to doubt yourself.",
        "It is not a test you failed. Knowing what it looks like makes it easier to respond in the moment, instead of replaying it on the bus home.",
      ],
      blocks: [
        { type: "grid", cols: "g2", items: [
          { type: "card", title: "What it can look like", items: ["Symptoms put down to stress, anxiety or weight before anything else is checked", "“That’s normal” without asking how it affects you", "Being told you’re too young for a condition", "Being interrupted, or the appointment wrapping up before you’ve finished", "Questions directed to your parent instead of you", "Leaving without a plan or any idea what happens next"] },
          { type: "card", tone: "tint", title: "Why it happens", items: ["Short appointments and busy clinics", "Pain in girls and women being normalised for generations", "Assumptions about age, gender, culture, weight, disability or sexuality", "Language barriers, or no interpreter", "Symptoms that are hard to see or test for", "Young people not being expected to speak for themselves"] },
        ]},
        { type: "pull", text: "Being dismissed says something about the conversation. It says nothing about whether your symptoms are real." },
        { type: "vocab", cols: "g2", items: [
          { term: "Implicit bias", what: "Assumptions people hold without realising, which can shape whose pain is believed and what gets investigated. Research and public inquiries in Australia have found women’s pain is more likely to be underestimated.", note: "Naming bias isn’t about blaming one doctor. It helps you see why pushing for proper investigation is reasonable." },
          { term: "Diagnostic delay", what: "The time between first having symptoms and getting a diagnosis. For endometriosis in Australia it averages 6 to 8 years, partly because symptoms get normalised.", note: "Delay is a pattern, not a personal failure. Edition 04 looks at what can change it." },
        ]},
      ],
    },
    {
      id: "prepare", short: "Prepare", eyebrow: "Prepare", title: "Walk in prepared",
      intro: "Preparation is the quiet superpower of self-advocacy. It means the important things get said even if you feel nervous or rushed.",
      blocks: [
        { type: "figure", svg: appointmentFlow(), caption: "Stage 3, wrapping up, is where the plan gets made. Don’t skip it." },
        { type: "grid", cols: "g2", items: [
          { type: "card", title: "Your one-page summary", body: "Bring a short page (or a note on your phone) with:", items: ["Your main concern in one sentence", "Your answers to what, where, when, how much and what changes it", "How long it’s been going on, and whether it’s getting worse", "What you’ve already tried", "Past appointments about it, and what was said", "What you want from today"] },
          { type: "card", title: "You can bring someone", body: "A parent, carer, older sibling, friend or youth worker can come with you to take notes or back you up. You decide whether they stay for the whole appointment. You can also ask to speak to the doctor alone for part of it.", say: ["Can my friend stay while we talk about this?", "Could I have a few minutes on my own with the doctor?"] },
        ]},
        { type: "callout", icon: "i", title: "Choose the right kind of appointment", body: "Book a long appointment for anything complex. Ask for a doctor you prefer (for example, a female GP) if that helps you speak openly. Telehealth works for follow-ups and talking through results. If you’d like an interpreter, ask when you book: it’s free for GP appointments covered by Medicare." },
      ],
    },
    {
      id: "communicate", short: "Scripts", eyebrow: "Communicate", title: "What to say in the room",
      intro: "You don’t need to be confrontational. The most effective responses are calm, specific, and bring the focus back to what the symptoms are doing to your life.",
      blocks: [
        { type: "script", title: "When it’s put down to stress", lines: [["Clinician", "It’s probably just stress. Try to get more sleep."], ["You", "Stress might be part of it. I’d still like to rule out a physical cause, because this pain has stopped me going to school four times this term."], ["You", "What would you want to check before we put it down to stress?"]], after: "You’re not rejecting the idea. You’re asking for reasoning and a proper look." },
        { type: "script", title: "When you’re told it’s normal", lines: [["Clinician", "A lot of girls your age have painful periods. It’s normal."], ["You", "I know period pain is common. But it isn’t manageable for me: it’s an 8 out of 10 and I have to lie down."], ["You", "At what point would you investigate it further?"]] },
        { type: "script", title: "When you’re interrupted", lines: [["Clinician", "Right, so we’ll try some—"], ["You", "Sorry, there’s one more thing I need to mention before we decide."], ["Note", "Look at your notes. Finish the point. You’re not being rude by completing your sentence."]] },
        { type: "script", title: "When you don’t understand", lines: [["Clinician", "It could be secondary dysmenorrhoea. We’ll see how you go on the pill."], ["You", "Can you explain that in simpler words? What would the pill be treating?"], ["You", "So, just to check: you think the pain might be caused by something else, and this is to see if it helps first. Is that right?"]], after: "Repeating back what you heard (called ‘teach-back’) catches misunderstandings before you leave." },
        { type: "say", head: "Lines that change the conversation", lines: ["This is affecting my daily life, and I’d like to look into it properly.", "What else could this be?", "What’s the plan if this doesn’t work?", "Could you please note in my file that I raised this today?", "I’d like a referral, or a second opinion."] },
      ],
    },
    {
      id: "navigate", short: "Navigate the system", eyebrow: "Navigate", title: "Finding your way through the system",
      intro: "Australia’s health system has many doors. Knowing which one to use, and that there’s always another, makes it much harder to get stuck.",
      blocks: [
        { type: "figure", svg: systemMap(), caption: "You don’t need a referral for a GP, headspace, a sexual health clinic, community health, a pharmacist or an Urgent Care Clinic." },
        { type: "table", caption: "Where to start", head: ["If you’re dealing with…", "A good first stop", "Good to know"], rows: [
          ["A physical symptom that’s ongoing or worrying", "GP", "Ask if they bulk bill. A GP can refer you to a specialist."],
          ["Low mood, anxiety or “not feeling like myself”", "GP, headspace or school wellbeing", "A GP can make a Mental Health Treatment Plan for rebated psychology sessions."],
          ["Contraception, STI testing, pregnancy questions", "Sexual health clinic or GP", "Often free and confidential. Some don’t need a Medicare card."],
          ["Something urgent but not life-threatening", "Urgent Care Clinic", "Free walk-in care for things like sprains, cuts or infections."],
          ["Not sure how urgent it is", "healthdirect, 1800 022 222", "A registered nurse, 24/7, who can tell you where to go."],
          ["An emergency", "Call 000 or go to ED", "Severe pain, heavy bleeding with dizziness, trouble breathing, or thoughts of harming yourself."],
        ]},
        { type: "figure", heading: "When you leave still not feeling heard", svg: afterTree() },
        { type: "grid", cols: "g2", items: [
          { type: "card", title: "Referrals", body: "A referral is a letter from your GP to a specialist. It’s needed to get a Medicare rebate for most specialists. Ask why they’re referring you, whether there’s someone closer or cheaper, and how long the referral lasts.", say: ["Would it help to see a specialist about this?", "Is there a public clinic option with a shorter wait?"] },
          { type: "card", title: "Second opinions", body: "Seeing another doctor is a normal part of healthcare. You don’t need permission, and you don’t have to tell your first doctor. You can ask for a copy of your results to take with you.", say: ["I’d like a second opinion.", "Could I have a copy of my test results?"] },
        ]},
      ],
    },
    {
      id: "rights", short: "Your rights", eyebrow: "Advocate", title: "Your rights, in plain words",
      intro: "The Australian Charter of Healthcare Rights applies to everyone getting healthcare in Australia, including young people. It has seven parts.",
      blocks: [
        { type: "grid", cols: "g4", items: [
          { type: "card", kicker: "Access", body: "Healthcare that meets your needs." },
          { type: "card", kicker: "Safety", body: "Safe, high-quality care in a safe environment." },
          { type: "card", kicker: "Respect", body: "Being treated with dignity, and your culture, identity and beliefs respected." },
          { type: "card", kicker: "Partnership", body: "Asking questions and being involved in decisions about your care." },
          { type: "card", kicker: "Information", body: "Clear information about your condition, options, costs and risks." },
          { type: "card", kicker: "Privacy", body: "Your personal and health information kept private and confidential." },
          { type: "card", kicker: "Give feedback", body: "Commenting on or complaining about your care, and having it dealt with." },
          { type: "card", tone: "dark", title: "Seven rights", body: "They’re yours at 14, 16 and 24 alike. Many clinics display the Charter in the waiting room." },
        ]},
        { type: "grid", cols: "g2", items: [
          { type: "card", title: "Consent", body: "Before any test or treatment, you should be told what it is, why it’s recommended, the risks and the alternatives. You can ask questions, take time, say no, or change your mind.", after: "Under 18? In most of Australia there’s no single age. If a doctor thinks you understand the decision well enough (often called being a ‘mature minor’), you can consent yourself." },
          { type: "card", title: "Confidentiality", body: "Doctors must keep what you tell them private, with some exceptions, such as a serious risk of harm to you or someone else. If you’re worried, ask at the start.", after: "From 14, Medicare generally needs your consent before your claims information is released to a parent, and at 15 you can get your own Medicare card." , say: ["Will this stay between us?", "Is there anything you’d have to share?"] },
        ]},
        { type: "steps", heading: "If something went wrong: giving feedback", items: [
          { title: "Speak to the clinician or the practice", body: "If it feels safe, raise it directly, or ask for the practice manager. Many issues are fixed here." },
          { title: "Put it in writing", body: "A short email or feedback form: what happened, when, and what you’d like done. Keep a copy." },
          { title: "Contact your state health complaints body", body: "If it’s still not resolved. In Victoria this is the Health Complaints Commissioner, which is free. Every state and territory has one." },
        ]},
      ],
    },
    {
      id: "identity", short: "Identity and care", eyebrow: "Advocate", title: "When culture, gender or identity are in the room",
      intro: "Who you are shapes how you’re heard. Good healthcare adapts to you, not the other way round.",
      blocks: [
        { type: "grid", cols: "g2", items: [
          { type: "card", title: "If English isn’t your family’s first language", body: "You have the right to understand your care. GPs can book a professional interpreter for free through TIS National. A professional interpreter is better than a family member, especially for private topics.", say: ["I’d like an interpreter, please.", "Can we speak without my family translating?"] },
          { type: "card", title: "If health isn’t talked about at home", body: "In many families, periods, sexual health and mental health are private or taboo. You can still get care. Confidential services exist for exactly this, and a school wellbeing worker can help you find one." },
          { type: "card", title: "If you’re LGBTQIA+", body: "You have the right to respectful care. You choose what to share about your identity. It’s okay to correct your name or pronouns, and to ask whether a service is inclusive. QLife (1800 184 527) offers peer support.", say: ["My name is ___ and I use ___ pronouns.", "Is this service LGBTQIA+ inclusive?"] },
          { type: "card", title: "If you’re Aboriginal or Torres Strait Islander", body: "Aboriginal Community Controlled Health Organisations offer culturally safe care, run by community. 13YARN (13 92 76) is 24/7 crisis support by Aboriginal and Torres Strait Islander people." },
          { type: "card", title: "If you’re neurodivergent or have a disability", body: "You can ask for adjustments: more time, a quieter room, written information, step-by-step explanations, or a support person.", say: ["I process information better in writing. Could you write that down?"] },
          { type: "card", title: "If you’re told you’re too young", body: "Some conditions, like endometriosis, can start in the teenage years. Age is a reason to be thorough, not a reason to stop looking.", say: ["I understand I’m young, but this is affecting me now. Can we look into it properly?"] },
        ]},
        { type: "scenario", tag: "Maya, two years on", title: "Holding her ground", body: [
          "Maya’s plan helped a little, then stopped helping. The pain has spread to between her periods. At a new appointment she’s told it’s “probably normal for her age”.",
          "This time she has her one-page summary and two years of tracking. She says calmly that it isn’t manageable, and asks what else it could be. When she senses the appointment wrapping up, she asks what the plan is if nothing changes, and asks for her concerns to be noted in her file.",
          "She leaves with a referral to a gynaecologist. On the way out, she books a follow-up anyway, just in case.",
        ], fic: "Maya is fictional. Her story continues in Edition 04." },
        { type: "reflect", title: "Before your next appointment", prompts: ["What’s the one thing I most need them to understand?", "What will I say if I’m told it’s normal?", "Who could I bring, or tell about the appointment?", "What would a good outcome look like for me?"] },
      ],
    },
  ],
  next: {
    title: "From one voice to the tools young people use now",
    body: "Self-advocacy became one of Aletheia’s foundations. It gave us the Medical Dismissal pillar, the Health Navigator, and the workshop young people ask for most.",
    links: [
      [R.selfAdvocacy, "Health Navigator & Self-Advocacy Journal", "The full guide to getting care"],
      [R.fivePillars, "Five Pillars", "Understanding Medical Dismissal"],
      [R.workshops, "Youth Workshops", "“Heard in the Room”: practising the scripts"],
      [R.ed04, "Next: Archive Edition 04", "When it isn’t just you"],
    ],
  },
  prev: { href: R.ed02, label: "Edition 02 · Find the Words" },
  nextEd: { href: R.ed04, label: "Edition 04 · From Voice to Change" },
  sources: [S.charter, S.medicare14, S.fpnswConf, S.ylaDoctor, S.tis, S.hcc, S.guidelineEndo, S.vicPain, S.healthdirect, S.headspace],
  helpCount: 8,
};
