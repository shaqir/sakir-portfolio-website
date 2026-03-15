import { useScrollReveal } from '@hooks'
import { testimonials } from '@data/siteData'
import './Testimonials.css'

export default function Testimonials() {
  const ref = useScrollReveal()

  return (
    <section className="section" ref={ref}>
      <div className="container container--wide">
        <div className="section-header section-header--centered reveal">
          <p className="section-eyebrow">Testimonials</p>
          <h2 className="section-headline section-headline--centered">What colleagues say.</h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div className={`testimonial reveal reveal-delay-${Math.min(i + 1, 3)}`} key={t.name}>
              <blockquote className="testimonial__quote">{t.quote}</blockquote>
              <div className="testimonial__author">
                <span className="testimonial__avatar">{t.initials}</span>
                <div>
                  <span className="testimonial__name">{t.name}</span>
                  <span className="testimonial__role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
