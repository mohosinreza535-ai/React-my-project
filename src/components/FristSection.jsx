import React from 'react'

const FristSection = () => {
    return (
        <div>
            <div class="grid grid-cols-3 gap-4 p-4">
                <div class="bg-blue-500 text-white p-6 rounded">Box 1</div>
                <div class="bg-green-500 text-white p-6 rounded">Box 2</div>
                <div class="bg-red-500 text-white p-6 rounded">Box 3</div>
                <div class="bg-yellow-500 text-white p-6 rounded">Box 4</div>
                <div class="bg-purple-500 text-white p-6 rounded">Box 5</div>
                <div class="bg-pink-500 text-white p-6 rounded">Box 6</div>
            </div>

            <section class="bg-gray-100 py-12">
                <div class="max-w-6xl mx-auto px-4 text-center">

                    {/* <!-- Heading --> */}
                    <p class="text-blue-600 font-semibold">Category</p>
                    <h2 class="text-3xl font-bold mt-2 mb-10">Our services Category</h2>

                    {/* <!-- Grid --> */}
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* <!-- Card 1 --> */}
                        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                            <img src="https://images.unsplash.com/photo-1580281657527-47a4f4c9d1f1"
                                class="w-full h-52 object-cover" />
                            <div class="p-5 text-left">
                                <h3 class="text-lg font-semibold mb-2">Health & Wellness Support</h3>
                                <p class="text-gray-600 text-sm">
                                    Your well-being matters, and we’re here to support you every step of the way...
                                </p>
                            </div>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                                class="w-full h-52 object-cover" />
                            <div class="p-5 text-left">
                                <h3 class="text-lg font-semibold mb-2">Companionship</h3>
                                <p class="text-gray-600 text-sm">
                                    Everyone deserves a caring presence in their life. Whether you're seeking friendship...
                                </p>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                            <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                                class="w-full h-52 object-cover" />
                            <div class="p-5 text-left">
                                <h3 class="text-lg font-semibold mb-2">Daily Assistance</h3>
                                <p class="text-gray-600 text-sm">
                                    Life can get busy, but with the right support, every day can feel easier...
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="bg-gray-100 py-16">
                <div class="max-w-6xl mx-auto px-4 text-center">

                    {/* <!-- Heading --> */}
                    <p class="text-blue-600 font-semibold uppercase">Why Choose Us</p>
                    <h2 class="text-3xl md:text-4xl font-bold mt-2">
                        Connecting Elders with Compassionate Volunteers
                    </h2>
                    <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
                        We create a community where elders receive support and care, while volunteers find purpose in making a real difference.
                    </p>

                    {/* <!-- Cards --> */}
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

                        {/* <!-- Card 1 --> */}
                        <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                            <div class="flex justify-center mb-4">
                                <div class="bg-blue-100 text-blue-600 p-4 rounded-full text-2xl">
                                    👥
                                </div>
                            </div>
                            <h3 class="font-semibold text-lg mb-2">Supportive Community</h3>
                            <p class="text-gray-600 text-sm">
                                A dedicated platform where elders and volunteers connect for care and companionship.
                            </p>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                            <div class="flex justify-center mb-4">
                                <div class="bg-blue-100 text-blue-600 p-4 rounded-full text-2xl">
                                    🤝
                                </div>
                            </div>
                            <h3 class="font-semibold text-lg mb-2">Empowered Volunteers</h3>
                            <p class="text-gray-600 text-sm">
                                Volunteers can register and lend a helping hand to elders in need.
                            </p>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                            <div class="flex justify-center mb-4">
                                <div class="bg-blue-100 text-blue-600 p-4 rounded-full text-2xl">
                                    ❤️
                                </div>
                            </div>
                            <h3 class="font-semibold text-lg mb-2">Compassion & Care</h3>
                            <p class="text-gray-600 text-sm">
                                We ensure warmth and kindness for every elder, fostering human connection.
                            </p>
                        </div>

                        {/* <!-- Card 4 --> */}
                        <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                            <div class="flex justify-center mb-4">
                                <div class="bg-blue-100 text-blue-600 p-4 rounded-full text-2xl">
                                    🛡️
                                </div>
                            </div>
                            <h3 class="font-semibold text-lg mb-2">Safe & Secure</h3>
                            <p class="text-gray-600 text-sm">
                                A trustworthy system with verified volunteers and secure processes.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>


    )
}

export default FristSection