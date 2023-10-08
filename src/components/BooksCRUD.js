import React from "react";
import axios from "axios";

const mockapiURL = "https://6522192fa4199548356daf2b.mockapi.io";
const resourceName = "books";

export function getBooks(setAPIData) {
	console.log("GET books");

	axios.get(`${mockapiURL}/${resourceName}`).then((response) => {
		console.log("response: ", response);
		setAPIData(response.data);
	});
}

export function getBook(bookId, setAPIData) {
	console.log("GET book");
	axios.get(`${mockapiURL}/${resourceName}/${bookId}`).then((response) => {
		console.log("response: ", response);
		setAPIData(response.data);
	});
}

export function createBook(book) {
	console.log("CREATE book", book);
	axios.post(`${mockapiURL}/${resourceName}`, book);
}

export function updateBook(bookId, book) {
	console.log("UPDATE book", book);
	axios.put(`${mockapiURL}/${resourceName}/${bookId}`, book);
}

export function deleteBook(bookId) {
	console.log("DELETE bookId: ", bookId);
	axios.delete(`${mockapiURL}/${resourceName}/${bookId}`);
}
