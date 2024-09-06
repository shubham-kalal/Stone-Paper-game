// get DOM elements

const gamecontainer = document.querySelector(".container"),
  userResult = document.querySelector(".user-result img"),
  cpuResult = document.querySelector(".cpu-result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option-image");

// loop through each option images element

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src =  "image/rock.png";
    result.textContent = "Wait...Bhaya"

    // loop through each option images
    optionImages.forEach((image2, index2) => {
      // if the current index doesnt match the clicked index
      // remove the active class from the other option image
      index !== index2 && image2.classList.remove("active");
    });

    gamecontainer.classList.add("start");
    //  set timeout to delay the result

    let time = setTimeout(() => {
      gamecontainer.classList.remove("start");

      // get the source of the clicked option image
      let imagesrc = e.target.querySelector("img").src;
      userResult.src = imagesrc;

      //  generate a random number between 0 and 2;
      let randomNumber = Math.floor(Math.random() * 3);

      //create an array of CPU image options
      let cpuImage = ["image/rock.png", "image/paper.png", "image/rock.png"];

      //set the cpu image to a random option from the array
      cpuResult.src = cpuImage[randomNumber];

      //assign a letter value to the cpu option(r for rock, p for paper, s for)
      let cpuValue = ["R", "P", "S"][randomNumber];

      //ASSIGN A LATTER VALUE TO THE CLICKED option (based on index)
      let userValue = ["R", "P", "S"][index];

      //create an object with all possible outcome
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };

      //look up the outcome value based on user and cpu options
      let outComeValue = outcomes[userValue + cpuValue];

      //DISPLAY the result
      result.textContent =
        userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
    }, 2500);
  });
});
