import React from 'react';  
import logo from "../Assets/logo.png" 

function About() {
  return (
    <div className="py-16 bg-gray-600">
      <div className="container m-auto px-6 text-white md:px-12 xl:px-6 mb-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12 ml-5">      
            <img
            className='h-110'
              src={logo}
              alt="image"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12 mb-4 ">
            <h2 className="text-2xl white font-bold md:text-4xl aboutus">
              About Us -
            </h2>
            <p className="mt-6 text-white font-medium about">
            Sahayak is your one-stop digital companion crafted especially for senior citizens. We aim to simplify everyday life for elders through a user-friendly platform that offers a range of helpful modes — from healthy food options and wellness routines to government schemes, health tracking, and online ordering.
            </p>
            <p className="mt-4 text-white font-medium about">
            We understand the unique needs of the elderly and bring together essential services in one safe, easy-to-use place. Whether it’s ordering groceries, finding yoga exercises, checking nearby clinics, or exploring benefits provided by the government — Sahayak is here to assist, empower, and care.
            </p>
          </div>
        </div>
      </div>
      <hr className='w-200 mx-100 bg-white text-white '/>
      <section id="features" className="features py-20 bg-gray-600 text-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
    <div className="feature-card bg-white p-8 rounded-xl shadow-md text-left">
      <i className="fas fa-bolt feature-icon text-4xl text-blue-500 mb-4"></i>
      <h3 className="feature-title text-xl font-semibold text-gray-900 mb-2">Blazing Fast Performance</h3>
      <p className="feature-description text-gray-600">Enjoy a smooth and responsive experience, even with demanding tasks.</p>
    </div>
    <div className="feature-card bg-white p-8 rounded-xl shadow-md text-left">
      <i className="fas fa-shield-alt feature-icon text-4xl text-blue-500 mb-4"></i>
      <h3 className="feature-title text-xl font-semibold text-gray-900 mb-2">Top-Notch Security</h3>
      <p className="feature-description text-gray-600">Your data is protected with advanced encryption and privacy controls.</p>
    </div>
    <div className="feature-card bg-white p-8 rounded-xl shadow-md text-left">
      <i className="fas fa-user feature-icon text-4xl text-blue-500 mb-4"></i>
      <h3 className="feature-title text-xl font-semibold text-gray-900 mb-2">Customized User Interface</h3>
      <p className="feature-description text-gray-600">Communicates and provides you with assistance exactly how you would prefer!</p>
    </div>
    <div className="feature-card bg-white p-8 rounded-xl shadow-md text-left">
      <i className="fas fa-sync-alt feature-icon text-4xl text-blue-500 mb-4"></i>
      <h3 className="feature-title text-xl font-semibold text-gray-900 mb-2">Seamless Synchronization</h3>
      <p className="feature-description text-gray-600">Keep your data consistent across all your devices, all in real-time!</p>
    </div>
    <div className="feature-card bg-white p-8 rounded-xl shadow-md text-left">
      <i className="fas fa-chart-line feature-icon text-4xl text-blue-500 mb-4"></i>
      <h3 className="feature-title text-xl font-semibold text-gray-900 mb-2">Detailed Analytics</h3>
      <p className="feature-description text-gray-600">Gain valuable insights with comprehensive data tracking and reporting.</p>
    </div>
    <div className="feature-card bg-white p-8 rounded-xl shadow-md text-left">
      <i className="fas fa-life-ring feature-icon text-4xl text-blue-500 mb-4"></i>
      <h3 className="feature-title text-xl font-semibold text-gray-900 mb-2">Dedicated Support</h3>
      <p className="feature-description text-gray-600">Get help from our friendly and responsive support team at a single click!</p>
    </div>
  </div>
      </section>


    </div>
  );
}

export default About;