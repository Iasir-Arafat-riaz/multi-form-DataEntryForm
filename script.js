
let products=[];
const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener("click",function(){
    const inputFields = document.getElementsByClassName("prod-input");
    for (let field of inputFields) {
        // products=[{products[field.name]:field.value}]
        console.log(field);

    }

})

document.getElementById("plus-btn").addEventListener("click", function () {
  const productDiv = document.getElementById("product-section");
  productDiv.innerHTML+= `<div class="products-form-div">
  <form>
    <label for="prod-name">Product Name</label><br />
    <input
      type="text"
      class="prod-name prod-input"
      name="prodname"
      placeholder="your name"
    /><br />
    <label for="describe">Description</label><br />
    <textarea name="describe" class="describe prod-input"" cols="30" rows="5"></textarea><br />
    <label for="quantity">Quantity</label><br />
    <input name="quantity" type="number" class="quantity prod-input"" placeholder="" /><br />
    <label for="rate">Rate</label><br />
    <input name="rate" type="number" class="rate prod-input"" placeholder="" /><br />
    <label for="amount">Amount</label><br />
    <input name="amount" type="number" class="amount prod-input"" placeholder="" /><br />
    <br />
  </form>
  <br />
</div>`;
});
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
