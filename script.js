
// let books = 

//link icons
let genreIcons = {
    "drama": "assets/Drama.png",
    "horror": "assets/Horror.png",
    "coming-of-age": "assets/Coming-Of-Age.png",
    "adventure": "assets/Adventure.png",
    "romance": "assets/Romance.png",
    "mystery": "assets/Mystery.png",
    "non-fiction": "assets/Non-Fiction.png"
}

// sort by author last name, first sort array
function getLastName(author) {
    let parts = author.trim().split(" ")
    return parts[parts.length - 1]
}

fetch("Bookish.json")
  .then(response => response.json())
  .then(json => {
    books = json.sort((a, b) => {
      const lastNameCompare = getLastName(a.Author).localeCompare(getLastName(b.Author))
      // if two books share an author, sort those by title
      return lastNameCompare !== 0 ? lastNameCompare : a.Title.localeCompare(b.Title)
    })
    showBooks()
  })
    
    .catch(error => console.log("error:", error))

//     function makeBook(book) {
//     let booksSection = document.querySelector("#books")
//     let newBook = document.createElement("div")

//     newBook.innerHTML = `
//             <h1 class="bookTitle">${book.Title}</h1>
//              <h2>${book.Author}</h2>
//              <div>
//                 <img class="bookCover" src="${book.Path}" />
//              </div>
//              <h2 class="bookGenres">${book.Genre}</h2>
//              <h3 class="bookMoods">${book.Mood}</h3>
//         `
//     newBook.classList.add("card")
    
//   booksSection.appendChild(newBook)
//   }

function makeBook(book) {
    let booksSection = document.querySelector("#books")
    let newBook = document.createElement("div")

    // genre icons and labels
    let genres = String(book.Genre || "").split(",")
    let genreHTML = ""
    for(let i = 0; i < genres.length; i++) {
        let genre = genres[i].trim()
        let iconPath = genreIcons[genre.toLowerCase()]
        if (genre !== "") {
            let icon = iconPath ? `<img class="genreIcon" src="${iconPath}" />` : ""
            genreHTML += `<span class="genreTag">${icon}${genre}</span>`
        }
    }

    // reformat moods to get rid of comma and add a dot
    let moods = String(book.Mood || "").split(",")
    let moodHTML = ""
    for(let i = 0; i < moods.length; i++) {
        moodHTML += moods[i]
        if (i < moods.length - 1) {
            moodHTML += " ⋅ "
        }
    }

    newBook.innerHTML = `
             
            <h2 class="bookGenres">${genreHTML}</h2>
            <div>
                <img class="bookCover" src="${book.Path}" />
             </div>
             <h1 class="bookTitle">${book.Title}</h1>
              <h2 class="bookAuthor">${book.Author}</h2>
        
        `
        // add the below line to innerHTML before backtic to add back in book moods
        // <h3 class="bookMoods">${moodHTML}</h3>
    newBook.classList.add("card")

    booksSection.appendChild(newBook)
}


let checkboxes = document.querySelectorAll(".genre-checkbox")

function showBooks() {
   //collect every genre into an array
    let selectedGenres = Array.from(checkboxes)
    .filter(box => box.checked)
    .map(box => box.value)

    //clear page
    let booksSection = document.querySelector("#books")
    booksSection.innerHTML = ""

    books.forEach(book => {
        let bookGenres = book.Genre.toLowerCase().split(",").map(g => g.trim ())
        let matches = selectedGenres.length === 0 ||
        selectedGenres.some(genre => bookGenres.includes(genre))
        if (matches) makeBook(book)
            
    })
}

checkboxes.forEach(box => box.addEventListener("change", showBooks))


