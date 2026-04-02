import React from 'react'

const Sectionx = () => {
  return (
    <div>
        <section className='bg-white py-12'>
            <div className='max-w-7xl mx-auto px-4 py-12'>
                {/* heading */}
                <h1 className='text-3xl font-bold text-center mb-8'>Our Services</h1>
                {/* grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {/* card 1 */}
                    <div className='bg-white rounded-lg shadow shadow-sky-200 overflow-hidden p-5'>
                        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt=""
                        className='w-full h-96 object-cover'
                         />
                        <div className='p-5'>
                            <h2 className='text-xl font-bold mb-2'>Service Title</h2>
                            <p className='text-gray-600'>Service description goes here. It provides an overview of the service.</p>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className='bg-white rounded-lg shadow shadow-sky-200 overflow-hidden p-5'>
                        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt=""
                        className='w-full h-96 object-cover'
                         />
                        <div className='p-5'>
                            <h2 className='text-xl font-bold mb-2'>Service Title</h2>
                            <p className='text-gray-600'>Service description goes here. It provides an overview of the service.</p>
                        </div>
                    </div>

                    {/* card 3 */}

                    <div className='bg-white rounded-lg shadow shadow-sky-200 overflow-hidden p-5'>
                        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt=""
                        className='w-full h-96 object-cover'
                         />
                        <div className='p-5'>
                            <h2 className='text-xl font-bold mb-2'>Service Title</h2>
                            <p className='text-gray-600'>Service description goes here. It provides an overview of the service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Sectionx