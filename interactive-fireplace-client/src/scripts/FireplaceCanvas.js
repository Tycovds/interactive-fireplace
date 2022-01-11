const canvas = document.createElement('canvas');
canvas.style.background = "#000";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');

class FireParticle {
    constructor(radius) {
        this.y = window.innerHeight;
        this.x = Math.random() * (window.innerWidth - window.innerWidth / 1.5) + window.innerWidth / 3;
        this.speed = Math.random() * 4 + 2;
        this.sinCounter = 0;
        this.radius = radius;
        this.wiggle = Math.random() - 0.5;
        this.r = 235;
        this.g = 230;
        this.b = 50;
    }

    update() {
        this.sinCounter += this.wiggle;
        if (this.y < 0) {
            this.y = window.innerHeight;
            this.r = 235;
            this.g = 230;
            this.b = 50;
        }
        if (this.g <= 0) {
            this.r -= 4;
            this.b -= 4;
        } else {
            this.g = this.g - 3;
        }
        this.y -= this.speed;
        this.x += Math.cos(this.sinCounter);
        this.draw()
    }
    draw() {
        c.fillStyle = `rgb(${this.r}, ${this.g}, ${this.b})`;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fill();
        c.closePath()
    }
}

export default class Fireplace {
    constructor(canvasContainer, initialFire) {
        this.canvasContainer = canvasContainer;
        this.fireParticles = new Array();
        this.amount = initialFire;

        this.init()
    }


    init() {
        let count = 0;
        let t = setInterval(() => {
            if (count >= this.amount) {
                clearInterval(t);
            }
            this.fireParticles.push(new FireParticle(5));
            count++;

        }, 100);
        this.animate()
        document.querySelector(this.canvasContainer).appendChild(canvas);

    }

    throwWood(woodAmount) {
        for (let i = 0; i < woodAmount; i++) {
            this.fireParticles.push(new FireParticle(4));
        }
        setTimeout(() => {
            this.fireParticles.splice(this.amount - 1, woodAmount);
        }, 10000)
    }


    animate() {
        // c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        c.fillStyle = '#00000011';
        c.fillRect(0, 0, canvas.width, canvas.height);
        requestAnimationFrame(this.animate.bind(this));
        this.fireParticles.forEach(particle => {
            particle.update();
        })
    }


}






