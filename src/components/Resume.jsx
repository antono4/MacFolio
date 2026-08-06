import React from 'react'
import { Mail, Phone, MapPin, Calendar, Download, Github, Linkedin, ExternalLink } from 'lucide-react'

const Resume = () => {
  const personalInfo = {
    name: 'Antono',
    title: 'Full Stack Developer',
    email: 'antonockr1@gmail.com',
    phone: '+62 812 XXXX XXXX',
    location: 'Jakarta, Indonesia',
    github: 'github.com/antono4',
    linkedin: 'linkedin.com/in/antono4',
    website: 'antono.dev',
  }

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      period: '2022 - Present',
      description: 'Building modern web applications with React and Node.js. Creating responsive and user-friendly interfaces for various clients.',
      technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Web Developer',
      company: 'Tech Studio',
      period: '2020 - 2022',
      description: 'Developed responsive websites and web applications. Implemented modern UI/UX designs and optimized web performance.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'MongoDB', 'Firebase']
    },
    {
      title: 'Junior Developer',
      company: 'Startup Hub',
      period: '2018 - 2020',
      description: 'Started career building WordPress websites and learning modern web technologies.',
      technologies: ['JavaScript', 'PHP', 'MySQL', 'WordPress', 'HTML/CSS']
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Indonesia',
      period: '2014 - 2018',
      gpa: '3.5/4.0',
      achievements: ['Dean\'s List', 'Programming Competition Winner']
    }
  ]

  const skills = {
    'Frontend': ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
    'Backend': ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL'],
    'Database': ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase'],
    'DevOps': ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux', 'Git']
  }

  const certifications = [
    { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024' },
    { name: 'Meta Front-End Developer', issuer: 'Meta', year: '2023' },
  ]

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 to-slate-800 p-6 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl p-8 mb-6 shadow-xl">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                AN
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">{personalInfo.name}</h1>
                <p className="text-xl text-blue-600 font-medium mb-3">{personalInfo.title}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1"><Mail size={14} /> {personalInfo.email}</span>
                  <span className="flex items-center gap-1"><Phone size={14} /> {personalInfo.phone}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {personalInfo.location}</span>
                </div>
                <div className="flex gap-3 mt-3">
                  <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm">
                    <Github size={14} /> {personalInfo.github}
                  </a>
                  <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm">
                    <Linkedin size={14} /> {personalInfo.linkedin}
                  </a>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download size={16} />
              Download CV
            </button>
          </div>
        </div>

        {/* Experience */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-xl">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-sm">💼</span>
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-200 last:border-0">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow" />
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="font-medium">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-sm"><Calendar size={12} /> {exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Skills */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Education */}
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center text-sm">🎓</span>
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-gray-600 text-sm">{edu.school}</p>
                <p className="text-gray-500 text-sm flex items-center gap-1 mt-1"><Calendar size={12} /> {edu.period}</p>
                <div className="flex gap-2 mt-2">
                  {edu.achievements.map((ach) => (
                    <span key={ach} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-md">{ach}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center text-sm">⚡</span>
              Skills
            </h2>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-1">
                    {items.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-md font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm">🏆</span>
            Certifications
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                  <span className="text-2xl">📜</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.issuer} • {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
