$(function() {
    let url = "https://deckofcardsapi.com/api/deck";

    //Part 1

    async function part1() {
        let data = $.getJSON(`${url}/new/draw/`);
        let { suit, value } = data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    };

    //Part 2

    async function part2() {
    let firstCard = await $.getJSON(`${url}/new/draw`);
        let deckId = firstCard.deck_id;
        let secondCard = await $.getJSON(`${url}/${deckId}/draw/`);
            [firstCard, secondCard].forEach(card => {
                let { suit, value } = card.cards[0];
                console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
            });
        }
    
    //Part 3
    
    async function setup() {
        let $btn = $('button');
        let $cardArea = $('#card-area');

        let deckData = await $.getJSON(`${url}/new/shuffle/`);
        $btn.show().on('click', async function() {
            let cardData = await $.getJSON(`${url}/${deckData.deck_id}/draw/`);
            let cardSrc = cardData.cards[0].image;
            let angle = Math.random() * 90 - 45;
            let randomX = Math.random() * 40 - 20;
            let randomY = Math.random() * 40 - 20;
            $cardArea.append(
                $('<img>', {
                    src: cardSrc,
                    css: {
                        transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                    }
                })
            );
            if (cardData.remaining === 0) $btn.remove();
        });
    }
    setup();
});