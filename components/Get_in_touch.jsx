import React from 'react';

export default function Get_in_touch() {
  return (
    <>
      <section className='text-gray-600 body-font mx-auto'>
        <div className='container mx-auto flex px-5  py-24 items-center justify-center flex-col'>
          <div className='text-center lg:w-2/3 w-full'>
            <h1
              className='title-font sm:text-5xl text-6xl mb-4 font-medium text-emerald-300'
              style={{ fontFamily: 'Rubik Moonrocks' }}
            >
              Get In Touch
            </h1>
            <p className='mb-8 leading-relaxed text-white text-xl'>
              I’m currently looking for any new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I’ll try my best to get back to you!
            </p>
            <div className='flex justify-center'>
              <button>
                <a
                  href='mailto:whizfidel@gmail.com'
                  className='inline-flex text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-400 rounded text-lg outline-dashed outline-2 outline-offset-2'
                >
                  Say Hello!
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
