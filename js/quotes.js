const quotes = [
    {
        quote: "Just do it!",
        author: "by: Nike",
    },
    {
        quote: "Fuck my life!",
        author: "by: Timothy Jeoung",
    },
    {
        quote: "Hello world!",
        author: "by: JavaScript",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

