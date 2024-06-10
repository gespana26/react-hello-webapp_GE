import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import "../../styles/home.css";

export const Home = () => (

	//const [contact, setContact] = useState([]);

	// <div classNameName="container">
	// 	<ul classNameName="list-group">

	<div className="container1">

		<h1> Add a new contact </h1>

		<form>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label for="inputFullName">Full Name</label>
					<input type="text"
						className="form-control"
						id="inputFullName"
						placeholder="Full Name"
						onChange={e => setContacts(e.target.value)}
					// value={contact.address}



					/>
				</div>
				<div className="form-group col-md-6">
					<label for="inputEmail">Email</label>
					<input type="email" className="form-control" id="inputEmail" placeholder="Enter email" />
				</div>
			</div>
			<div className="form-group col-md-6">
				<label for="inputphone">Full Name</label>
				<input type="text" className="form-control" id="inputphone" placeholder="Enter phone" />
			</div>
			<div className="form-group col-md-6">
				<label for="inputAddress">Address</label>
				<input type="text" className="form-control" id="inputAddress" placeholder="Enter address" />
			</div>
			<button type="submit" className="btn btn-primary">Save</button>
		</form>
		{/* <Link to="/contacts">
				<button classNameName="btn btn-primary">Back home</button>
			</Link> */}
	</div>
	// 	{/* </ul>
	// 	<br />
	// 	<Link to="/">
	// 		<button classNameName="btn btn-primary">Back home</button>
	// 	</Link>
	// </div> */}
);
