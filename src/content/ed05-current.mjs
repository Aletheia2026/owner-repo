import { R } from "../lib/routes.mjs";
import { cover, aletheiaLoop, LOOP, symptomStory, painScale, appointmentFlow, systemMap, meToWe } from "../lib/graphics.mjs";
import { HELP } from "../lib/components.mjs";
import { S } from "./sources.mjs";

// The current Voice Pack. It keeps the April 2026 edition's structure
// (Health 101 vocabulary · Fighting medical dismissal · Navigating the
// Australian health system · Your story, your voice) and its strongest lines,
// with every fact rewritten and checked, and with the Aletheia loop joining
// the parts into one model. Content here also generates the Canva copy doc.

const U = "Understand", A = "Articulate", N = "Navigate", V = "Advocate", C = "Connect", X = "Act", I = "Influence";

export const vocab = {
  body: [
    { term: "Period pain", pron: "medical word: dysmenorrhoea", what: "Cramping pain in the lower tummy, back or thighs around a period, caused by the uterus contracting. Common, especially in the teens.", feels: "Aching or cramping waves, sometimes with nausea, diarrhoea or headaches.", check: "It stops you going to school or doing things, the usual pain relief doesn’t help, it’s getting worse each year, or you have pain outside your period.", say: ["My period pain stops me going to school, and the usual pain relief doesn’t help.", "It’s been getting worse every year."], stages: [U, A] },
    { term: "Heavy menstrual bleeding", what: "Bleeding heavy enough to affect your physical, social or emotional life. It’s common, and it can be treated.", feels: "Changing a pad or tampon every 1–2 hours, bleeding through at night, clots bigger than a 50-cent coin, periods over 7 days, feeling tired or dizzy.", check: "Any of the above. Heavy periods are a common cause of low iron. Urgent: soaking a pad every hour for several hours, or feeling faint.", say: ["I’m changing a pad every hour or two on my heavy days.", "Could we check my iron levels?"], stages: [U, A] },
    { term: "Endometriosis", pron: "en-doh-mee-tree-OH-sis", what: "Tissue similar to the lining of the uterus grows outside it, causing inflammation and pain. About 1 in 7 people assigned female at birth in Australia are diagnosed by their late 40s. It can start in the teens.", feels: "Severe period pain, pain between periods, pain with bowel movements or weeing, pain during sex, fatigue.", why: "Symptoms are often normalised as ‘just bad periods’. Australia’s national guideline puts the average delay to diagnosis at 6 to 8 years.", check: "Period pain stops your life, or pain is getting worse over time. A GP can refer you to a gynaecologist. Diagnosis may involve an ultrasound, MRI or keyhole surgery.", say: ["My pain affects my daily life. Could this be something like endometriosis?", "What would it take to investigate that?"], stages: [U, A, V] },
    { term: "PMOS (formerly PCOS)", pron: "polyendocrine metabolic ovarian syndrome", what: "A common hormonal and metabolic condition affecting about 8–13% of women of reproductive age. In May 2026 it was renamed from polycystic ovary syndrome, because it affects the whole body and many people with it don’t have cysts. You’ll still hear “PCOS” for a while.", feels: "Irregular or missing periods, acne, extra hair on the face or body, hair thinning on the head, changes in weight or blood sugar.", note: "In teenagers, diagnosis needs both irregular cycles and signs of higher androgen (‘male’) hormones. An ultrasound isn’t used to diagnose PCOS until 8 years after periods start.", say: ["My cycle has been irregular for a long time, and I’ve had acne and extra hair growth too.", "Could this be PMOS (PCOS)? What tests would help?"], stages: [U, A] },
    { term: "Hormonal changes", what: "Hormones regulate your cycle, mood, energy, skin and sleep. They shift naturally through puberty and across each cycle.", note: "‘Hormonal imbalance’ is a phrase you’ll hear a lot, but it isn’t a diagnosis. If someone says it, it’s fair to ask which hormone, and what test would show it.", noteLabel: "Good to know", check: "Ongoing symptoms that disrupt your life: very irregular cycles, severe mood changes before periods, persistent acne, unexplained tiredness.", say: ["Which hormone do you think is involved?", "Is there a test that would show that?"], stages: [U, A] },
    { term: "Iron deficiency", what: "Not having enough iron. It’s common in young people with periods, especially heavy ones, and can lead to anaemia (low red blood cells).", feels: "Tiredness that doesn’t lift, being short of breath, dizziness, pale skin, poor concentration, feeling cold.", check: "You’re always exhausted, especially if your periods are heavy. It’s checked with a simple blood test.", say: ["I’m exhausted all the time and my periods are heavy. Could we check my iron?"], stages: [U, A] },
  ],
  mind: [
    { term: "Anxiety", what: "Your body’s alarm system. Useful in small doses. It becomes a problem when it’s frequent, intense, or out of proportion to what’s happening.", feels: "Constant worry, racing thoughts, trouble sleeping, a fast heartbeat, nausea, tight muscles, avoiding things.", check: "It’s most days, for weeks, or it stops you doing things. headspace (12–25) and your GP are good first stops.", say: ["I’ve felt anxious most days for a while, not just occasionally.", "It’s affecting school and sleep. What support is there?"], stages: [U, A, C] },
    { term: "Depression", what: "More than sadness. A health condition affecting how you think, feel and function over weeks or longer. It isn’t a personal failure.", feels: "Low, flat or numb, losing interest in things, changes in sleep or appetite, low energy, feeling worthless or hopeless.", check: "It’s lasted two weeks or more. If you have thoughts of suicide or self-harm, get help now: call Lifeline on 13 11 14, Kids Helpline on 1800 55 1800, or 000 in an emergency.", say: ["I haven’t felt like myself for a while.", "I think I need support with my mental health."], stages: [U, A, C] },
    { term: "ADHD", what: "A neurodevelopmental difference in how the brain regulates attention, activity and impulses. In girls it’s often the less visible, inattentive type.", feels: "Losing focus, forgetting things, starting lots and finishing little, time slipping, restlessness inside, exhaustion from masking.", why: "It can be mistaken for being disorganised, dreamy, anxious or ‘not trying’. Many girls are diagnosed later than boys.", check: "It’s been going on since childhood and affects school, work or relationships. A GP can refer you for assessment.", say: ["I’ve struggled with focus and organisation for as long as I can remember.", "Could I be assessed for ADHD?"], stages: [U, A, V] },
    { term: "Sensory overload", what: "When your brain gets more input (noise, light, touch, crowds) than it can process at once. Common for autistic and ADHD people, and for anyone who’s unwell, exhausted or stressed.", feels: "Suddenly overwhelmed, irritable or panicky. Needing to leave, cover your ears or go quiet.", note: "You can ask for adjustments at appointments: a quieter room, dimmer lights, fewer people, written information.", noteLabel: "At appointments", say: ["I’m feeling overwhelmed by the room. Could we dim the lights or find somewhere quieter?"], stages: [A, V] },
    { term: "Fatigue", what: "Persistent exhaustion that doesn’t go away with rest. Different from normal tiredness after a busy day.", feels: "Waking up drained, brain fog, simple tasks taking huge effort.", check: "It’s lasted weeks, it’s affecting your life, or it comes with other symptoms. It has many possible causes (iron, thyroid, mental health, sleep, infections), so it deserves a proper look.", say: ["This isn’t normal tiredness. I’m exhausted even after resting.", "Can we look for possible causes?"], stages: [U, A] },
  ],
  longterm: [
    { term: "Chronic pain", what: "Pain lasting more than three months. Over time the nervous system can become more sensitive, so pain can continue even when tissues have healed. It is real pain.", feels: "Constant or recurring pain that affects sleep, mood, concentration and movement.", why: "When nothing shows up on a scan, people are sometimes told it’s ‘in their head’. Pain doesn’t have to be visible to be valid.", say: ["This pain has been ongoing for months and it affects my daily life.", "Can we talk about a plan to manage it, not just the cause?"], stages: [U, A, V] },
    { term: "Chronic condition", what: "A health condition that lasts a long time and needs ongoing management, like asthma, endometriosis, diabetes or depression.", note: "A GP can create a care plan that coordinates your care, and may give access to Medicare-rebated allied health visits.", noteLabel: "Good to know", say: ["This seems to be long-term. Can we make a plan for managing it?"], stages: [U, N] },
    { term: "Inflammation", what: "The immune system’s response to injury or infection. Short-term, it helps you heal. Long-term inflammation is part of some conditions, like endometriosis, inflammatory bowel disease and arthritis.", note: "‘Inflammation’ on its own is a process, not a diagnosis. Some blood tests show it, but not all inflammation shows up in them. The useful question is what might be causing it.", noteLabel: "Good to know", say: ["Could there be an inflammatory cause for this?", "What tests would help show that?"], stages: [U, A] },
  ],
  care: [
    { term: "Diagnosis", what: "Working out what’s causing your symptoms, based on your story, an examination and sometimes tests. It can take several appointments.", note: "A doctor may give a ‘working diagnosis’ while they rule other things out. It’s fair to ask what else is being considered.", noteLabel: "Good to know", say: ["What could this be?", "What else are you considering, and how will we rule it out?"], stages: [U, N] },
    { term: "Informed consent", what: "Agreeing to a test or treatment after understanding what it is, why it’s suggested, the risks and the alternatives. You can ask questions, take time, say no or change your mind.", note: "Under 18, you can usually consent yourself if the doctor thinks you understand the decision (a ‘mature minor’). The exact rules vary by state.", noteLabel: "If you’re under 18", say: ["Can you explain what this involves?", "What are my options, including waiting?", "I’d like some time to think about it."], stages: [N, V] },
    { term: "Confidentiality", what: "Health professionals must keep your information private, except in limited cases, such as a serious risk of harm.", note: "From 14, Medicare generally needs your consent before releasing your claims information to parents. From 15 you can have your own Medicare card.", noteLabel: "If you’re young", say: ["Will this stay confidential?", "Is there anything you’d have to share, and with whom?"], stages: [N, V] },
    { term: "Implicit bias", what: "Assumptions people hold without realising, which shape whose pain is believed and what gets investigated. In Victoria’s Inquiry into Women’s Pain, one in three women said they’d felt dismissed or unheard by practitioners.", note: "Bias isn’t always intentional, but it has real effects. Recognising it can help you see that being dismissed isn’t about you.", noteLabel: "Why it matters", say: ["I don’t feel my concerns have been fully understood yet.", "Can we take another look at my symptoms?"], stages: [U, V, I] },
    { term: "Referral", what: "A letter from your GP to a specialist or service. For most specialists you need one to get a Medicare rebate.", note: "Ask why, who, how much it costs, how long the wait is, and how long the referral lasts. Public clinics may cost less but have longer waits.", noteLabel: "Ask about", say: ["Would a specialist help here?", "Is there a public option, or someone closer?"], stages: [N, X] },
    { term: "Second opinion", what: "Seeing another health professional about the same issue. It’s a normal part of healthcare and doesn’t need anyone’s permission.", note: "You can ask for copies of your test results to take with you.", noteLabel: "Good to know", say: ["I’d like a second opinion.", "Could I have a copy of my results?"], stages: [V, X] },
    { term: "Self-advocacy", what: "Speaking up for your needs and your health. It isn’t about being loud or perfectly confident. It can be one question, one pause, one “I don’t understand”.", say: ["This is important to me.", "I’d like to understand this better."], stages: [V] },
  ],
};

export const dismissal = [
  { key: "stress", heard: "“It’s probably just stress.”", why: "Stress does affect the body. But it’s sometimes offered before physical causes are checked.", you: ["I understand stress can play a role. I’d still like to rule out physical causes.", "What would you want to check before putting this down to stress?"], next: "Ask what would change their mind, and when to come back if it doesn’t improve." },
  { key: "normal", heard: "“That’s normal.”", why: "Something can be common and still not be manageable for you.", you: ["I know it may be common, but it isn’t manageable for me.", "At what point would this need investigating?"], next: "Describe what it stops you doing. Impact is harder to dismiss than a number." },
  { key: "overreacting", heard: "“You’re overreacting.”", why: "How calm you seem says nothing about what you’re feeling.", you: ["It feels significant to me, and it’s affecting my life.", "I’d like to focus on the cause rather than my reaction."], next: "Ask for your concern to be noted in your file." },
  { key: "young", heard: "“You’re too young for that.”", why: "Many conditions, including endometriosis, PCOS, ADHD and depression, can start in the teenage years.", you: ["I understand I’m young, but this is affecting me now.", "Can we look into it properly, regardless of my age?"], next: "Bring your tracker: a pattern over months is hard to wave away." },
  { key: "pain", heard: "“It shouldn’t hurt that much.”", why: "Pain is personal. It doesn’t have to match anyone’s expectations to be real.", you: ["I’m not asking you to agree with the level of pain. I’m asking for help understanding it.", "It’s consistent, and it’s getting worse over time."], next: "Use your symptom story, and ask what else it could be." },
  { key: "rushed", heard: "“Okay, so we’ll just—” (you feel rushed)", why: "Appointments are short. Important details get lost when things move too fast.", you: ["I don’t feel I’ve explained everything yet.", "Could we book another appointment to go through this properly?"], next: "Next time, book a long appointment and lead with your main concern." },
  { key: "interrupted", heard: "(You’re interrupted mid-sentence.)", why: "Interruptions are common in busy clinics, and can cut off key information.", you: ["I’d like to finish explaining this before we move on.", "There’s one more part that I think is important."], next: "Keep your notes in front of you, and go back to where you stopped." },
  { key: "not-serious", heard: "“Let’s just wait and see.” (you’re not taken seriously)", why: "Waiting can be reasonable, but only with a plan.", you: ["This has been affecting me consistently. It’s important to me that we look into it.", "What are we watching for, and when do I come back?"], next: "If you still feel unheard, ask for a second opinion." },
  { key: "jargon", heard: "(Medical words you don’t understand.)", why: "Clinicians use shorthand. It’s their job to make sure you understand.", you: ["Could you explain that in simpler terms?", "So, just to check, you’re saying… Is that right?"], next: "Ask for it in writing, or for something you can read at home." },
  { key: "intimidated", heard: "(You feel intimidated.)", why: "There’s a power imbalance in the room. You don’t have to perform confidence.", you: ["I’d like to ask a few questions before we continue.", "I need a moment to process this."], next: "Bring a support person, or ask to pause and come back." },
  { key: "decide", heard: "“So, shall we go ahead?” (you’re not ready)", why: "Most decisions aren’t urgent. You’re allowed time.", you: ["I’d like some time to think before deciding.", "Is there any risk in waiting a little?"], next: "Take the information home, look it up on a trusted site, and come back with questions." },
  { key: "language", heard: "(The appointment isn’t in your language.)", why: "You have a right to understand your care. GPs can book a professional interpreter for free.", you: ["I would like an interpreter for this appointment.", "Can we speak without my family translating?"], next: "Ask when you book, so the interpreter is ready. TIS National is 131 450." },
  { key: "neuro", heard: "(The way it’s explained doesn’t work for you.)", why: "If you process information differently, the standard format may not fit.", you: ["I may need more time to process this.", "Could you explain it step by step, and write it down?"], next: "Ask for reasonable adjustments when you book." },
  { key: "document", heard: "(You want it on the record.)", why: "Notes create a timeline, and make the next appointment faster.", you: ["Could you please include that in my medical record?", "I’d like this concern to be noted."], next: "Keep your own record too: date, what you said, what they said." },
  { key: "tests", heard: "“I don’t think we need tests.”", why: "Sometimes true. But you can ask for the reasoning.", you: ["Is there anything that would help us understand this better?", "I’d feel more comfortable ruling out possible causes first."], next: "Ask what would make testing appropriate, and note the answer." },
  { key: "follow", heard: "“Come back if it gets worse.”", why: "Without a clear plan, it’s easy to fall through the gaps.", you: ["What should I do if this doesn’t improve?", "How long should I wait before coming back?"], next: "Book the follow-up before you leave the clinic." },
  { key: "second", heard: "(You still don’t feel it’s resolved.)", why: "A second opinion is a normal and responsible part of care.", you: ["I’d feel more comfortable getting a second opinion.", "Could you refer me to another specialist?"], next: "Take copies of your results and your symptom story." },
];

const doors = [
  { to: "words", stage: "Understand", title: "Something feels off", go: "Find the words for what’s happening." },
  { to: "story", stage: "Articulate", title: "I have an appointment", go: "Build your symptom story and plan." },
  { to: "dismissal", stage: "Advocate", title: "I wasn’t heard", go: "What to say, and what to do next." },
  { to: "together", stage: "Influence", title: "I want to change things", go: "Turn experience into change." },
];

const vcard = (items) => ({ type: "vocab", cols: "g2", items });

export default {
  ed: "05",
  current: true,
  slug: "heard-understood-me",
  path: R.current,
  badge: "Current edition · April 2026",
  eyebrow: "The Aletheia Voice Pack",
  title: "Heard. Understood. Me.",
  heroTitle: `<span class="echo-wrap"><span class="echo" data-text="Heard.">Heard.</span><br><span class="echo" data-text="Understood.">Understood.</span><br><span class="echo r" data-text="Me.">Me.</span></span>`,
  seoTitle: "Heard. Understood. Me. The Aletheia Voice Pack (April 2026)",
  description: "The current Aletheia Voice Pack: a youth-designed health literacy and self-advocacy toolkit for young people in Australia. Health words, your symptom story, what to say when you’re dismissed, your rights, and how to turn experience into change.",
  question: "The Aletheia Project’s guide to health, self-advocacy and medical dismissal for young people.",
  lede: "Your voice is part of your health. This pack brings together everything Aletheia has learned about helping young people understand what’s happening in their bodies, say it clearly, find their way through healthcare, hold their ground, and change things for the next person.",
  framework: LOOP.map(([k]) => k),
  tags: ["Health literacy", "Medical dismissal", "Taboo uplift", "Diverse voices", "Youth-led action"],
  readTime: "About 50 minutes, or jump to what you need · Revised September 2026",
  audience: "For ages 12–25",
  cover: cover("05"),
  pdf: "Aletheia-Voice-Pack-April-2026-Heard-Understood-Me.pdf",
  ogImage: "voice-pack-current-og.png",
  credit: "Written, designed and fact-checked by The Aletheia Project’s youth resource development team, building on four earlier editions and the young people who shaped them.",
  chapters: [
    {
      id: "how", short: "How this pack works", eyebrow: "Start here", title: "One pack, seven things you can do",
      intro: [
        "Earlier Voice Packs came in stages: first knowing your body, then finding the words, then speaking up, then changing things. Young people taught us that real life doesn’t come in stages. You might need the words and the courage and the right service all in the same afternoon.",
        "So this edition is built as one connected model, the Aletheia loop. Every tool in it is tagged with the parts of the loop it helps with, and you can start wherever you are.",
      ],
      blocks: [
        { type: "html", html: `<div class="block"><div class="loop-grid"><figure class="diagram" style="background:#fbf8f1">${aletheiaLoop()}</figure><ol class="loop-list">${LOOP.map(([k, d], i) => `<li><span class="k" aria-hidden="true">${i + 1}</span><div><strong>${k}</strong><span>${d}</span></div></li>`).join("")}</ol></div></div>` },
        { type: "doors", heading: "Start where you are", items: doors },
        { type: "callout", icon: "i", title: "What this pack is, and isn’t", body: "It’s health education, written by young people and checked against Australian health sources (listed at the end). It isn’t medical advice, and it can’t diagnose you. It can help you get the most out of the people who can. In an emergency, call 000." },
      ],
    },
    {
      id: "words", short: "Health 101: the words", eyebrow: "Health 101 · Understand", title: "Language is power",
      intro: [
        "There are moments when something feels wrong in your body, but you don’t know how to explain it. You say “I just feel off”, and the conversation moves on without you. Not because your experience isn’t real, but because it hasn’t been named.",
        "This section gives you those names. Not so you can diagnose yourself, but so you can recognise patterns, ask better questions and stand your ground. You don’t need to become an expert in medicine. You only need enough language to be heard.",
      ],
      blocks: [
        { ...vcard(vocab.body), heading: "Your body and your cycle" },
        { ...vcard(vocab.mind), heading: "Mind, brain and energy" },
        { ...vcard(vocab.longterm), heading: "When it’s long-term" },
        { ...vcard(vocab.care), heading: "Words for the healthcare itself" },
      ],
    },
    {
      id: "story", short: "Your symptom story", eyebrow: "Articulate", title: "Your symptom story",
      intro: "Doctors think in patterns: what, where, when, how much. Turn what you’re feeling into six short lines and you can say it in thirty seconds, even when you’re nervous.",
      blocks: [
        { type: "figure", svg: symptomStory(), caption: "Write yours on your phone or in the Self-Advocacy Journal and read it out. Reading from notes is completely normal." },
        { type: "grid", cols: "g3", items: [
          { type: "card", title: "What & where", body: "Use feeling words: cramping, sharp, burning, throbbing, dragging, pressure. Then the exact place, and whether it spreads.", say: ["Sharp, low on the left, into my back."] },
          { type: "card", title: "When & how much", body: "When it started, when it happens, how long it lasts. Give your usual number and your worst number, plus what it stops you doing.", say: ["Usually 5, worst 8. I miss the first day of school."] },
          { type: "card", title: "So far & I want", body: "What you’ve tried, and what you need today: an explanation, a test, a plan, a referral, or to be believed.", say: ["I’d like to find out what’s causing it."] },
        ]},
        { type: "figure", heading: "Scoring pain by what it stops you doing", svg: painScale() },
        { type: "callout", icon: "✎", title: "Track it for two or three cycles", body: `A few weeks of notes turns “it’s bad sometimes” into a pattern anyone can see. Track bleeding, pain, mood, energy and missed days. The <a href="${R.selfAdvocacy}">Self-Advocacy Journal</a> has a tracker built in.` },
      ],
    },
    {
      id: "appointment", short: "The appointment", eyebrow: "Navigate", title: "Before, during, and after the appointment",
      intro: "Healthcare can feel confusing, not because it’s impossible to understand, but because nobody teaches you how it works. Knowing where to go, what it costs and what to bring changes the whole experience.",
      blocks: [
        { type: "figure", svg: appointmentFlow() },
        { type: "figure", heading: "Where to go", svg: systemMap(), caption: `For the full map, costs and what to bring, see the <a href="${R.selfAdvocacy}">Aletheia Health Navigator</a>.` },
        { type: "table", caption: "Costs and access in Australia", head: ["Question", "The short answer"], rows: [
          ["Will it cost anything?", "Bulk-billed GPs charge Medicare directly, so you pay nothing. Private billing means paying up front and claiming part back. Ask when you book: “Do you bulk bill young people?”"],
          ["Do I need a Medicare card?", "It helps. From 15 you can get your own. Many sexual health clinics and headspace centres can see you without one."],
          ["How do I get rebated psychology?", "Your usual GP can make a Mental Health Treatment Plan, which gives Medicare rebates for up to 10 individual sessions a year. headspace doesn’t need a referral."],
          ["What if I need an interpreter?", "Ask when booking. GPs can book one for free through TIS National."],
          ["Can I do it by phone or video?", "Yes. Telehealth works well for follow-ups, results and mental health appointments."],
        ]},
        { type: "grid", cols: "g2", items: [
          { type: "card", title: "Booking", say: ["I’d like a long appointment. I have a few things to discuss.", "Do you bulk bill?", "Could I see a female GP?"] },
          { type: "card", title: "Before you leave", say: ["What’s the plan?", "What should make me come back sooner?", "Could you note this in my file?"] },
        ]},
      ],
    },
    {
      id: "dismissal", short: "Fighting medical dismissal", eyebrow: "Advocate", title: "When you’re not heard",
      intro: [
        "You might walk out of an appointment knowing something wasn’t right. Maybe you were interrupted, rushed, or told it was “just stress” before anything was explored. That feeling matters.",
        "Medical dismissal isn’t always obvious. It can sound polite. It can come from people who mean well. This section isn’t about confrontation. It’s about clarity: for each moment, what might be going on, what you can say, and the next move. Say it quietly or firmly, however feels natural. Advocacy doesn’t look one way.",
      ],
      blocks: [
        { type: "dcard", cols: "g3", items: dismissal },
        { type: "pull", text: "Being taken seriously isn’t something you earn. It’s something you’re entitled to." },
      ],
    },
    {
      id: "rights", short: "Your rights", eyebrow: "Navigate · Advocate", title: "Your rights in the Australian system",
      intro: "The Australian Charter of Healthcare Rights applies to everyone getting care in Australia, whatever their age. Knowing it turns “I hope they’ll listen” into “I’m entitled to be involved”.",
      blocks: [
        { type: "table", caption: "The seven rights and what they mean for you", head: ["Right", "What it means for you"], rows: [
          ["Access", "Healthcare that meets your needs, including interpreters and adjustments."],
          ["Safety", "Care that’s safe, in a place where you feel safe."],
          ["Respect", "Being treated with dignity, with your culture, identity, beliefs and choices respected."],
          ["Partnership", "Asking questions and being involved in decisions, with support people if you want them."],
          ["Information", "Clear information about your condition, options, risks and costs, in a way you understand."],
          ["Privacy", "Your personal and health information kept private and confidential."],
          ["Give feedback", "Commenting on or complaining about your care, and having it taken seriously."],
        ]},
        { type: "grid", cols: "g2", items: [
          { type: "card", title: "Consent", body: "You can ask what a test or treatment involves, why, the risks and alternatives. You can take time, say no, or change your mind. Under 18, you can usually consent yourself if you understand the decision; the rules vary by state." },
          { type: "card", title: "Confidentiality", body: "What you say is private, with limited exceptions such as serious risk of harm. From 14, Medicare generally needs your consent to share claims with parents; from 15 you can have your own card. Sexual health clinics are confidential and often free." },
        ]},
        { type: "steps", heading: "If something went wrong", items: [
          { title: "Raise it with the clinician or practice", body: "If it feels safe. Ask for the practice manager if you prefer." },
          { title: "Put it in writing", body: "What happened, when, and what you’d like done. Keep a copy." },
          { title: "Go to your state’s health complaints body", body: "It’s free. In Victoria, that’s the Health Complaints Commissioner. Complaints are also how services find patterns and change." },
        ]},
      ],
    },
    {
      id: "identity", short: "Care that fits you", eyebrow: "Connect", title: "Care that fits who you are",
      intro: "Culture, language, gender, sexuality, disability and age shape how people are heard. Good care adapts to you. Here’s what you can ask for.",
      blocks: [
        { type: "grid", cols: "g3", items: [
          { type: "card", title: "Culturally and linguistically diverse", body: "Ask for a professional interpreter, free at GP appointments. It’s okay to see a doctor without family present. If health is taboo at home, confidential services exist for exactly this.", say: ["Can we speak without my family translating?"] },
          { type: "card", title: "LGBTQIA+", body: "You choose what to share. You can correct your name and pronouns, and ask if a service is inclusive. QLife (1800 184 527) offers peer support.", say: ["I use ___ pronouns."] },
          { type: "card", title: "Aboriginal and Torres Strait Islander", body: "Aboriginal Community Controlled Health Organisations offer culturally safe care, run by community. 13YARN (13 92 76) is 24/7 crisis support." },
          { type: "card", title: "Neurodivergent or disabled", body: "Ask for adjustments: more time, a quiet room, written information, step-by-step explanations, a support person.", say: ["Could you write that down for me?"] },
          { type: "card", title: "Young", body: "Your age is a reason to be thorough, not to stop looking. You can see a GP on your own, and ask to speak alone for part of an appointment.", say: ["Could I have some time with the doctor on my own?"] },
          { type: "card", title: "Faith and family", body: "You can ask for care that respects your beliefs, like a doctor of a particular gender, or modesty during an examination.", say: ["Is it possible to see a female doctor?"] },
        ]},
      ],
    },
    {
      id: "together", short: "From me to we", eyebrow: "Act · Influence", title: "From me to we",
      intro: "Every time a young person is dismissed, it affects them. When it happens to thousands, it tells us something about the system. Aletheia exists to connect the two: to help you get care today, and to turn what young people go through into evidence that changes what the next person faces.",
      blocks: [
        { type: "figure", svg: meToWe() },
        { type: "grid", cols: "g3", items: [
          { type: "card", tone: "dark", kicker: "The evidence", title: "13,000+", body: "responses to Victoria’s 2024 Inquiry into Women’s Pain, where one in three women said they’d felt dismissed or unheard." },
          { type: "card", tone: "dark", kicker: "The evidence", title: "6–8 years", body: "average delay to an endometriosis diagnosis in Australia, with symptom normalisation named as a key cause." },
          { type: "card", tone: "dark", kicker: "The response", title: "Youth voice", body: "Young people’s experiences, gathered safely and shared with decision-makers, are how that pattern starts to shift." },
        ]},
        { type: "grid", cols: "g2", items: [
          { type: "check", title: "Sharing your story safely", items: ["I’m sharing because I want to", "I know where it will go and who will see it", "I’ve chosen my name, first name only, or anonymous", "I’ve left out details that identify other people", "I can review or withdraw it before publishing", "I have someone to talk to afterwards"] },
          { type: "card", title: "Where your voice goes at Aletheia", body: "These are the structures we’ve built so young people’s experience reaches the people who make decisions:", items: [`<a href="${R.consultation}">Youth Consultation</a>: your input on real decisions`, `<a href="${R.roundtables}">Youth Roundtables</a>: young people and decision-makers in one room`, `<a href="${R.research}">Youth Research</a> and the <a href="${R.journal}">Youth Research Journal</a>: lived experience as evidence`, `<a href="${R.voices}">Aletheia Voices</a> and Aletheia Talks: sharing stories and writing`, `<a href="${R.council}">Youth Executive Council</a>: young people leading Aletheia`] },
        ]},
        { type: "card", tone: "tint", title: "You’re not just reading this. You can help write the next one.", body: `Every Voice Pack is shaped by young people. Join the resource development or translation teams, or tell us what should be in the next edition. <a href="${R.getInvolved}">See all the ways to get involved</a>.` },
      ],
    },
    {
      id: "your-story", short: "Your story, your voice", eyebrow: "Reflect", title: "Your story, your voice",
      intro: [
        "There are so many places where you’re expected to have answers. This isn’t one of them. Your experience doesn’t need medical language, or to sound “serious enough”. It only needs to be yours.",
        "Write here, think here, or leave it blank. The moment you start putting your experience into words, you’re no longer carrying it alone.",
      ],
      blocks: [
        { type: "grid", cols: "g2", items: [
          { type: "reflect", tag: "Page 1", title: "What have you been told about your body?", prompts: ["What have you been told is normal?", "What have you been told isn’t worth mentioning?", "What has your body been telling you, despite that?"] },
          { type: "reflect", tag: "Page 2", title: "What do you wish someone believed?", prompts: ["Something physical: a pain that never fully went away?", "Something emotional: a weight you carried quietly?", "Something you’re still trying to understand?"] },
          { type: "reflect", tag: "Page 3", title: "What does your body feel like today?", prompts: ["Is there tension, heaviness, lightness, discomfort anywhere?", "Is there something you’ve been ignoring?", "What would you tell a doctor about today?"] },
          { type: "reflect", tag: "Page 4", title: "What does advocating for yourself look like?", prompts: ["What feels manageable right now: one question? Writing things down?", "Who could back you up?", "What would you say if your voice shook?"] },
        ]},
        { type: "reflect", tag: "Page 5 · New in this edition", title: "What would you change for the next person?", intro: "Your experience can make it easier for someone else. What would you want a doctor, a school or a government to understand?", prompts: ["One thing I wish had been different…", "Who could change it…", "One small step I could take…"] },
      ],
    },
    {
      id: "help", short: "Help and support", eyebrow: "Support", title: "When to get help, and where",
      intro: "Most things in this pack are about everyday care. Some things can’t wait. Know the difference.",
      blocks: [
        { type: "levels",
          l1: { label: "Everyday", title: "Keep an eye on it", items: ["New symptoms that are mild", "Things you want to understand better", "Track it, and see a GP if it keeps up"] },
          l2: { label: "Book a GP", title: "Worth an appointment", items: ["Symptoms stopping school, work or plans", "Pain or bleeding getting worse", "Low mood or anxiety most days for two weeks or more", "Anything that worries you. That’s reason enough."] },
          l3: { label: "Urgent · 000", title: "Get help now", items: ["Sudden, severe pain", "Very heavy bleeding with dizziness or fainting", "Trouble breathing, chest pain", "Thoughts of suicide or harming yourself, or someone else is in danger"] },
        },
        { type: "dir", items: [...HELP, ["Beyond Blue", "1300 22 4636", "24/7 mental health support."], ["1800RESPECT", "1800 737 732", "24/7 support for sexual, domestic and family violence."], ["Butterfly Foundation", "1800 33 4673", "Support for eating disorders and body image."], ["Suicide Call Back Service", "1300 659 467", "24/7 counselling for anyone affected by suicide."]] },
      ],
    },
    {
      id: "aletheia", short: "About Aletheia", eyebrow: "The Aletheia Project", title: "What Aletheia is, and why we exist",
      intro: [
        "The Aletheia Project is a youth-led not-for-profit. It exists because of a gap many young people feel but can’t always name: the gap between having access to healthcare and actually knowing how to use it.",
        "Aletheia is Ancient Greek for truth. We’re not here to replace healthcare. We’re here to strengthen your position in it, and to make sure young people’s truth reaches the places where decisions get made.",
      ],
      blocks: [
        { type: "grid", cols: "g3", items: [
          { type: "card", kicker: "Health literacy", body: "Understanding your body, and the language for it." },
          { type: "card", kicker: "Self-advocacy", body: "Being able to speak, ask and hold your ground." },
          { type: "card", kicker: "Systems change", body: "Young people shaping the services and policies that affect them." },
        ]},
        { type: "html", html: `<div class="block"><div class="card dark"><p class="eyebrow" style="color:var(--gold)">Contact</p><h3 style="color:var(--cream);margin:.3rem 0 .6rem">Get in touch</h3><p><a href="${R.email}">contact@thealetheiaproject.org</a> · <a href="${R.home}">thealetheiaproject.org</a> · <a href="${R.instagram}">@aletheia.au</a></p><p style="margin-top:.8rem">Want printed copies for your school or organisation? Email us. Want to see how we got here? <a href="${R.archive}">Explore the Voice Pack Archive</a>.</p></div></div>` },
        { type: "pull", text: "Your body is yours. You’re allowed to question it, understand it, and speak about it. And when you do, you already begin to change it.", cite: "The Aletheia Project, 2026" },
      ],
    },
  ],
  prev: { href: R.ed04, label: "Archive Edition 04 · From Voice to Change" },
  nextEd: { href: R.archive, label: "The Voice Pack Archive" },
  sources: [S.aihwEndo, S.guidelineEndo, S.jhEndo, S.pmosLancet, S.jhPCOS, S.mjaPCOS, S.pcosGuideline, S.acogHMB, S.rchPeriods, S.charter, S.medicare14, S.fpnswConf, S.tis, S.hcc, S.vicInquiry, S.vicPain, S.betterAccess, S.headspace, S.healthdirect, S.navigator],
  helpCount: 8,
};
