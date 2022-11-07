function startGame(){
    //start game
    let messagesElement = document.getElementById('messages')
    messagesElement!.innerText  = 'Welcome to MultiMath. Starting the game.'
}

document.getElementById('startGame')!.addEventListener('click',startGame);