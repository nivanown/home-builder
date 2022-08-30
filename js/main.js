if (document.querySelector(".forms-filter")) {
    $(function() {
        $('input[type=range]').on('input', function() {
            var val = $(this).val();
            $('#val').text(val);
        });
    })


    let pagination = $(".pagination__item");
    for (const item of pagination) {
        item.addEventListener('click', function() {
            for (const elem of pagination) {
                if (elem.classList.contains("active")) {
                    elem.classList.remove("active");
                }
            }
            this.classList.add('active');
        })
    }
}



// VIDEO


function playVideo() {
    const video = document.querySelector('video');
    const playButton = document.querySelector('video');
    const closeButton = document.querySelector('.interview-player');
    const toggleButton = document.querySelector('.interview-play');
    let mobileBtn = document.querySelector(".interview-play.mobile");

    let onPlay = `<svg class="interview-icon" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 10V50L50 30L17.5 10Z " stroke="#B4915E " stroke-width="2 " stroke-linecap="round " stroke-linejoin="round "></path>
</svg>`;
    let onPause = `<svg class="interview-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
    <path fill="none" d="M0 0h24v24H0z"/><path d="M15 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V7zM7 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0V7z" fill="rgba(180,145,94,1)"/>
</svg>`;

    const body = document.querySelector("body");

    function togglePlay() {
        if (video.paused || video.ended) {
            video.play();
            setTimeout(function() {
                closeButton.classList.add("playing")
            }, 100)
            toggleButton.innerHTML = onPause;
            playButton.classList.add('playing')
            body.style.overflow = "hidden";
            if ($(window).width() < 992) {
                mobileBtn.style.display = "none";
            }

        } else {
            video.pause();
            playButton.classList.remove('playing')
        }
    }

    function pause() {
        if (video.play) {
            video.pause();
            playButton.classList.remove('playing')
        }
    }
    closeButton.addEventListener('click', function(ev) {
        let { target } = ev;
        if (
            target.closest("div") && target.closest("div").classList.contains("interview-player") ||
            target.closest("div") && target.closest("div").classList.contains("interview-video") &&
            !target.closest("video")
        ) {
            video.pause();
            closeButton.classList.remove("playing");
            playButton.classList.remove("playing");
            body.style.overflow = "inherit";
            if ($(window).width() < 992) {
                mobileBtn.style.display = "flex";
            }

            mobileBtn.innerHTML = onPlay;
        }
    });


    playButton.addEventListener('click', togglePlay);
}
if (document.querySelector('video')) {
    playVideo();
}




// FORM

if (document.querySelector('.callback')) {
    $(function() {
        $('.callback .input-group .input').focusout(function() {
            var text_val = $(this).val();
            if (text_val == "") {
                $(this).removeClass('has-value');
            } else {
                $(this).addClass('has-value');
            }
        });
    });
}




// LOAD MORE

let loadBtn = $(".forms-load");
loadBtn.on('click', function() {
    let html = ``;
    let parent = this.parentElement.parentElement;
    let row = parent.querySelector(".row");
    let item = parent.querySelector(".card");
    if (item) {
        for (let i = 0; i < 6; i++) {
            html += $(item).prop('outerHTML');
        }

        row.innerHTML = row.innerHTML + html;
    }

})


// GALLERY
function gallery() {
    let modal = document.querySelector(".g-modal");
    let imageLabel = document.querySelector(".g-image");
    let gallery = document.querySelector(".gallery-web");
    let prevBtn = document.querySelector(".g-prev");
    let nextBtn = document.querySelector(".g-next");
    console.log(gallery)
    gallery.addEventListener('click', function(ev) {
        const body = document.querySelector("body");
        let { target } = ev;
        let images = gallery.querySelectorAll(".gallery-item");
        let activeImage = 0;
        if (target.closest("div") && target.closest("div").classList.contains("gallery-item")) {
            body.style.overflow = "hidden";
            for (let i = 0; i < images.length; i++) {
                if (images[i] == target) {
                    let img = images[i].querySelector(".gallery-image");
                    activeImage = i;
                    imageLabel.innerHTML = img.outerHTML;
                    modal.classList.add("active");
                }
            }
        }
        prevBtn.addEventListener('click', function(ev) {
            if (activeImage > 0) {
                imageLabel.innerHTML = images[activeImage - 1].querySelector(".gallery-image").outerHTML;
                activeImage--;
            }

        });
        nextBtn.addEventListener('click', function(ev) {
            if (activeImage < images.length - 1) {
                imageLabel.innerHTML = images[activeImage + 1].querySelector(".gallery-image").outerHTML;
                activeImage++;
            }
        });
    })

    modal.addEventListener('click', function(ev) {
        let { target } = ev;
        if (target.closest("div") && target.closest("div").classList.contains("g-modal")) {
            body.style.overflow = "inherit";
            target.classList.remove("active");
        }
    })
}