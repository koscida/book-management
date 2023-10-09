import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import Book from "./Book";
import { getBooks, deleteBook } from "./BooksCRUD";

const BookList = () => {
	const navigate = useNavigate();

	const [APIData, setAPIData] = useState([]);
	const [requestedData, setRequestedData] = useState(new Date());

	useEffect(() => {
		getBooks(setAPIData);
	}, [requestedData]);

	const handleRemoveBook = (id) => {
		deleteBook(id, () => {
			setRequestedData(new Date());
		});
	};

	return (
		<>
			<div className="book-list">
				{!_.isEmpty(APIData) ? (
					APIData.map((book) => (
						<Book
							key={book.id}
							{...book}
							handleRemoveBook={handleRemoveBook}
						/>
					))
				) : (
					<p className="message">
						No books available. Please add some books.
					</p>
				)}
			</div>
			<p>Updated: {requestedData.toISOString()}</p>
		</>
	);
};

export default BookList;
