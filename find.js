
let issuename = 'gaearon'; 
// document.getElementById("myForm").onsubmit = function(e) { 
//     e.preventDefault() 
//     issuename = document.getElementById("value").value ; 
//     fetch('https://api.github.com/users/' + issuename) 
//     .then(function(response) { 
//     return response.text() 
//     }).then(function(body) { 
//     render(body); 
//     }); 
//}
window.onload = fetch('https://api.github.com/users/' + issuename)
    .then(function(response) {
        return response.text()
    }).then(function(body) {
        render(body);
    });

function render(issue) {
    issue = JSON.parse(issue);
    createProfile(issue.avatar_url, issue.name, issue.login, issue.bio, issue.company, issue.location, issue.email, issue.blog , issue.url);
};

function createProfile(avatar_url, name, login, bio, company, location, email, blog , url) {
    var avatarDiv = document.getElementById("issueAvatar");
    var avatarImg = document.createElement("img");
    var userName = document.getElementById("issueName");
    var userLogin = document.getElementById("issueLogin");
    var issueBio = document.getElementById("issueBio");
    var issueCompany = document.getElementById("issueCompany");
    var issueLocation = document.getElementById("issueLocation");
    var emailMessage = 'You only see publicly visible email addresses when authenticated with GitHub';
    var issueEmail = document.getElementById("issueEmail");
    var issueBlog = document.getElementById("issueBlog");
    var issueURL = document.getElementById("issueURL");

    avatarImg.setAttribute("src", avatar_url);
    avatarDiv.appendChild(avatarImg);   
    userName.appendChild(document.createTextNode(name));    
    userLogin.appendChild(document.createTextNode(login));
    issueBio.appendChild(document.createTextNode(bio));
    issueCompany.appendChild(document.createTextNode(company));
    issueLocation.appendChild(document.createTextNode(location));
    issueEmail.appendChild(document.createTextNode(email || emailMessage));
    issueBlog.appendChild(document.createTextNode(blog));
    issueURL.appendChild(document.createTextNode(url));

    // avatarImg.setAttribute("src", avatar_url);
    // avatarDiv.replaceChild(avatarImg);   
    // userName.replaceChild(document.createTextNode(name));    
    // userLogin.replaceChild(document.createTextNode(login));
    // issueBio.replaceChild(document.createTextNode(bio));
    // issueCompany.replaceChild(document.createTextNode(company));
    // issueLocation.replaceChild(document.createTextNode(location));
    // issueEmail.replaceChild(document.createTextNode(email || emailMessage));
    // issueBlog.replaceChild(document.createTextNode(blog));
    // issueURL.replaceChild(document.createTextNode(url));
}




