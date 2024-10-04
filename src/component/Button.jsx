import React, { useRef, useCallback } from 'react';
import './Button.css';
// import './Button2.scss';

const Button = ({ children,type, imgSrc }) => {
  const buttonRef = useRef(null);

  const createRipple = useCallback((event) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add("ripple", "ripple-enter");

    button.appendChild(ripple);
  }, []);

  const removeRipple = useCallback((event) => {
    const button = buttonRef.current;
    const ripple = button.querySelector(".ripple");
    if (ripple) {
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.remove("ripple-enter");
      ripple.classList.add("ripple-leave");

      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    }
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`button ${type}`}
      onMouseEnter={createRipple}
      onMouseLeave={removeRipple}
    >
      {imgSrc && <img src={imgSrc} alt="profile" className="button__image" />}
      {children}
    </button>
  );
};

export default Button;