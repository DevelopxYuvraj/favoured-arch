
/* =========================================
   FAVOURED ARCH
   FINAL WEBSITE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       MOBILE MENU
    ====================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");


    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                navLinks.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        /* Close menu when a link is clicked */

        navLinks
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navLinks.classList.remove("active");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });

            });

    }



    /* =====================================
       SMOOTH SCROLL
    ====================================== */

    const links =
        document.querySelectorAll('a[href^="#"]');


    links.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });



    /* =====================================
       NAVBAR SCROLL EFFECT
    ====================================== */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener("scroll", () => {

        if (!navbar) return;


        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 8px 30px rgba(32, 30, 27, 0.08)";

        } else {

            navbar.style.boxShadow =
                "none";

        }

    });



    /* =====================================
       SCROLL REVEAL
    ====================================== */

    const revealElements =
        document.querySelectorAll(
            ".intro, .gallery-card, .process-card, .price-card, .frame-info, .order-section"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            observer.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("revealed");

        });

    }



    /* =====================================
       IMAGE UPLOAD PREVIEW
    ====================================== */

    const photoInput =
        document.getElementById("photo");

    const uploadBox =
        document.getElementById("uploadBox");

    const uploadContent =
        document.getElementById("uploadContent");

    const imagePreview =
        document.getElementById("imagePreview");


    if (photoInput) {

        photoInput.addEventListener(
            "change",
            function () {

                const file =
                    this.files[0];


                if (!file) return;


                /* Check image type */

                if (
                    !file.type.startsWith("image/")
                ) {

                    alert(
                        "Please select a valid image file."
                    );

                    this.value = "";

                    return;

                }


                /* File size limit: 10 MB */

                const maxSize =
                    10 * 1024 * 1024;


                if (file.size > maxSize) {

                    alert(
                        "Please choose an image smaller than 10 MB."
                    );

                    this.value = "";

                    return;

                }


                /* Create image preview */

                const reader =
                    new FileReader();


                reader.onload =
                    function (event) {

                        if (imagePreview) {

                            imagePreview.innerHTML = `
                                <img
                                    src="${event.target.result}"
                                    alt="Selected reference photo"
                                >
                            `;

                            imagePreview.style.display =
                                "block";

                        }


                        if (uploadBox) {

                            uploadBox.classList.add(
                                "has-file"
                            );

                        }


                        if (uploadContent) {

                            const title =
                                uploadContent.querySelector(
                                    "strong"
                                );

                            const subtitle =
                                uploadContent.querySelector(
                                    "small"
                                );


                            if (title) {

                                title.textContent =
                                    file.name;

                            }


                            if (subtitle) {

                                subtitle.textContent =
                                    "Reference photo selected ✓";

                            }

                        }

                    };


                reader.readAsDataURL(file);

            }
        );

    }



    /* =====================================
       ORDER FORM → WHATSAPP
    ====================================== */

    const orderForm =
        document.getElementById("orderForm");


    if (orderForm) {

        orderForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                /* ---------- GET FORM VALUES ---------- */

                const name =
                    document
                        .getElementById("name")
                        .value
                        .trim();


                const phone =
                    document
                        .getElementById("phone")
                        .value
                        .trim();


                const email =
                    document
                        .getElementById("email")
                        .value
                        .trim();


                const size =
                    document
                        .getElementById("size")
                        .value;


                const people =
                    document
                        .getElementById("people")
                        .value;


                const message =
                    document
                        .getElementById("message")
                        .value
                        .trim();


                const frameElement =
                    document.querySelector(
                        'input[name="frame"]:checked'
                    );


                const frame =
                    frameElement
                        ? frameElement.value
                        : "Not selected";



                /* ---------- WHATSAPP MESSAGE ---------- */

                const whatsappMessage =

`Hello Favoured Arch! ✨

I would like to order a custom portrait sketch.

━━━━━━━━━━━━━━━━━━

👤 Name: ${name}

📱 Phone / WhatsApp: ${phone}

📧 Email: ${email || "Not provided"}

📐 Size: ${size}

🖼️ Frame: ${frame}

👥 Number of People: ${people}

📝 Special Instructions:
${message || "None"}

━━━━━━━━━━━━━━━━━━

I have selected my reference photo on the website.

I will send the photo separately on WhatsApp.

Thank you! 🤍`;



                /* =================================
                   YOUR WHATSAPP NUMBER
                   
                   CHANGE THIS NUMBER
                   ================================= */

                const whatsappNumber = "918303357841";



                /* ---------- WHATSAPP NUMBER CHECK ---------- */

                if (whatsappNumber.includes("X")) {
                    alert("Please add your Favoured Arch WhatsApp number in script.js before accepting orders.");
                    return;
                }

                /* ---------- OPEN WHATSAPP ---------- */

                const whatsappURL =
                    "https://wa.me/" +
                    whatsappNumber +
                    "?text=" +
                    encodeURIComponent(
                        whatsappMessage
                    );


                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    }

});
/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", () => {
    const pageLoader = document.getElementById("pageLoader");

    if (pageLoader) {
        setTimeout(() => {
            pageLoader.classList.add("hidden");
        }, 500);
    }
});