gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();























const canvas = document.querySelector("canvas")
const context = canvas.getContext('2d')


let frame = {
    currentFrame: 0,
    maxFrame: 1150
}
let images = []
let imgLoaded = 0
function preloader() {
    for (i = 1; i <= frame.maxFrame; i++) {
        let url = `./frames/frame_${i.toString().padStart(4, "0")}.jpeg`
        let img = new Image()
        img.src = url
        img.onload = () => {
            imgLoaded++;
            images.push(img)
            if (imgLoaded === frame.maxFrame) {
                console.log("All images loaded")
                loadImage(frame.currentFrame)

                startAnimation()
            }
        }

    }
}
function loadImage(index) {
    if (index >= 0 && index < frame.maxFrame) {
        const img = images[index]
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;


        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;

        let scale = Math.max(scaleX, scaleY)

        let newHeight = img.height * scale
        let newWidth = img.width * scale

        let offsetX = (canvas.width - newWidth) / 2
        let offsetY = (canvas.height - newHeight) / 2

        context.clearRect(0, 0, canvas.width, canvas.height)
        context.imageSmoothingEnabled = true
        context.imageSmoothingQuality = "high"
        context.drawImage(img, offsetX, offsetY, newWidth, newHeight)
        frame.currentFrame = index
    }
}

function startAnimation() {
    let tl = gsap.timeline({
        scrollTrigger: {
            scroller: "main",
            trigger: ".wraperr",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            marker: true
        },


    })
    tl.to(frame, {
        currentFrame: frame.maxFrame,
        onUpdate: function () {
            loadImage(Math.floor(frame.currentFrame))
        }
    })

}
preloader()


let first = document.querySelectorAll(".first")

first.forEach((hell) => {
    let lt = gsap.timeline({
        scrollTrigger: {
            scroller: "main",
            trigger: hell,
            start: "top 95%",
            end: "top top",
            scrub: 1,
        }
    })

    lt.from(hell, {
        rotateX: -15,
        scale: 0.9,
        y: 50,
        duration: 0.5
    })
    lt.to(hell, {
        rotateX: 0,
        y: 0,
        duration: 2
    })
    lt.to(hell, {
        rotateX: 10,
        scale: 0.9,
        y: -140,
        duration: 0.5
    })
})


let stoness = gsap.timeline({
    repeat: -1,
    yoyo: true
})
stoness.to(".stone-1", {
    top: `-24%`,
    duration: 2,
    ease: "none"
})
stoness.to(".stone-1", {
    top: `-22%`,
    left: `-22%`,
    duration: 2,
    ease: "none"

})
stoness.to(".stone-1", {
    top: `-20%`,
    right: `-17%`,
    duration: 2,
    ease: "none"

})



let stones = gsap.timeline({
    repeat: -1,
    yoyo: true
})
stones.to(".stone-2", {
    bottom: `24%`,
    duration: 2,
    ease: "none"
})
stones.to(".stone-2", {
    bottom: `22%`,
    right: `-15%`,
    duration: 2,
    ease: "none"

})
stones.to(".stone-2", {
    bottom: `20%`,
    right: `-17%`,
    duration: 2,
    ease: "none"

})




window.addEventListener("mousemove", (dets) => {
    gsap.to(".stone-1", {
        x: -dets.clientX / 16 - 40,
        y: -dets.clientY / 16,
        delay: 0.2
    })
    gsap.to(".stone-2", {
        x: dets.clientX / 16 - 40,
        y: dets.clientY / 16,
        delay: 0.1
    })

})





let h1s = document.querySelectorAll(".h1-s")

h1s.forEach((h1, index) => {
    let clutter = ""
    let data = h1.textContent
    data.split("").forEach((yy) => {
        if (yy == " ") {
            clutter += `<span class="brocode-${index} inline-block ">&nbsp;</span>`
        }
        else {
            clutter += `<span class="brocode-${index} inline-block ">${yy}</span>`
        }
    })
    console.log(clutter)
    h1.innerHTML = clutter

})

let txt = gsap.timeline({
    scrollTrigger: {
        trigger: ".flip",
        scroller: "main",
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true
    }
})
txt.from(".brocode-0",{
    y:100,
    stagger:0.05
})
txt.to(".brocode-0",{
    y:-100,
    stagger:0.05
},"a")
txt.from(".brocode-1",{
    y:100,
    stagger:0.05
},"a")
txt.to(".brocode-1",{
    y:-100,
    stagger:0.05
},"b")
txt.from(".brocode-2",{
    y:100,
    stagger:0.05
},"b")



gsap.to(".hecker",{
    x:`-130%`,
    scrollTrigger:{
        trigger:".heck",
        scroller:"main",
        start:"top top",
        end:"+=4000",
        scrub:1,
        pin:true
    }
})