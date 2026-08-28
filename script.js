// =====================================================
// MEMORY GRAVITY
// STABLE PRODUCTION JAVASCRIPT
// Loading → Home → Memory Guide → Memory Room
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // =================================================
    // PAGE REFERENCES
    // =================================================

    const loadingPage =
        document.querySelector(".loading-page");

    const homePage =
        document.querySelector(".home");

    const memoryGuide =
        document.querySelector("#memoryGuide");

    const startButton =
        document.querySelector(".start-btn");

    const enterMemoryRoom =
        document.querySelector("#enterMemoryRoom");

    const memoryRoom =
        document.querySelector("#memoryRoom");


    // =================================================
    // STATE
    // =================================================

    let journeyStarted = false;

    let memoryRoomStarted = false;

    let memoriesFound = 0;

    let memoryTimer = null;


    // =================================================
    // INITIAL PAGE STATE
    // =================================================

    if (loadingPage) {

        loadingPage.style.display = "flex";

        loadingPage.classList.remove("hide");
    }


    if (homePage) {

        homePage.style.display = "none";

        homePage.classList.remove("hide");
    }


    if (memoryGuide) {

        memoryGuide.style.display = "none";

        memoryGuide.classList.remove(
            "is-visible"
        );

        memoryGuide.style.opacity = "0";

        memoryGuide.style.visibility =
            "hidden";

        memoryGuide.style.pointerEvents =
            "none";
    }


    if (memoryRoom) {

        memoryRoom.style.display = "none";

        memoryRoom.classList.remove(
            "is-active",
            "is-visible"
        );

        memoryRoom.style.opacity = "0";

        memoryRoom.style.visibility =
            "hidden";

        memoryRoom.style.pointerEvents =
            "none";
    }


    // =================================================
    // PREMIUM DREAM STARS
    // =================================================

    const dreamBackground =
        document.querySelector(
            ".dream-background"
        );


    const starColors = [
        "#FFFFFF",
        "#D9F4FF",
        "#E8E2FF"
    ];


    if (dreamBackground) {

        for (let i = 0; i < 130; i++) {

            const star =
                document.createElement("div");

            star.classList.add("star");

            star.style.left =
                Math.random() * 100 + "%";

            star.style.top =
                Math.random() * 100 + "%";


            const random =
                Math.random();


            if (random < 0.70) {

                star.style.width = "1px";
                star.style.height = "1px";

            }

            else if (random < 0.95) {

                star.style.width = "2px";
                star.style.height = "2px";

            }

            else {

                star.style.width = "3px";
                star.style.height = "3px";

            }


            star.style.background =
                starColors[
                    Math.floor(
                        Math.random() *
                        starColors.length
                    )
                ];


            star.style.animationDelay =
                Math.random() * 10 + "s";

            star.style.animationDuration =
                6 +
                Math.random() * 6 +
                "s";


            dreamBackground.appendChild(
                star
            );
        }
    }


    // =================================================
    // PREMIUM STAR FIELD
    // =================================================

    const starField =
        document.querySelector(
            "#star-field"
        );


    if (starField) {

        for (let i = 0; i < 100; i++) {

            const star =
                document.createElement("div");

            star.className = "star";


            star.style.left =
                Math.random() * 100 + "%";

            star.style.top =
                Math.random() * 100 + "%";


            const size =
                Math.random() < 0.85
                    ? 1
                    : 2;


            star.style.width =
                size + "px";

            star.style.height =
                size + "px";


            star.style.animationDelay =
                Math.random() * 8 + "s";

            star.style.animationDuration =
                5 +
                Math.random() * 7 +
                "s";


            starField.appendChild(
                star
            );
        }
    }


    // =================================================
    // DIGITAL PARTICLES
    // =================================================

    const particleContainer =
        document.querySelector(
            ".digital-particles"
        );


    if (particleContainer) {

        for (let i = 0; i < 35; i++) {

            const particle =
                document.createElement("div");

            particle.className =
                "digital-particle";


            particle.style.left =
                Math.random() * 100 + "%";

            particle.style.top =
                60 +
                Math.random() * 40 +
                "%";


            particle.style.animationDuration =
                4 +
                Math.random() * 5 +
                "s";


            particle.style.animationDelay =
                Math.random() * 5 +
                "s";


            particleContainer.appendChild(
                particle
            );
        }
    }


    // =================================================
    // LOADING → HOME
    // =================================================

    setTimeout(() => {

        if (!loadingPage) {

            showHome();

            return;
        }


        loadingPage.classList.add(
            "hide"
        );


        setTimeout(() => {

            loadingPage.style.display =
                "none";

            showHome();

        }, 1000);


    }, 6500);


    // =================================================
    // SHOW HOME
    // =================================================

    function showHome() {

        if (!homePage) return;


        homePage.style.display =
            "flex";

        homePage.classList.remove(
            "hide"
        );


        requestAnimationFrame(() => {

            startHomeIntro();

        });
    }


    // =====================================================
    // HOME CINEMATIC INTRO
    // Logo → Typing Tagline → Button
    // =====================================================

    function startHomeIntro() {

        const logo =
            document.querySelector(
                ".mg-home-logo"
            );


        const lines =
            document.querySelectorAll(
                ".memory-line"
            );


        const button =
            document.querySelector(
                ".start-btn"
            );


        if (logo) {

            logo.classList.remove(
                "show"
            );
        }


        lines.forEach(line => {

            line.classList.remove(
                "show"
            );

        });


        if (button) {

            button.classList.remove(
                "show"
            );
        }


        // Logo

        setTimeout(() => {

            if (logo) {

                logo.classList.add(
                    "show"
                );

            }

        }, 1000);


        // Tagline

        setTimeout(() => {

            lines.forEach(
                (line, index) => {

                    setTimeout(() => {

                        line.classList.add(
                            "show"
                        );

                    }, index * 700);

                }
            );

        }, 3000);


        // Button

        setTimeout(() => {

            if (button) {

                button.classList.add(
                    "show"
                );

            }

        }, 5200);

    }


    // =================================================
    // HOME → MEMORY GUIDE
    // =================================================

    if (startButton) {

        startButton.addEventListener(
            "click",
            openMemoryGuide
        );
    }


    function openMemoryGuide() {

        if (
            journeyStarted ||
            !memoryGuide
        ) {

            return;
        }


        journeyStarted = true;


        if (homePage) {

            homePage.classList.add(
                "hide"
            );
        }


        setTimeout(() => {

            if (homePage) {

                homePage.style.display =
                    "none";
            }


            memoryGuide.style.display =
                "flex";


            memoryGuide.classList.remove(
                "is-visible"
            );


            memoryGuide.style.opacity =
                "0";

            memoryGuide.style.visibility =
                "hidden";

            memoryGuide.style.pointerEvents =
                "none";


            requestAnimationFrame(() => {

                requestAnimationFrame(() => {

                    memoryGuide.classList.add(
                        "is-visible"
                    );


                    memoryGuide.style.opacity =
                        "1";

                    memoryGuide.style.visibility =
                        "visible";

                    memoryGuide.style.pointerEvents =
                        "auto";

                });

            });


        }, 800);

    }

/* =========================================================
   MEMORY ROOM
   STEP 2 — FULLY MATCHED WITH NEW HTML
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       DOM READY
    ===================================================== */

    function initMemoryRoom() {

        /* -------------------------------------------------
           MEMORY GUIDE
        ------------------------------------------------- */

        const guide =
            document.querySelector(".memory-guide");


        const guideButton =
            guide
                ? guide.querySelector("button, a")
                : null;


        /* -------------------------------------------------
           MEMORY ROOM
        ------------------------------------------------- */

        const room =
            document.querySelector("#memoryRoom");


        if (!room) {
            console.warn("Memory Room not found.");
            return;
        }


        /* -------------------------------------------------
           MEMORY PASSES
        ------------------------------------------------- */

        const passes =
            Array.from(
                room.querySelectorAll(".memory-pass")
            );


        if (!passes.length) {
            console.warn("No Memory Pass found.");
            return;
        }


        /* -------------------------------------------------
           NAVIGATION
        ------------------------------------------------- */

        const previousButton =
            room.querySelector(".memory-prev");


        const nextButton =
            room.querySelector(".memory-next");


        const dots =
            Array.from(
                room.querySelectorAll(".memory-dot")
            );


        /* -------------------------------------------------
           PASSWORDS
        ------------------------------------------------- */

        const passwords = {

            1: "NAFISA",
            2: "NASHIT",
            3: "ARMAN",
            4: "FARIHA",
            5: "MAMUN",
            6: "RUPA"

        };

// =====================================================
// HIDDEN MESSAGES
// =====================================================

const hiddenMessages = {

    1: `Even though I’m older, slowly but surely, my little brother became my guardian. The same little boy whom I used to dress in my school uniform, make my student, and pretend to be his teacher when we were kids.

After finishing primary school, we would save our tiffin money and have our own little picnic every Friday. During our graduation years, we would take our beloved Nashit and go out to restaurants and on little trips together every year.

We have countless precious memories together. You are truly one of the most precious gifts Allah has blessed me with. The one who loves and adores me so much and calls me Rangamoni.

I always want to stay by your side as your Rangamoni, just like you have always been there for me.

Love you so much, Shapu.`,



    2: `One of the greatest gifts in my life is my brother. Whom I call Tata.

There is no word how much mischief I played with Tata as a child. Most of my childhood was spent having fun with Tata. But Tata was never bored.

When he was in Bangladesh, I used to talk to Tata until late at night. Now, I don’t stay up late talking to Tata anymore. Because now the times have completely changed.

But our fun, joy, mischief will never change, everything will remain.`,



    3: `Distance can never change the bond we share.

You’re not just my best friend you’re like my own brother. We’ve shared so many memories, laughs, good times, and difficult moments together, and I’m truly grateful to have you in my life.

I pray that Allah blesses you with happiness, success, good health, and a beautiful future.

I really miss the old days. Hopefully, we’ll meet again soon and make many more unforgettable memories together.

Stay happy, stay blessed,
Miss you buddy!`,



    4: `I always felt the absence of a brother in my life, and I found that missing bond in you.

You have always given me advice on every matter and made an effort to understand things from my perspective as well.

Having you in my life is truly one of the greatest blessings for me.

From the bottom of my heart, I pray for you—may Allah grant my elder brother a long and healthy life.

May He make his life beautiful, successful, and full of light.

May Allah bless my brother with a righteous and blessed life and grant him success in both this world and the Hereafter.

Ameen.`,



    5: `Shadman is not just a person in my life; he is a very important part of it.

Whenever I face a problem, he listens, understands, analyzes, and helps me find the right way forward without ever making me feel pressured or guilty.

He has not only helped me overcome my problems but also helped me overcome the disappointment and helplessness that came with them.

Honestly, I don’t think I would be where I am today without his support and presence in my life.`,



    6: `I don’t know if you remember, but when I was sitting at Dhanmondi Lake, feeling really heartbroken and crying, you told me, “Don’t be sad, I’m always here for you.”

Those words gave me so much comfort and strength that day.

Even now, whenever I feel low, I remember them.

You’ve always been there for me like family, helping me make the right decisions during difficult times.`
};


        /* =================================================
           STATE
        ================================================= */

        let currentIndex = 0;

        let changing = false;

        let totalUnlocked = 0;


        const unlocked =
            new Array(passes.length).fill(false);


        /* =================================================
           SHOW ROOM
        ================================================= */

        function showRoom() {

            room.classList.add("mr-visible");
            room.classList.add("active");

            room.setAttribute(
                "aria-hidden",
                "false"
            );

            room.style.display = "flex";
            room.style.visibility = "visible";
            room.style.opacity = "1";
            room.style.pointerEvents = "auto";

        }


        /* =================================================
           HIDE GUIDE
        ================================================= */

        function hideGuide() {

            if (!guide) return;

            guide.classList.add("is-hidden");
            guide.classList.remove("active");

            guide.setAttribute(
                "aria-hidden",
                "true"
            );

            guide.style.display = "none";
            guide.style.visibility = "hidden";
            guide.style.opacity = "0";
            guide.style.pointerEvents = "none";

        }


        /* =================================================
           OPEN MEMORY ROOM
        ================================================= */

        function openMemoryRoom() {

            hideGuide();

            showRoom();

            currentIndex = 0;

            updatePasses();

        }


        /* =================================================
           UPDATE PASSES
        ================================================= */

        function updatePasses() {

            passes.forEach(function (pass, index) {

                pass.classList.remove(
                    "is-active",
                    "is-exiting-left",
                    "is-exiting-right"
                );

                const isActive =
                    index === currentIndex;

                pass.classList.toggle(
                    "is-active",
                    isActive
                );

                pass.setAttribute(
                    "aria-hidden",
                    isActive
                        ? "false"
                        : "true"
                );

            });


            updateDots();

        }


        /* =================================================
           GUIDE BUTTON
        ================================================= */

        if (guideButton) {

            guideButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    openMemoryRoom();

                }
            );

        }


        /* =================================================
           BACKUP GUIDE CLICK
        ================================================= */

        document.addEventListener(
            "click",
            function (event) {

                const clicked =
                    event.target.closest(
                        ".memory-guide button, .memory-guide a"
                    );


                if (!clicked) return;


                event.preventDefault();
                event.stopPropagation();


                openMemoryRoom();

            },
            true
        );


        /* =================================================
           SHOW PASS
        ================================================= */

        function showPass(
            targetIndex,
            direction
        ) {

            if (
                targetIndex < 0 ||
                targetIndex >= passes.length
            ) {
                return;
            }


            if (
                changing ||
                targetIndex === currentIndex
            ) {
                return;
            }


            const oldPass =
                passes[currentIndex];


            const newPass =
                passes[targetIndex];


            if (!oldPass || !newPass) {
                return;
            }


            changing = true;


            /* ---------------------------------------------
               EXIT OLD PASS
            --------------------------------------------- */

            if (direction > 0) {

                oldPass.classList.add(
                    "is-exiting-left"
                );

            } else {

                oldPass.classList.add(
                    "is-exiting-right"
                );

            }


            /* ---------------------------------------------
               CHANGE INDEX
            --------------------------------------------- */

            currentIndex =
                targetIndex;


            /* ---------------------------------------------
               SHOW NEW PASS
            --------------------------------------------- */

            passes.forEach(function (pass, index) {

                pass.classList.remove(
                    "is-active"
                );

                pass.setAttribute(
                    "aria-hidden",
                    index === currentIndex
                        ? "false"
                        : "true"
                );

            });


            newPass.classList.add(
                "is-active"
            );


            updateDots();


            /* ---------------------------------------------
               CLEAN ANIMATION
            --------------------------------------------- */

            window.setTimeout(
                function () {

                    passes.forEach(
                        function (pass) {

                            pass.classList.remove(
                                "is-exiting-left",
                                "is-exiting-right"
                            );

                        }
                    );


                    changing = false;

                },
                600
            );

        }


        /* =================================================
           DOT UPDATE
        ================================================= */

        function updateDots() {

            dots.forEach(
                function (dot, index) {

                    const active =
                        index === currentIndex;


                    dot.classList.toggle(
                        "is-active",
                        active
                    );


                    dot.setAttribute(
                        "aria-current",
                        active
                            ? "true"
                            : "false"
                    );

                }
            );

        }


        /* =================================================
           PREVIOUS BUTTON
        ================================================= */

        if (previousButton) {

            previousButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();


                    if (changing) return;


                    /* প্রথম pass থেকে আবার last pass */

                    if (currentIndex === 0) {

                        showPass(
                            passes.length - 1,
                            -1
                        );

                        return;

                    }


                    showPass(
                        currentIndex - 1,
                        -1
                    );

                }
            );

        }


        /* =================================================
           NEXT BUTTON
        ================================================= */

        if (nextButton) {

            nextButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();


                    if (changing) return;


                    /* -------------------------------------
                       LAST PASS
                    ------------------------------------- */

                    if (
                        currentIndex ===
                        passes.length - 1
                    ) {

                        if (
                            totalUnlocked ===
                            passes.length
                        ) {

                            goToFinalVideo();

                        }

                        return;

                    }


                    /* -------------------------------------
                       NEXT PASS
                    ------------------------------------- */

                    showPass(
                        currentIndex + 1,
                        1
                    );

                }
            );

        }


        /* =================================================
           DOT NAVIGATION
        ================================================= */

        dots.forEach(
            function (dot) {

                dot.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();


                        if (changing) return;


                        const target =
                            Number(
                                dot.dataset.slide
                            );


                        if (
                            Number.isNaN(target) ||
                            target < 0 ||
                            target >= passes.length
                        ) {
                            return;
                        }


                        if (
                            target === currentIndex
                        ) {
                            return;
                        }


                        showPass(
                            target,
                            target > currentIndex
                                ? 1
                                : -1
                        );

                    }
                );

            }
        );


        /* =================================================
           PASSWORD SETUP
        ================================================= */

        passes.forEach(
            function (pass) {

                const input =
                    pass.querySelector(
                        ".memory-password-input"
                    );


                const button =
                    pass.querySelector(
                        ".memory-unlock-button"
                    );


                if (!input || !button) {
                    return;
                }


                button.addEventListener(
                    "click",
                    function () {

                        unlockPass(
                            pass,
                            input,
                            button
                        );

                    }
                );


                input.addEventListener(
                    "keydown",
                    function (event) {

                        if (
                            event.key === "Enter"
                        ) {

                            event.preventDefault();


                            unlockPass(
                                pass,
                                input,
                                button
                            );

                        }

                    }
                );

            }
        );


        /* =================================================
           UNLOCK PASS
        ================================================= */

        function unlockPass(
            pass,
            input,
            button
        ) {

            const memoryNumber =
                Number(
                    pass.dataset.memory
                );


            if (
                unlocked[
                    memoryNumber - 1
                ]
            ) {
                return;
            }


            const entered =
                input.value
                    .trim()
                    .toUpperCase();


            const correctPassword =
                passwords[
                    memoryNumber
                ];


            /* ---------------------------------------------
               WRONG PASSWORD
            --------------------------------------------- */

            if (
                !entered ||
                entered !== correctPassword
            ) {

                showPasswordError(
                    pass,
                    input
                );

                return;

            }


            /* ---------------------------------------------
               UNLOCK
            --------------------------------------------- */

            unlocked[
                memoryNumber - 1
            ] = true;


            totalUnlocked++;


            pass.classList.add(
                "is-unlocked"
            );


            pass.dataset.unlocked =
                "true";


            input.disabled = true;

            button.disabled = true;


            /* ---------------------------------------------
               HIDE ERROR
            --------------------------------------------- */

            const passwordSection =
                pass.querySelector(
                    ".memory-password"
                );


            if (passwordSection) {

                passwordSection.classList.remove(
                    "is-error"
                );

            }


            /* ---------------------------------------------
               MESSAGE
            --------------------------------------------- */

            const message =
                pass.querySelector(
                    ".memory-hidden-message"
                );


            if (message) {

                message.textContent =
                    hiddenMessages[
                        memoryNumber
                    ] || "";

            }


            /* ---------------------------------------------
               PASS LABEL
            --------------------------------------------- */

            const passLabel =
                pass.querySelector(
                    ".memory-message-pass"
                );


            if (passLabel) {

                passLabel.textContent =
                    "PASS " +
                    String(memoryNumber)
                        .padStart(2, "0");

            }

        }


        /* =================================================
           PASSWORD ERROR
        ================================================= */

        function showPasswordError(
            pass,
            input
        ) {

            const passwordSection =
                pass.querySelector(
                    ".memory-password"
                );


            if (passwordSection) {

                passwordSection.classList.remove(
                    "is-error"
                );


                void passwordSection.offsetWidth;


                passwordSection.classList.add(
                    "is-error"
                );

            }


            input.focus();


            setTimeout(
                function () {

                    if (passwordSection) {

                        passwordSection.classList.remove(
                            "is-error"
                        );

                    }

                },
                1000
            );

        }


        /* =================================================
           SWIPE
        ================================================= */

        let touchStartX = 0;
        let touchStartY = 0;


        room.addEventListener(
            "touchstart",
            function (event) {

                if (
                    !event.touches ||
                    !event.touches.length
                ) {
                    return;
                }


                touchStartX =
                    event.touches[0].clientX;


                touchStartY =
                    event.touches[0].clientY;

            },
            {
                passive: true
            }
        );


        room.addEventListener(
            "touchend",
            function (event) {

                if (
                    !event.changedTouches ||
                    !event.changedTouches.length
                ) {
                    return;
                }


                const touch =
                    event.changedTouches[0];


                const deltaX =
                    touch.clientX -
                    touchStartX;


                const deltaY =
                    touch.clientY -
                    touchStartY;


                if (
                    Math.abs(deltaX) < 55 ||
                    Math.abs(deltaX) <=
                    Math.abs(deltaY)
                ) {
                    return;
                }


                if (changing) return;


                /* LEFT = NEXT */

                if (deltaX < 0) {

                    if (
                        currentIndex <
                        passes.length - 1
                    ) {

                        showPass(
                            currentIndex + 1,
                            1
                        );

                    } else if (
                        totalUnlocked ===
                        passes.length
                    ) {

                        goToFinalVideo();

                    }

                }


                /* RIGHT = PREVIOUS */

                else {

                    if (
                        currentIndex > 0
                    ) {

                        showPass(
                            currentIndex - 1,
                            -1
                        );

                    }

                }

            },
            {
                passive: true
            }
        );


        /* =================================================
           KEYBOARD
        ================================================= */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    !room.classList.contains(
                        "mr-visible"
                    ) &&
                    !room.classList.contains(
                        "active"
                    )
                ) {
                    return;
                }


                if (
                    event.target &&
                    event.target.matches(
                        "input, textarea, select"
                    )
                ) {
                    return;
                }


                if (
                    event.key === "ArrowRight"
                ) {

                    if (
                        currentIndex <
                        passes.length - 1
                    ) {

                        showPass(
                            currentIndex + 1,
                            1
                        );

                    }

                }


                if (
                    event.key === "ArrowLeft"
                ) {

                    if (
                        currentIndex > 0
                    ) {

                        showPass(
                            currentIndex - 1,
                            -1
                        );

                    }

                }

            }
        );


        /* =================================================
           RESET
        ================================================= */

        window.resetMemoryRoom =
            function () {

                currentIndex = 0;

                changing = false;

                totalUnlocked = 0;

                unlocked.fill(false);


                passes.forEach(
                    function (pass, index) {

                        pass.classList.remove(
                            "is-active",
                            "is-unlocked",
                            "is-exiting-left",
                            "is-exiting-right"
                        );


                        pass.dataset.unlocked =
                            "false";


                        pass.setAttribute(
                            "aria-hidden",
                            index === 0
                                ? "false"
                                : "true"
                        );


                        const input =
                            pass.querySelector(
                                ".memory-password-input"
                            );


                        const button =
                            pass.querySelector(
                                ".memory-unlock-button"
                            );


                        const passwordSection =
                            pass.querySelector(
                                ".memory-password"
                            );


                        const message =
                            pass.querySelector(
                                ".memory-hidden-message"
                            );


                        if (input) {

                            input.disabled = false;

                            input.value = "";

                        }


                        if (button) {

                            button.disabled = false;

                        }


                        if (passwordSection) {

                            passwordSection.classList.remove(
                                "is-error"
                            );

                        }


                        if (message) {

                            message.textContent =
                                hiddenMessages[
                                    Number(
                                        pass.dataset.memory
                                    )
                                ] || "";

                        }

                    }
                );


                passes[0].classList.add(
                    "is-active"
                );


                updateDots();

            };


        /* =================================================
           GLOBAL OPEN
        ================================================= */

        window.openMemoryRoom =
            function () {

                openMemoryRoom();

            };


        /* =================================================
           INITIAL STATE
        ================================================= */

        passes.forEach(
            function (pass, index) {

                pass.classList.remove(
                    "is-active"
                );


                pass.setAttribute(
                    "aria-hidden",
                    index === 0
                        ? "false"
                        : "true"
                );

            }
        );


        passes[0].classList.add(
            "is-active"
        );


        updateDots();


        /* -------------------------------------------------
           ROOM START HIDDEN
        ------------------------------------------------- */

        room.classList.remove(
            "mr-visible",
            "active"
        );


        room.setAttribute(
            "aria-hidden",
            "true"
        );


        room.style.display = "none";
        room.style.opacity = "0";
        room.style.visibility = "hidden";
        room.style.pointerEvents = "none";


        console.log(
            "Memory Room JavaScript initialized successfully."
        );

    }


    /* =====================================================
       START
    ===================================================== */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initMemoryRoom
        );

    } else {

        initMemoryRoom();

    }

})();

/* =========================================================
   FINAL VIDEO PAGE
   MEMORY ROOM → CINEMATIC FINAL VIDEO
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const finalVideoPage =
        document.querySelector("#finalVideoPage");

    const finalVideo =
        document.querySelector("#finalVideo");


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (!finalVideoPage) {

        console.warn(
            "FINAL VIDEO PAGE NOT FOUND."
        );

        return;
    }


    if (!finalVideo) {

        console.warn(
            "FINAL VIDEO ELEMENT NOT FOUND."
        );

        return;
    }


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    finalVideoPage.style.display = "none";
    finalVideoPage.style.opacity = "0";
    finalVideoPage.style.visibility = "hidden";
    finalVideoPage.style.pointerEvents = "none";

    finalVideoPage.setAttribute(
        "aria-hidden",
        "true"
    );


    /* =====================================================
       VIDEO SETTINGS
    ===================================================== */

    finalVideo.controls = false;

    finalVideo.autoplay = false;

    finalVideo.loop = false;

    finalVideo.preload = "auto";

    finalVideo.setAttribute(
        "playsinline",
        ""
    );

    finalVideo.setAttribute(
        "webkit-playsinline",
        ""
    );


    /*
       Landscape video পুরোটা দেখা যাবে।
       কোনো crop হবে না।
    */

    finalVideo.style.objectFit = "contain";


    /* =====================================================
       DISABLE VIDEO CONTEXT MENU
    ===================================================== */

    finalVideo.addEventListener(
        "contextmenu",
        function (event) {

            event.preventDefault();

        }
    );


    /* =====================================================
       VIDEO LOADING
    ===================================================== */

    finalVideo.addEventListener(
        "loadeddata",
        function () {

            console.log(
                "FINAL VIDEO LOADED."
            );

        }
    );


    finalVideo.addEventListener(
        "canplay",
        function () {

            console.log(
                "FINAL VIDEO READY TO PLAY."
            );

        }
    );


    /* =====================================================
       VIDEO ERROR
    ===================================================== */

    finalVideo.addEventListener(
        "error",
        function () {

            console.error(
                "FINAL VIDEO LOAD ERROR."
            );

            console.error(
                finalVideo.error
            );

        }
    );


    /* =====================================================
       OPEN FINAL VIDEO
    ===================================================== */

    function goToFinalVideo() {

        const memoryRoom =
            document.querySelector(
                "#memoryRoom"
            );


        /* =================================================
           HIDE MEMORY ROOM
        ================================================= */

        if (memoryRoom) {

            memoryRoom.classList.remove(
                "mr-visible",
                "active"
            );

            memoryRoom.setAttribute(
                "aria-hidden",
                "true"
            );

            memoryRoom.style.pointerEvents =
                "none";

            memoryRoom.style.visibility =
                "hidden";

            memoryRoom.style.opacity =
                "0";


            setTimeout(
                function () {

                    memoryRoom.style.display =
                        "none";

                },
                700
            );

        }


        /* =================================================
           PREPARE FINAL VIDEO PAGE
        ================================================= */

        finalVideoPage.classList.remove(
            "video-ending"
        );


        finalVideoPage.classList.add(
            "active",
            "is-active",
            "visible"
        );


        finalVideoPage.style.display =
            "flex";

        finalVideoPage.style.visibility =
            "visible";

        finalVideoPage.style.pointerEvents =
            "auto";

        finalVideoPage.style.opacity =
            "0";


        finalVideoPage.setAttribute(
            "aria-hidden",
            "false"
        );


        /* =================================================
           RESET VIDEO
        ================================================= */

        try {

            finalVideo.pause();

            finalVideo.currentTime = 0;

        } catch (error) {

            console.warn(
                "VIDEO RESET WARNING:",
                error
            );

        }



        /* =================================================
           CINEMATIC OPENING
        ================================================= */

        finalVideoPage.classList.add(
            "video-opening"
        );


        /*
         * Page প্রথমে black থাকবে।
         */

        finalVideoPage.style.opacity =
            "1";


        /* =================================================
           WAIT FOR VIDEO TO BE READY
        ================================================= */

        const startVideo = function () {

            try {

                const playPromise =
                    finalVideo.play();


                if (
                    playPromise &&
                    typeof playPromise.then ===
                    "function"
                ) {

                    playPromise
                        .then(function () {

                            console.log(
                                "FINAL VIDEO PLAYING."
                            );

                        })
                        .catch(function (error) {

                            console.warn(
                                "VIDEO AUTOPLAY BLOCKED:",
                                error
                            );

                        });

                }

            } catch (error) {

                console.warn(
                    "VIDEO PLAY ERROR:",
                    error
                );

            }

        };


        /*
         * Browser যদি video already ready রাখে
         */

        if (
            finalVideo.readyState >= 3
        ) {

            startVideo();

        }

        /*
         * না হলে canplay event-এর মাধ্যমে play হবে
         */

        else {

            finalVideo.addEventListener(
                "canplay",
                startVideo,
                {
                    once: true
                }
            );

        }


        /* =================================================
           REMOVE OPENING BLACK
        ================================================= */

        window.setTimeout(
            function () {

                finalVideoPage.classList.remove(
                    "video-opening"
                );

            },
            1500
        );

    }


    /* =====================================================
       VIDEO ENDED
    ===================================================== */

    finalVideo.addEventListener(
        "ended",
        function () {

            console.log(
                "FINAL VIDEO FINISHED."
            );


            /* =============================================
               CINEMATIC ENDING
            ============================================= */

            finalVideoPage.classList.add(
                "video-ending"
            );


            finalVideoPage.style.pointerEvents =
                "none";


            /*
             * Ending page-এর জন্য কিছু সময়
             * black fade থাকবে।
             */

           window.setTimeout(
    function () {

        finalVideoPage.classList.remove(
            "active",
            "is-active",
            "visible",
            "video-opening",
            "video-ending"
        );


        finalVideoPage.style.display =
            "none";


        finalVideoPage.style.opacity =
            "0";


        finalVideoPage.style.visibility =
            "hidden";


        finalVideoPage.style.pointerEvents =
            "none";


        finalVideoPage.setAttribute(
            "aria-hidden",
            "true"
        );



                    /*
                     * পরের ধাপে এখানে
                     * Ending Page open করার code
                     * বসানো হবে।
                     */

                   if (typeof window.openEndingPage === "function") {

    window.openEndingPage();

} else {

    console.warn(
        "Ending Page function not found."
    );

}
                },
                1600
            );

        }
    );


    /* =====================================================
       GLOBAL FUNCTION
       Memory Room থেকে call হবে
    ===================================================== */

    window.goToFinalVideo =
        goToFinalVideo;


    console.log(
        "Final Video JavaScript initialized successfully."
    );


})();

// =====================================================
// ENDING PAGE
// FINAL VIDEO → THE FADING MEMORY
// =====================================================

(function () {

    "use strict";


    // =====================================================
    // ELEMENTS
    // =====================================================

    const endingPage =
        document.querySelector("#endingPage");

    const endingMemoryLight =
        document.querySelector(".ending-memory-light");

    const endingLines = [

        document.querySelector(".ending-line-1"),

        document.querySelector(".ending-line-2"),

        document.querySelector(".ending-line-3"),

        document.querySelector(".ending-line-4"),

        document.querySelector(".ending-line-5")

    ];


    const returnToMemories =
        document.querySelector("#returnToMemories");


    // =====================================================
    // SAFETY CHECK
    // =====================================================

    if (!endingPage) {

        console.warn(
            "ENDING PAGE NOT FOUND."
        );

        return;

    }


    // =====================================================
    // INITIAL STATE
    // =====================================================

    endingPage.style.display = "none";

    endingPage.style.opacity = "0";

    endingPage.style.visibility = "hidden";

    endingPage.style.pointerEvents = "none";

    endingPage.setAttribute(
        "aria-hidden",
        "true"
    );


    // =====================================================
    // RESET ENDING PAGE
    // =====================================================

    function resetEndingPage() {

        endingPage.classList.remove(
            "is-starting",
            "is-ending"
        );


        endingPage.style.display = "none";

        endingPage.style.opacity = "0";

        endingPage.style.visibility = "hidden";

        endingPage.style.pointerEvents = "none";


        endingPage.setAttribute(
            "aria-hidden",
            "true"
        );


        // ---------------------------------------------
        // RESET TEXT
        // ---------------------------------------------

        endingLines.forEach(function (line) {

            if (!line) return;

            line.classList.remove(
                "is-visible",
                "show"
            );

        });


        // ---------------------------------------------
        // RESET BUTTON
        // ---------------------------------------------

        if (returnToMemories) {

            returnToMemories.classList.remove(
                "is-visible",
                "show"
            );

        }


        // ---------------------------------------------
        // RESET MEMORY LIGHT
        // ---------------------------------------------

        if (endingMemoryLight) {

            endingMemoryLight.classList.remove(
                "is-visible"
            );

        }

    }


    // =====================================================
    // OPEN ENDING PAGE
    // FINAL VIDEO শেষ হওয়ার পর এই function call হবে
    // =====================================================

    function openEndingPage() {

        if (!endingPage) {

            console.warn(
                "ENDING PAGE NOT FOUND."
            );

            return;

        }


        console.log(
            "Opening Ending Page..."
        );


        // =================================================
        // RESET
        // =================================================

        resetEndingPage();


        // =================================================
        // SHOW PAGE
        // =================================================

        endingPage.style.display = "flex";

        endingPage.style.visibility = "visible";

        endingPage.style.pointerEvents = "auto";

        endingPage.style.opacity = "0";


        endingPage.setAttribute(
            "aria-hidden",
            "false"
        );


        // =================================================
        // START CINEMATIC ANIMATION
        // =================================================

        requestAnimationFrame(function () {

            requestAnimationFrame(function () {

                endingPage.classList.add(
                    "is-starting"
                );

                endingPage.style.opacity = "1";


                // -----------------------------------------
                // MEMORY LIGHT
                // -----------------------------------------

                if (endingMemoryLight) {

                    endingMemoryLight.classList.add(
                        "is-visible"
                    );

                }

            });

        });


        // =================================================
        // TEXT TIMELINE
        // =================================================


        // ---------------------------------------------
        // LINE 1
        // 1.5 seconds
        // ---------------------------------------------

        window.setTimeout(function () {

            if (endingLines[0]) {

                endingLines[0].classList.add(
                    "is-visible"
                );

            }

        }, 1500);


        // ---------------------------------------------
        // LINE 2
        // 4.5 seconds
        // ---------------------------------------------

        window.setTimeout(function () {

            if (endingLines[1]) {

                endingLines[1].classList.add(
                    "is-visible"
                );

            }

        }, 4500);


        // ---------------------------------------------
        // LINE 3
        // 7 seconds
        // ---------------------------------------------

        window.setTimeout(function () {

            if (endingLines[2]) {

                endingLines[2].classList.add(
                    "is-visible"
                );

            }

        }, 7000);


        // ---------------------------------------------
        // LINE 4
        // 10 seconds
        // ---------------------------------------------

        window.setTimeout(function () {

            if (endingLines[3]) {

                endingLines[3].classList.add(
                    "is-visible"
                );

            }

        }, 10000);


        // ---------------------------------------------
        // LINE 5
        // 12 seconds
        // ---------------------------------------------

        window.setTimeout(function () {

            if (endingLines[4]) {

                endingLines[4].classList.add(
                    "is-visible"
                );

            }

        }, 12000);


        // =================================================
        // RETURN BUTTON
        // =================================================

        window.setTimeout(function () {

            if (returnToMemories) {

                returnToMemories.classList.add(
                    "is-visible"
                );

            }

        }, 18000);


        console.log(
            "Ending Page animation started."
        );

    }


    // =====================================================
    // GLOBAL FUNCTION
    // Final Video JavaScript থেকে call করা যাবে
    // =====================================================

    window.openEndingPage =
        openEndingPage;


    // =====================================================
    // RETURN TO MEMORIES
    // =====================================================

    if (returnToMemories) {

        returnToMemories.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                console.log(
                    "RETURN TO THE MEMORIES clicked."
                );


                // -----------------------------------------
                // Ending Page fade out
                // -----------------------------------------

                endingPage.classList.add(
                    "is-ending"
                );

                endingPage.style.pointerEvents =
                    "none";


                // -----------------------------------------
                // কিছুক্ষণ পর Memory Room
                // -----------------------------------------

                window.setTimeout(function () {

                    endingPage.classList.remove(
                        "is-ending"
                    );

                    endingPage.style.display =
                        "none";

                    endingPage.style.opacity =
                        "0";

                    endingPage.style.visibility =
                        "hidden";

                    endingPage.setAttribute(
                        "aria-hidden",
                        "true"
                    );


                    // -------------------------------------
                    // MEMORY ROOM
                    // -------------------------------------

                    const memoryRoom =
                        document.querySelector(
                            "#memoryRoom"
                        );


                    if (memoryRoom) {

                        memoryRoom.style.display =
                            "flex";

                        memoryRoom.style.visibility =
                            "visible";

                        memoryRoom.style.opacity =
                            "1";

                        memoryRoom.style.pointerEvents =
                            "auto";


                        memoryRoom.classList.add(
                            "mr-visible",
                            "active"
                        );


                        memoryRoom.setAttribute(
                            "aria-hidden",
                            "false"
                        );


                        // ---------------------------------
                        // RESET MEMORY ROOM
                        // ---------------------------------

                        if (
                            typeof window.resetMemoryRoom ===
                            "function"
                        ) {

                            window.resetMemoryRoom();

                        }

                    }


                }, 1600);

            }
        );

    }


    // =====================================================
    // INITIALIZE
    // =====================================================

    console.log(
        "Ending Page JavaScript initialized successfully."
    );


})();
    // =====================================================
    // PROTECTION
    // =====================================================

    document.addEventListener(
        "contextmenu",
        event => {

            event.preventDefault();

        }
    );


    document.addEventListener(
        "dragstart",
        event => {

            event.preventDefault();

        }
    );


    document.addEventListener(
        "selectstart",
        event => {

            event.preventDefault();

        }
    );


    document.addEventListener(
        "dblclick",
        event => {

            event.preventDefault();

        }
    );


    document.addEventListener(
        "copy",
        event => {

            event.preventDefault();

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.ctrlKey &&
                [
                    "a",
                    "c",
                    "s",
                    "u",
                    "p"
                ].includes(
                    event.key.toLowerCase()
                )
            ) {

                event.preventDefault();

            }

        }
    );

});