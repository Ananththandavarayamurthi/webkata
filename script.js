// const makeup =[{brand:"colourpop",
//               category :"pencil",
//               name:"pencil",
//               image_link:"https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769",
//               product_link:"https://colourpop.com/collections/lippie-pencil"
//                 },
//                 {brand:"colourpop",
//               category :"pencil",
//               name:"pencil",
//               image_link:"https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769",
//               product_link:"https://colourpop.com/collections/lippie-pencil"
//                 },
//                 {brand:"colourpop",
//                 category :"pencil",
//                 name:"pencil",
//                 image_link:"https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769",
//                 product_link:"https://colourpop.com/collections/lippie-pencil"
//                   },
// ];

// 
//        
// 

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
     
// createmakeup(makeup);


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

// .then((makeup)=>createmakeup(makeup));