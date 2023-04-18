const cartItems = [];
function addtocart(ele){
    const parent = ele.closest('.section');
    const price = parseFloat(parent.querySelector('.price').innerText);
    console.log(price);
    const title = parent.querySelector('.title').innerText;
    
    const existingItem = cartItems.find(item => item.title === title);
    if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.quantity * existingItem.price;
    } else {
        const item = {
            title: title,
            price: price,
            quantity: 1,
            total: price
        };
        cartItems.push(item);
    }
    
    let cartTable = document.querySelector('#cart-table');
    cartTable.innerHTML = '';
    cartItems.forEach(item => {
        let row = `<tr>
            <td>${item.title}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.total}</td>
        </tr>`;
        cartTable.innerHTML += row;
    });
}







// const cartItems = [];
// function addtocart(ele){
//     const parent = ele.closest('.section');
//     const price = parent.querySelectorAll('price').innerText;
//     // const priceStr = priceEle.innerText;
//     // const price = parseFloat(priceStr.replace(/[^0-9.-]+/g,""));
//     console.log(price);
    
   
//     const title = parent.querySelector('.title').innerText;
//     let cash = "";
//     cash+= `<tr>`;
//     cash+= `<td>${title}</td>`
//     cash+= `<td class="cost">${price}</td>`;
//     cash+= `</tr>`;
//     // console.log(cash);
//     table.innerHTML += cash;
// }

