let favNumber = 23;
let url = "http://numbersapi.com";

async function part1() {
    let data = await $.getJSON(`${url}/{favNumber}?json`);
    console.log(data);
}
part1();

// Part 2

const favNumbers = [3, 7, 22];

async function part2() {
    let data = await $.getJSON(`${url}/${favNumbers}?json`);
    console.log(data);
};
part2();

//Part 3

async function part3() {
    let facts = await Promise.all(
    Array.from({ length: 4 }, () => 
     $.getJSON(`${url}/${favNumber}?json`))
    );
    facts.forEach(data => {
        $("body").append(`<p>${data.text}</p>`);
});
}
part3();