let char = "ABCDEFGHIJKLMNOPQRSTUVQXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

let input = document.querySelector('input')
let genbtn = document.querySelector('button')
let copy = document.querySelector('.copy')
let spanx = document.querySelector('.showpassword span')

let passwordlength = 12;



const passwordgenerator = () => {
    let password = ""

    const rendomnumber = () => {
        const randomIndex = Math.floor(Math.random() * char.length);
        password += char[randomIndex];

    }
    for (i = 0; i <= passwordlength; i++) {
      
        rendomnumber()
    }

    input.value = password

}


genbtn.addEventListener('click', () => {
    passwordgenerator()
})

passwordgenerator()

copy.addEventListener('click', () => {
    input.select()
    document.execCommand('copy')
     
    spanx.style.transform = "scale(2)"
    copiedanimate()

})





const copiedanimate = () => {
 
    spanx.style.transform = "scale(2) translateX(-100%)"
    spanx.style.display = "flex"
    

    setTimeout(() => {
        spanx.style.transform = "scale(1)"
          
    }, 300)

    setTimeout(() => {
        spanx.style.display = "none"
          
    }, 1000)
}









