let myLibrary = [{book:"Halo", author:"moha", pages:1000, read:"Not Read"}];

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
}
// use array.find()
