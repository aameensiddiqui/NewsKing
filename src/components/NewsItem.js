import React, { Component } from "react";

export class NewsItem extends Component {
	render() {
		let { title, description, urlToImage, url, author, date, source } =
			this.props;
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "20px",
				}}>
				<div className="card">
					<span
						className="position-absolute top-0 translate-middle badge rounded bg-primary text-light"
						style={{ zIndex: 1, left: "90%", fontSize: "13px" }}>
						{source}
					</span>
					<img src={urlToImage} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">
							<b>{title}</b>
						</h5>
						<p className="card-text" style={{ fontSize: "20px" }}>
							{description}
						</p>
						<div className="card-text">
							<small className="text-body-secondary">
								<b>{author ? author : "Unknown"}</b>{" "}
								<p>{new Date(date).toUTCString()}</p>
							</small>
						</div>
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
