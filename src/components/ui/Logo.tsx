import React from 'react';

interface LogoProps {
  className?: string;
}

/**
 * Marca "LF" (Luiz Filipe) — mesmo desenho usado como favicon em index.html.
 * Mantendo os dois sincronizados manualmente: qualquer ajuste visual aqui
 * deve ser replicado no SVG do favicon (ver comentário em index.html).
 */
export const Logo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Logo — Luiz Filipe Linhares"
  >
    <rect width="32" height="32" rx="7" fill="#0f172a" />
    <path
      d="M9 9v14h6M17 9v14M17 9h7M17 16h5"
      stroke="#3b82f6"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);
