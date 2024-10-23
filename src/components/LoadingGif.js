import React, { Component } from "react";
import loading from "./1484.gif";

export class LoadingGif extends Component {
	render() {
		return (
			<div className="text-center">
				<img src={loading} alt="loading" />
			</div>
		);
	}
}

export default LoadingGif;
