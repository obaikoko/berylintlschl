import About from '@/components/About';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us - Beryl International Schools',
  description:
    'Learn more about Beryl International Schools, its mission, vision, values, and the excellent education provided to students in Calabar, Cross River State.',
  keywords:
    'About Beryl International Schools, Calabar school, school mission, school values, education in Calabar, Cross River State',
};

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='relative'>
        <img
          src='/images/class3.jpg'
          className='w-full h-80 object-cover'
          alt='About Beryl International Schools'
        />
        <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center'>
          <h1 className='text-white md:text-4xl p-2 font-bold'>
            About Beryl International Schools
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className='max-w-7xl mx-auto px-4 py-12 md:flex'>
        {/* Text Section */}
        <div className='md:w-1/2 px-6'>
          <h1 className='text-3xl font-semibold mb-6'>
            About Beryl International Schools
          </h1>
          <p className='text-lg mb-6'>
            Beryl International Schools is a premier educational institution
            located in Ikot Eneobong, Calabar, Cross River State, Nigeria.
            Offering a comprehensive curriculum from creche/nursery to secondary
            levels, Beryl is dedicated to providing students with an enriching
            and holistic educational experience. The school blends academic
            rigor with character development, ensuring that students are not
            only prepared for academic success but are also instilled with
            strong moral values and a sense of responsibility.
          </p>
          <p className='text-lg mb-6'>
            The school's vision is to inspire excellence, fostering an
            environment where students are encouraged to think critically,
            creatively, and globally. With a focus on innovation and
            inclusivity, Beryl International Schools aims to nurture future
            leaders who will make meaningful contributions to society.
          </p>
          <p className='text-lg mb-6'>
            Beryl International School’s core values—excellence, integrity,
            respect, and community—form the foundation of its educational
            philosophy. These values are evident in every aspect of the school,
            from its strong academic programs to its emphasis on character
            building and leadership.
          </p>
          <p className='text-lg mb-6'>
            The birth of Beryl International Schools, Ikot-Eneobong Federal
            Housing Estate is a supernatural one. God's grace and mercy brought
            us here, and the same will sustain us and every activity embarked
            upon. This journey started on the 12th day of September, 2016 when
            the school resumed for its first session’s academic activities with
            four pupils and four staff in three classrooms and three offices as
            a springboard. To God's glory, today, Beryl International Schools
            has gotten all the approvals needed for its full and optimal
            operation and functionalities from Primary to Secondary levels, even
            as we expect to go higher in our quest for excellence and global
            recognition. In Beryl International Schools, we believe that
            learning is fun, and we keep fit to learn. This belief has powered
            our numerous activities such as: sport time every Friday, debates,
            quiz, mathematics competitions, excursions, arts exhibitions, music
            and choreography, cultural displays among others. These activities
            have not only created room for fun but have triggered the creative
            and innovative skills in the children which in no doubt will make
            them excel in all walks of life. In our quest to develop and train
            children who will stand out in today's world of technology, we
            combine virtual learning with classroom instructions. This also
            helped us to curb the challenges posed by the 2020 Covid-19 academic
            lockdown. Beryl International Schools has over the years grown to
            having many classrooms, a standard play court, Physics, Chemistry,
            Agriculture, Computer, Home Economics laboratories, Music and
            Creative Arts studios, and a school farm to ensure compliance to
            standards. Our Créche is a place every parent will love for their
            babies with an array of qualified, dedicated, experienced, and
            God-fearing teachers.
          </p>
        </div>

        {/* Head of Administration Section */}
        <div className='md:w-1/2 px-6 mt-10 md:mt-0'>
          <div className='bg-white shadow-lg rounded-lg p-6'>
            <h2 className='text-2xl font-semibold text-center mb-6'>
              Head of Administration
            </h2>
            <img
              src='/images/proprietress.jpg'
              alt='Mrs. Edith Iwuji Nneka - Head of Administration'
              className='w-full h-64 object-cover rounded-lg mb-6'
            />
            <p className='text-lg mb-6'>
              Mrs. Edith Iwuji Nneka, the Head of Administration at Beryl
              International Schools, is a seasoned educational leader with a
              deep commitment to creating an environment where students thrive
              both academically and personally. With her extensive experience in
              academic and administrative roles, she ensures the smooth running
              of the school’s operations and promotes the school's core values
              of excellence, integrity, and respect.
            </p>
            <p className='text-lg mb-6'>
              Mrs. Nneka believes in fostering a nurturing environment where
              students can grow intellectually, emotionally, and socially. Her
              leadership and passion for education continue to drive the
              school's mission of inspiring future leaders.
            </p>
          </div>
          <div className='bg-white text-gray-800 p-10 md:p-20 lg:p-24 max-w-4xl mx-auto my-10 shadow-lg rounded-lg'>
            <h1 className='text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6'>
              INTERNS HONAL
            </h1>

            <section className='mb-8'>
              <h2 className='text-xl md:text-2xl font-semibold text-gray-900 mb-3'>
                Our Motto
              </h2>
              <p className='text-lg text-gray-700'>
                Citadel of Wisdom and Excellence
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl md:text-2xl font-semibold text-gray-900 mb-3'>
                Our Belief
              </h2>
              <p className='text-lg text-gray-700'>
                God is the giver of knowledge.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl md:text-2xl font-semibold text-gray-900 mb-3'>
                Our Vision
              </h2>
              <p className='text-lg text-gray-700'>
                To nurture and build great leaders of tomorrow.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl md:text-2xl font-semibold text-gray-900 mb-3'>
                Values
              </h2>
              <ul className='list-disc list-inside text-lg text-gray-700 space-y-2'>
                <li>
                  <strong>Safety</strong>: We value a safe and secure learning
                  environment.
                </li>
                <li>
                  <strong>Uniqueness</strong>: Every child is unique, and their
                  uniqueness should be valued.
                </li>
                <li>
                  <strong>Creation of Active Learning Environment</strong>: We
                  value the "CAN DO" attitude, which nurtures a love for
                  learning. We provide opportunities for participatory learning
                  and learning by doing.
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl md:text-2xl font-semibold text-gray-900 mb-3'>
                Aims, Goals, and Objectives
              </h2>
              <ul className='list-disc list-inside text-lg text-gray-700 space-y-2'>
                <li>
                  Provide opportunities for children to excel in sports and
                  arts.
                </li>
                <li>Emphasize science and technology education.</li>
                <li>Provide a conducive environment for learning.</li>
                <li>
                  Offer personalized learning experiences for all to achieve.
                </li>
                <li>Identify and satisfy the unique needs of each child.</li>
                <li>
                  Build trusted and healthy relationships so learners feel safe
                  and comfortable.
                </li>
                <li>Provide qualified and well-motivated teachers.</li>
                <li>
                  Foster resourceful, creative, and imaginative thinking in
                  children.
                </li>
                <li>
                  Instill discipline and entrepreneurial instincts in children.
                </li>
                <li>Prepare children for excellent interpersonal relations.</li>
                <li>
                  Build faith, moral, and social values to enable constructive
                  judgment.
                </li>
                <li>
                  Encourage hard work and responsible behavior in learners.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Administrator Section */}
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <h2 className='text-2xl font-semibold text-center mb-6'>
            Administrator
          </h2>
          <img
            src='/images/admin2.jpg'
            alt='Mr. Collins Ogoigbe - Administrator'
            className='w-full h-64 object-cover rounded-lg mb-6'
          />
          <p className='text-lg mb-6'>
            Mr. Collins Ogoigbe, the Administrator at Beryl International
            Schools, plays a pivotal role in ensuring the effective management
            of the school. With a focus on operational excellence and student
            welfare, he supports the administrative team in delivering a
            top-quality educational experience.
          </p>
          <p className='text-lg mb-6'>
            Mr. Ogoigbe's dedication to organizational leadership and innovation
            helps to create a positive, well-structured learning environment for
            all students and staff.
          </p>
        </div>
      </div>

      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
