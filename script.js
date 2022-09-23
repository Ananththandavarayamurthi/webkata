

function createmakeup(makeup){
            makeup.forEach((makeup) => {document.body.innerHTML+=`<div class="container">
            <div class="name">
                    <h3>${makeup.brand}</h3>
                    <p>${makeup.name}</p>
            </div>
            <div class="img">
            
            <img src="${makeup.image_link}">
            </div>
            <div class="link"> <a href="${makeup.product_link}">link</a></div>
            <p>
                description
            </p>
        </div>`
    });
};
     


async function getmakeup(){
    try{
      let data = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
      let makeup=  await data.json();
       console.log(makeup);
       createmakeup(makeup);
    }catch(error){
        console.log("errormsg:",error)
    }
    
}
getmakeup();