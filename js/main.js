let searchResult = [];
document.querySelector('button').addEventListener('click', getCards);

async function getCards(){
   let searchInput = document.querySelector('input').value;
   console.log(searchInput);
    
    const res = await fetch(`https://api.pokemontcg.io/v2/cards?q=artist:"${searchInput}"`);
    const result = await res.json();
    searchResult = result.data;
    console.log(searchResult);
}

