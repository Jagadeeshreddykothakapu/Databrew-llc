import React, { useState } from "react";

export default function ContactArea() {
	const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState(false);


	const handleSubmitForm = (e) => {
		e.preventDefault();

		try {
			// Send form data to the server or perform any necessary actions
			// You can use libraries like Axios or Fetch API to make the request
			// Example:
			// await axios.post('/api/contact', formData);
	  
			setFormSubmitted(true);
			setFormError(false);
		  } catch (error) {
			setFormError(true);
		  }
	};

	return (
		<section className="py-10 lg:py-20">
			<div className="container max-w-6xl mx-auto px-2">
				<div className="grid lg:grid-cols-[2fr_3fr] grid-cols-1">
					<div className="bg-green-100 p-6">
						<h4 className="text-blue font-semibold text-3xl font-poppins mb-4">
							Contact Information
						</h4>
						<ul>
							<li className="flex gap-4 mb-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8 mt-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									></path>
								</svg>
								<div>
									<h5 className="text-xl font-semibold mb-1">Email</h5>
									<a href="mailto:assuretechbd@gmail.com">jkothakapu@databrew-llc.com</a>
								</div>
							</li>
							<li className="flex gap-4 mb-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8 mt-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									></path>
								</svg>
								<div>
									<h5 className="text-xl font-semibold mb-1">Phone</h5>
									<a href="tel:+8801679383667">+2342379374</a>
								</div>
							</li>
							<li className="flex gap-4 mb-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8 mt-1"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
									></path>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
									></path>
								</svg>
								<div>
									<h5 className="text-xl font-semibold mb-1">
										Address
									</h5>
									<a href="https://goo.gl/maps/SHkRe94QMEhs8iKRA">Marysville, OH</a>
								</div>
							</li>
							<li className="flex gap-4 mb-6">
                <a href="https://wa.me/+8801679383667" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 mt-1"
                    fill="#25D366"
                  >
                    <path
                      d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"
                    />
                  </svg>
                </a>
                <div>
                  <h5 className="text-xl font-semibold mb-1">WhatsApp</h5>
                  <a href="https://wa.me/+8801679383667" target="_blank" rel="noopener noreferrer">
                    +12342379374
                  </a>
                </div>
              </li>
						</ul>
					</div>
					<div className="p-6">
					<h4 className="text-blue font-semibold text-4xl font-poppins mb-3">
          Get in touch
        </h4>
        <p>We will catch you as early as we receive the message</p>
        {formSubmitted && (
          <p className="text-green-500 mt-4">
            Thank you for your message! We will get back to you soon.
          </p>
        )}
        {formError && (
          <p className="text-red-500 mt-4">
            Oops! Something went wrong. Please try again later.
          </p>
        )}
						<form onSubmit={handleSubmitForm} className="mt-6">
							<div className="flex gap-8">
								<div className="w-1/2">
									<input type="text" className="p-2 border-b-2 border-gray-400 w-full text-black" placeholder="Your Name" required />
								</div>
								<div className="w-1/2">
									<input type="email" className="p-2 border-b-2 border-gray-400 w-full text-black" placeholder="Your Email" required />
								</div>
							</div>
							<div className="mt-4">
								<textarea rows="4" className="p-2 border-b-2 border-gray-400 w-full text-black" placeholder="How can we help you?" required></textarea>
							</div>
							<div className="mt-8">
								<button type="submit" className="btn btn-pink px-12">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
