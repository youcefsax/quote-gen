let text=document.querySelector('#quote'); 
let randomNumber;
const button=document.getElementById('new-quote');
const twitter=document.getElementById('twitter');
const author=document.getElementById('author');
let loader=document.getElementById('load');
let quoteContainer=document.getElementById('quote-container');
let data=[];

function load(){
     loader.classList.remove('hide');
     quoteContainer.hidden=true;

 }
function complet(){
    quoteContainer.hidden=false;
    loader.classList.add('hide');
  
}

const show=()=>{
    getQuote();
    const ran=data[randomNumber];
    if(ran.text.length>120){
        text.classList.add('long-quote');
    }else{
        text.classList.remove('long-quote');
    }
    text.textContent=ran.text;
    if(!ran.author){
        author.textContent='unkown'
    }else{
    author.textContent=ran.author;
}
complet();
}

async function getQuote(){

    const apiUrl="https://jacintodesign.github.io/quotes-api/data/quotes.json"
    try{
        const fetchUrl=await fetch(apiUrl);
       data=await fetchUrl.json();
       
        }catch(error){
        alert('somthing went wrong')
    }
 }
 button.onclick=()=>{
randomNumber=Math.floor(Math.random()*data.length);
 
show();

}

function tweetQuote(){
    const tweetUrl=`https://twitter.com/intent/tweet?text=${text.textContent} - ${author.textContent}`;
    window.open(tweetUrl,'_blank')
}
twitter.addEventListener('click',tweetQuote);
show();
