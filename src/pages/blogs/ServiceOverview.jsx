import React from 'react';

export default function ServiceOverview() {
  return (
    <section className="lg:py-20 py-12 ">
      <div className="container max-w-6xl mx-auto px-2">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <h2 className="text-blue font-semibold text-4xl font-poppins mb-6 animate-fade-in">SecureStash</h2>
            <p className="mb-8 animate-fade-in animation-delay-100">
              As the reliance on digital information continues to grow, the need for robust cybersecurity measures and efficient data compression techniques becomes increasingly crucial. That's why we are working on developing SecureStash, a comprehensive solution that addresses both of these vital concerns. With SecureStash, you can protect your sensitive information from cyber threats while also reducing storage and bandwidth costs through advanced data compression techniques.
            </p>
            <p className="mb-8 animate-fade-in animation-delay-200">
              With SecureStash, you can have peace of mind knowing that your data is secure and your storage and bandwidth costs are under control. Contact us for more information and to schedule a demonstration of the software.
            </p>
            <p className="mb-12 animate-fade-in animation-delay-300">
              For any product development, we need to extensively develop, code, and test out the product before release. We are hoping to start proof of concept delivery as soon as possible.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <h2 className="text-blue font-semibold text-4xl font-poppins mb-6 animate-fade-in">Hawk</h2>
            <p className="mb-8 animate-fade-in animation-delay-100">
              Our product, known simply as "Hawk," utilizes advanced machine learning algorithms and big data analytics to detect and respond to cyber threats in real-time. By analyzing the behavior of users and entities on a network, Hawk is able to identify suspicious activity and anomalies that indicate a potential threat, providing actionable intelligence for security teams to investigate and mitigate.
            </p>
            <p className="mb-8 animate-fade-in animation-delay-200">
              But Hawk doesn't stop there. In addition to UEBA capabilities, our tool also offers a comprehensive view of your security landscape by integrating and analyzing data from various sources such as network traffic, logs, or endpoint data to detect security incidents, vulnerabilities, and other security-related anomalies or events. This makes Hawk a one-stop shop for all your cybersecurity needs, providing you with a holistic view of the security posture of your organization.
            </p>
            <p className="mb-8 animate-fade-in animation-delay-300">
              Our user-friendly interface makes it easy to navigate and understand the information being presented, allowing security teams to quickly and efficiently investigate and respond to incidents. Plus, Hawk's automated incident response capabilities, allows you to take action on potential threats as soon as they are detected.
            </p>
            <p className="mb-8 animate-fade-in animation-delay-400">
              At DataBrew, we understand the constantly evolving threat landscape and the importance of staying one step ahead. That's why we are committed to constantly updating and improving our product, ensuring that our customers have the most advanced cybersecurity technology at their disposal.
            </p>
            <p className="animate-fade-in animation-delay-500">
              Don't leave your cybersecurity to chance. DataBrew to keep your organization safe and secure. Contact us to schedule a demonstration and see the power of Hawk for yourself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}