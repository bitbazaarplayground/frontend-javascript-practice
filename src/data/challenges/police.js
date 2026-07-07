const ratingScale = [
  {
    id: "efficient",
    label: "Efficient",
    helper:
      "The response deals with the situation well and follows police values, safety, fairness, and procedure.",
  },
  {
    id: "fairly-efficient",
    label: "Fairly Efficient",
    helper:
      "The response is partly useful, but it misses a stronger action, explanation, or escalation step.",
  },
  {
    id: "inefficient",
    label: "Inefficient",
    helper:
      "The response does not resolve the key issue or misses an important policing responsibility.",
  },
  {
    id: "counterproductive",
    label: "Counterproductive",
    helper:
      "The response is likely to make the situation worse, damage trust, or breach fair/proportionate conduct.",
  },
];

const option = (id, text, rating, explanation) => ({
  id,
  text,
  rating,
  explanation,
});

const question = ({ id, competencyIds, scenario, options, debrief }) => ({
  id,
  competencyIds,
  scenario,
  options,
  bestOptionId:
    options.find((item) => item.rating === "efficient")?.id || options[0].id,
  worstOptionId:
    options.find((item) => item.rating === "counterproductive")?.id ||
    options[options.length - 1].id,
  debrief,
});

const pdfPracticeQuestions = [
  question({
    id: "sjt-01",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "You are policing a local shopping centre. A man runs past you at speed, knocks into you, falls over, and drops a bag. A t-shirt falls out and it still has a magnetic store tag attached. He says he did not see you and must dash.",
    options: [
      option(
        "a",
        "Help the man up, apologise for knocking him over, put the t-shirt back into his bag, and wish him a good day.",
        "inefficient",
        "This ignores the obvious concern and lets the man leave without checking what happened."
      ),
      option(
        "b",
        "Help the man up, examine the t-shirt, arrest him, then search for a receipt and question him about where he got it.",
        "fairly-efficient",
        "This tries to deal with the issue, but it jumps too quickly to arrest before you have established the facts."
      ),
      option(
        "c",
        "Ask the man to come with you to the security office so you can investigate further, and explain that this is a precautionary step.",
        "efficient",
        "This is calm, proportionate, and investigative. It addresses the suspicion without assuming guilt."
      ),
      option(
        "d",
        "Pin the man to the floor and arrest him.",
        "counterproductive",
        "This is an aggressive overreaction when there may be an innocent explanation."
      ),
    ],
    debrief:
      "The strongest response investigates the suspicious circumstances without jumping straight to force or arrest.",
  }),
  question({
    id: "sjt-02",
    competencyIds: ["respect-empathy"],
    scenario:
      "During lunch at police HQ, a colleague sits with you and tells you he is homosexual. He says you are the first person he has told and asks you to keep it secret because he is worried about how others may treat him.",
    options: [
      option(
        "a",
        "Tell him you respect him regardless of his sexual orientation and that his confidence is safe with you.",
        "efficient",
        "This shows respect, confidentiality, and support at a moment when he has trusted you."
      ),
      option(
        "b",
        "Tell him there is no reason to be ashamed and encourage him to tell other people at the station.",
        "inefficient",
        "It may sound supportive, but it pressures him to disclose personal information before he is ready."
      ),
      option(
        "c",
        "Tell him there is no place for people like him in the police service and that he should hand in his badge.",
        "counterproductive",
        "This is discriminatory, unacceptable, and completely against police values."
      ),
      option(
        "d",
        "Tell him his secret is safe with you, then change the topic of conversation.",
        "fairly-efficient",
        "This protects confidentiality, but it gives less reassurance and support than the strongest response."
      ),
    ],
    debrief:
      "Respect and confidentiality matter. The best response supports the colleague without making the disclosure about workplace gossip.",
  }),
  question({
    id: "sjt-03",
    competencyIds: ["taking-ownership", "public-service"],
    scenario:
      "You are the senior officer at a local police HQ. A staff member tells you she accidentally shredded key case reports for a murder investigation while sorting paperwork.",
    options: [
      option(
        "a",
        "Say you will have to proceed without the documents for now and hope they are not too important.",
        "inefficient",
        "This ignores a serious problem and risks harming the investigation."
      ),
      option(
        "b",
        "Tell her she has derailed the investigation and that she is sacked.",
        "counterproductive",
        "This is rash, disproportionate, and assumes authority you may not have."
      ),
      option(
        "c",
        "Tell her not to panic, contact the senior administrator for copies, and explain that you will discuss the mistake seriously later.",
        "efficient",
        "This solves the immediate problem, keeps the person calm, and still recognises that the mistake needs follow-up."
      ),
      option(
        "d",
        "Ask her to explain how it happened and make clear that it is a very serious incident.",
        "fairly-efficient",
        "This treats the issue seriously, but it does not yet offer a practical recovery plan."
      ),
    ],
    debrief:
      "Strong ownership means stabilising the situation first, then dealing properly with accountability.",
  }),
  question({
    id: "sjt-04",
    competencyIds: ["taking-ownership", "courage"],
    scenario:
      "You are patrolling the top floor of a shopping centre with another officer. As you pass a clothing shop, your colleague gets excited, goes inside, and starts trying on denim jackets while on duty.",
    options: [
      option(
        "a",
        "Tell your colleague they are acting unprofessionally and need to get back to work.",
        "efficient",
        "This addresses the behaviour directly and keeps the focus on duty."
      ),
      option(
        "b",
        "Leave your colleague to it because it is not your problem if they want to mess around.",
        "inefficient",
        "This ignores unprofessional conduct that reflects on both officers."
      ),
      option(
        "c",
        "Tell your colleague you will report them to the head of station.",
        "fairly-efficient",
        "This recognises the issue, but immediate escalation is probably unnecessary before a direct warning."
      ),
      option(
        "d",
        "Laugh because they are only having a bit of fun.",
        "counterproductive",
        "This encourages unprofessional behaviour while on duty."
      ),
    ],
    debrief:
      "Challenge poor standards early and proportionately. A direct professional correction is enough here.",
  }),
  question({
    id: "sjt-05",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "You are on duty alone in a residential area while waiting for a new partner. You see a man on a ladder climbing through an upstairs window of a house. There are no cars on the driveway.",
    options: [
      option(
        "a",
        "Ignore it because he has probably just forgotten his keys.",
        "inefficient",
        "This fails to act on a potentially serious situation."
      ),
      option(
        "b",
        "Immediately call the station for backup because you may need help apprehending a criminal.",
        "fairly-efficient",
        "This considers safety, but it assumes criminality before checking what is happening."
      ),
      option(
        "c",
        "Wait for the man to exit the property, then speak to him and establish what is happening.",
        "efficient",
        "This is calm and proportionate. It lets you investigate without rushing into the property."
      ),
      option(
        "d",
        "Immediately try to enter the property yourself because you need to stop him getting away.",
        "counterproductive",
        "This is risky, may damage property, and may be unnecessary if there is an innocent explanation."
      ),
    ],
    debrief:
      "The best response balances public protection with proportionate fact-finding.",
  }),
  question({
    id: "sjt-06",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "A local park has been declared a crime scene overnight. You are guarding the cordon when a man says he left his bag on a bench inside and asks to go in for two minutes to collect it.",
    options: [
      option(
        "a",
        "Tell him you will ask your senior officer and ask him to wait.",
        "inefficient",
        "You already know the public cannot enter the crime scene, so this wastes time and creates false hope."
      ),
      option(
        "b",
        "Let him go in and tell him to say you gave permission.",
        "counterproductive",
        "This breaks the crime scene cordon and risks contaminating evidence."
      ),
      option(
        "c",
        "Politely explain that it is a crime scene and nobody can enter.",
        "efficient",
        "This is clear, lawful, and protects the integrity of the scene."
      ),
      option(
        "d",
        "Explain that his bag may now be evidence and that you cannot retrieve it for him.",
        "fairly-efficient",
        "This gives a useful reason, but it is less complete than clearly explaining that the public cannot enter the scene."
      ),
    ],
    debrief:
      "A crime scene must be protected. Be polite, but do not relax the cordon.",
  }),
  question({
    id: "sjt-07",
    competencyIds: ["taking-ownership"],
    scenario:
      "You are working through a large amount of paperwork when your senior officer asks you to complete an urgent form for a case and return it within the next hour.",
    options: [
      option(
        "a",
        "Say you will do it if they say please.",
        "counterproductive",
        "This is rude and disrespectful to a legitimate work request."
      ),
      option(
        "b",
        "Say you will do your best, explain that you also have other paperwork, and ask whether this form should be prioritised.",
        "efficient",
        "This is realistic, respectful, and clarifies priorities so the most important work is handled first."
      ),
      option(
        "c",
        "Say there is no chance and that they will have to wait until tomorrow.",
        "inefficient",
        "This refuses the task without effort, explanation, or problem-solving."
      ),
      option(
        "d",
        "Say you will give it immediate priority.",
        "fairly-efficient",
        "This is cooperative, but it does not account for the other work already assigned to you."
      ),
    ],
    debrief:
      "Good judgement means taking responsibility while being honest about workload and priorities.",
  }),
  question({
    id: "sjt-08",
    competencyIds: ["public-service", "courage"],
    scenario:
      "You and another officer are on evening patrol near a pub. A bleeding man staggers outside, another man follows and punches him to the ground, and they begin scuffling. Your colleague suggests calling backup and not getting involved.",
    options: [
      option(
        "a",
        "Tell your colleague it is your duty to protect the public and immediately intervene.",
        "efficient",
        "This recognises the duty to protect people and prevents the fight escalating."
      ),
      option(
        "b",
        "Allow your colleague to call for backup while you try to intervene yourself.",
        "fairly-efficient",
        "This does involve action, but two officers should normally be able to intervene together unless the situation escalates."
      ),
      option(
        "c",
        "Agree with your colleague because there is no point putting yourselves in danger.",
        "counterproductive",
        "This abandons the duty to protect the public when immediate action is needed."
      ),
      option(
        "d",
        "Encourage your colleague to intervene while you call for backup.",
        "inefficient",
        "This shifts the immediate risk to your colleague when you should be prepared to act too."
      ),
    ],
    debrief:
      "Officer safety matters, but refusing to act at all in an active assault is poor judgement.",
  }),
  question({
    id: "sjt-09",
    competencyIds: ["courage", "taking-ownership"],
    scenario:
      "You have noticed that your current partner keeps clocking out from shifts early. Today he says he is leaving at 16:30, although the shift does not finish until 17:00.",
    options: [
      option(
        "a",
        "Say goodbye and let him leave.",
        "inefficient",
        "This allows the pattern to continue and does nothing to resolve the issue."
      ),
      option(
        "b",
        "Point out that he has finished early a few times recently and that the shift does not end until 17:00.",
        "efficient",
        "This challenges the behaviour directly and gives him a chance to correct it."
      ),
      option(
        "c",
        "Tell him you are going to report this to police HQ.",
        "fairly-efficient",
        "This tries to address the issue, but speaking to him first may resolve it without immediate escalation."
      ),
      option(
        "d",
        "Tell him the shift does not finish for another half hour and say, 'Get back here, or else.'",
        "counterproductive",
        "The threat is unprofessional and likely to escalate the situation."
      ),
    ],
    debrief:
      "The best response challenges the pattern clearly without using threats or rushing straight to escalation.",
  }),
  question({
    id: "sjt-10",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "During your lunch break in a newsagent, you see a young man leaving with a bag of sweets under his arm. He does not appear to have gone to the till, but the alarm has not sounded.",
    options: [
      option(
        "a",
        "Approach the shopkeeper and explain that you believe someone may just have stolen from the store.",
        "efficient",
        "The shopkeeper can confirm whether the item was paid for before you take further action."
      ),
      option(
        "b",
        "Ignore it because the man has probably paid.",
        "counterproductive",
        "This ignores a possible theft and fails to check the facts."
      ),
      option(
        "c",
        "Follow the man out of the shop and question him.",
        "fairly-efficient",
        "This takes action, but it is better to confirm with the shopkeeper before assuming the worst."
      ),
      option(
        "d",
        "Ask the shopkeeper if you can inspect the shop CCTV footage.",
        "inefficient",
        "There is no need to go straight to CCTV before checking whether a theft actually occurred."
      ),
    ],
    debrief:
      "The strongest response checks the facts quickly with the person best placed to confirm them.",
  }),
  question({
    id: "sjt-11",
    competencyIds: ["respect-empathy", "courage", "public-service"],
    scenario:
      "A distressed woman approaches you and your partner saying her house has been broken into and many possessions, including her wedding ring, have been stolen. She then makes a discriminatory comment blaming foreigners.",
    options: [
      option(
        "a",
        "Ask her to calm down and say there is not really much you can do.",
        "inefficient",
        "This fails to reassure her and damages confidence that the police will deal with the burglary."
      ),
      option(
        "b",
        "Ask her to calm down, reassure her that the incident will be investigated, and ask her to retract the discriminatory comment.",
        "efficient",
        "This combines victim care with a clear challenge to discriminatory language."
      ),
      option(
        "c",
        "Thank her for bringing it to your attention and say you will conduct a full investigation.",
        "fairly-efficient",
        "This reassures her about the burglary, but it does not address the discriminatory comment."
      ),
      option(
        "d",
        "Tell her the comment is discriminatory and therefore you cannot help her.",
        "counterproductive",
        "This refuses service to a victim and will likely make the situation worse."
      ),
    ],
    debrief:
      "Good policing can support a victim and challenge discrimination at the same time.",
  }),
  question({
    id: "sjt-12",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "After finishing your shift, you are walking back to your police car when a young woman blows her nose and throws the tissue on the floor without picking it up.",
    options: [
      option(
        "a",
        "Ignore it because you are off duty now.",
        "inefficient",
        "This ignores a visible breach and avoids responsibility."
      ),
      option(
        "b",
        "Call after her, challenge the behaviour, and warn that littering can lead to a penalty fine.",
        "efficient",
        "This deals with the issue firmly and proportionately."
      ),
      option(
        "c",
        "Pick up the tissue yourself and put it in a bin.",
        "fairly-efficient",
        "This removes the litter, but it does not challenge the behaviour."
      ),
      option(
        "d",
        "Tell her you have no choice but to arrest her.",
        "counterproductive",
        "This is a clear overreaction and not proportionate to the incident."
      ),
    ],
    debrief:
      "The best answer is proportionate: deal with the behaviour without escalating beyond what is justified.",
  }),
  question({
    id: "sjt-13",
    competencyIds: ["taking-ownership", "respect-empathy"],
    scenario:
      "You arrive at your desk and find that paperwork for a case is missing. You do not know where it has gone, but you know a colleague has held a grudge against you since you started.",
    options: [
      option(
        "a",
        "Confront the colleague and demand that they tell you where they have hidden your paperwork.",
        "counterproductive",
        "This makes an accusation without evidence and may cause unnecessary conflict."
      ),
      option(
        "b",
        "Stay calm and keep searching around your desk.",
        "fairly-efficient",
        "This avoids jumping to conclusions, but it may waste time if the paperwork has been moved elsewhere."
      ),
      option(
        "c",
        "Speak to your superior and accuse the colleague of hiding your work.",
        "inefficient",
        "This is less disruptive than a confrontation, but it still makes an unsupported accusation."
      ),
      option(
        "d",
        "Politely ask colleagues, including the person you suspect, whether they have seen the paperwork. If that does not work, speak to your superior.",
        "efficient",
        "This checks the facts, avoids unfair accusations, and escalates only if needed."
      ),
    ],
    debrief:
      "Do not let suspicion become accusation. Start by gathering information calmly.",
  }),
  question({
    id: "sjt-14",
    competencyIds: ["respect-empathy", "courage"],
    scenario:
      "You and another officer come across a group of young people wearing hooded jumpers. They are not causing trouble. Your colleague tells them to move on, calls them thugs, and threatens arrest when they hesitate.",
    options: [
      option(
        "a",
        "Proceed to arrest the young people.",
        "counterproductive",
        "They have not done anything to justify arrest, and this supports your colleague's prejudice."
      ),
      option(
        "b",
        "Pull your colleague aside and tell her she is behaving inappropriately.",
        "fairly-efficient",
        "This stops the immediate behaviour, but it is less clear than explaining why the treatment is unfair."
      ),
      option(
        "c",
        "Say nothing and turn a blind eye to your colleague.",
        "inefficient",
        "This allows unfair treatment to continue and implies the behaviour is acceptable."
      ),
      option(
        "d",
        "Tell your colleague there is no reason to arrest them and that she is unfairly discriminating because of their age and clothing.",
        "efficient",
        "This challenges the behaviour clearly and explains why it is wrong."
      ),
    ],
    debrief:
      "Courage includes challenging unfair treatment by colleagues, especially when members of the public are affected.",
  }),
  question({
    id: "sjt-15",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "You are the desk sergeant at a local station. A man approaches and says he has discovered a dead body in his flat, does not know the victim, and insists he did not do it.",
    options: [
      option(
        "a",
        "Ask him to take a seat and tell him you will alert the chief investigator, who will speak to him immediately.",
        "efficient",
        "This treats the report as urgent and brings in the right person straight away."
      ),
      option(
        "b",
        "Thank him for bringing it to your attention and ask whether he knows the victim's name.",
        "inefficient",
        "He has already said he does not know the victim, so this misses important next steps."
      ),
      option(
        "c",
        "Say that it is awful and ask how the victim died.",
        "counterproductive",
        "This is unprofessional and does not manage the seriousness of the incident."
      ),
      option(
        "d",
        "Tell him you will need to ask important questions and that he may be detained, then check he understands.",
        "fairly-efficient",
        "This recognises the seriousness and possible procedure, but the immediate priority is to alert the right investigator."
      ),
    ],
    debrief:
      "The best response treats a possible murder report with urgency and hands it to the right investigative lead.",
  }),
];

const pdfPracticeQuestionsTwo = [
  question({
    id: "sjt-16",
    competencyIds: ["taking-ownership", "courage"],
    scenario:
      "Your shift is about to end and you and your partner are heading back to the station in traffic. Your partner suggests turning on the sirens, passing a red light, signing out, and getting home quickly.",
    options: [
      option(
        "a",
        "Activate the police sirens so you can pass through the traffic.",
        "counterproductive",
        "This misuses police equipment for personal convenience."
      ),
      option(
        "b",
        "Remind your partner that using sirens like this is inappropriate and that they are reserved for real emergencies.",
        "efficient",
        "This stops the misuse and explains the standard clearly."
      ),
      option(
        "c",
        "Refuse to turn on the sirens yourself, but allow your partner to do it.",
        "inefficient",
        "You still allow misconduct while you are both responsible for conduct on duty."
      ),
      option(
        "d",
        "Firmly say no, then report your partner's behaviour to a superior.",
        "fairly-efficient",
        "This stops the behaviour, but immediate reporting may be more than is needed if the direct correction works."
      ),
    ],
    debrief:
      "Police powers and equipment must never be used for convenience. Challenge the suggestion clearly and proportionately.",
  }),
  question({
    id: "sjt-17",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "You are due to patrol with your partner, but he arrives heavily intoxicated, slurring his words and unsteady on his feet. You are the first person to see him.",
    options: [
      option(
        "a",
        "Tell him he needs to go home and sober up.",
        "fairly-efficient",
        "This prevents him working, but it does not escalate a serious fitness-for-duty issue properly."
      ),
      option(
        "b",
        "Take him straight to the head of station because the behaviour is unacceptable.",
        "efficient",
        "This protects the public and ensures the matter is handled by the right authority."
      ),
      option(
        "c",
        "Take him out on shift but keep a close eye on him.",
        "counterproductive",
        "He is unfit for duty and could put the public, colleagues, and himself at risk."
      ),
      option(
        "d",
        "Drive him home, then continue the shift by yourself.",
        "inefficient",
        "This avoids proper reporting and creates a further safety issue by leaving you alone on shift."
      ),
    ],
    debrief:
      "Fitness for duty is a public-safety issue. It needs immediate reporting, not informal handling.",
  }),
  question({
    id: "sjt-18",
    competencyIds: ["respect-empathy", "courage"],
    scenario:
      "You are on neighbourhood patrol when a very angry woman uses vulgar language and accuses the police of covering things up after her burglary was not solved.",
    options: [
      option(
        "a",
        "Tell her the comments are unacceptable and ask her to go away unless she has a real complaint.",
        "fairly-efficient",
        "This challenges the behaviour, but dismisses her too abruptly."
      ),
      option(
        "b",
        "Ignore her because she will go away eventually.",
        "inefficient",
        "This fails to address public abuse or the underlying concern."
      ),
      option(
        "c",
        "Ask her to retract the comments, warn that the language is unacceptable, and explain she may be detained if she continues.",
        "efficient",
        "This is clear, firm, and sets a boundary around unacceptable behaviour."
      ),
      option(
        "d",
        "Apologise for the trouble police have caused and promise to do better next time.",
        "counterproductive",
        "This accepts unfounded accusations and risks undermining confidence."
      ),
    ],
    debrief:
      "The PDF answer key treats the firm boundary-setting response as strongest here: challenge abuse without losing professionalism.",
  }),
  question({
    id: "sjt-19",
    competencyIds: ["respect-empathy", "courage"],
    scenario:
      "In the canteen after a difficult morning, your colleague makes a homophobic remark about someone who got in your way during a chase.",
    options: [
      option(
        "a",
        "Laugh along because it was just a joke.",
        "counterproductive",
        "This normalises discriminatory behaviour."
      ),
      option(
        "b",
        "Tell your colleague the comment is unacceptable and that you will take the matter to the head of station.",
        "efficient",
        "This takes discrimination seriously and shows it will not be tolerated."
      ),
      option(
        "c",
        "Reproach your colleague and remind him that officers should be more respectful.",
        "fairly-efficient",
        "This challenges the comment, but does not escalate it as clearly as the strongest response."
      ),
      option(
        "d",
        "Ask him to think carefully about what he said, then change the topic.",
        "inefficient",
        "This hints at the issue but does not properly challenge the behaviour."
      ),
    ],
    debrief:
      "Discriminatory comments need an active response, especially inside the organisation.",
  }),
  question({
    id: "sjt-20",
    competencyIds: ["taking-ownership", "respect-empathy"],
    scenario:
      "You have been training Matthew, a new staff member, and believe he has strong potential. Your senior officer says Matthew is holding you back and does not have what it takes.",
    options: [
      option(
        "a",
        "Say Matthew has potential, but agree to him working with someone else.",
        "fairly-efficient",
        "This corrects the judgement but compromises quickly."
      ),
      option(
        "b",
        "Agree with your senior officer because it is her decision.",
        "inefficient",
        "This ignores your own evidence-based judgement."
      ),
      option(
        "c",
        "Say you would like to continue working with Matthew because you feel he has strong potential.",
        "efficient",
        "This gives your honest professional judgement and advocates for the trainee."
      ),
      option(
        "d",
        "Ask the senior officer to retract the comments and say she is being unfair and unprofessional.",
        "counterproductive",
        "This overreacts and makes the disagreement personal."
      ),
    ],
    debrief:
      "Good judgement means speaking up for fair assessment without insulting the decision-maker.",
  }),
  question({
    id: "sjt-21",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "You are on patrol with a trainee officer and see three school-age youths drinking alcohol in an alcohol-controlled area during the school day.",
    options: [
      option(
        "a",
        "Ask the youths why they are not in school.",
        "inefficient",
        "This misses the alcohol issue and whether they are legally old enough to drink."
      ),
      option(
        "b",
        "Ignore the youths because it is none of your business.",
        "counterproductive",
        "This ignores a clear public-safety and safeguarding issue."
      ),
      option(
        "c",
        "Fine them for drinking in the area, then investigate why they are not in school.",
        "fairly-efficient",
        "This acts, but it misses the first step of checking age and the full circumstances."
      ),
      option(
        "d",
        "Establish their ages, issue the relevant penalty for drinking, then ask why they are not in school.",
        "efficient",
        "This follows the relevant lines of enquiry in a sensible order."
      ),
    ],
    debrief:
      "Look for all relevant issues: age, alcohol, location rules, and school attendance.",
  }),
  question({
    id: "sjt-22",
    competencyIds: ["respect-empathy", "courage"],
    scenario:
      "Two religious colleagues pray in a corner of the canteen. Another colleague loudly tells them to stop because it is a canteen.",
    options: [
      option(
        "a",
        "Confront the colleague and ask him to leave the canteen.",
        "inefficient",
        "This reacts to the comment but does not explain why it is wrong or support those affected."
      ),
      option(
        "b",
        "Agree that the canteen is for eating, not praying.",
        "counterproductive",
        "This repeats the discriminatory behaviour."
      ),
      option(
        "c",
        "Tell the religious colleagues they are welcome to pray and reproach your colleague for his comments.",
        "efficient",
        "This supports inclusion and challenges discriminatory behaviour clearly."
      ),
      option(
        "d",
        "Ask the colleague to talk privately and say the comments are unfair.",
        "fairly-efficient",
        "This challenges the issue, but it does not reassure the affected colleagues as directly."
      ),
    ],
    debrief:
      "The strongest response protects the affected colleagues and challenges the inappropriate conduct.",
  }),
  question({
    id: "sjt-23",
    competencyIds: ["taking-ownership"],
    scenario:
      "A training candidate is due to start a shift with you at 9am. At 9:05 you find him asleep in his car outside the station.",
    options: [
      option(
        "a",
        "Bang on the window and tell him he needs to start the shift.",
        "inefficient",
        "This wakes him but does not understand or report the issue."
      ),
      option(
        "b",
        "Go straight to your senior officer and report the candidate.",
        "fairly-efficient",
        "This recognises seriousness, but speaking to him first helps establish context."
      ),
      option(
        "c",
        "Wake him, have a serious conversation, and tell him you will need to report it to your senior officer.",
        "efficient",
        "This balances fact-finding, accountability, and proper reporting."
      ),
      option(
        "d",
        "Leave him sleeping because you can handle the shift on your own.",
        "counterproductive",
        "This ignores the issue and leaves you working without the expected partner."
      ),
    ],
    debrief:
      "A training issue should be addressed directly and reported appropriately.",
  }),
  question({
    id: "sjt-24",
    competencyIds: ["respect-empathy", "public-service"],
    scenario:
      "You are on the desk at police HQ when a distressed woman enters and says she speaks little English and needs help.",
    options: [
      option(
        "a",
        "Tell her you cannot help if she cannot explain herself properly.",
        "counterproductive",
        "This is unhelpful and likely to make her more distressed."
      ),
      option(
        "b",
        "Ask her to take a seat while you contact someone who can assist.",
        "fairly-efficient",
        "This helps, but you should first make a reasonable attempt to understand the issue."
      ),
      option(
        "c",
        "Ask her to speak louder.",
        "inefficient",
        "The problem is a language barrier, not volume."
      ),
      option(
        "d",
        "Calm her, speak slowly and clearly, and try to establish clues from her language.",
        "efficient",
        "This shows patience and makes an active effort to understand her needs."
      ),
    ],
    debrief:
      "Respect and empathy include adapting communication before passing someone elsewhere.",
  }),
  question({
    id: "sjt-25",
    competencyIds: ["public-service"],
    scenario:
      "At a local festival you see a young man slumped against a wall. He appears intoxicated and is drooling from the mouth.",
    options: [
      option(
        "a",
        "Approach him, try to find his name, and ask around for friends nearby.",
        "inefficient",
        "This delays the immediate need for medical assistance."
      ),
      option(
        "b",
        "Radio for the nearest ambulance and stay with him until it arrives.",
        "efficient",
        "This treats the situation as a welfare and medical concern."
      ),
      option(
        "c",
        "Pick him up and escort him to the nearest ambulance.",
        "fairly-efficient",
        "This seeks medical help, but moving him may risk further harm."
      ),
      option(
        "d",
        "Ask if he can stand and arrest him if he cannot.",
        "counterproductive",
        "This treats illness as disorder and ignores his welfare."
      ),
    ],
    debrief:
      "When someone may be medically unwell, welfare comes before enforcement assumptions.",
  }),
  question({
    id: "sjt-26",
    competencyIds: ["taking-ownership", "public-service"],
    scenario:
      "At the end of your shift, while you are rushing to a birthday party, a trainee asks you to check a case report before he submits it.",
    options: [
      option(
        "a",
        "Ask him to find someone else because you are finished for the day.",
        "counterproductive",
        "This sets a poor example and does not support accurate police work."
      ),
      option(
        "b",
        "Sit down with him and go through the report to make sure the essential details are included.",
        "efficient",
        "This prioritises quality and helps the trainee learn."
      ),
      option(
        "c",
        "Tell him you trust his ability and that he should submit it.",
        "inefficient",
        "This avoids checking for errors that may matter."
      ),
      option(
        "d",
        "Quickly look over it, give a few tips, then leave.",
        "fairly-efficient",
        "This helps, but does less than the situation reasonably allows."
      ),
    ],
    debrief:
      "Taking ownership sometimes means spending a little extra time to protect quality and learning.",
  }),
  question({
    id: "sjt-27",
    competencyIds: ["courage", "taking-ownership"],
    scenario:
      "Two new trainees argue while patrolling with you. The disagreement escalates and they start squaring up to each other, with one threatening the other.",
    options: [
      option(
        "a",
        "Step between them immediately and try to calm the situation.",
        "efficient",
        "This stops escalation and keeps control of the scene."
      ),
      option(
        "b",
        "Tell them they are acting unprofessionally and that you will report it to the head of station.",
        "fairly-efficient",
        "This challenges the behaviour, but reporting may be unnecessary unless it continues or worsens."
      ),
      option(
        "c",
        "Let them fight it out because it is character building.",
        "counterproductive",
        "This allows violence and models terrible standards."
      ),
      option(
        "d",
        "Confront only the trainee who made the threat.",
        "inefficient",
        "Both are involved, so focusing on only one may worsen the conflict."
      ),
    ],
    debrief:
      "Deal with immediate risk first, then address professionalism once the situation is calm.",
  }),
  question({
    id: "sjt-28",
    competencyIds: ["respect-empathy", "public-service"],
    scenario:
      "At a football stadium, you and a colleague are conducting random bag checks. An entrant accuses your colleague of racism because his bag is being checked.",
    options: [
      option(
        "a",
        "Say checks are based on suspicious appearance and that your partner has every right to check his bag.",
        "counterproductive",
        "This is inaccurate and inflames the allegation."
      ),
      option(
        "b",
        "Warn that if he does not calm down, he will be detained.",
        "inefficient",
        "This overreacts and may escalate the situation."
      ),
      option(
        "c",
        "Explain it is a standard security check and ask him to calm down so the bag can be checked.",
        "fairly-efficient",
        "This explains the process, but does not directly address the race concern."
      ),
      option(
        "d",
        "Explain that checks are random and have nothing to do with the colour of his skin.",
        "efficient",
        "This gives the key reassurance and explains the procedure."
      ),
    ],
    debrief:
      "When trust is challenged, explain the process accurately and address the concern directly.",
  }),
  question({
    id: "sjt-29",
    competencyIds: ["respect-empathy", "public-service"],
    scenario:
      "In a shopping centre, a woman complains that a blind man has a dog on the top floor. Centre policy allows dogs assisting disabled people, but she wants him removed because she is scared of dogs.",
    options: [
      option(
        "a",
        "Apologise and contact security to deal with it.",
        "counterproductive",
        "This treats the lawful guide dog as the problem."
      ),
      option(
        "b",
        "Explain the policy exception for disabled people using assistance dogs and say you cannot remove him.",
        "efficient",
        "This explains the rule clearly and protects fair access."
      ),
      option(
        "c",
        "Say guide dogs are permitted and that she is being ignorant.",
        "inefficient",
        "This is rude and likely to make her defensive."
      ),
      option(
        "d",
        "Say guide dogs are essential in some circumstances and that you cannot help.",
        "fairly-efficient",
        "This is broadly right, but less clear about the centre policy."
      ),
    ],
    debrief:
      "A strong answer explains the rule fairly without insulting the complainant.",
  }),
  question({
    id: "sjt-30",
    competencyIds: ["public-service", "courage"],
    scenario:
      "You pass a park where school boys are playing football. A late tackle leads to a scuffle, and two boys are on the ground punching each other.",
    options: [
      option(
        "a",
        "Separate the boys, then ask them to leave the premises.",
        "fairly-efficient",
        "This stops the fight, but removing them may be more than is needed if the matter is resolved."
      ),
      option(
        "b",
        "Wait until the fight is finished, then warn both boys.",
        "inefficient",
        "You should intervene immediately rather than wait."
      ),
      option(
        "c",
        "Separate the boys and warn them that violence is not a way to settle disputes.",
        "efficient",
        "This stops the violence and addresses the behaviour proportionately."
      ),
      option(
        "d",
        "Arrest both boys because fighting in public is unacceptable.",
        "counterproductive",
        "This is an overreaction in the circumstances."
      ),
    ],
    debrief:
      "Intervene quickly, stop the risk, then respond proportionately.",
  }),
];

const pdfPracticeQuestionsThree = [
  question({
    id: "sjt-31",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "At the end of your shift, you see a car parked unusually in a no-parking area. A man is slumped in the driver's seat and you cannot tell whether he is asleep or seriously injured.",
    options: [
      option(
        "a",
        "Knock on the window and call emergency services if there is no response.",
        "efficient",
        "This takes immediate action while avoiding unnecessary damage."
      ),
      option(
        "b",
        "Leave him because he is probably sleeping.",
        "inefficient",
        "This ignores a possible medical emergency."
      ),
      option(
        "c",
        "Smash the car window because he could be in serious trouble.",
        "counterproductive",
        "This is an overreaction before you have tried less intrusive checks."
      ),
      option(
        "d",
        "Knock several times, then call police HQ to check who owns the car.",
        "fairly-efficient",
        "This is a sustained attempt to identify him, but emergency help is the stronger next step if he does not respond."
      ),
    ],
    debrief:
      "Treat unknown welfare risks seriously, but escalate in a proportionate order.",
  }),
  question({
    id: "sjt-32",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "Before a football match, a man in a red shirt attacks a man in a blue shirt, who is trying to get away and is not acting aggressively.",
    options: [
      option(
        "a",
        "Ask both men to go to the station to give statements.",
        "fairly-efficient",
        "This is professional, but it unfairly delays the person who appears to be the victim."
      ),
      option(
        "b",
        "Arrest the man in red, check whether the man in blue needs medical help, then allow him into the stadium.",
        "efficient",
        "This distinguishes aggressor from victim and checks welfare."
      ),
      option(
        "c",
        "Arrest both men because violent behaviour is unacceptable.",
        "inefficient",
        "The man in blue has not acted violently."
      ),
      option(
        "d",
        "Caution both men and allow them into the stadium separately.",
        "counterproductive",
        "This risks further violence and treats both men as equally responsible."
      ),
    ],
    debrief:
      "Use the facts in front of you. Do not punish a victim just because they were involved in the incident.",
  }),
  question({
    id: "sjt-33",
    competencyIds: ["taking-ownership"],
    scenario:
      "You are on your way to shift but get stuck in motorway traffic. A sign shows you will be delayed well beyond your start time.",
    options: [
      option(
        "a",
        "Call the station, explain the situation, and say you will arrive as soon as possible.",
        "efficient",
        "This gives proper notice and lets the station plan cover."
      ),
      option(
        "b",
        "Call a colleague and ask him to cover the start of your shift.",
        "inefficient",
        "You should inform the station rather than informally shifting responsibility."
      ),
      option(
        "c",
        "Get into work when you can because traffic is not your fault.",
        "counterproductive",
        "This leaves the station uninformed and unprepared."
      ),
      option(
        "d",
        "Call the head of station on his mobile.",
        "fairly-efficient",
        "This gives notice, but calling the station desk is usually the cleaner route."
      ),
    ],
    debrief:
      "Ownership means communicating early when your delay affects the team.",
  }),
  question({
    id: "sjt-34",
    competencyIds: ["courage", "public-service"],
    scenario:
      "While policing a shopping centre, a disgruntled young man confronts you and spits in your face after a short exchange.",
    options: [
      option(
        "a",
        "Punch him and pin him to the floor because you have a right to defend yourself.",
        "counterproductive",
        "This is aggressive and unnecessary in the scenario."
      ),
      option(
        "b",
        "Grab him and place him under arrest because the behaviour is unacceptable.",
        "efficient",
        "This deals with the assault firmly and appropriately."
      ),
      option(
        "c",
        "Walk away because you do not need to deal with people like this.",
        "inefficient",
        "This avoids dealing with unacceptable behaviour."
      ),
      option(
        "d",
        "Radio for backup and warn him there will be serious consequences.",
        "fairly-efficient",
        "This responds to the incident, but backup may not be necessary before detaining him."
      ),
    ],
    debrief:
      "Firm action can be appropriate, but it must still be proportionate.",
  }),
  question({
    id: "sjt-35",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "During a shift you become dizzy, lethargic, and unable to concentrate. Your colleague says there is only an hour left.",
    options: [
      option(
        "a",
        "Ask whether your colleague would be comfortable finishing the shift alone.",
        "inefficient",
        "Your colleague should not have to work alone if cover can be arranged."
      ),
      option(
        "b",
        "Say you will finish the shift anyway.",
        "counterproductive",
        "You are not fit to work safely."
      ),
      option(
        "c",
        "Ask whether you can take a break and sit down for a while.",
        "fairly-efficient",
        "This recognises the problem, but may still leave the shift under-supported."
      ),
      option(
        "d",
        "Call police HQ and ask whether you can finish early.",
        "efficient",
        "This lets the station arrange cover and protects safe working."
      ),
    ],
    debrief:
      "If you are unfit for duty, tell the right people so safe cover can be arranged.",
  }),
  question({
    id: "sjt-36",
    competencyIds: ["taking-ownership"],
    scenario:
      "A trainee officer has made a big mistake in paperwork, but he has already gone home for the day.",
    options: [
      option(
        "a",
        "Correct the mistake and pretend it never happened.",
        "inefficient",
        "The trainee will not learn from the error."
      ),
      option(
        "b",
        "Highlight the error in pencil and leave it on his desk for the morning.",
        "fairly-efficient",
        "This lets him see the mistake, but a conversation would teach more."
      ),
      option(
        "c",
        "Correct the mistake, then sit down with him the next morning to explain the error.",
        "efficient",
        "This protects the paperwork deadline and turns the error into learning."
      ),
      option(
        "d",
        "Call him on his mobile and say you are extremely disappointed.",
        "counterproductive",
        "This scolds without constructive feedback."
      ),
    ],
    debrief:
      "A strong training response fixes the immediate issue and helps the person improve.",
  }),
  question({
    id: "sjt-37",
    competencyIds: ["taking-ownership", "courage"],
    scenario:
      "Two trainee officers run over to take selfies with an expensive car while on patrol.",
    options: [
      option(
        "a",
        "Admonish them and say the behaviour is unacceptable for police officers.",
        "fairly-efficient",
        "This clearly identifies the problem, though it may be harsher than needed."
      ),
      option(
        "b",
        "Keep the tone light, ask them to come away from the car, and stop them taking pictures.",
        "efficient",
        "This is firm enough to stop the behaviour without over-escalating."
      ),
      option(
        "c",
        "Report them immediately and demand that they are removed from the force.",
        "counterproductive",
        "This is a major overreaction."
      ),
      option(
        "d",
        "Tell them to delete any images they take.",
        "inefficient",
        "This reacts too late and does not stop the behaviour in the first place."
      ),
    ],
    debrief:
      "Correct unprofessional behaviour early, but keep the response proportionate.",
  }),
  question({
    id: "sjt-38",
    competencyIds: ["public-service", "courage"],
    scenario:
      "You are responding as backup to an officer in serious trouble. Your partner asks you to stop at a restaurant so he can get food.",
    options: [
      option(
        "a",
        "Refuse to stop and explain this could be life or death and he can eat afterwards.",
        "efficient",
        "This keeps priority on the urgent callout."
      ),
      option(
        "b",
        "Explain why stopping is wrong, but let him out if he persists and continue alone.",
        "fairly-efficient",
        "You still continue to the callout, but leaving your partner behind is a poor fallback."
      ),
      option(
        "c",
        "Ask him to get you some chips too.",
        "counterproductive",
        "This encourages completely unacceptable behaviour."
      ),
      option(
        "d",
        "Radio ahead to ask whether you are urgently needed and whether you can stop for food.",
        "inefficient",
        "The urgency is already clear from the callout."
      ),
    ],
    debrief:
      "When a colleague may be in danger, the response priority is obvious.",
  }),
  question({
    id: "sjt-39",
    competencyIds: ["taking-ownership"],
    scenario:
      "You arrive five minutes before your shift. The desk sergeant asks you to go to the shops for milk because nobody can have tea.",
    options: [
      option(
        "a",
        "Say your shift starts in five minutes and you need to prepare, so someone else must do it.",
        "fairly-efficient",
        "This protects your shift readiness, but the wording is blunt."
      ),
      option(
        "b",
        "Say you do not drink tea, so someone else can do it.",
        "counterproductive",
        "This is rude and gives no proper reason."
      ),
      option(
        "c",
        "Agree, but say you will be late for your shift and hope that is okay.",
        "inefficient",
        "You cannot decide to be late without permission."
      ),
      option(
        "d",
        "Ask the head of station whether it is okay to go and say you are happy to help if approved.",
        "efficient",
        "This is helpful while still respecting shift responsibilities."
      ),
    ],
    debrief:
      "Be helpful, but do not create a shift problem without permission.",
  }),
  question({
    id: "sjt-40",
    competencyIds: ["respect-empathy", "taking-ownership"],
    scenario:
      "A colleague tells you in confidence that he is on medication, feels very down, has thoughts of taking his own life, and asks you to keep it secret.",
    options: [
      option(
        "a",
        "Tell him he can talk to you, but you need to report what he has said because you are concerned for his safety.",
        "efficient",
        "This supports him while recognising a serious welfare risk cannot stay secret."
      ),
      option(
        "b",
        "Promise to keep the secret and say he can talk to you whenever he feels down.",
        "inefficient",
        "This shows trust, but fails to escalate a safety concern."
      ),
      option(
        "c",
        "Ask if he can obtain therapy because suicide is not the answer.",
        "fairly-efficient",
        "This points toward help, but still misses the need to report the risk."
      ),
      option(
        "d",
        "Ask him not to disclose personal information because it is none of your business.",
        "counterproductive",
        "This is insensitive and may make him feel more isolated."
      ),
    ],
    debrief:
      "Confidentiality has limits when there is a serious risk to someone's safety.",
  }),
  question({
    id: "sjt-41",
    competencyIds: ["respect-empathy", "taking-ownership"],
    scenario:
      "Your partner seems in poor physical condition, gets out of breath, needs frequent rest breaks, and appears to have gained weight.",
    options: [
      option(
        "a",
        "Tell him you are concerned and demand that he cuts back on fast food.",
        "inefficient",
        "This is rude and assumes the cause without evidence."
      ),
      option(
        "b",
        "Set up a meeting with him and the head of station to discuss your concerns.",
        "fairly-efficient",
        "This can help, but a supportive one-to-one conversation is a better first step."
      ),
      option(
        "c",
        "Go straight to the head of station and say he needs to be removed.",
        "counterproductive",
        "This is a major overreaction and offers no support."
      ),
      option(
        "d",
        "Sit down with him, explain your concerns, and ask whether you can help.",
        "efficient",
        "This is direct, respectful, and supportive."
      ),
    ],
    debrief:
      "Raise welfare and performance concerns respectfully before escalating unnecessarily.",
  }),
  question({
    id: "sjt-42",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "At a station, two women dispute ownership of a bag. One says it was stolen, the other says she bought it last week, and the argument becomes abusive.",
    options: [
      option(
        "a",
        "Arrest woman 2 for theft and take her for questioning.",
        "counterproductive",
        "You do not yet know who owns the bag."
      ),
      option(
        "b",
        "Confiscate the bag and take both women to analyse the CCTV footage.",
        "efficient",
        "This defuses the dispute and checks the available evidence."
      ),
      option(
        "c",
        "Tell them to take the dispute elsewhere because you do not have time for petty squabbles.",
        "inefficient",
        "This dismisses a possible theft allegation."
      ),
      option(
        "d",
        "Confiscate the bag, take their details, and say police will be in touch.",
        "fairly-efficient",
        "This is responsible, but it may unfairly delay return of the bag to its true owner."
      ),
    ],
    debrief:
      "When facts are contested, secure the item and check evidence rather than guessing.",
  }),
  question({
    id: "sjt-43",
    competencyIds: ["taking-ownership", "respect-empathy"],
    scenario:
      "A colleague says she thinks she saw Perkins going through your drawer while you were at lunch and asks whether you gave him permission.",
    options: [
      option(
        "a",
        "Say you did not give permission and take it straight to the head of station.",
        "inefficient",
        "This jumps to escalation before checking facts."
      ),
      option(
        "b",
        "Ask whether she is completely sure, then speak to Perkins alone.",
        "fairly-efficient",
        "This is fair, but you should also check whether anything is missing."
      ),
      option(
        "c",
        "Accuse your colleague of making up stories because Perkins would never do that.",
        "counterproductive",
        "This is rude to someone trying to help and dismisses a possible issue."
      ),
      option(
        "d",
        "Ask her to clarify the exact time, then check your desk to see whether anything is missing.",
        "efficient",
        "This gathers facts before speaking to Perkins or escalating."
      ),
    ],
    debrief:
      "Check evidence before accusing anyone, even when the allegation concerns you.",
  }),
  question({
    id: "sjt-44",
    competencyIds: ["courage", "taking-ownership"],
    scenario:
      "You overhear one colleague threatening another, saying 'snitches get stitches.' Both then leave the area.",
    options: [
      option(
        "a",
        "Find colleague 2, say you overheard it, and demand to know what is going on.",
        "fairly-efficient",
        "This follows up directly, but the demand is less measured than it should be."
      ),
      option(
        "b",
        "Ignore it because it is none of your business.",
        "counterproductive",
        "Threats between colleagues are serious and cannot be ignored."
      ),
      option(
        "c",
        "Tell your senior manager what you heard because he is best placed to deal with it.",
        "inefficient",
        "Escalation is needed, but first checking on the threatened colleague is important."
      ),
      option(
        "d",
        "Find colleague 2, say the behaviour was unacceptable, and ask him to come with you to the head of station.",
        "efficient",
        "This supports the threatened colleague and escalates the serious conduct issue."
      ),
    ],
    debrief:
      "Threatening behaviour needs support for the affected person and proper escalation.",
  }),
  question({
    id: "sjt-45",
    competencyIds: ["courage", "public-service"],
    scenario:
      "You and your partner arrest a suspect after a police employee is found dead. Your partner says the suspect is a police killer and suggests teaching him a lesson before taking him in.",
    options: [
      option(
        "a",
        "Say that despite how serious the offence is, you cannot break the law, and call the station about the situation.",
        "efficient",
        "This stops unlawful behaviour and reports the situation immediately."
      ),
      option(
        "b",
        "Say you will wait outside in the car and leave your partner to it.",
        "counterproductive",
        "This allows unlawful violence."
      ),
      option(
        "c",
        "Advise that it would be unlawful, but say you will not stand in the way.",
        "inefficient",
        "You identify the problem but fail to stop it."
      ),
      option(
        "d",
        "Tell your partner it would lower him to the criminal's level and urge him to think sensibly.",
        "fairly-efficient",
        "This challenges the idea, but it does not report the situation immediately."
      ),
    ],
    debrief:
      "Professional standards matter most under pressure. Stop unlawful conduct and report it.",
  }),
];

const pdfPracticeQuestionsFour = [
  question({
    id: "sjt-46",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "While on evening patrol, you hear very loud music coming from an open window. It can be heard from the other end of the street.",
    options: [
      option(
        "a",
        "Knock on the door, politely ask the homeowner to turn the music down, and explain you do not want it to become a noise complaint.",
        "efficient",
        "This deals with the problem early, calmly, and gives the homeowner a chance to correct it."
      ),
      option(
        "b",
        "Ignore it until someone makes a formal noise complaint.",
        "inefficient",
        "The problem is already obvious, so waiting passively is poor public service."
      ),
      option(
        "c",
        "Bang on the door and demand that the homeowner turns the music down.",
        "counterproductive",
        "This is needlessly confrontational when the person may not realise how loud the music is."
      ),
      option(
        "d",
        "Ask the neighbouring residents whether the noise is bothering them.",
        "fairly-efficient",
        "This gathers useful context, but the obvious first step is to speak politely to the homeowner."
      ),
    ],
    debrief:
      "Deal with low-level public issues early and proportionately. Calm intervention prevents escalation.",
  }),
  question({
    id: "sjt-47",
    competencyIds: ["taking-ownership"],
    scenario:
      "Your head of station has asked to speak to you at the end of the day. You cannot remember doing anything wrong, but you feel very nervous.",
    options: [
      option(
        "a",
        "Ask someone senior whether they know what the head of station wants to discuss.",
        "inefficient",
        "The matter is between you and the head of station, and others are unlikely to know."
      ),
      option(
        "b",
        "Knock on the head of station's door early to check whether you have done anything wrong.",
        "fairly-efficient",
        "This tries to reduce anxiety, but it ignores the requested timing and may interrupt them."
      ),
      option(
        "c",
        "Leave early so you do not have to speak to them until tomorrow.",
        "counterproductive",
        "Avoiding the conversation will make the situation worse."
      ),
      option(
        "d",
        "Review your recent case reports so you are prepared if they want to discuss your work.",
        "efficient",
        "This uses the waiting time constructively and prepares you without causing disruption."
      ),
    ],
    debrief:
      "Taking ownership includes preparing calmly instead of avoiding uncertainty.",
  }),
  question({
    id: "sjt-48",
    competencyIds: ["taking-ownership", "integrity"],
    scenario:
      "At the end of the day, the head of station says you left the evidence locker open and unsecured. You quickly realise you made the mistake.",
    options: [
      option(
        "a",
        "Pretend you know nothing about it because the mistake could affect your job.",
        "counterproductive",
        "This is dishonest and avoids responsibility."
      ),
      option(
        "b",
        "Admit the mistake, but say someone else should also have checked the locker.",
        "inefficient",
        "This admits part of the issue but shifts blame for your own error."
      ),
      option(
        "c",
        "Apologise and assure the head of station that it will not happen again.",
        "fairly-efficient",
        "This accepts responsibility, but it does not show as much learning as asking how to prevent a repeat."
      ),
      option(
        "d",
        "Apologise, accept the error, and ask for advice on how to make sure it does not happen again.",
        "efficient",
        "This owns the mistake and shows a clear desire to improve."
      ),
    ],
    debrief:
      "Integrity means being honest about mistakes and learning from them, especially when evidence is involved.",
  }),
  question({
    id: "sjt-49",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "You are guarding a crime-scene perimeter. Officers have been told not to speak to the media, but you see a colleague telling a journalist details about the victim and where the body was found.",
    options: [
      option(
        "a",
        "Take your colleague aside and remind them what the head of station said.",
        "counterproductive",
        "This does not stop the journalist or deal properly with the breach."
      ),
      option(
        "b",
        "Stop the interview immediately and tell your colleague to call police HQ to report what they have done.",
        "efficient",
        "This stops the disclosure and makes the person responsible report the breach."
      ),
      option(
        "c",
        "Stop the interview, send the journalist away, and call police HQ yourself.",
        "fairly-efficient",
        "This protects the scene and reports the issue, but ideally the colleague should own the mistake."
      ),
      option(
        "d",
        "Ask the journalist to leave and tell your colleague not to share anything else.",
        "inefficient",
        "This stops the immediate conversation but does not do enough to address the breach."
      ),
    ],
    debrief:
      "Confidential operational information must be protected, and breaches need immediate ownership.",
  }),
  question({
    id: "sjt-50",
    competencyIds: ["respect-empathy", "courage"],
    scenario:
      "You are patrolling with a close colleague. You see a woman with a visible tattoo showing allegiance to a nationalist political party. Your colleague says the tattoo is despicable and suggests arresting her.",
    options: [
      option(
        "a",
        "Explain that your colleague may disagree with her views, but there are no grounds to arrest her.",
        "efficient",
        "This is calm, fair, lawful, and challenges the proposed misuse of power."
      ),
      option(
        "b",
        "Tell your colleague everyone deserves respect, then place the woman under arrest.",
        "counterproductive",
        "The respectful language is undermined by an unlawful arrest."
      ),
      option(
        "c",
        "Tell your colleague to be more accepting and encourage him to speak to the woman about the tattoo.",
        "inefficient",
        "There is no need to approach her if she is not committing an offence."
      ),
      option(
        "d",
        "Ignore your colleague because he is entitled to his view, but do not arrest the woman.",
        "fairly-efficient",
        "You avoid the unlawful arrest, but you should still remind your colleague of expected standards."
      ),
    ],
    debrief:
      "Impartiality means separating personal views from lawful action and challenging misuse of powers.",
  }),
  question({
    id: "sjt-51",
    competencyIds: ["respect-empathy", "public-service"],
    scenario:
      "In an office, a wheelchair user asks whether you would swap desks because your desk is closer to the exit route and would make her day easier.",
    options: [
      option(
        "a",
        "Refuse because moving desks would cause unnecessary disruption for you.",
        "counterproductive",
        "This fails to consider a reasonable adjustment and damages working relationships."
      ),
      option(
        "b",
        "Agree because the change is manageable for you and would improve her working day.",
        "efficient",
        "This is supportive, practical, and helps create an inclusive workplace."
      ),
      option(
        "c",
        "Ask her to get your manager's approval first, then say you will agree if the manager does.",
        "fairly-efficient",
        "This is cautious and keeps the manager informed, but the request itself is reasonable."
      ),
      option(
        "d",
        "Agree only if she moves all your belongings for you.",
        "inefficient",
        "This agrees in principle but places an unreasonable burden on the person asking for help."
      ),
    ],
    debrief:
      "Respect and inclusion often mean making small practical changes that help someone else work safely and comfortably.",
  }),
  question({
    id: "sjt-52",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "You are a train conductor checking tickets. A passenger has no ticket, says his mother is in hospital after a fall, and says he can pay the fare now. His stop is two stations away.",
    options: [
      option(
        "a",
        "Ask the other passengers what they think you should do.",
        "inefficient",
        "This is your responsibility, not a decision for passengers in the carriage."
      ),
      option(
        "b",
        "Allow him to pay the normal fare to his destination.",
        "fairly-efficient",
        "This shows compassion, but it may fail to apply the rules consistently."
      ),
      option(
        "c",
        "Make a citizen's arrest because he has travelled without a ticket.",
        "counterproductive",
        "This is a major overreaction to the situation."
      ),
      option(
        "d",
        "Issue the standard penalty fare.",
        "efficient",
        "This applies the rules consistently while avoiding unnecessary escalation."
      ),
    ],
    debrief:
      "Compassion matters, but fair and consistent rule application is also part of public service.",
  }),
  question({
    id: "sjt-53",
    competencyIds: ["respect-empathy", "courage"],
    scenario:
      "A new employee has made inappropriate comments toward female colleagues. One colleague feels uncomfortable but does not want to damage his future. Another says she may hit him if it happens again.",
    options: [
      option(
        "a",
        "Speak to the new employee privately and tell him his behaviour needs to change.",
        "fairly-efficient",
        "This addresses the behaviour discreetly, but it may not give the affected colleagues enough control over reporting."
      ),
      option(
        "b",
        "Go straight to your manager and explain the situation.",
        "inefficient",
        "The affected colleague has said she does not want you to escalate it on her behalf yet."
      ),
      option(
        "c",
        "Encourage the female colleagues to speak to the manager.",
        "efficient",
        "This supports the people affected and points them toward the proper route."
      ),
      option(
        "d",
        "Ignore it because he is probably joking.",
        "counterproductive",
        "Inappropriate behaviour should not be dismissed as harmless when colleagues feel uncomfortable."
      ),
    ],
    debrief:
      "Support people affected by poor behaviour and encourage proper reporting without taking away their voice.",
  }),
  question({
    id: "sjt-54",
    competencyIds: ["integrity", "taking-ownership"],
    scenario:
      "A colleague wants to complain that a sales manager acted in a sexist way during a meeting. You saw the manager behave harshly, but you did not see evidence of sexism. She asks you to be a witness.",
    options: [
      option(
        "a",
        "Agree to be a witness, but say honestly that you did not see evidence of sexism.",
        "efficient",
        "This is honest and separates what you witnessed from what you did not witness."
      ),
      option(
        "b",
        "Tell the chairman you believe the manager acted in a sexist way.",
        "inefficient",
        "You should not support a claim you did not see evidence for."
      ),
      option(
        "c",
        "Agree to be a witness and suggest the department needs extra help.",
        "fairly-efficient",
        "This is partly helpful, but it drifts away from the specific issue you were asked to witness."
      ),
      option(
        "d",
        "Encourage your colleague to sue the company.",
        "counterproductive",
        "This is extreme and unsupported by what you personally observed."
      ),
    ],
    debrief:
      "Integrity means giving an accurate account, even when you sympathise with someone.",
  }),
  question({
    id: "sjt-55",
    competencyIds: ["taking-ownership", "public-service"],
    scenario:
      "You are a platform assistant whose role includes helping disabled passengers. It is quiet, and your colleague suggests leaving your post to get a celebrity's autograph on the other side of the platform.",
    options: [
      option(
        "a",
        "Go with your colleague because it may be your only chance to meet the celebrity.",
        "counterproductive",
        "This abandons your responsibilities for a personal reason."
      ),
      option(
        "b",
        "Say you are staying at your post, but that your colleague can decide for themselves.",
        "fairly-efficient",
        "You keep your own standards, but you do not encourage your colleague to do the same."
      ),
      option(
        "c",
        "Refuse to go and encourage your colleague not to go because it would be unprofessional.",
        "efficient",
        "This protects the service and challenges unprofessional conduct."
      ),
      option(
        "d",
        "Take photos from a distance without approaching the celebrity.",
        "inefficient",
        "You stay at your post, but the behaviour is still unprofessional."
      ),
    ],
    debrief:
      "Professionalism means staying focused on duty and encouraging colleagues to do the same.",
  }),
  question({
    id: "sjt-56",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "As a customer service assistant, you ask two arguing men to hand over a disputed bag so CCTV can be checked. While you are distracted, one man runs off with the bag in a taxi.",
    options: [
      option(
        "a",
        "Take the man's contact details so he can be reimbursed for some shopping.",
        "inefficient",
        "The issue is the missing bag and possible theft, not a general reimbursement."
      ),
      option(
        "b",
        "Tell him nothing can be done and that he should have reacted faster.",
        "counterproductive",
        "This is dismissive and refuses responsibility for a serious incident."
      ),
      option(
        "c",
        "Report the incident to senior management and say the company will be in touch.",
        "fairly-efficient",
        "This takes some action, but it is vague and does not properly record the incident."
      ),
      option(
        "d",
        "Take him somewhere private, write a report, and pass the matter to the police.",
        "efficient",
        "This records the facts, reassures the customer, and sends the matter to the right authority."
      ),
    ],
    debrief:
      "When something serious happens, take a clear record and involve the right people.",
  }),
  question({
    id: "sjt-57",
    competencyIds: ["integrity", "respect-empathy"],
    scenario:
      "As a barista, you notice a regular customer wears a wedding ring and often visits with different women. You suspect he may be cheating.",
    options: [
      option(
        "a",
        "Ignore it because his personal life is not your business.",
        "efficient",
        "Provided no rules or laws are being broken, his private life is not a matter for staff."
      ),
      option(
        "b",
        "Confront him because cheating is immoral.",
        "counterproductive",
        "This would be intrusive and unprofessional."
      ),
      option(
        "c",
        "Speak to him privately and ask him to explain his behaviour.",
        "inefficient",
        "This still involves you in something that is not your responsibility."
      ),
      option(
        "d",
        "Talk to a colleague about your concern.",
        "fairly-efficient",
        "This avoids confronting him, but it still risks gossiping about a customer's private life."
      ),
    ],
    debrief:
      "Good judgement includes recognising when something is not your business.",
  }),
  question({
    id: "sjt-58",
    competencyIds: ["taking-ownership", "collaborative"],
    scenario:
      "You manage a writing retreat. A struggling new staff member forgot to order food supplies, so dinner cannot be cooked for attendees that evening. The staff member is upset.",
    options: [
      option(
        "a",
        "Tell him to pack his bags because he is sacked.",
        "counterproductive",
        "This does not solve the immediate problem and is unprofessional."
      ),
      option(
        "b",
        "Say mistakes happen, gather the team, and brainstorm ways to fix dinner.",
        "efficient",
        "This focuses everyone on solving the urgent problem constructively."
      ),
      option(
        "c",
        "Suggest he should consider whether the role is right for him.",
        "inefficient",
        "This damages confidence before the immediate problem has been solved."
      ),
      option(
        "d",
        "Say it is serious, but start by working with him on solutions and discuss it properly later.",
        "fairly-efficient",
        "This is constructive and recognises the seriousness, though the team brainstorm is stronger."
      ),
    ],
    debrief:
      "Handle the urgent operational issue first, then review the mistake once the situation is stable.",
  }),
  question({
    id: "sjt-59",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "A staff member broke her ankle at work after a ladder was used unsafely. You need to call her the next day as her manager.",
    options: [
      option(
        "a",
        "Apologise for the incident and say you hope to see her back soon.",
        "fairly-efficient",
        "This shows care, but it does not reassure her that the incident will be investigated."
      ),
      option(
        "b",
        "Tell her that because she is part time and cannot work, her contract will be terminated.",
        "counterproductive",
        "This is unfair, uncaring, and ignores the workplace safety issue."
      ),
      option(
        "c",
        "Ask whether she can come in and work on crutches.",
        "inefficient",
        "This puts pressure on someone who is injured and does not address the incident."
      ),
      option(
        "d",
        "Apologise and assure her that a full investigation will be carried out to prevent a repeat.",
        "efficient",
        "This shows care, accountability, and a commitment to improving safety."
      ),
    ],
    debrief:
      "After a workplace injury, support the person and show that the cause will be properly reviewed.",
  }),
  question({
    id: "sjt-60",
    competencyIds: ["respect-empathy", "taking-ownership"],
    scenario:
      "After taking time off for a relative's funeral, you hear your care-home manager has called you lazy and questioned why you needed five days away.",
    options: [
      option(
        "a",
        "Spread bad rumours about your manager in return.",
        "counterproductive",
        "This is unprofessional and likely to escalate the conflict."
      ),
      option(
        "b",
        "Speak to your manager privately, ask whether the claims are true, and explain why you needed the time off.",
        "efficient",
        "This is direct, professional, and gives both sides a chance to address the issue."
      ),
      option(
        "c",
        "Arrange a team meeting to find out what happened.",
        "inefficient",
        "This involves the wider team in a private issue and may increase gossip."
      ),
      option(
        "d",
        "Phone your manager outside work to discuss it further.",
        "fairly-efficient",
        "This tries to resolve the issue, but a private workplace conversation is cleaner."
      ),
    ],
    debrief:
      "Deal with personal workplace concerns privately and professionally rather than feeding gossip.",
  }),
];

const pdfPracticeQuestionsFive = [
  question({
    id: "sjt-61",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "A customer travelled 10 miles for a toy shown as in stock online. After searching, you discover the website was wrong and the toy is out of stock.",
    options: [
      option(
        "a",
        "Apologise and say there is nothing more you can do.",
        "counterproductive",
        "This apologises but does nothing to repair the mistake."
      ),
      option(
        "b",
        "Tell her another shop 15 miles away might have the toy.",
        "fairly-efficient",
        "This gives a possible route, but it pushes more inconvenience onto the customer."
      ),
      option(
        "c",
        "Order the toy, deliver it to her home, and give both the toy and delivery free.",
        "inefficient",
        "This is generous but excessive; the customer still needs to pay for the product."
      ),
      option(
        "d",
        "Order the toy, deliver it to her home when it arrives, and waive the delivery charge.",
        "efficient",
        "This fixes the mistake, respects the wasted journey, and stays commercially sensible."
      ),
    ],
    debrief:
      "Strong customer service fixes the problem without creating an unreasonable solution.",
  }),
  question({
    id: "sjt-62",
    competencyIds: ["integrity", "taking-ownership"],
    scenario:
      "You deliver supermarket food. A customer offers you 10 pounds as a thank-you, but company policy says you must not accept tips or financial rewards.",
    options: [
      option(
        "a",
        "Accept the money because nobody will know.",
        "counterproductive",
        "This breaches policy and damages integrity."
      ),
      option(
        "b",
        "Politely refuse and explain that the customer can donate to the supermarket's supported charities instead.",
        "efficient",
        "This follows policy while still giving the customer a positive way to show appreciation."
      ),
      option(
        "c",
        "Thank them but explain that you cannot accept tips or rewards.",
        "fairly-efficient",
        "This follows policy politely, though it offers less of a positive alternative."
      ),
      option(
        "d",
        "Walk away and ignore the offer.",
        "inefficient",
        "This avoids breaching policy but handles the customer rudely."
      ),
    ],
    debrief:
      "Integrity is often tested by small offers. Follow policy and communicate respectfully.",
  }),
  question({
    id: "sjt-63",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "As a health and safety assessor visiting a warehouse, you notice several fire doors are illegally wedged open.",
    options: [
      option(
        "a",
        "Ignore it because you came to discuss a different risk-assessment topic.",
        "counterproductive",
        "You have noticed a safety risk and have a responsibility to act."
      ),
      option(
        "b",
        "Remove the wedges yourself and report the issue to the Fire Safety Officer later.",
        "fairly-efficient",
        "This improves safety and reports it, but it does not educate the responsible person on site."
      ),
      option(
        "c",
        "Tell the responsible person to remove the wedges immediately, then report it for a proper inspection.",
        "efficient",
        "This tackles the immediate risk, educates the site, and triggers follow-up."
      ),
      option(
        "d",
        "Remove the wedges yourself and say nothing else.",
        "inefficient",
        "The wedges may simply be put back because nobody responsible has been spoken to."
      ),
    ],
    debrief:
      "Fix immediate safety risks and make sure the people responsible understand the issue.",
  }),
  question({
    id: "sjt-64",
    competencyIds: ["collaborative", "innovation"],
    scenario:
      "In an office meeting, your line manager explains changes that will add tasks to the working day. Most of the team start objecting.",
    options: [
      option(
        "a",
        "Join the objections because things are already working well.",
        "counterproductive",
        "This rejects change because others do, without considering the benefits."
      ),
      option(
        "b",
        "Keep quiet even though you disagree, because you do not want trouble.",
        "inefficient",
        "Quietly resisting change does not help the organisation adapt."
      ),
      option(
        "c",
        "Accept the changes yourself and leave others to their own opinions.",
        "fairly-efficient",
        "This shows personal acceptance but does not help colleagues understand the change."
      ),
      option(
        "d",
        "Accept the changes and help explain their benefits to sceptical colleagues.",
        "efficient",
        "This supports change and helps the team adapt constructively."
      ),
    ],
    debrief:
      "Open-mindedness means engaging with change and helping others understand why it matters.",
  }),
  question({
    id: "sjt-65",
    competencyIds: ["taking-ownership"],
    scenario:
      "You are a bus driver due to finish in five minutes. Your manager asks you to mop the depot floor before you leave, and doing it properly will take 15 minutes.",
    options: [
      option(
        "a",
        "Do the task properly, even though it means staying ten minutes late.",
        "efficient",
        "This completes the task to the required standard and supports the workplace."
      ),
      option(
        "b",
        "Say you are happy to do it, but ask whether you can finish slightly early tomorrow.",
        "fairly-efficient",
        "This completes the task while explaining the impact, though asking for compensation is less strong."
      ),
      option(
        "c",
        "Do it to a lower standard so you can finish on time.",
        "inefficient",
        "This accepts the task but does not complete it properly."
      ),
      option(
        "d",
        "Politely refuse to do the task.",
        "counterproductive",
        "The task is left undone for the next shift."
      ),
    ],
    debrief:
      "Taking ownership means doing required work properly, even when it is mildly inconvenient.",
  }),
  question({
    id: "sjt-66",
    competencyIds: ["collaborative", "taking-ownership"],
    scenario:
      "You manage six people at a distribution centre before the annual peak. Everyone is making careless mistakes because workload has increased.",
    options: [
      option(
        "a",
        "Tell the team they may be replaced if things do not improve.",
        "counterproductive",
        "This damages morale and does not identify why mistakes are happening."
      ),
      option(
        "b",
        "Hold a team meeting to identify the reasons and agree a performance-improvement plan together.",
        "efficient",
        "This finds the cause and creates a shared plan the team can follow."
      ),
      option(
        "c",
        "Do more of the team's work yourself because they are clearly busy.",
        "inefficient",
        "This avoids the management problem and fails to address the cause of mistakes."
      ),
      option(
        "d",
        "Ask your boss to hire another staff member to ease pressure.",
        "fairly-efficient",
        "Extra help may be useful, but first you need to understand and manage the current problem."
      ),
    ],
    debrief:
      "Managers should diagnose performance problems with the team before jumping to threats or assumptions.",
  }),
  question({
    id: "sjt-67",
    competencyIds: ["taking-ownership", "public-service"],
    scenario:
      "On a busy shop floor, you are heading for a ten-minute break when you see items have fallen across a storage-area shelf. It will take about ten minutes to put them back.",
    options: [
      option(
        "a",
        "Walk around the mess and take your break because someone else can clear it.",
        "counterproductive",
        "You ignore a problem that could affect safety and store operations."
      ),
      option(
        "b",
        "Tell your manager you will fix it now and ask to take your break afterwards.",
        "efficient",
        "This solves the problem and still protects your break."
      ),
      option(
        "c",
        "Tell your manager about it and ask them to find someone else because you are going on break.",
        "inefficient",
        "The team is already busy, and you are passing on a problem you can fix."
      ),
      option(
        "d",
        "Skip your break and put everything back yourself.",
        "fairly-efficient",
        "This fixes the problem, but breaks are still important for performance."
      ),
    ],
    debrief:
      "A strong response solves the immediate issue while still managing your own welfare sensibly.",
  }),
  question({
    id: "sjt-68",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "You are working alone in a coffee shop when the coffee machine breaks. You can still serve tea and soft drinks, but there is a queue.",
    options: [
      option(
        "a",
        "Apologise, say the breakdown is beyond your control, close the shop, and go home.",
        "counterproductive",
        "This gives up even though the shop can still offer alternatives."
      ),
      option(
        "b",
        "Tell the queue you can only serve tea and soft drinks, then put a clear sign on the door explaining the issue.",
        "efficient",
        "This keeps service going and informs customers before they queue."
      ),
      option(
        "c",
        "Explain the problem to each customer only when they reach the front.",
        "fairly-efficient",
        "This keeps serving, but wastes time and frustrates customers who wait unnecessarily."
      ),
      option(
        "d",
        "Call your boss and ask what to do.",
        "inefficient",
        "You can use your initiative to manage this straightforward service issue."
      ),
    ],
    debrief:
      "Good service means communicating clearly and using initiative when plans change.",
  }),
  question({
    id: "sjt-69",
    competencyIds: ["respect-empathy", "taking-ownership"],
    scenario:
      "You rejected three candidates after interviews. One arrives upset and asks why he was not successful.",
    options: [
      option(
        "a",
        "Say you do not have to explain and ask him to leave.",
        "counterproductive",
        "This may be technically possible, but it handles the person poorly and damages the organisation's image."
      ),
      option(
        "b",
        "Give a short list of reasons and encourage him to apply again.",
        "fairly-efficient",
        "This gives feedback, but may create false expectations about future success."
      ),
      option(
        "c",
        "Listen to him, explain the process and outcome, then offer constructive interview feedback.",
        "efficient",
        "This lets him be heard, explains the decision fairly, and helps him improve."
      ),
      option(
        "d",
        "Make him tea, leave him alone, and call your boss for advice.",
        "inefficient",
        "This delays handling a situation you should be able to manage as supervisor."
      ),
    ],
    debrief:
      "Respectful feedback protects the organisation and helps the unsuccessful candidate leave with clarity.",
  }),
  question({
    id: "sjt-70",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "A customer wants a replacement electric shaver bought three weeks ago. Store policy allows exchanges within 28 days with a receipt, but he has no receipt.",
    options: [
      option(
        "a",
        "Apologise, explain the receipt policy, and ask whether he can provide another proof of purchase so a manager can consider an exchange.",
        "efficient",
        "This respects policy while trying to find a fair solution."
      ),
      option(
        "b",
        "Say you cannot help because he has no receipt.",
        "counterproductive",
        "This applies the policy bluntly without trying to solve the problem."
      ),
      option(
        "c",
        "Apologise and exchange the shaver without proof.",
        "inefficient",
        "You should not exchange it without evidence it was bought from the store."
      ),
      option(
        "d",
        "Ask your manager what they think you should do.",
        "fairly-efficient",
        "Seeking advice is reasonable, but you can first identify the proof-of-purchase route."
      ),
    ],
    debrief:
      "Policy and service can work together: explain the rule and look for a legitimate way forward.",
  }),
  question({
    id: "sjt-71",
    competencyIds: ["respect-empathy", "collaborative"],
    scenario:
      "In a meeting, your manager speaks quickly with a strong accent and you are struggling to understand most of what she is saying.",
    options: [
      option(
        "a",
        "At a natural break, respectfully explain that you are struggling to follow and ask her to slow down.",
        "efficient",
        "This is respectful and fixes the problem while the meeting is still happening."
      ),
      option(
        "b",
        "Wait until the end and ask colleagues what she said.",
        "fairly-efficient",
        "This seeks help, but it leaves you missing information during the meeting."
      ),
      option(
        "c",
        "Wait until the end and tell her privately that you did not understand most of it.",
        "inefficient",
        "This forces her to repeat lots of information after the meeting."
      ),
      option(
        "d",
        "Do nothing.",
        "counterproductive",
        "You will leave without understanding important information."
      ),
    ],
    debrief:
      "Clear communication can be requested respectfully without embarrassing the speaker.",
  }),
  question({
    id: "sjt-72",
    competencyIds: ["integrity", "respect-empathy"],
    scenario:
      "On your first day as a manager, another manager tells you negative things about your boss and says you should not trust him.",
    options: [
      option(
        "a",
        "Challenge her respectfully and say it is wrong to speak about a senior colleague like that.",
        "fairly-efficient",
        "This stands up for standards, though it may be stronger to avoid judging either person yet."
      ),
      option(
        "b",
        "Thank her and stay on guard with your boss from now on.",
        "inefficient",
        "This lets one person's view unfairly shape your judgement."
      ),
      option(
        "c",
        "Thank her but say you do not want to pre-judge anyone and will take your boss as you find him.",
        "efficient",
        "This stays open-minded and avoids gossip-driven assumptions."
      ),
      option(
        "d",
        "Ask others whether they have had the same experience with your boss.",
        "counterproductive",
        "This spreads gossip and may damage your working relationships."
      ),
    ],
    debrief:
      "Avoid forming views about people from gossip. Stay fair and evidence-based.",
  }),
  question({
    id: "sjt-73",
    competencyIds: ["taking-ownership", "public-service"],
    scenario:
      "As a hotel manager, head office asks you to manage another hotel 25 miles away because its manager is sick. You had planned to catch up on paperwork today.",
    options: [
      option(
        "a",
        "Say you cannot help because you have paperwork to finish.",
        "counterproductive",
        "This does nothing to support the urgent need at the other hotel."
      ),
      option(
        "b",
        "Explain your paperwork workload and ask head office how to prioritise it.",
        "inefficient",
        "As manager, you should show more initiative with prioritisation."
      ),
      option(
        "c",
        "Offer to call around for another available manager, and go yourself if nobody else can cover.",
        "fairly-efficient",
        "This is helpful, though it delays a direct response."
      ),
      option(
        "d",
        "Agree to manage the other hotel and take your paperwork with you to complete where possible.",
        "efficient",
        "This supports the urgent operational need while still trying to manage your own workload."
      ),
    ],
    debrief:
      "Ownership means responding to the priority need and adjusting your own plans where possible.",
  }),
  question({
    id: "sjt-74",
    competencyIds: ["respect-empathy", "collaborative"],
    scenario:
      "Your manager reprimands a colleague for poor performance. You have noticed the colleague has not been himself lately and seems troubled.",
    options: [
      option(
        "a",
        "Speak to him privately, ask whether anything is wrong, and offer support.",
        "efficient",
        "This supports the person directly and gives them space to explain."
      ),
      option(
        "b",
        "Privately tell the manager you think something else may be affecting the colleague's performance.",
        "fairly-efficient",
        "This raises concern, but speaking to the colleague first is more supportive."
      ),
      option(
        "c",
        "Do nothing because it is not your problem.",
        "counterproductive",
        "You have noticed a possible welfare concern and choose to ignore it."
      ),
      option(
        "d",
        "Offer to do some of his work to reduce pressure.",
        "inefficient",
        "This may be kind, but it does not address the underlying issue or performance concern."
      ),
    ],
    debrief:
      "Support starts with a private, respectful conversation rather than assumptions or avoidance.",
  }),
  question({
    id: "sjt-75",
    competencyIds: ["taking-ownership", "public-service"],
    scenario:
      "You are a warehouse supervisor. Your replacement calls to say he will be 30 minutes late, but you have a dinner date and need to leave.",
    options: [
      option(
        "a",
        "Tell the incoming workers they must work unsupervised until he arrives.",
        "inefficient",
        "This leaves the team without proper supervision."
      ),
      option(
        "b",
        "Tell your partner you will be late and supervise the shift until the replacement arrives.",
        "efficient",
        "This protects the workplace and does what a supervisor is expected to do."
      ),
      option(
        "c",
        "Call your boss and ask what to do.",
        "fairly-efficient",
        "This seeks guidance, but the likely answer is that supervision needs to continue."
      ),
      option(
        "d",
        "Leave at the end of your shift because his lateness is not your problem.",
        "counterproductive",
        "This fails to inform and support the incoming team."
      ),
    ],
    debrief:
      "Supervisory responsibility sometimes means staying until safe handover is possible.",
  }),
];

const pdfPracticeQuestionsSix = [
  question({
    id: "sjt-76",
    competencyIds: ["taking-ownership"],
    scenario:
      "You are three months into a six-month development programme with close supervision. You now feel ready to work alone and the supervision is frustrating you.",
    options: [
      option(
        "a",
        "Complete the six months without saying how you feel.",
        "inefficient",
        "This avoids a useful development conversation."
      ),
      option(
        "b",
        "Ask work colleagues for their advice.",
        "fairly-efficient",
        "Colleagues can listen, but your line manager is the person who can change the arrangement."
      ),
      option(
        "c",
        "Start working alone without telling anyone.",
        "counterproductive",
        "This goes against the agreed development plan and could create discipline issues."
      ),
      option(
        "d",
        "Arrange a meeting with your line manager to explain how you feel and ask whether supervision can be reduced.",
        "efficient",
        "This is open, responsible, and lets the right person decide."
      ),
    ],
    debrief:
      "If you feel ready for more responsibility, raise it with the person responsible for your development.",
  }),
  question({
    id: "sjt-77",
    competencyIds: ["collaborative", "taking-ownership"],
    scenario:
      "You supervise a small mail-order team during the busiest month. A team member says she is too busy to attend the team development meeting.",
    options: [
      option(
        "a",
        "Help her identify ways to manage her time so she can attend.",
        "efficient",
        "This supports her workload and keeps the development meeting important."
      ),
      option(
        "b",
        "Tell her the meeting is mandatory and she must attend.",
        "inefficient",
        "This adds pressure without helping her manage the problem."
      ),
      option(
        "c",
        "Say you understand and that she does not need to attend.",
        "counterproductive",
        "This avoids the workload issue and sets a poor precedent for team meetings."
      ),
      option(
        "d",
        "Find someone from another team to cover her workload on the day so she can attend.",
        "fairly-efficient",
        "This may work, but it does not help her build her own time-management approach."
      ),
    ],
    debrief:
      "Support the person and protect the purpose of the meeting rather than simply forcing or excusing attendance.",
  }),
  question({
    id: "sjt-78",
    competencyIds: ["public-service", "taking-ownership"],
    scenario:
      "A colleague increasingly comes to work hungover. Today he smells of alcohol, is loud, disruptive, and appears still intoxicated.",
    options: [
      option(
        "a",
        "Tell him he is being unprofessional and needs to arrange a lift home to sober up.",
        "efficient",
        "This removes the immediate workplace risk and makes clear the behaviour is unacceptable."
      ),
      option(
        "b",
        "Tell him you have noticed the pattern and encourage him to seek help.",
        "fairly-efficient",
        "This supports the wider issue, but it does not deal as directly with today's intoxication."
      ),
      option(
        "c",
        "Ask another colleague to drive him home so you can work in peace.",
        "inefficient",
        "This causes extra disruption and avoids addressing the behaviour properly."
      ),
      option(
        "d",
        "Tell him to drink coffee, sober up, and get on with work quietly.",
        "counterproductive",
        "An intoxicated employee should not continue working."
      ),
    ],
    debrief:
      "When someone is unfit for work, deal with the immediate safety issue and do not minimise the risk.",
  }),
  question({
    id: "sjt-79",
    competencyIds: ["collaborative", "taking-ownership"],
    scenario:
      "You manage a five-person project team. One experienced member says another member has been undermining her with sarcastic comments and says she no longer wants to work with them.",
    options: [
      option(
        "a",
        "Tell her the team needs her and she should rise above it.",
        "inefficient",
        "This may encourage her to stay, but it does not address the conflict."
      ),
      option(
        "b",
        "Wait until you personally hear a comment before taking action.",
        "counterproductive",
        "This ignores a current concern and shows poor initiative."
      ),
      option(
        "c",
        "Sit down with the other team member and ask for their side.",
        "fairly-efficient",
        "This gathers more information, but it only involves one side of the issue."
      ),
      option(
        "d",
        "Sit both team members down to discuss and resolve the issue before continuing the project.",
        "efficient",
        "This handles the conflict directly and maturely with both people involved."
      ),
    ],
    debrief:
      "Team conflict needs active, fair resolution before it damages the work.",
  }),
  question({
    id: "sjt-80",
    competencyIds: ["taking-ownership", "collaborative"],
    scenario:
      "Your boss likes your presentation design but says it lacks statistics and financial data that are crucial. It is being presented this afternoon and you may not have enough research ready.",
    options: [
      option(
        "a",
        "Explain the time pressure and ask your boss for ideas on how to add the information in time.",
        "fairly-efficient",
        "This is honest and seeks advice, but it still relies heavily on your boss."
      ),
      option(
        "b",
        "Say you cannot add the information now, but you can answer questions afterwards.",
        "inefficient",
        "This does not fix the missing information in the presentation."
      ),
      option(
        "c",
        "Ignore the concern and present the slides as they are.",
        "counterproductive",
        "This disregards important feedback and leaves the presentation weaker."
      ),
      option(
        "d",
        "Ask colleagues to help gather the extra information so it can be added before the presentation.",
        "efficient",
        "This uses teamwork to improve the work within the time available."
      ),
    ],
    debrief:
      "When quality matters and time is short, ask for help and focus on the missing essentials.",
  }),
];

const nationalSiftQuestion = (
  sourceQuestion,
  id,
  competencyIds,
  scenario,
  options,
  debrief
) =>
  question({
    id,
    competencyIds,
    scenario,
    options: options.map(([optionId, text, rating, explanation]) =>
      option(optionId, text, rating, explanation)
    ),
    debrief: `2024 National Sift Q${sourceQuestion}. ${debrief}`,
  });

const nationalSiftQuestionsOne = [
  nationalSiftQuestion(
    1,
    "sjt-81",
    ["public-service", "respect-empathy"],
    "At 11:30am on patrol, a resident complains that loud music from next door is stopping him sleeping after night shifts. He says he will kick the door down and smash the music player if police do nothing.",
    [
      [
        "a",
        "Ask your colleague to speak to the neighbour and demand the music is turned off or they will be arrested.",
        "inefficient",
        "This tries to deal with the noise but uses threats too quickly and risks escalation.",
      ],
      [
        "b",
        "Reassure the resident, say you will speak to the neighbour, and warn him not to take matters into his own hands.",
        "fairly-efficient",
        "This addresses the resident's threat and the noise, but it does not build the best solution between both neighbours.",
      ],
      [
        "c",
        "Tell the resident there is not much you can do because it is daytime, but threaten the neighbour if they do not turn it down.",
        "counterproductive",
        "This dismisses the concern and then uses an aggressive approach with the neighbour.",
      ],
      [
        "d",
        "Explain the sleep issue to the neighbour, ask for the volume to be adjusted, and return later to check the noise level.",
        "efficient",
        "This is calm, practical, and seeks a workable solution for both residents.",
      ],
    ],
    "The best response de-escalates the threat, treats both neighbours fairly, and follows up."
  ),
  nationalSiftQuestion(
    2,
    "sjt-82",
    ["public-service", "respect-empathy"],
    "Off duty on a train after a night out, you see a distressed passenger accusing people of stealing her phone and demanding that passengers empty their pockets.",
    [
      [
        "a",
        "Say you are an off-duty officer and threaten to have her arrested if she carries on.",
        "counterproductive",
        "This is likely to escalate the situation and offers little support.",
      ],
      [
        "b",
        "Say you will call ahead for on-duty officers at the next station and ask her to sit down until they arrive.",
        "fairly-efficient",
        "This gets help, but it does not take enough ownership while the problem is happening now.",
      ],
      [
        "c",
        "Identify yourself, reassure her, tell her to stop harassing passengers, and help establish when and where she last had the phone.",
        "efficient",
        "This supports the distressed passenger while protecting others from confrontation.",
      ],
      [
        "d",
        "Say you are off duty and tell her to contact British Transport Police herself.",
        "counterproductive",
        "This avoids responsibility and leaves the situation to deteriorate.",
      ],
    ],
    "Even off duty, professionalism and proportionate help matter when someone is distressed in public."
  ),
  nationalSiftQuestion(
    3,
    "sjt-83",
    ["integrity", "taking-ownership"],
    "After giving evidence in court on a Friday afternoon, you realise you failed to disclose important evidence that could affect the prosecution case.",
    [
      [
        "a",
        "Immediately call your supervisor and ask them to tell the prosecution team about the error.",
        "fairly-efficient",
        "This admits the mistake, but the stronger action is to return and make sure it is corrected directly.",
      ],
      [
        "b",
        "Say nothing because you believe the accused is guilty and deserves punishment.",
        "counterproductive",
        "This is dishonest and undermines justice.",
      ],
      [
        "c",
        "Wait until Monday and then return to court to explain the error.",
        "inefficient",
        "The issue is urgent and should not wait over the weekend.",
      ],
      [
        "d",
        "Immediately return to court and tell the relevant personnel about the mistake.",
        "efficient",
        "This shows integrity, urgency, and ownership of the error.",
      ],
    ],
    "Integrity beats embarrassment. Correct evidence problems immediately."
  ),
  nationalSiftQuestion(
    4,
    "sjt-84",
    ["integrity", "public-service"],
    "After moving into a home, you find an item left by the previous owner. A friend recognises it as valuable and suggests selling it.",
    [
      [
        "a",
        "Keep the item safe and try to contact the previous owner's family so it can be returned.",
        "efficient",
        "This is honest and protects property that is not yours.",
      ],
      [
        "b",
        "Tell your friend they can take it if they want it.",
        "counterproductive",
        "The item is not yours or your friend's to take.",
      ],
      [
        "c",
        "Tell the family, but sell it and donate the money to charity if they do not reply.",
        "inefficient",
        "You still have no right to sell someone else's property.",
      ],
      [
        "d",
        "Contact the estate agent and ask them to help reach the previous owner's family.",
        "efficient",
        "This is a practical and honest way to return the item.",
      ],
    ],
    "Doing the right thing with property is a simple integrity test."
  ),
  nationalSiftQuestion(
    5,
    "sjt-85",
    ["public-service", "innovation"],
    "Residents report youths behaving anti-socially near a park. You visit and see a large group, but they are not currently doing anything wrong.",
    [
      [
        "a",
        "Tell residents the youths are not doing anything wrong and to call again if something happens.",
        "counterproductive",
        "This gives no meaningful service to residents and may increase frustration.",
      ],
      [
        "b",
        "Stand near the youths and monitor them as a show of authority.",
        "inefficient",
        "This may stop behaviour temporarily but does not build a long-term solution.",
      ],
      [
        "c",
        "Speak with the youths, be friendly, understand what they are doing, and suggest positive activities.",
        "efficient",
        "This engages the young people and seeks a constructive community solution.",
      ],
      [
        "d",
        "Move the youths out of the park and keep returning to make sure they stay away.",
        "inefficient",
        "This may simply move the problem elsewhere and does not address the cause.",
      ],
    ],
    "Public service includes solving the wider community issue, not just moving people on."
  ),
  nationalSiftQuestion(
    6,
    "sjt-86",
    ["public-service", "respect-empathy"],
    "You are guarding a cordon after a gas explosion. A resident asks to enter the evacuated street to collect a laptop needed for work, but only emergency services can pass.",
    [
      [
        "a",
        "Explain the safety reason, refuse entry, take his number, and update him when the area is safe.",
        "efficient",
        "This follows safety instructions while showing empathy and offering a practical follow-up.",
      ],
      [
        "b",
        "Ask a colleague inside the cordon to retrieve the laptop for him.",
        "inefficient",
        "This adds risk and distracts colleagues who are making the area safe.",
      ],
      [
        "c",
        "Tell him it is his fault he forgot the laptop and order him away from the cordon.",
        "counterproductive",
        "This lacks empathy and is unnecessarily dismissive.",
      ],
      [
        "d",
        "Ask someone else to guard the cordon while you escort him in quickly.",
        "counterproductive",
        "This disobeys safety instructions and puts both of you at risk.",
      ],
    ],
    "Cordon instructions protect life. Be firm, but still helpful."
  ),
  nationalSiftQuestion(
    7,
    "sjt-87",
    ["public-service", "respect-empathy"],
    "On holiday in the Lake District, you notice an elderly man near a summit bent over and struggling to breathe while others gather nearby.",
    [
      [
        "a",
        "Check on him and say you will tell emergency services when you get back down.",
        "inefficient",
        "The man needs help now, not after you finish the walk.",
      ],
      [
        "b",
        "Carry on to the summit and check whether he is still there on your way down.",
        "counterproductive",
        "This ignores a possible medical emergency.",
      ],
      [
        "c",
        "Check on him, call emergency services, offer assistance, and stay until help arrives.",
        "efficient",
        "This protects his welfare and takes ownership immediately.",
      ],
      [
        "d",
        "Assume the gathering crowd will handle it and only help later if he is still there.",
        "inefficient",
        "You should not assume someone else is dealing with a welfare risk.",
      ],
    ],
    "When someone may be medically unwell, immediate welfare action is strongest."
  ),
  nationalSiftQuestion(
    8,
    "sjt-88",
    ["respect-empathy", "public-service"],
    "You are first at a burglary scene. The homeowner left a window open and has no prevention measures, but they are visibly upset.",
    [
      [
        "a",
        "Ignore the homeowner for now and focus only on collecting evidence.",
        "inefficient",
        "Evidence matters, but the victim still needs support.",
      ],
      [
        "b",
        "Reassure them, but remind them the burglary may not have happened if the window was closed.",
        "counterproductive",
        "This blames a distressed victim at the wrong time.",
      ],
      [
        "c",
        "Tell them another colleague will speak to them while you collect evidence.",
        "inefficient",
        "As first officer there, you should communicate with and support the victim.",
      ],
      [
        "d",
        "Reassure them, explain you will help, and later suggest prevention measures such as alarms or cameras.",
        "efficient",
        "This combines empathy, investigation, and practical prevention advice.",
      ],
    ],
    "Victim care and evidence gathering both matter; do not blame the victim."
  ),
  nationalSiftQuestion(
    9,
    "sjt-89",
    ["integrity", "taking-ownership"],
    "Leaving court, you pass two colleagues openly discussing a victim from a case you are working on within earshot of passers-by.",
    [
      [
        "a",
        "Do nothing because you think no one else can hear.",
        "counterproductive",
        "Confidentiality breaches must be stopped, not ignored.",
      ],
      [
        "b",
        "Note who they are and remind them the next morning about confidentiality.",
        "fairly-efficient",
        "This challenges later, but the conversation should be stopped immediately.",
      ],
      [
        "c",
        "Approach them immediately, stop the discussion, and remind them of confidentiality.",
        "efficient",
        "This protects the victim and the case straight away.",
      ],
      [
        "d",
        "Join the conversation because the information may help your case.",
        "counterproductive",
        "This makes the confidentiality breach worse.",
      ],
    ],
    "Confidentiality risks need immediate, calm challenge."
  ),
  nationalSiftQuestion(
    10,
    "sjt-90",
    ["public-service", "respect-empathy"],
    "Two neighbours are in conflict over blocked driveway access. There is also an allegation that one tried to attack the other, though nobody was hurt.",
    [
      [
        "a",
        "Bring both neighbours together, call the matter trivial, and warn both of action if police return.",
        "counterproductive",
        "This is dismissive and likely to inflame the conflict.",
      ],
      [
        "b",
        "Speak to both separately and discuss the parking issue, but do not investigate the alleged assault.",
        "inefficient",
        "This gathers views but misses an important allegation.",
      ],
      [
        "c",
        "Speak to both separately, address the parking, warn against taking matters into their own hands, and investigate the alleged assault.",
        "efficient",
        "This is fair, calm, and covers all relevant issues.",
      ],
      [
        "d",
        "Threaten arrest over the parking and alleged attack without exploring what happened.",
        "fairly-efficient",
        "This may stop the immediate dispute, but it is too abrupt and does not understand the cause.",
      ],
    ],
    "Neighbour disputes need listening, fairness, and attention to all allegations."
  ),
  nationalSiftQuestion(
    11,
    "sjt-91",
    ["collaborative", "respect-empathy"],
    "A colleague who usually works well is falling behind on a project. Other team members are impatient and may tell the manager.",
    [
      [
        "a",
        "Tell the colleague their performance is unacceptable and must improve immediately.",
        "counterproductive",
        "This is likely to make matters worse and does not explore what is happening.",
      ],
      [
        "b",
        "Speak privately, ask whether anything is affecting them, and offer support while explaining the team's needs.",
        "efficient",
        "This supports the person and protects the project.",
      ],
      [
        "c",
        "Tell the manager and leave it to them.",
        "fairly-efficient",
        "This may resolve the issue, but you could first support the colleague directly.",
      ],
      [
        "d",
        "Do your work and then cover their work until they return to normal.",
        "inefficient",
        "This hides the problem without understanding or fixing the cause.",
      ],
    ],
    "Good teamwork means support plus honest standards."
  ),
  nationalSiftQuestion(
    12,
    "sjt-92",
    ["public-service", "respect-empathy"],
    "A motorway is closed after a serious motorcycle collision. You can only allow emergency vehicles through. An angry lorry driver says he must pass or he may lose his job.",
    [
      [
        "a",
        "Listen, explain the closure, offer to speak to his boss, and direct him to the diversion.",
        "efficient",
        "This protects safety while showing empathy and practical problem-solving.",
      ],
      [
        "b",
        "Let him through in the inside lane and warn the recovery team.",
        "counterproductive",
        "This breaches safety instructions and creates danger.",
      ],
      [
        "c",
        "Tell him he should have checked his sat-nav and direct him to the diversion.",
        "inefficient",
        "This is confrontational and does not address his concern constructively.",
      ],
      [
        "d",
        "Apologise but say there is nothing else you can do and send him to the diversion.",
        "fairly-efficient",
        "This follows safety rules, but offers little empathy or practical help.",
      ],
    ],
    "Safety instructions stay firm, but communication can still reduce frustration."
  ),
  nationalSiftQuestion(
    13,
    "sjt-93",
    ["public-service", "respect-empathy"],
    "Outside a pub, two men have scuffled and Ali has facial injuries. As you speak to Lukas, Ali starts shouting abuse at him.",
    [
      [
        "a",
        "Ask your colleague to restrain and arrest Ali immediately.",
        "inefficient",
        "Ali is shouting, not physically attacking; a calmer intervention is available.",
      ],
      [
        "b",
        "Tell Ali he will be heard after Lukas and ask your colleague to move Ali away.",
        "efficient",
        "This controls the scene and reduces escalation while preserving both accounts.",
      ],
      [
        "c",
        "Arrest Lukas for the injuries to Ali's face.",
        "inefficient",
        "You need to establish facts before arresting.",
      ],
      [
        "d",
        "Shout back at Ali and threaten arrest for affray if he interrupts.",
        "counterproductive",
        "Raising your voice is likely to escalate the situation.",
      ],
    ],
    "Separate people, calm the scene, and gather facts before deciding enforcement."
  ),
  nationalSiftQuestion(
    14,
    "sjt-94",
    ["public-service", "analysis"],
    "A shop owner says a suspected shoplifter returned items to a rack after being noticed and then tried to leave. The suspect denies wrongdoing.",
    [
      [
        "a",
        "Tell the suspect they will be charged unless they can convince you they did not intend to steal.",
        "inefficient",
        "This puts pressure on the suspect before you have analysed all evidence.",
      ],
      [
        "b",
        "Speak to the suspect, speak to the owner, and view the CCTV before deciding.",
        "efficient",
        "This gathers both accounts and checks the evidence.",
      ],
      [
        "c",
        "Tell the owner no crime occurred because nothing was actually stolen.",
        "counterproductive",
        "You should not decide before speaking to both parties and reviewing CCTV.",
      ],
      [
        "d",
        "Speak to both sides, show empathy, explain no items were taken, and suggest anti-theft measures.",
        "fairly-efficient",
        "This is constructive, but still lacks the stronger evidence review before deciding.",
      ],
    ],
    "Use evidence before drawing conclusions, especially where intent is disputed."
  ),
  nationalSiftQuestion(
    15,
    "sjt-95",
    ["respect-empathy", "taking-ownership"],
    "An angry customer calls to complain about service and starts shouting at you.",
    [
      [
        "a",
        "Say you cannot help unless they stop shouting because you have rights too.",
        "inefficient",
        "This sets a boundary but is slightly confrontational as an opening response.",
      ],
      [
        "b",
        "Listen calmly, show empathy, apologise if the company is at fault, explain what you will do, and keep them updated.",
        "efficient",
        "This de-escalates, takes ownership, and focuses on resolution.",
      ],
      [
        "c",
        "Record the complaint and pass it to your supervisor to resolve later.",
        "inefficient",
        "This delays resolution when you can take ownership now.",
      ],
      [
        "d",
        "Take their number and ask your supervisor to contact them.",
        "counterproductive",
        "This avoids the complaint and may increase the customer's anger.",
      ],
    ],
    "Customer conflict is a useful proxy for interview communication: stay calm and solve the issue."
  ),
];

const nationalSiftQuestionsTwo = [
  nationalSiftQuestion(
    16,
    "sjt-96",
    ["public-service", "courage"],
    "You attend a residential street where a suspected high-performance-car racer has crashed. Angry residents are surrounding and threatening the driver while an ambulance is on its way.",
    [
      [
        "a",
        "Push through, pull the driver out, call backup, and start arresting residents and the driver.",
        "inefficient",
        "This overreaches before evidence has been analysed and may inflame the crowd.",
      ],
      [
        "b",
        "Call for assistance, approach calmly with your colleague, ask the group to disperse, and explain you will deal with the issue.",
        "efficient",
        "This protects the driver, addresses residents, and manages the risk.",
      ],
      [
        "c",
        "Pull residents away, handcuff them for safety, then arrest the driver before reviewing CCTV.",
        "counterproductive",
        "This is overzealous and likely to anger the group.",
      ],
      [
        "d",
        "Call for immediate assistance and wait back until more officers arrive.",
        "inefficient",
        "Officer safety matters, but waiting creates risk while the driver is being threatened.",
      ],
    ],
    "Immediate risk control should be calm, proportionate, and evidence-aware."
  ),
  nationalSiftQuestion(
    17,
    "sjt-97",
    ["respect-empathy", "courage"],
    "In the canteen, two colleagues mock another probationary officer after poor training performance. He looks upset and leaves while they laugh.",
    [
      [
        "a",
        "Tell the colleagues their behaviour is unacceptable, then check on the upset colleague and offer support.",
        "efficient",
        "This challenges poor behaviour and supports the person affected.",
      ],
      [
        "b",
        "Finish your break, then later ask the upset colleague whether they need training help.",
        "inefficient",
        "This offers support but fails to challenge the bullying behaviour.",
      ],
      [
        "c",
        "Laugh along because this is just banter and he will get used to it.",
        "counterproductive",
        "This condones behaviour that has visibly upset a colleague.",
      ],
      [
        "d",
        "Report the two colleagues to a manager and leave senior officers to handle it.",
        "fairly-efficient",
        "Escalation may help, but you should also directly challenge the behaviour.",
      ],
    ],
    "Courage and empathy go together: challenge the conduct and support the person harmed."
  ),
  nationalSiftQuestion(
    18,
    "sjt-98",
    ["integrity", "taking-ownership"],
    "At a training centre, you recognise a new probationary officer and believe they may have a serious conviction from around five years ago, although you are not fully certain.",
    [
      [
        "a",
        "Confront the new officer and say you will be keeping an eye on them.",
        "counterproductive",
        "This makes an accusation without evidence and is unprofessional.",
      ],
      [
        "b",
        "Do nothing because they must have passed vetting.",
        "inefficient",
        "A genuine concern should be checked through the proper route.",
      ],
      [
        "c",
        "Tell a senior officer what you suspect and ask for vetting to look into it.",
        "fairly-efficient",
        "This raises the issue, but going directly to vetting is more efficient.",
      ],
      [
        "d",
        "Declare your knowledge directly to the vetting team so checks can be made.",
        "efficient",
        "This uses the proper channel without accusing the person directly.",
      ],
    ],
    "Handle concerns through procedure, not confrontation or assumptions."
  ),
  nationalSiftQuestion(
    19,
    "sjt-99",
    ["taking-ownership", "support-inspire"],
    "You applied for a specialist role after probation but were unsuccessful. Feedback says you need development in key areas, and you feel the successful candidate was weaker.",
    [
      [
        "a",
        "Ask the hiring manager for clarification and say you will use the feedback to improve for future vacancies.",
        "efficient",
        "This shows ownership and a willingness to develop.",
      ],
      [
        "b",
        "Tell the hiring manager why you think you were better than the selected candidate.",
        "inefficient",
        "This reacts defensively and does not use the feedback constructively.",
      ],
      [
        "c",
        "Complain above the hiring manager because you cannot see a valid reason for the decision.",
        "counterproductive",
        "This is likely to damage your reputation and shows poor response to feedback.",
      ],
      [
        "d",
        "Accept the decision and use the feedback to improve your weaker areas.",
        "fairly-efficient",
        "This is positive, though asking for clarification may give you a clearer development plan.",
      ],
    ],
    "Interview readiness includes showing you can accept feedback without defensiveness."
  ),
  nationalSiftQuestion(
    20,
    "sjt-100",
    ["innovation", "collaborative"],
    "Your company is being taken over and colleagues complain about possible role changes before hearing the details. They ask what you think.",
    [
      [
        "a",
        "Agree that nothing should change because the company had record sales.",
        "counterproductive",
        "This rejects change before understanding it.",
      ],
      [
        "b",
        "Say you will not be happy with changes but there is nothing you can do.",
        "inefficient",
        "This accepts change reluctantly without an open mind.",
      ],
      [
        "c",
        "Say everyone should keep an open mind because the changes may strengthen the organisation.",
        "efficient",
        "This is open-minded and avoids premature resistance.",
      ],
      [
        "d",
        "Say you should listen first, challenge if unsure, and give necessary changes a go.",
        "fairly-efficient",
        "This is reasonable and thoughtful, though slightly less positive than fully keeping an open mind.",
      ],
    ],
    "Open-mindedness is tested before you have all the details."
  ),
  nationalSiftQuestion(
    21,
    "sjt-101",
    ["public-service", "respect-empathy"],
    "A shop owner complains that a preacher outside his store is reducing trade. The council permits canvassing if it does not affect businesses or individuals, but the owner also says he finds the preacher's faith offensive.",
    [
      [
        "a",
        "Explain the policy, say you will help find a location that does not affect trade, and clarify that lawful religious canvassing cannot be banned just because beliefs differ.",
        "efficient",
        "This balances the needs and rights of both parties.",
      ],
      [
        "b",
        "Stop the preacher canvassing, threaten a ban, and question whether he targeted the shop because of religious differences.",
        "inefficient",
        "This does not treat the preacher impartially or seek a balanced solution.",
      ],
      [
        "c",
        "Tell the owner it is a council matter and warn him not to waste police time again.",
        "counterproductive",
        "This gives no public service and dismisses a genuine concern.",
      ],
      [
        "d",
        "Ask the preacher to move to a more suitable place and then tell the store owner what will happen.",
        "fairly-efficient",
        "This may solve the trade issue, but it does not address the owner's comments about religion.",
      ],
    ],
    "The strongest response balances rights, business impact, and impartiality."
  ),
  nationalSiftQuestion(
    22,
    "sjt-102",
    ["integrity", "courage"],
    "While gathering evidence in a burglary investigation, you see a crime-scene colleague apparently planting evidence. They say the suspect is guilty and this will make sure he gets time.",
    [
      [
        "a",
        "Walk away, think about it, and later ask colleagues what they think before deciding.",
        "counterproductive",
        "Planting evidence is so serious that no delay or informal consultation is appropriate.",
      ],
      [
        "b",
        "Tell them to remove the evidence and warn you will report them if it happens again.",
        "inefficient",
        "This does not properly address a serious integrity breach that has already happened.",
      ],
      [
        "c",
        "Remove them from the scene, remove the planted evidence, and report it when back at the station.",
        "fairly-efficient",
        "This acts, but the sergeant should be informed immediately.",
      ],
      [
        "d",
        "Immediately inform your sergeant, have the colleague removed, and follow procedure to remove the fabricated evidence.",
        "efficient",
        "This protects the investigation and deals with the misconduct straight away.",
      ],
    ],
    "Evidence integrity is absolute. Challenge and report immediately."
  ),
  nationalSiftQuestion(
    23,
    "sjt-103",
    ["integrity", "courage"],
    "A colleague wrongly berates a passer-by for littering. Later they admit the person did not drop litter; they used police authority for revenge against someone who bullied them at school.",
    [
      [
        "a",
        "Say nothing to the colleague but tell your sergeant back at the station.",
        "fairly-efficient",
        "Reporting is right, but you should also challenge the colleague directly.",
      ],
      [
        "b",
        "Tell your colleague this was an abuse of power and report the incident as soon as possible.",
        "efficient",
        "This challenges misconduct and ensures accountability.",
      ],
      [
        "c",
        "Sympathise but warn you will report them if it happens again.",
        "inefficient",
        "The abuse has already happened and needs reporting now.",
      ],
      [
        "d",
        "Say you disagree but the former bully probably deserved it.",
        "counterproductive",
        "This condones misuse of police powers.",
      ],
    ],
    "Personal history can never justify abusing police authority."
  ),
  nationalSiftQuestion(
    24,
    "sjt-104",
    ["taking-ownership", "support-inspire"],
    "A programme manager tells you your recent reports lack required detail and data, even though the project is close to schedule.",
    [
      [
        "a",
        "Apologise, ask why this was not raised earlier, and ask what data is missing.",
        "fairly-efficient",
        "This seeks detail, but the wording is slightly defensive.",
      ],
      [
        "b",
        "Say you followed her brief and should have been told sooner, then offer to redo the reports.",
        "inefficient",
        "This is defensive and does not fully embrace the feedback.",
      ],
      [
        "c",
        "Apologise, welcome the feedback, ask exactly what is missing, and assure her it will be included going forward.",
        "efficient",
        "This accepts feedback and turns it into a clear improvement plan.",
      ],
      [
        "d",
        "Ask to be removed from the project because you do not think anything is wrong with your work.",
        "counterproductive",
        "This rejects feedback and avoids responsibility.",
      ],
    ],
    "Strong candidates show they can receive feedback and improve standards."
  ),
  nationalSiftQuestion(
    25,
    "sjt-105",
    ["public-service", "respect-empathy"],
    "At the front office, a woman who may be intoxicated approaches with cuts and bruises above both eyes. She speaks Spanish and your Spanish-speaking colleague is unavailable.",
    [
      [
        "a",
        "Ask her to return later when the Spanish-speaking colleague is available.",
        "inefficient",
        "She appears vulnerable and injured, so delaying help is not enough.",
      ],
      [
        "b",
        "Make her comfortable with water and coffee while waiting for the colleague to finish.",
        "inefficient",
        "This helps a little, but misses the immediate medical concern.",
      ],
      [
        "c",
        "Arrange medical support for her injuries and try to find another Spanish speaker.",
        "efficient",
        "This protects welfare and works around the language barrier.",
      ],
      [
        "d",
        "Tell her to go home and return sober with someone who speaks English.",
        "counterproductive",
        "This ignores injuries, vulnerability, and the duty to help.",
      ],
    ],
    "Welfare comes first; language barriers require problem-solving, not refusal."
  ),
  nationalSiftQuestion(
    26,
    "sjt-106",
    ["public-service", "taking-ownership"],
    "You organised a crime-prevention event for local retailers, but a week before it you realise the first day of your family holiday clashes with the event.",
    [
      [
        "a",
        "Fully brief a colleague and ask them to run it while you are away.",
        "fairly-efficient",
        "This keeps the event running, but you personally promised the community you would deliver it.",
      ],
      [
        "b",
        "Contact attendees and try to rearrange the date after your holiday.",
        "counterproductive",
        "This may damage community confidence after strong participation.",
      ],
      [
        "c",
        "Rearrange the family holiday so you can run the event.",
        "fairly-efficient",
        "This shows commitment, though it may be more than is necessary.",
      ],
      [
        "d",
        "Run the event as scheduled and go on holiday afterwards.",
        "efficient",
        "This follows through on the commitment and supports community confidence.",
      ],
    ],
    "Public commitments matter, especially where confidence is already high."
  ),
  nationalSiftQuestion(
    27,
    "sjt-107",
    ["respect-empathy", "taking-ownership"],
    "You warned neighbours about your birthday barbecue, but just before starting you notice one neighbour has washing on the line and nobody answers the door.",
    [
      [
        "a",
        "Delay the barbecue until the neighbour returns and warn them about the smoke.",
        "fairly-efficient",
        "This is considerate, but may create an open-ended delay for your guests.",
      ],
      [
        "b",
        "Light the barbecue because you already told the neighbours.",
        "counterproductive",
        "This shows little consideration for the neighbour.",
      ],
      [
        "c",
        "Enter the neighbour's garden and bring the washing into your home.",
        "inefficient",
        "You do not have permission to enter their property.",
      ],
      [
        "d",
        "Phone the neighbour, ask when they return, and offer to take the washing in if needed.",
        "efficient",
        "This seeks permission and solves the problem with minimal disruption.",
      ],
    ],
    "Respectful problem-solving still matters off duty."
  ),
  nationalSiftQuestion(
    28,
    "sjt-108",
    ["taking-ownership", "innovation"],
    "In a factory, you always meet the hourly target, but two colleagues consistently exceed it.",
    [
      [
        "a",
        "Do nothing because you meet the target.",
        "inefficient",
        "Meeting the minimum does not mean you cannot improve.",
      ],
      [
        "b",
        "Ask your colleagues to slow down because they exceed the target.",
        "counterproductive",
        "This discourages good performance and lacks professionalism.",
      ],
      [
        "c",
        "Ask the colleagues to share techniques that may help you improve.",
        "efficient",
        "This shows openness to feedback and improvement.",
      ],
      [
        "d",
        "Look for steps you can skip so you can match them.",
        "counterproductive",
        "Skipping process is unsafe and unprofessional.",
      ],
    ],
    "Candidates should show curiosity about improving, not resentment of stronger performance."
  ),
  nationalSiftQuestion(
    29,
    "sjt-109",
    ["taking-ownership", "collaborative"],
    "As a probationary officer, you are struggling with a new information system after missing training through sickness. An experienced colleague is busy.",
    [
      [
        "a",
        "Keep trying alone because you will eventually get it.",
        "inefficient",
        "You need to recognise when to ask for help.",
      ],
      [
        "b",
        "Ask to be reassigned to a different task because you do not know the system.",
        "counterproductive",
        "This avoids learning a required system.",
      ],
      [
        "c",
        "Ask the experienced colleague whether she has time to train you.",
        "fairly-efficient",
        "This asks for help, but may burden a busy colleague.",
      ],
      [
        "d",
        "Ask your supervisor for extra training because you missed previous sessions.",
        "efficient",
        "This addresses the cause and seeks proper support.",
      ],
    ],
    "Taking ownership includes asking for the right training."
  ),
  nationalSiftQuestion(
    30,
    "sjt-110",
    ["public-service", "respect-empathy"],
    "At a sold-out sporting event, a family has genuine tickets for tomorrow rather than today. They travelled 200 miles and are shouting at the steward.",
    [
      [
        "a",
        "Tell the steward to let them in because they travelled so far.",
        "inefficient",
        "The event is at capacity and admitting them creates safety and fairness problems.",
      ],
      [
        "b",
        "Show empathy, explain they cannot enter today, support the steward, and suggest a local hotel so they can attend tomorrow.",
        "efficient",
        "This is firm on safety while offering practical help.",
      ],
      [
        "c",
        "Demand they lower their tone, blame them for not checking tickets, and turn them away.",
        "counterproductive",
        "This is confrontational and does not help the family.",
      ],
      [
        "d",
        "Escort them away and say there is nothing more you can do.",
        "inefficient",
        "This controls the area but offers little empathy or problem-solving.",
      ],
    ],
    "You can enforce a rule while still reducing the human impact of the mistake."
  ),
];

const nationalSiftQuestionsThree = [
  nationalSiftQuestion(
    31,
    "sjt-111",
    ["public-service", "taking-ownership"],
    "After a long 12-hour shift, you are the nearest patrol car to a domestic disturbance address you have already attended three times that evening for false alarms involving siblings arguing.",
    [
      [
        "a",
        "Radio what you know and return to the station so another patrol can deal with it.",
        "inefficient",
        "You are assuming it is still a false alarm and avoiding the nearest-unit responsibility.",
      ],
      [
        "b",
        "Attend and warn the siblings they will be arrested for wasting police time.",
        "counterproductive",
        "You must first investigate whether the situation has escalated.",
      ],
      [
        "c",
        "Attend as the nearest unit and investigate the report.",
        "efficient",
        "This takes ownership and avoids assumptions about possible risk.",
      ],
      [
        "d",
        "Wait briefly to see if someone else takes the call, then attend if not.",
        "inefficient",
        "Waiting lacks ownership when you are the nearest available unit.",
      ],
    ],
    "Previous false alarms do not remove the duty to assess a new call."
  ),
  nationalSiftQuestion(
    32,
    "sjt-112",
    ["integrity", "taking-ownership"],
    "You stop a speeding car with your colleague and realise the driver is your uncle.",
    [
      [
        "a",
        "Immediately tell your colleague that the driver is your uncle.",
        "efficient",
        "This declares the conflict of interest straight away.",
      ],
      [
        "b",
        "Tell your colleague you will deal with it and they can take a break.",
        "counterproductive",
        "This hides the conflict and risks unfair treatment.",
      ],
      [
        "c",
        "Say nothing, let your colleague deal with him, and return to the vehicle.",
        "counterproductive",
        "You still fail to declare the conflict.",
      ],
      [
        "d",
        "Say nothing and issue your uncle a fixed penalty yourself.",
        "counterproductive",
        "The issue is not only whether you act firmly; it is that the conflict must be declared.",
      ],
    ],
    "Conflicts of interest must be declared immediately."
  ),
  nationalSiftQuestion(
    33,
    "sjt-113",
    ["integrity", "taking-ownership"],
    "You are attached to a confidential operation targeting a national class-A drug network. A colleague outside the team asks socially what you are working on.",
    [
      [
        "a",
        "Say you should not discuss it, but share some details if you think they may help.",
        "counterproductive",
        "This breaches the confidentiality instruction.",
      ],
      [
        "b",
        "Say you cannot discuss the operation outside the team because it is confidential.",
        "efficient",
        "This is clear, polite, and protects operational security.",
      ],
      [
        "c",
        "Say you are not out to discuss work and quickly change the subject.",
        "fairly-efficient",
        "This avoids detail, but your colleague may keep asking unless you explain confidentiality.",
      ],
      [
        "d",
        "Tell them the type of operation but no further details.",
        "inefficient",
        "Even limited operational information should not be shared.",
      ],
    ],
    "Confidential operations stay confidential, even with trusted colleagues."
  ),
  nationalSiftQuestion(
    34,
    "sjt-114",
    ["respect-empathy", "courage"],
    "At a burglary scene, a colleague tells the upset homeowner the burglary would not have happened if they had a burglar alarm and better locks.",
    [
      [
        "a",
        "Ignore it until you leave, then tell your colleague the comment was inappropriate but probably accurate.",
        "inefficient",
        "This does not support the victim when they need it.",
      ],
      [
        "b",
        "Apologise to the homeowner and report the colleague later because you do not outrank them.",
        "fairly-efficient",
        "This supports the homeowner, but avoids directly challenging the behaviour.",
      ],
      [
        "c",
        "Tell your colleague to stop being insensitive because the homeowner does not need reminding.",
        "inefficient",
        "This challenges the comment but does not properly support the homeowner.",
      ],
      [
        "d",
        "Pull the colleague aside, say the comment is unacceptable, support the homeowner, and report the behaviour.",
        "efficient",
        "This challenges poor conduct and centres the victim's needs.",
      ],
    ],
    "Victim care includes challenging colleague comments that blame or shame the victim."
  ),
  nationalSiftQuestion(
    35,
    "sjt-115",
    ["public-service", "collaborative"],
    "As a PCSO heading back to the station, a colleague asks you to stay with an elderly man for about ten minutes until his taxi arrives while she helps another member of the public.",
    [
      [
        "a",
        "Say the taxi driver can assist him and continue back to the station.",
        "counterproductive",
        "This assumes someone else will help and ignores a simple public-service need.",
      ],
      [
        "b",
        "Say your colleague will likely finish giving directions before the taxi arrives.",
        "inefficient",
        "This avoids teamwork and makes assumptions.",
      ],
      [
        "c",
        "Agree to stay if your supervisor allows it.",
        "fairly-efficient",
        "This is helpful, but unless you have another urgent duty you can use judgement.",
      ],
      [
        "d",
        "Stay with the man until the taxi arrives and assist him while your colleague helps the other person.",
        "efficient",
        "This supports the public and your colleague.",
      ],
    ],
    "Small acts of practical support are part of public service."
  ),
  nationalSiftQuestion(
    36,
    "sjt-116",
    ["respect-empathy", "support-inspire"],
    "An experienced colleague says she is disillusioned with policing and is thinking of resigning.",
    [
      [
        "a",
        "Tell her it is her decision and you cannot influence it.",
        "inefficient",
        "This offers little support or emotional awareness.",
      ],
      [
        "b",
        "Tell her she would be crazy to throw away the opportunity and to pull herself together.",
        "counterproductive",
        "This dismisses her feelings and may make things worse.",
      ],
      [
        "c",
        "Say nothing because her reasons are nothing to do with you.",
        "counterproductive",
        "This ignores a colleague asking for support.",
      ],
      [
        "d",
        "Listen to her concerns, offer support, and remind her how her work helps the community and police service.",
        "efficient",
        "This is supportive and helps her reconnect with purpose.",
      ],
    ],
    "Supportive colleagues listen before trying to fix the whole problem."
  ),
  nationalSiftQuestion(
    37,
    "sjt-117",
    ["integrity", "taking-ownership"],
    "You realise you made a significant mistake on an important case because you did not follow your manager's clear brief while under heavy workload pressure.",
    [
      [
        "a",
        "Stop work, tell your manager, apologise, fix it, and share the learning with colleagues.",
        "efficient",
        "This owns the mistake, corrects it, and helps prevent repeat errors.",
      ],
      [
        "b",
        "Carry on and hope nobody notices, then ask for help with workload.",
        "counterproductive",
        "This hides a significant mistake and lacks integrity.",
      ],
      [
        "c",
        "Tell your manager about the mistake and workload pressure, then ask what to do next.",
        "fairly-efficient",
        "This is honest, though it takes less ownership than proposing and doing the fix.",
      ],
      [
        "d",
        "Work extra hours to fix it yourself and tell nobody because you can rectify it.",
        "inefficient",
        "You still need to admit the error so learning and oversight can happen.",
      ],
    ],
    "Real ownership is honest correction plus learning."
  ),
  nationalSiftQuestion(
    38,
    "sjt-118",
    ["integrity", "taking-ownership"],
    "At home you open a thank-you letter from a member of the public you helped after a road accident. It includes a blank cheque for 150 pounds and a phone number.",
    [
      [
        "a",
        "Call to thank her and accept the cheque for a family holiday.",
        "counterproductive",
        "Police officers must not accept gifts from members of the public.",
      ],
      [
        "b",
        "Refuse the cheque but suggest she donate to a charity you personally support.",
        "counterproductive",
        "You should not direct financial benefit toward a cause you personally choose.",
      ],
      [
        "c",
        "Call your superior, then contact her to refuse the cheque and destroy it.",
        "fairly-efficient",
        "This refuses the gift, but the record and destruction should happen securely at the station.",
      ],
      [
        "d",
        "Take the letter and cheque to the station, speak to your superior, refuse the gift from there, and destroy the cheque securely with a witness.",
        "efficient",
        "This keeps a proper record and handles the cheque transparently.",
      ],
    ],
    "Gift handling is a classic integrity test: record it and refuse it properly."
  ),
  nationalSiftQuestion(
    39,
    "sjt-119",
    ["respect-empathy", "public-service"],
    "Working in a pub near last orders, a drunk regular accuses you of taking his drink while he went to the toilet, although you saw him finish it.",
    [
      [
        "a",
        "Say you are surprised he can remember anything given how much he has drunk.",
        "counterproductive",
        "This insults him and escalates the situation.",
      ],
      [
        "b",
        "Tell him directly that he is lying because you watched him finish it.",
        "counterproductive",
        "Calling him a liar is likely to inflame the issue.",
      ],
      [
        "c",
        "Say you are not calling him a liar, but you believe he is mistaken and you saw him finish it.",
        "efficient",
        "This corrects the facts while using de-escalating language.",
      ],
      [
        "d",
        "Say you are not paid to be abused and will get the manager.",
        "inefficient",
        "A manager may be needed later, but you should first try to de-escalate.",
      ],
    ],
    "De-escalation often depends on choosing careful words."
  ),
  nationalSiftQuestion(
    41,
    "sjt-120",
    ["public-service", "integrity"],
    "A dog owner assaulted a man who had tried to steal his dog, then lunged again and knocked your colleague over. You restrain and handcuff him while the injured man is dealt with.",
    [
      [
        "a",
        "Arrest him for assaulting a police officer and call another vehicle.",
        "fairly-efficient",
        "Custody may be appropriate, but this misses the wider assault context and impartial explanation.",
      ],
      [
        "b",
        "Tell him you understand and will release him with a warning once the other man is removed.",
        "counterproductive",
        "This condones assault and fails to treat both parties fairly.",
      ],
      [
        "c",
        "Listen, explain that his actions were unacceptable, arrest him for assault, and say the attempted theft will also be investigated.",
        "efficient",
        "This is empathetic but impartial, dealing with all offences fairly.",
      ],
      [
        "d",
        "Berate him, threaten arrest for further outbursts, and say you will try to get him off charges.",
        "counterproductive",
        "This is both inflammatory and improper.",
      ],
    ],
    "You can understand someone's anger without excusing unlawful violence."
  ),
  nationalSiftQuestion(
    43,
    "sjt-121",
    ["taking-ownership", "innovation"],
    "A new computer system has been introduced. After a week, you are still struggling with parts of it while colleagues seem comfortable, and the station is very busy.",
    [
      [
        "a",
        "Ask your sergeant if you can keep using the old system.",
        "inefficient",
        "The new system will become standard and you need to adapt.",
      ],
      [
        "b",
        "Keep trying alone because you will get there eventually.",
        "counterproductive",
        "This delays learning and ignores the need to ask for help.",
      ],
      [
        "c",
        "Be open with your sergeant and ask for extra training.",
        "efficient",
        "This recognises the issue and seeks proper development.",
      ],
      [
        "d",
        "Ask a colleague to coach you during work.",
        "fairly-efficient",
        "This asks for help, but the busy station makes formal training a better option.",
      ],
    ],
    "Ask for support early when a system affects service quality."
  ),
  nationalSiftQuestion(
    44,
    "sjt-122",
    ["respect-empathy", "courage"],
    "In a briefing, a senior officer dismisses a new officer's question, saying young officers should keep quiet and calling it a daft question. The new officer looks upset.",
    [
      [
        "a",
        "Stand up in the meeting and rebuke the senior officer in front of everyone.",
        "counterproductive",
        "The behaviour needs challenge, but public confrontation may escalate things.",
      ],
      [
        "b",
        "After the briefing, support the new officer and ask whether they want to take it further.",
        "fairly-efficient",
        "This supports the new officer, but does not fully challenge the senior officer.",
      ],
      [
        "c",
        "Support the new officer, then privately tell the senior officer the comment was harsh and an apology is needed.",
        "efficient",
        "This supports the affected person and challenges the behaviour proportionately.",
      ],
      [
        "d",
        "Tell the new officer not to take it to heart because the senior officer does this to new people.",
        "inefficient",
        "This normalises poor behaviour instead of challenging it.",
      ],
    ],
    "Challenge poor treatment in a way that supports the person and manages escalation."
  ),
  nationalSiftQuestion(
    45,
    "sjt-123",
    ["public-service", "analysis"],
    "Anti-social behaviour has suddenly increased around a village shopping centre, with reports of intimidation, foul language, and some shoplifting, but little solid evidence.",
    [
      [
        "a",
        "Speak to parents and warn that legal action will follow if incidents continue.",
        "inefficient",
        "You need to investigate and understand the issue before approaching parents.",
      ],
      [
        "b",
        "Advise banning everyone under 18 unless accompanied by an adult.",
        "counterproductive",
        "This is disproportionate and unfair.",
      ],
      [
        "c",
        "Speak directly with the teenagers to understand why they are there and encourage positive activities.",
        "fairly-efficient",
        "This engages them constructively, but a wider root-cause analysis is stronger.",
      ],
      [
        "d",
        "Analyse what has caused the sudden increase before deciding corrective measures.",
        "efficient",
        "This seeks the root cause and a fair solution for shoppers and teenagers.",
      ],
    ],
    "Analyse the cause before choosing a response to community problems."
  ),
];

const nationalSiftQuestionsFour = [
  nationalSiftQuestion(
    46,
    "sjt-124",
    ["public-service", "integrity"],
    "At an accident, CCTV shows a white car jumped a red light and hit a red car. The red-car driver then dragged the other driver out and punched them before passers-by separated them.",
    [
      [
        "a",
        "Check whether the red-car driver is injured and say the white-car driver will be charged with reckless driving.",
        "inefficient",
        "This ignores the red-car driver's assault.",
      ],
      [
        "b",
        "Check welfare, acknowledge the crash, explain assault is not acceptable, and say they may be prosecuted.",
        "efficient",
        "This treats both incidents fairly and impartially.",
      ],
      [
        "c",
        "Say the white-car driver was at fault, so you will not follow up on the assault.",
        "counterproductive",
        "This fails to apply the law impartially.",
      ],
      [
        "d",
        "Focus on the assault and likely arrest, then mention the white-car driver may be prosecuted too.",
        "fairly-efficient",
        "This is mostly right, but more abrupt and less balanced than the strongest response.",
      ],
    ],
    "Impartiality means dealing with both the collision and the assault."
  ),
  nationalSiftQuestion(
    47,
    "sjt-125",
    ["integrity", "courage"],
    "Before interviewing a burglary suspect, you cannot find evidence for the arrest. The arresting officer says no evidence is needed because the suspect has previous form.",
    [
      [
        "a",
        "Say you cannot interview on a hunch, but agree to hold the suspect for 24 hours while evidence is found.",
        "counterproductive",
        "This still misuses custody without evidence.",
      ],
      [
        "b",
        "Say it is inappropriate to hold someone without evidence and release them immediately.",
        "inefficient",
        "Release is right, but the officer's conduct also needs addressing.",
      ],
      [
        "c",
        "Say the conduct lacks integrity, report it to a superior, and release the suspect immediately.",
        "efficient",
        "This protects the suspect's rights and addresses misconduct.",
      ],
      [
        "d",
        "Start the interview to seek a confession while the officer looks for evidence.",
        "counterproductive",
        "This continues an improper process based on assumption.",
      ],
    ],
    "Evidence comes before custody and interview decisions."
  ),
  nationalSiftQuestion(
    49,
    "sjt-126",
    ["respect-empathy", "integrity"],
    "In a senior managers' meeting, you see Mike repeatedly putting his hand on Suzy's back and shoulders. Suzy appears very uncomfortable.",
    [
      [
        "a",
        "Watch Mike carefully to see whether he does anything else.",
        "inefficient",
        "This does nothing to support Suzy or clarify what happened.",
      ],
      [
        "b",
        "Speak to Suzy after the meeting, ask about what you saw, and offer support.",
        "efficient",
        "This checks with the person affected before deciding next steps.",
      ],
      [
        "c",
        "Take Mike aside after the meeting and tell him you noticed inappropriate behaviour.",
        "fairly-efficient",
        "This may be needed, but you should first check Suzy's perspective.",
      ],
      [
        "d",
        "Interrupt the meeting and challenge Mike immediately.",
        "counterproductive",
        "This assumes the full context and may make Suzy more uncomfortable.",
      ],
    ],
    "Support the person affected before making assumptions about what they want."
  ),
  nationalSiftQuestion(
    50,
    "sjt-127",
    ["integrity", "taking-ownership"],
    "After submitting your police application, you realise you omitted a fixed penalty notice for a driving offence you have always felt was unfair.",
    [
      [
        "a",
        "Leave it out because it was minor and you can discuss it at interview if necessary.",
        "counterproductive",
        "Knowingly leaving incorrect information is dishonest.",
      ],
      [
        "b",
        "Telephone the force HR team immediately and ask whether you can resubmit with the information included.",
        "efficient",
        "This declares the error quickly and directly.",
      ],
      [
        "c",
        "Do nothing because it was years ago and may not be found.",
        "inefficient",
        "This lacks integrity and could seriously damage the application if discovered.",
      ],
      [
        "d",
        "Email HR with the omitted information and your application reference.",
        "fairly-efficient",
        "This declares it, but a call may resolve it faster.",
      ],
    ],
    "Application honesty matters even when the omitted detail feels minor."
  ),
  nationalSiftQuestion(
    51,
    "sjt-128",
    ["integrity", "courage"],
    "On a train during an evening out, your colleague shows a warrant card and asks whether he has to pay. When told he must pay, he complains that he risks his life for people like the conductor.",
    [
      [
        "a",
        "Challenge your colleague and say expecting free travel because of being police is unacceptable.",
        "efficient",
        "This challenges a misuse of position.",
      ],
      [
        "b",
        "Laugh and say it was a good try but not to do it again.",
        "inefficient",
        "This minimises behaviour that reflects badly on policing.",
      ],
      [
        "c",
        "Say the conduct was a blatant abuse of power and completely inappropriate.",
        "efficient",
        "This directly challenges the integrity issue.",
      ],
      [
        "d",
        "Tell him the conductor was doing his job and to chill out because you are on a night out.",
        "inefficient",
        "This lightly challenges the behaviour but does not address its seriousness.",
      ],
    ],
    "Police identity should never be used for personal advantage."
  ),
  nationalSiftQuestion(
    52,
    "sjt-129",
    ["public-service", "respect-empathy"],
    "On the way to a shoplifting call, you see an elderly man across the road looking unsteady. A younger man has stopped and is speaking with him.",
    [
      [
        "a",
        "Call assistance, quickly check what is wrong, and say help is on the way.",
        "fairly-efficient",
        "This checks welfare, but may not stay long enough if help is needed.",
      ],
      [
        "b",
        "Continue to the shoplifting call because someone is already speaking with him.",
        "inefficient",
        "You are assuming he is being properly helped.",
      ],
      [
        "c",
        "Send your colleague to the shoplifting call, check whether the elderly man needs help, and stay if assistance is required.",
        "efficient",
        "This manages both incidents and protects welfare.",
      ],
      [
        "d",
        "Assume it is just old age and continue to the more important task.",
        "counterproductive",
        "This is dismissive and ignores a possible welfare risk.",
      ],
    ],
    "Balance priorities by sharing tasks and checking welfare."
  ),
  nationalSiftQuestion(
    53,
    "sjt-130",
    ["public-service", "taking-ownership"],
    "As senior staff in an electronics shop, you handle an angry customer whose month-old TV has failed. A colleague refused a replacement because there is no warranty and spoke poorly to the customer.",
    [
      [
        "a",
        "Apologise and take details so the manager can call when back from holiday.",
        "inefficient",
        "This delays action and may not prevent further frustration.",
      ],
      [
        "b",
        "Apologise for the colleague but repeat that no warranty means no replacement.",
        "counterproductive",
        "This does not resolve the customer's concern.",
      ],
      [
        "c",
        "Apologise, offer a discount on a new TV, and say the manager will hear about the colleague's service.",
        "inefficient",
        "This still does not properly resolve the faulty recent purchase.",
      ],
      [
        "d",
        "Listen, apologise, replace the TV, and recommend customer-service coaching for the colleague.",
        "efficient",
        "This takes ownership and weighs the customer and business impact.",
      ],
    ],
    "Strong judgement weighs policy, fairness, and reputational impact."
  ),
  nationalSiftQuestion(
    54,
    "sjt-131",
    ["public-service", "respect-empathy"],
    "After work in a shopping centre, you overhear a man threatening a pregnant woman with a pushchair after she moved ahead of him in the lift queue.",
    [
      [
        "a",
        "Continue to your car and tell security on the way out.",
        "counterproductive",
        "The threat may escalate before security arrives.",
      ],
      [
        "b",
        "Call security, tell the man to apologise, say he will be detained for police, and escort the woman away.",
        "inefficient",
        "Calling security is sensible, but this assumes the man is solely at fault and over-escalates.",
      ],
      [
        "c",
        "Call security as a precaution, speak to both, listen to their concerns, ask the man to stop threats, and help the woman use another lift safely.",
        "efficient",
        "This is impartial, practical, and protects safety.",
      ],
      [
        "d",
        "Order both to stop, remove and ban the man, and report it to police.",
        "counterproductive",
        "This is disproportionate and does not seek a fair solution.",
      ],
    ],
    "When both sides have concerns, stay impartial while stopping threats."
  ),
  nationalSiftQuestion(
    55,
    "sjt-132",
    ["public-service", "respect-empathy"],
    "You visit James about an assault on Derek, who recently left prison for serious assaults. James admits attacking Derek and says he did everyone a favour.",
    [
      [
        "a",
        "Say you understand his anger at the court sentence, but Derek is a thug and James had no right to attack him.",
        "inefficient",
        "This challenges the assault but is not impartial in its language about Derek.",
      ],
      [
        "b",
        "Say people cannot attack others regardless of their reasoning.",
        "fairly-efficient",
        "This is correct, but it does not show much empathy for James's past harm.",
      ],
      [
        "c",
        "Say you agree Derek deserved it, but unfortunately it is not your decision.",
        "counterproductive",
        "This condones revenge violence and lacks impartiality.",
      ],
      [
        "d",
        "Say you understand James is hurt, but taking revenge makes matters worse and assaults cannot be allowed.",
        "efficient",
        "This combines empathy with clear boundaries and impartiality.",
      ],
    ],
    "Empathy for a victim does not mean excusing revenge."
  ),
  nationalSiftQuestion(
    56,
    "sjt-133",
    ["integrity", "public-service"],
    "After an incident involving two women outside a pub, your colleague treats one woman more favourably because she is the Chief Constable's daughter.",
    [
      [
        "a",
        "Question whether her status gives you the right to treat her differently.",
        "inefficient",
        "This notices the unfairness, but it is too tentative.",
      ],
      [
        "b",
        "Agree that avoiding trouble with the Chief Constable was the right thing.",
        "counterproductive",
        "This condones unfair treatment.",
      ],
      [
        "c",
        "Tell your colleague they acted unfairly because both women were equally at fault.",
        "fairly-efficient",
        "This challenges the behaviour, but does not go as far as reporting it.",
      ],
      [
        "d",
        "Say the preferential treatment is unacceptable and report your colleague.",
        "efficient",
        "This challenges and escalates a clear impartiality breach.",
      ],
    ],
    "Status must not affect how people are treated."
  ),
  nationalSiftQuestion(
    57,
    "sjt-134",
    ["public-service", "collaborative"],
    "A local resident approaches you on patrol wanting to add to a statement he previously gave to one of your colleagues, whose name he knows.",
    [
      [
        "a",
        "Tell him he must wait until your colleague is next on patrol.",
        "counterproductive",
        "This gives no useful service and delays the statement.",
      ],
      [
        "b",
        "Radio your colleague and ask them to meet you and the resident.",
        "fairly-efficient",
        "This may work, but it is not the most efficient use of resources.",
      ],
      [
        "c",
        "Ask about the matter and offer to take the additional statement for your colleague.",
        "efficient",
        "This helps the resident and uses resources efficiently.",
      ],
      [
        "d",
        "Take him to the station so your colleague can take the statement.",
        "inefficient",
        "This is unnecessary if you can take the statement yourself.",
      ],
    ],
    "Good public service is often about not making people wait for the exact original officer."
  ),
  nationalSiftQuestion(
    58,
    "sjt-135",
    ["respect-empathy", "courage"],
    "A colleague going through a marriage breakdown says another officer has been bullying her by telling her to snap out of it, get a grip, or go sick if she is not ready.",
    [
      [
        "a",
        "Say you are horrified and will tell the sergeant when you return so they can sort Adam out.",
        "fairly-efficient",
        "This shows concern, but it gives her less voice in what happens next.",
      ],
      [
        "b",
        "Sympathise, but suggest Adam may be right that she should take time off.",
        "counterproductive",
        "This validates the bullying comments instead of supporting her.",
      ],
      [
        "c",
        "Offer full support, ask what she wants to do, and say you will challenge Adam and inform a superior because bullying is unacceptable.",
        "efficient",
        "This supports her, gives her agency, and addresses the misconduct.",
      ],
      [
        "d",
        "Tell her to confront Adam herself and contact the sergeant only if he does not stop.",
        "inefficient",
        "This puts too much burden back on the person being bullied.",
      ],
    ],
    "Support the colleague and take bullying seriously."
  ),
  nationalSiftQuestion(
    59,
    "sjt-136",
    ["innovation", "taking-ownership"],
    "On a time-sensitive production line, you have an idea that could improve productivity and efficiency.",
    [
      [
        "a",
        "Leave your workstation immediately to tell your line manager.",
        "inefficient",
        "Leaving the line could disrupt production.",
      ],
      [
        "b",
        "Do nothing because improvement ideas are not your responsibility.",
        "counterproductive",
        "This rejects improvement and open-mindedness.",
      ],
      [
        "c",
        "Wait for an appropriate time, such as a break, and raise the idea with your manager.",
        "efficient",
        "This shares the idea without disrupting current work.",
      ],
      [
        "d",
        "Run your own trial during personal time, then tell your manager if it works.",
        "fairly-efficient",
        "This shows initiative, but you should get authorisation before testing changes.",
      ],
    ],
    "Innovation should be raised through the right route and at the right time."
  ),
  nationalSiftQuestion(
    60,
    "sjt-137",
    ["public-service", "innovation"],
    "A resident reports a young man doing bike stunts on the high street. Your colleague says someone has already been knocked over, and the resident suggests the local bike park.",
    [
      [
        "a",
        "Observe for a while before deciding whether the stunts are dangerous.",
        "inefficient",
        "You already have evidence someone has been knocked over.",
      ],
      [
        "b",
        "Stop the activity, disperse the crowd, and tell him to find another place.",
        "inefficient",
        "This stops the risk but misses the opportunity to suggest the safer bike park.",
      ],
      [
        "c",
        "Stop the activity and suggest using the bike park, which is safer for him and the public.",
        "efficient",
        "This protects the public and gives a constructive alternative.",
      ],
      [
        "d",
        "Tell your colleague to disperse the crowd and warn the rider he will be arrested if seen again.",
        "counterproductive",
        "This is unnecessarily punitive and lacks a practical solution.",
      ],
    ],
    "A strong response stops the risk and offers a safer alternative."
  ),
];

const policeTheory = [
  {
    title: "What the rating labels mean",
    body:
      "Efficient responses solve the issue well. Fairly Efficient responses partly help but miss something. Inefficient responses fail to deal with the key issue. Counterproductive responses make things worse.",
  },
  {
    title: "What strong answers protect",
    body:
      "Strong police judgement protects safety, public confidence, fairness, evidence, professionalism, and proportionate decision-making.",
  },
  {
    title: "What weak answers often do",
    body:
      "Weak responses ignore risk, jump to force or arrest too quickly, discriminate, make unsupported accusations, or fail to challenge poor behaviour.",
  },
  {
    title: "How to review your answers",
    body:
      "After each question, say out loud why the Efficient answer works and why the Counterproductive answer would damage the situation. That is interview preparation, not just quiz practice.",
  },
];

const policeCompetencies = [
  {
    id: "public-service",
    label: "Public service",
    description:
      "Acts in the public interest, protects safety, and maintains confidence.",
  },
  {
    id: "respect-empathy",
    label: "Respect and empathy",
    description:
      "Listens, treats people fairly, and avoids discriminatory assumptions.",
  },
  {
    id: "courage",
    label: "Courage",
    description:
      "Challenges poor behaviour and takes appropriate action when something is wrong.",
  },
  {
    id: "taking-ownership",
    label: "We take ownership",
    description:
      "Accepts responsibility, corrects mistakes, and follows through properly.",
  },
  {
    id: "integrity",
    label: "Integrity",
    description:
      "Tells the truth, follows policy, and does not bend standards for convenience.",
  },
  {
    id: "collaborative",
    label: "Collaborative",
    description:
      "Works with others, resolves conflict, and supports shared standards.",
  },
  {
    id: "innovation",
    label: "Innovative and open-minded",
    description:
      "Adapts to change, considers better ways of working, and avoids closed assumptions.",
  },
  {
    id: "analysis",
    label: "Analyse critically",
    description:
      "Checks evidence, weighs causes, and avoids assumptions before deciding.",
  },
  {
    id: "support-inspire",
    label: "Support and inspire",
    description:
      "Helps colleagues improve, accepts feedback, and keeps standards high.",
  },
];

const policeSources = [
  {
    label: "Provided PDF - Police Officer Situational Judgement Tests",
    url: "https://www.how2become.com",
    note:
      "Used as the practice-test source supplied by the user for personal study.",
  },
  {
    label: "Provided PDF - Police Officer National Sift SJT Q&A 2024",
    url: "https://www.how2become.com",
    note:
      "Used as the updated National Sift SJT practice-test source supplied by the user.",
  },
  {
    label: "Join The Police - application process",
    url: "https://www.joiningthepolice.co.uk/application-process/get-ready-to-apply",
    note:
      "Used for recruitment stages, sift purpose, and online assessment context.",
  },
  {
    label: "College of Policing - Competency and Values Framework",
    url: "https://www.college.police.uk/career-learning/competency-and-values-framework-cvf",
    note: "Official CVF reference for police values and behaviours.",
  },
  {
    label: "Essex Police - police officer recruitment",
    url: "https://www.essex.police.uk/police-forces/essex-police/areas/essex-police/careers/careers/police-officer-recruitment/",
    note:
      "Official Essex Police recruitment page for force-specific application information.",
  },
];

const mockRequirements = [
  "Read the scenario and all four response options before answering.",
  "Rate every response using the four PDF-style judgement labels.",
  "Review the explanation after each question.",
  "Use the final score breakdown to identify which judgement areas need more practice.",
];

const mockTips = [
  "Efficient answers are usually calm, proportionate, fair, and practical.",
  "Fairly Efficient answers normally help, but miss a stronger step.",
  "Inefficient answers usually avoid the real issue or leave something important unresolved.",
  "Counterproductive answers make the situation worse, overreact, discriminate, or damage trust.",
];

function makePoliceSjtMock({ id, title, goal, questions, heading }) {
  return {
    id,
    editorType: "sjt",
    title,
    difficulty: "Hard",
    category: "Police SJT",
    goal,
    requirements: mockRequirements,
    tips: mockTips,
    concepts: [
      "situational judgement",
      "public service",
      "respect and empathy",
      "courage",
      "taking ownership",
      "proportionate decision-making",
    ],
    suggestedApproach: [
      "Identify the immediate risk, duty, or fairness issue.",
      "Decide whether the response solves the issue calmly and proportionately.",
      "Watch for overreaction, unsupported assumptions, ignoring the issue, or poor communication.",
      "Read the debrief and practise explaining the judgement aloud.",
    ],
    commonMistakes: [
      "Choosing the toughest response when the better answer is proportionate.",
      "Ignoring discriminatory or unprofessional behaviour.",
      "Making accusations before gathering facts.",
      "Escalating too quickly when a direct professional conversation would work.",
    ],
    expectedOutcome:
      "A realistic PDF-style SJT practice run that helps you judge each response and explain why one answer is stronger than another.",
    starter: {
      html: "",
      css: "",
      js: "",
    },
    solution: {
      html: "",
      css: "",
      js: "",
    },
    sjt: {
      answerMode: "rating",
      heading,
      disclaimer:
        "Practice only. This mock is adapted for personal study from the police SJT PDF resources you provided and is not an official Essex Police, College of Policing, or National Sift test.",
      timeLimitMinutes: questions.length >= 10 ? 20 : 10,
      format:
        "For each scenario, rate every response as Efficient, Fairly Efficient, Inefficient, or Counterproductive. The explanation appears once all four responses are rated.",
      ratingScale,
      theory: policeTheory,
      competencies: policeCompetencies,
      sources: policeSources,
      questions,
    },
  };
}

const policeLearningChallenge = {
  id: "police-learning-zone",
  editorType: "sjt-learning",
  title: "Challenge 1 - Police SJT Learning Zone",
  difficulty: "Study",
  category: "Police SJT",
  goal:
    "Build the theory behind police situational judgement before taking the PDF-style mock tests.",
  requirements: [
    "Understand what the SJT is testing.",
    "Learn the four response ratings.",
    "Review the online assessment stages described in the PDF.",
    "Practise explaining why an answer is strong or weak.",
  ],
  tips: [
    "Focus on judgement, not police law memorisation.",
    "Good answers usually protect safety, fairness, confidence, evidence, and procedure.",
    "Poor answers often ignore risk, overreact, discriminate, or avoid responsibility.",
  ],
  concepts: [
    "SJT theory",
    "police values",
    "online assessment centre",
    "competency-based interview",
    "written exercise",
    "briefing exercise",
  ],
  suggestedApproach: [
    "Read the rating model first.",
    "Review the assessment stages so the preparation feels joined up.",
    "Use the review prompts before and after each mock.",
  ],
  commonMistakes: [
    "Memorising answers without understanding the judgement pattern.",
    "Treating the harshest answer as the strongest answer.",
    "Forgetting to explain your reasoning out loud.",
  ],
  expectedOutcome:
    "A structured study base for police SJT practice and online assessment preparation.",
  starter: {
    html: "",
    css: "",
    js: "",
  },
  solution: {
    html: "",
    css: "",
    js: "",
  },
  learning: {
    intro:
      "This learning zone organises the non-question content from the PDF into the ideas you need before mock practice.",
    sections: [
      {
        title: "SJT method: risk, duty, facts, action",
        body:
          "A strong SJT answer usually follows a simple pattern: spot the risk, name your duty, separate facts from assumptions, then choose the action that solves the issue without overreacting.",
        checks: [
          "Risk: what could go wrong if nobody acts?",
          "Duty: who needs protection, fairness, support, or accountability?",
          "Facts: what do I actually know, and what am I assuming?",
          "Action: what is calm, proportionate, lawful, and practical?",
        ],
      },
      {
        title: "What the SJT is checking",
        body:
          "The SJT is checking how your decisions line up with the behaviours expected of police constables. You do not need technical policing knowledge. You need to choose responses that show sound judgement, public service, fairness, and professionalism.",
        checks: [
          "Does the response protect someone from harm?",
          "Does it treat people fairly and respectfully?",
          "Does it gather facts before accusing or escalating?",
          "Does it use police powers proportionately?",
        ],
      },
      {
        title: "The four-response rating model",
        body:
          "The PDF practice questions ask you to rate each response. Do not only look for the best answer. Learn the difference between partly useful, useless, and actively damaging responses.",
        checks: ratingScale.map((rating) => `${rating.label}: ${rating.helper}`),
      },
      {
        title: "How to think through a scenario",
        body:
          "Start by naming the risk, then the duty, then the proportionate next step. The answer that sounds toughest is often not the strongest.",
        checks: [
          "Risk: what could go wrong if nobody acts?",
          "Duty: who needs protection, fairness, or clarity?",
          "Facts: what is known, and what is only an assumption?",
          "Action: what solves the problem without overreacting?",
        ],
      },
      {
        title: "Core values to recognise",
        body:
          "The PDF's assessment section highlights values such as impartiality, integrity, public service, and transparency. In practice, these show up as fairness, honesty, clear reasoning, confidentiality, and putting the public before convenience.",
        checks: [
          "Impartiality: treat people fairly, even when views or behaviour are difficult.",
          "Integrity: tell the truth, follow policy, and own mistakes.",
          "Public service: protect safety, confidence, and welfare.",
          "Transparency: explain decisions clearly and keep appropriate records.",
        ],
      },
      {
        title: "Core competencies in plain English",
        body:
          "The PDF links assessment performance to behaviour patterns. For practice, translate the competency labels into what you would actually do in a scenario.",
        checks: [
          "Emotionally aware: stay calm, listen, and adapt your communication.",
          "Take ownership: accept responsibility, fix problems, and learn from mistakes.",
          "Collaborative: work with colleagues and resolve conflict professionally.",
          "Analyse critically: use evidence before acting or accusing.",
          "Innovative and open-minded: adapt when circumstances change.",
          "Deliver, support, and inspire: keep standards high while helping others perform.",
        ],
      },
      {
        title: "Interview-ready explanation habit",
        body:
          "After each mock question, explain the answer aloud. This turns quiz practice into interview preparation because you practise the reasoning behind the judgement.",
        checks: [
          "I chose Efficient because...",
          "This is only Fairly Efficient because it misses...",
          "This is Inefficient because it fails to...",
          "This is Counterproductive because it would make... worse.",
        ],
      },
      {
        title: "Written and briefing exercise mindset",
        body:
          "The online assessment is not only about choosing answers. Written and briefing exercises reward structured reasoning, using only the information provided, and explaining why your decisions support police values.",
        checks: [
          "Use the provided facts only; do not invent missing details.",
          "Prioritise safety, vulnerability, public confidence, and fairness.",
          "Explain the reason behind each decision.",
          "Structure responses so an assessor can follow your thinking quickly.",
        ],
      },
      {
        title: "Force process check",
        body:
          "The exact recruitment process can vary between forces. Use this track to build judgement and explanation skill, then compare it with the current Essex Police and Join The Police instructions before any live assessment.",
        checks: [
          "Check whether the force uses a sift, SJT, video interview, written exercise, briefing exercise, or final interview.",
          "Use the mock scores to find judgement weaknesses, not to memorise answers.",
          "Keep your examples ready for values-based and competency-based interview questions.",
          "Before the live test, confirm timing, device, ID, and whether notes or breaks are allowed.",
        ],
      },
    ],
    assessmentStages: [
      {
        title: "Application and sift",
        body:
          "The exact process varies by force. The sift stage may include decision-making and behaviour tests, including SJT-style questions, before online assessment invitations.",
      },
      {
        title: "SJT-style decision making",
        body:
          "The PDF describes SJT scenarios where you judge the effectiveness of responses. The practice skill is the same: choose calm, fair, proportionate actions that match police values.",
      },
      {
        title: "Competency-based interview",
        body:
          "Current public recruitment guidance describes a video interview with questions about how you have handled situations in the past. Prepare examples that show values, ownership, and judgement.",
      },
      {
        title: "Written exercise",
        body:
          "The written exercise asks you to act as a PC and produce an urgent written task using only the information provided. The key is structure, evidence, and not inventing facts.",
      },
      {
        title: "Briefing exercise",
        body:
          "The briefing exercise gives a scenario, preparation time, and follow-up questions. Strong answers need clear reasoning, structure, and links to competencies and values.",
      },
      {
        title: "Medical, fitness, vetting, and decision",
        body:
          "Later stages can include medical and fitness tests, vetting, biometric checks, references, and a force decision. Some forces may also use a final interview.",
      },
    ],
    reviewPrompts: [
      "What risk did I identify first?",
      "Which answer protected public confidence most?",
      "Did I avoid making assumptions?",
      "Could I explain why the worst answer damages the situation?",
    ],
    sources: policeSources,
  },
};

export const policeChallenges = [
  policeLearningChallenge,
  makePoliceSjtMock({
    id: "essex-police-sjt-mock-01",
    title: "Challenge 2 - PDF SJT Mock 1: questions 1-15",
    heading: "Police SJT PDF mock 1",
    goal:
      "Practise the first 15 PDF-style situational judgement questions by rating each response.",
    questions: pdfPracticeQuestions,
  }),
  makePoliceSjtMock({
    id: "essex-police-sjt-mock-02",
    title: "Challenge 3 - PDF SJT Mock 2: questions 16-30",
    heading: "Police SJT PDF mock 2",
    goal:
      "Practise PDF-style situational judgement questions 16-30 with immediate rating feedback.",
    questions: pdfPracticeQuestionsTwo,
  }),
  makePoliceSjtMock({
    id: "essex-police-sjt-mock-03",
    title: "Challenge 4 - PDF SJT Mock 3: questions 31-45",
    heading: "Police SJT PDF mock 3",
    goal:
      "Practise PDF-style situational judgement questions 31-45 with score breakdowns by focus area.",
    questions: pdfPracticeQuestionsThree,
  }),
  makePoliceSjtMock({
    id: "essex-police-sjt-mock-04",
    title: "Challenge 5 - PDF SJT Mock 4: questions 46-60",
    heading: "Police SJT PDF mock 4",
    goal:
      "Practise the final five police-specific PDF questions and the first ten non-specific SJT questions.",
    questions: pdfPracticeQuestionsFour,
  }),
  makePoliceSjtMock({
    id: "essex-police-sjt-mock-05",
    title: "Challenge 6 - PDF SJT Mock 5: questions 61-75",
    heading: "Police SJT PDF mock 5",
    goal:
      "Practise non-specific PDF SJT questions 11-25 with immediate explanation and score feedback.",
    questions: pdfPracticeQuestionsFive,
  }),
  makePoliceSjtMock({
    id: "essex-police-sjt-final-review",
    title: "Challenge 7 - Final PDF SJT review: questions 76-80",
    heading: "Police SJT final review",
    goal:
      "Finish the remaining five PDF questions as a short review drill focused on judgement under pressure.",
    questions: pdfPracticeQuestionsSix,
  }),
  makePoliceSjtMock({
    id: "national-sift-2024-mock-01",
    title: "Challenge 8 - National Sift 2024 Mock 1",
    heading: "National Sift 2024 mock 1",
    goal:
      "Practise 15 updated National Sift-style SJT scenarios with rating feedback.",
    questions: nationalSiftQuestionsOne,
  }),
  makePoliceSjtMock({
    id: "national-sift-2024-mock-02",
    title: "Challenge 9 - National Sift 2024 Mock 2",
    heading: "National Sift 2024 mock 2",
    goal:
      "Practise the next 15 updated National Sift-style SJT scenarios with immediate explanations.",
    questions: nationalSiftQuestionsTwo,
  }),
  makePoliceSjtMock({
    id: "national-sift-2024-mock-03",
    title: "Challenge 10 - National Sift 2024 Mock 3: unique questions",
    heading: "National Sift 2024 mock 3",
    goal:
      "Practise 13 unique scenarios from the third National Sift 2024 test, with duplicates removed.",
    questions: nationalSiftQuestionsThree,
  }),
  makePoliceSjtMock({
    id: "national-sift-2024-mock-04",
    title: "Challenge 11 - National Sift 2024 Mock 4: unique questions",
    heading: "National Sift 2024 mock 4",
    goal:
      "Practise 14 unique scenarios from the fourth National Sift 2024 test, with duplicates removed.",
    questions: nationalSiftQuestionsFour,
  }),
];
