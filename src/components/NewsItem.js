import React, { Component } from "react";

export class NewsItem extends Component {
	render() {
		let { title, description, urlToImage, url, author, date, source } =
			this.props;
		return (
			<div
				style={{
					display: "flex", // Flexbox to center the card
					justifyContent: "center", // Center horizontally
					marginTop: "20px", // Optional margin for spacing from the top
				}}>
				<div className="card">
					<span
						className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
						style={{ zIndex: 1, left: "85%", fontSize: "14px" }}>
						{source}
					</span>
					<img src={urlToImage} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">
							<b>{title}</b>
						</h5>
						<p className="card-text">
							<b>{description}</b>
						</p>
						<p className="card-text">
							<small className="text-body-secondary">
								<b>{author ? author : "Unknown"}</b>{" "}
								<p>{new Date(date).toUTCString()}</p>
							</small>
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
