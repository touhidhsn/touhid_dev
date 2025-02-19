import Link from 'next/link';

export default function Experience2() {
  return (
    <>
      <section id='portfolio' className='section-experience pt-5'>
        <div className='container'>
          <div className='rounded-3 border border-1 position-relative overflow-hidden'>
            <div className='box-linear-animation position-relative z-1'>
              <div className='p-lg-8 p-md-6 p-3 position-relative z-1'>
                <div className='d-flex align-items-center'>
                  <svg
                    className='text-primary-2 me-2'
                    xmlns='http://www.w3.org/2000/svg'
                    width={5}
                    height={6}
                    viewBox='0 0 5 6'
                    fill='none'>
                    <circle cx='2.5' cy={3} r='2.5' fill='#A8FF53' />
                  </svg>
                  <span className='text-linear-4 d-flex align-items-center'>
                    {' '}
                    Expericence{' '}
                  </span>
                </div>
                <h3>
                  +5
                  <span className='text-300'>years of </span>
                  passion{' '}
                  <span className='text-300'>
                    for <br />
                    web developer & designer
                  </span>
                </h3>
                <div className='row mt-5'>
                  <div className='col-lg-4'>
                    <div className='d-flex flex-column gap-2'>
                      <Link
                        href='#'
                        className='technology border border-1 rounded-3 p-3'>
                        <div className='d-flex align-items-center gap-2'>
                          <h5 className='mb-1'>
                            Imprint <br /> Dhaka LTD.
                          </h5>
                          <div className='d-flex flex-column ms-2'>
                            <p>
                              Senior Designer
                              <br />
                              <span>Graphic Designer</span> <br />
                              <span className='text-300'>2019 to present</span>
                            </p>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href='#'
                        className='technology border border-1 rounded-3 p-3'>
                        <div className='d-flex align-items-center gap-2'>
                          <h5 className='mb-1'>Fiverr.</h5>
                          <div className='d-flex flex-column ms-2'>
                            <p>
                              Frontend Developer
                              <br />
                              <span>React JS</span> <br />
                              <span className='text-300'>2019-2022</span>
                            </p>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href='#'
                        className='technology border border-1 rounded-3 p-3'>
                        <div className='d-flex align-items-center gap-2'>
                          <h5 className='mb-1'>Open IT</h5>
                          <div className='d-flex flex-column ms-2'>
                            <p>
                              Frontend Web developer
                              <br />
                              <span>WordPress</span> <br />
                              <span className='text-300'>2018-2019</span>
                            </p>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href='#'
                        className='technology border border-1 rounded-3 p-3'>
                        <div className='d-flex align-items-center gap-2'>
                          <h5 className='mb-1'>Dewdrop</h5>
                          <div className='d-flex flex-column ms-2'>
                            <p>
                              Frontend Web developer
                              <br />
                              <span>ReactJS</span> <br />
                              <span className='text-300'>2022-2023</span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className='col-lg-8 ps-lg-5 mt-5 mt-lg-0'>
                    <h6 className='text-linear-4'>Frontend Web Developer</h6>
                    <ul className='mt-4'>
                      <li className='text-dark mb-3'>
                        Led development of scalable web applications,{' '}
                        <span className='text-secondary-2'>
                          improving performance
                        </span>{' '}
                        and user experience for millions of users.
                      </li>
                      <li className='text-dark mb-3'>
                        Implemented machine learning algorithms to enhance
                        search functionality.
                      </li>
                      <li className='text-dark mb-3'>
                        Collaborated with cross-functional teams to integrate
                        new features seamlessly.
                      </li>
                    </ul>
                    <div className='d-flex flex-wrap align-items-center gap-3 mt-7'>
                      <Link
                        href='#'
                        className='text-300 border border-1 px-3 py-1'>
                        HTML
                      </Link>
                      <Link
                        href='#'
                        className='text-300 border border-1 px-3 py-1'>
                        CSS
                      </Link>
                      <Link
                        href='#'
                        className='text-300 border border-1 px-3 py-1'>
                        JavaScript
                      </Link>
                      <Link
                        href='#'
                        className='text-300 border border-1 px-3 py-1'>
                        ReactJS
                      </Link>
                      <Link
                        href='#'
                        className='text-300 border border-1 px-3 py-1'>
                        NextJS
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className='position-absolute top-0 start-0 z-0'
                src='assets/imgs/home-page-2/services/bg.png'
                alt='zelio'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
