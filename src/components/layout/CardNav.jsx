import { useLayoutEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import './CardNav.css';

const CardNav = ({
  items,
  className = '',
  ease = 'power3.out',
  baseColor = 'rgba(9,9,11,0.92)',
  menuColor = 'rgba(255,255,255,0.75)',
  buttonBgColor = '#22c55e',
  buttonTextColor = '#052e16',
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  /* ─── Navigation helper ─────────────────────────── */
  const handleLinkClick = (href) => {
    if (!href) return;
    // Close the nav first
    if (tlRef.current) {
      setIsHamburgerOpen(false);
      tlRef.current.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tlRef.current.reverse();
    }
    if (href.startsWith('#')) {
      const hash = href.slice(1);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: 'smooth' }), 100);
      } else {
        document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('/')) {
      navigate(href);
    } else {
      window.open(href, '_blank', 'noopener noreferrer');
    }
  };

  /* ─── GSAP helpers ──────────────────────────────── */
  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content');
      if (contentEl) {
        const wasV = contentEl.style.visibility;
        const wasP = contentEl.style.pointerEvents;
        const wasPos = contentEl.style.position;
        const wasH = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';
        contentEl.offsetHeight; // force reflow
        const h = 56 + contentEl.scrollHeight + 8;

        contentEl.style.visibility = wasV;
        contentEl.style.pointerEvents = wasP;
        contentEl.style.position = wasPos;
        contentEl.style.height = wasH;
        return h;
      }
    }
    return 256;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;
    gsap.set(navEl, { height: 56, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 40, opacity: 0 });
    const tl = gsap.timeline({ paused: true });
    tl.to(navEl, { height: calculateHeight, duration: 0.38, ease });
    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.36, ease, stagger: 0.07 }, '-=0.12');
    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;
    return () => { tl?.kill(); tlRef.current = null; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;
      if (isExpanded) {
        gsap.set(navRef.current, { height: calculateHeight() });
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) { newTl.progress(1); tlRef.current = newTl; }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) tlRef.current = newTl;
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i) => (el) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div className={`card-nav-container ${className}`}>
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''}`}
        style={{ backgroundColor: baseColor, backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      >
        {/* ── Top bar ─────────────────────────────────── */}
        <div className="card-nav-top">
          {/* Hamburger */}
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleMenu()}
            style={{ color: menuColor }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          {/* Logo */}
          <div className="logo-container">
            <a
              href="/"
              className="card-nav-logo-text"
              onClick={(e) => { e.preventDefault(); handleLinkClick('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{ color: 'rgba(255,255,255,0.9)' }}
            >
              <span className="logo-accent">A</span>thalla
            </a>
          </div>

          {/* CTA */}
          <button
            type="button"
            className="card-nav-cta-button"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
            onClick={() => handleLinkClick('#contact')}
          >
            Hire me
          </button>
        </div>

        {/* ── Expanded cards ────────────────────────── */}
        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link"
                    href={lnk.href || '#'}
                    aria-label={lnk.ariaLabel}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(lnk.href); }}
                  >
                    <GoArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
