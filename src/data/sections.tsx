import { motion } from 'framer-motion';

export const sections = [
    {
      title: "Timeline",
      content: (
        <div className="space-y-4">
          {[
            {
              company: "Amazon",
              date: "2024 - Now",
              title: "Software Development Engineer",
              description: ["working on large scale messaging systems"]
            },
            {
              company: "California State Polytechnic University, Pomona",
              date: "2020 - 2024",
              title: "B.S. Computer Science",
              description: ["got my degree to make my parents proud"]
            },
            {
              company: "Amazon",
              date: "2023 - 2023",
              title: "Software Development Engineer Intern",
              description: ["worked on amazon fresh grocery experience"]
            },
            {
              company: "Solace Notify",
              date: "2019 - 2023",
              title: "Founder",
              description: ["built reselling community and developed tools"]
            }
          ].map((item) => (
            <motion.div
              key={item.company + item.date}
              className="group py-1 transition-colors"
              whileHover={{ scale: 1.05 }}
              style={{ transformOrigin: 'left' }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <p className="font-medium">{item.company}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">{item.date}</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.title}</p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                {item.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
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
              stats: "13 videos",
              color: "rose"  // YouTube's brand color
            },
            {
              title: "Real Estate Investing",
              description: "playing monopoly but with real money",
              stats: "0 properties",
              color: "blue"  // Money/investment color
            },
            {
              title: "Stocks and Crypto",
              description: "buying high and selling low is my philosophy",
              stats: "-$25,000 profit",
              color: "green"  // Financial markets color
            },
            {
              title: "Mechanical Keyboards",
              description: "fun but will be the reason why im homeless",
              stats: "3 custom keyboards",
              color: "purple"  // Tech/hardware color
            },
          ].map((hobby) => (
            <motion.div
              key={hobby.title}
              className="group py-1 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <h3 className={`font-medium`}>
                  {hobby.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {hobby.description}
                </p>
                <p className={`text-xs text-${hobby.color}-500 dark:text-${hobby.color}-500 mt-2 font-medium`}>
                  {hobby.stats}
                </p>
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
            <motion.div 
              whileHover={{ scale: 1.05 }}
            >
              <div 
                key={skill.name}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium text-white bg-${skill.color}-500 hover:bg-${skill.color}-600 transition-colors`}
              >
              {skill.name}
            </div>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      title: "Learning",
      content: (
        <div className="space-y-4 mb-8">
          {[
            { 
              skill: "AWS", 
              progress: 40,
              color: "amber" // Matching AWS's color from Skills section
            },
            { 
              skill: "System Design", 
              progress: 25,
              color: "purple" // Purple for system design
            },
            { 
              skill: "Korean", 
              progress: 5,
              color: "rose" // Rose/pink for language learning
            }
          ].map((item) => (
            <div key={item.skill} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{item.skill}</span>
                <span>{item.progress}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-${item.color}-500 dark:bg-${item.color}-400`}
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