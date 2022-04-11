let myHeading = document.querySelector('h1')
myHeading.textContent = 'Hello world!'


let myHtml = document.querySelector('html')
myHtml.ondblclick = function () {
    alert('Ouch! stop poking me...')
}

let myImage = document.querySelector('img')
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if ( mySrc === 'images/icon_google.png') {
        myImage.setAttribute('src', 'images/icon_firefox.png')
    } else {
        myImage.setAttribute('src', 'images/icon_google.png')
    }
}

let myButton = document.querySelector('button')
let userName = "User"

function setUserName() {
    let myName = prompt('Tell me your name.')
    localStorage.setItem('name', myName)
    userName = myName

}

myButton.onclick = function() {
    setUserName()
}

if ( !localStorage.getItem('name') ) {
    setUserName()
} else {
    userName = localStorage.getItem('name')
}

myHeading.innerHTML = 'JS is cool, ' + userName


