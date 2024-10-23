import React, { Component } from "react";
import NewsItem from "./NewsItem";
import LoadingGif from "./LoadingGif";
import PropTypes from "prop-types";

export class News extends Component {
	static defaultProps = {
		pageSize: 6,
		country: "us",
		category: "general",
	};

	static propTypes = {
		pageSize: PropTypes.number,
		country: PropTypes.string,
		category: PropTypes.string,
	};
	constructor() {
		super();
		this.state = {
			articles: [],
			page: 1,
			loading: false,
		};
	}
	async componentDidMount() {
		// <LoadingGif />;
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbedc4d03a6940258ab91a7e4e4b3a15&page=1&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		// console.log(parsedData);
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
	}

	handleNext = async () => {
		if (
			!(
				this.state.page + 1 >
				Math.ceil(this.state.totalResults / this.props.pageSize)
			)
		) {
			let url = `https://newsapi.org/v2/top-headlines?country=${
				this.props.country
			}&category=${
				this.props.category
			}&apiKey=cbedc4d03a6940258ab91a7e4e4b3a15&page=${
				this.state.page + 1
			}&pageSize=${this.props.pageSize}`;
			this.setState({ loading: true });
			let data = await fetch(url);
			let parsedData = await data.json();
			this.setState({
				page: this.state.page + 1,
				articles: parsedData.articles,
				loading: false,
			});
		}
	};
	handlePrev = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=${
			this.props.country
		}&category=${
			this.props.category
		}&apiKey=cbedc4d03a6940258ab91a7e4e4b3a15&page=${
			this.state.page - 1
		}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			page: this.state.page - 1,
			articles: parsedData.articles,
			loading: false,
		});
	};

	render() {
		return (
			<div className="container my-3">
				<h1 style={{ display: "flex", justifyContent: "center" }}>
					Top Headlines
				</h1>
				{this.state.loading && <LoadingGif />}
				<div className="row">
					{this.state.articles.map((element) => {
						return (
							<div className="col-md-4" key={element.url}>
								<NewsItem
									title={element.title ? element.title : ""}
									description={element.description ? element.description : ""}
									urlToImage={
										element.urlToImage
											? element.urlToImage
											: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
									}
									url={element.url}
								/>
							</div>
						);
					})}
				</div>
				<div className="d-flex justify-content-between my-3">
					<button
						type="button"
						className="btn btn-warning"
						onClick={this.handlePrev}
						disabled={this.state.page <= 1}>
						&larr; Previous
					</button>
					{/* {this.state.loading && <LoadingGif />} */}
					<button
						type="button"
						className="btn btn-warning"
						onClick={this.handleNext}
						disabled={
							this.state.page + 1 >
							Math.ceil(this.state.totalResults / this.props.pageSize)
						}>
						Next &rarr;
					</button>
				</div>
			</div>
		);
	}
}

export default News;
