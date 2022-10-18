// declraing variabls
const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('search');
// pass the object in to the array object
let makeupList= [];
// using map
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = makeupList.filter((product) => {
        return (
              product.name.toLowerCase().includes(searchString)
        );
    });
    displayproduct(filteredCharacters);
});
// getting object from api
const makeupproduct = async () => {
    try{
    const res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
    makeupList = await res.json();
    console.log(makeupList)
    displayproduct(makeupList);
    }catch(error){
    console.log("errormsg:",error)
    }
    };
// diplay the product
const displayproduct = (products)=>{
    
    const htmlString = products
    .map((product) =>{
        return `<div class="container">
        <div class="name">
        <h3>${product.name}</h3>
        <p>${product.brand}</p>
</div>
<div class="img">
<img src="${product.image_link}" alt="${product.name}">
</div>
<div class="link"> <button type="button" class="btn btn-primary btn-sm" href="${product.product_link}">shopnow</button></div>
<p class="des">DESCRIPTION: <br>
   ${product.description  }
</p>
</div>`;
    })
.join('');
charactersList.innerHTML = htmlString;
};
// call function
makeupproduct();
