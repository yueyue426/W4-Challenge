const backEl = document.querySelector('#back');
const mainEl = document.querySelector('.main');

backEl.addEventListener('click', function(event) {
    //Prevent default action
    event.preventDefault();

    // Define the URL of the destination page
    window.location.href = "index.html";
});

// get values from the local storage
const Inputs = JSON.parse(localStorage.getItem('Inputs')) || [];

    for (let i = 0; i < Inputs.length; i++) {

        const div = document.createElement('div');
    
        const blogTitle = document.createElement('h3');
        blogTitle.textContent = Inputs[i].titleInput;
    
        const blogContent = document.createElement('p');
        blogContent.textContent = Inputs[i].contentInput;
    
        const blogUser = document.createElement('p');
        blogUser.textContent = `Posted by: ${Inputs[i].userName}`;
    
        div.appendChild(blogTitle);
        div.appendChild(blogContent);
        div.appendChild(blogUser);
        mainEl.appendChild(div);
    } 
