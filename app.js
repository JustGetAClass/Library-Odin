let myLibrary = [];

const library = document.getElementById("library");
const add = document.getElementById("add");
add.addEventListener("click", addBookToLibrary);

function Book(book, author, pages, read) {
	this.book = book;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.toggleRead = function () {
	this.read = !this.read;
};

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

function displayBooks() {
	library.innerHTML = "";
	myLibrary.forEach((book, index) => {
		const bookDiv = document.createElement("div");
		bookDiv.classList.add("book");
		bookDiv.innerHTML = `
				<div class="card-header">
				<h3>${book.book}</h3>
				<p>Author: ${book.author}</p>
				</div>
				<hr>
				<div class="card-body">
				<p>Pages: ${book.pages}</p>
				<p>Status: ${book.read ? "Read" : "Not Read"}</p>
				<div class="cardButtons">
					<button class="remove" onclick="removeBook(${index})">Remove</button>
					<button class="read" onclick="readBook(${index})">Read/Unread</button>
				</div>
				</div>
			`;
		library.appendChild(bookDiv);
	});
}

function removeBook(index) {
	myLibrary.splice(index, 1);
	displayBooks();
}

function readBook(index) {
	myLibrary[index].toggleRead();
	displayBooks();
}
