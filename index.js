

let homeCount = 0
let sumHome = document.getElementById("home-scr")

function homePoints1(){
    homeCount += 1
    sumHome.textContent = homeCount
}

function homePoints2(){
    homeCount += 2
    sumHome.textContent = homeCount
}

function homePoints3(){
    homeCount += 3
    sumHome.textContent = homeCount
}

let guestCount = 0
let sumGuest = document.getElementById("guest-scr")

function guestPoints1(){
    guestCount += 1
    sumGuest.textContent = guestCount
}

function guestPoints2(){
    guestCount += 2
    sumGuest.textContent = guestCount
}

function guestPoints3(){
    guestCount += 3
    sumGuest.textContent = guestCount
}

let resetHome = document.getElementById("home-scr")
let resetGuest = document.getElementById("guest-scr")


function reset(){
    homeCount -= homeCount
    guestCount -= guestCount
    resetHome.textContent = 0
    resetGuest.textContent = 0
}