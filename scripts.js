document.addEventListener("DOMContentLoaded", function() {
    const pointsDisplay = document.getElementById("points");
    const viewsDisplay = document.getElementById("views");
    const clicky = document.getElementById("clicky");
    
    let points = getCookie("points") ? parseInt(getCookie("points")) : 0;
    let views = getCookie("views") ? parseInt(getCookie("views")) : 0;

    pointsDisplay.textContent = points;
    viewsDisplay.textContent = views;

    // Increment view count
    views++;
    viewsDisplay.textContent = views;
    setCookie("views", views, 365);

    clicky.addEventListener("click", function() {
        points++;
        pointsDisplay.textContent = points;
        setCookie("points", points, 365);

        if (points = 100) {
            alert("Congratulations! You have more than 100 points!");
        }
    });
});

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) == 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

// Define the GitHub API URL for the repository
const owner = 'mouse0017782';
const repo = 'mouse0017782.github.io';
const url = `https://api.github.com/repos/${owner}/${repo}`;

// Make the GET request using fetch
fetch(url)
  .then(response => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    // Parse the JSON from the response
    return response.json();
  })
  .then(data => {
    // Extract the number of stars from the response
    const stars = data.stargazers_count;
    // Update the content of the star-count element
    const starCountElement = document.getElementById('star-count');
    starCountElement.textContent = stars;
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
    // Optionally, update the star-count element to show an error message
    const starCountElement = document.getElementById('star-count');
    starCountElement.textContent = 'Failed to load star count.';
  });