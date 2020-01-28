// GitHub finder project created by Mohammad Afsari

class Github {
    constructor() {
        this.client_id = 'd9fe0c1c00e6939fbe49';
        this.client_secret = '07fe0140174b2569f838bda24a2fe4c68d8dd5fd';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // Fetch returns a promise so .json() will give us the json data
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile: profile,
            repos: repos
        }
    }
}