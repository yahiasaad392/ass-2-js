
         const quotes = [
            {
                quote: "“When you play the game of thrones, you win or you die.”",
                author: "Cersei Lannister, Game of Thrones"
            },
            {
                quote: "“Why so serious?”",
                author: "The Joker, The Dark Knight"
            },
            {
                quote: "“The greatest trick the Devil ever pulled was convincing the world he didn't exist.”",
                author: "Roger 'Verbal' Kint, The Usual Suspects"
            },
            {
                quote: "“Your mind is the scene of the crime.”",
                author: "Cobb, Inception"
            },
            {
                quote: "“The first rule of Fight Club is: you do not talk about Fight Club.”",
                author: "Tyler Durden, Fight Club"
            },
            {
                quote: "“What's in the box?”",
                author: "Detective David Mills, Se7en"
            },
            {
                quote: "“I'm the guy who does his job. You must be the other guy.”",
                author: "Sgt. Dignam, The Departed"
            },
            {
                quote: "“Sell me this pen.”",
                author: "Jordan Belfort, The Wolf of Wall Street"
            },
            {
                quote: "“A million dollars isn't cool. You know what's cool? A billion dollars.”",
                author: "Sean Parker, The Social Network"
            },
            {
                quote: "“I'm gonna make him an offer he can't refuse.”",
                author: "Don Vito Corleone, The Godfather"
            },
            {
                quote: "“Which would be worse – to live as a monster, or to die as a good man?”",
                author: "Teddy Daniels, Shutter Island"
            }
        ];


        const quoteBtn = document.getElementById('quoteBtn');
        const quoteOutput = document.getElementById('quoteOutput');
        const authorOutput = document.getElementById('authorOutput');

        let lastIndex = -1;

        function generateQuote() {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * quotes.length);
            } while (randomIndex === lastIndex);
            
            lastIndex = randomIndex;
            
            quoteOutput.textContent = quotes[randomIndex].quote;
            authorOutput.textContent = `--${quotes[randomIndex].author}`;
        }

        quoteBtn.addEventListener('click', generateQuote);
