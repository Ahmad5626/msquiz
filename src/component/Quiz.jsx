import { useRef, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Quiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const mainSliderRef = useRef(null);
  const thumbSliderRef = useRef(null);

  // Settings for the main slider
  const mainSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    beforeChange: (oldIndex, newIndex) => {
      if (thumbSliderRef.current) {
        thumbSliderRef.current.slickGoTo(newIndex); // Sync thumbnail slider to main slider
      }
    },
  };

  // Settings for the thumbnail slider
  const thumbSliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    beforeChange: (oldIndex, newIndex) => {
      if (mainSliderRef.current) {
        mainSliderRef.current.slickGoTo(newIndex); // Sync main slider to thumbnail slider
      }
    },
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Thumbnail slider */}

      {/* Header */}
      <header className=" bg-[#eef1f7]">
        <div className="container mx-auto flex items-center justify-between p-1">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <div className=" text-white p-2 rounded w-[50px]">
                <img src="https://masterstudy.stylemixthemes.com/light-lms-elementor/wp-content/uploads/sites/30/2023/10/icon-150x150.png"></img>
              </div>
              <button className="flex items-center gap-2 bg-[#dee2e9] rounded-lg px-4 py-2 font-mono">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
                Curriculum
              </button>
            </div>
            <div className="text-sm text-gray-500 ">
              Course:<br></br> <b>Interior design concepts Masterclass</b>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">time left:</span>
              <span className="font-mono text-blue-600">01:19:11</span>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            </button>
            <button className="hover:bg-gray-100 px-3 py-2 rounded-lg">
              Discussions
            </button>
          </div>
        </div>
      </header>

      {/* Question */}
      <main className="container mx-auto max-w-4xl p-8">
        <form className="space-y-8">
          <Tabs>
            <TabPanel>
              <div className="space-y-4">
                <h2 className="text-lg font-medium">
                  1. What does CPU stand for?
                </h2>
                <div className="space-y-2">
                  {[
                    "Computer Processing Unit",
                    "Central Peripheral Unit",
                    "Central Processing Unit",
                    "Computer Processing User",
                  ].map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="cpu"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => setSelectedAnswer(option)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="space-y-4">
                <h2 className="text-lg font-medium">
                  2. What does CPU stand for?
                </h2>
                <div className="space-y-2">
                  {[
                    "Computer Processing Unit",
                    "Central Peripheral Unit",
                    "Central Processing Unit",
                    "Computer Processing User",
                  ].map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="cpu"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => setSelectedAnswer(option)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="space-y-4">
                <h2 className="text-lg font-medium">
                  3. What does CPU stand for?
                </h2>
                <div className="space-y-2">
                  {[
                    "Computer Processing Unit",
                    "Central Peripheral Unit",
                    "Central Processing Unit",
                    "Computer Processing User",
                  ].map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="cpu"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => setSelectedAnswer(option)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="space-y-4">
                <h2 className="text-lg font-medium">
                  4. What does CPU stand for?
                </h2>
                <div className="space-y-2">
                  {[
                    "Computer Processing Unit",
                    "Central Peripheral Unit",
                    "Central Processing Unit",
                    "Computer Processing User",
                  ].map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="cpu"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => setSelectedAnswer(option)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="space-y-4">
                <h2 className="text-lg font-medium">
                  5. What does CPU stand for?
                </h2>
                <div className="space-y-2">
                  {[
                    "Computer Processing Unit",
                    "Central Peripheral Unit",
                    "Central Processing Unit",
                    "Computer Processing User",
                  ].map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="cpu"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => setSelectedAnswer(option)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="space-y-4">
                <h2 className="text-lg font-medium">
                  6. What does CPU stand for?
                </h2>
                <div className="space-y-2">
                  {[
                    "Computer Processing Unit",
                    "Central Peripheral Unit",
                    "Central Processing Unit",
                    "Computer Processing User",
                  ].map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="cpu"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => setSelectedAnswer(option)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="space-y-4">
                <h2 className="text-lg font-medium">
                  2. What does CPU stand for?
                </h2>
                <div className="space-y-2">
                  {[
                    "Computer Processing Unit",
                    "Central Peripheral Unit",
                    "Central Processing Unit",
                    "Computer Processing User",
                  ].map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="cpu"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => setSelectedAnswer(option)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="space-y-4">
                <h2 className="text-lg font-medium">
                  7. What does CPU stand for?
                </h2>
                <div className="space-y-2">
                  {[
                    "Computer Processing Unit",
                    "Central Peripheral Unit",
                    "Central Processing Unit",
                    "Computer Processing User",
                  ].map((option) => (
                    <label
                      key={option}
                      className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="cpu"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => setSelectedAnswer(option)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </TabPanel>

            
              {/* Pagination */}
              <div className="flex items-center justify-start gap-2 pt-16 ">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                {/* <div className="w-[280px] overflow-x-scroll   srcoll"> */}
                <TabList>
                  <Tab>
                    <span
                      className="px-4 py-2 bg-[#eef1f7]  text-black
                       rounded-lg"
                    >
                      1
                    </span>
                  </Tab>
                  <Tab>
                    <span
                      className="px-4 py-2 bg-[#eef1f7]  text-black
                       rounded-lg"
                    >
                      2
                    </span>
                  </Tab>
                  <Tab>
                    <span
                      className="px-4 py-2 bg-[#eef1f7]  text-black
                       rounded-lg"
                    >
                      3
                    </span>
                  </Tab>
                  <Tab>
                    <span
                      className="px-4 py-2 bg-[#eef1f7]  text-black
                       rounded-lg"
                    >
                      4
                    </span>
                  </Tab>
                  <Tab>
                    <span
                      className="px-4 py-2 bg-[#eef1f7]  text-black
                       rounded-lg"
                    >
                      5
                    </span>
                  </Tab>
                  <Tab>
                    <span
                      className="px-4 py-2 bg-[#eef1f7]  text-black
                       rounded-lg"
                    >
                      6
                    </span>
                  </Tab>
                  <Tab>
                    <span
                      className="px-4 py-2 bg-[#eef1f7]  text-black
                       rounded-lg"
                    >
                      7
                    </span>
                  </Tab>
                  </TabList>
                

                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            
          </Tabs>
        </form>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 border-t bg-white">
        <div className="container mx-auto max-w-3xl flex items-center justify-between p-4">
          <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Previous
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Submit
          </button>
          <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg">
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Quiz;
