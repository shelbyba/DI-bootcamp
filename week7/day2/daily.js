const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];


   const usernames= getUsernames(gameInfo);
   console.log(usernames);
   function getUsernames(array){
    const usernames=[];
    for(let i=0 ; i<array.length; i++){
        usernames.push(array[i].username);
    }
    return usernames;
   };




  
