import React, { Component } from "react";
import connect from "react-redux/lib/connect/connect";
import { fetchUsers } from "../actions";

class UsersList extends Component {
	componentDidMount() {
		this.props.fetchUsers();
	}

	renderUsers() {
		return this.props.users.map((user) => <li key={user.id}>{user.name}</li>);
	}

	render() {
		return (
			<div>
				Users List
				<ul>{this.renderUsers()}</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { users: state.users };
}

function loadData(store) {
	return store.dispatch(fetchUsers());
}

export { loadData };
export default connect(mapStateToProps, { fetchUsers })(UsersList);
