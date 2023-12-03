

//{} vitra ko section chai euta cursor lai kasari customize garauney vanna ko lagi
//{

cursor = document.querySelector(".cursor");
cursorBlur = document.querySelector(".cursorBlur");

document.addEventListener("mousemove", (mouseEvent) => {
    cursor.style.left = mouseEvent.x + 5 + "px";
    cursor.style.top = mouseEvent.y + 5 + "px";
    cursor.style.transition = "0.1s"

    //yeta mouse event chai k kaam vairaxa vanney ho... mouse ko kaam
    //co-ordinates haru calculate vairaka xan
    // console.log(mouseEvent.x);
})


//}

//cursor ko sang sangai euta blur wala part is also moving, tesko lagi:

document.addEventListener("mousemove", (museevnt) => {
    cursorBlur.style.top = museevnt.y - 200 + "px"
    cursorBlur.style.left = museevnt.x - 200 + "px"
    // -200 chai kina garya vanda normally tyo xyeu ko tuppo chai tyo sanga move vairako xa... so bichha ma banauna,cursor ko height(400px) ko adhi(200) pixel rakhera center ma banako


    cursorBlur.style.transition = "0.5s"

})

logo = document.querySelector("img");
logo.addEventListener("mouseover", () => {
    cursor.style.backgroundColor = "red";
    console.log("k??????");
    cursor.style.transition = "0.5s background-color ease"

})

logo.addEventListener("mouseout", () => {
    cursor.style.backgroundColor = "#97B917";

    console.log("k??????")
})



page3P = document.querySelector("#page3-p")


document.addEventListener("mousemove", (moseEvent) => {
    page3P.style.left = 0 + (moseEvent.x / 90) + "px";
    page3P.style.top = 0 + (moseEvent.y / 90) + "px";
    page3P.style.transition = "0.1s"
    console.log("bruh?")
})


h4all = document.querySelectorAll(".nav>h4")
h4all.forEach(elem => {

    elem.addEventListener("mouseenter", () => {
        cursor.style.scale = 3;
        cursor.style.backgroundColor = "transparent"
        cursor.style.border = "1px solid white"
    });

});


h4all = document.querySelectorAll(".nav>h4")
h4all.forEach(elem => {

    elem.addEventListener("mouseleave", () => {
        cursor.style.scale = 1
        cursor.style.backgroundColor = " #95C11E"

        cursor.style.border = "none"

    });

});



gsap.to(".nav", {
    scrollTrigger: {
        scrub: 1,

        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
    },

    backgroundColor: "black",
    height: "100px",



})

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top -2%"
        , end: "top -80%"
        , scrub: 2
    }
})

gsap.from(".page3 #colon1", {
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 100%",
        scrub: 2
        ,

    },
    x: -40,
    y: -30,
    duration: 0.5,
})

gsap.from(".page3 #colon2", {
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        start: "top 100%",
        scrub: 2
        ,

    },
    x: 40,
    y: 30,
    duration: 0.5,
})


gsap.to(".page4 h1",
    {
        scrollTrigger: {
            trigger: ".page4 h1",
            scroller: "body",
            start: "top 180%",

            scrub: 1
        }
        ,
        y: -150,
    })