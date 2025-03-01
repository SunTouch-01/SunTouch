document.addEventListener("DOMContentLoaded", function () {
    // **1️⃣ Display Current Time (Optional)**
    function showTime() {
        const timeElement = document.getElementById("currentTime");
        if (timeElement) {
            timeElement.innerHTML = new Date().toUTCString();
        }
    }
    setInterval(showTime, 1000);
    showTime();

    // **2️⃣ Mobile Menu Toggle**
    const navbar = document.querySelector("header");
    const heroSection = document.querySelector("section");
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelectorAll("#mobile-menu a");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden");
        });

        // Close mobile menu on link click
        navLinks.forEach(link => {
            link.addEventListener("click", function () {
                mobileMenu.classList.add("hidden");
            });
        });
    }

    // **3️⃣ Navbar Scroll Effect**
    if (navbar && heroSection) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > heroSection.offsetHeight - 50) {
                navbar.classList.add("bg-white", "shadow-lg", "text-black");
                navbar.classList.remove("bg-transparent", "text-white");

                if (menuBtn) {
                    menuBtn.classList.add("text-black");
                    menuBtn.classList.remove("text-white");
                }
            } else {
                navbar.classList.remove("bg-white", "shadow-lg", "text-black");
                navbar.classList.add("bg-transparent", "text-white");

                if (menuBtn) {
                    menuBtn.classList.remove("text-black");
                    menuBtn.classList.add("text-white");
                }
            }
        });
    }

    // **4️⃣ View Project & View Less Toggle**
    document.body.addEventListener("click", function (event) {
        const button = event.target;

        if (button.classList.contains("view-project")) {
            // Find the specific project container
            const projectContainer = button.closest(".bg-white");
            if (!projectContainer) return;

            // Get relevant elements within this container
            const details = projectContainer.querySelector(".project-details");
            const viewLessBtn = projectContainer.querySelector(".view-less");

            // Hide other project details **but NOT all**
            document.querySelectorAll(".project-card").forEach(card => {
                if (card !== projectContainer) {
                    card.querySelector(".project-details").classList.add("hidden");
                    card.querySelector(".view-project").classList.remove("hidden");
                    card.querySelector(".view-less").classList.add("hidden");
                }
            });

            // Expand only this project's details
            details.classList.remove("hidden");
            button.classList.add("hidden");
            viewLessBtn.classList.remove("hidden");
        }

        if (button.classList.contains("view-less")) {
            const projectContainer = button.closest(".bg-white");
            if (!projectContainer) return;

            const details = projectContainer.querySelector(".project-details");
            const viewProjectBtn = projectContainer.querySelector(".view-project");

            details.classList.add("hidden");
            button.classList.add("hidden");
            viewProjectBtn.classList.remove("hidden");
        }
    });

    // **5️⃣ Enable autoplay for Swiper only on hover**
    const swiperContainer = document.querySelector(".mySwiper");
    if (swiperContainer && typeof swiper !== "undefined") {
        swiperContainer.addEventListener("mouseenter", function () {
            swiper.autoplay.start();
        });

        swiperContainer.addEventListener("mouseleave", function () {
            swiper.autoplay.stop();
        });
    }
});
