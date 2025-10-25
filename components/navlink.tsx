'use client';
import { useState, useEffect } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export default function NavLink({ href, children, mobile = false }: NavLinkProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(href);
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsActive(rect.top <= 100 && rect.bottom >= 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [href]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const baseClasses = mobile 
    ? "block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
    : "px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors font-medium";

  const activeClasses = isActive ? "bg-white/20" : "";

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={`${baseClasses} ${activeClasses}`}
    >
      {children}
    </a>
  );
}