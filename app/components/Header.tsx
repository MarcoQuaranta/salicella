'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease',
        padding: '20px 0'
      }}
    >
      <nav style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <Link href="/" style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            fontSize: '2.5em',
            transition: 'transform 0.3s ease'
          }}>🧀</div>
          <div>
            <div style={{
              fontSize: '1.5em',
              fontWeight: 700,
              color: isScrolled ? '#21618c' : 'white',
              transition: 'color 0.3s ease',
              lineHeight: 1.2,
              textShadow: isScrolled ? 'none' : '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
              Caseificio Salicella
            </div>
            <div style={{
              fontSize: '0.75em',
              color: isScrolled ? '#3498db' : 'rgba(255,255,255,0.9)',
              transition: 'color 0.3s ease',
              textShadow: isScrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.3)'
            }}>
              Dal 1952
            </div>
          </div>
        </Link>

        {/* Menu Desktop */}
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          gap: '40px',
          alignItems: 'center'
        }}
        className="desktop-menu"
        >
          <li>
            <Link href="/" style={{
              textDecoration: 'none',
              color: isScrolled ? '#21618c' : 'white',
              fontWeight: 600,
              fontSize: '1.05em',
              transition: 'all 0.3s ease',
              textShadow: isScrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
            className="nav-link"
            >
              Home
            </Link>
          </li>
          <li>
            <Link href="/chi-siamo" style={{
              textDecoration: 'none',
              color: isScrolled ? '#21618c' : 'white',
              fontWeight: 600,
              fontSize: '1.05em',
              transition: 'all 0.3s ease',
              textShadow: isScrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.3)'
            }}
            className="nav-link"
            >
              Chi Siamo
            </Link>
          </li>
          <li>
            <Link href="/prodotti" style={{
              textDecoration: 'none',
              color: isScrolled ? '#21618c' : 'white',
              fontWeight: 600,
              fontSize: '1.05em',
              transition: 'all 0.3s ease',
              textShadow: isScrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.3)'
            }}
            className="nav-link"
            >
              Prodotti
            </Link>
          </li>
          <li>
            <Link href="/contatti" style={{
              textDecoration: 'none',
              color: isScrolled ? '#21618c' : 'white',
              fontWeight: 600,
              fontSize: '1.05em',
              transition: 'all 0.3s ease',
              textShadow: isScrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.3)'
            }}
            className="nav-link"
            >
              Contatti
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu Mobile */}
        <button
          onClick={() => {
            if (isMobileMenuOpen) {
              setIsMobileMenuOpen(false);
              setIsClosing(true);
              setTimeout(() => {
                setIsClosing(false);
              }, 300);
            } else {
              setIsMobileMenuOpen(true);
            }
          }}
          className="mobile-menu-toggle"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '10px'
          }}
          aria-label="Toggle menu"
        >
          <div style={{
            width: '30px',
            height: '3px',
            background: isScrolled ? '#21618c' : 'white',
            marginBottom: '6px',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(45deg) translateY(9px)' : 'none'
          }}></div>
          <div style={{
            width: '30px',
            height: '3px',
            background: isScrolled ? '#21618c' : 'white',
            marginBottom: '6px',
            transition: 'all 0.3s ease',
            opacity: isMobileMenuOpen ? 0 : 1
          }}></div>
          <div style={{
            width: '30px',
            height: '3px',
            background: isScrolled ? '#21618c' : 'white',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-9px)' : 'none'
          }}></div>
        </button>
      </nav>

      {/* Menu Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: 'fixed',
            top: '110px',
            left: 0,
            right: 0,
            height: 'calc(100vh - 110px)',
            background: 'rgba(33, 97, 140, 0.98)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            zIndex: 999,
            transform: isClosing ? 'translateX(100%)' : 'translateX(0)',
            transition: 'transform 0.3s ease',
            animation: !isClosing ? 'slideInRight 0.3s ease forwards' : 'none'
          }}
        >
          <Link href="/" style={{
            color: 'white',
            fontSize: '2em',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'transform 0.3s ease'
          }}
          className="mobile-nav-link"
          >
            Home
          </Link>
          <Link href="/chi-siamo" style={{
            color: 'white',
            fontSize: '2em',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'transform 0.3s ease'
          }}
          className="mobile-nav-link"
          >
            Chi Siamo
          </Link>
          <Link href="/prodotti" style={{
            color: 'white',
            fontSize: '2em',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'transform 0.3s ease'
          }}
          className="mobile-nav-link"
          >
            Prodotti
          </Link>
          <Link href="/contatti" style={{
            color: 'white',
            fontSize: '2em',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'transform 0.3s ease'
          }}
          className="mobile-nav-link"
          >
            Contatti
          </Link>
        </div>
      )}
    </header>
  );
}
