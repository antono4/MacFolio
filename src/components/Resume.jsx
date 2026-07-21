import React from 'react'
import { Download, Mail, MapPin, Linkedin, Globe, Phone } from 'lucide-react'

function Resume() {
  const resumeData = {
    name: 'John Doe',
    title: 'Full Stack Developer',
    email: 'johndoe@email.com',
    phone: '+1 234 567 8900',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/johndoe',
    portfolio: 'johndoe.dev',
    
    summary: 'Passionate full-stack developer with 5+ years of experience building web applications. Specialized in React, Node.js, and cloud technologies. Committed to writing clean, maintainable code and creating exceptional user experiences.',
    
    experience: [
      {
        title: 'Senior Full Stack Developer',
        company: 'TechCorp Inc.',
        period: '2022 - Present',
        description: 'Led development of microservices architecture serving 1M+ users. Implemented CI/CD pipelines reducing deployment time by 60%. Mentored junior developers and conducted code reviews.'
      },
      {
        title: 'Full Stack Developer',
        company: 'StartupXYZ',
        period: '2020 - 2022',
        description: 'Built and maintained React applications with TypeScript. Developed RESTful APIs using Node.js and Express. Collaborated with UX team to implement responsive designs.'
      },
      {
        title: 'Junior Developer',
        company: 'WebAgency',
        period: '2018 - 2020',
        description: 'Developed interactive web pages using JavaScript and jQuery. Maintained WordPress websites for clients. Learned modern frontend frameworks.'
      }
    ],
    
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of Technology',
        period: '2014 - 2018',
        gpa: '3.8/4.0'
      }
    ],
    
    skills: [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'] },
      { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'GraphQL'] },
      { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'] },
      { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Jenkins'] }
    ],
    
    languages: ['English (Native)', 'Spanish (Fluent)', 'Japanese (Basic)']
  }

  return (
    <div className="h-full overflow-auto bg-gray-100">
      {/* Resume Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">{resumeData.name}</h1>
              <p className="text-xl text-white/80 mb-4">{resumeData.title}</p>
              <div className="flex flex-wrap gap-4 text-sm text-white/70">
                <div className="flex items-center gap-1">
                  <Mail size={14} />
                  <span>{resumeData.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone size={14} />
                  <span>{resumeData.phone}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{resumeData.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Linkedin size={14} />
                  <span>{resumeData.linkedin}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Globe size={14} />
                  <span>{resumeData.portfolio}</span>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
              <Download size={18} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto p-8 space-y-8">
        {/* Summary */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">Professional Summary</h2>
          <p className="text-gray-600 leading-relaxed">{resumeData.summary}</p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">Work Experience</h2>
          <div className="space-y-6">
            {resumeData.experience.map((exp, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-blue-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />
                <div className="mb-1">
                  <h3 className="font-semibold text-gray-800">{exp.title}</h3>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-600">{exp.company}</span>
                    <span className="text-gray-500">{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">Education</h2>
          <div className="relative pl-6 border-l-2 border-green-200">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full" />
            <div className="mb-1">
              <h3 className="font-semibold text-gray-800">{resumeData.education[0].degree}</h3>
              <div className="flex justify-between text-sm">
                <span className="text-green-600">{resumeData.education[0].school}</span>
                <span className="text-gray-500">{resumeData.education[0].period}</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm">GPA: {resumeData.education[0].gpa}</p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {resumeData.skills.map((skill, i) => (
              <div key={i}>
                <h3 className="font-semibold text-gray-700 mb-2">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">Languages</h2>
          <div className="flex flex-wrap gap-3">
            {resumeData.languages.map((lang) => (
              <span key={lang} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                {lang}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume
