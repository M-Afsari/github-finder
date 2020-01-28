// GitHub finder project created by Mohammad Afsari

// Init Github - Instantiate Github
const github = new Github;

// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Add event listener
searchUser.addEventListener('keyup', (e) => {
    // Get the text input
    const userText = e.target.value;

    if(userText !== '') {
        //  Make http call
        github.getUser(userText) // Returns a promise so we need to use .then
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    } else {
        // Clear profile
        ui.clearProfile();
    }
});
