
let carts = document.querySelectorAll('.add-cart');

let products = [
  {
    name:'Math',
    tag:'Intro to Algebra',
    price:50,
    inCart:0
  },

  {
    name:'Philosophy',
    tag:'Greek Mythology',
    price:10,
    inCart:0
  },
  {
    name:'Education',
    tag:'Intro to Administration',
    price:30,
    inCart:0
  },
  {
    name:'Agriculture',
    tag:'Land Economy',
    price:20,
    inCart:0
  },
  {
    name:'Technology',
    tag:'Into to AI',
    price:10,
    inCart:0
  },
  {
    name:'History',
    tag:'Religious Wars',
    price:15,
    inCart:0
  }
];


for (let i=0; i < carts.length; i++){
  carts[i].addEventListener('click', () =>{
    cartNumbers(products[i]);
    totalCost(products[i])
  })
}

function onLoadCartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers){
    document.querySelector('.cart span').textContent = productNumbers;
  }
}


function cartNumbers(product){

  let productNumbers = localStorage.getItem('cartNumbers');


  productNumbers = parseInt(productNumbers);

  if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
  } else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }
    setItems(product);
}

function setItems(product){


  let cartItems = localStorage.getItem('productsInCart');
 
  cartItems = JSON.parse(cartItems);


  if(cartItems != null){

    if(cartItems[product.tag] == undefined ){
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1;
  } else{
      product.inCart = 1;
      cartItems = {
      [product.tag]:product
    }
  }

  localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(product){
  //console.log("The product price is", product.price);

  let cartCost = localStorage.getItem('totalCost');
  console.log("My cartCost is",cartCost);
  console.log(typeof cartCost);

  if(cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  }else{
    localStorage.setItem("totalCost", product.price);
  }


}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products-container");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if(cartItems && productContainer){
    productContainer.innerHTML ='';
    Object.values(cartItems).map(item => {
    productContainer.innerHTML += `
        <tr>
        <td>${item.tag}</td>
        <td>${item.price}.00</td>
        <td>${item.inCart}</td>
        <td>Ghs${item.inCart * item.price}.00</td>
          <td>
          <i class="fas fa-trash-alt"></i>
          </td>
        </tr>
      `
  });
               




/*
  productContainer.innerHTML += 
`
  <div class="checkout">
      <ul>
          <li class="subtotal">subtotal
              <span>GHs${cartCost} </span>
          </li>
          <li class="cart-total">Total
          <span>GHs${cartCost} </span></li>
      </ul>
      <a href="#"class="proceed-btn">Proceed to Checkout</a>
  </div>

`
*/

}
}

onLoadCartNumbers();
displayCart();




/*-----Modal Function-------
$(document).ready(function(){
  $(".card-link").click(function(){
  $(".rounded").attr("src",$(this).parent().siblings().attr("Src"));
  $(".product_name").text($(this).siblings("h2").text());
  $(".product_desc").text($(this).siblings("div").find("p:nth(0)").text());
  $(".product_price").text($(this).siblings("div").find("p:nth(1)").text());
  });
  $("window").resize(function(){
    if($(window).width()< 600){
    $(".modal-content".css("transform","scaleX(1)");
  }
  else{
    $(".modal-content".css("transform","scaleX(1.4)");
  }
});
});

for (let i=0; i < carts.length; i++){
  carts[i].addEventListener('click', ()=>{
    console.log("added  to cart");
  })
}
}
*/