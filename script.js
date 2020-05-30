function rpsGame(YourChoice){
    console.log(YourChoice);
    var HumanChoice, BotChoice
    HumanChoice= YourChoice.id
    BotChoice = numbertochoice(randomtoRpsinteger());
    console.log('Computer choice:', BotChoice)
    result = decidewinner(HumanChoice,BotChoice) 
    console.log("[Humanscore,Computerscore]")
    console.log(result)
    //message = finalmessage(result) //{message:'You Won!', color: Green}
    //rpsFrontend(YourChoice.id,BotChoice,message);

   

}

function randomtoRpsinteger(){
    return Math.floor(Math.random()*3);
}
function numbertochoice(number){
    return ['rock','paper','scissors'][number]
}
function decidewinner(YourChoice,BotChoice){
    var Rpsdatatbase ={
    'rock': {'scissors': 1, 'rock':0.5, 'paper':0 },
    'paper': {'rock': 1, 'paper':0.5, 'scissors': 1 },
    'scissors': {'paper':1,'scissors':0.5,'rock': 0}
    }
    var YourScore = Rpsdatatbase[YourChoice][BotChoice]
    var BotScore = Rpsdatatbase[BotChoice][YourChoice]

    return [YourScore,BotScore]

}