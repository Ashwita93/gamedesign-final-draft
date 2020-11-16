var counter = 0;
var res;

//speech recognition
const SpeechRecognition = webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-US";
// recognition.start();

//The Martian
var myPicture = [
  {
    imgurl: "assets/fruits/noun_potato_3068628.png",
    answer: "potato"
  },
  {
    imgurl: "assets/fruits/noun_Poop_1371710.png",
    answer: "poop"
  },
  {
    imgurl: "assets/fruits/noun_Mars_2942494.png",
    answer: "Mars"
  },
  {
    imgurl: "assets/fruits/noun_Astronaut_3096981.png",
    answer: "Astronaut"
  }
];

//Titanic
var myPicture2 = [
  {
    imgurl: "assets/fruits/noun_Diamond Necklace_187839.png",
    answer: "necklace"
  },
  {
    imgurl: "assets/fruits/noun_old woman_1527986.png",
    answer: "old woman"
  },
  {
    imgurl: "assets/fruits/noun_Ship_2552147.png",
    answer: "Ship"
  },
  {
    imgurl: "assets/fruits/noun_Iceberg_374441.png",
    answer: "Iceberg"
  }
]

//Titanic
var myPicture3 = [
  {
    imgurl: "assets/fruits/noun_Sea_755542.png",
    answer: "Sea"
  },
  {
    imgurl: "assets/fruits/noun_Sea_3024988 (1).png",
    answer: "sharks"
  }
]

//Kill Bill
var myPicture4 = [
  {
    imgurl: "assets/fruits/noun_Sword_2526504.png",
    answer: "Sword"
  },
  {
    imgurl: "assets/fruits/noun_bill_821695.png",
    answer: "bill"
  }
]

//Silence of the lambs
var myPicture5 = [
  {
    imgurl: "assets/fruits/noun_Silence_9784.png",
    answer: "silence"
  },
  {
    imgurl: "assets/fruits/noun_Butterfly_2909139.png",
    answer: "bug"
  },
  {
    imgurl: "assets/fruits/noun_killing_2848276.png",
    answer: "kill"
  },
  {
    imgurl: "assets/fruits/noun_Lamb_1046393.png",
    answer: "lamb"
  }  
]

var answerList = [ "The Martian", "The Titanic", "Jaws", "Kill Bill", "Silence of the lambs" ]


function changeImage1() {
  var timer = 0;
  for (let i = 0; i < myPicture.length; i++) {
    setTimeout(() => document.images[0].src = myPicture[i].imgurl, timer);
    timer = timer + 1000;
  }
}


function changeImage2() {
  var timer = 0;
  for (let i = 0; i < myPicture2.length; i++) {
    setTimeout(() => document.images[0].src = myPicture2[i].imgurl, timer);
    timer = timer + 1000;
  }
}
// changeImage2();

function changeImage3() {
  var timer = 0;
  for (let i = 0; i < myPicture3.length; i++) {
    setTimeout(() => document.images[0].src = myPicture3[i].imgurl, timer);
    timer = timer + 1000;
  }
}
// changeImage3();

function changeImage4() {
  var timer = 0;
  for (let i = 0; i < myPicture4.length; i++) {
    setTimeout(() => document.images[0].src = myPicture4[i].imgurl, timer);
    timer = timer + 1000;
  }
}
// changeImage4();

function changeImage5() {
  var timer = 0;
  for (let i = 0; i < myPicture5.length; i++) {
    setTimeout(() => document.images[0].src = myPicture5[i].imgurl, timer);
    timer = timer + 1000;
  }
}
// changeImage5();

var allQ = [ myPicture, myPicture2, myPicture3, myPicture4, myPicture5]

//yay the code works...code to display the right image on clicking next
// function nextQuestion() {
//   counter = (counter + 1) % (allQ.length);
//   document.images[0].src = (allQ[counter].imgurl);
//   console.log("the next question has started :" + allQ[counter]);
// }
function correct(){
  alert("Good Job! Correct Answer !!");
}

function wrong(){
  alert("Oh No, Its the wrong answer !! Try again");
}



function getSpeech1(){
  recognition.onresult = (event) => {
    console.log(event);
    const speechResult = event.results[0][0].transcript;
    console.log(speechResult);
    // var answer = document.getElementsByTagName("div")[0].getAttribute("id"); 

    document.querySelector("#speech-div").textContent = speechResult;
    res = speechResult.toLowerCase();
    if(res === "the martian"){
      console.log("correct answer");
      correct();
      // changeImage2();
    }else{
      console.log("wrong answer");
      wrong();
    }
  };

  //when the session is over
  recognition.onend = () => {
    console.log("session 1 is over");
    recognition.stop();
    //getSpeech(); // to make the detection of speech going on and on
  };
}

function getSpeech2(){
  recognition.onresult = (event) => {
    console.log(event);
    const speechResult = event.results[0][0].transcript;
    console.log(speechResult);
    // var answer = document.getElementsByTagName("div")[0].getAttribute("id"); 
    document.querySelector("#speech-div").textContent = speechResult;
    res = speechResult.toLowerCase();
    if(res === "titanic"){
      console.log("correct answer");
      correct();
    }else{
      console.log("wrong answer");
      wrong();
    }
  };

  //when the session is over
  recognition.onend = () => {
    console.log("session 2 is over");
    recognition.stop();
    //getSpeech(); // to make the detection of speech going on and on
  };
}

function getSpeech3(){
  recognition.onresult = (event) => {
    console.log(event);
    const speechResult = event.results[0][0].transcript;
    console.log(speechResult);
    // var answer = document.getElementsByTagName("div")[0].getAttribute("id"); 
    document.querySelector("#speech-div").textContent = speechResult;
    res = speechResult.toLowerCase();
    if(res === "jaws"){
      console.log("correct answer");
      correct();
    }else{
      console.log("wrong answer");
      wrong();
    }
  };

  //when the session is over
  recognition.onend = () => {
    console.log("session 3 is over");
    recognition.stop();
    //getSpeech(); // to make the detection of speech going on and on
  };
}

function getSpeech4(){
  recognition.onresult = (event) => {
    console.log(event);
    const speechResult = event.results[0][0].transcript;
    console.log(speechResult);
    // var answer = document.getElementsByTagName("div")[0].getAttribute("id"); 
    document.querySelector("#speech-div").textContent = speechResult;
    res = speechResult.toLowerCase();
    if(res === "kill bill"){
      console.log("correct answer");
      correct();
    }else{
      console.log("wrong answer");
      wrong();
    }
  };

  //when the session is over
  recognition.onend = () => {
    console.log("session 4 is over");
    recognition.stop();
    //getSpeech(); // to make the detection of speech going on and on
  };
}

function getSpeech5(){
  recognition.onresult = (event) => {
    console.log(event);
    const speechResult = event.results[0][0].transcript;
    console.log(speechResult);
    // var answer = document.getElementsByTagName("div")[0].getAttribute("id"); 
    document.querySelector("#speech-div").textContent = speechResult;
    var res = speechResult.toLowerCase();
    if(res === "silence of the lambs"){
      console.log("correct answer");
      correct();
    }else{
      console.log("wrong answer");
      wrong();
    }
  };

  //when the session is over
  recognition.onend = () => {
    console.log("session 4 is over");
    recognition.stop();
    //getSpeech(); // to make the detection of speech going on and on
  };
}

document.querySelector("#buttonOne").onclick = ()=>{
  console.log("Question 1");
  recognition.start();
  changeImage1();
  getSpeech1();
};
document.querySelector("#buttonTwo").onclick = ()=>{
  console.log("Question 2");
  recognition.start();
  changeImage2();
  getSpeech2();
};
document.querySelector("#buttonThree").onclick = ()=>{
  console.log("Question 3");
  recognition.start();
  changeImage3();
  getSpeech3();
};
document.querySelector("#buttonFour").onclick = ()=>{
  console.log("Question 4");
  recognition.start();
  changeImage4();
  getSpeech4();
};
document.querySelector("#buttonFive").onclick = ()=>{
  console.log("Question 5");
  recognition.start();
  changeImage5();
  getSpeech5();
};

// document.querySelector("#button1").onclick = ()=>{
//   console.log("clicked");
//   recognition.start();
//   getSpeech1();
// };

