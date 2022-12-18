
const cartItems = [];
function addtocart(ele){
    const parent = ele.closest('.section');
    const price = parent.querySelector('ele.price').innerText;
    const title = parent.querySelector('ele.title').innerText;
    let cash = "";
    cash+= `<tr>`;
    cash+= `<td>${title}</td>`
    cash+= `<td class="cost">${price}</td>`;
    cash+= `</tr>`;
    console.log(cash);
    table.innerHTML+=cash;
}
