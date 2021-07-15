import axios from "axios";

const getGitLog = async () => {
	const res = await axios.get("https://api.github.com/users/boidushya/repos?per_page=100")
	let data = res.data.sort((a, b) => {
		let x = a.stargazers_count;
		let y = b.stargazers_count;
		return ((x > y) ? -1 : ((x < y) ? 1 : 0));
	})
	return data.map(item => {
		return {
			name: item.name,
			description: item.description,
			url: item.html_url,
			stars: item.stargazers_count
		}
	})
}

export default getGitLog