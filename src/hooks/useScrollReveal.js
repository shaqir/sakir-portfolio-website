import { useEffect, useRef } from 'react'

/**
 * Animate `.reveal` children into view on scroll using IntersectionObserver.
 * Attach the returned ref to a section container. Each `.reveal` child triggers
 * once and is then unobserved.
 *
 * @param {Object} [options] - IntersectionObserver options.
 * @param {number} [options.threshold=0.1] - Visibility ratio to trigger reveal.
 * @param {string} [options.rootMargin='0px 0px -50px 0px'] - Observer root margin.
 * @returns {import('react').RefObject<HTMLElement>} Ref to attach to the container element.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      },
    )

    // Observe the element and all children with .reveal class
    const revealElements = el.querySelectorAll('.reveal')
    revealElements.forEach((child) => observer.observe(child))
    if (el.classList.contains('reveal')) observer.observe(el)

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}
