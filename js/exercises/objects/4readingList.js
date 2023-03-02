const library = [ 
                {
                    title: 'The Road Ahead',
                    author: 'Bill Gates',
                    readingStatus: true
                },
                {
                    title: 'Steve Jobs',
                    author: 'Walter Isaacson',
                    readingStatus: true
                },
                {
                    title: 'Mockingjay',
                    author: 'Suzanne Collins',
                    readingStatus: false
                }
            ];

library.forEach((ele) => console.log("Book Title:",ele.title, "   Author:", ele.author, "   Have Read:", ele.readingStatus))

for(let i = 0; i < library.length; i++){
    if(library[i].readingStatus === true){
        console.log(library[i].title, "- - Status: Completed")
    }else{
        console.log(library[i].title, "- - Status: Not Completed")
    }
}