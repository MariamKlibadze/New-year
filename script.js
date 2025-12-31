

let birthday = new Date(2026, 0, 1);

setInterval(() => {
    let now = new Date();
    let days = String(Math.floor((birthday - now) / 1000 / 3600 / 24))
    let hours = String(Math.floor((birthday - now) / 1000 / 3600 % 24))
    let minutes = String(Math.floor((birthday - now) / 1000 / 60 % 60))
    let seconds = String(Math.floor((birthday - now) / 1000 % 60))
    let boxes = document.querySelectorAll('.kaku')

    boxes[0].innerHTML = days.padStart(2, 0)
    boxes[1].innerHTML = hours.padStart(2, 0)
    boxes[2].innerHTML = minutes.padStart(2, 0)
    boxes[3].innerHTML = seconds.padStart(2, 0)

}, 1000);

let now = new Date(2026,0,1);

const panel = document.getElementById('Happy')

if ((birthday - now) <= 0) {
    panel.style.display = 'block';
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function Firework() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.targetX = random(100, canvas.width - 100);
        this.targetY = random(50, canvas.height / 2);
        this.particles = [];
        this.exploded = false;

        this.update = () => {
            if (!this.exploded) {
                this.x += (this.targetX - this.x) * 0.05;
                this.y += (this.targetY - this.y) * 0.05;

                if (Math.abs(this.x - this.targetX) < 5) {
                    this.exploded = true;
                    for (let i = 0; i < 50; i++) {
                        this.particles.push(new Particle(this.x, this.y));
                    }
                }
            } else {
                this.particles.forEach(p => p.update());
            }
        };

        this.draw = () => {
            if (!this.exploded) {
                ctx.fillStyle = "white";
                ctx.fillRect(this.x, this.y, 3, 3);
            } else {
                this.particles.forEach(p => p.draw());
            }
        };
    }

    function Particle(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = random(-3, 3);
        this.speedY = random(-3, 3);
        this.alpha = 1;

        this.update = () => {
            this.x += this.speedX;
            this.y += this.speedY;
            this.alpha -= 0.02;
        };

        this.draw = () => {
            ctx.fillStyle = `rgba(${random(100, 255)}, ${random(100, 255)}, ${random(100, 255)}, ${this.alpha})`;
            ctx.fillRect(this.x, this.y, 6, 6);
        };
    }

    let fireworks = [];

    function animate() {
        ctx.fillStyle = "rgba(238, 233, 243, 1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (Math.random() < 0.05) {
            fireworks.push(new Firework());
        }

        fireworks.forEach(f => f.update());
        fireworks.forEach(f => f.draw());

        requestAnimationFrame(animate);
    }

    animate();
}

else {
    panel.style.display = 'none';
}

const panels = document.getElementsByClassName('Counter')

if ((birthday - now) <= 0) {
    panels[0].style.display = 'none';
}

else {
    panels[0].style.display = 'flex';
}



