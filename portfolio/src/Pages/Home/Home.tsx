import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <section className="hero-wrap js-fullheight">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
          <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center">
          	<div className="text text-center">
          		<span className="subheading">Hey! I am</span>
		  				<h1>Ronaldo Fredrickson</h1>
			  				<h2>I'm a 
								  <span
								     className="txt-rotate"
								     data-period="2000"
								     data-rotate='[ "Web Designer.", "Developer.", "Photographer.", "Marketer.", "Blogger" ]'>
                                        Web Developer
                                     </span>
								</h2>
							</div>
            </div>
          </div>
        </div>
      <div className="mouse">
				<a href="#" className="mouse-icon">
					<div className="mouse-wheel"><span className="ion-ios-arrow-round-down"></span></div>
				</a>
			</div>
    </section>
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Home</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>About</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Services</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Projects</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Web Design</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Web Development</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Business Strategy</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Data Analysis</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Graphic Design</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
	                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
	                <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">

            <p>
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Home