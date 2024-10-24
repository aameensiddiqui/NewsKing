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
				<div className="card" style={{ border: "none" }}>
					<span
						className="position-absolute top-0 translate badge rounded bg-primary text-light"
						style={{ zIndex: 1, right: "0%", fontSize: "13px" }}>
						{source}
					</span>
					<img src={urlToImage} className="card-img-top" alt="..." />
					<div
						className="card-body"
						style={{
							color: this.props.theme === "light" ? "black" : "white",
							backgroundColor:
								this.props.theme === "light"
									? "rgb(231 231 231)"
									: "rgb(31 31 35)",
						}}>
						<h5 className="card-title">
							<b>{title}</b>
						</h5>
						<p className="card-text" style={{ fontSize: "15px" }}>
							{description}
						</p>
						<b>{author ? author : "Unknown"}</b>{" "}
						<p style={{ fontSize: "13px" }}>{new Date(date).toUTCString()}</p>
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
