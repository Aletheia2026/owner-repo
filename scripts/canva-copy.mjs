// Generates canva/April-2026-Voice-Pack-Canva-Copy.md from the current
// edition's content, laid out page by page in the April 2026 Canva file's
// order, so the Canva design can keep its look while its words are replaced.
import { writeFileSync, mkdirSync } from "node:fs";
import pk, { vocab, dismissal } from "../src/content/ed05-current.mjs";
import { HELP } from "../src/lib/components.mjs";
import { LOOP } from "../src/lib/graphics.mjs";

const strip = (s = "") => String(s).replace(/<[^>]+>/g, "").replace(/&amp;/g, "&");
const ch = (id) => pk.chapters.find((c) => c.id === id);
const intro = (id) => [].concat(ch(id).intro || []).map(strip).join("\n\n");
let n = 0;
const out = [];
const page = (title, body, note) => { n++; out.push(`## Page ${n} · ${title}${note ? `\n\n> Design note: ${note}` : ""}\n\n${body.trim()}\n`); };
const vocabPage = (v) => page(v.term, [
  v.pron ? `*${v.pron}*` : "",
  v.what ? `**What it is.** ${strip(v.what)}` : "",
  v.feels ? `**What it can feel like.** ${strip(v.feels)}` : "",
  v.why ? `**Why it gets missed.** ${strip(v.why)}` : "",
  v.check ? `**Worth checking when.** ${strip(v.check)}` : "",
  v.note ? `**${v.noteLabel || "Good to know"}.** ${strip(v.note)}` : "",
  v.say ? `**You can say:**\n${v.say.map((x) => `- “${x}”`).join("\n")}` : "",
  v.stages ? `*Loop: ${v.stages.join(" · ")}*` : "",
].filter(Boolean).join("\n\n"), "keep the April vocabulary page layout (echo-type heading, body text, ‘You can say’ bubbles). Add the loop chips as small tags at the bottom.");

out.push(`# The Aletheia Voice Pack · April 2026 edition (revised September 2026)
## Canva copy: page by page

This is the corrected and expanded text for the April 2026 Canva Voice Pack. The layout, the echoed (triple-stacked) headings and the graphics stay as they are; replace the words box by box. Pages marked **NEW** need a duplicate of the nearest similar page. Every fact has been checked; sources are on the last page.

**What changed, in short**
- Every definition rewritten for accuracy, with “what it can feel like”, “worth checking when” and urgent signs added.
- New pages: the Aletheia loop, “start where you are”, the symptom story, costs and access, rights in full, care that fits who you are, from me to we, a fifth reflection page, and a full help directory.
- PCOS is now called PMOS (renamed May 2026), and “hormonal imbalance” is explained as a phrase rather than a diagnosis.
- Every “Fighting medical dismissal” page now has three parts: what might be going on, what you can say, and the next move.
- Wrong or vague details fixed: headspace/Kids Helpline details and numbers, Medicare at 14 and 15, free interpreters, mature minor consent, and the complaints pathway.
`);

page("Cover", `**Heard. Understood. Me.**\n\nThe Aletheia Project’s guide to health, self-advocacy and medical dismissal for young people.\n\nTHE ALETHEIA PROJECT VOICE PACK • APRIL 2026 EDITION (REVISED SEPTEMBER 2026)\n\nYour voice is part of your health. Let’s go find it together!`, "unchanged cover design; only update the edition line.");
page("How this pack works (NEW)", `**One pack, seven things you can do**\n\n${intro("how")}\n\n${LOOP.map(([k, d], i) => `${i + 1}. **${k}**: ${d}`).join("\n")}\n\n**Start where you are**\n- Something feels off → Health 101\n- I have an appointment → Your symptom story\n- I wasn’t heard → Fighting medical dismissal\n- I want to change things → From me to we\n\n*Health education, not medical advice. In an emergency, call 000.*`, "NEW page. Place the seven words around a circle, echoing the red dot motif, with ‘you’ in the centre.");
page("Health 101: Vocabulary · Language is Power", intro("words"), "keep the April intro page design.");
for (const group of ["body", "mind", "longterm", "care"]) vocab[group].forEach(vocabPage);
page("Your symptom story (NEW)", `**Your symptom story**\n\n${strip(ch("story").intro)}\n\n| | Example |\n|---|---|\n| WHAT | Sharp, cramping pain |\n| WHERE | Low tummy, left side, into my back |\n| WHEN | First 2 days of every period, for 18 months |\n| HOW MUCH | Usually 6, worst 9. Missed 5 school days this term |\n| SO FAR | Ibuprofen helps a bit. Heat pack. Not enough |\n| I WANT | To find out why, and a plan that works |\n\nScore pain by what it stops you doing: 0 no pain · 2 notice it, carry on · 4 distracting, need a break · 6 hard to focus or move · 8 have to stop and lie down · 10 worst I can imagine. Give your usual number AND your worst.\n\nTrack bleeding, pain, mood, energy and missed days for two or three cycles.`, "NEW page. Build the six lines as a card with the labels in small caps boxes.");
page("Closing (Health 101)", `You do not need to know everything about medicine to be taken seriously.\n\nYou only need enough language to say:\n“This is what I am experiencing.”\n“This is what I need.”\n\nAnd that is enough to begin.`, "unchanged.");
page("Fighting Medical Dismissal · When you are not heard", intro("dismissal"), "keep the April intro page.");
for (const d of dismissal) page(strip(d.heard), `**What might be going on.** ${d.why}\n\n**You can say:**\n${d.you.map((y) => `- “${y}”`).join("\n")}\n\n**Next move.** ${d.next}`, "keep the April scenario page design. The heading is the thing you hear.");
page("Closing: Your voice in the room", `There is no single way to advocate for yourself. Some days, it may look like asking one question. Other days, it may look like holding your ground in a difficult conversation. Both matter.\n\nYou do not need perfect words. You do not need complete confidence. You only need the willingness to say:\n\n“This matters to me.”\n\nBeing taken seriously isn’t something you earn. It’s something you’re entitled to.`, "unchanged design.");
page("Navigating the Australian Health System · Understanding the system you’re in", intro("appointment"), "keep the April intro page.");
page("Before, during and after (revised)", `**Before**: write your symptom story; decide your top 1–3 concerns; book a long appointment if needed; choose a support person.\n\n**During**: lead with your main concern; use your symptom story; ask “What could this be?”; repeat back what you heard.\n\n**Wrapping up**: What’s the plan? What should I watch for? When do I come back? Can this be noted in my file?\n\n**After**: write down what was said; keep tracking; book the follow-up; not better? take the next step.`, "replaces ‘How to see a GP’ bullet page; keep its design.");
page("Where to go", `- **GP / youth GP**: first stop for most things; can refer you on.\n- **headspace**: ages 12–25, free or low-cost, no referral needed.\n- **Sexual health clinic**: confidential, often free, some don’t need a Medicare card.\n- **Community health**: usually no referral needed.\n- **Specialist**: usually via a GP referral (needed for a Medicare rebate).\n- **Psychologist**: a Mental Health Treatment Plan from your usual GP gives rebates for up to 10 sessions a year.\n- **Quick or urgent help**: pharmacist (no appointment); Urgent Care Clinic (walk in, not life-threatening); hospital ED or 000 (emergency).\n- **Not sure how urgent?** healthdirect: 1800 022 222, 24/7.`, "replaces the referral page; reuse its layout.");
page("Costs and access (NEW)", ch("appointment").blocks.find((b) => b.type === "table").rows.map(([q, a]) => `**${q}** ${a}`).join("\n\n"), "NEW page.");
page("Your rights in Australia", `The Australian Charter of Healthcare Rights applies to everyone, whatever their age:\n\n${ch("rights").blocks[0].rows.map(([r, m]) => `- **${r}**: ${m}`).join("\n")}\n\n**Consent.** ${strip(ch("rights").blocks[1].items[0].body)}\n\n**Confidentiality.** ${strip(ch("rights").blocks[1].items[1].body)}\n\n**If something went wrong:** raise it with the clinician or practice → put it in writing → contact your state’s free health complaints body (in Victoria, the Health Complaints Commissioner).`, "merges the April Consent and Confidentiality pages; keep their design.");
page("Mental health support", `If you need support with your mental health, you don’t have to wait until it’s bad.\n\n- **headspace** (12–25): free or low-cost support, no referral needed. headspace.org.au\n- **Your usual GP**: can make a Mental Health Treatment Plan (Medicare rebates for up to 10 psychology sessions a year).\n- **Kids Helpline** (5–25): 1800 55 1800, free and confidential, 24/7, phone or webchat.\n- **Lifeline**: 13 11 14, 24/7. **Beyond Blue**: 1300 22 4636.\n\nYou can say: “I think I need someone to talk to.” “I’d like support for how I’ve been feeling.”\n\nSeeking help is not a last resort. It is a valid first step.`, "fixes the cut-off Kids Helpline sentence in the April version.");
page("Sexual health & confidential care", `Sexual health clinics provide confidential, non-judgemental care for contraception, STI testing, pregnancy questions and general questions about your body. Many are free, and some can see you without a Medicare card.\n\nYou can say: “I’d like to ask some questions about my sexual health.” “I’d like to get tested.”\n\nYour health doesn’t become less important because it’s uncomfortable to talk about. You are allowed to ask. You are allowed to know.`, "unchanged design.");
page("Care that fits who you are (NEW)", ch("identity").blocks[0].items.map((c) => `**${c.title}.** ${strip(c.body)}${c.say ? ` You can say: “${c.say[0]}”` : ""}`).join("\n\n"), "NEW page, or split across two.");
page("From me to we (NEW)", `${strip(ch("together").intro)}\n\n**13,000+** responses to Victoria’s 2024 Inquiry into Women’s Pain, where one in three women said they’d felt dismissed or unheard.\n\n**6–8 years**: the average delay to an endometriosis diagnosis in Australia.\n\n**Sharing your story safely:** I’m sharing because I want to · I know where it will go · I’ve chosen my name, first name or anonymous · I’ve left out details that identify others · I can review or withdraw it · I have someone to talk to afterwards.\n\n**Where your voice goes at Aletheia:** Youth Consultation · Youth Roundtables · Youth Research and the Youth Research Journal · Aletheia Voices and Aletheia Talks · Youth Executive Council.`, "NEW page. Me → Us → Evidence → Change as four small icons.");
page("What Aletheia is (and why we exist)", ch("aletheia").intro.map(strip).join("\n\n") + "\n\nAletheia focuses on: **health literacy** (understanding your body and the language for it), **self-advocacy** (being able to speak, ask and hold your ground), and **systems change** (young people shaping the services and policies that affect them).", "unchanged design.");
page("How to get involved", `Aletheia is not just something you read. It’s something you can be part of.\n\nYou can: volunteer with our resource development or translation teams · apply to the Youth Executive Council · share your writing or story through Aletheia Talks · take part in youth consultations and roundtables · follow @aletheia.au and share what resonates.\n\nYou don’t need to be an expert. You only need to care. Every person who learns, asks and speaks becomes part of that change.\n\nthealetheiaproject.org/get-involved`, "unchanged design.");
page("Your Story, Your Voice · This is your space", ch("your-story").intro.map(strip).join("\n\n"), "keep the April intro page.");
ch("your-story").blocks[0].items.forEach((r) => page(r.title, r.prompts.map((q) => `- ${q}`).join("\n") + "\n\n*(lined writing space)*", "keep the April reflection page design; replace the long paragraph with these three prompts plus writing lines."));
const p5 = ch("your-story").blocks[1];
page(`${p5.title} (NEW)`, `${p5.intro}\n\n${p5.prompts.map((q) => `- ${q}`).join("\n")}\n\n*(lined writing space)*`, "NEW page; duplicate a reflection page.");
page("When to get help, and where (NEW)", `**Keep an eye on it:** new mild symptoms · things you want to understand better.\n\n**Book a GP:** symptoms stopping school, work or plans · pain or bleeding getting worse · low mood or anxiety most days for 2+ weeks · anything that worries you.\n\n**Urgent, call 000:** sudden severe pain · very heavy bleeding with dizziness or fainting · trouble breathing or chest pain · thoughts of suicide or self-harm, or someone in danger.\n\n${[...HELP, ["Beyond Blue", "1300 22 4636", ""], ["1800RESPECT", "1800 737 732", ""], ["Butterfly Foundation", "1800 33 4673", ""], ["Suicide Call Back Service", "1300 659 467", ""]].map(([a, b, c]) => `- **${a}** ${b}${c ? `: ${c}` : ""}`).join("\n")}`, "NEW page, before Contact.");
page("Closing · Contact", `contact@thealetheiaproject.org · thealetheiaproject.org · @aletheia.au\n\nYour body is yours. You’re allowed to question it, understand it, and speak about it. And when you do, you already begin to change it.\n\nThe Aletheia Project 2026\n\n*Health education, not medical advice. In an emergency, call 000. We acknowledge the Wurundjeri Woi-wurrung people of the Kulin Nation, where Aletheia was founded. Sovereignty was never ceded.*`, "the April closing line was scrambled in the export; this is the cleaned version.");
page("Sources (NEW, back page)", pk.sources.map(([t, u]) => `- ${t}${u ? `: ${u}` : ""}`).join("\n"), "small type on the inside back cover.");

mkdirSync(new URL("../canva/", import.meta.url), { recursive: true });
writeFileSync(new URL("../canva/April-2026-Voice-Pack-Canva-Copy.md", import.meta.url), out.join("\n---\n\n"));
console.log(`Wrote ${n} pages of Canva copy.`);
