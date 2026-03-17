const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const sidebar = document.getElementById("sidebar");

openMenu.onclick = () => {
    sidebar.classList.add("active");
};

closeMenu.onclick = () => {
    sidebar.classList.remove("active");
};

// BAR CHART ANIMATION
window.addEventListener("load", () => {
    const bars = document.querySelectorAll("#barChart .bar");

    bars.forEach((bar, index) => {
        const value = bar.getAttribute("data-value");

        setTimeout(() => {
            bar.style.height = value + "%";
        }, index * 150); // stagger animation
    });
});


// SELECT ALL SECTIONS
const sections = document.querySelectorAll(".page-section");

// SELECT MENU LINKS
const menuLinks = document.querySelectorAll(".sidebar-menu a");

// FUNCTION: HIDE ALL
function hideAllSections() {
    sections.forEach(section => {
        section.style.display = "none";
    });
}

// FUNCTION: SHOW SECTION
function showSection(id) {
    hideAllSections();
    const target = document.querySelector(id);
    if (target) {
        target.style.display = "block";
    }
}

// DEFAULT LOAD (show overview)
window.addEventListener("DOMContentLoaded", () => {
    showSection("#research-overview");
});

// CLICK EVENTS
menuLinks.forEach(link => {
    link.addEventListener("click", function(e) {

        const targetId = this.getAttribute("href");

        // only for internal sections
        if (targetId.startsWith("#")) {
            e.preventDefault();
            showSection(targetId);
        }

    });
});