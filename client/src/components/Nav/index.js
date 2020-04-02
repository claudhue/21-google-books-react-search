import React from "react";
import { Link } from "react-router-dom"
import '../../style.css';

function Nav() {
  return (
		<nav className="navbar navbar-light navbar-expand-md">
			<div className="container-fluid">
				<h3>
				<Link to= "/"  style = {{textDecoration: 'none'}} className="link text-dark">Google Books</Link>
				</h3>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="menu">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to= "/Search" className = "link text-dark">Search</Link>
						</li>
						<li className="nav-item">
							<Link to= "/Saved" className="link text-dark">Saved</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
  );
}

export default Nav;
