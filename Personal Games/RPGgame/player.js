function initplayers() {
    player1 = {
        x: 600,
        y: 100,
        w: 20,
        h: 20,
        speed: 5,
        col: RED
    };
    player2 = {
        x: 500,
        y: 100,
        w: 20,
        h: 20,
        speed: 5
    };
    player3 = {
        x: 200,
        y: 100,
        w: 20,
        h: 20,
        speed: 5
    };
    player4 = {
        x: 100,
        y: 100,
        w: 20,
        h: 20,
        speed: 5
    };
}

function moveplayers() {
    //player1
    if(keyIsDown(LEFT_ARROW)) {
        player1.x -= player1.speed
    }
    if(keyIsDown(UP_ARROW)) {
        player1.y -= player1.speed
    }
    if(keyIsDown(RIGHT_ARROW)) {
        player1.x += player1.speed
    }
    if(keyIsDown(DOWN_ARROW)) {
        player1.y += player1.speed
    }
}

function drawplayers() {
    noStroke();
    fill(player1.col);
    rect(player1.x, player1.y, player1.w, player1.h);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
}