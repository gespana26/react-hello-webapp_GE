import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Contacts = () => {
	// const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<div className Name="container">

							<h1> Add a new contact </h1>
							<div className="card mb-3" style="max-width: 540px;">
								<div className="row no-gutters">
									<div className="col-md-4">
										<img src="..." className="card-img" alt="..." />
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">Card title</h5>
											<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
											<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
										</div>
									</div>
								</div>
							</div>
						</div>


						// 	key={index}
						// 	className NameName="list-group-item d-flex justify-content-between"
						// 	style={{ background: item.background }}>
						// 	<Link to={"/single/" + index}>
						// 		<span>Link to: {item.title}</span>
						// 	</Link>
						// 	{// Conditional render example
						// 	// Check to see if the background is orange, if so, display the message
						// 	item.background === "orange" ? (
						// 		<p style={{ color: item.initial }}>
						// 			Check store/flux.js scroll to the actions to see the code
						// 		</p>
						// 	) : null}
						// 	<button className NameName="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
						// 		Change Color
						// 	</button>
						// </li>
					);
				})}
			</ul>
			<br />
			<Link to="/contacts">
				<button className NameName="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
