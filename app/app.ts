function startGame(){
    //start game
    let playerName:string|undefined= getInputValue("playername");
    logPlayer(playerName);
    postScore(100);
    postScore(-5);

    let messagesElement = document.getElementById('messages')
    messagesElement!.innerText  = 'Welcome to MultiMath. Starting the game.'
}

function logPlayer(name:string='MultiMath Player' ):void{
    console.log(`New game starting for plater: ${name}`);
}

function getInputValue(elementID:string):string | undefined{
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    return inputElement.value===''? undefined : inputElement.value;
}

function postScore(score:number, playerName:string='MultiMath Player'):void{
    let logger:(value:string)=>void;
    logger = score<0 ? logError:logMessage;

    const scoreElement:HTMLElement|null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click',startGame);

const logMessage = (message:string)=>console.log(message);
function logError(err:string):void{
    console.error(err);
}