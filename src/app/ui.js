class UI {

	constructor() {
		this.profile = document.getElementById("user-profile");
	}

	showProfile(user) {
		
		this.clearMessage();

		this.profile.innerHTML = `
			<div id="user_profile_found" class="card mt-2 animated bounceInLeft">
				<img src="${user.avatar_url}" class="card-img-top"/>
				<div class="card-body">
					<h3 class="card-title">${user.name} / ${user.login}</h3>
					<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View profile</a>
					<span class="badge badge-success">Followers: ${user.followers}</span>
					<span class="badge badge-primary">Following: ${user.following}</span>
					<span class="badge badge-warning">Company: ${user.company ? user.company : "N/A" }</span>
					<span class="badge badge-info d-block">Blog: ${user.blog ? user.blog : "N/A" }</span>
				</div>
			</div>
		`;

	}

	showMessage(message, cssClass) {

		this.clearUserData();

		const div = document.createElement("div");
		div.className = cssClass;
		div.appendChild(document.createTextNode(message));
		
		const content = document.querySelector("div.container > div.row");
		
		const user_profile = document.querySelector("#user-profile")
		content.insertBefore(div, user_profile);

	}

	showRepositories(repositories) {

		let template = '';

		repositories.forEach(repo => {
			template += `
				<div class="card mt-2 animated bounceInUp">
					<div class="card-body">
						<div class="row">
							<div class="col-md-6">
								<a href="${repo.html_url}" target="_blank">${repo.name}</a>
							</div>
							<div class="col-md-6">
								<span class="badge badge-primary">
									Language: ${repo.language}
								</span>
								<span class="badge badge-success">
									Forks: ${repo.forks_count}
								</span>
							</div>
						</div>
					</div>
				</div>
			`;
		});

		document.getElementById("user-repositories").innerHTML = template;
	}

	clearMessage() {
		
		const alertFound = document.querySelector("div.alert");

		if (alertFound) {
			alertFound.remove();
		}

	}

	clearUserData() {
		
		const user_profile = document.querySelector("#user_profile_found");

		if (user_profile) {
			user_profile.remove();
		}

	}

}

module.exports = UI;