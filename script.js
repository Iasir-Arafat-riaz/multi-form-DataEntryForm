let products = [];
let count = 0;
const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", function () {
  let productFormDiv = document.getElementsByClassName("products-form-div");
  products = [];  

  console.log("productFormDiv.length",productFormDiv.length);
  for (let index = 1; index <= productFormDiv.length; index++) {
    
    let productObj = {
      prodName : document.getElementById(`product-name${index}`).value,
      description : document.getElementById(`describe${index}`).value,
      quantity : document.getElementById(`quantity${index}`).value,
      rate :  document.getElementById(`rate${index}`).value,
      amount : document.getElementById(`amount${index}`).value
    };
    products.push(productObj);
    console.log(productObj);
  }

  console.log(products);
  const jsonRender = document.getElementById("render");
  if (products.length) {
    jsonRender.innerHTML = JSON.stringify(products);
  } else {
    jsonRender.innerHTML = "";
  }
});

const productDiv = document.getElementById("product-section");
document.getElementById("plus-btn").addEventListener("click", function () {
  count++;

  if(count>1){
    let productObj = {
      prodName : document.getElementById(`product-name${count-1}`).value,
      description : document.getElementById(`describe${count-1}`).value,
      quantity : document.getElementById(`quantity${count-1}`).value,
      rate :  document.getElementById(`rate${count-1}`).value,
      amount : document.getElementById(`amount${count-1}`).value
    };
    products.push(productObj);
    console.log(products);
  }

  productDiv.innerHTML += `<div class="products-form-div">
  <button onclick="deleteForm()" id="delete-btn">Delete</button>
  <form>
    <label for="prod-name">Product Name</label><br />
    <input
      type="text"
      id=${"product-name" + count}
      name="prodName"
      placeholder="your name"
    /><br />
    <label for="describe">Description</label><br />
    <textarea name="describe" id=${
      "describe" + count
    } cols="30" rows="5"></textarea><br />
    <label for="quantity">Quantity</label><br />
    <input name="quantity" type="number" id=${
      "quantity" + count
    } placeholder="" /><br />
    <label for="rate">Rate</label><br />
    <input name="rate" type="number" id=${
      "rate" + count
    } placeholder="" /><br />
    <label for="amount">Amount</label><br />
    <input name="amount" type="number" id=${
      "amount" + count
    } placeholder="" /><br />
    <br />
  </form>
  <br />
</div>`;
});
function deleteForm() {
  let prodFormDiv = document.getElementsByClassName("products-form-div");
  for (let prodForm of prodFormDiv) {
    productDiv.removeChild(prodForm);
  }
}
