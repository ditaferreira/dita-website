"use client";

import React, { useEffect, useRef } from 'react';

export type PrismaticBurstFallbackProps = {
  intensity?: number;
  speed?: number;
  colors?: string[];
  mixBlendMode?: React.CSSProperties['mixBlendMode'] | 'none';
};

const PrismaticBurstFallback = ({
  intensity = 2,
  speed = 0.5,
  colors = ['#10b981', '#064e3b', '#34d399', '#065f46', '#ecfdf5'],
  mixBlendMode = 'screen'
}: PrismaticBurstFallbackProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.style.mixBlendMode = mixBlendMode && mixBlendMode !== 'none' ? mixBlendMode : '';

    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createGradient = (centerX: number, centerY: number, radius: number) => {
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      colors.forEach((color, index) => {
        gradient.addColorStop(index / (colors.length - 1), color + Math.floor(30 + 50 * intensity).toString(16).padStart(2, '0'));
      });
      return gradient;
    };

    const drawRayBurst = () => {
      const rect = canvas.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const maxRadius = Math.max(rect.width, rect.height) * 1.2;
      
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Create multiple rotating ray bursts with enhanced visibility
      for (let i = 0; i < 4; i++) {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate((time * speed + i * Math.PI / 2) * 0.08);
        
        // Draw rays with enhanced effects
        const rayCount = 16 + i * 4;
        for (let ray = 0; ray < rayCount; ray++) {
          const angle = (ray / rayCount) * Math.PI * 2;
          const pulseEffect = Math.sin(time * speed * 0.1 + ray * 0.4) * 0.3 + 0.7;
          const rayLength = maxRadius * pulseEffect;
          
          ctx.save();
          ctx.rotate(angle);
          
          const gradient = ctx.createLinearGradient(0, 0, rayLength * 0.8, 0);
          const colorIndex = Math.floor(ray / Math.max(1, rayCount / colors.length)) % colors.length;
          const baseColor = colors[colorIndex];
          
          // Enhanced alpha values for better visibility
          const centerAlpha = Math.floor(40 + 60 * intensity * pulseEffect).toString(16).padStart(2, '0');
          const midAlpha = Math.floor(20 + 40 * intensity * pulseEffect).toString(16).padStart(2, '0');
          
          gradient.addColorStop(0, baseColor + '00');
          gradient.addColorStop(0.2, baseColor + centerAlpha);
          gradient.addColorStop(0.5, baseColor + midAlpha);
          gradient.addColorStop(0.8, baseColor + '10');
          gradient.addColorStop(1, baseColor + '00');
          
          ctx.fillStyle = gradient;
          ctx.fillRect(0, -3, rayLength, 6);
          
          // Add a secondary thinner ray for extra glow
          ctx.fillRect(0, -1, rayLength * 1.1, 2);
          
          ctx.restore();
        }
        
        ctx.restore();
      }
      
      // Add a central glow effect
      ctx.save();
      const centralGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 150);
      centralGradient.addColorStop(0, colors[0] + '20');
      centralGradient.addColorStop(0.3, colors[1] + '10');
      centralGradient.addColorStop(1, colors[0] + '00');
      
      ctx.fillStyle = centralGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      time += 0.016; // ~60fps
      drawRayBurst();
      animationIdRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [intensity, speed, colors, mixBlendMode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: mixBlendMode && mixBlendMode !== 'none' ? mixBlendMode : undefined }}
    />
  );
};

export default PrismaticBurstFallback;