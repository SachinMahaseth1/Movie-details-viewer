
let inputvalue=document.querySelector("#inputvalue");
let searchbtn=document.querySelector("#searchbtn");


    
 


  let  getdata =async ()=>{      
       const movieName=inputvalue.value ;                                                                                                                                                                                                                                                 
                                     
  if(!movieName){
    alert("Empty input");
    return;
  }

  
const API_KEY = "e86a992d"; // wrap the API key in quotes
const url = `https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`;

let realdata;
try{
 const data= await fetch(url);
  realdata=await data.json();
  console.log(realdata);

  if(realdata.Response=="False"){
    alert("Problem :"+ realdata.Error);
    inputvalue.value="";
    return;
  }
}

catch(error){ 
alert(error);
}
 

/// dom part of the web app



const title = document.querySelector("#title");
const year= document.querySelector("#year");
const runtime=document.querySelector("#runtime");
const director=document.querySelector("#director");
const actors=document.querySelector("#actors");
const writer=document.querySelector("#writer");
const imdb = document.querySelector("#imdbrating");
const plot= document.querySelector("#plot");
const poster=document.querySelector("#poster");

title.textContent=realdata.Title;
year.textContent=realdata.Released;
runtime.textContent=realdata.Runtime;
imdb.textContent=realdata.imdbRating;
actors.textContent=realdata.Actors;
writer.textContent=realdata.Writer;
director.textContent=realdata.Director;
plot.textContent=realdata.Plot;       
poster.src= realdata.Poster;                      




}

searchbtn.addEventListener("click",getdata);