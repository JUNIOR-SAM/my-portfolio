function myEmail() {
    form.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100vw";
    document.body.style.top = `-${window.scrollY}px`;
    document.querySelector(".blurItem").style.filter = "blur(10px)";
    document.querySelector(".blurItem").style.pointerEvents = "none";
}

function exitEmail() {
    form.style.display = "none";
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
    window.scrollTo(0, -parseInt(document.body.style.top || "0"));
    document.body.style.top = "";
    document.querySelector(".blurItem").style.filter = "blur(0px)";
    document.querySelector(".blurItem").style.pointerEvents = "";
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
    const name = document.getElementById('text').value.trim();
    const email = document.getElementById('mail').value.trim();
    const message = document.getElementById('messages').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
        alert('Please enter your name.');
        e.preventDefault();
        return;
    }
    if (!email || !emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
        return;
    }
    if (!message) {
        alert('Please enter your message.');
        e.preventDefault();
        return;
    }
});

document.getElementById('image').addEventListener('change', function (event) {
    const preview = document.getElementById('preview');
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
            preview.style.margin = '10px auto';
            preview.style.height = '130px';
            form.style.height = '680px';
        }
        reader.readAsDataURL(file);
    } else {
        preview.src = '#';
        preview.style.display = 'none';
    }
});

showMore = () => {
    document.querySelectorAll('.me').forEach(mee => {
        if (mee.style.display === "block") {
            mee.style.display = "none"
        } else {
            mee.style.display = "block"
        }


    });
}


const colors = [
    { bg: "#3c3cd3", text: "white" },
    { bg: "gold", text: "black" },
    { bg: "#1E90FF", text: "white" },
    { bg: "#FFD700", text: "black" },
    { bg: "#2c3e50", text: "white" },
];

let colorIndex = 0;

setInterval(() => {
    let navbar = document.getElementById("myNavbar");

    // Change navbar background
    navbar.style.backgroundColor = colors[colorIndex].bg;

    // Change all nav-link, dropdown and buttons inside navbar
    let links = navbar.getElementsByTagName("a");
    for (let link of links) {
        link.style.color = colors[colorIndex].text;
        link.style.borderColor = colors[colorIndex].text;
    }

    // Change dropdown menu background + text
    let dropdowns = document.querySelectorAll(".dropdown-menu");
    dropdowns.forEach(menu => {
        menu.style.backgroundColor = colors[colorIndex].bg;
        menu.style.transition = "background-color 1.5s ease-in-out"; // smooth change
        let dropdownLinks = menu.querySelectorAll("a");
        dropdownLinks.forEach(dl => {
            dl.style.color = colors[colorIndex].text;
        });
    });

    // Change the navbar-toggler (hamburger icon on small screens)
    let toggler = document.querySelector(".navbar-toggler");
    if (toggler) {
        toggler.style.borderColor = colors[colorIndex].text;
    }

    colorIndex = (colorIndex + 1) % colors.length;
}, 2000); // every 2 seconds

    document.getElementById("footerForm").addEventListener("submit", function (e) {
        e.preventDefault(); // prevent normal redirect

        let form = e.target;
        let formData = new FormData(form);

        fetch("https://formsubmit.co/oyebodes19@gmail.com", {
            method: "POST",
            body: formData
        }).then(response => {
            if (response.ok) {
                showToast("✅ Sent!");
                form.reset();
            } else {
                showToast("❌ Failed, try again!");
            }
        }).catch(() => showToast("⚠️ Network error!"));
    });

    function showToast(message) {
        let toast = document.getElementById("toast");
        toast.textContent = message;
        toast.style.display = "block";

        setTimeout(() => {
            toast.style.display = "none";
        }, 3000);
    }


     const yearSpan = document.getElementById("year");
  yearSpan.textContent = new Date().getFullYear();


