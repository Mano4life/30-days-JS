
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = 'https://api.quotable.io/random'


// function to get the quote and the author from the api link
async function getQuote(url){
    const response = await fetch(url);
    let data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(api_url);

// function to open tweet option....
function tweet(){
    let link = "https://twitter.com/intent/tweet?text="
    window.open(link + '"' + quote.innerHTML + '"' + " >>>> by: " + author.innerHTML, "Tweet Window", "width=600, height=300");
}