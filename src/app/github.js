
class Github {

	constructor(client_id, client_secret) {
		
		this.client_id = client_id;
		this.client_secret = client_secret;

	}

	async fetchUser(user) {
		
		const userDataRequest = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		const userData = await userDataRequest.json();
		console.log(userData);

	}

}

module.exports = Github;