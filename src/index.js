console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
const img = document.getElementById(`dog-image-container`)
document.addEventListener(`DOMContentLoaded`,function(){
    fetchImages();
})

function fetchImages(){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(result =>addImages(result))
}

function addImages(result){
  console.log(result)
  //have an array and want to append to the dom
  // want to display each on. so don't need map.
  // for each --> img.innerHTML =

  for (const imgs of result){
      img.innerHTML += imgs 
  }
}