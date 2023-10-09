import React from "react";
import axios from "axios";

const mockapiURL = "https://6522192fa4199548356daf2b.mockapi.io";
const resourceName = "books";

export function getBooks(setAPIData) {
	console.log("GET books");

	let p = new Promise((res, err) => {
		axios.get(`${mockapiURL}/${resourceName}`).then((response) => {
			console.log("response: ", response);
			if (response.status === 200) res(response.data);
			else err(response);
		});
	});
	p.then(
		(value) => {
			console.log("value: ", value);
			setAPIData(value);
		},
		(error) => {
			console.log("error: ", error);
		}
	);
}

export function getBook(bookId, setAPIData) {
	console.log("GET book");
	let p = new Promise((res, err) => {
		axios
			.get(`${mockapiURL}/${resourceName}/${bookId}`)
			.then((response) => {
				console.log("response: ", response);
				if (response.status === 200) res(response.data);
				else err(response);
			});
	});
	p.then(
		(value) => {
			console.log("value: ", value);
			setAPIData(value);
		},
		(error) => {
			console.log("error: ", error);
		}
	);
}

export function createBook(book, setAPIData) {
	console.log("CREATE book", book);
	let p = new Promise((res, err) => {
		axios
			.post(`${mockapiURL}/${resourceName}`, book)
			.then((response) => {
				console.log("response: ", response);
				if (response.status >= 200 && response.status < 300)
					res(response.data);
				else err(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	});
	p.then(
		(value) => {
			console.log("value: ", value);
			setAPIData(value);
		},
		(error) => {
			console.log("error: ", error);
		}
	);
}

export function updateBook(bookId, book, setAPIData) {
	console.log("UPDATE book", book);
	let p = new Promise((res, err) => {
		axios
			.put(`${mockapiURL}/${resourceName}/${bookId}`, book)
			.then((response) => {
				console.log("response: ", response);
				if (response.status === 200) res(response.data);
				else err(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	});
	p.then(
		(value) => {
			console.log("value: ", value);
			setAPIData(value);
		},
		(error) => {
			console.log("error: ", error);
		}
	);
}

export function deleteBook(bookId, deleteCallBack) {
	console.log("DELETE bookId: ", bookId);
	let p = new Promise((res, err) => {
		axios
			.delete(`${mockapiURL}/${resourceName}/${bookId}`)
			.then((response) => {
				console.log("response: ", response);
				deleteCallBack();
			})
			.catch(function (error) {
				console.log(error);
			});
	});
}
