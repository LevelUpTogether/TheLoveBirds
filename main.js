/* check if there are already stored truth and dare items and give users the choice to use them or set default */
if(localStorage.getItem("truths") && localStorage.getItem("dares")) {
    if(confirm('Do you want to use your saved truths and dares?')) {
        var truthsGet = localStorage.getItem("truths");
        var truths = JSON.parse(truthsGet);

        var daresGet = localStorage.getItem("dares");
        var dares = JSON.parse(daresGet);
    } else {
        localStorage.clear();
        var truths = new Array(
    "🫦 What's your love language... and how would you *show* it physically?",
    "💗 What's your love language — and how can I speak it better?",
    "🔥 What turns you on in a way you’re afraid to admit?",
    "🩸 Have you ever wanted someone to mark you during sex?",
    "🕯️ What's one fantasy you’ve never said aloud?",
    "⛓️ Would you let someone tie you up and take control completely?",
    "🪞 When you see yourself naked, what’s your dirtiest thought?",
    "🧷 Would you want me to hurt you a little, or a lot?",
    "🌑 Have you ever wanted to be watched — or to watch?",
    "👁️‍🗨️ If you were blindfolded and bound, what would you beg me to do?",
    "👠 What clothing item makes you feel the most powerful — or submissive?",
    "🦂 Would you ever let me tease you to the edge… and not let you finish?",
    "💋 Have you ever fantasized about being used — completely?",
    "🧴 What’s one smell, texture, or sensation that instantly turns you on?",
    "🫣 Would you rather beg for release or be punished for misbehaving?",
    "🕸️ What's your darkest erotic fantasy? No filters.",
    "💄 If we role-played, who would you be — innocent, villain, slave?",
    "🪢 If I whispered 'stay still, don’t move'... would you obey?",
    "🫂 What’s the kink you’re most ashamed but excited by?",
    "👅 Tell me one thing you'd do to my body if there were no rules.",
    "🖤 Do you crave dominance, submission, or both?",
    "🫀 Would you rather be worshiped... or used?",
    "🕶️ How far would you go if we had a 'no safe word' night?",
    "🩸 Would you ever let pain turn into pleasure?",
    "🐍 If I said 'get on your knees now'... what would your first thought be?",
    "👀 What do you fantasize about when you're alone... the dark version?",
    "🪞 When you look at me... what’s the first thing you want to *do*?",
    "🫦 Tell me what you want me to whisper to you... when you're trembling.",
    "🫶 What is one part of your body you wish I’d explore longer?",
    "🌑 If we had one night with no rules and no shame, what would happen?",
    "💞 What's one thing you find hard in relationships?",
    "🌹 What's something beautiful you bring into relationships?",
    "👀 What first drew you to me — be honest?",
    "💫 What’s a nonsexual thing that unexpectedly arouses you?",
    "🔄 Have you had sex with more than one person in a day?",
    "⏳ What’s the biggest age gap you’ve had between you and a partner?",
    "😳 What’s your most awkward or embarrassing sex moment?",
    "😈 Ever cheated — and did that turn you on?",
    "🕯️ Ever turned down a sexual moment and regretted it later?",
    "🫢 Ever hooked up with someone you wish you hadn’t?",
    "📖 When did you *really* understand what sex was?",
    "🎭 Ever faked an orgasm? Why?",
    "🙊 Have you ever told someone you faked it?",
    "😶 Has anyone admitted to faking it with *you*?",
    "📵 Ever sent a sexy message to the wrong person?",
    "🚿 How do you really feel about shower sex?",
    "🌊 What about sex at the beach or pool — fantasy or mess?",
    "🎶 What song instantly puts you in a sexy mood?",
    "📺 What's the hottest scene you've ever seen in a show or movie?",
    "🌙 When does your libido spike the most?",
    "⚡ What was your sexual awakening like?",
    "🔁 What’s the most orgasms you've had in a day?",
    "⏱️ What about in one hour?",
    "🫀 If we opened our relationship, who would you sleep with first?",
    "🕊️ Who would be in your dream group fantasy?",
    "🖤 If you threw a sex party, who (famous or not) would be on the list?",
    "📆 What stands out from the first time you ever had sex?",
    "🫧 Who was your first time with — and what do you remember most?",
    "🌀 Ever had a sex dream that confused or surprised you?",
    "🛌 Have you ever dreamed about having sex with *me*?",
    "🔄 If you could repeat a night with an old flame, would you?",
    "👁️ Would you watch me with someone else if I wanted that?",
    "🧸 Thoughts on sex toys — curious or committed?",
    "📦 Is there one toy you secretly want to try with me?",
    "💖 Favorite kind of toy for solo or shared play?",
    "🌡️ What’s one fantasy you’ve never dared to say out loud?",
    "💌 What memory from *us* still makes you ache in the best way?",
    "🎭 Describe your ideal role-play night — go all out.",
    "🎯 What do you think I’m best at in bed?",
    "💼 Ever gotten turned on while working or on a Zoom call?",
    "🧳 Ever had a one-night stand while traveling?",
    "🌀 Have you ever gone back to an ex for a hookup?",
    "👅 Do you prefer to use tongue or fingers — and where?",
    "♻️ How do you feel about open relationships or swapping?",
    "👔 What's something about me (non-sexual) that turns you on?",
    "👣 Would you want to go to a sex-positive party with me?",
    "🧻 What's the most surprising place you’ve masturbated?",
    "🔁 Thoughts on mutual self-pleasure — turn-on or just okay?",
    "✈️ Ever had sex on a plane?",
    "🧨 What’s your number one sexual bucket list item?",
    "🚪 Ever been walked in on during sex?",
    "🙈 Ever caught someone else in the act?",
    "🪟 Ever had sex in a semi-public or risky place?",
    "🎥 Do you watch porn? What themes turn you on most?",
    "🧠 What’s the naughtiest thought you’ve had about me?",
    "😐 What do most people love in bed that you secretly don’t?",
    "💎 What sexual acts or touches are totally underrated?",
    "🎓 Ever fantasized about a teacher, coach, or boss?",
    "📝 Do you remember every name of your past partners?",
    "💋 First-date kiss — yes or no?",
    "🛏️ First-date sex — thrilling or too soon?",
    "🧃 Where do you love being kissed or sucked most?",
    "🎀 What spot on your body craves the most attention?",
    "🔗 Would you rather take control or surrender to me in bed?",
    "🐾 Do you like nibbling or light bites? If so, where?",
    "💎 How do you feel about nipple play?",
    "🍑 Be honest: are you into butt stuff?",
    "🎮 What’s your favorite toy to use on me?",
    "👫 What’s your favorite toy to use *together*?",
    "⛓️ What’s the kinkiest thing you’ve ever done?",
    "🔮 What’s a kink you still want to explore?",
    "💤 Tell me about your hottest sex dream.",
    "✨ What's something I could do that would *immediately* make you orgasm?",
    "☁️ Soft, slow sex or wild and rough — which makes your body sing?",
    "🎬 One celebrity hook-up pass: who and why?",
    "👘 What do you think I look *sexiest* in?",
    "📌 Describe my sexual energy in three words.",
    "🪢 If I were tied up, what would you *do* to me?",
    "🕶️ Blindfolds: tempting or no-go?",
    "💡 Invent a sex move — what would it be called?",
    "🗣️ What kind of dirty talk do you crave from me?",
    "💫 One sex position for 30 days — what’s your ride-or-die?",
    "📽️ Seen anything in porn or movies you'd want to act out?",
    "🧲 Favorite move of mine — and what makes it so hot?",
    "💋 What kind of foreplay have we *not* tried that you're dying to?",
    "💑 Where was our most romantic kiss?",
    "👄 What did you think the first time we kissed?",
    "🫶 When I'm on top, what part of me do you fixate on?",
    "🕰️ How often do you fantasize or touch yourself — and is it ever about me?",
    "🧭 If you could change something about our first time, what would it be?",
    "📨 What’s the *hottest* sext I’ve ever sent you?",
    "📉 Least favorite position and why?",
    "👥 Ever had or wanted a threesome?",
    "🫀 What’s my sexiest physical feature?",
    "🪞 What’s *your* sexiest feature, in your opinion?",
    "🌈 Ever had same-sex fantasies or experiences?",
    "🛻 Where’s the wildest place you’ve done it?",
    "🧎‍♂️ What went through your mind when you saw me naked for the first time?",
    "💣 Fuck, Marry, Kill: Missionary, doggy, oral.",
    "👅 What do I taste like — in your words?",
    "😴 Ever dozed off during sex — or wanted to?",
  "🧛‍♂️ Have you ever fantasized about being dominated by a supernatural being like a vampire or werewolf?",
  "👑 Would you rather be royalty with a secret sex dungeon or a servant who discovers it?",
  "🌪️ What’s your most intense sexual dream that left you breathless when you woke up?",
  "👣 Do feet turn you on? If yes, describe your ideal foot play session.",
  "🎭 Have you ever wanted to roleplay as someone completely unlike yourself? Who?",
  "💀 Have you ever fantasized about someone you shouldn't, like a friend’s partner or a professor?",
  "🐍 What’s the dirtiest secret you’ve kept from a past lover?",
  "🧠 If I could hear your thoughts during your last orgasm, what would I hear?",
  "🚿 Have you ever masturbated in a public bathroom or somewhere you shouldn't have?",
  "👽 Would you have sex with an alien if they could shapeshift into your perfect fantasy?",
  "🔥 Describe a moment where lust made you lose complete control.",
  "🔗 Would you rather be restrained or the one doing the restraining?",
  "👀 Have you ever been watched while doing something sexual? Did you like it?",
  "🍸 What’s your favorite kind of drunk sex?",
  "📖 What’s the wildest plot of an erotic novel or fanfic you’ve gotten turned on by?",
  "🦁 Do you have a primal kink—like biting, scratching, or growling?",
  "🔮 Have you ever visited a sex club or wanted to? Describe what would turn you on most about it.",
  "🍬 Do sweet or savory foods play into your sexual fantasies? How?",
  "🎬 Which movie scene do you wish had turned into a full-blown sex scene?",
  "🌌 Do you ever imagine sex in otherworldly places—like space, castles, or another dimension?",
  "⛓️ Would you rather be punished for being naughty or rewarded for being obedient?",
  "🎃 Ever had a Halloween fantasy—costumes, trick or treat, or something darker?",
  "📷 Have you ever recorded yourself doing something intimate? If not, would you?",
  "🎮 If your sex life was a video game, what would the cheat code unlock?",
  "🦷 Would you ever let someone bite you passionately enough to leave marks?",
  "🎲 What’s your most dangerous or risky sexual thought?",
  "🛐 Do you have any taboo kinks related to religion, power, or control?",
  "🧞‍♂️ If a genie offered you one night of perfect sex with anyone, who would you choose?",
  "🎩 Ever fantasized about a magic spell that could make people irresistible?",
  "🧷 If you had to pierce one body part for kink, what would it be and why?",
  "💧 Describe your most intense wet dream in full detail.",
  "🫦 Have you ever been turned on by someone crying or being vulnerable?",
  "🔊 What kind of dirty talk do you wish someone would whisper in your ear?",
  "📿 Have you ever used religious or sacred objects in a fantasy?",
  "🏰 Would you rather be taken by a knight or ravished by a dragon in human form?",
  "🍂 Do nature settings turn you on? Forest, waterfall, mountains?",
  "🧵 What clothing item turns you on most—lace, leather, latex, or silk?",
  "👂 Where do you want to be whispered to when you're most turned on?",
  "🕳️ Ever fantasized about being completely at someone’s mercy?",
  "🦢 What’s the most innocent thing that made you horny unexpectedly?",
  "💣 Have you ever roleplayed as a spy, criminal, or assassin in your fantasies?",
  "🦴 What’s your darkest, most morally grey sexual fantasy?",
  "💼 Ever wanted to seduce a boss, co-worker, or someone in authority?",
  "🌑 Have you ever wanted to be used by a group, or use a group yourself?",
  "🖼️ What image or painting has ever made you aroused?",
  "🔍 Do you like watching or being watched more?",
  "🧊 Where do you want an ice cube melted on your body?",
  "🌡️ Have you ever been so turned on that you forgot where you were?",
  "🐾 Would you rather be hunted or do the hunting—sexually speaking?",
  "🔒 Have you ever fantasized about being locked up and used for pleasure?",
  "🧬 What taboo fantasy do you wish society didn’t judge so harshly?",
  "🔥 What’s the most forbidden fantasy you’ve ever secretly wanted to try?",
    "👥 Have you ever imagined being in a threesome—what role would you take?",
    "🖤 What’s one taboo act you think about often but have never said out loud?",
    "🎭 Have you ever fantasized about seducing someone totally off-limits?",
    "🪢 Would you rather be restrained or do the restraining? Why?",
    "🛏️ Have you ever imagined watching your partner with someone else?",
    "👅 If you had to describe your oral technique in one word—what would it be?",
    "🧿 Have you ever had a public sex fantasy? Where and how?",
    "🎩 What's your ultimate roleplay scenario? Describe it in detail.",
    "🧛‍♂️ Have you ever wanted to dominate someone while in costume?",
    "📹 What’s the wildest thing you've watched in adult content that turned you on?",
    "🥵 Do you fantasize about being controlled or punished? What would it look like?",
    "🦄 Would you rather have sex with an alien, a vampire, or a werewolf? Why?",
    "🔮 If your darkest sexual desire came true tonight, what would happen?",
    "👣 What part of your partner’s body turns you on that they might not expect?",
    "🍓 Describe your ideal food play experience... what would we use?",
    "💌 What's something dirty you’ve written but never sent?",
    "🎥 Have you ever filmed yourself or wanted to?",
    "💬 What's the filthiest thing someone has whispered to you during sex?",
    "🚫 What is one off-limits sexual act you secretly wish wasn't?"
  
  
);



        var dares = new Array(
    "👀 Pretend we’re strangers at a bar and try to pick me up.",
    "💌 Write me a love note.",
    "💋 Kiss me like it's the first time.",
    "🧎‍♂️ Go down on me in a position we’ve never tried before.",
    "🎨 Draw me like one of your French girls.",
    "🎓 Roleplay as a professor seducing your student.",
    "👙 Describe the lingerie that turns you on—while making eye contact.",
    "💵 Pretend you’re a strip club patron while I dance for you.",
    "👨‍🍳 Make me the sexiest snack you can in 3 minutes—using yourself as the plate!",
    "💃 Blindfolded lap dance to a song of my choice.",
    "👑 Call me only by a nickname of my choice. Mess up, and I spank you!",
    "🛏️ Act out your sexiest fantasy—no words, only props.",
    "🛁 Go skinny dipping with me. Get creative with the location!",
    "👗 Trade clothes with me and model them to your hype song.",
    "👅 Try to lick yourself from head to toe. You get 3 help spots.",
    "📹 Show me the last porn video you watched.",
    "⏳ Watch me touch myself for 5 minutes—hands off for both of us.",
    "😘 Kiss a body part you want to cum on.",
    "😗 Kiss a part of me you usually don’t kiss.",
    "🚿 Take a shower with me and get creative with the shower head.",
    "🖐️ Take my hand and guide it where you want attention.",
    "🍑 Let’s pick out a butt plug to try together.",
    "✍️ Draw circles on your favorite parts of my body with a marker.",
    "🦶 Use only your feet to turn me on in 60 seconds.",
    "🎞️ Show me a video of something you'd like to try together.",
    "🎶 Put on a sexy song and go down on me for the entire track.",
    "🖤 Tie me up and tease me mercilessly—use whatever you want.",
    "🔗 Try a beginner Shibari or bondage tie on me—explore control and surrender.",
    "🔥 Roleplay as a vampire feeding on me—kiss my neck slowly and deeply.",
    "👹 Act out a dark fantasy: Demon and human caught in a forbidden desire.",
    "👯‍♀️ Initiate a fantasy threesome roleplay with an imaginary third person.",
    "💣 Take control and dominate me for the next 5 minutes—no mercy.",
    "🔮 Pretend you’re a witch casting a seductive spell on me—whisper incantations.",
    "🐺 Werewolf transform: growl, hunt, and claim me as your mate tonight.",
    "🩸 Use ice and fire (ice cubes and warm breath) on my skin in a sensual torture game.",
    "👿 Act as a corrupt angel seducing a sinner (me)—confess your darkest desires.",
    "⚔️ Sword fight with pillows, loser does a hardcore dare of the winner’s choice.",
    "🦇 Seduce me in total darkness—use touch, sound, and scent only.",
    "🔞 Use a blindfold and let me tease you—describe what you feel without words.",
    "🎭 Reenact a hardcore BDSM scene—switch roles halfway through.",
    "👑 Act as a ruthless king/queen punishing their servant—in the most sensual way.",
    "💉 Pretend to be a vampire biting and draining me—use lipstick or a red scarf.",
    "🎲 Roll dice: odd number = you dominate, even number = you submit for 5 minutes.",
    "👩‍❤️‍👨 Add an imaginary third person and tell me how you’d please us both.",
    "🦄 Play a mythical creature—mermaid, succubus, or elf—and seduce me.",
    "🎤 Whisper your most taboo fantasy and let me guess what it is.",
    "🕷️ Spin a web of seduction—entangle me with your body and words.",
    "🎩 Magician’s trick: disappear and reappear somewhere on my body with kisses.",
    "🚪 Secret dungeon scene: You’re the guard, I’m the prisoner, and you decide my fate.",
    "⚡ Electrify me—use light touches and pretend to send shockwaves through my body.",
    "🔒 Put me in ‘time-out’ with soft restraints and sensual denial.",
    "🍷 Pour wine or another liquid slowly down your body and let me lick it off.",
    "👅 Imitate a famous hardcore porn star’s signature move on me.",
    "🔞 Describe in detail your wildest threesome scenario involving us and a stranger.",
    "💀 Take on the role of Death collecting my soul—kiss me for it.",
    "🧛‍♂️ Bite me, but only on places you think will drive me wild.",
    "🐍 Snake charmer: hypnotize me with your voice and movements before we kiss.",
    "🕶️ Act out a spy/agent fantasy—secret rendezvous with a sexy catch and release.",
    "📿 Use a silk scarf or tie for a sensual blindfold and gentle restraints.",
    "🖤 Pretend you’re a dark god/goddess and I’m your devoted mortal to worship.",
    "🌪️ Pretend a storm is raging outside while we enact a forbidden love scene.",
    "🔥 Use candles (safely!) or body-safe wax for a slow, teasing temperature play.",
    "🔫 Roleplay as a rogue assassin who seduces their target before the hit.",
    "🛏️ Get on all fours and present yourself like you're begging to be taken hard.",
  "🎯 Bend over and let me spank you after every moan you make for the next 2 minutes.",
  "🍑 Spread yourself open and whisper what you want me to do to your hole.",
  "🦴 Slide your fingers inside you while maintaining intense eye contact.",
  "🖤 Ride me slowly while whispering your darkest fantasy in my ear.",
  "🎥 Record a short POV clip of you being fucked—real or simulated, raw and filthy.",
  "💉 Pretend I’m a stranger and act out being taken forcefully against the wall.",
  "🗝️ Tie your hands, blindfold yourself, and let me take control of your pleasure completely.",
  "🔒 Sit on my face and don’t let me breathe until I make you scream.",
  "🧯 Lick, suck, and deepthroat something phallic while saying what you'd do to me.",
  "💣 Act out being used by multiple lovers—switch positions and moan for each one.",
  "🥵 Choke me lightly and tell me I’m yours to break tonight.",
  "🔪 Tell me how you’d dominate me in a dungeon—describe the scene blow-by-blow.",
  "🍆 Deepthroat me or simulate it with something girthy while looking submissive.",
  "👅 Use your tongue to explore every part of my body—slow, wet, deliberate.",
  "🧎 Kneel in front of me and beg for me to cum on your face or body.",
  "🩸 Pull your panties aside and finger yourself while imagining me inside you.",
  "🫦 Straddle me and grind while whispering how you’d cheat if you had no rules.",
  "👑 Order me to fuck you like royalty would command a servant.",
  "🪤 Simulate being pinned down and used—no escape, all pleasure.",
  "🥒 Show me how you ride toys—bounce like I’m inside you.",
  "🫀 Moan louder with each thrust or finger push inside you for one minute.",
  "⚖️ Simulate a punishment: every lie = 5 hard strokes while begging for more.",
  "🧤 Slide something inside yourself and describe how tight and wet you are.",
  "🎭 Roleplay being taken roughly in a public place—fast, hard, risky.",
  "👹 Pretend I’m a monster and you’re a helpless captive begging for more.",
  "📹 Set up the camera and record yourself using a toy like it's the real thing.",
  "🚪 Walk into the room completely naked, bend over, and ask to be taken.",
  "🧲 Push me against the wall and ride me like your life depends on it.",
  "🪩 Ride me reverse cowgirl while telling me what dirty things you’ve done before.",
  "🪞 Fuck yourself in front of a mirror while describing every motion to me.",
  "📿 Beg me to cum inside you like it’s the only thing you need tonight.",
  "🎲 Get in doggy, roll a die—each number is a different hole to use or tease.",
  "🪵 Grind your hips like you’re on my face—slowly, then faster.",
  "🧷 Tie your legs open and tell me how long you can take being fucked without cumming.",
  "🎤 Talk dirty into my ear while fingering yourself—don’t stop until I say so.",
  "🔗 Put on cuffs or pretend restraints and beg to be used any way I want.",
  "🧠 Act out a scene where you're drugged with lust and can't help but ride me.",
  "🔊 Moan into the pillow while saying, 'Harder, deeper, don’t stop!' five times.",
  "🕶️ Simulate being blindfolded and forcefully mounted—play it like a movie.",
  "🍷 Pour wine on your chest and let me drink it off while you're being fucked.",
  "🧪 Pretend you're an experiment gone wrong—made to obey and be filled.",
  "🛠️ Make yourself cum while saying my name and how much you want to be owned.",
  "🧬 Act like a sex robot malfunctioning—needing to be filled or fixed now.",
  "🫳 Lay flat and let me use your body however I want, no talking, just moaning.",
  "🌌 Simulate zero-gravity sex—float, grind, ride, and scream like in space.",
  "💦 Squirt or simulate squirting while saying, 'That's what you do to me.'",
  "🥃 Pour something cold between your thighs and make me lick it clean.",
  "🧎 Sit on your knees and tell me every dirty thing you’d do in a gangbang scene.",
    "🌑 Act as if we’re in a post-apocalyptic world where desire is the only escape.",
    "👹 Take on a monster role and ‘claim’ me as your prize—let your imagination run wild.",
    "💦 Describe and act out an intense, sweaty dance with touches all over.",
    "🥀 Pretend to be a cursed soul who needs my kiss to be freed.",
    "👩‍❤️‍👨 Plan an imaginary threesome with two celebrities or fictional characters.",
    "🕯️ Light a candle, close your eyes, and describe your darkest desire while tracing my body.",
    "🗝️ Act out a ‘key and lock’ fantasy where you hold the key to my pleasure.",
    "🎲 Dare me to do something wild or taboo—winner picks.",
    "🦇 Seduce me in a gothic mansion setting—whisper promises and secrets.",
    "💣 Pretend I’m your forbidden lover from a rival faction or family.",
    "🥀 Slowly unwrap me like a gift with intense eye contact and teasing touches.",
    "🔊 Imitate what I sound like when I orgasm.",
    "💄 Blindfold me and write something sexy on my body with lipstick.",
    "📱 Go into the other room and sext me the dirtiest thing you can think of.",
    "🫦 Show me how you touch yourself when I’m not around.",
    "🍑 Take off your pants and give me your best ass shake—then try it upside down!",
    "🧘 Host a 5-minute sexy yoga class with sensual stretches.",
    "☎️ Call me and leave a voicemail describing what you'd do to me.",
    "🍌 Demonstrate your best oral move on the nearest appropriate object.",
    "🧹 Vacuum seductively to 'Pony' by Ginuwine.",
    "🔇 Turn off the lights and try to turn me on using only sounds.",
    "🦶 Give me a sensual foot massage—make it hot.",
    "💋 Kiss your three favorite body parts of mine.",
    "🕒 Act out as many sexual positions as you can in one minute—with clothes on.",
    "🛒 Pick 3 sex toys online. I’ll choose one—you buy it now.",
    "😲 Take a selfie of your ‘O’ face. Set it as your lock screen for 48 hrs.",
    "🥣 Give me a nude cooking demo on how to make cereal.",
    "🎬 Recreate a romantic movie kiss—Notebook, Titanic, your choice.",
    "🧛 Put on an old Halloween costume—let's role-play.",
    "🍦 Place whipped cream on my body and lick it off.",
    "🍓 Eat a strawberry as sensually as possible.",
    "😈 Kiss me anywhere except the mouth for 5 minutes.",
    "💧 Give me a lube-y clitoral massage—the wetter, the better.",
    "📖 Read me a chapter from your favorite book while I go down on you.",
    "💆‍♂️ Massage anywhere on my body for 10 minutes.",
    "🔥 Do something to me you’ve been fantasizing about.",
    "📲 Text me the raunchiest thought you’ve had about me.",
    "🍯 Kiss me after swiping something sweet across your lips.",
    "💇‍♀️ Play with my hair—harder as you kiss me.",
    "🛏️ Tell me what you loved most about our last time. Be honest.",
    "🚪 Pull me into a closet for Seven Minutes in Heaven—keep it above the belt!",
    "👄 Use lips and hands to stimulate two parts of me at once.",
    "👂 Use your mouth to slowly kiss from my wrist to my ear.",
    "💬 In your sultriest tone, tell me what you loved about last time.",
    "🧼 Join me in the shower and wash me—no part left behind.",
    "⏱️ Excite me using just kisses in 10 seconds.",
    "🧘 Show me your most flexible sex move.",
    "💏 Make out like we used to—before sex was in the mix.",
    "🚥 Pole dance with an imaginary pole to a song I choose.",
    "🎧 Play a song you’d like to have sex to.",
    "🎶 Show me your sex playlist—or let’s build one together.",
    "🫶 Give me goosebumps using just your fingers.",
    "👅 Demonstrate a move from porn you’d like to try with me.",
    "🌿 Give me a sensual massage from feet to head.",
    "⏱️ Touch yourself like you want to touch me—for one minute.",
    "🖐️ Play Never Have I Ever—loser owes a sexual favor.",
    "👅 Spell out a sultry message on my body with your tongue.",
    "🎭 Initiate a role-play and make me guess your character.",
    "🎧 Listen to the same audio porn—no touching until it ends.",
    "💐 Dab scent somewhere. I sniff to find it.",
    "🧊 Pop an ice cube in your mouth and go down on me for 15 seconds.",
    "🍫 Make a trail of chocolate from my nipples to my knees—then lick.",
    "📱 Put my phone on vibrate somewhere on me. Now, call it.",
    "🍬 Pour sugar on my back and lick it up.",
    "🩲 Take off my underwear—with your mouth.",
    "🔒 Take off my bra—with your eyes closed.",
    "🧴 Rub my nipples with minty fingertips for a tingle.",
    "💋 Kiss a non-sexual body part until I’m turned on.",
    "🔥 Fuck me like it’s the first time.",
    "🛍️ Go to a sex shop together and pick a toy.",
    "💓 Whisper what you love about me in a seductive voice.",
    "📋 Write a list of your favorite features of mine.",
    "👂 Suck on my earlobe for 15 seconds.",
    "👆 Trace from my collarbone to between my breasts and back.",
    "📚 Read me an erotic story.",
    "🪢 Learn and try beginner Shibari together—or take a class.",
    "🚶 Let’s go for a walk—I’ll wear vibrating panties, you hold the remote.",
    "🍽️ Make dinner—we eat it naked.",
    "🔗 Tie my wrists and touch me—no kissing allowed.",
    "🃏 Draw two cards from a sexy game. We *must* obey.",
    "🚗 Recreate the Bridgerton carriage scene—in the car.",
    "🎥 Recreate your favorite sex scene with full costume & props."
);

    }
} else {
    /* if there is no local storage, set the default truth and dares */
    var truths = new Array(
    "🫦 What's your love language... and how would you *show* it physically?",
    "💗 What's your love language — and how can I speak it better?",
    "🔥 What turns you on in a way you’re afraid to admit?",
    "🩸 Have you ever wanted someone to mark you during sex?",
    "🕯️ What's one fantasy you’ve never said aloud?",
    "⛓️ Would you let someone tie you up and take control completely?",
    "🪞 When you see yourself naked, what’s your dirtiest thought?",
    "🧷 Would you want me to hurt you a little, or a lot?",
    "🌑 Have you ever wanted to be watched — or to watch?",
    "👁️‍🗨️ If you were blindfolded and bound, what would you beg me to do?",
    "👠 What clothing item makes you feel the most powerful — or submissive?",
    "🦂 Would you ever let me tease you to the edge… and not let you finish?",
    "💋 Have you ever fantasized about being used — completely?",
    "🧴 What’s one smell, texture, or sensation that instantly turns you on?",
    "🫣 Would you rather beg for release or be punished for misbehaving?",
    "🕸️ What's your darkest erotic fantasy? No filters.",
    "💄 If we role-played, who would you be — innocent, villain, slave?",
    "🪢 If I whispered 'stay still, don’t move'... would you obey?",
    "🫂 What’s the kink you’re most ashamed but excited by?",
    "👅 Tell me one thing you'd do to my body if there were no rules.",
    "🖤 Do you crave dominance, submission, or both?",
    "🫀 Would you rather be worshiped... or used?",
    "🕶️ How far would you go if we had a 'no safe word' night?",
    "🩸 Would you ever let pain turn into pleasure?",
    "🐍 If I said 'get on your knees now'... what would your first thought be?",
    "👀 What do you fantasize about when you're alone... the dark version?",
    "🪞 When you look at me... what’s the first thing you want to *do*?",
    "🫦 Tell me what you want me to whisper to you... when you're trembling.",
    "🫶 What is one part of your body you wish I’d explore longer?",
    "🌑 If we had one night with no rules and no shame, what would happen?",
    "💞 What's one thing you find hard in relationships?",
    "🌹 What's something beautiful you bring into relationships?",
    "👀 What first drew you to me — be honest?",
    "💫 What’s a nonsexual thing that unexpectedly arouses you?",
    "🔄 Have you had sex with more than one person in a day?",
    "⏳ What’s the biggest age gap you’ve had between you and a partner?",
    "😳 What’s your most awkward or embarrassing sex moment?",
    "😈 Ever cheated — and did that turn you on?",
    "🕯️ Ever turned down a sexual moment and regretted it later?",
    "🫢 Ever hooked up with someone you wish you hadn’t?",
    "📖 When did you *really* understand what sex was?",
    "🎭 Ever faked an orgasm? Why?",
    "🙊 Have you ever told someone you faked it?",
    "😶 Has anyone admitted to faking it with *you*?",
    "🔥 What’s the most forbidden fantasy you’ve ever secretly wanted to try?",
    "👥 Have you ever imagined being in a threesome—what role would you take?",
    "🖤 What’s one taboo act you think about often but have never said out loud?",
    "🎭 Have you ever fantasized about seducing someone totally off-limits?",
    "🪢 Would you rather be restrained or do the restraining? Why?",
    "🛏️ Have you ever imagined watching your partner with someone else?",
    "👅 If you had to describe your oral technique in one word—what would it be?",
    "🧿 Have you ever had a public sex fantasy? Where and how?",
    "🎩 What's your ultimate roleplay scenario? Describe it in detail.",
    "🧛‍♂️ Have you ever wanted to dominate someone while in costume?",
    "📹 What’s the wildest thing you've watched in adult content that turned you on?",
    "🥵 Do you fantasize about being controlled or punished? What would it look like?",
    "🦄 Would you rather have sex with an alien, a vampire, or a werewolf? Why?",
    "🔮 If your darkest sexual desire came true tonight, what would happen?",
    "👣 What part of your partner’s body turns you on that they might not expect?",
    "🍓 Describe your ideal food play experience... what would we use?",
    "💌 What's something dirty you’ve written but never sent?",
    "🎥 Have you ever filmed yourself or wanted to?",
    "💬 What's the filthiest thing someone has whispered to you during sex?",
    "🚫 What is one off-limits sexual act you secretly wish wasn't?",
    "📵 Ever sent a sexy message to the wrong person?",
    "🚿 How do you really feel about shower sex?",
    "🌊 What about sex at the beach or pool — fantasy or mess?",
    "🎶 What song instantly puts you in a sexy mood?",
    "📺 What's the hottest scene you've ever seen in a show or movie?",
    "🌙 When does your libido spike the most?",
    "⚡ What was your sexual awakening like?",
    "🔁 What’s the most orgasms you've had in a day?",
    "⏱️ What about in one hour?",
    "🫀 If we opened our relationship, who would you sleep with first?",
    "🕊️ Who would be in your dream group fantasy?",
    "🖤 If you threw a sex party, who (famous or not) would be on the list?",
    "📆 What stands out from the first time you ever had sex?",
    "🫧 Who was your first time with — and what do you remember most?",
    "🌀 Ever had a sex dream that confused or surprised you?",
    "🛌 Have you ever dreamed about having sex with *me*?",
    "🔄 If you could repeat a night with an old flame, would you?",
    "👁️ Would you watch me with someone else if I wanted that?",
    "🧸 Thoughts on sex toys — curious or committed?",
    "📦 Is there one toy you secretly want to try with me?",
    "💖 Favorite kind of toy for solo or shared play?",
    "🌡️ What’s one fantasy you’ve never dared to say out loud?",
    "💌 What memory from *us* still makes you ache in the best way?",
    "🎭 Describe your ideal role-play night — go all out.",
    "🎯 What do you think I’m best at in bed?",
    "💼 Ever gotten turned on while working or on a Zoom call?",
    "🧳 Ever had a one-night stand while traveling?",
    "🌀 Have you ever gone back to an ex for a hookup?",
    "👅 Do you prefer to use tongue or fingers — and where?",
    "♻️ How do you feel about open relationships or swapping?",
    "👔 What's something about me (non-sexual) that turns you on?",
    "👣 Would you want to go to a sex-positive party with me?",
    "🧻 What's the most surprising place you’ve masturbated?",
    "🔁 Thoughts on mutual self-pleasure — turn-on or just okay?",
    "✈️ Ever had sex on a plane?",
    "🧨 What’s your number one sexual bucket list item?",
    "🚪 Ever been walked in on during sex?",
    "🙈 Ever caught someone else in the act?",
    "🪟 Ever had sex in a semi-public or risky place?",
    "🎥 Do you watch porn? What themes turn you on most?",
    "🧠 What’s the naughtiest thought you’ve had about me?",
    "😐 What do most people love in bed that you secretly don’t?",
    "💎 What sexual acts or touches are totally underrated?",
    "🎓 Ever fantasized about a teacher, coach, or boss?",
    "📝 Do you remember every name of your past partners?",
    "💋 First-date kiss — yes or no?",
    "🛏️ First-date sex — thrilling or too soon?",
    "🧃 Where do you love being kissed or sucked most?",
    "🎀 What spot on your body craves the most attention?",
    "🔗 Would you rather take control or surrender to me in bed?",
    "🐾 Do you like nibbling or light bites? If so, where?",
    "💎 How do you feel about nipple play?",
    "🍑 Be honest: are you into butt stuff?",
    "🎮 What’s your favorite toy to use on me?",
    "👫 What’s your favorite toy to use *together*?",
    "⛓️ What’s the kinkiest thing you’ve ever done?",
    "🔮 What’s a kink you still want to explore?",
    "💤 Tell me about your hottest sex dream.",
    "✨ What's something I could do that would *immediately* make you orgasm?",
    "☁️ Soft, slow sex or wild and rough — which makes your body sing?",
    "🎬 One celebrity hook-up pass: who and why?",
    "👘 What do you think I look *sexiest* in?",
    "📌 Describe my sexual energy in three words.",
    "🪢 If I were tied up, what would you *do* to me?",
    "🕶️ Blindfolds: tempting or no-go?",
    "💡 Invent a sex move — what would it be called?",
    "🗣️ What kind of dirty talk do you crave from me?",
    "💫 One sex position for 30 days — what’s your ride-or-die?",
    "📽️ Seen anything in porn or movies you'd want to act out?",
    "🧲 Favorite move of mine — and what makes it so hot?",
    "💋 What kind of foreplay have we *not* tried that you're dying to?",
    "💑 Where was our most romantic kiss?",
    "👄 What did you think the first time we kissed?",
    "🫶 When I'm on top, what part of me do you fixate on?",
    "🕰️ How often do you fantasize or touch yourself — and is it ever about me?",
    "🧭 If you could change something about our first time, what would it be?",
    "📨 What’s the *hottest* sext I’ve ever sent you?",
    "📉 Least favorite position and why?",
    "👥 Ever had or wanted a threesome?",
    "🫀 What’s my sexiest physical feature?",
    "🪞 What’s *your* sexiest feature, in your opinion?",
    "🌈 Ever had same-sex fantasies or experiences?",
    "🛻 Where’s the wildest place you’ve done it?",
    "🧎‍♂️ What went through your mind when you saw me naked for the first time?",
    "💣 Fuck, Marry, Kill: Missionary, doggy, oral.",
    "👅 What do I taste like — in your words?",
    "😴 Ever dozed off during sex — or wanted to?",
  "🧛‍♂️ Have you ever fantasized about being dominated by a supernatural being like a vampire or werewolf?",
  "👑 Would you rather be royalty with a secret sex dungeon or a servant who discovers it?",
  "🌪️ What’s your most intense sexual dream that left you breathless when you woke up?",
  "👣 Do feet turn you on? If yes, describe your ideal foot play session.",
  "🎭 Have you ever wanted to roleplay as someone completely unlike yourself? Who?",
  "💀 Have you ever fantasized about someone you shouldn't, like a friend’s partner or a professor?",
  "🐍 What’s the dirtiest secret you’ve kept from a past lover?",
  "🧠 If I could hear your thoughts during your last orgasm, what would I hear?",
  "🚿 Have you ever masturbated in a public bathroom or somewhere you shouldn't have?",
  "👽 Would you have sex with an alien if they could shapeshift into your perfect fantasy?",
  "🔥 Describe a moment where lust made you lose complete control.",
  "🔗 Would you rather be restrained or the one doing the restraining?",
  "👀 Have you ever been watched while doing something sexual? Did you like it?",
  "🍸 What’s your favorite kind of drunk sex?",
  "📖 What’s the wildest plot of an erotic novel or fanfic you’ve gotten turned on by?",
  "🦁 Do you have a primal kink—like biting, scratching, or growling?",
  "🔮 Have you ever visited a sex club or wanted to? Describe what would turn you on most about it.",
  "🍬 Do sweet or savory foods play into your sexual fantasies? How?",
  "🎬 Which movie scene do you wish had turned into a full-blown sex scene?",
  "🌌 Do you ever imagine sex in otherworldly places—like space, castles, or another dimension?",
  "⛓️ Would you rather be punished for being naughty or rewarded for being obedient?",
  "🎃 Ever had a Halloween fantasy—costumes, trick or treat, or something darker?",
  "📷 Have you ever recorded yourself doing something intimate? If not, would you?",
  "🎮 If your sex life was a video game, what would the cheat code unlock?",
  "🦷 Would you ever let someone bite you passionately enough to leave marks?",
  "🎲 What’s your most dangerous or risky sexual thought?",
  "🛐 Do you have any taboo kinks related to religion, power, or control?",
  "🧞‍♂️ If a genie offered you one night of perfect sex with anyone, who would you choose?",
  "🎩 Ever fantasized about a magic spell that could make people irresistible?",
  "🧷 If you had to pierce one body part for kink, what would it be and why?",
  "💧 Describe your most intense wet dream in full detail.",
  "🫦 Have you ever been turned on by someone crying or being vulnerable?",
  "🔊 What kind of dirty talk do you wish someone would whisper in your ear?",
  "📿 Have you ever used religious or sacred objects in a fantasy?",
  "🏰 Would you rather be taken by a knight or ravished by a dragon in human form?",
  "🍂 Do nature settings turn you on? Forest, waterfall, mountains?",
  "🧵 What clothing item turns you on most—lace, leather, latex, or silk?",
  "👂 Where do you want to be whispered to when you're most turned on?",
  "🕳️ Ever fantasized about being completely at someone’s mercy?",
  "🦢 What’s the most innocent thing that made you horny unexpectedly?",
  "💣 Have you ever roleplayed as a spy, criminal, or assassin in your fantasies?",
  "🦴 What’s your darkest, most morally grey sexual fantasy?",
  "💼 Ever wanted to seduce a boss, co-worker, or someone in authority?",
  "🌑 Have you ever wanted to be used by a group, or use a group yourself?",
  "🖼️ What image or painting has ever made you aroused?",
  "🔍 Do you like watching or being watched more?",
  "🧊 Where do you want an ice cube melted on your body?",
  "🌡️ Have you ever been so turned on that you forgot where you were?",
  "🐾 Would you rather be hunted or do the hunting—sexually speaking?",
  "🔒 Have you ever fantasized about being locked up and used for pleasure?",
  "🧬 What taboo fantasy do you wish society didn’t judge so harshly?"
);


    var dares = new Array(
    "👀 Pretend we’re strangers at a bar and try to pick me up.",
    "💌 Write me a love note.",
    "💋 Kiss me like it's the first time.",
    "🧎‍♂️ Go down on me in a position we’ve never tried before.",
    "🎨 Draw me like one of your French girls.",
    "🎓 Roleplay as a professor seducing your student.",
    "👙 Describe the lingerie that turns you on—while making eye contact.",
    "💵 Pretend you’re a strip club patron while I dance for you.",
    "👨‍🍳 Make me the sexiest snack you can in 3 minutes—using yourself as the plate!",
    "💃 Blindfolded lap dance to a song of my choice.",
    "👑 Call me only by a nickname of my choice. Mess up, and I spank you!",
    "🛏️ Act out your sexiest fantasy—no words, only props.",
    "🛁 Go skinny dipping with me. Get creative with the location!",
    "👗 Trade clothes with me and model them to your hype song.",
    "👅 Try to lick yourself from head to toe. You get 3 help spots.",
    "📹 Show me the last porn video you watched.",
    "⏳ Watch me touch myself for 5 minutes—hands off for both of us.",
    "😘 Kiss a body part you want to cum on.",
    "😗 Kiss a part of me you usually don’t kiss.",
    "🚿 Take a shower with me and get creative with the shower head.",
    "🖐️ Take my hand and guide it where you want attention.",
    "🍑 Let’s pick out a butt plug to try together.",
    "✍️ Draw circles on your favorite parts of my body with a marker.",
    "🦶 Use only your feet to turn me on in 60 seconds.",
    "🎞️ Show me a video of something you'd like to try together.",
    "🎶 Put on a sexy song and go down on me for the entire track.",
    "🔊 Imitate what I sound like when I orgasm.",
    "💄 Blindfold me and write something sexy on my body with lipstick.",
    "📱 Go into the other room and sext me the dirtiest thing you can think of.",
    "🫦 Show me how you touch yourself when I’m not around.",
    "🍑 Take off your pants and give me your best ass shake—then try it upside down!",
    "🧘 Host a 5-minute sexy yoga class with sensual stretches.",
    "☎️ Call me and leave a voicemail describing what you'd do to me.",
    "🍌 Demonstrate your best oral move on the nearest appropriate object.",
    "🧹 Vacuum seductively to 'Pony' by Ginuwine.",
    "🔇 Turn off the lights and try to turn me on using only sounds.",
    "🦶 Give me a sensual foot massage—make it hot.",
    "💋 Kiss your three favorite body parts of mine.",
    "🕒 Act out as many sexual positions as you can in one minute—with clothes on.",
    "🛒 Pick 3 sex toys online. I’ll choose one—you buy it now.",
    "😲 Take a selfie of your ‘O’ face. Set it as your lock screen for 48 hrs.",
    "🥣 Give me a nude cooking demo on how to make cereal.",
    "🎬 Recreate a romantic movie kiss—Notebook, Titanic, your choice.",
    "🧛 Put on an old Halloween costume—let's role-play.",
    "🍦 Place whipped cream on my body and lick it off.",
    "🍓 Eat a strawberry as sensually as possible.",
    "😈 Kiss me anywhere except the mouth for 5 minutes.",
    "💧 Give me a lube-y clitoral massage—the wetter, the better.",
    "📖 Read me a chapter from your favorite book while I go down on you.",
    "🖤 Tie me up and tease me mercilessly—use whatever you want.",
    "🔗 Try a beginner Shibari or bondage tie on me—explore control and surrender.",
    "🔥 Roleplay as a vampire feeding on me—kiss my neck slowly and deeply.",
    "👹 Act out a dark fantasy: Demon and human caught in a forbidden desire.",
    "👯‍♀️ Initiate a fantasy threesome roleplay with an imaginary third person.",
    "💣 Take control and dominate me for the next 5 minutes—no mercy.",
    "🔮 Pretend you’re a witch casting a seductive spell on me—whisper incantations.",
    "🐺 Werewolf transform: growl, hunt, and claim me as your mate tonight.",
    "🩸 Use ice and fire (ice cubes and warm breath) on my skin in a sensual torture game.",
    "👿 Act as a corrupt angel seducing a sinner (me)—confess your darkest desires.",
    "⚔️ Sword fight with pillows, loser does a hardcore dare of the winner’s choice.",
    "🦇 Seduce me in total darkness—use touch, sound, and scent only.",
    "🔞 Use a blindfold and let me tease you—describe what you feel without words.",
    "🎭 Reenact a hardcore BDSM scene—switch roles halfway through.",
    "👑 Act as a ruthless king/queen punishing their servant—in the most sensual way.",
    "💉 Pretend to be a vampire biting and draining me—use lipstick or a red scarf.",
    "🎲 Roll dice: odd number = you dominate, even number = you submit for 5 minutes.",
    "👩‍❤️‍👨 Add an imaginary third person and tell me how you’d please us both.",
    "🦄 Play a mythical creature—mermaid, succubus, or elf—and seduce me.",
    "🎤 Whisper your most taboo fantasy and let me guess what it is.",
    "🕷️ Spin a web of seduction—entangle me with your body and words.",
    "🎩 Magician’s trick: disappear and reappear somewhere on my body with kisses.",
    "🚪 Secret dungeon scene: You’re the guard, I’m the prisoner, and you decide my fate.",
    "⚡ Electrify me—use light touches and pretend to send shockwaves through my body.",
    "🔒 Put me in ‘time-out’ with soft restraints and sensual denial.",
    "🍷 Pour wine or another liquid slowly down your body and let me lick it off.",
    "👅 Imitate a famous hardcore porn star’s signature move on me.",
    "🔞 Describe in detail your wildest threesome scenario involving us and a stranger.",
    "💀 Take on the role of Death collecting my soul—kiss me for it.",
    "🧛‍♂️ Bite me, but only on places you think will drive me wild.",
    "🐍 Snake charmer: hypnotize me with your voice and movements before we kiss.",
    "🕶️ Act out a spy/agent fantasy—secret rendezvous with a sexy catch and release.",
    "📿 Use a silk scarf or tie for a sensual blindfold and gentle restraints.",
    "🖤 Pretend you’re a dark god/goddess and I’m your devoted mortal to worship.",
    "🌪️ Pretend a storm is raging outside while we enact a forbidden love scene.",
    "🔥 Use candles (safely!) or body-safe wax for a slow, teasing temperature play.",
    "🔫 Roleplay as a rogue assassin who seduces their target before the hit.",
    "🌑 Act as if we’re in a post-apocalyptic world where desire is the only escape.",
    "👹 Take on a monster role and ‘claim’ me as your prize—let your imagination run wild.",
    "💦 Describe and act out an intense, sweaty dance with touches all over.",
    "🥀 Pretend to be a cursed soul who needs my kiss to be freed.",
    "👩‍❤️‍👨 Plan an imaginary threesome with two celebrities or fictional characters.",
    "🕯️ Light a candle, close your eyes, and describe your darkest desire while tracing my body.",
    "🗝️ Act out a ‘key and lock’ fantasy where you hold the key to my pleasure.",
    "🎲 Dare me to do something wild or taboo—winner picks.",
    "🦇 Seduce me in a gothic mansion setting—whisper promises and secrets.",
    "💣 Pretend I’m your forbidden lover from a rival faction or family.",
    "🥀 Slowly unwrap me like a gift with intense eye contact and teasing touches.",
    "💆‍♂️ Massage anywhere on my body for 10 minutes.",
    "🔥 Do something to me you’ve been fantasizing about.",
    "📲 Text me the raunchiest thought you’ve had about me.",
    "🍯 Kiss me after swiping something sweet across your lips.",
    "💇‍♀️ Play with my hair—harder as you kiss me.",
    "🛏️ Tell me what you loved most about our last time. Be honest.",
    "🚪 Pull me into a closet for Seven Minutes in Heaven—keep it above the belt!",
    "👄 Use lips and hands to stimulate two parts of me at once.",
    "👂 Use your mouth to slowly kiss from my wrist to my ear.",
    "💬 In your sultriest tone, tell me what you loved about last time.",
    "🧼 Join me in the shower and wash me—no part left behind.",
    "⏱️ Excite me using just kisses in 10 seconds.",
    "🛏️ Get on all fours and present yourself like you're begging to be taken hard.",
  "🎯 Bend over and let me spank you after every moan you make for the next 2 minutes.",
  "🍑 Spread yourself open and whisper what you want me to do to your hole.",
  "🦴 Slide your fingers inside you while maintaining intense eye contact.",
  "🖤 Ride me slowly while whispering your darkest fantasy in my ear.",
  "🎥 Record a short POV clip of you being fucked—real or simulated, raw and filthy.",
  "💉 Pretend I’m a stranger and act out being taken forcefully against the wall.",
  "🗝️ Tie your hands, blindfold yourself, and let me take control of your pleasure completely.",
  "🔒 Sit on my face and don’t let me breathe until I make you scream.",
  "🧯 Lick, suck, and deepthroat something phallic while saying what you'd do to me.",
  "💣 Act out being used by multiple lovers—switch positions and moan for each one.",
  "🥵 Choke me lightly and tell me I’m yours to break tonight.",
  "🔪 Tell me how you’d dominate me in a dungeon—describe the scene blow-by-blow.",
  "🍆 Deepthroat me or simulate it with something girthy while looking submissive.",
  "👅 Use your tongue to explore every part of my body—slow, wet, deliberate.",
  "🧎 Kneel in front of me and beg for me to cum on your face or body.",
  "🩸 Pull your panties aside and finger yourself while imagining me inside you.",
  "🫦 Straddle me and grind while whispering how you’d cheat if you had no rules.",
  "👑 Order me to fuck you like royalty would command a servant.",
  "🪤 Simulate being pinned down and used—no escape, all pleasure.",
  "🥒 Show me how you ride toys—bounce like I’m inside you.",
  "🫀 Moan louder with each thrust or finger push inside you for one minute.",
  "⚖️ Simulate a punishment: every lie = 5 hard strokes while begging for more.",
  "🧤 Slide something inside yourself and describe how tight and wet you are.",
  "🎭 Roleplay being taken roughly in a public place—fast, hard, risky.",
  "👹 Pretend I’m a monster and you’re a helpless captive begging for more.",
  "📹 Set up the camera and record yourself using a toy like it's the real thing.",
  "🚪 Walk into the room completely naked, bend over, and ask to be taken.",
  "🧲 Push me against the wall and ride me like your life depends on it.",
  "🪩 Ride me reverse cowgirl while telling me what dirty things you’ve done before.",
  "🪞 Fuck yourself in front of a mirror while describing every motion to me.",
  "📿 Beg me to cum inside you like it’s the only thing you need tonight.",
  "🎲 Get in doggy, roll a die—each number is a different hole to use or tease.",
  "🪵 Grind your hips like you’re on my face—slowly, then faster.",
  "🧷 Tie your legs open and tell me how long you can take being fucked without cumming.",
  "🎤 Talk dirty into my ear while fingering yourself—don’t stop until I say so.",
  "🔗 Put on cuffs or pretend restraints and beg to be used any way I want.",
  "🧠 Act out a scene where you're drugged with lust and can't help but ride me.",
  "🔊 Moan into the pillow while saying, 'Harder, deeper, don’t stop!' five times.",
  "🕶️ Simulate being blindfolded and forcefully mounted—play it like a movie.",
  "🍷 Pour wine on your chest and let me drink it off while you're being fucked.",
  "🧪 Pretend you're an experiment gone wrong—made to obey and be filled.",
  "🛠️ Make yourself cum while saying my name and how much you want to be owned.",
  "🧬 Act like a sex robot malfunctioning—needing to be filled or fixed now.",
  "🫳 Lay flat and let me use your body however I want, no talking, just moaning.",
  "🌌 Simulate zero-gravity sex—float, grind, ride, and scream like in space.",
  "💦 Squirt or simulate squirting while saying, 'That's what you do to me.'",
  "🥃 Pour something cold between your thighs and make me lick it clean.",
  "🧎 Sit on your knees and tell me every dirty thing you’d do in a gangbang scene.",
    "🧘 Show me your most flexible sex move.",
    "💏 Make out like we used to—before sex was in the mix.",
    "🚥 Pole dance with an imaginary pole to a song I choose.",
    "🎧 Play a song you’d like to have sex to.",
    "🎶 Show me your sex playlist—or let’s build one together.",
    "🫶 Give me goosebumps using just your fingers.",
    "👅 Demonstrate a move from porn you’d like to try with me.",
    "🌿 Give me a sensual massage from feet to head.",
    "⏱️ Touch yourself like you want to touch me—for one minute.",
    "🖐️ Play Never Have I Ever—loser owes a sexual favor.",
    "👅 Spell out a sultry message on my body with your tongue.",
    "🎭 Initiate a role-play and make me guess your character.",
    "🎧 Listen to the same audio porn—no touching until it ends.",
    "💐 Dab scent somewhere. I sniff to find it.",
    "🧊 Pop an ice cube in your mouth and go down on me for 15 seconds.",
    "🍫 Make a trail of chocolate from my nipples to my knees—then lick.",
    "📱 Put my phone on vibrate somewhere on me. Now, call it.",
    "🍬 Pour sugar on my back and lick it up.",
    "🩲 Take off my underwear—with your mouth.",
    "🔒 Take off my bra—with your eyes closed.",
    "🧴 Rub my nipples with minty fingertips for a tingle.",
    "💋 Kiss a non-sexual body part until I’m turned on.",
    "🔥 Fuck me like it’s the first time.",
    "🛍️ Go to a sex shop together and pick a toy.",
    "💓 Whisper what you love about me in a seductive voice.",
    "📋 Write a list of your favorite features of mine.",
    "👂 Suck on my earlobe for 15 seconds.",
    "👆 Trace from my collarbone to between my breasts and back.",
    "📚 Read me an erotic story.",
    "🪢 Learn and try beginner Shibari together—or take a class.",
    "🚶 Let’s go for a walk—I’ll wear vibrating panties, you hold the remote.",
    "🍽️ Make dinner—we eat it naked.",
    "🔗 Tie my wrists and touch me—no kissing allowed.",
    "🃏 Draw two cards from a sexy game. We *must* obey.",
    "🚗 Recreate the Bridgerton carriage scene—in the car.",
    "🎥 Recreate your favorite sex scene with full costume & props."
);

}



/* helper for JQuery control of the Animate.css library */
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


/* global variables*/
var truthNum = truths.length;
var dareNum = dares.length;
var statementSpace = document.getElementById('statementSpace');
var resetSpace = document.getElementById('resetSpace');
var customizeButton = document.getElementById('customize');
var truthsList = document.getElementById('newTruthList');
var daresList = document.getElementById('newDareList');
var i;


/* display on load */
statementSpace.innerHTML = "<p>or</p>";
resetSpace.innerHTML = '<button class="btn btn-block white-bg black-color" id="customize"><span class="fa fa-pencil"></span></button>';
$('#customize').addClass('animated fadeIn').one(animationEnd, function() {
   $(this).removeClass('animated fadeIn'); 
});


/* interactions through button clicks / touches */

/* modal to display possible truth and dare choices */
document.getElementById('review').addEventListener('click', function () {
    
    document.getElementById('truthList').innerHTML = "";
    for(i=0;i<truths.length;i++) {
    
        document.getElementById('truthList').innerHTML += '<li class="list-group-item">' + truths[i] + '</li>';
        
    
    }
    
    
    document.getElementById('dareList').innerHTML = "";
    for(i=0;i<dares.length;i++) {
        
        document.getElementById('dareList').innerHTML += '<li class="list-group-item">' + dares[i] + '</li>';
        
    }
    
    
});

/* truth question display */
document.getElementById('truth').addEventListener('click', function() {

    statementSpace.innerHTML = "";
    resetSpace.innerHTML = "";
    resetSpace.innerHTML = '<button class="btn btn-block black-bg white-color" id="reset"><span class="fa fa-home"></span></button>';
    reset();
    
    var num = Math.floor(Math.random()*truths.length);
    var truth = truths[num];
    statementSpace.innerHTML = '<p class="animated zoomIn">' + truth + '</p>';
    
    $('#truth').addClass('animated fadeOut');
    $('#truth').css('display', 'none');
    
    $('#dare').addClass('animated fadeOut');
    $('#dare').css('display', 'none');
    
    $('#reset').removeClass('animated fadeOut');
    $('#reset').addClass('animated fadeIn white-color');
    $('#reset').css('display', 'block');


});

/* dare challenge display */
document.getElementById('dare').addEventListener('click', function() {

    statementSpace.innerHTML = "";
    resetSpace.innerHTML = "";
    resetSpace.innerHTML = '<button class="btn btn-block black-bg white-color" id="reset"><span class="fa fa-home"></span></button>';
    reset();
    
    var num = Math.floor(Math.random()*dares.length);
    var dare = dares[num];
    statementSpace.innerHTML = '<p class="animated zoomIn">' + dare + '</p>';
    
    $('#truth').addClass('animated fadeOut');
    $('#truth').css('display', 'none');
    
    $('#dare').addClass('animated fadeOut');
    $('#dare').css('display', 'none');
    
    $('#reset').removeClass('animated fadeOut');
    $('#reset').addClass('animated fadeIn white-color');
    $('#reset').css('display', 'block');
    

});

/* to return to the home display */
var reset = function() {
    
    document.getElementById('reset').addEventListener('click', function() {
   
        $('#truth').css('display', 'block');
        $('#dare').css('display', 'block');

        $('#reset').removeClass('animated fadeIn white-color');
        $('#reset').addClass('animated fadeOut');
        $('#reset').css('display', 'none');

        statementSpace.innerHTML = "";

        $('#truth').removeClass('animated fadeOut');
        $('#truth').addClass('animated fadeIn');
        $('#truth').css('display', 'block');

        $('#dare').removeClass('animated fadeOut');
        $('#dare').addClass('animated fadeIn');
        $('#dare').css('display', 'block');

        statementSpace.innerHTML = '<p class="animated zoomIn">or</p>';
        resetSpace.innerHTML = '<button class="btn btn-block white-bg black-color" id="customize"><span class="fa fa-pencil"></span></button>';
        customizeActivity();


    });
    
    
}


/* to initalize option to edit truth and dare options */
var customizeActivity = function() {
    
    customize.addEventListener('click', function() {
    
        var play = document.getElementById('play');
        $(play).css('display', 'none');

        var edit = document.getElementById('edit');
        $(edit).css('display', 'block');
        $(edit).addClass('animated slideInUp').one(animationEnd, function() {
            $(this).removeClass('animated slideInUp');
        });
        
        loadTruthsList();

    });
    
    
}
customizeActivity();


/* display, add, and delete truth items */
var loadTruthsList = function() {
    
    document.getElementById('newTruthList').innerHTML = "";
    for(i=0; i < truths.length; i++) {
            
        document.getElementById('newTruthList').innerHTML += '<li class="list-group-item" id="' + i + '"><button class="badge truth-badge btn" id="badge' + i + '">-</button>' + truths[i] + '</li>';

    }
    
    truthBadgeClick();
    moveNext();
}

var truthBadgeClick = function() {
    
    var truthBadge = document.getElementsByClassName('truth-badge');
    
    var removeTruth = function() {
        
        var $this = $(this);
        var parentId = $this.parent().attr('id');
        truths.splice(parentId, 1);
        loadTruthsList();
        
    }
    
    for(i=0; i<truthBadge.length; i++) {
        truthBadge[i].addEventListener('click', removeTruth, false);
    }
    
}

var addTruth = function() {
    
    var checkTruthButton = document.getElementById('checkTruthButton');
    checkTruthButton.addEventListener('click', function () {
        
        var newTruth = document.getElementById('truthInput').value;
        truths.unshift(newTruth);
        loadTruthsList();
        document.getElementById('truthInput').value = '';
        
        
    });
    
    $('#truthInput').keyup(function(e) {
        
        
        if (e.which === 13) {
            
            var newTruth = document.getElementById('truthInput').value;
            truths.unshift(newTruth);
            loadTruthsList();
            document.getElementById('truthInput').value = '';
            
        }
        
    });
    
}

addTruth();


/* move to dare input */
var moveNext = function() {
    
    document.getElementById('next').addEventListener('click', function() {
    
        $('#newDareList').css('display', 'block');
        $('#newDareList').addClass('animated fadeIn').one(animationEnd, function() {
           $(this).removeClass('animated fadeIn');
        });
        $('#newTruthList').css('display', 'none');
        $('#next').css('display', 'none');
        $('#save').css('display', 'block');
        $('#truthInput').css('display', 'none');
        $('#checkTruthButton').css('display', 'none');
        $('#dareInput').css('display', 'inline');
        $('#dareInput').addClass('animated flipInX').one(animationEnd, function() {
           $(this).removeClass('animated flipInX');
        });



        loadDaresList();
        $('#checkDareButton').css('display', 'inline');


    });
    
}


/* display, add, and delete dare items */
var loadDaresList = function() {
    
    document.getElementById('newDareList').innerHTML = "";
    for(i=0; i < dares.length; i++) {
            
        document.getElementById('newDareList').innerHTML += '<li class="list-group-item" id="' + i + '"><button class="badge dare-badge btn" id="badge' + i + '">-</button>' + dares[i] + '</li>';

    }
    
    dareBadgeClick();
    updateLists();
    
}

var dareBadgeClick = function() {
    
    var dareBadge = document.getElementsByClassName('dare-badge');
    
    var removeDare = function() {
        
        var $this = $(this);
        var parentId = $this.parent().attr('id');
        dares.splice(parentId, 1);
        loadDaresList();
        
    }
    
    for(i=0; i<dareBadge.length; i++) {
        dareBadge[i].addEventListener('click', removeDare, false);
    }
    
}

var addDare = function() {
    
    var checkDareButton = document.getElementById('checkDareButton');
    checkDareButton.addEventListener('click', function () {
        
        var newDare = document.getElementById('dareInput').value;
        dares.unshift(newDare);
        loadDaresList();
        document.getElementById('dareInput').value = '';
        
        
    });
    
    $('#dareInput').keypress(function(e) {
        
        
        if (e.which === 13) {
            
            var newDare = document.getElementById('dareInput').value;
            dares.unshift(newDare);
            loadDaresList();
            document.getElementById('dareInput').value = '';
            
        }
        
    });
    
}

addDare();


/* update truth and dare arrays and save to local storage */
var updateLists = function() {
    
    document.getElementById('save').addEventListener('click', function() {
    
        $('#edit').css('display', 'none');
        $('#next').css('display', 'block');
        $('#play').css('display', 'block');
        $('#play').addClass('animated slideInDown').one(animationEnd, function() {
            $(this).removeClass('animated slideInDown');
        });
        $('#newTruthList').css('display', 'block');
        $('#newDareList').css('display', 'none');
        $('#truthInput').css('display', 'inline');
        $('#checkTruthButton').css('display', 'inline');
        $('#dareInput').css('display', 'none');
        $('#checkDareButton').css('display', 'none');
        
        $('#save').css('display', 'none');
        $('#customize').addClass('animated fadeIn').one(animationEnd, function() {
           $(this).removeClass('animated fadeIn'); 
        });
        
        localStorage.setItem("truths", JSON.stringify(truths));
        localStorage.setItem("dares", JSON.stringify(dares));

    });
    
    
    
}