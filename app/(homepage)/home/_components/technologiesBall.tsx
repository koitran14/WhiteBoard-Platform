"use client"

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion'; 

interface BallProps {
  logo: string;
  bgColor?: string;
}

interface BallData {
  velocity: { x: number; y: number };
  mass: number;
  angularVelocity: number;
  angle: number;
  stopped: boolean;
  movable: boolean;
}

interface BoxOfBallsProps {
  balls: BallProps[];
  boxWidth: number;
  boxHeight: number;
  ballRadius: number;
}

export const BoxOfBalls: React.FC<BoxOfBallsProps> = ({
  balls,
  boxWidth,
  boxHeight,
  ballRadius,
}) => {
  const gravity = 0.1; 
  const restitution = 0.3; 
  const friction = 0.95;
  const airResistance = 0.99; 
  const velocityThreshold = 0.05; 
  const angularVelocityThreshold = 0.01;
  const ballData = useRef<BallData[]>([]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-200px 0px" });

  useEffect(() => {
    const startAnimation = () => {
      ballData.current = balls.map(() => ({
        velocity: { x: Math.random() * 5 - 2.5, y: Math.random() * 5 - 2.5 },
        mass: Math.random() * 30 + 20, 
        angularVelocity: Math.random() * 0.1 - 0.1, 
        angle: 0, // Initial angle
        stopped: false,
        movable: true,
      }));
  
      const updateBall = (index: number) => {
        if (ballData.current[index].stopped) return;
        const ball = document.getElementById(`ball-${index}`) as HTMLDivElement;
        if (!ball) return;
    
        const { velocity, mass, angularVelocity, angle, stopped, movable } = ballData.current[index];
        if (stopped) return;
    
        let positionX = parseFloat(ball.style.left) || Math.random() * (boxWidth - 2 * ballRadius); 
        let positionY = parseFloat(ball.style.top) || Math.random() * (boxHeight - 2 * ballRadius); 
        
        if (Math.abs(velocity.x) < velocityThreshold && Math.abs(velocity.y) < velocityThreshold && Math.abs(angularVelocity) < angularVelocityThreshold) {
          // If there are no external forces and the ball is almost stopped, mark it as stopped
          ballData.current[index].stopped = true;
          return;
        }
        velocity.y += gravity; 
    
        ballData.current[index].angularVelocity *= airResistance;
    
        positionX += velocity.x;
        positionY += velocity.y;
    
        if (positionX <= 0) {
            positionX = 1;
            velocity.x *= -restitution; 
           // Apply visual effect
        } else if (positionX >= boxWidth - 2 * ballRadius) {
            positionX = boxWidth - 2 * ballRadius;
            velocity.x *= -restitution; // Reverse X velocity on collision with right wall
           // Apply visual effect
        }
    
        if (positionY <= 0) {
            positionY = 1;
            velocity.y *= -restitution; // Reverse Y velocity on collision with top wall
           // Apply visual effect
        } else if (positionY >= boxHeight - 2 * ballRadius) {
            positionY = boxHeight - 2 * ballRadius;
            velocity.y *= -restitution; // Reverse Y velocity on collision with bottom wall
           // Apply visual effect
    
            // Apply friction when the ball is on the ground
            velocity.x *= friction;
            if (Math.abs(velocity.x) < velocityThreshold) {
                velocity.x = 0;
            }
    
            // Apply friction to angular velocity when the ball is on the ground
            ballData.current[index].angularVelocity *= friction;
            if (Math.abs(ballData.current[index].angularVelocity) < angularVelocityThreshold) {
                ballData.current[index].angularVelocity = 0;
            }
        }
    
       // Check collision with other balls
        balls.forEach((_, otherIndex) => {
          if (index !== otherIndex) {
              const otherBall = document.getElementById(`ball-${otherIndex}`) as HTMLDivElement;
              if (!otherBall) return;

              const otherPositionX = parseFloat(otherBall.style.left);
              const otherPositionY = parseFloat(otherBall.style.top);
              const dx = otherPositionX - positionX;
              const dy = otherPositionY - positionY;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 2 * ballRadius) {
                  // Collision detected
                  const overlap = 2 * ballRadius - distance;
                  const nx = dx / distance;
                  const ny = dy / distance;

                  // Push the balls apart to remove overlap
                  positionX -= nx * overlap / 2;
                  positionY -= ny * overlap / 2;
                  velocity.x -= (overlap / 2) * nx;
                  velocity.y -= (overlap / 2) * ny;

                  // Update other ball position to remove overlap
                  otherBall.style.left = otherPositionX + (overlap / 2) * nx + "px";
                  otherBall.style.top = otherPositionY + (overlap / 2) * ny + "px";

                  // Apply impulse to resolve collision
                  const impulse = (-(1 + restitution) * (velocity.x * nx + velocity.y * ny)) / (1 / mass + 1 / ballData.current[otherIndex].mass);
                  velocity.x += (impulse / mass) * nx;
                  velocity.y += (impulse / mass) * ny;

                  // Check if both balls have met the ground and should stop
                  const isLimitation = (positionY >= boxHeight - 2 * ballRadius); 
                  const otherIsLimitation = (otherPositionY >= boxHeight - 2 * ballRadius);
                  if (isLimitation && otherIsLimitation) {
                      ballData.current[index].stopped = true;
                      ballData.current[otherIndex].stopped = true;
                      velocity.x = 0;
                      velocity.y = 0;
                      ballData.current[index].angularVelocity = 0;
                      ballData.current[otherIndex].angularVelocity = 0;
                  }
              }
          }
        });

        // Update ball position
        ball.style.left = positionX + "px";
        ball.style.top = positionY + "px";
    
        // Check if the ball should stop
        if (
            Math.abs(velocity.x) < velocityThreshold &&
            Math.abs(velocity.y) < velocityThreshold &&
            Math.abs(ballData.current[index].angularVelocity) < angularVelocityThreshold &&
            positionY >= boxHeight - 2 * ballRadius
        ) {
            ballData.current[index].stopped = true;
            velocity.x = 0;
            velocity.y = 0;
            ballData.current[index].angularVelocity = 0;
        } else {
            // Update ball data
            ballData.current[index].velocity = velocity;
        }
      };
    
      const animate = () => {
        balls.forEach((_, index) => updateBall(index));
        requestAnimationFrame(animate);
      };
  
      animate();
    }
    if (inView) {
      setTimeout(() =>{
        startAnimation()
      }, 500)
    }
  }, [inView, balls, boxWidth, ballRadius, boxHeight]);

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: `${boxWidth}px`,
        height: `${boxHeight}px`,
        // border: '1px solid #000',
        backgroundColor: 'transparent',
      }}
    >
      {balls.map((ball, index) => (
        <div
          key={index}
          id={`ball-${index}`}
          style={{
            position: 'absolute',
            width: `${2 * ballRadius}px`,
            height: `${2 * ballRadius}px`,
            borderRadius: '50%',
            backgroundImage: `url(${ball.logo})`,
            backgroundSize: 'cover',
            left: `${Math.random() * (boxWidth - 2 * ballRadius)}px`,
            top: `${Math.random() * (boxHeight - 2 * ballRadius)}px`,
            transition: 'transform 0.2s, background-color 0.2s', // Added transition property for smooth effects
            backgroundColor: ball.bgColor || 'transparent',
          }}
        />
      ))}
    </div>
  );
};

