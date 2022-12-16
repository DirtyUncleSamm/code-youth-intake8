
const cartItems = [];
function addtocart(ele){
    const parent = document.closest('.item');
    const price = parent.querySelector('.price').innerText;
    const title = parent.querySelector('.title').innerText;
    console.log("price", price);
    const cart = {
        price:price,
        title:DataTransferItemList, 
    }
    cartItems.push(cart);
}