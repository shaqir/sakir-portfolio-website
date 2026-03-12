import { useScrollReveal } from '@hooks'
import { testimonials } from '@data/siteData'
import './Testimonials.css'

export default function Testimonials() {
  const ref = useScrollReveal()

  return (
    <section className="section section--alt" ref={ref}>
      <div className="container">
        <div className="reveal">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What colleagues say</h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div className={`testimonial-card reveal reveal-delay-${Math.min(i + 1, 3)}`} key={t.name}>
              <span className="testimonial-card__quote">"</span>
              <blockquote>{t.quote}</blockquote>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
