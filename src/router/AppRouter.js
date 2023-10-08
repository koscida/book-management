import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AddBook from "../components/AddBook";
import BookList from "../components/BooksList";
import EditBook from "../components/EditBook";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<div>
				<AppHeader />
				<div className="main-content">
					<Routes>
						<Route element={<BookList />} path="/" exact={true} />
						<Route element={<AddBook />} path="/add" />
						<Route element={<EditBook />} path="/edit/:id" />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default AppRouter;
