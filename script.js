function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

function openWhatsApp() {
    const phoneNumber = "27719358875";
    const message = "Hello, I would like to book tutoring lessons.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}



const darkToggle = document.getElementById("darkModeToggle");


if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (darkToggle) darkToggle.textContent = "☀️ Light Mode";
}


if (darkToggle) {
    darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");
        darkToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

function selectSlot(slot) {
    localStorage.setItem("selectedSlot", slot);

    document.getElementById("selectedSlotText").innerHTML =
        "✅ Selected Slot: <strong>" + slot + "</strong>";

    document.getElementById("applyBtn").style.display = "inline-block";
}
