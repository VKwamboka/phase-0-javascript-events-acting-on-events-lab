// // Your code here
       
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    dodger.style.backgroundColor = "#FF69B4";
    dodger.style.bottom = "0px";
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") {
          moveDodgerLeft();
        }
      });
  }
  moveDodgerLeft();

// const dodger = document.getElementById("dodger");

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

