let buttons = document.querySelectorAll(".button")
let step = "x"

let victory = "False"

let Button1 = document.getElementById("1")
let Button2 = document.getElementById("2")
let Button3 = document.getElementById("3")
let Button4 = document.getElementById("4")
let Button5 = document.getElementById("5")
let Button6 = document.getElementById("6")
let Button7 = document.getElementById("7")
let Button8 = document.getElementById("8")
let Button9 = document.getElementById("9")

for(let count = 0; count < buttons.length; count++){
    let button = buttons[count]
    
    button.addEventListener(
        type = "click",
        listener = function(){
            if(step == "x"){
                button.textContent = "x"
                button.value = "x"
                step = "0"
            } else if(step == "0"){
                button.textContent = "0"
                button.value = "0"
                step = "x"
            }
            if(victory == "False"){
                console.log(' X')
                if(document.getElementById("1").value == "x" && document.getElementById("2").value == "x" && document.getElementById("3").value == "x"){
                    console.log('VICTORY X')
                    document.getElementById("1").style.backgroundColor = "red" 
                    document.getElementById("2").style.backgroundColor = "red"
                    document.getElementById("3").style.backgroundColor = "red"
                    victory = "True"

                }
                if(document.getElementById("4").value == "x" && document.getElementById("5").value == "x" && document.getElementById("6").value == "x"){
                    console.log('VICTORY X')
                    document.getElementById("4").style.backgroundColor = "red" 
                    document.getElementById("5").style.backgroundColor = "red"
                    document.getElementById("6").style.backgroundColor = "red"
                    victory = "True"

                }
                if(document.getElementById("7").value == "x" && document.getElementById("8").value == "x" && document.getElementById("9").value == "x"){
                    console.log('VICTORY X')
                    document.getElementById("7").style.backgroundColor = "red" 
                    document.getElementById("8").style.backgroundColor = "red"
                    document.getElementById("9").style.backgroundColor = "red"
                    victory = "True"

                }

                if(document.getElementById("1").value == "x" && document.getElementById("4").value == "x" && document.getElementById("7").value == "x"){
                    console.log('VICTORY X')
                    document.getElementById("1").style.backgroundColor = "red" 
                    document.getElementById("4").style.backgroundColor = "red"
                    document.getElementById("7").style.backgroundColor = "red"
                    victory = "True"

                }
                if(document.getElementById("2").value == "x" && document.getElementById("5").value == "x" && document.getElementById("8").value == "x"){
                    console.log('VICTORY X')
                    document.getElementById("2").style.backgroundColor = "red" 
                    document.getElementById("5").style.backgroundColor = "red"
                    document.getElementById("8").style.backgroundColor = "red"
                    victory = "True"

                }
                if(document.getElementById("9").value == "x" && document.getElementById("6").value == "x" && document.getElementById("3").value == "x"){
                    console.log('VICTORY X')
                    document.getElementById("9").style.backgroundColor = "red" 
                    document.getElementById("6").style.backgroundColor = "red"
                    document.getElementById("3").style.backgroundColor = "red"
                    victory = "True"

                }
                if(document.getElementById("1").value == "0" && document.getElementById("2").value == "0" && document.getElementById("3").value == "0"){
                    console.log('VICTORY 0')
                    document.getElementById("1").style.backgroundColor = "red" 
                    document.getElementById("2").style.backgroundColor = "red"
                    document.getElementById("3").style.backgroundColor = "red"
                    victory = "True"
                }
                if(document.getElementById("4").value == "0" && document.getElementById("5").value == "0" && document.getElementById("6").value == "0"){
                    console.log('VICTORY 0')
                    document.getElementById("4").style.backgroundColor = "red" 
                    document.getElementById("5").style.backgroundColor = "red"
                    document.getElementById("6").style.backgroundColor = "red"
                    victory = "True"
                }
                if(document.getElementById("7").value == "0" && document.getElementById("8").value == "0" && document.getElementById("9").value == "0"){
                    console.log('VICTORY 0')
                    document.getElementById("7").style.backgroundColor = "red" 
                    document.getElementById("8").style.backgroundColor = "red"
                    document.getElementById("9").style.backgroundColor = "red"
                    victory = "True"
                }
                if(document.getElementById("1").value == "0" && document.getElementById("4").value == "0" && document.getElementById("7").value == "0"){
                    console.log('VICTORY 0')
                    document.getElementById("1").style.backgroundColor = "red" 
                    document.getElementById("4").style.backgroundColor = "red"
                    document.getElementById("7").style.backgroundColor = "red"
                    victory = "True"
                }
                if(document.getElementById("2").value == "0" && document.getElementById("5").value == "0" && document.getElementById("8").value == "0"){
                    console.log('VICTORY 0')
                    document.getElementById("2").style.backgroundColor = "red" 
                    document.getElementById("5").style.backgroundColor = "red"
                    document.getElementById("8").style.backgroundColor = "red"
                    victory = "True"
                }
                if(document.getElementById("9").value == "0" && document.getElementById("6").value == "0" && document.getElementById("3").value == "0"){
                    console.log('VICTORY 0')
                    document.getElementById("9").style.backgroundColor = "red" 
                    document.getElementById("6").style.backgroundColor = "red"
                    document.getElementById("3").style.backgroundColor = "red"
                    victory = "True"
                    
    
    
                }


            }
            if(victory == "True"){
                for(let count = 0;count < buttons.length;count++){
                    buttons[count].disabled = true
                }
                
            }
                
            

            
        }
    )
}