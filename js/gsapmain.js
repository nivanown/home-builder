gsap.fromTo(".title-effect .slide-up span", {
    y: '100%',
    opacity: 0
}, {
    stagger: 0.2,
    y: 0,
    opacity: 1,
    duration: 0.4
});


function news() {
    gsap.fromTo(".d-interview .slide-up span", {
        y: '100%',
        opacity: 0
    }, {
        scrollTrigger: {
            trigger: ".d-interview",
            start: "top 80%",
        },
        stagger: 0.2,
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.5
    });
    if ($(window).width() > 992) {
        // let count = 40;
        // gsap.utils.toArray(".hero-iwrapper").forEach(item => {
        //     gsap.fromTo(item, {
        //         y: 200
        //     }, {
        //         scrollTrigger: {
        //             trigger: item,
        //             start: `top ${count}%`,
        //             scrub: true
        //         },
        //         y: 0
        //     });
        //     count -= 20;
        // })
        gsap.fromTo(".hero-iwrapper:first-child", {
            y: 200
        }, {
            scrollTrigger: {
                trigger: '.hero-iwrapper:first-child',
                start: `top 40%`,
                scrub: true
            },
            y: 0
        });
        gsap.fromTo(".hero-iwrapper:nth-child(2)", {
            y: 400
        }, {
            scrollTrigger: {
                trigger: '.hero',
                start: `top 90%`,
                scrub: true
            },
            y: 0
        });
    }



    gsap.fromTo(".news .slide-up span", {
        y: '100%',
        opacity: 0
    }, {
        scrollTrigger: {
            trigger: ".news",
            start: "top 80%",
        },
        stagger: 0.2,
        opacity: 1,
        y: 0,
        duration: 0.6
    });

    TweenMax.to('.banner-img-effect', 1, {
        delay: 0.5,
        height: 0,
        stagger: 0.2,
        ease: Expo.easeInOut
    });

    gsap.fromTo(".news-elem", {
        y: '100%',
    }, {
        scrollTrigger: {
            trigger: ".news",
            start: "top 60%",
            end: "90% start"
        },
        stagger: 0.2,
        y: 0,
        duration: 0.4
    });
    gsap.fromTo(".callback", {
        scale: 0.7,
    }, {
        scrollTrigger: {
            trigger: ".callback",
            scrub: true,
            start: "top 90%",
            end: "bottom 90%"
        },
        scale: 1,
        duration: 1
    })
}

function newsSingle() {
    gsap.fromTo(".hero-text .slide-up span", {
        y: '100%',
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 0.4
    });

    gsap.fromTo(".post-title .slide-up span", {
        y: '100%',
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.4
    });

    TweenMax.to('.banner-img-effect', 1, {
        delay: 0.5,
        height: 0,
        stagger: 0.2,
        ease: Expo.easeInOut
    });

    gsap.fromTo(".othernews .slide-up span", {
        y: '100%',
        opacity: 0
    }, {
        scrollTrigger: {
            trigger: ".othernews",
            start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.4
    });
    gsap.fromTo(".othernews-elem", {
        y: '100%',
    }, {
        scrollTrigger: {
            trigger: ".othernews",
            start: "top 60%",
            end: "90% start"
        },
        stagger: 0.2,
        y: 0,
        duration: 0.6
    });
}

function mainPage() {
    numCounter('.result', '.info__count span');
    let residentswidth = $(".residents-content .residents-buildings").length * $(".residents-buildings")[0].clientWidth
    let windowWidth = $(window).width()

    gsap.to(".residents", {
        scrollTrigger: {
            trigger: ".residents",
            start: "550px 33%",
            pin: true,
            scrub: true
        }
    })
    gsap.to(".residents-content", {
        left: -residentswidth + windowWidth,
        scrollTrigger: {
            trigger: ".residents-content",
            start: "top 20%",
            scrub: true
        }
    })



    gsap.fromTo(".residents-welcome .slide-up span", {
        y: '100%',
    }, {
        scrollTrigger: {
            trigger: ".residents",
            start: "top 70%",
        },
        stagger: 0.2,
        y: 0,
        duration: 0.4
    });



    gsap.fromTo(".interview .slide-up span", {
        y: '100%',
    }, {
        scrollTrigger: {
            trigger: ".interview",
            start: "top 70%"
        },
        stagger: 0.2,
        y: 0,
        duration: 0.4
    });

    gsap.fromTo(".apartments .slide-up span", {
        y: '100%',
    }, {
        scrollTrigger: {
            trigger: ".apartments",
            start: "top 70%",
        },
        stagger: 0.2,
        y: 0,
        duration: 0.4
    });

    gsap.fromTo(".apartments .card-wrapper", {
        y: '100%',
        opacity: 0
    }, {
        scrollTrigger: {
            trigger: ".apartments",
            start: "top 60%",
            end: "90% start"
        },
        y: 0,
        opacity: 1,
        duration: 0.6
    });

    gsap.fromTo(".result .slide-up span", {
        y: '100%',
    }, {
        scrollTrigger: {
            trigger: ".result",
            start: "top 90%",
            end: "90% start"
        },
        stagger: 0.2,
        y: 0,
        duration: 0.4
    });

    if ($(window).width() > 992) {
        let count = 60;
        gsap.from(".result", {
            scrollTrigger: {
                trigger: ".result",
                start: "top 5%",
                scrub: true
            }
        })

        gsap.fromTo(".result-buildings__image:first-child", {
            y: 0
        }, {
            scrollTrigger: {
                trigger: ".result",
                start: `top 50%`,
                scrub: true
            },
            y: -600
        });
        gsap.fromTo(".result-buildings__image:nth-child(2)", {
            y: 0
        }, {
            scrollTrigger: {
                trigger: ".result",
                start: `top 80%`,
                scrub: true
            },
            y: -500
        });
        gsap.fromTo(".result-buildings__image:nth-child(3)", {
            y: 0
        }, {
            scrollTrigger: {
                trigger: ".result",
                start: `top 30%`,
                scrub: true
            },
            y: -300
        });
    }

    gsap.fromTo(".news .slide-up span", {
        y: '100%',
    }, {
        scrollTrigger: {
            trigger: ".news",
            start: "top 90%",
            end: "90% start"
        },
        stagger: 0.2,
        y: 0,
        duration: 0.4
    });

    gsap.fromTo(".news-item", {
        y: '100%',
        opacity: 0
    }, {
        scrollTrigger: {
            trigger: ".news",
            start: "top 60%",
            end: "90% start"
        },
        y: 0,
        opacity: 1,
        duration: 0.6
    });

    // gsap.fromTo(".result .result-buildings__image", {
    //     y: '100%',
    // }, {
    //     scrollTrigger: {
    //         trigger: ".result",
    //         start: "top 90%",
    //         end: "90% start"
    //     },
    //     stagger: 0.2,
    //     y: 0,
    //     duration: 0.4
    // });

    TweenMax.to('.residents .banner-img-effect', 1, {
        scrollTrigger: {
            trigger: ".residents",
            start: "top 70%"
        },
        delay: 0.5,
        height: 0,
        stagger: 0.2,
        ease: Expo.easeInOut
    });

    TweenMax.to('.interview .banner-img-effect', 1, {
        scrollTrigger: {
            trigger: ".interview",
            start: "top 70%"
        },
        height: 0,
        ease: Expo.easeInOut
    });

    // function numCounter() {
    //     let self = this;
    //     var counted = 0;

    //     function startCount() {
    //         let oTop = $('.result').length ? $('.result').offset().top - window.innerHeight : false;

    //         if (counted == 0 && $(window).scrollTop() > oTop) {
    //             $('.info__count span').each(function() {
    //                 var $this = $(this),
    //                     countTo = Number($this.attr('data-count').replace(/ /g, ''));
    //                 $({
    //                     countNum: Number($this.text().replace(/ /g, ''))
    //                 }).animate({
    //                     countNum: countTo
    //                 }, {
    //                     duration: 2000,
    //                     easing: 'swing',
    //                     step: function(num) {
    //                         $this.text(Math.floor(this.countNum));
    //                     },
    //                     complete: function() {
    //                         $this.text(this.countNum);
    //                     }
    //                 });
    //             });
    //             counted = 1;
    //         }
    //     }

    //     startCount()
    //     $(window).scroll(function() {
    //         startCount()
    //     });
    // }


    gsap.fromTo(".callback", {
        scale: 0.7,
    }, {
        scrollTrigger: {
            trigger: ".callback",
            scrub: true,
            start: "top 90%",
            end: "bottom 90%"
        },
        scale: 1,
        duration: 1
    })

}

function apartments() {
    gsap.fromTo(".b-interview .slide-up span", {
        y: '100%',
        opacity: 0
    }, {
        scrollTrigger: {
            trigger: ".b-interview",
            start: "top 80%",
        },
        stagger: 0.2,
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.5
    });
    gsap.fromTo(".gallery .slide-up span", {
        y: '100%',
        opacity: 0
    }, {
        scrollTrigger: {
            trigger: ".gallery",
            start: "top 80%",
        },
        opacity: 1,
        y: 0,
        duration: 0.6
    });
    TweenMax.to('.hero .banner-img-effect', 1, {
        delay: 0.5,
        height: 0,
        stagger: 0.2,
        ease: Expo.easeInOut
    });
    TweenMax.to('.b-interview .banner-img-effect', 1, {
        scrollTrigger: {
            trigger: ".b-interview",
            start: "top 90%"
        },
        height: 0,
        ease: Expo.easeInOut
    });
    TweenMax.to('.gallery .banner-img-effect', 1, {
        scrollTrigger: {
            trigger: ".gallery",
            start: "top 90%"
        },
        stagger: 0.2,
        height: 0,
        ease: Expo.easeInOut
    });
    gsap.fromTo(".banner-img", {
        scale: 0.7,
    }, {
        scrollTrigger: {
            trigger: ".hero",
            scrub: true,
            start: "top 90%"
        },
        scale: 1,
        duration: 1
    })
    gsap.fromTo(".rooms .slide-up span", {
        y: '100%',
    }, {
        scrollTrigger: {
            trigger: ".rooms",
            start: "top 80%",
        },
        stagger: 0.2,
        y: 0,
        duration: 0.4
    });
    gsap.fromTo(".callback", {
        scale: 0.7,
    }, {
        scrollTrigger: {
            trigger: ".callback",
            scrub: true,
            start: "top 90%",
            end: "bottom 90%"
        },
        scale: 1,
        duration: 1
    })

}


function viewEffect() {
    let hoverEffect = $(".hover-underline");
    for (let i = 0; i < hoverEffect.length; i++) {
        if (hoverEffect.eq(i).find(".link-text").length) {
            hoverEffect.eq(i).prepend(`<span class="link-text-hidden">${hoverEffect.eq(i).find(".link-text").html()}</span>`)
        }
    }
}

viewEffect();


function contact() {
    TweenMax.to('.banner-img-effect', 1, {
        delay: 0.3,
        height: 0,
        stagger: 0.2,
        ease: Expo.easeInOut
    });
    gsap.fromTo(".callback", {
        scale: 0.7,
    }, {
        scrollTrigger: {
            trigger: ".callback",
            scrub: true,
            start: "top 90%",
            end: "bottom 90%"
        },
        scale: 1,
        duration: 1
    })
}

function apartmentsMain() {
    gsap.fromTo(".callback", {
        scale: 0.7,
    }, {
        scrollTrigger: {
            trigger: ".callback",
            scrub: true,
            start: "top 90%",
            end: "bottom 90%"
        },
        scale: 1,
        duration: 1
    })
    gsap.fromTo(".card-wrapper", {
        y: '100%',
        opacity: 0
    }, {
        scrollTrigger: {
            trigger: ".apartments",
            start: "top 90%",
            end: "bottom 90%"
        },
        y: 0,
        opacity: 1,
        duration: 0.8
    });
}

function faq() {
    gsap.fromTo(".callback", {
        scale: 0.7,
    }, {
        scrollTrigger: {
            trigger: ".callback",
            scrub: true,
            start: "top 90%",
            end: "bottom 90%"
        },
        scale: 1,
        duration: 1
    })
}


function about() {
    numCounter(".about", ".about-banner__title span")
    TweenMax.to('.banner-img-effect', 1, {
        delay: 0.3,
        height: 0,
        stagger: 0.2,
        ease: Expo.easeInOut
    });

    gsap.fromTo(".hero-builder:first-child", {
        y: 0
    }, {
        scrollTrigger: {
            trigger: ".hero-builder:first-child",
            start: `top 10%`,
            scrub: true
        },
        y: -200
    });
    gsap.fromTo(".hero-builder:nth-child(2)", {
        y: 0
    }, {
        scrollTrigger: {
            trigger: ".hero-builder:nth-child(2)",
            start: `top 20%`,
            scrub: true
        },
        y: -300
    });
    gsap.fromTo(".hero-builder:nth-child(3)", {
        y: 0
    }, {
        scrollTrigger: {
            trigger: ".hero-builder:nth-child(3)",
            start: `top 20%`,
            scrub: true
        },
        y: -300
    });
    gsap.fromTo(".post-image", {
        scale: 0.7,
    }, {
        scrollTrigger: {
            trigger: ".about",
            scrub: true,
            start: "top 90%",
            end: "bottom 90%"
        },
        scale: 1,
        duration: 1
    })
    gsap.fromTo(".about .slide-up span", {
        y: '100%',
    }, {
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
        },
        stagger: 0.2,
        y: 0,
        duration: 0.4
    });
    gsap.fromTo(".othernews .slide-up span", {
        y: '100%',
        opacity: 0
    }, {
        scrollTrigger: {
            trigger: ".othernews",
            start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.4
    });
    gsap.fromTo(".card1", {
        y: '100%',
        opacity: 0
    }, {
        scrollTrigger: {
            trigger: ".othernews",
            start: "top 90%",
            end: "bottom 90%"
        },
        y: 0,
        opacity: 1,
        duration: 0.6
    });
    gsap.fromTo(".customers .slide-up span", {
        y: '100%',
        opacity: 0
    }, {
        scrollTrigger: {
            trigger: ".customers",
            start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.4
    });
    gsap.fromTo(".experts .slide-up span", {
        y: '100%',
        opacity: 0
    }, {
        scrollTrigger: {
            trigger: ".experts",
            start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.4
    });
    gsap.fromTo(".experts-item", {
        opacity: 0,
        y: '100%',
    }, {
        scrollTrigger: {
            trigger: ".experts",
            start: "top 90%",
            end: "bottom 90%"
        },
        opacity: 1,
        stagger: 0.2,
        y: 0,
        duration: 0.4
    });
    gsap.fromTo(".callback", {
        scale: 0.7,
    }, {
        scrollTrigger: {
            trigger: ".callback",
            scrub: true,
            start: "top 90%",
            end: "bottom 90%"
        },
        scale: 1,
        duration: 1
    })
}





function numCounter(parentBlock, targetBlock) {
    let self = this;
    var counted = 0;

    function startCount() {
        let oTop = $(parentBlock).length ? $(parentBlock).offset().top - window.innerHeight : false;

        if (counted == 0 && $(window).scrollTop() > oTop) {
            $(targetBlock).each(function() {
                var $this = $(this),
                    countTo = Number($this.attr('data-count').replace(/ /g, ''));
                $({
                    countNum: Number($this.text().replace(/ /g, ''))
                }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function(num) {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            });
            counted = 1;
        }
    }

    startCount()
    $(window).scroll(function() {
        startCount()
    });
}