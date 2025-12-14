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
