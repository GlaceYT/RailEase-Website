import React from "react";
import Safari from "../components/magicui/safari";
import img3 from "../assets/windows/3.jpg";
import img2 from "../assets/windows/2.png";
import img1 from "../assets/windows/1.png";
import img4 from "../assets/windows/4.png";
const Solutions: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-10 text-center">
        
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-gray-800">
        Revolutionize Your Travel Experience with Our Smart and Safe Rail Solutions.
        </h1>
        <p className="mt-4 text-lg text-gray-500">
        Harness the power of AI to streamline complaint management and receive real-time updates tailored for a smarter, more convenient travel experience.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Card 1 */}
          <div className="group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl hover:bg-red-500/10 transition-all duration-500 ease-out">
  <div>
    <h3 className="font-semibold mb-2 text-primary">Advanced AI Algorithms</h3>
    <p className="text-foreground">Leverage cutting-edge AI algorithms to automatically analyze and categorize complaints, supporting inputs from images, videos, and voice for seamless resolutions.
</p>
  </div>
  <svg width="1203" height="753" viewBox="0 0 1203 753" fill="none" xmlns="http://www.w3.org/2000/svg" className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300">
    <g clip-path="url(#path0)">
    <Safari
            url="RailEase.com"
            className="size-full"
            src={img1}
        />
    </g>
  </svg>
</div>

          {/* Card 2 */}
          <div className="group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl hover:bg-red-500/10 transition-all duration-500 ease-out">
  <div>
    <h3 className="font-semibold mb-2 text-primary">Monitoring and Updates</h3>
    <p className="text-foreground">Stay informed with real-time train tracking, live PNR status updates, and proactive alerts for delays caused by weather or safety issues, ensuring a hassle-free journey.</p>
  </div>
  <svg width="1203" height="753" viewBox="0 0 1203 753" fill="none" xmlns="http://www.w3.org/2000/svg" className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300">
    <g clip-path="url(#path0)">
    <Safari
            url="RailEase.com"
            className="size-full"
            src={img2}
        />
    </g>
  </svg>
</div>

          {/* Card 3 */}
          <div className="group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl md:row-span-2 hover:bg-orange-500/10 transition-all duration-500 ease-out">
          {/* <DotPattern /> */}
      <div>
      <h3 className="font-semibold mb-2 text-primary">Passenger Safety</h3>
<p className="text-foreground">
Ensuring passenger safety is our highest priority. From the beginning to the end of your journey, we are committed to providing the most comprehensive safety measures, ensuring a secure and worry-free travel experience.
</p>
      
      </div>

      {/* Canvas background */}
      <canvas
        className="size-full pointer-events-none z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]"
        style={{ width: '800px', height: '800px' }}
        width="1000"
        height="1000"
      />

      {/* SVG graphics */}
      <svg
        width="1203"
        height="753"
        viewBox="0 0 1203 753"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-mb-48 ml-12 mt-16 h-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-x-[-10px] transition-all duration-300"
      >
        <g clipPath="url(#path0)">
        <Safari
            url="RailEase.com"
            className="size-full"
            src={img4}
        />
        </g>
        <defs>
          <clipPath id="path0">
            <rect width="1203" height="753" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
          {/* Card 4 */}
          <div className="group w-[60vw] relative ml-10 flex flex-col overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl transition-all duration-500 ease-out hover:bg-green-500/10">
      <div>
    
      <h3 className="font-semibold mb-2 text-primary">Multiplatform Support</h3>
        <p className="text-foreground">
        Enjoy seamless integration across multiple platforms, ensuring uninterrupted support and a unified experience wherever you are. </p>
      </div>
      <div className="absolute inset-0 bg-white/5 mask-image[linear-gradient(to_bottom,white,transparent)] -bottom-full">
        {Array.from({ length: 8 }).map((_, index) => {
          const size = 210 + index * 70; // Increase size for each ripple
          const opacity = 0.24 - index * 0.03; // Decrease opacity for each ripple
          const delay = index * 0.06; // Increase delay for each ripple

          return (
            <div
              key={index}
              className={`absolute animate-ripple w-full rounded-full bg-foreground/25 shadow-xl border`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
                animationDelay: `${delay}s`,
                borderStyle: index === 7 ? 'dashed' : 'solid',
                borderWidth: '1px',
                borderColor: `hsl(var(--foreground), ${0.05 + index * 0.05})`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(1)',
              }}
            />
          );
        })}
      </div>
      <svg
        width="1203"
        height="753"
        viewBox="0 0 1203 753"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
      >
        <g clipPath="url(#path0)">
        <Safari
            url="RailEase.com"
            className="size-full"
            src={img3}
        />
        </g>
      </svg>
    </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;