/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 Create quotes array and objects
***/
let quotes = [];
let q1 = {
          quote: "It’s 106 miles to Chicago, we’ve got a full tank, half pack of cigarettes, it’s dark out, and we’re wearing sunglasses. Hit it.",
          source: "Elwood Blues (Dan Akroyd)",
          citation: "The Blues Brothers",
          year: 1980,
          directed: "John Landis"
           
          };
let q2 = {
          quote: "F*Ck It, Dude, Let’s Go Bowling.",
          source: "Walter (John Goodman)" ,
          citation: "The Big Lebowski",
          year: 1998,
          directed: "Joel & Ethan Coen"

          
          };
let q3 = {
          quote: "This is supposed to be a happy occasion!Let's not bicker and argue about who killed who.",
          source:  "Lord of Swamp Castle (Michael Palin)",      
          citation: "Monty Python and Holy Grail"    
          };
let q4 = {
          quote: "You shall not pass!",
          source:  "Gandalf (Ian Murray McKellen)",
          citation: "Lord of the Rings", 
          directed: "Peter Jackson",
          year: 2001         
          };
let q5 = {
          quote: "Shaken, not stirred!",
          source:  "James Bond"         
          };

// push quotes into the array
quotes.push(q1, q2, q3, q4, q5);


    /**
     * RandomQuote function to select a random quote from an array
     * @param quotesArray = list of quotes to be selected from
     * @returns a single randomly selected quote
     */
function getRandomQuote(quotesArray){
  const maxNum = quotesArray.length;
  const getIndex = Math.floor(Math.random() * maxNum);
return quotesArray[getIndex];
}


/***
 * `printQuote` function
 * 1. select a random quote, check if it has year and citation
 * 2. create a string to be put inside a current HTML quote box
 * 3. check add quotation and/or year if it exists
***/
function printQuote(){
  let quoteSelected = getRandomQuote(quotes);
  let hasYear = quoteSelected.year || false;
  let hasCitation = quoteSelected.citation || false;
  let hasDirector = quoteSelected.directed || false;
  let quoteTextHTML = `<p class="quote">${quoteSelected.quote}</p>
                        <p class="source">${quoteSelected.source}`; 
        if(hasCitation){
            let citationTextHTML = `<span class="citation">${quoteSelected.citation}</span>`;
            quoteTextHTML += (citationTextHTML);
        };

        if(hasDirector){
          let yearTextHTML = `<span class="director">Directed by: ${quoteSelected.directed}</span>`;
          quoteTextHTML += yearTextHTML;
        };

        if(hasYear){
          let yearTextHTML = `<span class="year">${quoteSelected.year}</span>`;
          quoteTextHTML += yearTextHTML;
        };


      quoteTextHTML += `</p>`; //close the element string

      //print to the box
      const quoteBox = document.getElementById('quote-box') ;  
            quoteBox.innerHTML = quoteTextHTML;
      const body = document.querySelector('body');      
            body.style.backgroundColor = generateColor();

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


/**
 * random color generator
 * max value 200 to limit brightness to be sure white text is always visible
 */

 function generateColor(){

  let red = getRandomNumber(200);
  let blue = getRandomNumber(200);
  let green = getRandomNumber(200);
  return  `rgb(${red}, ${blue}, ${green})`;
  }

function getRandomNumber(maxNum){
  return Math.floor(Math.random() * maxNum);
}


/**
 * autorefresh function
 * when clicked checkbox the autorefresh function will start 
 */

function startAutorefresh(){
    return setInterval(printQuote, 8000);
}

const autorefresh = document.querySelector('#autorefresh');
autorefresh.addEventListener('click', e => {
  let nextQuote = printQuote();  //first change quote before starting changing interval
  startAutorefresh();
  autorefresh.parentElement.style.display = "none"; //hide checkbox

});