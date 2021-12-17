import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import Footer from '../components/footer'
import Header from '../components/header'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skilline</title>
        <meta name="description" content="Online Learning Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <Header />
      <main className='container mx-auto'>
        <section className='my-10 text-center'>
          <h2>Trusted by 5,000+ Companies Worldwide</h2>
          <div className='flex flex-wrap justify-evenly mx-auto items-center py-8 gap-y-5'>
            <Image src="/img/socials/google.svg" width={100} height={50} alt='' layout='intrinsic' />
            <Image src="/img/socials/netflix.svg" width={100} height={50} alt='' layout='intrinsic' />
            <Image src="/img/socials/airbnb.svg" width={100} height={50} alt='' layout='intrinsic' />
            <Image src="/img/socials/amazon.svg" width={100} height={50} alt='' layout='intrinsic' />
            <Image src="/img/socials/facebook.svg" width={100} height={50} alt='' layout='intrinsic' />
            <Image src="/img/socials/amazon.svg" width={100} height={50} alt='' layout='intrinsic' />
          </div>
        </section>

        <section className='text-center px-8'>
          <h2 className='text-secondary xs:mb-4 text-2xl font-bold tracking-wide'>All-In-One <span className="text-primary">Cloud Software</span></h2>
          <p>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
          <div className='flex flex-wrap justify-between gap-10 xs:gap-y-24 pt-20 mx-auto'>
            <Card imgSrc="/img/billing.svg" title="Online Billing, Invoicing, & Contracts" desc="Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts" />
            <Card imgSrc="/img/scheduling.svg" title="Easy Scheduling & Attendance Tracking" desc="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance" />
            <Card imgSrc="/img/customers.svg" title="Customer Tracking" desc="Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization" />
          </div>
        </section>

        <section className='text-center px-4'>
          <h1 className='text-secondary text-2xl font-bold tracking-wide xs:mt-20 mb-5'>What is <span className='text-primary'>Skilline?</span></h1>
          <p className='xs:w-full xs:px-8 md:w-2/3 mx-auto leading-loose mt-6 mb-10'>
            Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
          </p>
          <div className='flex flex-wrap gap-7 justify-center'>
            <div className='relative'>
              <div className='absolute z-10 top-1/2  left-1/2 -translate-x-2/4 -translate-y-2/4'>
                <h1 className='uppercase text-2xl font-bold text-white mb-3'>For Instructors</h1>
                <button className="xs:py-2 xs:px-4 xs:text-sm py-4 px-8 border border-white rounded-full text-white">Start a class today</button>
              </div>
              <Image src="/img/instructor.svg" width={500} height={300} layout="intrinsic" alt='' />
            </div>
            <div className='relative'>
              <div className='absolute z-10 top-1/2  left-1/2 -translate-x-2/4 -translate-y-2/4'>
                <h1 className='uppercase text-2xl font-bold text-white mb-3'>For students</h1>
                <button className="xs:py-2 xs:px-4 xs:text-sm py-4 px-8 rounded-full text-white bg-sky-400/80">Enter access code</button>
              </div>
              <Image src="/img/students.svg" width={500} height={300} layout="intrinsic" alt='' />
            </div>
          </div>
        </section>

        <section className='flex xs:flex-col justify-center items-center py-10 px-4'>
          <div className="xs:order-1 xs:w-full xs:px-4 w-1/2">
            <div className="bg-[url('../public/img/orange-circle.svg')] bg-contain bg-left-bottom bg-no-repeat">
              <h1 className='text-secondary font-medium xs:text-xl text-2xl xs:leading-normal lg:leading-loose mt-4'>Everything you can do in a physical classroom, <span className='text-primary'>you can do with Skilline</span></h1>
              <p className='leading-loose my-6'>Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
            </div>
            <p className='underline'>Learn more</p>
          </div>
          <div className="xs:w-full w-1/2 lg:text-center">
            <div className='relative'>
              <Image src="/img/classroom.svg" width={500} height={300} layout="responsive" alt='' />
              {/* <Image src="/img/classroom.svg" width={500} height={300} layout="intrinsic" alt='' /> */}
            </div>
          </div>
        </section>

        <section className='text-center px-8'>
          <h1 className='text-secondary font-medium xs:text-2xl text-3xl'>Our <span className='text-primary'>Features</span></h1>
          <p className='my-5'>This very extraordinary feature, can make learning activities more efficient</p>
          <div className='flex xs:flex-col justify-center items-center'>
            <div className='xs:w-full w-2/3 relative'>
              <Image src="/img/ui-classroom.svg" width={500} height={300} layout="responsive" alt='' />
            </div>
            <div className='xs:w-full w-1/3 text-left'>
              <h2 className='text-secondary font-medium xs:text-xl xs:mt-4 text-2xl leading-normal mb-8'>A <span className='text-primary'>user</span> interface designed for the classroom</h2>
              <div className='leading-loose flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                  <Image src="/img/puce1.svg" width={50} height={50} layout="intrinsic" alt='' />
                  <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                </div>
                <div className='flex items-center gap-4'>
                  <Image src="/img/puce2.svg" width={50} height={50} layout="intrinsic" alt='' />
                  <p>TA’s and presenters can be moved to the front of the class.</p>
                </div>
                <div className='flex items-center gap-4'>
                  <Image src="/img/users2.svg" width={50} height={50} layout="intrinsic" alt='' />
                  <p>Teachers can easily see all students and class data at one time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='flex xs:flex-col xs:gap-y-4 items-center my-20 px-8'>
          <div className='xs:w-full order-2 w-1/2'>
            <div className='xs:w-full w-96 mx-auto leading-loose'>
              <h1 className='text-secondary font-medium xs:text-2xl text-3xl mb-4'><span className='text-primary'>Tools</span> For Teachers And Learners</h1>
              <p>Class has a dynamic set of teaching tools built to be deployed and used during class.
                Teachers can handout assignments in real-time for students to complete and submit.</p>
            </div>
          </div>
          <div className='xs:w-full w-1/2'>
            <Image src="/img/tools.svg" width={500} height={300} layout="intrinsic" alt='Tools' />
          </div>
        </section>

        <section className='flex xs:flex-col xs:gap-y-4 px-8 items-center my-20'>
          <div className='xs:w-full w-1/2'>
            <Image src="/img/assessments.svg" width={400} height={400} layout="responsive" alt='Tools' />
          </div>
          <div className='xs:w-full w-1/2'>
            <div className='xs:w-full w-96 mx-auto leading-loose'>
              <h1 className='text-secondary font-medium xs:text-2xl text-3xl mb-4'>Assessments, <span className='text-primary'>Quizzes</span>, Tests</h1>
              <p>Easily launch live assignments, quizzes, and tests.
                Student results are automatically entered in the online gradebook.</p>
            </div>
          </div>
        </section>

        <section className='flex xs:flex-col xs:gap-y-4 px-8 items-center'>
          <div className='xs:w-full xs:order-2 w-1/2'>
            <div className='xs:w-full w-96 mx-auto leading-loose'>
              <h1 className='text-secondary font-medium xs:text-2xl text-3xl mb-4'><span className='text-primary'>Class Management</span> Tools for Educators</h1>
              <p>Class has a dynamic set of teaching tools built to be deployed and used during class.
                Teachers can handout assignments in real-time for students to complete and submit.</p>
            </div>
          </div>
          <div className='xs:w-full w-1/2 relative'>
            <Image src="/img/class-management.svg" width={500} height={300} layout="intrinsic" alt='Tools' />
          </div>
        </section>

        <section className='flex xs:flex-col items-center xs:py-16 py-20 px-8'>
          <div className='xs:w-full w-1/2'>
            <Image src="/img/one-to-one.svg" width={500} height={400} layout="responsive" alt='Tools' />
          </div>
          <div className='xs:w-full w-1/2'>
            <div className='xs:w-full w-96 mx-auto leading-loose'>
              <h1 className='text-secondary font-medium xs:text-2xl text-3xl mb-4'>One-on-One <span className='block text-primary'>Discussions</span></h1>
              <p>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
            </div>
          </div>
        </section>

        <div className="text-center mb-20">
          <button className="xs:py-2 xs:px-4 py-4 px-8 border border-primary rounded-full text-primary">See more features</button>
        </div>

        <section className='flex items-center my-20 px-8'>
          <div className='xs:hidden w-1/2'>
            <Image src="/img/education-tools.svg" width={500} height={300} layout="responsive" alt='Tools' />
          </div>
          <div className='xs:w-full w-1/2'>
            <div className='xs:w-full w-[26rem] mx-auto leading-loose'>
              <div className='flex gap-4 items-center mb-4'>
                <hr className="w-12" />
                <h1 className='uppercase tracking-wider font-light'>Integrations</h1>
              </div>
              <h2 className='text-secondary font-medium xs:text-2xl text-3xl mb-4'>200+ educational tools and platform <span className='text-primary'>integrations</span></h2>
              <p>Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p>
              <button className="xs:py-2 xs:px-4 py-4 px-8 mt-4 border border-primary rounded-full text-primary">See All Integrations</button>
            </div>
          </div>
        </section>

        <section className='flex xs:flex-col xs:gap-y-5 items-center my-20 px-8'>
          <div className='xs:w-full w-1/2 self-start'>
            <div className='xs:w-full w-[26rem] mx-auto leading-loose'>
              <div className='flex gap-4 items-center mb-4'>
                <hr className="xs:w-full w-12" />
                <h1 className='uppercase tracking-wider font-light'>Testimonial</h1>
              </div>
              <h2 className='text-secondary font-medium xs:text-2xl text-3xl mb-4'>What They Say?</h2>
              <p>Skilline has got more than 100k positive ratings from our users around the world.</p>
              <p>Some of the students and teachers were greatly helped by the Skilline.</p>
              <p>Are you too? Please give your assessment</p>
              <div className='xs:w-full w-72 pl-4 justify-between items-center flex mt-4 border border-primary rounded-full text-primary'>
                <div>Write your assessment</div>
                <div className='border rounded-full xs:h-10 xs:w-10 h-14 w-14 flex justify-center items-center'>→</div>
              </div>
            </div>
          </div>
          <div className='xs:w-full w-1/2'>
            <Image src="/img/testimonial.svg" width={500} height={500} layout="responsive" alt='Tools' />
          </div>
        </section>

        <section className='pb-20 px-8'>
          <h1 className='text-2xl font-medium text-center text-secondary'>Lastest News and Resources</h1>
          <p className='text-center py-10'>See the developments that have occurred to Skillines in the world</p>
          <div className='flex xs:flex-col gap-10'>
            <div className='xs:w-full w-1/2 flex flex-col justify-between'>
              <div className=''>
                <Image src="/img/computer.svg" width={500} height={300} layout="responsive" alt='' />
                <div>
                  <span className='uppercase rounded-full bg-[#F4C467] text-purple xs:px-2 px-4 py-1 xs:text-xs text-sm'>news</span>
                </div>
              </div>
              <h3 className="text-purple my-5 text-lg">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
              <p className="text-sm leading-loose">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
              <p className='underline text-sm mt-3'>Read more</p>
            </div>
            <div className='flex flex-col justify-between xs:w-full gap-y-7 w-1/2'>
              <div className="flex">
                <div className='relative xs:hidden'>
                  <Image src="/img/girl-with-tablet.svg" width={500} height={300} layout="intrinsic" alt="" />
                </div>
                <div>
                  <h3 className="text-purple leading-relaxed">Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h3>
                  <p className='text-sm mt-3 leading-loose'>Class Technologies Inc., the company that created Class,...</p>
                </div>
              </div>
              <div className="flex">
                <div className='xs:hidden'>
                  <Image src="/img/meeting.svg" width={500} height={300} layout="intrinsic" alt="" />
                </div>
                <div>
                  <h3 className="text-purple leading-relaxed">Zoom’s earliest investors are betting millions on a better Zoom for schools</h3>
                  <p className='text-sm mt-3 leading-loose'>Zoom was never created to be a consumer product. Nonetheless, the...</p>
                </div>
              </div>
              <div className="flex">
                <div className='xs:hidden'>
                  <Image src="/img/cat.svg" width={500} height={300} layout="intrinsic" alt="" />
                </div>
                <div>
                  <h3 className="text-purple leading-relaxed">Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</h3>
                  <p className='text-sm mt-3 leading-loose'>This year, investors have reaped big financial returns from betting on Zoom...</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Layout />
    </div>
  )
}
