const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// show that we are loading
function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// hide loading
function removeLoadingSpinner() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// show new quote
function newQuote() {
    showLoadingSpinner();
    // pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    // check if author field is blank and replace it with unknown
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }

    // if quote length is long, change styling
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // set the Quote, hide loader
    quoteText.textContent = quote.text;
    removeLoadingSpinner();
}

// Get Quotes from API with async fetch request
// https://jacintodesign.github.io/quotes-api/data/quotes.json

async function getQuotes() {
    showLoadingSpinner();
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // catch error here; in production pass that into an alert
    }
}


// tweet a quote
function tweetQuote() {
    // use template string bc is allows us to use a variable
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`; // important: use backticks and not single quotes
    window.open(twitterUrl, '_blank');
}


// event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// on load we want to run the getQuotes func
getQuotes();
