import { R } from "../lib/routes.mjs";
import { cover, bodyMap, painScale, trackerGrid } from "../lib/graphics.mjs";
import { S } from "./sources.mjs";

export default {
  ed: "02",
  slug: "find-the-words",
  path: R.ed02,
  badge: "Archive Edition 02",
  eyebrow: "Voice Pack Archive",
  title: "Find the Words",
  seoTitle: "Find the Words: Voice Pack Archive Edition 02",
  description: "Archive Edition 02 of the Aletheia Voice Pack: how to notice what’s normal for you, describe symptoms clearly (what, where, when, how much), track patterns and prepare for a GP appointment.",
  question: "“How do I explain what I’m experiencing?”",
  lede: "Knowing how your body works is one thing. Explaining what’s happening in it, clearly enough that someone else understands, is another. This edition is about the words in between.",
  framework: ["Learn", "Notice", "Describe", "Ask"],
  tags: ["Symptom vocabulary", "Pain", "Tracking", "Mood words", "GP prep"],
  readTime: "About 30 minutes to read",
  audience: "For ages 12+",
  cover: cover("02"),
  pdf: "Aletheia-Voice-Pack-Archive-Edition-02-Find-the-Words.pdf",
  ogImage: "voice-pack-archive-02-og.png",
  annotation: "This edition marks the first big shift in how Aletheia thought about health education. Young people told us they understood their bodies better after the first packs, but still froze in the GP’s office, or said “I just feel off” and watched the conversation move on. We realised knowledge needed language. This is where Voice Packs started becoming more than information sheets.",
  chapters: [
    {
      id: "start", short: "Why words matter", eyebrow: "Before we begin", title: "“I just feel off.”",
      intro: [
        "You know something’s not right. But when someone asks what’s wrong, the words don’t come. You say “it hurts” or “I’m just tired”, and it sounds smaller than it feels.",
        "That isn’t because your experience is small. It’s because nobody taught you the words for it. Doctors work with information: where, when, how bad, how often. The clearer the information, the easier it is for them, and for you, to work out what’s going on.",
      ],
      blocks: [
        { type: "pull", text: "Your experience doesn’t need to be dramatic to be real. It needs to be described." },
        { type: "grid", cols: "g4", items: [
          { type: "card", kicker: "01 Learn", title: "Health words", body: "The plain meaning of words you’ll hear, and words worth knowing." },
          { type: "card", kicker: "02 Notice", title: "Your normal", body: "What’s usual for you, so you can spot a change." },
          { type: "card", kicker: "03 Describe", title: "The five questions", body: "What, where, when, how much, and what changes it." },
          { type: "card", kicker: "04 Ask", title: "At the GP", body: "Preparing, and the questions you’re allowed to ask." },
        ]},
        { type: "callout", icon: "↺", title: "New here?", body: `This edition builds on <a href="${R.ed01}">Edition 01: Know Your Body</a>, which covers anatomy, puberty and the menstrual cycle. You don’t need to read it first, but it helps.` },
      ],
    },
    {
      id: "learn", short: "Health words", eyebrow: "Learn", title: "Health words, without the jargon",
      intro: "Some words come up in almost every appointment. Knowing them means you can follow what’s being said, and use them yourself.",
      blocks: [
        { type: "vocab", cols: "g3", items: [
          { term: "Symptom", what: "Something you notice that isn’t usual for you: pain, tiredness, a change in bleeding, a feeling that won’t shift." },
          { term: "Acute", what: "Came on recently or suddenly. It doesn’t mean severe." },
          { term: "Chronic", what: "Has lasted a long time, usually three months or more, or keeps coming back. It doesn’t mean it’s serious or can’t be helped." },
          { term: "Intermittent", what: "Comes and goes, rather than being there all the time." },
          { term: "Referred pain", what: "Pain you feel in one place that comes from somewhere else. Period pain often spreads to the lower back and thighs." },
          { term: "Fatigue", what: "Exhaustion that doesn’t go away with rest. Different from being tired after a late night." },
          { term: "Dysmenorrhoea", pron: "dis-men-or-REE-a", what: "The medical word for period pain. Primary means there’s no other condition causing it; secondary means there is." },
          { term: "Heavy menstrual bleeding", what: "Bleeding that’s heavy enough to affect your day: changing a pad or tampon every one to two hours, flooding, or clots bigger than a 50-cent coin." },
          { term: "Irregular", what: "Cycles that change a lot in length from one to the next, or are under 21 or over 45 days." },
        ]},
        { type: "h3", text: "Words you might hear, and why it helps to know them" },
        { type: "p", text: "You don’t need to diagnose yourself. But knowing that some common conditions exist, and what they tend to look like, helps you recognise when something might be worth asking about." },
        { type: "vocab", cols: "g2", items: [
          { term: "Endometriosis", pron: "en-doh-mee-tree-OH-sis", what: "Tissue similar to the lining of the uterus grows outside it, causing inflammation and pain. About 1 in 7 people assigned female at birth in Australia are diagnosed by their late 40s.", feels: "Period pain that stops you doing things, pain that gets worse over time, pain with bowel movements or weeing during your period, pain between periods.", say: ["My period pain stops me going to school.", "It’s getting worse each year."] },
          { term: "Polycystic ovary syndrome (PCOS)", pron: "pol-ee-SIS-tik", what: "A common hormonal condition, affecting about 8–13% of women of reproductive age. Despite the name, it isn’t about cysts.", feels: "Irregular or missing periods, acne, extra hair on the face or body, or hair thinning on the head.", note: "Archive note: in 2026 this condition was renamed polyendocrine metabolic ovarian syndrome (PMOS). The current Voice Pack uses the new name.", noteLabel: "Updated", say: ["My periods are often months apart.", "I’ve had acne and irregular periods together for a while."] },
          { term: "Iron deficiency", what: "Not having enough iron, often because of heavy periods. It can lead to anaemia (low red blood cells).", feels: "Tiredness that doesn’t lift, feeling breathless or dizzy, pale skin, finding it hard to concentrate.", say: ["I’ve been exhausted and my periods are heavy. Could we check my iron?"] },
          { term: "Premenstrual syndrome (PMS)", what: "Physical and emotional changes in the days before a period: bloating, sore breasts, irritability, low mood. PMDD is a more severe form.", feels: "A predictable dip in mood or energy that lifts once your period starts.", say: ["The week before my period, my mood drops a lot, every month."] },
        ]},
      ],
    },
    {
      id: "notice", short: "Know your normal", eyebrow: "Notice", title: "Know your normal",
      intro: "Doctors often ask “Is this new?” or “Is this different for you?” To answer, you need a sense of your own baseline: what’s usual for your body.",
      blocks: [
        { type: "grid", cols: "g2", items: [
          { type: "card", title: "Your baseline includes", items: ["How long your cycle usually is, and how many days you bleed", "How heavy a normal day is for you", "Your usual energy, sleep and appetite", "How you usually feel emotionally across a month", "Any pain you get regularly, and how bad it usually is"] },
          { type: "card", tone: "tint", title: "Signs of a change worth noticing", items: ["Something new that wasn’t there before", "Something that’s getting worse over time", "Something that’s stopping you doing things you normally do", "Something that keeps coming back in a pattern", "Something that other people have started noticing too"] },
        ]},
        { type: "pull", text: "“Common” and “normal for you” aren’t the same thing. Lots of people get period pain. That doesn’t mean yours should stop you living your life." },
        { type: "reflect", title: "What’s your normal?", prompts: ["How long is your cycle usually, roughly?", "On your heaviest day, how often do you change a pad, tampon or cup?", "What does a ‘normal’ energy day feel like for you?", "Is there anything that’s changed in the last few months?"] },
      ],
    },
    {
      id: "describe", short: "Describe it", eyebrow: "Describe", title: "Describe it: the five questions",
      intro: "Almost any symptom becomes clearer when you answer five questions. You don’t have to answer them perfectly. Even two or three makes a big difference.",
      blocks: [
        { type: "table", caption: "The five questions for describing a symptom", head: ["Ask yourself", "What it means", "Example"], rows: [
          ["1. What does it feel like?", "The type of feeling", "“A dull ache that turns sharp”"],
          ["2. Where is it?", "The exact place, and whether it spreads", "“Low tummy, left side, spreads to my back”"],
          ["3. When is it?", "When it started, when it happens, how long it lasts", "“Days 1–2 of my period, for about a year”"],
          ["4. How much?", "How strong, and what it stops you doing", "“Usually a 6. I miss school on the first day”"],
          ["5. What changes it?", "What makes it better or worse", "“Heat helps a bit. Moving makes it worse”"],
        ]},
        { type: "h3", text: "1 · What does it feel like? Words to try" },
        { type: "grid", cols: "g4", items: [
          { type: "card", title: "Cramping", body: "Squeezing or tightening, coming in waves." },
          { type: "card", title: "Aching / dull", body: "A heavy, constant, low-level pain." },
          { type: "card", title: "Sharp / stabbing", body: "Sudden, intense, in one spot." },
          { type: "card", title: "Burning", body: "Hot or stinging, like a burn." },
          { type: "card", title: "Throbbing", body: "Pulsing, like a heartbeat." },
          { type: "card", title: "Pressure", body: "Heavy, pushing or dragging down." },
          { type: "card", title: "Shooting", body: "Travels quickly down a leg or into your back." },
          { type: "card", title: "Tender", body: "Sore when touched or pressed." },
        ]},
        { type: "figure", heading: "2 · Where is it? Use the map", svg: bodyMap(), caption: "Say the zone and the side: “zone 4 and my lower back” is much clearer than “my stomach”." },
        { type: "figure", heading: "4 · How much? Rate what it stops you doing", svg: painScale(), caption: "Numbers mean different things to different people. Pairing your number with what it stops you doing makes it clear." },
        { type: "h3", text: "Words for how you’re feeling inside" },
        { type: "p", text: "Mental and emotional symptoms need words too. “Stressed” and “sad” cover a lot. Try being more specific." },
        { type: "grid", cols: "g3", items: [
          { type: "card", title: "Instead of “stressed”", items: ["On edge, can’t switch off", "Overwhelmed by small things", "Heart racing, can’t catch my breath", "Worrying most of the day"] },
          { type: "card", title: "Instead of “sad”", items: ["Flat, like nothing matters", "Numb, or disconnected", "Crying more than usual", "Not enjoying things I used to"] },
          { type: "card", title: "Instead of “tired”", items: ["Exhausted even after sleeping", "Brain fog, can’t concentrate", "Everything takes more effort", "Sleeping much more, or much less"] },
        ]},
        { type: "say", head: "And to say how long", lines: ["Most days for the last two months.", "Every month, in the week before my period.", "It started after [something that happened] and hasn’t gone away."] },
        { type: "figure", heading: "Track it: patterns are information", svg: trackerGrid(), caption: "Two or three months of tracking often shows a pattern you can’t see day to day. A notes app, a period app or the Aletheia Self-Advocacy Journal all work." },
      ],
    },
    {
      id: "ask", short: "Prepare and ask", eyebrow: "Ask", title: "Prepare, then ask",
      intro: "A GP appointment is often 10 to 15 minutes. Five minutes of preparing beforehand means you use that time well.",
      blocks: [
        { type: "grid", cols: "g2", items: [
          { type: "check", title: "Before the appointment", items: ["Write your main concern in one sentence", "Answer the five questions for it", "Bring your tracker, or a few notes on your phone", "List any medicines or supplements you take", "Write down 2–3 questions", "Ask for a longer appointment if you have more than one thing"] },
          { type: "card", tone: "tint", title: "Questions you’re allowed to ask", items: ["What could be causing this?", "Is this something I should keep an eye on?", "Are there tests that could help?", "What can I do to feel better in the meantime?", "What should make me come back sooner?", "Can you write that down for me?", "Could you explain that another way?"] },
        ]},
        { type: "script", title: "Booking the appointment", lines: [["Receptionist", "What’s the appointment for?"], ["You", "I’ve been having painful periods and I’d like to talk to a GP about it."], ["Receptionist", "No problem. Do you need a standard or a long appointment?"], ["You", "Could I have a long one? I have a few things to go through."]], after: "You don’t have to give the receptionist details. “A private health concern” is enough." },
        { type: "script", title: "Opening the appointment", lines: [["Clinician", "What brings you in today?"], ["You", "I’ve had period pain for about a year that’s getting worse. It’s sharp and cramping, low on my left side and into my back. It’s usually a 6, and on the first day it’s an 8, so I miss school."], ["You", "Heat helps a bit, but not enough. I brought my tracker."]], after: "That’s thirty seconds, and it answers most of the questions the GP would otherwise need to ask." },
        { type: "scenario", tag: "Maya, one year later", title: "From “it hurts” to a clear description", body: [
          "Maya’s cramps have got worse. Last time she told a school nurse “my stomach hurts on my period”, she was given a heat pack and sent back to class.",
          "This time she tracks two cycles. She notes where the pain is (low, mostly left, into her back), how long it lasts (the first two days), how strong it is (usually a 6, an 8 on day one) and what it stops (she’s missed four school days this term).",
          "At the GP she reads from her notes. The GP asks more questions, suggests a plan to try for three months, and asks her to come back with her tracker if it doesn’t help.",
        ], fic: "Maya is fictional. Her story continues in Edition 03." },
      ],
    },
    {
      id: "your-words", short: "Your words", eyebrow: "Ask", title: "Your words",
      intro: "The best words are the ones you’ll actually say. Use this space to find yours.",
      blocks: [
        { type: "reflect", title: "Write it in your words", prompts: ["Something I’ve been noticing is…", "It feels like…", "It’s been happening since…", "It stops me from…", "What I’d like to find out is…"] },
        { type: "callout", icon: "✓", title: "If the words still won’t come", body: "It’s fine to hand your notes to the GP, or to say “I’ve written it down, can I read it to you?” Writing it first is not a weakness. It’s preparation." },
      ],
    },
  ],
  next: {
    title: "From finding words to the tools we use now",
    body: "Language became central to Aletheia. It shaped the Self-Advocacy Journal (with its symptom tracker) and our workshops, and it’s why we build resources in more than one language.",
    links: [
      [R.selfAdvocacy, "Self-Advocacy Journal & Health Navigator", "Track symptoms, prepare for appointments"],
      [R.workshops, "Youth Workshops", "“The Words for What You Feel” and more"],
      [R.multilingual, "Multilingual Resources", "Health words in more languages"],
      [R.ed03, "Next: Archive Edition 03", "Clear words, and still not being heard"],
    ],
  },
  prev: { href: R.ed01, label: "Edition 01 · Know Your Body" },
  nextEd: { href: R.ed03, label: "Edition 03 · Use Your Voice" },
  sources: [S.aihwEndo, S.jhEndo, S.mjaPCOS, S.jhPCOS, S.pmosLancet, S.acogHMB, S.rchPeriods, S.headspace],
  helpCount: 4,
};
