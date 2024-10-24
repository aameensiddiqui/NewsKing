import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
	apiKey = process.env.REACT_APP_NEWS_API;
	state = { theme: "light", progress: 0 };
	setProgress = (progress) => {
		this.setState({ progress: progress });
	};
	toggleTheme = () => {
		this.setState(
			(prevState) => ({
				theme: prevState.theme === "light" ? "dark" : "light",
			}),
			() => {
				if (this.state.theme === "dark") {
					document.body.style.backgroundColor = "rgb(43 43 48)";
				} else {
					document.body.style.backgroundColor = "white";
				}
			}
		);
	};
	render() {
		return (
			<div>
				<Router>
					<Navbar theme={this.state.theme} toggleTheme={this.toggleTheme} />
					<LoadingBar height={3} color="blue" progress={this.state.progress} />
					<Routes>
						<Route
							path="/"
							element={
								<News
									key="general"
									setProgress={this.setProgress}
									apiKey={this.apiKey}
									toggleTheme={this.toggleTheme}
									theme={this.state.theme}
									pageSize={15}
									country="us"
									category="general"
								/>
							}
						/>
						<Route
							path="/business"
							element={
								<News
									key="business"
									setProgress={this.setProgress}
									apiKey={this.apiKey}
									toggleTheme={this.toggleTheme}
									theme={this.state.theme}
									pageSize={15}
									country="us"
									category="business"
								/>
							}
						/>
						<Route
							path="/entertainment"
							element={
								<News
									key="entertainment"
									setProgress={this.setProgress}
									apiKey={this.apiKey}
									toggleTheme={this.toggleTheme}
									theme={this.state.theme}
									pageSize={15}
									country="us"
									category="entertainment"
								/>
							}
						/>
						<Route
							path="/general"
							element={
								<News
									key="general"
									setProgress={this.setProgress}
									apiKey={this.apiKey}
									toggleTheme={this.toggleTheme}
									theme={this.state.theme}
									pageSize={15}
									country="us"
									category="general"
								/>
							}
						/>
						<Route
							path="/health"
							element={
								<News
									key="health"
									setProgress={this.setProgress}
									apiKey={this.apiKey}
									toggleTheme={this.toggleTheme}
									theme={this.state.theme}
									pageSize={15}
									country="us"
									category="health"
								/>
							}
						/>
						<Route
							path="/science"
							element={
								<News
									key="science"
									setProgress={this.setProgress}
									apiKey={this.apiKey}
									toggleTheme={this.toggleTheme}
									theme={this.state.theme}
									pageSize={15}
									country="us"
									category="science"
								/>
							}
						/>
						<Route
							path="/sports"
							element={
								<News
									key="sports"
									setProgress={this.setProgress}
									apiKey={this.apiKey}
									toggleTheme={this.toggleTheme}
									theme={this.state.theme}
									pageSize={15}
									country="us"
									category="sports"
								/>
							}
						/>
						<Route
							path="/technology"
							element={
								<News
									key="technology"
									setProgress={this.setProgress}
									apiKey={this.apiKey}
									toggleTheme={this.toggleTheme}
									theme={this.state.theme}
									pageSize={15}
									country="us"
									category="technology"
								/>
							}
						/>
					</Routes>
				</Router>
			</div>
		);
	}
}
