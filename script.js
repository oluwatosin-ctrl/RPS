function rpsGame(YourChoice){
    console.log(YourChoice);
    var HumanChoice, BotChoice
    HumanChoice= YourChoice.id
    
    BotChoice = numbertochoice(randomtoRpsinteger());
    console.log('Computer choice:', BotChoice)
    
    
    result = decidewinner(HumanChoice,BotChoice) 
    console.log("[Humanscore,Computerscore]")
    console.log(result)
    
    
    message = finalmessage(result)
    console.log(message)
    //{message:'You Won!', color: Green}
    rpsFrontend(YourChoice.id,BotChoice,message);

   

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
    'paper': {'rock': 1, 'paper':0.5, 'scissors': 0 },
    'scissors': {'paper':1,'scissors':0.5,'rock': 0}
    }
    var YourScore = Rpsdatatbase[YourChoice][BotChoice]
    var BotScore = Rpsdatatbase[BotChoice][YourChoice]

    return [YourScore,BotScore]

}

function finalmessage([YourScore,BotScore]){
    if (YourScore === 0){
        return {'message':'You lost','color':'red'};
    }else if (YourScore === 0.5){
        return {'message':'You tied', 'color': 'yellow'};
    }else{
        return{'message':'You WOn!', 'color':'green'};
    }

}

document.getElementById('rock').src

function rpsFrontend(HumanImageChoice,BotImageChoice,finalmessage){
    var ImageDatabase = {
    'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissors':document.getElementById('scissors').src
    }
    //Remove all the images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //Puts each element in its own div class
    var HumanDiv = document.createElement('div');
    var BotDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    HumanDiv.innerHTML = "<img src='" + ImageDatabase[HumanImageChoice] + "'heigth = 150 width = 150 style= 'box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML = "<h1 style = 'color:" + finalmessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalmessage['message'] +"</h1>" 
    BotDiv.innerHTML = "<img src='" + ImageDatabase[BotImageChoice] + "'heigth = 150 width = 150 style= 'box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(HumanDiv)
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)
    document.getElementById('flex-box-rps-div').appendChild(BotDiv)
    



}

function refresh(){
    location.reload();
}
