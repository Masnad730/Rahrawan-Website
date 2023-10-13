import React from 'react'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout/Layout'
import Header from '../components/Header'

export default function Education() {
  const [toggleState, setToggleState] = React.useState(0)
  return (
    <Layout
      title='Education - Rahrawan Travels'
      canonical='https://rahrawan.af/education/'
      descriptionContent=''
    >
      <div className='container'>
        {/* Hero Section */}
        <div className='hero-page'>
          <div className='hero-wrap'>
            <Header active='services' />
          </div>
          <div className='hero__box'>
            <Fade up>
              <h1 className='hero__title'>Education</h1>
              <div className='hero__pagination'>
                <span className='hero__pagination-item'>
                  <Link href='/'>home</Link>
                </span>
                <span className='hero__pagination-item'>&#8594;</span>
                <span className='hero__pagination-item'>
                  <Link href='#'>education</Link>
                </span>
              </div>
            </Fade>
          </div>
        </div>

        <section className='svc-area'>
          <Fade up>
            <div className='svc-area__header'>
              <h3 className='svc-area__header-heading'>our service</h3>
              <h2 className='heading-primary text-center uppercase'>Education</h2>
              <div className='relative l-separator__center'></div>
              <p className='svc-area__header-txt'>
                Education is not just about going to school and getting a degree. It’s about
                widening your knowledge and absorbing the truth of life.
              </p>
            </div>
          </Fade>
          <Fade up>
            <div className='row svc-area__nav-wrap'>
              <div className='svc-area__nav'>
                <div className='svc-area__nav-list'>
                  <a
                    onClick={() => setToggleState(0)}
                    className={
                      toggleState === 0 ? 'svc-area__nav-item selected' : 'svc-area__nav-item'
                    }
                  >
                    educational counseling
                  </a>
                  <a
                    onClick={() => setToggleState(1)}
                    className={
                      toggleState === 1 ? 'svc-area__nav-item selected' : 'svc-area__nav-item'
                    }
                  >
                    university admission advisory
                  </a>
                  <a
                    onClick={() => setToggleState(2)}
                    className={
                      toggleState === 2 ? 'svc-area__nav-item selected' : 'svc-area__nav-item'
                    }
                  >
                    student profile analysis
                  </a>
                  <a
                    onClick={() => setToggleState(3)}
                    className={
                      toggleState === 3 ? 'svc-area__nav-item selected' : 'svc-area__nav-item'
                    }
                  >
                    visa assistance
                  </a>
                </div>
              </div>
            </div>
          </Fade>
          <Fade up>
            <div className='row svc-area__row'>
              <div className='col-3-of-4 svc-area__wrap svc-area__wrap--tab-content'>
                <div
                  className={toggleState === 0 ? 'tab-content tab-content__active' : 'tab-content'}
                >
                  <div className='svc-area__img-box'>
                    <img
                      className='svc-area__img'
                      src='/images/services/educational-counseling.jpg'
                      alt='Educational Counseling'
                    />
                  </div>
                  <div className='svc-area__tab-content'>
                    <h2 className='heading-primary capitalize'>educational counseling</h2>
                    <p className='svc-area__txt'>
                      Owing to intense competition and peer pressure students often face a dilemma
                      to make the right career choice for them. This leads to a lot of confusion,
                      doubts in them and make students succumb to stress, anxiety and depression.
                    </p>
                    <p className='svc-area__txt'>
                      This is where education counselling comes into picture. Here students are
                      advised not just on ways to build the right career path for them but are
                      provided support to help them grow as individuals and professionals.
                    </p>
                  </div>
                </div>
                <div
                  className={toggleState === 1 ? 'tab-content tab-content__active' : 'tab-content'}
                >
                  <div className='svc-area__img-box'>
                    <img
                      className='svc-area__img'
                      src='/images/services/university-admission-advisory.jpg'
                      alt='University Admission Advisory'
                    />
                  </div>
                  <div className='svc-area__tab-content'>
                    <h2 className='heading-primary capitalize'>University Admission Advisory</h2>
                    <p className='svc-area__txt'>
                      The rate of admissions to competitive schools has decreased in recent years
                      due to the swell of qualified applicants. Increasingly, admissions officers
                      are depending upon the intangibles essays, letters of recommendation,
                      interviews to guide their decisions. With so many applicants presenting
                      similar scores and grades, admissions professionals are utilizing these
                      supporting materials to differentiate candidates. Students who want to ‘tip’
                      the scale in their favor can benefit from the professional experience that our
                      experienced team offers.
                    </p>
                    <p className='svc-area__txt'>
                      We are able to provide the individualized attention that many guidance
                      counselors cannot offer. We strongly believe that a majority of high school
                      guidance counselors are qualified, well trained, dedicated, and very
                      knowledgeable about the admissions process. Unfortunately, there simply is a
                      limited amount of time and attention that a guidance counselor can give to any
                      one individual student. In the U.S., the ratio of students to guidance
                      counselors is 478:1. Counselors also have a myriad of duties besides college
                      counseling. We limit the number of students we work with so our students
                      receive the attention and assistance they require. This can be particularly
                      useful for students who have trouble organizing themselves, difficulty getting
                      started, or who thrive on structure and one-on-one attention.
                    </p>
                    <p className='svc-area__txt'>
                      Our aim is to empower students. The choice of college is the first of many
                      life-altering, independent decisions they will make. The stress they face is
                      enormous and often overwhelming for even the most gifted students. Our goal is
                      to decrease this stress as much as possible by making the admissions process
                      more manageable.
                    </p>
                    <p className='svc-area__txt'>
                      We also recognize that the admissions process may be confusing and quite
                      stressful for parents. We make every attempt to provide parents with
                      information, guidance, and support during this period. Senior year in high
                      school is naturally a time of separation from parents. As a result, the
                      application process is often fraught with struggles for control and autonomy.
                      We try to minimize this struggle so that we manage the admissions process and
                      you can interact with your children around less charged issues.
                    </p>
                  </div>
                </div>
                <div
                  className={toggleState === 2 ? 'tab-content tab-content__active' : 'tab-content'}
                >
                  <div className='svc-area__img-box'>
                    <img
                      className='svc-area__img'
                      src='/images/services/student-profile-analysis.jpg'
                      alt='Student Profile Analysis'
                    />
                  </div>
                  <div className='svc-area__tab-content'>
                    <h2 className='heading-primary capitalize'>Student Profile Analysis</h2>
                    <p className='svc-area__txt'>
                      We do not limit our analysis just in counseling, application or choosing the
                      university or college, we also conduct a proper student profile analysis so
                      that the best options can be provided to the students. We believe that
                      students would never want to land in a country with a course, which is not
                      suitable as per his/her, interest and career goals. We have great experts in
                      our counseling team, who have the ability to assess the information provided
                      by the students. We ask students to provide their basic information so that we
                      may get to know about them. The basic information provided by students is
                      analyzed and assessed by experts to move further to identify which college,
                      university and country would be the best fit for the students as per his/her
                      profile.
                    </p>
                    <p className='svc-area__txt'>
                      To prepare a detailed student profile, we not only take basic information but
                      our counselors also brief students about a range of options. It means that it
                      is a process, where things start from a broad perspective, but we slowly
                      narrow it down to come up with the best choice for the students. It can only
                      be done with the proper profiling of the student. We also welcome parents of
                      students to get in touch with us so that we can make a comprehensive profile
                      of students. It is important to mention here that whatever information is
                      shared by students or his/her parents; we keep it confidential in the best
                      possible manner. So, you can share anything with us without worrying about the
                      confidentiality of the information.
                    </p>
                  </div>
                </div>
                <div
                  className={toggleState === 3 ? 'tab-content tab-content__active' : 'tab-content'}
                >
                  <div className='svc-area__img-box'>
                    <img
                      className='svc-area__img'
                      src='/images/services/visa-assistance.png'
                      alt='Visa Assistance'
                    />
                  </div>
                  <div className='svc-area__tab-content'>
                    <h2 className='heading-primary capitalize'>Visa Assistance</h2>
                    <p className='svc-area__txt'>
                      Rahrawan Travels possesses excellent relationships with overseas universities
                      and high commissions worldwide. That is why we can provide you with a seamless
                      visa applying experience, enabling you to confidently study at the destination
                      of your choice. With expertise across all countries, our team of highly
                      experienced and well-qualified visa consultants guide you through complex
                      preparation and submission of your visa application.
                    </p>
                    <p className='svc-area__txt'>
                      Our comprehensive assistance package is designed to ensure that you are fully
                      prepared even as we address all the visa requirements successfully. Get a
                      stress-free and hassle-free consultation and assistance on visa conditions and
                      requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-1-of-4 svc-area__wrap'>
                <div className='svc-value'>
                  <h4 className='heading-secondary svc-value__heading'>Our Core Values</h4>
                  <div className='svc-value__box'>
                    <div className='svc-value__icon-box'>
                      <i className='flaticon-customer svc-value__icon'></i>
                    </div>
                    <div className='svc-value__txt-box'>
                      <h3 className='svc-value__title'>Customer Responsiveness</h3>
                      <p className='svc-value__txt'>
                        Committed to provide quick and accurate response to our customer inquires.
                      </p>
                    </div>
                  </div>
                  <div className='svc-value__box'>
                    <div className='svc-value__icon-box'>
                      <i className='flaticon-guaranteed svc-value__icon'></i>
                    </div>
                    <div className='svc-value__txt-box'>
                      <h3 className='svc-value__title'>Quality</h3>
                      <p className='svc-value__txt'>
                        Exceeding your expectations by offering superb quality services with the
                        help of our professional team.
                      </p>
                    </div>
                  </div>
                  <div className='svc-value__box'>
                    <div className='svc-value__icon-box'>
                      <i className='flaticon-timeline svc-value__icon'></i>
                    </div>
                    <div className='svc-value__txt-box'>
                      <h3 className='svc-value__title'>Timeliness</h3>
                      <p className='svc-value__txt'>
                        Committed to provide services at the pre-specified time.
                      </p>
                    </div>
                  </div>
                  <div className='svc-value__box'>
                    <div className='svc-value__icon-box'>
                      <i className='flaticon-producer svc-value__icon'></i>
                    </div>
                    <div className='svc-value__txt-box'>
                      <h3 className='svc-value__title'>Fair Pricing</h3>
                      <p className='svc-value__txt'>
                        Fair and affordable rates for all of our services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </section>
      </div>
    </Layout>
  )
}
