"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

// Cores da paleta para usar nas partículas: Azul, Ciano, e Verde Limão
const particleBaseColors = [
  "hsl(211, 100%, 50%)", // brand-blue (#007BFF)
  "hsl(196, 90%, 53%)",  // brand-cyan (#06B6D4)
];
const particleAccentColor = "hsl(105, 100%, 55%)"; // #39FF14 (Verde Limão Elétrico)

// Probabilidade de uma partícula ser da cor de acento (verde limão)
const accentColorProbability = 0.15; // 15% de chance

const connectionColor = "rgba(34, 211, 238, 0.1)"; // Ciano bem transparente para conexões (#22D3EE)

export function CreativeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let devicePixelRatio: number

    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas!.getBoundingClientRect()
      canvas!.width = rect.width * devicePixelRatio
      canvas!.height = rect.height * devicePixelRatio
      ctx!.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0); // Limpa transformações anteriores e aplica a escala
    }

    setCanvasDimensions()

    let mouseX = canvas!.width / (2 * devicePixelRatio); 
    let mouseY = canvas!.height / (2 * devicePixelRatio);
    let targetX = mouseX;
    let targetY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect() // Added non-null assertion for consistency
      targetX = e.clientX - rect.left
      targetY = e.clientY - rect.top
    };
    
    if (!('ontouchstart' in window)) {
      window.addEventListener("mousemove", handleMouseMove);
    }


    class Particle {
      x: number
      y: number
      size: number
      baseX: number
      baseY: number
      density: number
      color: string
      originalColor: string;
      vx: number; // Velocidade X
      vy: number; // Velocidade Y

      constructor(x: number, y: number) {
        this.baseX = x
        this.baseY = y
        this.x = x + (Math.random() - 0.5) * 50; // Posição inicial mais espalhada
        this.y = y + (Math.random() - 0.5) * 50;
        this.size = Math.random() * 2.2 + 1.2 // Tamanho das partículas
        this.density = Math.random() * 30 + 15 
        
        if (Math.random() < accentColorProbability) {
          this.originalColor = particleAccentColor;
        } else {
          this.originalColor = particleBaseColors[Math.floor(Math.random() * particleBaseColors.length)];
        }
        this.color = this.originalColor;
        this.vx = (Math.random() - 0.5) * 0.3; // Movimento sutil inicial
        this.vy = (Math.random() - 0.5) * 0.3;
      }

      update() {
        // Interação com mouse
        const dxMouse = mouseX - this.x
        const dyMouse = mouseY - this.y
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)
        const maxDistance = 80 
        
        if (distanceMouse < maxDistance) {
          const force = (maxDistance - distanceMouse) / maxDistance
          const angle = Math.atan2(dyMouse, dxMouse);
          this.vx -= Math.cos(angle) * force * 0.3; // Ajuste na força de repulsão
          this.vy -= Math.sin(angle) * force * 0.3;
          // Muda a cor para o acento se for uma partícula base, ou intensifica se já for acento
          this.color = this.originalColor === particleAccentColor ? particleAccentColor : particleBaseColors[0]; // Simplesmente muda para azul perto do mouse
        } else {
          this.color = this.originalColor;
        }

        // Retornar à posição base e aplicar velocidade
        this.vx += (this.baseX - this.x) * 0.005; // Força de retorno mais suave
        this.vy += (this.baseY - this.y) * 0.005;

        // Atrito para diminuir a velocidade
        this.vx *= 0.96; 
        this.vy *= 0.96;

        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    const particlesArray: Particle[] = []
    const gridSize = 28 // Espaçamento entre partículas

    function init() {
      particlesArray.length = 0
      const canvasWidth = canvas!.width / devicePixelRatio
      const canvasHeight = canvas!.height / devicePixelRatio
      const numX = Math.floor(canvasWidth / gridSize)
      const numY = Math.floor(canvasHeight / gridSize)

      for (let y = 0; y < numY; y++) {
        for (let x = 0; x < numX; x++) {
          const posX = x * gridSize + gridSize / 2 + (canvasWidth - numX * gridSize) / 2; 
          const posY = y * gridSize + gridSize / 2 + (canvasHeight - numY * gridSize) / 2;
          particlesArray.push(new Particle(posX, posY))
        }
      }
    }

    init()
    let animationFrameId: number;

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width / devicePixelRatio, canvas.height / devicePixelRatio);


      mouseX += (targetX - mouseX) * 0.08 
      mouseY += (targetY - mouseY) * 0.08

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()

        for (let j = i + 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x
          const dy = particlesArray[i].y - particlesArray[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < gridSize * 1.3) { 
            ctx.beginPath()
            const opacity = Math.max(0, 0.4 - distance / (gridSize * 2.5));
            ctx.strokeStyle = connectionColor.replace("0.1", opacity.toFixed(2)); 
            ctx.lineWidth = 0.6
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
            ctx.stroke()
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const resizeObserver = new ResizeObserver(() => {
        setCanvasDimensions();
        init();
    });
    if (canvas!.parentElement) {
        resizeObserver.observe(canvas!.parentElement);
    }


    return () => {
      cancelAnimationFrame(animationFrameId);
      if (!('ontouchstart' in window)) {
       window.removeEventListener("mousemove", handleMouseMove);
      }
      // window.removeEventListener("resize", setCanvasDimensions) // This was correctly noted as handled by ResizeObserver
      resizeObserver.disconnect();
    }
  }, [])

  return (
    <motion.div
      className="w-full h-[350px] md:h-[450px] relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <canvas ref={canvasRef} className="w-full h-full rounded-lg" style={{ display: "block" }} />
    </motion.div>
  )
}