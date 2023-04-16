const products = [];
let count=0;
const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", function () {
 console.log(products);
 const jsonRender = document.getElementById("render")
 jsonRender.innerHTML = JSON.stringify(products);
 
});

const productDiv = document.getElementById("product-section");
document.getElementById("plus-btn").addEventListener("click", function () {
  let productFormDiv = document.getElementsByClassName("products-form-div");
  let productObj={prodName:"",description:"", quantity:"", rate:"", amount:""}
  for(let productForm of productFormDiv){
    console.log(productForm.innerHTML);
    console.log(count);
    const productName =document.getElementById(`product-name${count}`);
    console.log(productName);
    productObj.prodName=productName.value;
    const productDescription =document.getElementById(`describe${count}`);
    productObj.description=productDescription.value;
    const productQuantity =document.getElementById(`quantity${count}`);
    productObj.quantity=productQuantity.value;
    const productRate =document.getElementById(`rate${count}`);
    productObj.rate=productRate.value
    const productAmount =document.getElementById(`amount${count}`);
    productObj.amount=productAmount.value;
    products.push(productObj)
    console.log(productObj);
  } 
  console.log(products);
  count++;
  productDiv.innerHTML += `<div class="products-form-div">
  <button onclick="deleteForm()" id="delete-btn">Delete</button>
  <form>
    <label for="prod-name">Product Name</label><br />
    <input
      type="text"
      id=${"product-name"+count}
      name="prodName"
      placeholder="your name"
    /><br />
    <label for="describe">Description</label><br />
    <textarea name="describe" id=${"describe"+count} cols="30" rows="5"></textarea><br />
    <label for="quantity">Quantity</label><br />
    <input name="quantity" type="number" id=${"quantity"+count} placeholder="" /><br />
    <label for="rate">Rate</label><br />
    <input name="rate" type="number" id=${"rate"+count} placeholder="" /><br />
    <label for="amount">Amount</label><br />
    <input name="amount" type="number" id=${"amount"+count} placeholder="" /><br />
    <br />
  </form>
  <br />
</div>`;

});
function deleteForm(){
  let prodFormDiv = document.getElementsByClassName("products-form-div")
  for(let prodForm of prodFormDiv ){
    productDiv.removeChild(prodForm);
  }
}

// const products = [];
// document.getElementById("submit-btn").addEventListener("click", function () {

//     // if(product,length)
//   for (let product of products) {
//     const productObj = {
//         prodName: "",
//         description: "",
//         quantity: "",
//         rate: "",
//         amount: "",
//       }
//     const prodItemName= document.getElementsByClassName("prod-name");
//     for(let prod of prodItemName){
//         console.log(prod.value);

//         product.prodName=prod.value;

//     }

//     // product.prodName = document.getElementsByClassName("prod-name");
//     // product.description = document.getElementById("describe").value;
//     // product.quantity = document.getElementById("quantity").value;
//     // product.rate = document.getElementById("rate").value;
//     // product.amount = document.getElementById("amount").value;
//     products.push(productObj)
//   }
// //   products.push({prodName:"test",description:"testing",quality:"1",rate:"2",amount:"3"})
//   const productJson = JSON.stringify(products);
//   console.log(productJson);
//   document.getElementById("render").innerText = productJson;
// });
