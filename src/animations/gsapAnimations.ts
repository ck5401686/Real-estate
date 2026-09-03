import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Fade up animation for elements
export const fadeUp = (
  element: gsap.TweenTarget,
  vars: gsap.TweenVars = {}
): gsap.core.Tween | null => {
  if (prefersReducedMotion()) return null;
  return gsap.from(element, {
    y: 35,
    opacity: 0,
    duration: 1.0,
    ease: 'power3.out',
    ...vars,
  });
};

// Text reveal animation (lines/stagger)
export const textReveal = (
  targets: gsap.TweenTarget,
  stagger: number = 0.08,
  delay: number = 0.2
): gsap.core.Tween | null => {
  if (prefersReducedMotion()) return null;
  return gsap.from(targets, {
    y: '100%',
    opacity: 0,
    duration: 1.2,
    stagger,
    delay,
    ease: 'power4.out',
  });
};

// Image clip/reveal
export const imageReveal = (
  container: gsap.TweenTarget,
  image: gsap.TweenTarget
): gsap.core.Timeline | null => {
  if (prefersReducedMotion()) return null;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container as HTMLElement,
      start: 'top 85%',
      once: true,
    },
  });

  tl.fromTo(
    container,
    { clipPath: 'inset(100% 0% 0% 0%)' },
    { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'power3.inOut' }
  ).fromTo(
    image,
    { scale: 1.25 },
    { scale: 1, duration: 1.6, ease: 'power2.out' },
    '-=1.2'
  );

  return tl;
};

// Counter animation for numbers
export const animateCounter = (
  target: HTMLElement,
  endValue: number,
  prefix: string = '',
  suffix: string = '',
  duration: number = 2.0
) => {
  if (prefersReducedMotion()) {
    target.innerText = `${prefix}${endValue.toLocaleString()}${suffix}`;
    return;
  }

  const obj = { val: 0 };
  gsap.to(obj, {
    val: endValue,
    duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: target,
      start: 'top 85%',
      once: true,
    },
    onUpdate: () => {
      target.innerText = `${prefix}${Math.floor(obj.val).toLocaleString()}${suffix}`;
    },
  });
};

export { gsap, ScrollTrigger };
