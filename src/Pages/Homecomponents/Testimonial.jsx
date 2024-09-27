import React from 'react'

function Testimonial() {
  return (
    <>
        <div className="w-full py-16 bg-gray-100">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
      What Our Clients Say
    </h2>
    <p className="text-gray-600 mt-4">Our clients love our treatments and services</p>
  </div>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
    {/* Testimonial Card 1 */}
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      {/* <div className="mb-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Client 1"
          className="w-16 h-16 rounded-full mx-auto"
        />
      </div> */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
        <p className="text-sm text-gray-600">Hair Treatment</p>
        <p className="mt-4 text-gray-600">
          "The hair treatment was fantastic! I can already see a huge improvement in my hair health and texture."
        </p>
      </div>
    </div>

    {/* Testimonial Card 2 */}
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      {/* <div className="mb-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Client 2"
          className="w-16 h-16 rounded-full mx-auto"
        />
      </div> */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
        <p className="text-sm text-gray-600">Skin Treatment</p>
        <p className="mt-4 text-gray-600">
          "My skin has never felt better. The clinic’s skin treatment really brought a new glow to my complexion!"
        </p>
      </div>
    </div>

    {/* Testimonial Card 3 */}
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      {/* <div className="mb-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Client 3"
          className="w-16 h-16 rounded-full mx-auto"
        />
      </div> */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800">Mary Johnson</h3>
        <p className="text-sm text-gray-600">Transformation</p>
        <p className="mt-4 text-gray-600">
          "I had an incredible experience with the transformation treatment. I feel more confident and beautiful!"
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Testimonial