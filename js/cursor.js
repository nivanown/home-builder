function cursorTest() {
    const cursor = $(".cursor")[0];
    const normalCursor = $(".cursor--normal").html();
    const linkCursor = $(".cursor--link").html();
    const videoCursor = $(".cursor--video").html();
    const plusCursor = $(".cursor--plus").html();
    const player = document.querySelector("video");


    let NORMALCURSOR = "NORMALCURSOR"
    let LINKCURSOR = "LINKCURSOR"
    let activeCursor = null

    function mousemoveHandler(e) {
        const target = e.target;
        const tl = gsap.timeline();
        const defaults = {
            x: e.clientX,
            y: e.clientY,
            ease: "power2.out"
        }
        if (
            target.closest(".link-cursor") ||
            target.classList.contains("link-cursor")
        ) {
            if (activeCursor !== LINKCURSOR) {
                cursor.innerHTML = linkCursor
                activeCursor = LINKCURSOR
            }
            tl.to(cursor, 0.5, {
                opacity: 1,
                ...defaults
            });
        } else if (
            target.closest(".video-cursor") ||
            target.classList.contains("video-cursor")
        ) {
            if (activeCursor !== LINKCURSOR) {
                cursor.innerHTML = videoCursor
                activeCursor = LINKCURSOR
            }
            let pauseCursor = ` <div class="cursor--video "><span class="cursor--normal__content videoCursor ">
            <button class="interview-play ">                    
                <svg class="interview-icon pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M15 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V7zM7 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0V7z" fill="rgba(180,145,94,1)"/>
                </svg>
            </button>
        </span>
        </div>`;
            if (player.classList.contains("playing")) {
                cursor.innerHTML = pauseCursor;
            } else {
                cursor.innerHTML = videoCursor;
            }
            tl.to(cursor, 0.5, {
                opacity: 1,
                ...defaults
            });
        } else if (
            target.closest(".plus-cursor") ||
            target.classList.contains("plus-cursor")
        ) {
            if (activeCursor !== LINKCURSOR) {
                cursor.innerHTML = plusCursor
                activeCursor = LINKCURSOR
            }
            tl.to(cursor, 0.5, {
                opacity: 1,
                ...defaults
            });
        } else if (
            target.closest(".has-cursor") ||
            target.classList.contains("has-cursor")
        ) {
            let elem = target.closest(".has-cursor");
            let attr = elem.getAttribute("linked-cursor-id");
            tl.to(cursor, 0.5, {
                opacity: 1,
                ...defaults
            });
            if (attr && $('[data-cursor-id=' + attr + ']').length) {
                cursor.innerHTML = $('[data-cursor-id=' + attr + ']')[0].innerHTML
            } else {
                cursor.innerHTML = normalCursor
            }
        } else if (
            (target.closest("input") || target.tagName.toLowerCase() === "input") ||
            (target.closest("textarea") || target.tagName.toLowerCase() === "textarea")
        ) {
            tl.to(cursor, 0.5, {
                opacity: 0,
                ...defaults
            });
        } else {
            if (activeCursor !== NORMALCURSOR) {
                cursor.innerHTML = normalCursor
                activeCursor = NORMALCURSOR
            }
            tl.to(cursor, 0.5, {
                opacity: 1,
                ...defaults
            });
            if (
                target.closest("a") && (!target.closest("a").classList.contains("has-cursor") || !target.closest("a").classList.contains("link-cursor")) ||
                target.closest("button") && (!target.closest("button").classList.contains("has-cursor") || !target.closest("button").classList.contains("link-cursor")) ||
                target.closest("label") && target.closest("label").classList.contains("clickable") || target.closest("div") && target.closest("div").classList.contains("filter-rect")
            ) {
                $(".cursor .normalCursor").addClass("cursor-hover");

            } else {
                $(".cursor .normalCursor").removeClass("cursor-hover");
            }

            if (
                target.closest("a") && target.closest("a").classList.contains("cursor-dark") ||
                target.closest("button") && target.closest("button").classList.contains("cursor-dark")
            ) {
                $(".cursor .normalCursor").addClass("cursor-dark");
            } else {
                $(".cursor .normalCursor").removeClass("cursor-dark");
            }

            if (
                target.closest("label") && target.closest("label").classList.contains("cursor-dark")
            ) {
                $(".cursor .normalCursor").addClass("cursor-dark").addClass("active");
            } else {
                $(".cursor .normalCursor").removeClass("cursor-dark").removeClass("active");
            }

            if (
                target.closest(".swiper-slide") ||
                target.classList.contains("swiper-slide")
            ) {
                $(".cursor .normalCursor").addClass("cursor-hover").addClass("cursor-text");
                $(".cursor .normalCursor").html("drag")
            } else {
                $(".cursor .normalCursor").remove("cursor-hover").remove("cursor-text");
                $(".cursor .normalCursor").html("")
            }
            if (
                target.closest("div") &&
                target.closest("div").classList.contains("interview-player") &&
                target.closest("div").classList.contains("playing") ||
                target.closest("div") &&
                target.closest("div").classList.contains("interview-video") ||
                target.closest("div") &&
                target.closest("div").classList.contains("g-modal") &&
                !target.classList.contains("g-image")
            ) {
                $(".cursor .normalCursor").addClass("close-hover").addClass("close-text");
                $(".cursor .normalCursor").html("close")
            } else {
                $(".cursor .normalCursor").removeClass("close-hover").remove("close-text");
            }

            if (
                target.closest(".callback-wrapper") ||
                target.classList.contains(".callback-wrapper")
            ) {
                $(".cursor .normalCursor").addClass("cursor-white");
            } else {
                $(".cursor .normalCursor").removeClass("cursor-white");
            }
            if (
                target.closest("h1") ||
                target.closest("h2") ||
                target.closest("h3") ||
                target.closest("h4") ||
                target.closest("h5") ||
                target.closest("label") ||
                target.closest("lord-icon") ||
                target.closest("svg") ||
                target.closest("p") ||
                target.closest("button") ||
                target.closest("a") ||
                target.closest("div") && target.closest("div").classList.contains("filter-rect")
            ) {
                $(".cursor").addClass("cursor-opacity");

            } else {
                $(".cursor").removeClass("cursor-opacity");
            }

            if (
                target.closest("div") && target.closest("div").classList.contains("map")
            ) {
                $(".cursor").css("display", "none");
            } else {
                $(".cursor").css("display", "block");
            }

            if (
                target.closest("a") && target.closest("a").classList.contains("cursor-dark") ||
                target.closest("button") && target.closest("button").classList.contains("cursor-dark")
            ) {
                $(".cursor .normalCursor").addClass("cursor-dark");
            } else {
                $(".cursor .normalCursor").removeClass("cursor-dark");
            }
            if (
                target.closest("div") && target.closest("div").classList.contains("banner-line") ||
                target.closest("div") && target.closest("div").classList.contains("second")
            ) {
                $(".cursor .normalCursor").addClass("light-cursor");
            } else {
                $(".cursor .normalCursor").removeClass("light-cursor");
            }
        }
    }

    function mouseleaveHandler() {
        gsap.to(cursor, {
            opacity: 0
        });
    }

    document.addEventListener("mousemove", mousemoveHandler);
    document.addEventListener("mouseleave", mouseleaveHandler);
}

cursorTest();