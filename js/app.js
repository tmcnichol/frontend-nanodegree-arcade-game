// Enemies our player must avoid
var Enemy = function() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.sprite = 'images/enemy-bug.png';
    this.rate = 40;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if (this.x < 506) {
      this.x += this.rate * dt;
    } else {
      this.x = -101;
    }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// The class for our main player, who I've called Runner
class Runner {
  constructor() {
    this.x = 203;
    this.y = 405;
    this.sprite = 'images/char-boy.png';
    this.score = 0;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(allowedKeys) {
    switch(allowedKeys) {
      case 'left':
        if (this.x > 100) {
          this.x -= 101;
        }
        break;
      case 'up':
        if (this.y > 0) {
          this.y -= 83;
        }
        break;
      case 'right':
        if (this.x < 405) {
          this.x += 101;
        }
        break;
      case 'down':
        if (this.y < 333) {
          this.y += 83;
        }
          break;
    }
  }

  update() {
    let score = 0;
    if (this.y < 0) {
      this.x = 203;
      this.y = 405;
      this.score += 1;
      console.log(this.score);
    }
    if (this.y === enemy1.y && this.x - enemy1.x > -75 && this.x - enemy1.x < 75 ) {
      this.x = 203;
      this.y = 405;
      this.score -= 1;
      console.log(this.score);
      }
    if (this.y === enemy2.y && this.x - enemy2.x > -75 && this.x - enemy2.x < 75 ) {
      this.x = 203;
      this.y = 405;
      this.score -= 1;
      console.log(this.score);
    }
    if (this.y === enemy3.y && this.x - enemy3.x > -75 && this.x - enemy3.x < 75 ) {
      this.x = 203;
      this.y = 405;
      this.score -= 1;
      console.log(this.score);
    }
    if (this.y === enemy4.y && this.x - enemy4.x > -75 && this.x - enemy4.x < 75 ) {
      this.x = 203;
      this.y = 405;
      this.score -= 1;
      console.log(this.score);
    }
  }
};

// All enemy objects
const enemy1 = new Enemy();
enemy1.x = -101;
enemy1.y = 73;
enemy1.rate = 190;

const enemy2 = new Enemy();
enemy2.x = -101;
enemy2.y = 156;
enemy2.rate = 110;

const enemy3 = new Enemy();
enemy3.x = -101;
enemy3.y = 239;
enemy3.rate = 240;

const enemy4 = new Enemy();
enemy4.x = -101;
enemy4.y = 156;
enemy4.rate = 260;
// All enemy objects in an array:
const allEnemies = [];
allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);
allEnemies.push(enemy4);

// Place the Runner object in a variable called player
const player = new Runner();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
