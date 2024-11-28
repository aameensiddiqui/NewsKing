import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
	render() {
		return (
			<nav
				className={`navbar navbar-expand-lg fixed-top navbar-${this.props.theme} bg-${this.props.theme}`}
				style={{
					height: "70px",
					padding: "10px 30px",
					boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
					borderRadius: "0 0 10px 10px",
					background:
						this.props.theme === "dark"
							? "linear-gradient(145deg, #2a2a2a, #1a1a1a)"
							: "linear-gradient(145deg, #ffffff, #f1f1f1)",
				}}>
				<div className="container-fluid" style={{ fontSize: "20px" }}>
					<Link
						className="navbar-brand"
						to="/"
						style={{ fontSize: "30px", fontWeight: "bold" }}>
						NewsKing
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/business">
									Business
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/entertainment">
									Entertainment
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/health">
									Health
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/science">
									Science
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/sports">
									Sports
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/technology">
									Technology
								</Link>
							</li>
						</ul>
					</div>
					<img
						src={
							this.props.theme === "dark"
								? "/contrast (1).png"
								: "/dark-mode.png"
						}
						alt="Toggle Theme"
						onClick={this.props.toggleTheme}
						style={{
							width: "35px",
							height: "35px",
							cursor: "pointer",
							marginLeft: "15px",
						}}
					/>
				</div>
			</nav>
		);
	}
}

export default Navbar;
