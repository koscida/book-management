import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const getBookForm = (book) => {
	console.log("--getBookForm-- book: ", book);
	return {
		bookname: book ? book.bookname : "",
		author: book ? book.author : "",
		quantity: book ? book.quantity : "",
		price: book ? book.price : "",
		date: book ? book.date : "",
	};
};

const BookForm = ({ book, handleOnSubmit }) => {
	console.log("book: ", book);
	const [bookForm, setBookForm] = useState(getBookForm(book));
	console.log("bookForm: ", bookForm);
	const { bookname, author, price, quantity } = bookForm;

	const [errorMsg, setErrorMsg] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const values = [bookname, author, price, quantity];
		let errorMsg = "";

		const allFieldsFilled = values.every((field) => {
			const value = `${field}`.trim();
			return value !== "" && value !== "0";
		});

		if (allFieldsFilled) {
			const book = {
				id: uuidv4(),
				bookname,
				author,
				price,
				quantity,
				date: new Date(),
			};
			handleOnSubmit(book);
		} else {
			errorMsg = "Please fill out all the fields.";
		}
		setErrorMsg(errorMsg);
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		switch (name) {
			case "quantity":
				if (value === "" || parseInt(value) === +value) {
					setBookForm((prevState) => ({
						...prevState,
						[name]: value,
					}));
				}
				break;
			case "price":
				if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
					setBookForm((prevState) => ({
						...prevState,
						[name]: value,
					}));
				}
				break;
			default:
				setBookForm((prevState) => ({
					...prevState,
					[name]: value,
				}));
		}
	};

	return (
		<div className="main-form">
			{errorMsg && <p className="errorMsg">{errorMsg}</p>}
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="name">
					<Form.Label>Book Name</Form.Label>
					<Form.Control
						className="input-control"
						type="text"
						name="bookname"
						value={bookname}
						placeholder="Enter name of book"
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId="author">
					<Form.Label>Book Author</Form.Label>
					<Form.Control
						className="input-control"
						type="text"
						name="author"
						value={author}
						placeholder="Enter name of author"
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId="quantity">
					<Form.Label>Quantity</Form.Label>
					<Form.Control
						className="input-control"
						type="number"
						name="quantity"
						value={quantity}
						placeholder="Enter available quantity"
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group controlId="price">
					<Form.Label>Book Price</Form.Label>
					<Form.Control
						className="input-control"
						type="text"
						name="price"
						value={price}
						placeholder="Enter price of book"
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Button variant="primary" type="submit" className="submit-btn">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default BookForm;
