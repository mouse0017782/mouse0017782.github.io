document.addEventListener("DOMContentLoaded", function() {
    const pointsDisplay = document.getElementById("points");
    const viewsDisplay = document.getElementById("views");
    const clickImage = document.getElementById("clickImage");
    
    let points = getCookie("points") ? parseInt(getCookie("points")) : 0;
    let views = getCookie("views") ? parseInt(getCookie("views")) : 0;

    pointsDisplay.textContent = points;
    viewsDisplay.textContent = views;

    // Increment view count
    views++;
    viewsDisplay.textContent = views;
    setCookie("views", views, 365);

    clickImage.addEventListener("click", function() {
        points++;
        pointsDisplay.textContent = points;
        setCookie("points", points, 365);
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
});