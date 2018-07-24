import React, {Component} from 'react';
import Book from '../Book/Book';
import {update} from 'ramda';
import './Library.css';

export default class Library extends Component {
	constructor() {
		super();
		this.state = {
			reads: 0,
			books: [
				{
					name: 'Zero to one',
					isbn: '9780804139298',
					author: 'Peter Thiel',
					cover: 'https://images.gr-assets.com/books/1414347376l/18050143.jpg',
					status: false
				},
				{
					name: "The Manager's Path",
					isbn: '9781491973899',
					author: 'Camille Fournier',
					cover: 'https://images.gr-assets.com/books/1484107737l/33369254.jpg',
					status: false
				},
				{
					name: 'Calculus, Better Explained',
					isbn: '9781470070700',
					author: 'Kalid Azad',
					cover: 'https://images.gr-assets.com/books/1448590460l/27993945.jpg',
					status: false
				}
			]
		};
		this.handleCounter = this.handleCounter.bind(this);
	}

	handleCounter(_State) {
		console.log(_State);
		const ObjNum = this.state.books.findIndex(
			_book => _book.isbn === _State.id
		);
		this.setState(
			{
				books: update(
					ObjNum,
					{...this.state.books[ObjNum], status: _State.status},
					this.state.books
				)
			},
			() => {
				console.log(this.state);
				console.log(ObjNum);
				const _read = this.state.books.filter(_book => _book.status === true)
					.length;
				console.log(_read);
				this.setState({reads: _read});
				console.log(this.state);
			}
		);
	}

	render() {
		return (
			<div className="library">
				<h1>How many books did you read? {this.state.reads}</h1>
				<div className="library__books">
					{this.state.books.map((_book, _id) => {
						return (
							<Book
								handleCounter={this.handleCounter}
								key={_id}
								id={_book.isbn}
								name={_book.name}
								isbn={_book.isbn}
								author={_book.author}
								cover={_book.cover}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}
