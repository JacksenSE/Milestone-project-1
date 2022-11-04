function start(){
    let firstAnswer  = window.prompt('"You wake up in the middle of the night, you heard a loud bang downstairs. check? Or hide?')
    if(firstAnswer === 'check'){
       cCheck()
    } else if(firstAnswer === 'hide') {
        cHide()
    }
}

function cCheck(){
    let secondAnswer = window.prompt(`You decided to check, you walk down the hallways and see someone in your house. Do you 'sneak' to the kitchen to grab a weapon or 'leave' through the front door?`)
    if(secondAnswer === 'sneak'){
        sneak()
     } else if(secondAnswer === 'leave'){
         leave()
     }
    if(secondAnswer === 'back'){
        start()
    }
}

function cHide(){
    let secondAnswer = window.prompt(`You hide in your room and hear footsteps approaching. The footsteps go sient outside of your door. Do you fight? Or hide`)
    if(secondAnswer === 'fight'){
        fight()
    } else if(secondAnswer === "hide"){   
        hide()
    }
    if(secondAnswer === 'back'){
        start()
    }
}

function sneak(){
    let thirdAnswer = window.prompt("You sneak to the kitchen and you find a skillet, and a banana. Which do you choose? skillet? Or banana?")
}if(thirdAnswer ==="skillet"){
    window.alert("You chose to attack him he had a gun. You lose, Try again.")
}else if(thirdAnswer ==="banana"){
    window.alert('You chose the banana the robber is deathly allergic to bananas he explodes. You win!')
}
if(thirdAnswer ==='back'){
    cCheck()
}
function leave(){
let thirdAnswer = window.prompt('You sprint through the front door. The robber is chasing after you. Keep "running"? Or "face" them?')
if(thirdAnswer === 'running'){
    window.alert('The robber is faster than you he catches you. You lose.')
}else if(thirdAnswer === "face"){
    window.alert('You face the robber and beat him up. You win!')
}

}
start()
