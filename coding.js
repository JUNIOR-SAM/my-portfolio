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
            form.style.height = '650px';
        }
        reader.readAsDataURL(file);
    } else {
        preview.src = '#';
        preview.style.display = 'none';
    }
});

    // function playVideo(id) {
    //     document.getElementById(id).play();
    // }
    // function pauseVideo(id) {
    //     document.getElementById(id).pause();
    // }

    function playVideo(videoId) {
    const video = document.getElementById(videoId);
    video.play();
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { 
        video.msRequestFullscreen();
    }
}

function pauseVideo(videoId) {
    const video = document.getElementById(videoId);
    video.pause();
    if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

    ScrollReveal().reveal("section", {
        delay: 400,
        duration: 2000,
        distance: "100px",
        origin: "bottom",
        reset: true,
    });
