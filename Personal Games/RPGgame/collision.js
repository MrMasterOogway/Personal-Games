function checkCollision() {
    // // Check for collision with the walls
    // if (player.x + 34 > wall1.x && heli.x - 34 < wall1.x + wall1.w &&
    //   heli.y + 20.5 > wall1.y && heli.y - 20.5 < wall1.y + wall1.h) {
    //   shield = shield - 1;
    //   wall1.y = wall1.y + 1000;
    // }

    // if (heli.x + 34 > wall2.x && heli.x < wall2.x + wall2.w &&
    //   heli.y + 20.5 > wall2.y && heli.y - 20.5 < wall2.y + wall2.h) {
    //   shield = shield - 1;
    //   wall2.y = wall2.y + 1000;
    // }

    // if (heli.x + 34 > wall3.x && heli.x < wall3.x + wall3.w &&
    //   heli.y + 20.5 > wall3.y && heli.y + 20.5 < wall3.y + wall3.h) {
    //   shield = shield - 1;
    //   wall3.y = wall3.y + 1000;
    // }
    // }

    // Check for collision w/ ceiling & floor
    if (player1.y > 581) {
        player1.y = 580;
    }
    if (player1.y < 0) {
        player1.y = 1;
    }
    if (player1.x > 781) {
        player1.x = 780;
    }
    if (player1.x < 0) {
        player1.x = 1;
    }

    // // Check for collision with the walls
    // if (heli.x + 34 > wall1.x && heli.x - 34 < wall1.x + wall1.w &&
    //   heli.y + 20.5 > wall1.y && heli.y - 20.5 < wall1.y + wall1.h) {

    // }
}