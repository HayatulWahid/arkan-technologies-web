import React from 'react';

export default function ArkanLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Shield / Microchip Chassis */}
      <path
        d="M50 8L88 28V72L50 92L12 72V28L50 8Z"
        stroke="#10b981"
        strokeWidth="5"
        strokeLinejoin="round"
        className="drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]"
      />
      {/* Inner Circuit Delta Element */}
      <path
        d="M50 24L72 68H28L50 24Z"
        stroke="#06b6d4"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Center Core Node */}
      <circle cx="50" cy="52" r="7" fill="#10b981" />
      {/* Telemetry Trace Nodes */}
      <circle cx="50" cy="8" r="3" fill="#10b981" />
      <circle cx="88" cy="28" r="3" fill="#06b6d4" />
      <circle cx="12" cy="28" r="3" fill="#06b6d4" />
    </svg>
  );
}