function activePage() {
    // Sayfanın URL'sini alır
    var path = window.location.pathname;
    var page = path.split("/").pop();

    // Menü öğelerinin ID'lerini kullanarak karşılaştırma yapar ve 'active' sınıfını ekler
    if (page === "index.html" || page === "") {
        document.getElementById("home-nav").classList.add("active-menu-item");
    } else if (page === "about.html") {
        document.getElementById("about-nav").classList.add("active-menu-item");
    } else if (page === "contact.html") {
        document.getElementById("contact-nav").classList.add("active-menu-item");
    }
    else if(page ==="login.html") {
        document.getElementById("login-nav").classList.add("active-menu-item")
        document.getElementById("user-icon").classList.add("active-user-button")
    }
}



// Sayfa yüklendiğinde çalışacak şekilde myFunction'ı çağır
document.addEventListener('DOMContentLoaded', function() {
    activePage();
}, false);

function changeImage(element) {
    document.getElementById('featured').src = element.src;
}



  
  
  