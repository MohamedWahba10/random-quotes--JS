
// Define an array of quotes

var quotelist = [{

    text: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
},
{
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
},
{
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
},
{
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
},
{
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
},
{
    text: "Be yourself; everyone else is already taken",
    author: "Oscar Wilde"
},
{
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    author: "Albert Einstein"
},
{
    text: "So many books, so little time",
    author: "Frank Zappa"
},
]

var lastRandomIndex = -1;
function generateRandomQuote() {

    var randomIndex = Math.floor(Math.random() * quotelist.length); //The Math.floor() function rounds the random number to the nearest whole number. 
    if (randomIndex == lastRandomIndex) {

        while (randomIndex == lastRandomIndex) {
            var randomIndex = Math.floor(Math.random() * quotelist.length);
        }

    } 
    lastRandomIndex = randomIndex;
    var randomQuote = quotelist[randomIndex];
    document.getElementById("quote-text").innerHTML = "“" + randomQuote.text + "”";
    document.getElementById("quote-author").innerHTML = "-- " + randomQuote.author;
}



generateRandomQuote();

