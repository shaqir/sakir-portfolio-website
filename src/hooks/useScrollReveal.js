import { useEffect, useRef } from 'react'

/**
 * Animate `.reveal` children into view on scroll using IntersectionObserver.
 * Attach the returned ref to a section container. Each `.reveal` child triggers
 * once and is then unobserved.
 *
 * Elements with `[data-stagger]` will have stagger delays auto-applied to their
 * direct children that have the `.reveal` class.
 *
 * @param {Object} [options] - IntersectionObserver options.
 * @param {number} [options.threshold=0.1] - Visibility ratio to trigger reveal.
 * @param {string} [options.rootMargin='0px 0px -60px 0px'] - Observer root margin.
 * @returns {import('react').RefObject<HTMLElement>} Ref to attach to the container element.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Auto-apply stagger delays to children of [data-stagger] containers
    el.querySelectorAll('[data-stagger]').forEach((container) => {
      const children = container.querySelectorAll(':scope > .reveal, :scope > .reveal--scale')
      children.forEach((child, i) => {
        child.classList.add(`reveal-delay-${i + 1}`)
      })
    })

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
        rootMargin: options.rootMargin || '0px 0px -60px 0px',
      },
    )

    // Observe all reveal variants
    const revealElements = el.querySelectorAll('.reveal, .reveal--scale, .reveal--blur')
    revealElements.forEach((child) => observer.observe(child))
    if (el.classList.contains('reveal')) observer.observe(el)

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}
