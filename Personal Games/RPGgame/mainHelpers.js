  function drawGameOn() {
    // DRAWING
    background(140, 197, 66);
    noStroke();
    fill(169, 169, 169)
    rect(wall1.x, wall1.y, wall1.w, wall1.h); // Wall 1
    rect(wall2.x, wall2.y, wall2.w, wall2.h); // Wall 2
    rect(wall3.x, wall3.y, wall3.w, wall3.h); // Wall 3
    rect(wall4.x, wall4.y, wall4.w, wall4.h); // Wall 4
    fill(255,0,0)
    rect(player1.x, player1.y, player1.w, player1.h); // player
    fill(255);
    text("score: " + score, width / 20, height - 10);
    text("Best Score: " + best, width / 2, height - 10);
  }
  