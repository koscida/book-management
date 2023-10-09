import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Book = ({
	id,
	bookname,
	author,
	price,
	quantity,
	date,
	handleRemoveBook,
}) => {
	const navigate = useNavigate();

	const editURL = `/edit/${id}`;

	return (
		<Card style={{ width: "18rem" }} className="book">
			<Card.Body>
				<Card.Title className="book-title">{bookname}</Card.Title>
				<div className="book-details">
					<div>Author: {author}</div>
					<div>Quantity: {quantity} </div>
					<div>Price: {price} </div>
					<div>Date: {new Date(date).toDateString()}</div>
				</div>
				<a
					href={editURL}
					className="btn btn-primary"
					role="button"
					aria-disabled="true"
				>
					Edit
				</a>{" "}
				<Button variant="danger" onClick={() => handleRemoveBook(id)}>
					Delete
				</Button>
			</Card.Body>
		</Card>
	);
};

export default Book;
