/*Create a table using DOM and fill it with data from this object.*/

const books = {
    "Dead Island":{
        author:"Mark Morris",
        genre:"Horror",
        published:"2011"
    },
    "The Hunger Games":{
        author:"Suzanne Collins",
        genre:"Science Fiction",
        published:"2008"
    },
    "The lord of the rings":{
        author:"JRR Tolkien",
        genre:"Fantasy",
        published:"1954"
    },
    "To Kill A Mockingbird":{
        author:"Harper Lee",
        genre:"Novel",
        published:"1960"
    }
}

const tab = document.createElement("table");
tab.style.border="1px solid black";
document.body.appendChild(tab);
const titls = ['Title', 'author', 'genre', 'published'];
const titlRow = document.createElement("tr")
tab.appendChild(titlRow);

for(let i = 0; i<=titls.length;i++){
    const titlRowDat = document.createElement("th");
    titls.id = 'titls'
    titlRow.appendChild(titlRowDat);
    titlRowDat.innerHTML= titls[i];
}

// const title = document.createElement("tr");
// tbl.appendChild(title);
// const headings = document.createElement("td");

// title.appendChild(headings);

// // -- my for loop logic. for everytime we iterate through the list One row is created Entering in four data points. Title, author, genre, date published.
// for(let i = 0; i<=books; i++){
//     const row =document.createElement('tr');
//     tbl.appendChild(tr);
//         for(let j=0; j<=books[i]; j++){
//             const data = document.createElement('td');
//             row.appendChild(data);
//             data.innerHTML = books[j];
//         }

// }