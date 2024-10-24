import React, { Component } from "react";
import NewsItem from "./NewsItem";
import LoadingGif from "./LoadingGif";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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
			loading: true,
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
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
	}

	fetchMoreData = async () => {
		if (this.state.loading) {
			return;
		}
		this.setState({ page: this.state.page + 1 });
		const url = `https://newsapi.org/v2/top-headlines?country=${
			this.props.country
		}&category=${
			this.props.category
		}&apiKey=cbedc4d03a6940258ab91a7e4e4b3a15&page=${
			this.state.page + 1
		}&pageSize=${this.props.pageSize}`;
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: this.state.articles.concat(parsedData.articles),
			totalResults: parsedData.totalResults,
			loading: false,
		});
	};

	async componentDidMount() {
		this.updateNews();
	}

	render() {
		return (
			<>
				<h1
					style={{
						display: "flex",
						justifyContent: "center",
						margin: "35px 0px",
						fontSize: "50px",
					}}>
					Top Headlines on {this.capitalizeFirstLetter(this.props.category)}
				</h1>
				{this.state.loading && <LoadingGif />}

				<InfiniteScroll
					dataLength={this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={this.state.articles.length !== this.state.totalResults}
					loader={<LoadingGif />}>
					<div className="container">
						<div className="row">
							{this.state.articles.map((element) => {
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
								return <p>null...</p>;
							})}
						</div>
					</div>
				</InfiniteScroll>
			</>
		);
	}
}

export default News;
