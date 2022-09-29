const axios = require('axios');
const cheerio = require('cheerio')

var url='https://launchmynft.io/collections/4T7ruRKjT6QhcWCutWMVtC3kvVbBZFAouK9rBN7oJ8YB/9PDbV2kIxurFuCyKwcfY';

var cmid = '';
axios(url)
.then(response =>{
    const html = response.data
    const $ = cheerio.load(html)
    const script = $('script').text()
    console.log(script)
    const regExp = new RegExp(`newCandyMachineAccountId":"(.*?)",`, "g");
    cmid = regExp.exec(script);
    console.log(cmid[1])
    const regExp1 = new RegExp(`cost":"(.*?)",`, "g");
    cost = regExp1.exec(script);
    console.log(cost[1])
    const regExp2 = new RegExp(`maxSupply":(.*?),`, "g");
    supply = regExp2.exec(script);
    console.log(supply[0])
    const regExp3 = new RegExp(`totalMints":(.*?),`, "g");
    minted = regExp3.exec(script);
    console.log(minted[0])
    const regExp4 = new RegExp(`discord":"(.*?)",`, "g");
    discord = regExp4.exec(script);
    console.log(discord[0])




})