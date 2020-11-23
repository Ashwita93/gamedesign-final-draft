var counter = 0;
var res;

// var inc=0;
//  function myFunction() {
//     inc=inc+1;
//     alert(inc);    
//  }

//  var cnt=0;
//     function CountFun(){
//      cnt=parseInt(cnt)+parseInt(1);
//      var divData=document.getElementById("showCount");
//     //  divData.innerHTML="Number of Downloads: ("+cnt +")";//this part has been edited
//       alert("the correct answer is : " + );
//     }
//speech recognition
const SpeechRecognition = webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-US";
// recognition.start();

//Findind Nemo
var myPicture = [
  {
    imgurl: "movies/Finding_Nemo/png/001-clown-fish.png",
    answer: "Nemo"
  },
  {
    imgurl: "movies/Finding_Nemo/png/003-blue-tang-fish.png",
    answer: "Dory"
  },
  {
    imgurl: "movies/Finding_Nemo/png/fishing-boat.png",
    answer: "fishing boat"
  },
  {
    imgurl: "movies/Finding_Nemo/png/005-aquarium.png",
    answer: "Aquarium"
  },
  {
    imgurl: "movies/Finding_Nemo/png/004-sydney-opera-house.png",
    answer: "sydney opera house"
  },
  {
    imgurl: "movies/Finding_Nemo/png/008-octopus.png",
    answer: "octopus"
  }
];

//Twilight
var myPicture2 = [
  {
    imgurl: "movies/Twilight/png/happiness.png",
    answer: "girl"
  },
  {
    imgurl: "movies/Twilight/png/man.png",
    answer: "boy"
  },
  {
    imgurl: "movies/Twilight/png/009-car-accident.png",
    answer: "accident"
  },
  {
    imgurl: "movies/Twilight/png/003-apple.png",
    answer: "apple"
  },
  {
    imgurl: "movies/Twilight/png/001-vampire.png",
    answer: "vampire"
  },
  {
    imgurl: "movies/Twilight/png/002-werewolf.png",
    answer: "werewolf"
  },
  {
    imgurl: "movies/Twilight/png/008-baseball-1.png",
    answer: "baseball"
  },
  {
    imgurl: "movies/Twilight/png/005-blood-test.png",
    answer: "blood"
  },
  {
    imgurl: "movies/Twilight/png/004-heart.png",
    answer: "love"
  }
]

//Harry Potter and the order of pheonix
var myPicture3 = [
  {
    imgurl: "movies/Harry_potter_Order_of_pheonix/png/boy.png",
    answer: "boy"
  },
  {
    imgurl: "movies/Harry_potter_Order_of_pheonix/png/006-glasses.png",
    answer: "scar"
  },
  {
    imgurl: "movies/Harry_potter_Order_of_pheonix/png/001-lightning.png",
    answer: "scar"
  },
  {
    imgurl: "movies/Harry_potter_Order_of_pheonix/png/002-broom.png",
    answer: "broom"
  },
  {
    imgurl: "movies/Harry_potter_Order_of_pheonix/png/003-magic-wand.png",
    answer: "magic wand"
  },
  {
    imgurl: "movies/Harry_potter_Order_of_pheonix/png/008-united.png",
    answer: "army"
  },
  {
    imgurl: "movies/Harry_potter_Order_of_pheonix/png/005-magic-ball.png",
    answer: "fortune"
  },
  {
    imgurl: "movies/Harry_potter_Order_of_pheonix/png/004-phoenix.png",
    answer: "phoenix"
  }
]

//Wall-E
var myPicture4 = [
  {
    imgurl: "movies/Wall_E/png/003-earth.png",
    answer: "Earth"
  },
  {
    imgurl: "movies/Wall_E/png/006-planet.png",
    answer: "dusty earth"
  },
  {
    imgurl: "movies/Wall_E/png/002-robot.png",
    answer: "wall-e"
  },
  {
    imgurl: "movies/Wall_E/png/001-robotics.png",
    answer: "eva"
  },
  {
    imgurl: "movies/Wall_E/png/Plant.png",
    answer: "plant"
  },
  {
    imgurl: "movies/Wall_E/png/004-spacecraft.png",
    answer: "plant"
  }
]

//interstellar
var myPicture5 = [
  {
    imgurl: "movies/Interstellar/png/001-corn.png",
    answer: "corn"
  },
  {
    imgurl: "movies/Interstellar/png/002-dust-storm.png",
    answer: "dust storm"
  },
  {
    imgurl: "movies/Interstellar/png/007-watch.png",
    answer: "watch"
  },
  {
    imgurl: "movies/Interstellar/png/003-space-ship.png",
    answer: "space ship"
  },
  {
    imgurl: "movies/Interstellar/png/008-satellite.png",
    answer: "space station"
  },
  {
    imgurl: "movies/Interstellar/png/006-wormhole.png",
    answer: "worm hole"
  },
  {
    imgurl: "movies/Interstellar/png/005-nebula.png",
    answer: "space"
  }

]

//Casino Royale
var myPicture6 = [
  {
    imgurl: "movies/Casino_Royale/png/001-card-game.png",
    answer: "cards"
  },
  {
    imgurl: "movies/Casino_Royale/png/002-poker.png",
    answer: "poker"
  },
  {
    imgurl: "movies/Casino_Royale/png/003-money.png",
    answer: "money"
  },
  {
    imgurl: "movies/Casino_Royale/png/004-suit.png",
    answer: "suit"
  },
  {
    imgurl: "movies/Casino_Royale/png/005-revolver.png",
    answer: "gun"
  },
  {
    imgurl: "movies/Casino_Royale/png/006-martini.png",
    answer: "martini"
  }
]

//Doctor Strange
var myPicture7 = [
  {
    imgurl: "movies/Doctor_Strange/png/001-surgeon.png",
    answer: "cards"
  },
  {
    imgurl: "movies/Doctor_Strange/png/004-accident.png",
    answer: "poker"
  },
  {
    imgurl: "movies/Doctor_Strange/png/002-wizard.png",
    answer: "money"
  },
  {
    imgurl: "movies/Doctor_Strange/png/003-cloak.png",
    answer: "suit"
  },
  {
    imgurl: "movies/Doctor_Strange/png/005-show.png",
    answer: "third eye"
  }
]

//Home Alone
var myPicture8 = [
  {
    imgurl: "movies/Home_Alone/png/002-boy.png",
    answer: "boy"
  },
  {
    imgurl: "movies/Home_Alone/png/parents.png",
    answer: "parents"
  },
  {
    imgurl: "movies/Home_Alone/png/boy-sad.png",
    answer: "sad"
  },
  {
    imgurl: "movies/Home_Alone/png/003-burglar.png",
    answer: "burglar"
  },
  {
    imgurl: "movies/Home_Alone/png/009-net.png",
    answer: "trap"
  },
  {
    imgurl: "movies/Home_Alone/png/007-statue-of-liberty.png",
    answer: "new york"
  },
  {
    imgurl: "movies/Home_Alone/png/004-presents.png",
    answer: "christmas"
  }
]

//Miss Congeniality
var myPicture9 = [
  {
    imgurl: "movies/Miss_Congeniality/png/003-businesswoman.png",
    answer: "boy"
  },
  {
    imgurl: "movies/Miss_Congeniality/png/009-detective.png",
    answer: "parents"
  },
  {
    imgurl: "movies/Miss_Congeniality/png/004-gun.png",
    answer: "sad"
  },
  {
    imgurl: "movies/Miss_Congeniality/png/001-crown.png",
    answer: "burglar"
  },
  {
    imgurl: "movies/Miss_Congeniality/png/006-dress.png",
    answer: "trap"
  },
  {
    imgurl: "movies/Miss_Congeniality/png/005-swimsuits.png",
    answer: "christmas"
  },
  {
    imgurl: "movies/Miss_Congeniality/png/007-model.png",
    answer: "new york"
  }
]

//Wolf of Wallstreet
var myPicture10 = [
  {
    imgurl: "movies/Wolf_Of_Wallstreet/png/002-employee.png",
    answer: "employee"
  },
  {
    imgurl: "movies/Wolf_Of_Wallstreet/png/001-stock-market.png",
    answer: "stocks"
  },
  {
    imgurl: "movies/Wolf_Of_Wallstreet/png/007-businessman.png",
    answer: "businessman"
  },
  {
    imgurl: "movies/Wolf_Of_Wallstreet/png/006-money.png",
    answer: "money"
  },
  {
    imgurl: "movies/Wolf_Of_Wallstreet/png/008-yatch.png",
    answer: "yatch"
  },
  {
    imgurl: "movies/Wolf_Of_Wallstreet/png/003-pool.png",
    answer: "pool party"
  },
  {
    imgurl: "movies/Wolf_Of_Wallstreet/png/009-badge.png",
    answer: "FBI"
  },
  {
    imgurl: "movies/Wolf_Of_Wallstreet/png/004-broke.png",
    answer: "Broke"
  }
]

//Frozen
var myPicture11 = [
  {
    imgurl: "movies/Frozen/png/sisters.png",
    answer: "sisters"
  },
  {
    imgurl: "movies/Frozen/png/pine-tree.png",
    answer: "frozen"
  },
  {
    imgurl: "movies/Frozen/png/007-ice-cube.png",
    answer: "ice cube"
  },
  {
    imgurl: "movies/Frozen/png/002-freezing.png",
    answer: "freezing"
  },
  {
    imgurl: "movies/Frozen/png/003-snowman.png",
    answer: "snowman"
  },
  {
    imgurl: "movies/Frozen/png/004-reindeer.png",
    answer: "reindeer"
  },
  {
    imgurl: "movies/Frozen/png/009-heart.png",
    answer: "heart"
  },
  {
    imgurl: "movies/Wolf_Of_Wallstreet/png/009-badge.png",
    answer: "FBI"
  },
  {
    imgurl: "movies/Wolf_Of_Wallstreet/png/004-broke.png",
    answer: "Broke"
  }
]

//500 days of summer
var myPicture12 = [
  {
    imgurl: "movies/500_Days_Of_Summer/png/001-greeting-card.png",
    answer: "greeting card"
  },
  {
    imgurl: "movies/500_Days_Of_Summer/png/005-sun.png",
    answer: "summer"
  },
  {
    imgurl: "movies/500_Days_Of_Summer/png/003-picnic-basket.png",
    answer: "picnic"
  },
  {
    imgurl: "movies/500_Days_Of_Summer/png/hug.png",
    answer: "love"
  },
  {
    imgurl: "movies/500_Days_Of_Summer/png/002-calendar.png",
    answer: "days"
  },
  {
    imgurl: "movies/500_Days_Of_Summer/png/004-autumn.png",
    answer: "autumn"
  }
]

var answerList = [ 
  "Finding Nemo", 
  "Twilight", 
  "Harry Potter and the order of Phoenix", 
  "Wall E", 
  "Interstellar",
  "Casino Royale",
  "Doctor Strange",
  "Home Alone",
  "Miss Congeniality",
  "Wolf of WallStreet",
  "Frozen",
  "500 Days of Summer"
]


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
function changeImage3() {
  var timer = 0;
  for (let i = 0; i < myPicture3.length; i++) {
    setTimeout(() => document.images[0].src = myPicture3[i].imgurl, timer);
    timer = timer + 1000;
  }
}
function changeImage4() {
  var timer = 0;
  for (let i = 0; i < myPicture4.length; i++) {
    setTimeout(() => document.images[0].src = myPicture4[i].imgurl, timer);
    timer = timer + 1000;
  }
}
function changeImage5() {
  var timer = 0;
  for (let i = 0; i < myPicture5.length; i++) {
    setTimeout(() => document.images[0].src = myPicture5[i].imgurl, timer);
    timer = timer + 1000;
  }
}
function changeImage6() {
  var timer = 0;
  for (let i = 0; i < myPicture6.length; i++) {
    setTimeout(() => document.images[0].src = myPicture6[i].imgurl, timer);
    timer = timer + 1000;
  }
}
function changeImage7() {
  var timer = 0;
  for (let i = 0; i < myPicture7.length; i++) {
    setTimeout(() => document.images[0].src = myPicture7[i].imgurl, timer);
    timer = timer + 1000;
  }
}
function changeImage8() {
  var timer = 0;
  for (let i = 0; i < myPicture8.length; i++) {
    setTimeout(() => document.images[0].src = myPicture8[i].imgurl, timer);
    timer = timer + 1000;
  }
}
function changeImage9() {
  var timer = 0;
  for (let i = 0; i < myPicture9.length; i++) {
    setTimeout(() => document.images[0].src = myPicture9[i].imgurl, timer);
    timer = timer + 1000;
  }
}
function changeImage10() {
  var timer = 0;
  for (let i = 0; i < myPicture10.length; i++) {
    setTimeout(() => document.images[0].src = myPicture10[i].imgurl, timer);
    timer = timer + 1000;
  }
}
function changeImage11() {
  var timer = 0;
  for (let i = 0; i < myPicture11.length; i++) {
    setTimeout(() => document.images[0].src = myPicture11[i].imgurl, timer);
    timer = timer + 1000;
  }
}
function changeImage12() {
  var timer = 0;
  for (let i = 0; i < myPicture12.length; i++) {
    setTimeout(() => document.images[0].src = myPicture12[i].imgurl, timer);
    timer = timer + 1000;
  }
}

var allQ = [ myPicture, myPicture2, myPicture3, myPicture4, myPicture5]

//yay the code works...code to display the right image on clicking next
// function nextQuestion() {
//   counter = (counter + 1) % (allQ.length);
//   document.images[0].src = (allQ[counter].imgurl);
//   console.log("the next question has started :" + allQ[counter]);
// }
function correct(){
  alert("Good Job! Correct Answer !!");
  // document.getElementById("buttonOne").style.background = "#2ecc71";
  // document.getElementById("buttonOne").style.color = "white";
}

function wrong(){
  alert("Oh No, Its the wrong answer !! Try again");
  // document.getElementById("buttonOne").style.background = "#e74c3c";
  // document.getElementById("buttonOne").style.color = "white";
}



function getSpeech1(){
  recognition.onresult = (event) => {
    console.log(event);
    const speechResult = event.results[0][0].transcript;
    console.log(speechResult);
    // var answer = document.getElementsByTagName("div")[0].getAttribute("id"); 

    document.querySelector("#speech-div").textContent = speechResult;
    res = speechResult.toLowerCase();
    if(res === "finding nemo"){
      console.log("correct answer");
      document.querySelector("#correct").textContent = answerList[0];
      correct();
      document.getElementById("buttonOne").style.background = "#2ecc71";
      document.getElementById("buttonOne").style.color = "white";
    }else{
      console.log("wrong answer");
      // document.querySelector("#correct").textContent = answerList[0];
      // console.log("Correct Answer is:" + answerList[0]);
      wrong();
      document.getElementById("buttonOne").style.background = "#e74c3c";
      document.getElementById("buttonOne").style.color = "white";
      
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
    if(res === "twilight"){
      console.log("correct answer");
      correct();
      document.getElementById("buttonTwo").style.background = "#2ecc71";
      document.getElementById("buttonTwo").style.color = "white";
    }else{
      console.log("wrong answer");
      // console.log("Correct Answer is:" + answerList[1]);
      wrong();
      document.getElementById("buttonTwo").style.background = "#e74c3c";
      document.getElementById("buttonTwo").style.color = "white";
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
    if(res === "harry potter and the order of phoenix" || "Harry Potter"){
      console.log("correct answer");
      correct();
      document.getElementById("buttonThree").style.background = "#2ecc71";
      document.getElementById("buttonThree").style.color = "white";
    }else{
      console.log("wrong answer");
      wrong();
      document.getElementById("buttonThree").style.background = "#e74c3c";
      document.getElementById("buttonThree").style.color = "white";
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
    if(res === "wally" || "wall e"){
      console.log("correct answer");
      correct();
      document.getElementById("buttonFour").style.background = "#2ecc71";
      document.getElementById("buttonFour").style.color = "white";
    }else{
      console.log("wrong answer");
      wrong();
      document.getElementById("buttonFour").style.background = "#e74c3c";
      document.getElementById("buttonFour").style.color = "white";
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
    if(res === "interstellar"){
      console.log("correct answer");
      correct();
      document.getElementById("buttonFive").style.background = "#2ecc71";
      document.getElementById("buttonFive").style.color = "white";
    }else{
      console.log("wrong answer");
      wrong();
      document.getElementById("buttonFive").style.background = "#e74c3c";
      document.getElementById("buttonFive").style.color = "white";
    }
  };

  //when the session is over
  recognition.onend = () => {
    console.log("session 5 is over");
    recognition.stop();
    //getSpeech(); // to make the detection of speech going on and on
  };
}

function getSpeech6(){
  recognition.onresult = (event) => {
    console.log(event);
    const speechResult = event.results[0][0].transcript;
    console.log(speechResult);
    // var answer = document.getElementsByTagName("div")[0].getAttribute("id"); 
    document.querySelector("#speech-div").textContent = speechResult;
    var res = speechResult.toLowerCase();
    if(res === "casino royale"){
      console.log("correct answer");
      correct();
      document.getElementById("buttonSix").style.background = "#2ecc71";
      document.getElementById("buttonSix").style.color = "white";
    }else{
      console.log("wrong answer");
      wrong();
      document.getElementById("buttonSix").style.background = "#e74c3c";
      document.getElementById("buttonSix").style.color = "white";
    }
  };

  //when the session is over
  recognition.onend = () => {
    console.log("session 6 is over");
    recognition.stop();
    //getSpeech(); // to make the detection of speech going on and on
  };
}

function getSpeech7(){
  recognition.onresult = (event) => {
    console.log(event);
    const speechResult = event.results[0][0].transcript;
    console.log(speechResult);
    // var answer = document.getElementsByTagName("div")[0].getAttribute("id"); 
    document.querySelector("#speech-div").textContent = speechResult;
    var res = speechResult.toLowerCase();
    if(res === "doctor strange"){
      console.log("correct answer");
      correct();
      document.getElementById("buttonSeven").style.background = "#2ecc71";
      document.getElementById("buttonSeven").style.color = "white";
    }else{
      console.log("wrong answer");
      wrong();
      document.getElementById("buttonSeven").style.background = "#e74c3c";
      document.getElementById("buttonSeven").style.color = "white";
    }
  };

  //when the session is over
  recognition.onend = () => {
    console.log("session 7 is over");
    recognition.stop();
    //getSpeech(); // to make the detection of speech going on and on
  };
}

function getSpeech8(){
  recognition.onresult = (event) => {
    console.log(event);
    const speechResult = event.results[0][0].transcript;
    console.log(speechResult);
    // var answer = document.getElementsByTagName("div")[0].getAttribute("id"); 
    document.querySelector("#speech-div").textContent = speechResult;
    var res = speechResult.toLowerCase();
    if(res === "home alone"){
      console.log("correct answer");
      correct();
      document.getElementById("buttonEight").style.background = "#2ecc71";
      document.getElementById("buttonEight").style.color = "white";
    }else{
      console.log("wrong answer");
      wrong();
      document.getElementById("buttonEight").style.background = "#e74c3c";
      document.getElementById("buttonEight").style.color = "white";
    }
  };

  //when the session is over
  recognition.onend = () => {
    console.log("session 8 is over");
    recognition.stop();
    //getSpeech(); // to make the detection of speech going on and on
  };
}

function getSpeech9(){
  recognition.onresult = (event) => {
    console.log(event);
    const speechResult = event.results[0][0].transcript;
    console.log(speechResult);
    // var answer = document.getElementsByTagName("div")[0].getAttribute("id"); 
    document.querySelector("#speech-div").textContent = speechResult;
    var res = speechResult.toLowerCase();
    if(res === "miss congeniality"){
      console.log("correct answer");
      correct();
      document.getElementById("buttonNine").style.background = "#2ecc71";
      document.getElementById("buttonNine").style.color = "white";
    }else{
      console.log("wrong answer");
      wrong();
      document.getElementById("buttonNine").style.background = "#e74c3c";
      document.getElementById("buttonNine").style.color = "white";
    }
  };

  //when the session is over
  recognition.onend = () => {
    console.log("session 9 is over");
    recognition.stop();
    //getSpeech(); // to make the detection of speech going on and on
  };
}

function getSpeech10(){
  recognition.onresult = (event) => {
    console.log(event);
    const speechResult = event.results[0][0].transcript;
    console.log(speechResult);
    // var answer = document.getElementsByTagName("div")[0].getAttribute("id"); 
    document.querySelector("#speech-div").textContent = speechResult;
    var res = speechResult.toLowerCase();
    if(res === "wolf of wallstreet"){
      console.log("correct answer");
      correct();
      document.getElementById("buttonTen").style.background = "#2ecc71";
      document.getElementById("buttonTen").style.color = "white";
    }else{
      console.log("wrong answer");
      wrong();
      document.getElementById("buttonTen").style.background = "#e74c3c";
      document.getElementById("buttonTen").style.color = "white";
    }
  };

  //when the session is over
  recognition.onend = () => {
    console.log("session 10 is over");
    recognition.stop();
    //getSpeech(); // to make the detection of speech going on and on
  };
}

function getSpeech11(){
  recognition.onresult = (event) => {
    console.log(event);
    const speechResult = event.results[0][0].transcript;
    console.log(speechResult);
    // var answer = document.getElementsByTagName("div")[0].getAttribute("id"); 
    document.querySelector("#speech-div").textContent = speechResult;
    var res = speechResult.toLowerCase();
    if(res === "frozen"){
      console.log("correct answer");
      correct();
      document.getElementById("buttonEleven").style.background = "#2ecc71";
      document.getElementById("buttonEleven").style.color = "white";
    }else{
      console.log("wrong answer");
      wrong();
      document.getElementById("buttonEleven").style.background = "#e74c3c";
      document.getElementById("buttonEleven").style.color = "white";
    }
  };

  //when the session is over
  recognition.onend = () => {
    console.log("session 11 is over");
    recognition.stop();
    //getSpeech(); // to make the detection of speech going on and on
  };
}

function getSpeech12(){
  recognition.onresult = (event) => {
    console.log(event);
    const speechResult = event.results[0][0].transcript;
    console.log(speechResult);
    // var answer = document.getElementsByTagName("div")[0].getAttribute("id"); 
    document.querySelector("#speech-div").textContent = speechResult;
    var res = speechResult.toLowerCase();
    if(res === "500 days of summer"){
      console.log("correct answer");
      correct();
      document.getElementById("buttonTwelve").style.background = "#2ecc71";
      document.getElementById("buttonTwelve").style.color = "white";
    }else{
      console.log("wrong answer");
      wrong();
      document.getElementById("buttonTwelve").style.background = "#e74c3c";
      document.getElementById("buttonTwelve").style.color = "white";
    }
  };

  //when the session is over
  recognition.onend = () => {
    console.log("session 12 is over");
    recognition.stop();
    //getSpeech(); // to make the detection of speech going on and on
  };
}
// var functionList = [changeImage1(), changeImage2(), changeImage3()]
// var speechList = [getSpeech1(), getSpeech2(), getSpeech3()]
// var buttonList = ["#buttonOne", "#buttonTwo", "#buttonThree"]

// // for(var a=0;a<functionList.length;a++){
// //   console.log("this is function: "+a+" ;"+functionList[a]);
// // }


//   document.querySelector("#button").onclick = ()=>{
//     for(var a=0;a<functionList.length;a++){
//       console.log("this is function: "+a+" ;"+functionList[a]);
//     }
//   };

//on click button update function 


// function executeFunction(){
//   for(var i=0;i<functionList.length;i++){
//     document.querySelector(buttonList[i]).onclick = ()=>{
//       console.log("question number : " + (i+1));
//       recognition.start();
//       functionList[i];
//       speechList[i];
//     }
//   } 
// }
// executeFunction();
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


document.querySelector("#buttonSix").onclick = ()=>{
  console.log("Question 6");
  recognition.start();
  changeImage6();
  getSpeech6();
};
document.querySelector("#buttonSeven").onclick = ()=>{
  console.log("Question 7");
  recognition.start();
  changeImage7();
  getSpeech7();
};
document.querySelector("#buttonEight").onclick = ()=>{
  console.log("Question 8");
  recognition.start();
  changeImage8();
  getSpeech8();
};
document.querySelector("#buttonNine").onclick = ()=>{
  console.log("Question 9");
  recognition.start();
  changeImage9();
  getSpeech9();
};
document.querySelector("#buttonTen").onclick = ()=>{
  console.log("Question 10");
  recognition.start();
  changeImage10();
  getSpeech10();
};

document.querySelector("#buttonEleven").onclick = ()=>{
  console.log("Question 11");
  recognition.start();
  changeImage11();
  getSpeech11();
};
document.querySelector("#buttonTwelve").onclick = ()=>{
  console.log("Question 12");
  recognition.start();
  changeImage12();
  getSpeech12();
};

// document.querySelector("#button1").onclick = ()=>{
//   console.log("clicked");
//   recognition.start();
//   getSpeech1();
// };

