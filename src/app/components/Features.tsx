import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-48 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4 mb-16">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className=" p-6">
              <h3 className="font-exo-2 text-4xl font-bold mb-4">Thumbnails</h3>
              <p className="font-familjen-grotesk text-2xl mb-4">
                Thumbnails made for the YouTube algorithm.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Multiple thumbnail options</li>
                  <li>Built for your video</li>
                  <li>Made in seconds</li>
                </ul>
                <ul className="list-disc list-inside space-y-2">
                  <li>Add personal assets (coming soon)</li>
                  <li>Editable</li>
                  <li>Built for YT Algo</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img src="./youtubethumbnailexample.png" alt="Thumbnails feature" className="rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 mt-16">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img src="./youtubethumbnailexample.png" alt="Descriptions feature" className="rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-syne text-4xl font-bold mb-4">Descriptions</h3>
              <p className="font-familjen-grotesk text-2xl mb-4">
                Create YouTube descriptions tailored for the algorithm without the work.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Multiple description options</li>
                  <li>CTAs & Links (coming soon)</li>
                  <li>Built for your video</li>
                </ul>
                <ul className="list-disc list-inside space-y-2">
                  <li>Affiliate links (coming soon)</li>
                  <li>Editable</li>
                  <li>Built for YT Algo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1.25 bg-black mt-8"></div>
    </section>
  );
};

export default Features;
