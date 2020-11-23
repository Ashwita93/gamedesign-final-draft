var cardAnimation = document.querySelector('.card');
cardAnimation.addEventListener('click', function(){
    cardAnimation.classList.toggle('is-flipped')
});
var counter = 0; //keeps track of which image and answer is being shown

//picture array
var myPicture = [
  {
    imgurl: "assets/fruits/noun_Apple_2460463.png",
    answer: "apple"
  },
  {
    imgurl: "assets/fruits/noun_blueberry_2460450.png",
    answer: "blueberry"
  },
  {
    imgurl: "assets/fruits/noun_Cherry_2483500.png",
    answer: "cherry"
  },
  {
    imgurl: "assets/fruits/noun_Pineapple_2460423.png",
    answer: "pineapple"
  },
  {
    imgurl: "assets/fruits/noun_Strawberry_2460440.png",
    answer: "strawberries"
  }
];

var imageShowcase = myPicture[counter];
displayCurrentImage = function(){
  imageShowcase = myPicture[counter];
  console.log(imageShowcase.imgurl + ";" + imageShowcase.answer);
}


var currentImageIndex = 0;
  
  function nextPic() {
    //console.log(myPicture[currentImageIndex+1]);
    counter = (counter + 1) % (myPicture.length);
    document.images[0].src = myPicture[counter];
  }