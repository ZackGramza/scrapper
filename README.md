This scrapper was designed to scrape certain lines of html from a website and then return those specified strings back to the user, to make changes to what you are scraping simply change the url, the 11th line of code ( const script = $('script').text() ) remove the script and change to whatever line of html you are looking to pull to the user before we create a variable and regexp certain pieces of that string. 

From here we will create our variables and regexp them and return them to the console (Lines 13-27) Swap these as needed for your use case.

***NOTE: This code is written in the intention your return will be a string***
