import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (itemId: string) => {
    setOpenItem((prev) => (prev === itemId ? null : itemId));
  };
  const faqItems = [
    { id: 'r1r', label: 'What is RailEase?', content: 'RailEase is a cutting-edge, AI-powered platform designed to revolutionize railway travel by providing a smarter, safer, and more seamless experience for passengers. It integrates advanced technology to offer real-time updates, safety features, and streamlined services that enhance overall travel efficiency and comfort.' },
    { id: 'r1t', label: 'How do I get started with RailEase?', content: 'Getting started with RailEase is simple and straightforward. Begin by signing up on our platform, either via the mobile app or web portal. Once registered, you will have immediate access to our intelligent assistant, which will guide you through the various features and services, ensuring that your travel needs are met with ease and precision.' },
    { id: 'r1v', label: 'What features does RailEase offer?', content: 'RailEase offers an extensive suite of features designed to enhance the passenger experience. These include an Automated Complaint Management System that streamlines issue resolution through AI-powered analysis, Real-Time Train Tracking and Alerts to keep passengers informed throughout their journey, Enhanced Safety Features with SOS alerts and live location sharing, Live Weather Updates for upcoming stations, and Emergency Response capabilities for immediate assistance when needed.' },
    { id: 'r21', label: 'Which platforms is RailEase available on?', content: 'RailEase is a versatile platform, available on a wide range of devices to accommodate various user preferences. Currently, it supports Windows, macOS, Android, and iOS, ensuring that passengers can access the platform from their preferred device, whether they are using a desktop, laptop, or mobile device.' },
    { id: 'r23', label: 'What kind of support does RailEase provide?', content: 'RailEase is committed to providing comprehensive support for all users, ensuring that assistance is available around the clock. Our 24/7 customer support service is equipped to handle inquiries related to complaint management, real-time train updates, safety alerts, and much more. With RailEase, passengers can rely on continuous support to address any concerns or needs during their journey.' },
];


  return (
    <section id="faq">
      <div>
        <div className="relative container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center space-y-4 pb-6 mx-auto">
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
              Frequently asked questions
            </h3>
          </div>
          <div className="mx-auto my-12 md:max-w-[800px]">
            <div className="flex w-full flex-col items-center justify-center space-y-2" data-orientation="vertical">
              {faqItems.map((faq, index) => (
                <div key={index} className="w-full border rounded-lg overflow-hidden">
                  <h3 className="flex">
                    <button
                      type="button"
                      aria-controls={`content-${faq.id}`}
                      aria-expanded={openItem === faq.id}
                      onClick={() => toggleItem(faq.id)}
                      className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline px-4"
                    >
                      {faq.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200 ${
                          openItem === faq.id ? 'rotate-180' : ''
                        }`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </h3>
                  <div
                    id={`content-${faq.id}`}
                    role="region"
                    aria-labelledby={faq.id}
                    className={`overflow-hidden transition-all ${
                      openItem === faq.id ? 'max-h-screen py-2 px-4' : 'max-h-0'
                    }`}
                  >
                    {openItem === faq.id && <p className="text-sm">{faq.content}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h4 className="mb-12 text-center text-sm font-medium tracking-tight text-foreground/80">
            Still have questions? Email us at{' '}
            <a href="mailto:support@railease.com" className="underline">
              support@railease.com
            </a>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
