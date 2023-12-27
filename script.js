function registerStudent() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const college = document.getElementById('college').value;

    // For simplicity, just log the student information to the console
    console.log(`Student Registration:\nName: ${name}\nEmail: ${email}\nCollege: ${college}`);
}

// Dummy job data (in a real application, this would come from the server)
const jobListings = [
    { title: 'Software Developer', company: 'Tech Co.', location: 'City A' },
    { title: 'Data Analyst', company: 'Data Corp.', location: 'City B' },
    { title: 'Marketing Intern', company: 'Marketing Inc.', location: 'City C' },
];

// Display job listings
const jobList = document.getElementById('job-list');
jobListings.forEach(job => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${job.title}</strong> at ${job.company}, ${job.location}`;
    jobList.appendChild(listItem);
});

// ... (previous script.js content)

// Modal handling functions
function openLoginModal() {
    const loginModal = document.getElementById('login-modal');
    loginModal.style.display = 'block';
}

function closeLoginModal() {
    const loginModal = document.getElementById('login-modal');
    loginModal.style.display = 'none';
}

function openRegistrationModal() {
    const registrationModal = document.getElementById('registration-modal');
    registrationModal.style.display = 'block';
}

function closeRegistrationModal() {
    const registrationModal = document.getElementById('registration-modal');
    registrationModal.style.display = 'none';
}

// ... (rest of the previous script.js content)

function filterJobs() {
    const jobTypeFilter = document.getElementById('job-type').value;
    const companyFilter = document.getElementById('company').value;
    const locationFilter = document.getElementById('location').value;

    const jobListings = document.getElementById('job-listings').getElementsByTagName('li');

    for (const jobListing of jobListings) {
        const jobType = jobListing.getAttribute('data-job-type');
        const company = jobListing.getAttribute('data-company');
        const location = jobListing.getAttribute('data-location');

        const isVisible = (!jobTypeFilter || jobType === jobTypeFilter)
            && (!companyFilter || company === companyFilter)
            && (!locationFilter || location === locationFilter);

        jobListing.style.display = isVisible ? 'block' : 'none';
    }
}

document.getElementById('job-type').addEventListener('change', filterJobs);
document.getElementById('company').addEventListener('change', filterJobs);
document.getElementById('location').addEventListener('change', filterJobs);

filterJobs(); 