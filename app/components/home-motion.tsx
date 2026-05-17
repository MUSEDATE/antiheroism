'use client'

import { useEffect } from 'react'

export function HomeMotion() {
  useEffect(() => {
    const root = document.documentElement
    const openingLogo = document.querySelector<HTMLElement>('.opening-logo-shell')
    const heroLogo = document.querySelector<HTMLElement>('.hero-logo-stage')
    const heroImage = document.querySelector<HTMLElement>('.brand-image')
    const openingAlreadySeen = root.dataset.openingSeen === 'true'
    let openingTimer: number | undefined

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
    if (openingLogo && !openingAlreadySeen) {
      openingTimer = window.setTimeout(() => {
        try {
          window.localStorage.setItem('antiheroism-opening-seen', '1')
          root.dataset.openingSeen = 'true'
        } catch {}
      }, 3300)
    }

    document
      .querySelectorAll<HTMLImageElement>('.opening-logo, .brand-image')
      .forEach((img) => {
        if (!img.complete) {
          img.addEventListener('load', updateOpeningTarget, { once: true })
        }
      })
    window.addEventListener('resize', updateOpeningTarget)

    const storySections = Array.from(
      document.querySelectorAll<HTMLElement>('.story-section')
    )
    const heroCopy = document.querySelector<HTMLElement>('.hero-home-copy')

    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const viewportH = window.innerHeight

        if (heroImage) {
          const y = scrollY * 0.14
          const s = 1 + scrollY * 0.00008
          heroImage.style.transform = `translateY(${y}px) scale(${s})`
        }
        if (heroCopy) {
          const heroY = Math.min(scrollY * 0.22, 160)
          const heroFade = Math.max(1 - scrollY / (viewportH * 0.85), 0)
          heroCopy.style.transform = `translateY(${-heroY}px)`
          heroCopy.style.opacity = String(heroFade)
        }

        const maxScroll = document.documentElement.scrollHeight - viewportH
        const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0
        document.documentElement.style.setProperty(
          '--scroll-progress',
          progress.toFixed(4)
        )

        const viewportMid = viewportH / 2
        storySections.forEach((section) => {
          const rect = section.getBoundingClientRect()
          const sectionMid = rect.top + rect.height / 2
          const raw = (sectionMid - viewportMid) / viewportH
          const clamped = Math.max(-1, Math.min(1, raw))
          section.style.setProperty('--scene-distance', Math.abs(clamped).toFixed(3))
          section.style.setProperty('--scene-distance-signed', clamped.toFixed(3))
        })

        ticking = false
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

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

    const wordsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            wordsObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
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
    document
      .querySelectorAll<HTMLElement>('.reveal-words')
      .forEach((n) => wordsObserver.observe(n))

    return () => {
      if (openingTimer) {
        window.clearTimeout(openingTimer)
      }
      window.removeEventListener('resize', updateOpeningTarget)
      window.removeEventListener('scroll', handleScroll)
      revealObserver.disconnect()
      sceneObserver.disconnect()
      keywordObserver.disconnect()
      wordsObserver.disconnect()
    }
  }, [])

  return null
}
