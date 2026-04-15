'use client'

import { useEffect } from 'react'

export function HomeMotion() {
  useEffect(() => {
    const root = document.documentElement
    const openingLogo = document.querySelector<HTMLElement>('.opening-logo-shell')
    const heroLogo = document.querySelector<HTMLElement>('.hero-logo-stage')
    const heroImage = document.querySelector<HTMLElement>('.brand-image')

    const updateOpeningTarget = () => {
      if (!openingLogo || !heroLogo) return

      const heroRect = heroLogo.getBoundingClientRect()
      const heroCx = heroRect.left + heroRect.width / 2
      const heroCy = heroRect.top + heroRect.height / 2
      const viewCx = window.innerWidth / 2
      const viewCy = window.innerHeight / 2

      root.style.setProperty('--opening-target-x', `${heroCx - viewCx}px`)
      root.style.setProperty('--opening-target-y', `${heroCy - viewCy}px`)
      root.style.setProperty(
        '--opening-target-scale',
        `${heroRect.width / openingLogo.offsetWidth}`
      )
    }

    updateOpeningTarget()
    document
      .querySelectorAll<HTMLImageElement>('.opening-logo, .brand-image')
      .forEach((img) => {
        if (!img.complete) {
          img.addEventListener('load', updateOpeningTarget, { once: true })
        }
      })
    window.addEventListener('resize', updateOpeningTarget)

    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        if (heroImage) {
          const scrollY = window.scrollY
          const y = scrollY * 0.12
          const s = 1 + scrollY * 0.00008
          heroImage.style.transform = `translateY(${y}px) scale(${s})`
        }
        ticking = false
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -12% 0px' }
    )

    const sceneObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-active', entry.isIntersecting)
        })
      },
      { threshold: 0.2, rootMargin: '-4% 0px -4% 0px' }
    )

    const keywordObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-highlighted')
          }
        })
      },
      { threshold: 0.5, rootMargin: '0px 0px -10% 0px' }
    )

    document
      .querySelectorAll<HTMLElement>('.reveal-block')
      .forEach((n) => revealObserver.observe(n))
    document
      .querySelectorAll<HTMLElement>('.story-scene')
      .forEach((n) => sceneObserver.observe(n))
    document
      .querySelectorAll<HTMLElement>('.keyword-highlight')
      .forEach((n) => keywordObserver.observe(n))

    return () => {
      window.removeEventListener('resize', updateOpeningTarget)
      window.removeEventListener('scroll', handleScroll)
      revealObserver.disconnect()
      sceneObserver.disconnect()
      keywordObserver.disconnect()
    }
  }, [])

  return null
}
