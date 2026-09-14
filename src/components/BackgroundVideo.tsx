"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const PARTICLE_COUNT = 22;
const CONNECTION_DISTANCE = 150;

export default function BackgroundVideo() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const lastTimeRef = useRef(0);
  const lastFrameRef = useRef(0);

  const initParticles = useCallback((w: number, h: number) => {
    const arr: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 0.8,
        opacity: Math.random() * 0.5 + 0.25,
      });
    }
    particlesRef.current = arr;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = (ts: number) => {
      const cvs = canvasRef.current;
      if (!cvs) return;
      if (ts - lastFrameRef.current < 32) {
        animFrameRef.current = requestAnimationFrame(draw);
        return;
      }
      const ctx = cvs.getContext("2d");
      if (!ctx) return;

      const dt = ts - lastTimeRef.current;
      lastTimeRef.current = ts;
      lastFrameRef.current = ts;

      ctx.fillStyle = "#0b1220";
      ctx.fillRect(0, 0, cvs.width, cvs.height);

      const scanPosition = (ts * 0.06) % (cvs.height + 120) - 60;
      const motionTime = ts * 0.00045;

      ctx.lineWidth = 1.2;
      for (let wave = 0; wave < 11; wave++) {
        const baseline = cvs.height * (0.15 + wave * 0.075);
        const amplitude = 18 + wave * 2;
        ctx.strokeStyle = wave % 3 === 0
          ? "rgba(86, 197, 216, 0.18)"
          : "rgba(244, 247, 251, 0.07)";
        ctx.beginPath();
        for (let x = 0; x <= cvs.width; x += 14) {
          const y = baseline + Math.sin(x * 0.006 + motionTime * (1.2 + wave * 0.04)) * amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(86, 197, 216, 0.24)";
      ctx.beginPath();
      ctx.moveTo(0, scanPosition);
      ctx.lineTo(cvs.width, scanPosition);
      ctx.stroke();

      ctx.fillStyle = "#56c5d8";
      for (let index = 0; index < 8; index++) {
        const nodeX = ((ts * (0.02 + index * 0.004) + index * 170) % (cvs.width + 180)) - 90;
        const nodeY = cvs.height * (0.16 + (index % 7) * 0.1) + Math.sin(motionTime + index) * 20;
        ctx.globalAlpha = 0.25;
        ctx.beginPath();
        ctx.arc(nodeX, nodeY, index % 2 === 0 ? 3 : 2, 0, Math.PI * 2);
        ctx.fill();
      }

      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx * Math.min(dt, 32);
        p.y += p.vy * Math.min(dt, 32);
        if (p.x < 0 || p.x > cvs.width) p.vx *= -1;
        if (p.y < 0 || p.y > cvs.height) p.vy *= -1;
        p.x = Math.max(0, Math.min(cvs.width, p.x));
        p.y = Math.max(0, Math.min(cvs.height, p.y));

        const col = "#56c5d8";

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = col;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = col;
            ctx.globalAlpha = (1 - dist / CONNECTION_DISTANCE) * 0.1;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animFrameRef.current = requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (particlesRef.current.length === 0) {
        initParticles(canvas.width, canvas.height);
      }
    };

    let scrollFrame = 0;
    const updateParallax = () => {
      scrollFrame = 0;
      if (sceneRef.current) {
        sceneRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.08}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(updateParallax);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    lastTimeRef.current = performance.now();
    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [initParticles]);

  return (
    <div ref={sceneRef} className="background-scene fixed inset-0 z-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "#0b1220" }}
      />
      {/* Readability overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(11,18,32,0.14)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(11,18,32,0.16)",
        }}
      />
    </div>
  );
}
