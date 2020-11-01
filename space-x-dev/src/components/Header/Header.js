import React from 'react';
import { Link, NavLink } from 'react-router-dom';


import logo from '../../logo.svg';
import './header.css';


const Header = ({rockets, changeRocket}) => (
    <header className="header">
		<Link to='/'>
			<img
					src={logo}
					alt="Logo Space X"
					className="logo"
			/>
		</Link>
		<nav className="main-nav nav">
			<ul className="list">
				{rockets.map((rocket, i) => (
					<li key={i} className="item">
						<Link 
						to='/rocket' 
						onClick={() => {
							changeRocket(rocket);
						}} 
						className="item-link"
						>{rocket}</Link>
					</li>
				))}
			</ul>
		</nav>
		<nav className="secondary-nav">
			<ul className="list">
				<li className="item">
					<NavLink
					exact
					activeClassName='active' 
					to="/" 
					className="item-link">Home</NavLink>
				</li>
				<li className="item">
					<NavLink 
					to="/calendar"
					activeClassName='active'
					className="item-link">Calendar</NavLink>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;