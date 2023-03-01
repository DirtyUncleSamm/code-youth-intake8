const characters = [
    {
      name: "Luke Skywalker",
      height: 172,
      mass: 77,
      eye_color: "blue",
      gender: "male",
    },
    {
      name: "Darth Vader",
      height: 202,
      mass: 136,
      eye_color: "yellow",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: 150,
      mass: 49,
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "Anakin Skywalker",
      height: 188,
      mass: 84,
      eye_color: "blue",
      gender: "male",
    },
  ];

  for(let m = 0; m < characters.length; m++){
    if(characters[m].mass > 100){
        console.log("Character with a mass greater than 100: - ", characters[m].name)
    }
  }
  for(let h = 0; h < characters.length; h++){
    if(characters[h].height < 200){
        console.log("Characters with a height less than 100: - ",characters[h].name);
    }
  }
  for(let g = 0; g < characters.length; g++){
    if(characters[g].gender === "male"){
        console.log("Characters who are male: - ",characters[g].name);
    }
  }