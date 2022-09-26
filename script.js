
const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('search');
let hpCharacters= [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
              character.name.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadcharecters = async () => {
    try{
    const res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
    hpCharacters = await res.json();
    console.log(hpCharacters)
    displayCharacters(hpCharacters);
    }catch(error){
    console.log("errormsg:",error)
    }
    };

const displayCharacters = (characters)=>{
    
    const htmlString = characters
    .map((character) =>{
        return `<div class="container">
        <div class="name">
        <h3>${character.name}</h3>
        <p>${character.brand}</p>
</div>
<div class="img">
<img src="${character.image_link}" alt="${character.name}">
</div>
<div class="link"> <a href="${character.product_link}">link</a></div>
<p class="des">DESCRIPTION: <br>
   ${character.description  }
</p>
</div>`;
    })
.join('');
charactersList.innerHTML = htmlString;
};

loadcharecters();

