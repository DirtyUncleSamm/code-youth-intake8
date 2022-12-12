
        // -- The Reading List
// Keep track of which books you read and which books you want to read!

// -- Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet) --
// -- Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien" -- 
// --  Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien' -- 
       
        let library = [
            {
                title: "The Art of War",
                author: "Sun Tzu",
                alreadyRead: true,
                desc: function(){
                    console.log(this.title, "by: ", this.author);
                    return this.desc;
                }
            },
            {
                title: "The War of Art",
                author: "Steven Pressfield",
                alreadyRead: true,
                desc: function(){
                    console.log(this.title, "by: ", this.author);
                    return this.desc;
                }
            },
            {
                title:"Computational Thinking",
                author:"Peter J. Denning",
                alreadyRead: true,
                desc: function(){
                    console.log(this.title, "by: ", this.author);
                    return this.desc;;
                }
            },
            {
                title:"The Probable Cause",
                author:"Robert J. Serling",
                alreadyRead: true,
                desc: function(){
                    console.log(this.title, "by: ", this.author);
                    return this.desc;;
                }
            },
            {
                title:"And Soon I Heard a Roaring Wind",
                author:"Bill Streever",
                alreadyRead: true,
                desc: function(){
                    console.log(this.title, "by: ", this.author);
                    return this.desc;;
                }
            },
            {
                title:"In Oceans Deep",
                author:"Bill Streever",
                alreadyRead: false,
                desc: function(){
                    console.log(this.title, "by: ", this.author);
                    return this.desc;;
                }
            },
            {
                title:"Great Principles of Computing",
                author:"Peter J. Denning",
                alreadyRead: false,
                desc: function(){
                    console.log(this.title, "by: ", this.author);
                    return this.desc;;
                }
            },
            {
                title:"The Electra Story",
                author:"Robert J. Serling",
                alreadyRead: false,
                desc: function(){
                    console.log(this.title, "by: ", this.author);
                    return this.desc;
                }
            }
        ]


for(let i in library){
    library[i].desc(); 
    if (library[i].alreadyRead === true){
        console.log(library[i].title,": You have read this book")
    }else{
        console.log(library[i].title,": You have not read this book");  
    }
}