/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsx jsx */

import { jsx, Container } from 'theme-ui'
import { Component } from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
// import { Link } from 'gatsby'
import illustration from '../../../static/logos/illustration.svg'
import fluid from '../../../static/logos/svg/fluid.svg'
import oval from '../../../static/logos/svg/Oval-illustration.svg'
// import './testimonial.css'

class Testimonials extends Component {
  render() {
    // const { config } = this.props
    // const url = config.siteRss

    return (
      <Container>
        <h3 className="text-4xl text-center bold ">Testimonials</h3>
        <Carousel
          slidesPerPage={2}
          autoPlay={2000}
          animationSpeed={1000}
          infinite
          breakpoints={{
            640: {
              slidesPerPage: 1,
              arrows: false,
            },
            900: {
              slidesPerPage: 2,
              arrows: false,
            },
          }}
        >
          <div className="testimonial__content p-12">
            <div className="testimonial__content-item">
              <h3 className="text-2xl font-bold">
                Get to know Pokooi, and increase your next level streaming
                experience
              </h3>
              <p className="text-xl mt-6">
                <span>
                  <a href="#">hello@pokooi.com</a>
                </span>
              </p>
            </div>
            <div className="testimonial__content-item">
              <p className="text-xl">
                639 Heavens bridge, La meridia +62-202-555-0105 -
                +62-202-555-0234 Working hours: 8AM - 5PM
              </p>
            </div>
          </div>
          <div className="testimonial__content p-12">
            <div className="testimonial__content-item">
              <h3 className="text-2xl font-bold">
                Get to know Pokooi, and increase your next level streaming
                experience
              </h3>
              <p className="text-xl mt-6">
                <span>
                  <a href="#">hello@pokooi.com</a>
                </span>
              </p>
            </div>
            <div className="testimonial__content-item">
              <p className="text-xl">
                639 Heavens bridge, La meridia +62-202-555-0105 -
                +62-202-555-0234 Working hours: 8AM - 5PM
              </p>
            </div>
          </div>
          <div className="testimonial__content p-12">
            <div className="testimonial__content-item">
              <h3 className="text-2xl font-bold">
                Get to know Pokooi, and increase your next level streaming
                experience
              </h3>
              <p className="text-xl mt-6">
                <span>
                  <a href="#">hello@pokooi.com</a>
                </span>
              </p>
            </div>
            <div className="testimonial__content-item">
              <p className="text-xl">
                639 Heavens bridge, La meridia +62-202-555-0105 -
                +62-202-555-0234 Working hours: 8AM - 5PM
              </p>
            </div>
          </div>
        </Carousel>
      </Container>
    )
  }
}

export default Testimonials