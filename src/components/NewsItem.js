import React, { Component } from "react";

export class NewsItem extends Component {
	render() {
		let { title, description, urlToImage, url } = this.props;
		return (
			<div
				style={{
					display: "flex", // Flexbox to center the card
					justifyContent: "center", // Center horizontally
					marginTop: "20px", // Optional margin for spacing from the top
				}}>
				<div className="card">
					<img src={urlToImage} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">
							<b>{title}</b>
						</h5>
						<p className="card-text">
							<b>{description}</b>
						</p>
						<a href={url} target="blank" className="btn btn-sm btn-primary">
							Read more
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsItem;
