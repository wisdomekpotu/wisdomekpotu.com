import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className='flex items-center justify-between border-b border-gray-400 py-3 container mx-auto px-20'>
        <Link href='https://wisdomekpotu.com'>
          <span className='text-emerald-400 cursor-pointer'>
            <Image
              src='https://pbs.twimg.com/profile_images/1536330118104236032/wgUdfCr9.jpg'
              alt='icon'
              width={40}
              height={40}
            />
          </span>
        </Link>
        <nav>
          <section className='MOBILE-MENU flex lg:hidden'>
            <div
              className='HAMBURGER-ICON space-y-2'
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className='block h-0.5 w-8 animate-pulse bg-emerald-400'></span>
              <span className='block h-0.5 w-8 animate-pulse bg-emerald-400'></span>
              <span className='block h-0.5 w-8 animate-pulse bg-emerald-400'></span>
            </div>

            <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
              <div
                className='absolute top-0 right-0 px-8 py-8'
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className='h-8 w-8 text-emerald-400'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='18' y1='6' x2='6' y2='18' />
                  <line x1='6' y1='6' x2='18' y2='18' />
                </svg>
              </div>
              <ul className='flex flex-col items-center justify-between min-h-[250px]'>
                <li className='border-b text-emerald-400 my-8 uppercase'>
                  <Link href='/blog'>Blog</Link>
                </li>
                <li className='border-b text-emerald-400 my-8 uppercase'>
                  <Link href='/projects'>Projects</Link>
                </li>
              </ul>
            </div>
          </section>

          <ul className='DESKTOP-MENU hidden space-x-9 lg:flex'>
            <li className=' text-emerald-400'>
              <a href='/blog'>
                {' '}
                <FontAwesomeIcon
                  icon={faPen}
                  style={{ fontSize: 14, color: '#01D5A2' }}
                />{' '}
                Blog
              </a>
            </li>

            <li className=' text-emerald-400 '>
              <a href='/projects'>
                {' '}
                <FontAwesomeIcon
                  icon={faCodeBranch}
                  style={{ fontSize: 14, color: '#01D5A2' }}
                />{' '}
                Projects
              </a>
            </li>
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </>
  );
}
