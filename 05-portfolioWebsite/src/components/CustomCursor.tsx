import { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.scss';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePos({ x: clientX, y: clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive =
        (target.tagName === 'BUTTON' || target.tagName === 'A') ||
        (!!target.classList && target.classList.contains('interactive')) ||
        !!(target.closest && target.closest('button')) ||
        !!(target.closest && target.closest('a'));

      if (isInteractive) setIsHovering(true);
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive =
        (target.tagName === 'BUTTON' || target.tagName === 'A') ||
        (!!target.classList && target.classList.contains('interactive')) ||
        !!(target.closest && target.closest('button')) ||
        !!(target.closest && target.closest('a'));

      if (isInteractive) setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Center dot */}
      <div
        ref={cursorRef}
        className={`${styles.cursorDot} ${isHovering ? styles.active : ''}`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      {/* Glow effect */}
      <div
        className={`${styles.cursorGlow} ${isHovering ? styles.active : ''}`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />
    </>
  );
}
