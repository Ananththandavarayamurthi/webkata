// declraing variabls
const makeup = document.getElementById('makeup');
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
<div class="link"> <a href="${product.product_link}">link</a></div>
<p class="des">DESCRIPTION: <br>
   ${product.description  }
</p>
</div>`;
    })
.join('');
makeup.innerHTML = htmlString;
};
// call function
makeupproduct();
