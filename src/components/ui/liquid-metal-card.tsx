import { liquidMetalFragmentShader, ShaderMount } from "@paper-design/shaders";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface LiquidMetalCardProps {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  className?: string;
}

export function LiquidMetalCard({
  children,
  width = 112,
  height = 112,
  className = "",
}: LiquidMetalCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shaderRef = useRef<HTMLDivElement>(null);
  // biome-ignore lint/suspicious/noExplicitAny: External library without types
  const shaderMount = useRef<any>(null);

  const getDim = (dim: number | string) => (typeof dim === "number" ? `${dim}px` : dim);

  useEffect(() => {
    const styleId = "shader-canvas-style-exploded-card";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        .shader-container-exploded-card canvas {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          border-radius: 20px !important;
        }
      `;
      document.head.appendChild(style);
    }

    const loadShader = async () => {
      try {
        if (shaderRef.current) {
          if (shaderMount.current?.destroy) {
            shaderMount.current.destroy();
          }

          shaderMount.current = new ShaderMount(
            shaderRef.current,
            liquidMetalFragmentShader,
            {
              u_repetition: 4,
              u_softness: 0.5,
              u_shiftRed: 0.3,
              u_shiftBlue: 0.3,
              u_distortion: 0,
              u_contour: 0,
              u_angle: 45,
              u_scale: 8,
              u_shape: 1,
              u_offsetX: 0.1,
              u_offsetY: -0.1,
            },
            undefined,
            0.6,
          );
        }
      } catch (error) {
        console.error("Failed to load shader:", error);
      }
    };

    loadShader();

    return () => {
      if (shaderMount.current?.destroy) {
        shaderMount.current.destroy();
        shaderMount.current = null;
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    shaderMount.current?.setSpeed?.(1.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    shaderMount.current?.setSpeed?.(0.6);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block cursor-pointer ${className}`}
      style={{
        perspective: "1000px",
        perspectiveOrigin: "50% 50%",
        width: getDim(width),
        height: getDim(height),
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transform: isHovered ? "translateZ(10px) scale(1.05)" : "none",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transformStyle: "preserve-3d",
            transform: "translateZ(30px)",
            zIndex: 30,
            pointerEvents: "auto",
          }}
        >
          {children}
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            transform: "translateZ(10px)",
            zIndex: 20,
          }}
        >
          <div
            style={{
              width: "calc(100% - 4px)",
              height: "calc(100% - 4px)",
              margin: "2px",
              borderRadius: "16px",
              background: "rgba(255, 255, 255, 0.02)",
              backdropFilter: "blur(64px)",
              WebkitBackdropFilter: "blur(64px)",
              boxShadow: "inset 0px 1px 2px rgba(255, 255, 255, 0.08)",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            transform: "translateZ(0px)",
            zIndex: 10,
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "18px",
              boxShadow: isHovered
                ? "0px 0px 0px 1px rgba(0, 0, 0, 0.6), 0px 12px 20px 0px rgba(0, 0, 0, 0.4)"
                : "0px 0px 0px 1px rgba(0, 0, 0, 0.4), 0px 4px 10px 0px rgba(0, 0, 0, 0.2)",
              transition: "all 0.5s ease",
              background: "rgb(0 0 0 / 0)",
            }}
          >
            <div
              ref={shaderRef}
              className="shader-container-exploded-card"
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
                width: "100%",
                height: "100%",
                padding: "2px",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
