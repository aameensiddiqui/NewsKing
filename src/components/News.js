import React, { Component } from "react";
import NewsItem from "./NewsItem";
import LoadingGif from "./LoadingGif";
import PropTypes from "prop-types";

export class News extends Component {
	static defaultProps = {
		pageSize: 15,
		country: "us",
		category: "general",
	};

	static propTypes = {
		pageSize: PropTypes.number,
		country: PropTypes.string,
		category: PropTypes.string,
	};
	capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			page: 1,
			loading: false,
			totalResults: 0,
		};
		document.title = `NewsKing - ${this.capitalizeFirstLetter(
			this.props.category
		)}`;
	}

	async updateNews() {
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbedc4d03a6940258ab91a7e4e4b3a15&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		console.log(parsedData);
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
	}

	async componentDidMount() {
		this.updateNews();
	}

	handleNext = async () => {
		this.setState(
			(prevState) => ({ page: prevState.page + 1 }),
			() => this.updateNews()
		);
	};
	handlePrev = async (prevState) => {
		this.setState(
			(prevState) => ({ page: prevState.page - 1 }),
			() => this.updateNews()
		);
	};

	render() {
		return (
			<div className="container my-3">
				<h1
					style={{
						display: "flex",
						justifyContent: "center",
						margin: "35px 0px",
					}}>
					Top Headlines on {this.capitalizeFirstLetter(this.props.category)}
				</h1>
				{this.state.loading && <LoadingGif />}
				<div className="row">
					{Array.isArray(this.state.articles) &&
					this.state.articles.length > 0 ? (
						this.state.articles.map((element) => {
							if (element.url !== "https://removed.com") {
								return (
									<div className="col-md-4" key={element.url}>
										<NewsItem
											title={element.title ? element.title : ""}
											description={
												element.description ? element.description : ""
											}
											urlToImage={element.urlToImage || "/default.png"}
											url={element.url}
											author={element.author}
											date={element.publishedAt}
											source={element.source.name}
										/>
									</div>
								);
							}
							return null;
						})
					) : (
						<p>Loading....</p>
					)}
				</div>
				<div className="d-flex justify-content-between my-3">
					<button
						type="button"
						className="btn btn-warning"
						onClick={this.handlePrev}
						disabled={this.state.page <= 1}>
						&larr; Previous
					</button>
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
