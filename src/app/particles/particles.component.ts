import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { SingleParticle } from 'src/models/particle.model';

@Component({
  selector: 'site-particles',
  styleUrls: ['./particles.component.scss'],
  templateUrl: './particles.component.html',
})
export class ParticlesComponent implements AfterViewInit, OnDestroy {
  number = 50;
  linkDistance = 80;
  linkWidth = 1;
  moveSpeed = 5;
  size = 2;
  repulseDistance = 150;
  repulseDuration = 100;
  canvasHeight = 0;
  canvasWidth = 0;
  interaction = {
    status: 'mouseleave',
    pos_x: 0,
    pos_y: 0,
  };
  animating = true;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  particlesList: SingleParticle[] = [];

  @ViewChild('particles', { static: true }) particlesCanvas: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.canvas = this.particlesCanvas.nativeElement;
    this.context = this.canvas.getContext('2d');
    this.setCanvasSize();
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.number; i++) {
      this.particlesList.push(this.createParticle());
    }
    fromEvent(this.canvas, 'mousemove').subscribe((e: MouseEvent) => {
      this.interaction.pos_x = e.offsetX;
      this.interaction.pos_y = e.offsetY;
      this.interaction.status = 'mousemove';
    });
    fromEvent(this.canvas, 'mouseleave').subscribe((e: MouseEvent) => {
      this.interaction.pos_x = null;
      this.interaction.pos_y = null;
      this.interaction.status = 'mouseleave';
    });
    this.render();
  }

  ngOnDestroy() {
    this.animating = false;
  }

  setCanvasSize() {
    this.canvas.width = this.canvasWidth = this.canvas.offsetWidth;
    this.canvas.height = this.canvasHeight = this.canvas.offsetHeight;
  }

  createParticle(): SingleParticle {
    let x = Math.random() * this.canvasWidth;
    let y = Math.random() * this.canvasHeight;
    const vx = Math.random() - 0.5;
    const vy = Math.random() - 0.5;

    if (x > this.canvasWidth - this.size * 2) {
      x = x - this.size;
    } else if (x < this.size * 2) {
      x = x + this.size;
    }
    if (y > this.canvasHeight - this.size * 2) {
      y = y - this.size;
    } else if (y < this.size * 2) {
      y = y + this.size;
    }

    return { x, y, vx, vy };
  }

  draw(p: SingleParticle) {
    this.context.fillStyle = 'rgba(119,119,119, .6)'; // particle dot color
    this.context.beginPath();
    this.context.arc(p.x, p.y, this.size, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.fill();
  }

  particlesDraw() {
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.update();
    for (let i = 0, l = this.particlesList.length; i < l; i++) {
      this.draw(this.particlesList[i]);
    }
  }

  update() {
    let p: SingleParticle = {
      vx: 0,
      vy: 0,
      x: 0,
      y: 0,
    };
    let p2: SingleParticle = {
      vx: 0,
      vy: 0,
      x: 0,
      y: 0,
    };
    let ms = 0;

    for (let i = 0, l = this.particlesList.length; i < l; i++) {
      p = this.particlesList[i];
      ms = this.moveSpeed / 2;
      p.x += p.vx * ms;
      p.y += p.vy * ms;

      if (p.x - this.size > this.canvasWidth) {
        p.x = -this.size;
        p.y = Math.random() * this.canvasHeight;
      } else if (p.x + this.size < 0) {
        p.x = this.canvasWidth + this.size;
        p.y = Math.random() * this.canvasHeight;
      }
      if (p.y - this.size > this.canvasHeight) {
        p.y = -this.size;
        p.x = Math.random() * this.canvasWidth;
      } else if (p.y + this.size < 0) {
        p.y = this.canvasHeight + this.size;
        p.x = Math.random() * this.canvasWidth;
      }
      if (this.interaction.status === 'mousemove') {
        this.repulse(p);
      }
      for (let j = i + 1; j < l; j++) {
        p2 = this.particlesList[j];
        this.linkParticles(p, p2);
      }
    }
  }

  repulse(p: SingleParticle) {
    // eslint-disable-next-line one-var
    const dxMouse = p.x - this.interaction.pos_x,
      dyMouse = p.y - this.interaction.pos_y,
      distMouse = Math.sqrt(Math.pow(dxMouse, 2) + Math.pow(dyMouse, 2));
    // eslint-disable-next-line one-var
    const velocity = 5,
      repulseFactor = Math.min(
        Math.max(
          (1 / this.repulseDistance) *
            (-1 * Math.pow(distMouse / this.repulseDistance, 2) + 1) *
            this.repulseDistance *
            velocity,
          0,
        ),
        50,
      );
    p.x = p.x - (dxMouse / distMouse) * repulseFactor;
    p.y = p.y - (dyMouse / distMouse) * repulseFactor;
  }

  linkParticles(p1: SingleParticle, p2: SingleParticle) {
    const dist = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    if (dist <= this.linkDistance) {
      if (0.7 - dist / (1 / 0.7) / this.linkDistance > 0) {
        this.context.strokeStyle = 'rgba(119, 119,119, .15)'; // particle link color
        this.context.lineWidth = this.linkWidth;
        this.context.beginPath();
        this.context.moveTo(p1.x, p1.y);
        this.context.lineTo(p2.x, p2.y);
        this.context.stroke();
        this.context.closePath();
      }
    }
  }

  render() {
    this.particlesDraw();
    if (this.animating) {
      window.requestAnimationFrame((callback) => this.render());
    }
  }
}
