const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const sidebar = document.getElementById("sidebar");

openMenu.onclick = () => {
    sidebar.classList.add("active");
};

closeMenu.onclick = () => {
    sidebar.classList.remove("active");
};

//404 PAGE
function go404() {
    window.location.href = "404dashboard.html";
}

// SELECT ALL SECTIONS
const sections = document.querySelectorAll(".page-section");

// HIDE ALL
function hideAllSections() {
    sections.forEach(section => {
        section.style.display = "none";
    });
}

// SHOW SECTIONS
function showSections(selectors) {
    hideAllSections();

    selectors.forEach(sel => {
        const el = document.querySelector(sel);
        if (el) {
            el.style.display = "block";
        }
    });
}

// SIDEBAR CLICK
document.querySelectorAll(".sidebar-menu a").forEach(link => {
    link.addEventListener("click", function (e) {

        const target = this.getAttribute("href");

        // ONLY HANDLE INTERNAL LINKS
        if (target.startsWith("#")) {
            e.preventDefault();

            // 🧬 PATIENT OVERVIEW → SHOW 2 SECTIONS
            if (target === "#patient-overview") {
                showSections([
                    "#patient-dashboard",
                    "#clinical-tests"
                ]);
            }

            // 🧪 CLINICAL TESTS → SHOW ONLY CLINICAL SECTION
            else if (target === "#clinical-section") {
                showSections([
                    ".clinical-section"
                ]);
            }

            // 📊 MEDICAL REPORTS
            else if (target === "#reports-section") {
                showSections([
                    "#medical-reports"
                ]);
            }

            // 💰 BILLING
            else if (target === "#bio-billing") {
                showSections([
                    "#billing"
                ]);
            }

            // DEFAULT
            else {
                showSections([target]);
            }
        }
    });
});

// DEFAULT LOAD (SHOW OVERVIEW + TESTS)
window.onload = () => {
    showSections([
        "#patient-dashboard",
        "#clinical-tests"
    ]);
};