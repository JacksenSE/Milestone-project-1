var checkIt = confirm("You wake up in the middle of the night, you heard a loud bang downstairs. Check what it was? Or Hide in your room?");

if(checkIt == true) {
    alert("You walk downstairs to find someone in your house.");

    var downstairsFind = confirm("Do you sneak to the kitchen to grab a weapon or leave through the front door?");

        if (downstairsFind == true){
            window.prompt("You sneak to the kitchen and slowly open a cabinet. In it you find a Iron Skillet, A Kitchen Knife, and a Banana. Which do you choose? 1 (skillet) 2 (Knife) 3 (Banana)");
        
            if(downstairsFind == 1){
                var chooseSkillet = confirm("You chose the skillet, the robber finds you Do you attack him or defend yourself?");
                if (chooseSkillet == true){
                    alert("You chose to attack him he had a gun. You lose, Try again.");
                }
                else{
                    alert("He shoots you, the bullet gets deflected off the pan you win!");
                }
            }
            else if(downstairsFind === 2){
                
                var chooseKnife = confirm("You chose the Knife, the robber finds you Do you attack him or defend yourself?");
                
                if(chooseKnife === true){
                    alert("You chose to attack him he punches if you in the face knocking you out cold. You lose, Try again.");
                }
                else{
                    alert("You chose to defend yourself he had a gun. You lose, Try again");
                }
            }
            else (downstairsFind === 3);{
            var chooseBanana = confirm("You chose the banana the robber is deathly allergic to banana's he explodes. You win! ");
           
            }
        }
}
else {
    alert("You hide in your room and hear footsteps approaching");
    
    var hideRoom = confirm("The footsteps go sient outside of your door. Do you hide in bed or go to the door?");

    if (hideRoom == true){
        alert("You hide in your bed the intruder found you, you lose try again.");
    }
    else{
        alert("You wait at the door ready to fight the robber you lose, try again.");
    }

}