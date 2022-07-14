import React from 'react';
import Image from 'next/image';
import DevHouseImg from '../public/asset/Dev-House.png';
import Link from 'next/link';
export default function Project_Card() {
  return (
    <>
      {' '}
      <section className='text-gray-600 body-font border-b border-gray-400'>
        <div className='container mx-auto flex px-20 py-24 md:flex-row flex-col items-center '>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-5xl text-4xl font-medium text-white'>
              Featured Projects
            </h1>
          </div>
        </div>

        <div className='container mx-auto flex  py-1 md:flex-row flex-col '>
          <div className='md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-emerald-400'>
              Dev House
            </h1>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <p className='mb-8 leading-relaxed text-xl text-white'>
              Chakra UI Pro provides a set of beautiful and <br />
              responsive React components to build your application, <br />{' '}
              marketing and eCommerce pages quicker.
            </p>
            <div className='flex justify-center'>
              <button className=' inline-flex text-gray-800 bg-emerald-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
                React
              </button>
              <button className='ml-4 inline-flex text-gray-800 bg-emerald-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
                Material UI
              </button>
              <button className='ml-4 inline-flex text-gray-800 bg-emerald-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
                Firebase
              </button>
              <button className='ml-4 inline-flex text-gray-800 bg-emerald-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
                Netlify
              </button>
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div className='flex w-full md:justify-start justify-center items-end'>
              <div className='relative mr-4 lg:w-full xl:w-1/2 w-2/4'>
                <div className='flex '>
                  <Link href='https://devhouse.live'>
                    <span className='text-white cursor-pointer inline-flex'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        focusable='false'
                        className='chakra-icon css-1sp98zc'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM16.3538 2.99501C16.5064 3.24631 16.6497 3.50705 16.7835 3.77461C17.7471 5.7017 18.3591 8.22981 18.4785 11H21.9506C21.5999 7.46752 19.4109 4.47581 16.3538 2.99501ZM21.9506 13H18.4785C18.3591 15.7702 17.7471 18.2983 16.7835 20.2254C16.6497 20.493 16.5064 20.7537 16.3538 21.005C19.4109 19.5242 21.5999 16.5325 21.9506 13ZM7.64617 21.005C7.49358 20.7537 7.35027 20.493 7.21649 20.2254C6.25294 18.2983 5.64088 15.7702 5.52146 13H2.04938C2.4001 16.5325 4.58908 19.5242 7.64617 21.005ZM2.04938 11H5.52146C5.64088 8.22981 6.25294 5.7017 7.21649 3.77461C7.35027 3.50705 7.49357 3.24631 7.64616 2.99501C4.58907 4.47581 2.4001 7.46752 2.04938 11ZM9.00534 4.66904C8.19882 6.28209 7.64175 8.49388 7.52347 11H11V2.28265C10.3273 2.65819 9.62819 3.42333 9.00534 4.66904ZM14.9947 4.66904C15.8012 6.28209 16.3582 8.49388 16.4765 11H13V2.28265C13.6727 2.65819 14.3718 3.42333 14.9947 4.66904ZM13 13H16.4765C16.3582 15.5061 15.8012 17.7179 14.9947 19.331C14.3718 20.5767 13.6727 21.3418 13 21.7174V13ZM9.00534 19.331C9.62819 20.5767 10.3273 21.3418 11 21.7174V13H7.52347C7.64175 15.5061 8.19882 17.7179 9.00534 19.331Z'
                          fill='currentColor'
                        ></path>
                      </svg>{' '}
                      &nbsp; &nbsp;{' '}
                      <span className='underline underline-offset-1 text-lg'>
                        {' '}
                        Website{' '}
                      </span>
                    </span>
                  </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link href='https://github.com/wisdomekpotu/devhouse'>
                    <span className='text-white cursor-pointer inline-flex'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        focusable='false'
                        className='chakra-icon css-1sp98zc'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M12 0.300003C5.4 0.300003 0 5.7 0 12.3C0 17.6 3.4 22.1 8.2 23.7C8.8 23.8 9 23.4 9 23.1C9 22.8 9 22.1 9 21.1C5.7 21.8 5 19.5 5 19.5C4.5 18.1 3.7 17.7 3.7 17.7C2.5 17 3.7 17 3.7 17C4.9 17.1 5.5 18.2 5.5 18.2C6.6 20 8.3 19.5 9 19.2C9.1 18.4 9.4 17.9 9.8 17.6C7.1 17.3 4.3 16.3 4.3 11.7C4.3 10.4 4.8 9.3 5.5 8.5C5.5 8.1 5 6.9 5.7 5.3C5.7 5.3 6.7 5 9 6.5C10 6.2 11 6.1 12 6.1C13 6.1 14 6.2 15 6.5C17.3 4.9 18.3 5.3 18.3 5.3C19 7 18.5 8.2 18.4 8.5C19.2 9.3 19.6 10.4 19.6 11.7C19.6 16.3 16.8 17.3 14.1 17.6C14.5 18 14.9 18.7 14.9 19.8C14.9 21.4 14.9 22.7 14.9 23.1C14.9 23.4 15.1 23.8 15.7 23.7C20.5 22.1 23.9 17.6 23.9 12.3C24 5.7 18.6 0.300003 12 0.300003Z'
                          fill='currentColor'
                        ></path>
                      </svg>
                      &nbsp; &nbsp;
                      <span className='underline underline-offset-1 text-lg'>
                        Github{' '}
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 '>
            <Image
              className='object-cover object-center rounded-3xl'
              alt='hero'
              src={DevHouseImg}
            />
          </div>
        </div>
        <div className='container mx-auto flex  py-20 md:flex-row flex-col '>
          <div className='md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-emerald-400'>
              Dev House
            </h1>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <p className='mb-8 leading-relaxed text-xl text-white'>
              Chakra UI Pro provides a set of beautiful and <br />
              responsive React components to build your application, <br />{' '}
              marketing and eCommerce pages quicker.
            </p>
            <div className='flex justify-center'>
              <button className=' inline-flex text-gray-800 bg-emerald-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
                React
              </button>
              <button className='ml-4 inline-flex text-gray-800 bg-emerald-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
                Material UI
              </button>
              <button className='ml-4 inline-flex text-gray-800 bg-emerald-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
                Firebase
              </button>
              <button className='ml-4 inline-flex text-gray-800 bg-emerald-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
                Netlify
              </button>
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div className='flex w-full md:justify-start justify-center items-end'>
              <div className='relative mr-4 lg:w-full xl:w-1/2 w-2/4'>
                <div className='flex '>
                  <Link href='https://devhouse.live'>
                    <span className='text-white cursor-pointer inline-flex'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        focusable='false'
                        className='chakra-icon css-1sp98zc'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM16.3538 2.99501C16.5064 3.24631 16.6497 3.50705 16.7835 3.77461C17.7471 5.7017 18.3591 8.22981 18.4785 11H21.9506C21.5999 7.46752 19.4109 4.47581 16.3538 2.99501ZM21.9506 13H18.4785C18.3591 15.7702 17.7471 18.2983 16.7835 20.2254C16.6497 20.493 16.5064 20.7537 16.3538 21.005C19.4109 19.5242 21.5999 16.5325 21.9506 13ZM7.64617 21.005C7.49358 20.7537 7.35027 20.493 7.21649 20.2254C6.25294 18.2983 5.64088 15.7702 5.52146 13H2.04938C2.4001 16.5325 4.58908 19.5242 7.64617 21.005ZM2.04938 11H5.52146C5.64088 8.22981 6.25294 5.7017 7.21649 3.77461C7.35027 3.50705 7.49357 3.24631 7.64616 2.99501C4.58907 4.47581 2.4001 7.46752 2.04938 11ZM9.00534 4.66904C8.19882 6.28209 7.64175 8.49388 7.52347 11H11V2.28265C10.3273 2.65819 9.62819 3.42333 9.00534 4.66904ZM14.9947 4.66904C15.8012 6.28209 16.3582 8.49388 16.4765 11H13V2.28265C13.6727 2.65819 14.3718 3.42333 14.9947 4.66904ZM13 13H16.4765C16.3582 15.5061 15.8012 17.7179 14.9947 19.331C14.3718 20.5767 13.6727 21.3418 13 21.7174V13ZM9.00534 19.331C9.62819 20.5767 10.3273 21.3418 11 21.7174V13H7.52347C7.64175 15.5061 8.19882 17.7179 9.00534 19.331Z'
                          fill='currentColor'
                        ></path>
                      </svg>{' '}
                      &nbsp; &nbsp;{' '}
                      <span className='underline underline-offset-1 text-lg'>
                        {' '}
                        Website{' '}
                      </span>
                    </span>
                  </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link href='https://github.com/wisdomekpotu/devhouse'>
                    <span className='text-white cursor-pointer inline-flex'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        focusable='false'
                        className='chakra-icon css-1sp98zc'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M12 0.300003C5.4 0.300003 0 5.7 0 12.3C0 17.6 3.4 22.1 8.2 23.7C8.8 23.8 9 23.4 9 23.1C9 22.8 9 22.1 9 21.1C5.7 21.8 5 19.5 5 19.5C4.5 18.1 3.7 17.7 3.7 17.7C2.5 17 3.7 17 3.7 17C4.9 17.1 5.5 18.2 5.5 18.2C6.6 20 8.3 19.5 9 19.2C9.1 18.4 9.4 17.9 9.8 17.6C7.1 17.3 4.3 16.3 4.3 11.7C4.3 10.4 4.8 9.3 5.5 8.5C5.5 8.1 5 6.9 5.7 5.3C5.7 5.3 6.7 5 9 6.5C10 6.2 11 6.1 12 6.1C13 6.1 14 6.2 15 6.5C17.3 4.9 18.3 5.3 18.3 5.3C19 7 18.5 8.2 18.4 8.5C19.2 9.3 19.6 10.4 19.6 11.7C19.6 16.3 16.8 17.3 14.1 17.6C14.5 18 14.9 18.7 14.9 19.8C14.9 21.4 14.9 22.7 14.9 23.1C14.9 23.4 15.1 23.8 15.7 23.7C20.5 22.1 23.9 17.6 23.9 12.3C24 5.7 18.6 0.300003 12 0.300003Z'
                          fill='currentColor'
                        ></path>
                      </svg>
                      &nbsp; &nbsp;
                      <span className='underline underline-offset-1 text-lg'>
                        Github{' '}
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 '>
            <Image
              className='object-cover object-center rounded-3xl'
              alt='hero'
              src={DevHouseImg}
            />
          </div>
        </div>
      </section>
    </>
  );
}
