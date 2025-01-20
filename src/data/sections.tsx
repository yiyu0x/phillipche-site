import { motion } from 'framer-motion';

export const sections = [
    {
      title: "Timeline",
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
              <p className="font-medium">California State Polytechnic University, Pomona</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">2020 - 2024</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">B.S. Computer Science</p>
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
        <div className="grid gap-4">
          {[
            {
              title: "YouTube",
              description: "documenting my life as a software engineer",
              icon: "🎥",
              stats: "100+ videos"
            },
            {
              title: "Real Estate Investing",
              description: "playing monopoly but with real money",
              icon: "🏠",
              stats: "2 properties"
            },
            {
              title: "Stocks and Crypto",
              description: "buying high and selling low is my philosophy",
              icon: "💸",
              stats: "Investing since 2018"
            },
            {
              title: "Mechanical Keyboards",
              description: "fun but will be the reason why im homeless",
              icon: "🎹",
              stats: "Collecting keyboards"
            },
          ].map((hobby) => (
            <motion.div
              key={hobby.title}
              className="group p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-3">
                <span className="text-2xl">{hobby.icon}</span>
                <div>
                  <h3 className="font-medium">{hobby.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {hobby.description}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                    {hobby.stats}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      title: "Skills",
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { name: "React", color: "teal" },
            { name: "TypeScript", color: "blue" },
            { name: "Node.js", color: "green" },
            { name: "Java", color: "red" },
            { name: "Python", color: "yellow" },
            { name: "AWS", color: "amber" },
            // Add more skills
          ].map((skill) => (
            <div 
              key={skill.name}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium text-white bg-${skill.color}-500 hover:bg-${skill.color}-600 transition-colors`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Learning",
      content: (
        <div className="space-y-4">
          {[
            { skill: "System Design", progress: 40 },
            { skill: "AWS", progress: 75 },
            { skill: "Korean", progress: 5 },
          ].map((item) => (
            <div key={item.skill} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{item.skill}</span>
                <span>{item.progress}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500 dark:bg-blue-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${item.progress}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
          ))}
        </div>
      )
    }
  ]