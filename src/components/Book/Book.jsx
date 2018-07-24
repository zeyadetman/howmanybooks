import React, {Component} from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default class Book extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: false,
			id: this.props.id
		};
		this.handleChange = this.handleChange.bind(this);
		this.updateLibraryCount = this.updateLibraryCount.bind(this);
	}

	updateLibraryCount() {
		console.log(this.state);
		this.props.handleCounter(this.state);
	}

	handleChange() {
		this.setState({status: !this.state.status}, this.updateLibraryCount);
	}

	render() {
		return (
			<Card>
				<Image
					src={this.props.cover}
					alt="Book cover"
					style={{width: 330 + 'px', height: 425 + 'px'}}
				/>
				<Card.Content>
					<Card.Header>{this.props.name}</Card.Header>
					<Card.Meta>
						<span className="date" />
					</Card.Meta>
					<Card.Description>
						Written By {this.props.author}
						<br />
						<Icon name="book" />
						{this.props.isbn}
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<div className="ui checkbox">
						<input
							type="checkbox"
							name="example"
							onChange={this.handleChange}
						/>
						<label>Did you read this book?</label>
					</div>
				</Card.Content>
			</Card>
		);
	}
}
