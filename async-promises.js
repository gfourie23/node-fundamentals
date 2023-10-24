let favNumber = 23;
let url = "http://numbersapi.com";

$.getJSON(`${url}/{favNumber}?json`).then(data => {
    console.log(data);
});

let favNumbers = [3, 7, 22];
$.getJSON(`${url}/${favNumbers}?json`).then(data => {
    console.log(data);
});

Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${url}/${favNumber}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});