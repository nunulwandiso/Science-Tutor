function scrollToContact() {
    document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth"
    });
}

function openWhatsApp() {
    const phoneNumber = "27719358875";
    const message = "Hello, I would like to book tutoring lessons.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

/* DARK MODE */
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


let scale = 1;
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");

function openImageModal() {
    modal.style.display = "flex";
    scale = 1;
    modalImg.style.transform = "scale(1)";
}

function closeImageModal() {
    modal.style.display = "none";
}

modalImg?.addEventListener("wheel", function (e) {
    e.preventDefault();
    scale += e.deltaY * -0.001;
    scale = Math.min(Math.max(1, scale), 3);
    modalImg.style.transform = `scale(${scale})`;
});
