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
        "A fuck fell from the heavens. I caught it. I now have {input}."
    ];
    
    const random = Math.floor(Math.random() * phrases.length);
    const phrase = phrases[random].replace('{input}', input);
    document.getElementById('cardText').innerText = phrase;
    
    
    const backgrounds = [
        "url('/how_many_fucks/static/images/bg1.jpg')",
        "url('/how_many_fucks/static/images/bg2.jpg')",
        "url('/how_many_fucks/static/images/bg3.jpg')",
        "url('/how_many_fucks/static/images/bg4.jpg')",
        "url('/how_many_fucks/static/images/bg5.jpg')",
        "url('/how_many_fucks/static/images/bg6.jpg')",
        "url('/how_many_fucks/static/images/bg7.jpg')"
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

        
        alert("Image has been downloaded! You can now share it on WhatsApp, Instagram Chat, Messenger, or Snapchat!");
    });
}
