import React from "react";
import BookForm from "./BookForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createBook } from "./BooksCRUD";

const AddBook = () => {
	const navigate = useNavigate();

	const handleSubmit = (book) => {
		createBook(book);
		navigate("/");
	};

	return <BookForm handleOnSubmit={handleSubmit} />;
};

export default AddBook;
