var textElement = document.getElementById('text')
var ChoiceButtonsElement = document.getElementById('Choice-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  var textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (ChoiceButtonsElement.firstChild) {
    ChoiceButtonsElement.removeChild(ChoiceButtonsElement.firstChild)
  }

  textNode.Choices.forEach(Choice => {
    if (showChoice(Choice)) {
      var button = document.createElement('button') 
      button.innerText = Choice.text 
      button.classList.add('btn')
      button.addEventListener('click', () => selectChoice(Choice))
      ChoiceButtonsElement.appendChild(button)
    }
  })
}
function showChoice(Choice) {
  return Choice.requiredState == null || (state)
}
function selectChoice(Choice) {
  var nextTextNodeId = Choice.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state)
  showTextNode(nextTextNodeId)
}
var textNodes = [
  {
    id: 1,
    text: 'You wake up in the middle of the night, you heard a loud bang in your house. Check it out? or Hide.',
    Choices: [
      {
        text: 'Check it out',
        nextText: 2
      },
      {
        text: 'Hide',
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text: 'You decided to check, you walk down the hallways and see someone in your house. Do you sneak to the kitchen to grab a weapon or leave through the front door?',
    Choices: [
      {
        text: 'Leave through front door.',
        nextText: 4
      },
      {
        text: 'Sneak to the kitchen',
        nextText: 5
      }
    ]
  },
  {
    id: 3,
    text: 'You decided to hide. Time passes by, footsteps approach your door. Fight back or hide under your bed?',
    Choices: [
      {
        text: 'Hide.',
        nextText: 6
      },
      {
        text: 'Fight back',
        nextText: 7
      }
    ]
  },
  {
    id: 4,
    text: 'You sprint out of the front door the robber chases behind you. He is faster than you, he catches up to you and idk shoots you lol. ',
    Choices: [
      {
        text: 'Try again',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'You sneak into the kitchen on the counter you see a Kitchen knife, a Cast iron skillet, and a Banana. You must choose a weapon to defend yourself',
    Choices: [
      {
        text: 'Cast iron skillet',
        nextText: 8
      },
      {
        text: 'Kitchen knife',
        nextText: 8
      },
      {
        text: 'Banana',
        nextText: 9
      }
    ]
  },
  {
    id: 6,
    text: 'You hide under the bed from the robber. He opens the door and walks past you. Luckily he does not check under the bed. He leaves ',
    Choices: [
      {
        text: 'You cant stay here forever time to get up.',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'You finally get up now time to come up with a plan. What will you choose?.',
    Choices: [
      {
        text: 'Try to run?',
        nextText: 4
      },
      {
        text: 'Attack them?',
        nextText: 8
      },
      {
        text: 'Call the cops?',
        nextText: 10
      },
      {
        text: 'Offer to play fortnite with him', 
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'The robbers close combat skills are better than yours. You lose.',
    Choices: [
      {
        text: 'Try again',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'The robber is deathly alergic to bananas he explodes you win!',
    Choices: [
      {
        text: 'Play again?',
        nextText: -9
      }
    ]
  },
  {
    id: 10,
    text: 'You charge your phone. Your phone rings extreamly loud. The robber finds you. You lose.',
    Choices: [
      {
        text: 'Try again',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'He accepts your offer you guys have a fun night.',
    Choices: [
      {
        text: 'You win! Play again?',
        nextText: -9
      }
    ]
  }
]

startGame()