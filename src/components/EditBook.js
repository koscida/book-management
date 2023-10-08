import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookForm from "./BookForm";
import { getBook, updateBook } from "./BooksCRUD";
import _ from "lodash";

const AddBook = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const [APIData, setAPIData] = useState([]);

	useEffect(() => {
		if (!_.isEmpty(id)) getBook(id, setAPIData);
		else navigate("/");
	});

	const handleSubmit = (book) => {
		updateBook(id, book);
		navigate("/");
	};

	return <BookForm handleOnSubmit={handleSubmit} book={APIData} />;
};

export default AddBook;
