// Set the birthday date here
const birthday = new Date("2024-08-25T00:00:00").getTime();
const song = document.getElementById("birthday-song");

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "d ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("minutes").innerHTML = minutes + "m ";
    document.getElementById("seconds").innerHTML = seconds + "s ";

    // If the countdown is over, display the birthday message
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("days").style.display = "none";
        document.getElementById("hours").style.display = "none";
        document.getElementById("minutes").style.display = "none";
        document.getElementById("seconds").style.display = "none";
        document.getElementById("birthday-message").classList.remove("hidden");
        document.getElementById("crackers").classList.remove("hidden");
        song.play();
    }
}, 1000);


