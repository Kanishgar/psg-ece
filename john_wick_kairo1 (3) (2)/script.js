document.addEventListener("DOMContentLoaded", () => {
    // Set the target date and time for the countdown
    const targetDate = new Date("2024-12-25T00:00:00").getTime();

    // Function to update the countdown
    function updateCountdown() {
        const currentDate = new Date().getTime();
        const timeRemaining = targetDate - currentDate;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update the HTML elements
        document.getElementById("days").textContent = days < 10 ? "0" + days : days;
        document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;

        // Stop the countdown if the date is reached
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            document.querySelector(".countdown").innerHTML = "<h2>Event Started!</h2>";
        }
    }

    // Run the function every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Initial call to display immediately
    updateCountdown();
});


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".event-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    cards.forEach((card) => {
        observer.observe(card);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const animatedSections = document.querySelectorAll(".department-cse, .college");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                }
            });
        },
        { threshold: 0.2 } 
    );

    animatedSections.forEach((section) => observer.observe(section));
});
