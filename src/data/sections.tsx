export const sections = [
    {
      title: "Education",
      content: (
        <div className="space-y-4">
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <p className="font-medium">California State Polytechnic University, Pomona</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">2020 - 2024</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">B.S. Computer Science</p>
          </div>
        </div>
      )
    },
    {
      title: "Experience",
      content: (
        <div className="space-y-4">
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <p className="font-medium">Amazon</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">2024 - Now</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">Software Development Engineer</p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
              <li>working on large scale messaging systems</li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <p className="font-medium">Amazon</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">2024 - 2024</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">Software Development Engineer Intern</p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
              <li>worked on amazon fresh grocery experience</li>
            </ul>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <p className="font-medium">Solace Notify</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">2019 - 2024</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">Founder</p>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
              <li>built reselling community and developed tools</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Hobbies",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="group">
            <div className="flex items-center space-x-2">
            <p className="font-medium">YouTube</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              documenting my life as a software engineer
            </p>
          </div>
          <div className="group">
            <div className="flex items-center space-x-2">
              <p className="font-medium">Real Estate Investing</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              playing monopoly but with real money
            </p>
          </div>
          <div className="group">
            <div className="flex items-center space-x-2">
              <p className="font-medium">Stocks and Crpyto</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              buying high and selling low is my philosophy
            </p>
          </div>
          <div className="group">
            <div className="flex items-center space-x-2">
              <p className="font-medium">Mechanical Keyboards</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              fun but will be the reason why im homeless
            </p>
          </div>
        </div>
      )
    }
  ]