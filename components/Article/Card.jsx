import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Firebase from '../../public/asset/firebase.webp';
import Mobile from '../../public/asset/mobile.webp';
import MDX from '../../public/asset/MDX.webp';
import Joyride from '../../public/asset/Joyride.webp';
import Algolia from '../../public/asset/Algolia.webp';
import SuperTokens from '../../public/asset/SuperTokens.webp';
import Uselayout from '../../public/asset/Uselayout.webp';
import Palmapi from '../../public/asset/Palmapi.webp';
import Hack from '../../public/asset/Hack.png';
import Network from '../../public/asset/Network.png';
import Native from '../../public/asset/Native.png';
import microfrontend from '../../public/asset/microfrontend.webp';
import SeleniumClick from '../../public/asset/SeleniumClick.png';
import microfront from '../../public/asset/microfront.webp';
import ReactnativeSecurity from '../../public/asset/ReactnativeSecurity.jpg';
import microaws from '../../public/asset/microaws.webp';
import graphql from '../../public/asset/graphql.webp';
import seleniumload from '../../public/asset/seleniumload.png';
import wasp from '../../public/asset/wasp.jpg';
import tanstack from '../../public/asset/tanstack.png';
import mobileui from '../../public/asset/mobile_ui.png';
import overpro from '../../public/asset/Overprovisioning.jpg';
import selenium_wire from '../../public/asset/selenium_wire.png';

export default function Card({
  title,
  description,
  slug,
  image,
  category,
  dateTime,
  readingTime,
}) {
  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.apify.com/how-to-use-selenium-wire/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={selenium_wire}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>
                    https://blog.apify.com/
                  </p>

                  <h5 className='text-sm text-white'>
                  How to use Selenium Wire
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'>
                  Learn how to intercept HTTP requests/responses, filter data, and optimize performance for improved web scraping and testing.

                  </p>
                </div>
              </a>
            </div>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://www.acceldata.io/blog/over-provisioning'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={Overprovisioning}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>www.acceldata.io/</p>

                  <h5 className='text-sm text-white'>
                  Overprovisioning: Definition, Causes, Solutions
                  </h5>
                </div>
              </a>
            </div>

            <div className='p-4 md:w-1/3'>
              <a
                href='https://www.tricentis.com/learn/mobile-ui-testing-a-detailed-overview'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={mobile_ui}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>www.tricentis.com/learn</p>

                  <h5 className='text-sm text-white'>
                  Mobile UI testing: A detailed overview
                  </h5>
                </div>
              </a>
            </div>
          </div>
          








          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.apify.com/selenium-click-command/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={SeleniumClick}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>
                    https://blog.apify.com/
                  </p>

                  <h5 className='text-sm text-white'>
                    Selenium click command: complete guide
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'>
                    The click() command, with its ability to simulate user
                    behavior, remains a key asset in Selenium...
                  </p>
                </div>
              </a>
            </div>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.apify.com/selenium-wait-for-page-to-load/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={seleniumload}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.apify.com/</p>

                  <h5 className='text-sm text-white'>
                    Selenium wait for page to load
                  </h5>
                </div>
              </a>
            </div>

            <div className='p-4 md:w-1/3'>
              <a
                href='https://bugfender.com/blog/microfrontends/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={microfrontend}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>bugfender.com/blog</p>

                  <h5 className='text-sm text-white'>
                    Understand Microfrontends: A Guide for Developers and CTOs
                  </h5>
                </div>
              </a>
            </div>
          </div>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://bugfender.com/blog/microfrontends-react/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={microfront}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>
                    https://bugfender.com/
                  </p>

                  <h5 className='text-sm text-white'>
                    Demystifying Microfrontends: A Practical Approach with React
                    and Module Federation
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'>
                    Microfrontends is a modern front-end architectural approach,
                    by which web applications...
                  </p>
                </div>
              </a>
            </div>

            <div className='p-4 md:w-1/3'>
              <a
                href='https://bugfender.com/blog/deploying-microfrontends-on-aws/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={microaws}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>bugfender.com</p>

                  <h5 className='text-sm text-white'>
                    Deploying Microfrontends on AWS: A Guide for Developers
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'>
                    If you are new to Microfrontends architecture, it’s a modern
                    approach for splitting the frontend...
                  </p>
                </div>
              </a>
            </div>

            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.logrocket.com/understanding-security-react-native-applications/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={ReactnativeSecurity}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.logrocket.com</p>

                  <h5 className='text-sm text-white'>
                    Understanding security in React Native applications
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'>
                    Explore the various security threats facing React Native
                    mobile applications and how to mitigate them.
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.openreplay.com/hacktoberfest-contributing-as-a-react-developer/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image className='object-cover w-full h-56' src={Hack} alt='' />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.openreplay.com</p>

                  <h5 className='text-sm text-white'>
                    Hacktoberfest 2022: Contributing As A React Developer
                  </h5>
                </div>
              </a>
            </div>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://refine.dev/blog/uselayouteffect-vs-useeffect/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={Uselayout}
                  alt=''
                />
                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>refine.dev/blog</p>
                  <h5 className='text-sm text-white'>
                    A Guide to Using the useLayoutEffect Hook in React
                  </h5>
                </div>
              </a>
            </div>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.logrocket.com/understanding-new-firebase-ai-extensions/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={Palmapi}
                  alt=''
                />
                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.logrocket.com</p>
                  <h5 className='text-sm text-white'>
                    Understanding the new Firebase AI extensions
                  </h5>
                </div>
              </a>
            </div>
          </div>

          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.openreplay.com/building-a-mobile-app-using-html-css-and-js/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={Mobile}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.openreplay.com</p>

                  <h5 className='text-sm text-white'>
                    Building a Mobile App using HTML, CSS, and JavaScript
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'>
                    A back-to-basics way of developing a mobile app
                  </p>
                </div>
              </a>
            </div>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.openreplay.com/build-a-mdx-powered-blog-with-contentlayer-and-next'
                className='block overflow-hidden rounded-2xl'
              >
                <Image className='object-cover w-full h-56' src={MDX} alt='' />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.openreplay.com</p>

                  <h5 className='text-sm text-white'>
                    Build a MDX-powered blog with Contentlayer and Next
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'>
                    A simple way of creating a static Markdown-based blog site
                  </p>
                </div>
              </a>
            </div>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.logrocket.com/natively-implement-dynamic-imports-react-native/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={Native}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>
                    https://blog.logrocket.com/
                  </p>

                  <h5 className='text-sm text-white'>
                    Natively implement dynamic imports in React Native
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'>
                    Compare static and dynamic imports in React Native, and
                    explore native vs. third-party solutions for dynamic
                    imports.
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.openreplay.com/user-onboarding-tours-made-simple-with-react-joyride'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={Joyride}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.openreplay.com</p>

                  <h5 className='text-sm text-white'>
                    User Onboarding Tours made simple with React-Joyride
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'>
                    A fast, easy way to produce onboarding tours for new users
                  </p>
                </div>
              </a>
            </div>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.openreplay.com/authentication-in-react-18-using-firebase-v9/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={Firebase}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.openreplay.com</p>

                  <h5 className='text-sm text-white'>
                    Authentication In React 18 Using Firebase V9 And The
                    Firebase Console
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'>
                    If you want to somehow authenticate users in your
                    application...
                  </p>
                </div>
              </a>
            </div>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.logrocket.com/using-supertokens-authentication-next-js/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={SuperTokens}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.logrocket.com</p>

                  <h5 className='text-sm text-white'>
                    Using SuperTokens for authentication in Next.js
                  </h5>
                </div>
              </a>
            </div>
          </div>

          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.openreplay.com/full-text-search-in-react-with-algolia-and-firestore'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={Algolia}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.openreplay.com</p>

                  <h5 className='text-sm text-white'>
                    Full-text Search in React with Algolia and Firestore
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'>
                    How to add full-text search capabilities to your React-based
                    website
                  </p>
                </div>
              </a>
            </div>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://www.netreo.com/blog/building-a-network-monitoring-dashboard-a-guide/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={Network}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>
                    https://www.netreo.com/
                  </p>

                  <h5 className='text-sm text-white'>
                    Building a Network Monitoring Dashboard: A Guide
                  </h5>
                </div>
              </a>
            </div>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://bugfender.com/blog/graphql-react/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={graphql}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>bugfender.com/blog</p>

                  <h5 className='text-sm text-white'>
                    Using GraphQL with React: Efficient Data Fetching
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'></p>
                </div>
              </a>
            </div>
          </div>

          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.logrocket.com/leveraging-wasp-full-stack-development/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image className='object-cover w-full h-56' src={wasp} alt='' />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.logrocket.com</p>

                  <h5 className='text-sm text-white'>
                    Leveraging Wasp for full-stack development
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'>
                    Learn how the Wasp, Web Application Specification, framework
                    simplifies full-stack development by offloading repetitive
                    code tasks.
                  </p>
                </div>
              </a>
            </div>
            <div className='p-4 md:w-1/3'>
              <a
                href='https://blog.openreplay.com/tanstack-router-for-react--a-complete-guide/'
                className='block overflow-hidden rounded-2xl'
              >
                <Image
                  className='object-cover w-full h-56'
                  src={tanstack}
                  alt=''
                />

                <div className='p-4 bg-gray-900'>
                  <p className='text-xs text-gray-500'>blog.openreplay.com</p>

                  <h5 className='text-sm text-white'>
                    Tanstack Router For React - A Complete Guide
                  </h5>

                  <p className='mt-1 text-xs text-gray-500'></p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
