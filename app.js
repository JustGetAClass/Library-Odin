let myLibrary = [{book:"Halo", author:"moha", pages:1000, read:"Not Read"}];
let displayedBooks = [];

const library = document.getElementById("library");
const add = document.getElementById("add");
add.addEventListener("click", addBookToLibrary);

function Book(book, author, pages, read) {
	this.book = book;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary() {
	const book = document.getElementById("book").value;
	const author = document.getElementById("author").value;
	const pages = document.getElementById("pages").value;
	const read = document.getElementById("read").value;
	if (book === "" || author === "" || pages === "" || read === "") {
		return alert("Please fill in all fields");
	}
	if (isNaN(pages)) {
		return alert("Please enter a number for pages");
	}

	const newBook = new Book(book, author, pages, read);
	myLibrary.push(newBook);
	displayBooks();
}
// use array.find()

function displayBooks() {
	if (myLibrary.length === 0) {
		return;
	}
	myLibrary.forEach((book) => {
		if(displayedBooks.includes(book)) {
			return;
		} else {
			displayedBooks.push(book);
			const bookDiv = document.createElement("div");
			bookDiv.classList.add("book");
			bookDiv.innerHTML = `
				<h3>${book.book}</h3>
				<p>Author: ${book.author}</p>
				<p>Pages: ${book.pages}</p>
				<p>Read: ${book.read}</p>
			`;
			library.appendChild(bookDiv);
		}
	});
}
