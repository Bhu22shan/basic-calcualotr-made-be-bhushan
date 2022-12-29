button = document.querySelectorAll(".btn")
let screen = document.querySelector(".screen")

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function (e) {
         
        button[i].classList.add("click")
        setTimeout(() => {
            button[i].classList.remove("click")  
        }, 100);
        if (this.innerHTML == "=") {
            let ans = eval(screen.placeholder)
            screen.placeholder = ans
        }
        else {
            if (this.innerHTML == "÷") {
                screen.placeholder += "/"
            } else if (this.innerHTML == "×") {
                screen.placeholder += "*"
            }
            else {
                screen.placeholder += this.innerHTML
            }

        }


    })

} 