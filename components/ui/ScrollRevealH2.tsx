'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ScrollRevealH2Props {
  as?: 'h1' | 'h2';
  text?: string;
  lines?: string[];
  className?: string;
  highlightWords?: string[];
  highlightClass?: string;
  viewportMargin?: string;
  delayOffset?: number;
  children?: React.ReactNode;
}

export default function ScrollRevealH2({
  as = 'h2',
  text,
  lines,
  className = '',
  highlightWords = [],
  highlightClass,
  viewportMargin = '0px 0px -40px 0px',
  delayOffset = 0,
  children,
}: ScrollRevealH2Props) {
  const Tag = as;
  const containerRef = useRef<HTMLElement>(null);

  // Normalize viewportMargin: ensure left/right are 0px so letters are never clipped horizontally on mobile
  const safeMargin = (!viewportMargin || viewportMargin === '-60px')
    ? '0px 0px -40px 0px'
    : viewportMargin.includes(' ')
    ? viewportMargin
    : `0px 0px ${viewportMargin} 0px`;

  const isInView = useInView(containerRef, {
    once: true,
    margin: safeMargin as any,
  });

  // Resolve lines from lines prop, text prop, or string children
  let resolvedLines: string[] = [];

  if (lines && lines.length > 0) {
    resolvedLines = lines;
  } else if (typeof text === 'string') {
    resolvedLines = text.split(/\r?\n/);
  } else if (typeof children === 'string') {
    resolvedLines = children.split(/\r?\n/);
  } else if (Array.isArray(children)) {
    resolvedLines = children
      .map((child) => (typeof child === 'string' ? child : ''))
      .filter(Boolean);
  }

  if (resolvedLines.length === 0 && text) {
    resolvedLines = [String(text)];
  }

  const isCenter = className.includes('text-center');

  // Track global character counter for continuous stagger across words and lines
  let globalCharIndex = 0;

  return (
    <Tag
      ref={containerRef as any}
      data-scroll-reveal
      className={cn(
        'flex flex-col gap-y-1',
        isCenter && 'items-center justify-center',
        className
      )}
    >
      {resolvedLines.map((line, lineIndex) => {
        const words = line.trim().split(/\s+/).filter(Boolean);

        return (
          <span
            key={lineIndex}
            className={cn(
              'flex flex-wrap gap-x-[0.28em] gap-y-1',
              isCenter && 'justify-center'
            )}
          >
            {words.map((word, wordIndex) => {
              // Check if word or clean alphanumeric word is in highlightWords
              const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
              const isHighlighted =
                highlightWords.includes(word) ||
                (cleanWord.length > 0 && highlightWords.includes(cleanWord));

              const chars = word.split('');

              return (
                <span
                  key={wordIndex}
                  className="inline-block whitespace-nowrap"
                >
                  {chars.map((char, charIndex) => {
                    const currentIndex = globalCharIndex++;

                    return (
                      <motion.span
                        key={`${lineIndex}-${wordIndex}-${charIndex}`}
                        initial={{
                          clipPath: 'inset(0% 100% 0% 0%)',
                          opacity: 0,
                        }}
                        animate={
                          isInView
                            ? {
                                clipPath: 'inset(0% 0% 0% 0%)',
                                opacity: 1,
                              }
                            : {
                                clipPath: 'inset(0% 100% 0% 0%)',
                                opacity: 0,
                              }
                        }
                        transition={{
                          duration: 0.75,
                          delay: delayOffset + currentIndex * 0.075, // Stagger effect per letter 1 by 1
                          ease: [0.215, 0.61, 0.355, 1], // Smooth cubic-bezier
                        }}
                        className={cn(
                          'inline-block will-change-[clip-path,opacity]',
                          isHighlighted
                            ? highlightClass ||
                                'bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent font-black'
                            : ''
                        )}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </span>
              );
            })}
          </span>
        );
      })}
    </Tag>
  );
}

export { ScrollRevealH2 as ScrollRevealHeading };
