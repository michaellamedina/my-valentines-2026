let hoverCount = 0;

function saysYes() {
  document.querySelector("h1").innerText = "See you soon! 𐔌՞ ܸ.ˬ.ܸ՞𐦯";
  alert("I knew you'd say yes! (˶ᵔ ᵕ ᵔ˶)");

  // removes no
  document.getElementById("noButton").style.display = "none";

  // changes back the sprite
  document.querySelector(".sprite").style.backgroundImage =
    "url('heartSprite.png')";
}

function saysNo() {
  // change sprite
  document.querySelector(".sprite").style.backgroundImage =
    "url('breakSprite.png')";

  // removes no
  setTimeout(() => {
    alert("What do you mean NO?! .·°՞(っ-ᯅ-ς)՞°·.");
    document.getElementById("noButton").style.display = "none";
  }, 100);
}

function moveButton(event) {
  if (window.innerWidth <= 768) {
    return;
  }

  hoverCount++;

  //   changes the sprite
  if (hoverCount >= 3) {
    document.querySelector(".sprite").style.backgroundImage =
      "url('breakSprite.png')";
  }

  // counts to 10 and removes no
  if (hoverCount === 10) {
    document.getElementById("noButton").style.display = "none";

    alert("Okay fine HMP! I'll hide it so now you have to say YES! (  •̀⤙•́  )");
    return;
  }

  // variables
  const noButton = document.getElementById("noButton");
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const maxX = windowWidth - noButton.offsetWidth - 20;
  const maxY = windowHeight - noButton.offsetHeight - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // moves
  noButton.style.position = "fixed";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
}
