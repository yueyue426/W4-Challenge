const submitForm = document.querySelector('#submit-button');
const userName = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content-box');

submitForm.addEventListener('click', function(event) {
    //Prevent default action
    event.preventDefault();

    // Get values of inputs and check if there's no inputs
    if (!userName.value || !titleInput.value || !contentInput.value) {
        window.alert('Please fill out all fields');
        return;
    }
    const blogInput = {
        userName: userName.value,
        titleInput: titleInput.value,
        contentInput: contentInput.value,
    };

    const blogInputs = JSON.parse(localStorage.getItem('Inputs')) || [];
    blogInputs.push(blogInput);
    localStorage.setItem('Inputs', JSON.stringify(blogInputs));

    // Define the URL of the destination page
    window.location.href = "blog.html";

});