function userlogin(name,pass) {
    var el = document.getElementById("userlogin")
    el.innerHTML=`<h1>${name}<input type="text" /></h1><h1>${pass}<input type="text" /></h1>`
}

userlogin("dalong","app")