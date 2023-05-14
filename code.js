window.onload = advanceStory;
num = 1;
var eventNum = 0;
var storyText = [["You are walking with your troop when suddenly you realize you have forgotten your","hiking stick. You run back to retrive it, but when you return your troop is gone. Do","you take the time to explore or do you catch up with your troop?"],
                 ["You decide to run after your troop. Exploring would be a waste of effort that could", "go towards serving Big Brother. As you continue down the path you see a cave with","light coming out of it. A enemy of the state might be hiding in there. Do you check?"],
                 ["You decide to check. No enemy of the state will get past you. As you enter the cave ", "you see a hungry looking man with an unkempt beard. You have a bag of nuts in your."," pocket. Do you offer the man your food or report him to the Thought Police?"],
                 ["You decide to report him to the thought police. He is obviously guilty. After tying","him up you exit the cave and see your troop in the distance. Filled with love for Big","Brother, you return to the troop and go on with your day."]



]
var buttonText = [["explore","catch up with troop"],["don't check","check"],["feed the man","report the man"]]
var backgrounds = ["url('forest.jpg')","url('cave.jpg')","url('caveman.jpg')","url('scouts.jpg')"]

function displayText(text1="",text2="",text3=""){
    
    if(text1 != "")
    {
        document.getElementById("line" + num).style.animation = 'none';
        document.getElementById("line" + num).offsetHeight; /* trigger reflow */
        document.getElementById("line" + num).style.animation = null; 
        document.getElementById("text" + num).innerHTML = text1;
        document.getElementById("line" + num).style.animation="animate 2.5s linear forwards"
        num = num + 1;
        setTimeout(() => {displayText(text2,text3);},2500)
    }
    else
    {
        num = 1;
        advanceButtons();
    }
    
}




function advanceButtons()
{
    var button = document.createElement("button");
    button.innerHTML = buttonText[eventNum][0];
    button.style.width="10%";
    button.style.height="5%";
    button.style.top="50%";
    button.style.margin="2.5%";
    button.id="button1";
    document.getElementById("background").appendChild(button);
    button.addEventListener ("click", wrongAnswer);

    var button2 = document.createElement("button");
    button2.innerHTML =  buttonText[eventNum][1];
    button2.style.width="10%";
    button2.style.height="5%";
    button2.style.margin="2.5%";
    button2.style.top="50%";
    button2.id="button2";
    document.getElementById("background").appendChild(button2);
    button2.addEventListener ("click", advanceStory);
    eventNum = eventNum + 1;

}

function advanceStory()
{
    const list = document.getElementById("background");
    while(list.hasChildNodes()) {
      list.removeChild(list.children[0]);
    }

    document.getElementById("text1").innerHTML = "";
    document.getElementById("text2").innerHTML = "";
    document.getElementById("text3").innerHTML = "";
    document.getElementById("background").style.backgroundImage=backgrounds[eventNum];

    displayText(storyText[eventNum][0],storyText[eventNum][1],storyText[eventNum][2]);
}

function wrongAnswer()
{
    document.getElementById("background").removeChild(document.getElementById("background").children[0]);
}