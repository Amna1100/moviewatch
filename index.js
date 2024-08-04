 const apikey="71653f59";
 const apiurl="https://www.omdbapi.com"
 const searchText=document.getElementById("inp");
 const searchResult=document.getElementById("re");
 searchText.addEventListener("keyup",function(){

if(this.value.length>=3)
{
    getMovie(this.value);
    
}
 
 })
 async function getMovie(query)
 {
   try{  
const res=await fetch(`${apiurl}/?s=${query}&apikey=${apikey}`) 
const movies=await res.json()
// console.log(data)
 if(movies.Response==="True"&& movies.Response)
{
  const MovieList=movies.Search.map(movie=>`<li class="singlemovie" data-poster="${movie.Poster}">
    <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">
 
 ${movie.Title}
    </a>
   </li>`).join('')
   
  searchResult.innerHTML=MovieList;
 const  movieImage=document.getElementById("movieimg")
singlemovies=Array.from(document.querySelectorAll(".singlemovie"))
singlemovies.forEach(singlemovie => {
    singlemovie.addEventListener("mouseenter",function()
{
  
   movieImage.style.display="block";
  const posterurl=this.getAttribute("data-poster")
   
   movieImage.src=posterurl
}) 
singlemovie.addEventListener("mouseout",function()
{
 
   movieImage.style.display="none";
   
}) 

});

// const displayimage=document.getElementById("displayimg") 
// singlemovies.map(singlemovie =>{
// singlemovie.addEventListener("mouseenter",function()
// {
//     //    displayimage.style.display="block";
//        const Movieimages=movies.Search.map(movie=>` 
       
//       <div id="displayimg">
//                  <img src="${movie.Poster}  alt=${movie.Title}  style="width:50px;heigth:50px;margin-right:10px;">
//                 </div>
     
//        `).join('')
//    displayimage.innerHTML= Movieimages;
// })


 

//    <img src="${movie.Poster}  alt=${movie.Title}  style="width:50px;heigth:50px;margin-right:10px;">   `
  
 
}
 else 
 {
    searchResult.innerHTML="not found result";
 }
   }
   catch(error)
   {
    console.log("error")
   }
  
 




 }


 
 
// <img src="${movie.Poster}  alt=${movie.Title}  style="width:50px;heigth:50px;margin-right:10px;">
 
 