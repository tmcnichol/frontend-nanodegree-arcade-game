// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Runner {
  constructor() {
    this.x = 203;
    this.y = 405;
    this.sprite = 'images/char-boy.png';
    console.log('Runner works');
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

  }
};



// Now instantiate your objects.
const enemy1 = new Enemy();
enemy1.x = 0;
enemy1.y = 63;

const enemy2 = new Enemy();
enemy2.x = 0;
enemy2.y = 146;

const enemy3 = new Enemy();
enemy3.x = 0;
enemy3.y = 228;
// Place all enemy objects in an array called allEnemies
const allEnemies = [];
allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);

// Place the player object in a variable called player
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
