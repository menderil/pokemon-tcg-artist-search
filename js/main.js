let searchResult = [];
let ul = document.querySelector('#displayResults');
document.querySelector('button').addEventListener('click', getCards);

async function getCards(){
    let searchInput = document.querySelector('input').value;
    //console.log(searchInput);
    
    const res = await fetch(`https://api.pokemontcg.io/v2/cards?q=artist:"${searchInput}"`);
    const result = await res.json();
    searchResult = result.data;
    //console.log(searchResult);

    //sorts the result data by the card object's release date
    searchResult.sort(function(a,b){
        return a.set.releaseDate.localeCompare(b.set.releaseDate);
    })

    displayResults();

}

function displayResults(){
    clearUL();
    for(let i = 0; i < searchResult.length; i++){
        var li = document.createElement('li');
        var img = document.createElement('img');
        var name = document.createElement('span');
        var set = document.createElement('span');
        //var releaseDate = document.createElement('span');

        img.src = searchResult[i].images.small;
        name.innerText = searchResult[i].name;
        set.innerText = searchResult[i].set.name;
       // releaseDate.innerText = searchResult[i].set.releaseDate;

        ul.appendChild(li);  
        li.appendChild(img); 
        li.appendChild(name);
        li.appendChild(set);
        //li.appendChild(releaseDate); 
    }

}

function clearUL(){
    while(ul.firstChild ){
        ul.removeChild(ul.firstChild);
      }
}