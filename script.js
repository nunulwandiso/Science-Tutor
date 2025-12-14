/* DARK MODE */
const darkToggle = document.getElementById("darkModeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (darkToggle) darkToggle.textContent = "☀️ Light Mode";
}

darkToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    darkToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

/* PRICING SELECTION */
document.querySelectorAll(".price-card").forEach(card => {
    card.addEventListener("click", () => {
        document.querySelectorAll(".price-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");

        localStorage.setItem("selectedPackage", card.dataset.package);
        localStorage.setItem("selectedPrice", card.dataset.price);

        document.getElementById("selectedPackageText").innerHTML =
            `<strong>Selected Package:</strong> ${card.dataset.package} (R${card.dataset.price})`;
    });
});

/* SLOT SELECTION */
function selectSlot(slot) {
    let bookedSlots = JSON.parse(localStorage.getItem("bookedSlots")) || [];

    if (bookedSlots.includes(slot)) {
        alert("This slot is already booked.");
        return;
    }

    localStorage.setItem("selectedSlot", slot);
    document.getElementById("selectedSlotText").innerText =
        "Selected Slot: " + slot;

    document.getElementById("applyBtn").style.display = "inline-block";
}

window.addEventListener("load", () => {
    let bookedSlots = JSON.parse(localStorage.getItem("bookedSlots")) || [];
    document.querySelectorAll(".slot").forEach(btn => {
        if (bookedSlots.includes(btn.innerText)) {
            btn.disabled = true;
            btn.style.opacity = "0.5";
            btn.innerText += " (Booked)";
        }
    });
});
