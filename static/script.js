function generateCard() {
    console.log("generateCard called");

    const input = document.getElementById("fucksInput").value.trim();
    const phrases = [
        "I give {input} fucks.",
        "Lay your eyes upon the Soil on which I grow my fucks, for I have {input} to offer.",
        "Behold! {input} fucks were Spared.",
        "You Asked..... I have {input} to give.",
        "After intense calculation, I've determined I give exactly {input} fucks.",
        "My reservoir of fucks currently contains {input}.",
        "You want fucks? Sorry, I only carry {input} on me.",
        "I summoned the council. We agreed: {input} fucks shall be given.",
        "I reached into the void and pulled out {input} fucks for you.",
        "In this essay, I will demonstrate why I give {input} fucks.",
        "Based on scientific research, my give-a-fuck level is {input}.",
        "I climbed a mountain to see if I cared. Found only {input} fucks.",
        "I've emptied my soul. What's left? {input} fucks.",
        "An ancient scroll foretold that I’d give {input} fucks today.",
        "I dreamt of a world where I gave more... but woke up with {input}.",
        "I held a seance to summon my fucks. Only {input} responded.",
        "My emotional bank account has a balance of {input} fucks.",
        "I brewed a potion of care. It produced exactly {input} fucks.",
        "Check my receipts — I’ve spent {input} fucks on this nonsense.",
        "According to the stars, my astrological fuck forecast is {input}.",
        "I asked the gods how many fucks to give. They whispered: '{input}'.",
        "I opened a chest of concern and found {input} fucks gleaming inside.",
        "A fuck fell from the heavens. I caught it. I now have {input}.",
        "I dug deep into my soul and uncovered {input} fucks.",
        "I planted seeds of concern. Only {input} fucks sprouted.",
        "I held a mirror to my care… saw exactly {input} fucks staring back.",
        "I consulted my inner child. They offered {input} fucks.",
        "I danced under the moonlight, giving {input} graceful fucks.",
        "I flipped a coin — heads: {input} fucks, tails: still {input}.",
        "I searched every pocket. Found lint… and {input} fucks.",
        "I built a temple of care. Inside? Just {input} fucks.",
        "I whispered to the wind. It echoed back {input} fucks.",
        "I lit a candle of concern. It burned exactly {input} fucks long.",
        "I asked my ancestors. They passed down {input} fucks.",
        "I played the song of empathy — the chorus sang {input} fucks.",
        "I summoned a spirit guide. It offered me {input} fucks.",
        "I forged a blade of interest. It was tempered with {input} fucks.",
        "I hosted a TED Talk on caring. My conclusion? {input} fucks.",
        "I rolled a D20 for effort. Critical hit: {input} fucks.",
        "I swam the ocean of emotion — surfaced with {input} fucks.",
        "I loaded a care package. Contents: {input} fucks.",
        "I enrolled in a class called Giving a Fuck 101. I graduated with {input}.",
        "I checked my aura — it’s glowing with {input} fucks.",
        "I walked into the void and bartered for {input} fucks.",
        "I traced constellations — each star was worth {input} fucks.",
        "I recorded a podcast: How Many Fucks I Give — episode count: {input}.",
        "I studied ancient texts. The prophecy spoke of {input} fucks.",
        "I stared into a crystal ball. It revealed {input} fucks.",
        "I built a bridge over troubled water… paved with {input} fucks.",
        "I wrote a haiku. It contained exactly {input} fucks.",
        "I pet a cat, and it purred out {input} fucks.",
        "I watched the sunset and counted {input} fucks fade into the horizon.",
        "I designed a care-o-meter — it maxed out at {input} fucks.",
        "I picked a flower of empathy. It had {input} petals (fucks).",
        "I tossed a fuck into the wishing well. Echoes: {input}.",
        "I decoded a message from the stars. It read: Give {input} fucks.",
        "I explored my chakras — found {input} fucks hiding in the root.",
        "I used a divining rod — it pointed to {input} fucks underground.",
        "I painted a mural of compassion. Hidden inside: {input} fucks.",
        "I knocked on heaven’s door — they handed me {input} fucks.",
        "I lost a game of poker. My final bet? {input} fucks.",
        "I typed my feelings into a spreadsheet. Total? {input} fucks.",
        "I bought a map to caring. X marked {input} fucks.",
        "I ordered some fucks on Amazon. Tracking says: {input} en route.",
        "I built a robot to measure emotion. Output: {input} fucks.",
        "I climbed the tree of apathy. One fruit fell — labeled {input} fucks.",
        "I pressed _F_ to give a fuck — held it down for {input}.",
        "I asked ChatGPT how many fucks to give. It said: {input}.",
        "I discovered an ancient rune. It translates to {input} fucks.",
        "I bought a candle scented with concern. It burns for {input} fucks.",
        "I painted a self-portrait. The title: With {input} Fucks.",
        "I rode the emotional rollercoaster — peak height: {input} fucks.",
        "I wandered a field of cares. Picked {input} fucks in full bloom.",
        "By the beard of Zeus, I bestow upon thee exactly {input} fucks.",
        "I traded {input} fucks for a half-eaten burrito and a dream.",
        "Somewhere in the quantum realm, I gave precisely {input} fucks.",
        "Thy fucks? Numbered thusly: {input}. Engraved in stone by monks.",
        "In a parallel dimension, I care {input} times. Here? Still zero.",
        "I wrote {input} fucks in invisible ink. Good luck finding them.",
        "The dragon of apathy guards {input} fucks in his lair.",
        "I whispered {input} fucks into the void. It yawned.",
        "From the depths of Mordor, I forged {input} fucks in secret.",
        "Uploaded {input} fucks to the cloud. It rained irony.",
        "I tossed {input} fucks into the wishing well. Nothing changed.",
        "Consulted my inner oracle—she spat out {input} fucks and a spoon.",
        "I buried {input} fucks under a pyramid of nachos.",
        "The intergalactic council recorded me giving {input} fucks. They applauded.",
        "I painted a portrait of {input} fucks. It's in the Louvre now.",
        "In the court of King Whatever, I was knighted with {input} fucks.",
        "I baked a pie and filled it with exactly {input} fucks. Bon appétit.",
        "I sent {input} fucks by carrier pigeon. The bird quit.",
        "A time traveler warned me not to give more than {input} fucks. I listened.",
        "I summoned {input} fucks using ancient runes and a potato.",
        "The stars aligned and spelled out: '{input} fucks only.'",
        "My emotional compass points true north to {input} fucks.",
        "I fenced {input} fucks to pirates for cursed rum.",
        "The Book of Indifference chronicles my {input} fucks in Chapter Meh.",
        "I gave {input} fucks and summoned a squirrel. It screamed.",
        "Recorded {input} fucks in binary: 0110-screw-it.",
        "I auctioned {input} fucks on eBay. Nobody bid.",
        "I delivered {input} fucks via drone. It crashed into apathy.",
        "Danced naked under a blood moon and summoned {input} fucks.",
        "I built a spaceship, traveled light-years, and still found {input} fucks.",
        "I gave {input} fucks and a side of ranch.",
        "The Oracle of Walmart priced my care at {input} fucks, final sale.",
        "I conducted a symphony of {input} fucks and one confused duck.",
        "My pet rock registered {input} fucks on the apathometer.",
        "Behold! I scrawled {input} fucks across the bathroom stall of destiny.",
        "I texted {input} fucks to the void. It left me on read.",
        "I crocheted {input} fucks into a scarf of disdain.",
        "I gave {input} fucks and a high-five to a raccoon.",
        "I logged {input} fucks into the blockchain of who-cares.",
        "The ghost of my motivation moaned, '{input} fucks... oooooh...'",
        "I found {input} fucks in a cereal box. Free toy too.",
        "Fired {input} fucks out of a glitter cannon. No regrets.",
        "I tuned my violin to the key of {input} fucks flat.",
        "Summoned {input} fucks from the depths of a used sock drawer.",
        "I threw {input} fucks into the Bermuda Triangle. They vanished.",
        "Consulted a D20 of apathy—rolled {input} fucks.",
        "I trapped {input} fucks in a snow globe and shook ‘em.",
        "Wrote {input} fucks on a balloon and let it drift into space.",
        "I mailed {input} fucks to Hogwarts. They were lost in transit.",
        "I summoned Siri. She found exactly {input} fucks in my schedule.",
        "An AI calculated I give {input} fucks. It self-destructed.",
        "I screamed {input} fucks into a canyon. The echo mocked me.",
        "I brewed {input} fucks into a tea of mild disapproval.",
        "I installed a software update. Gained {input} fucks. Laggy though.",
        "The prophecy foretold {input} fucks. I shrugged anyway.",
        "My therapist said I give {input} fucks. She's also imaginary.",
        "Disguised {input} fucks as compliments. Nobody noticed.",
        "Sent {input} fucks via Morse code. The message was lost.",
        "My aura glows with exactly {input} fucks worth of care.",
        "Beamed {input} fucks directly into the Matrix.",
        "I balanced {input} fucks on my nose like a seal of indifference.",
        "I planted {input} fucks in the soil of ambivalence. Nothing grew.",
        "An old wizard cursed me with {input} eternal fucks. I laughed.",
        "I asked the moon how many fucks to give—it whispered '{input}'.",
        "I drew {input} fucks in chalk on the sidewalk of life.",
        "I keep {input} fucks in a mason jar labeled 'meh.'",
        "I launched {input} fucks into orbit. Now they circle Uranus.",
        "The council of elders granted me {input} sacred fucks.",
        "I traded {input} fucks for a kazoo and a mild breeze.",
        "My clone gives {input} fucks. I’m free.",
        "I read {input} fucks aloud during a séance. The spirits laughed."
    ];
    
    
    const random = Math.floor(Math.random() * phrases.length);
    const phrase = phrases[random].replace('{input}', input);
    document.getElementById('cardText').innerText = phrase;
    
    
    const backgrounds = [
        "url('static/images/bg1.jpg')",
        "url('static/images/bg2.jpg')",
        "url('static/images/bg3.jpg')",
        "url('static/images/bg4.jpg')",
        "url('static/images/bg5.jpg')",
        "url('static/images/bg6.jpg')",
        "url('static/images/bg7.jpg')"
    ];

    
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    
    
    const card = document.getElementById("card");
    card.style.backgroundImage = randomBg;

  
    document.getElementById("card").classList.remove("hidden");
}

function shareCard() {
    const card = document.getElementById('card');
    
   
    html2canvas(card, { useCORS: true, scale: 2 }).then(canvas => {
       
        const imageUrl = canvas.toDataURL("image/png");

       
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'how-many-fucks.png';
        link.click();  

        
        alert("Fuck you!!");
    });
}
