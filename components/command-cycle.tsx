"use client";

import React, { useState, useEffect } from "react";

interface CommandCycleProps {
  baseCommand: string;
  commands: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export function CommandCycle({
  baseCommand = "qmims",
  commands = ["generate", "edit", "templates list", "config setup"],
  typingSpeed = 100,
  deletingSpeed = 30,
  pauseTime = 3000,
  className = "",
}: CommandCycleProps) {
  const [displayText, setDisplayText] = useState(baseCommand);
  const [currentCommand, setCurrentCommand] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [commandIndex, setCommandIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Handle cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Handle typing and deleting animation
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping && !isDeleting) {
      // Typing the command
      if (currentCommand.length < commands[commandIndex].length) {
        timeout = setTimeout(() => {
          setCurrentCommand(
            commands[commandIndex].substring(0, currentCommand.length + 1)
          );
        }, typingSpeed);
      } else {
        // Finished typing, pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else if (isDeleting) {
      // Deleting the command
      if (currentCommand.length > 0) {
        timeout = setTimeout(() => {
          setCurrentCommand(
            currentCommand.substring(0, currentCommand.length - 1)
          );
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next command
        setIsDeleting(false);
        setCommandIndex((commandIndex + 1) % commands.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    isTyping,
    isDeleting,
    currentCommand,
    commandIndex,
    commands,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  // Update display text whenever currentCommand changes
  useEffect(() => {
    setDisplayText(`${baseCommand} ${currentCommand}`);
  }, [baseCommand, currentCommand]);

  return (
    <div
      className={`font-mono inline-flex items-center justify-center ${className}`}
    >
      <span className="text-gray-400 mr-1">$</span>
      <span className="text-green-400">{displayText}</span>
      <span
        className="text-green-400 inline-block"
        style={{
          opacity: cursorVisible ? 1 : 0,
          width: "0.15em",
          height: "1em",
          backgroundColor: "#00ff00",
          marginLeft: "1px",
          transform: "translateY(1px)",
          borderRadius: "1px"
        }}
      />
    </div>
  );
}
