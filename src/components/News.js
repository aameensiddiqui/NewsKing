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
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
		const incrementProgress = () => {
			for (let progress = 1; progress <= 100; progress++) {
				setTimeout(() => {
					this.props.setProgress(progress);
				}, progress * 30);
			}
		};
		incrementProgress();
	}

	fetchMoreData = async () => {
		if (this.state.loading) {
			return;
		}
		const url = `https://newsapi.org/v2/top-headlines?country=${
			this.props.country
		}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
			this.state.page + 1
		}&pageSize=${this.props.pageSize}`;
		this.setState({ page: this.state.page + 1 });
		try {
			let data = await fetch(url);
			let parsedData = await data.json();
			this.setState({
				articles: this.state.articles.concat(parsedData.articles),
				totalResults: parsedData.totalResults,
				loading: false,
			});
		} catch (error) {
			console.error("Failed to fetch the news...", error);
			this.setState({ loading: false });
		}
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
						margin: "25px 0px",
						marginTop: "80px",
						fontSize: "35px",
						color: this.props.theme === "light" ? "black" : "white",
					}}>
					Top Headlines from {this.capitalizeFirstLetter(this.props.category)}
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
								if (element.url === "https://removed.com") {
									return null;
								}
								return (
									<div
										className="col-md-4"
										key={`${element.source.name}-${element.publishedAt}-${element.url}`}>
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
											theme={this.props.theme}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</InfiniteScroll>
			</>
		);
	}
}

export default News;
