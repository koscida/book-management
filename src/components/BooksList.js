import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import Book from "./Book";
import { getBooks, deleteBook } from "./BooksCRUD";

const BookList = () => {
	const navigate = useNavigate();

	const [APIData, setAPIData] = useState([]);

	useEffect(() => getBooks(setAPIData), []);

	const handleRemoveBook = (id) => {
		deleteBook(id);
		navigate("/");
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
		</>
	);
};

export default BookList;
