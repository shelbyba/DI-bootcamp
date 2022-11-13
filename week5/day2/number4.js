// In the js file, create an array called allBooks. This is an array of objects. 
//Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).


//nitiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

const allBooks= []
console.log(allBooks)

book1= {
    title: 'Awaken the giant within',
    Auther: 'Tony Robbins',
    image: 'https://m.media-amazon.com/images/I/51lXzR+xTOL._AC_SY780_.jpg',
    alreadyRead: true
}

book2={
    title: '21 lessons for 21st century',
    Auther: 'YUVAL NOAH HARRARI ',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1517709298l/36485213._SY475_.jpg',
    alreadyRead: true
    
}

allBooks.push(book1,book2);

const bookdiv= document.querySelector(".list-books");
console.log(bookdiv);
const table= document.createElement('table');
console.log(table);

table.innerHTML = `
<tr>
    <th>Auther</th>
    <th>Picture</th>
    <th>Already read</th>
  </tr>
  <tr class="${book1.alreadyRead? "red" :""}">
    <td>${book1.title}by ${book1.Auther}</td>
    <td><img src="${book1.image}"></td>
    
    <td>${book1.alreadyRead}</td>
  </tr>

  <tr class="${book2.alreadyRead? "red" :""}">
  <td>${book2.title}by ${book2.Auther}</td>
  <td><img src="${book2.image}"/></td>
  
  <td>${book2.alreadyRead}</td>
  </tr>
`
bookdiv.appendChild(table)

