/**
 * PORTFOLIO DATA - SINGLE SOURCE OF TRUTH
 * Strictly derived from S Hari Shankar's verified resume.
 * No fabricated statistics, dates, technologies, or achievements.
 */

export const portfolioData = {
  personal: {
    name: "S HARI SHANKAR",
    role: "Computer Science Engineering Student",
    subRole: "Software Development & System Architecture Enthusiast",
    summary:
      "Computer Science Engineering student interested in software development and learning how technology can be used to build useful solutions. Looking for opportunities to enhance my skills, gain practical experience, and contribute to real world projects.",
    email: "harishankarism@gmail.com",
    phone: "8124607922",
    location: "", // Omitted per strict anti-hallucination rule (not explicitly stated in resume)
    github: "https://github.com/harimadav",
    githubDisplay: "github.com/harimadav",
    linkedin: "https://linkedin.com/in/harishankar2803",
    linkedinDisplay: "linkedin.com/in/harishankar2803",
    resumeUrl: "/resume.pdf",
    profileImage: "/profile.jpg",
    statusBadge: "Available for Internships & Opportunities",
    web3formsKey: "4990d92c-c26f-47f4-a452-49173150c026"
  },

  education: [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Rajalakshmi Institute of Technology",
      university: "Anna University",
      period: "2024–2028",
      score: "8.49 CGPA",
      type: "Undergraduate Degree",
      description: "Focusing on core computer science foundations, algorithm design, software methodologies, and practical engineering solutions."
    },
    {
      degree: "Class XII (Senior Secondary)",
      institution: "Sudharsanam Vidyaashram",
      university: "CBSE",
      period: "2024",
      score: "85.0%",
      type: "Senior Secondary",
      description: "Completed secondary education under the Central Board of Secondary Education with a strong quantitative and analytical base."
    },
    {
      degree: "Class X (Secondary School)",
      institution: "Sudharsanam Vidyaashram",
      university: "CBSE",
      period: "2022",
      score: "93.4%",
      type: "Secondary School",
      description: "Graduated with distinction with 93.4% aggregate under the CBSE curriculum."
    }
  ],

  experience: [
    {
      role: "Software Development Intern",
      organization: "CODTECH IT Solutions Private Limited",
      period: "Jun 2025",
      type: "Internship",
      details: [
        "Gained practical and basic exposure to software development concepts, workflows, and development methodologies."
      ],
      skillsMentioned: ["Software Development Concepts", "Workflows", "Development Methodologies"]
    },
    {
      role: "Inplant Trainee",
      organization: "Heavy Vehicles Factory (HVF)",
      period: "Jul 2025",
      type: "Industrial Training",
      details: [
        "Gained insights into industrial operations, manufacturing processes and organizational workflows."
      ],
      skillsMentioned: ["Industrial Operations", "Manufacturing Processes", "Organizational Workflows"]
    }
  ],

  projects: [
    {
      id: "water-level-predicting-system",
      title: "Water Level Predicting System",
      description:
        "Developed a smart groundwater prediction system using DWLR sensor data with real time visualization and predictive analytics based on historical dataset.",
      tags: [
        "DWLR Sensor Data",
        "Predictive Analytics",
        "Real-Time Visualization",
        "Historical Dataset"
      ],
      githubUrl: "", // [Add GitHub URL]
      demoUrl: "",
      accent: "cyan"
    },
    {
      id: "learning-management-system",
      title: "Learning Management System (LMS)",
      description:
        "Designed a role-based platform for students and teachers with course management, assignments, progress tracking and grading.",
      tags: [
        "Role-Based Access Control",
        "Course Management",
        "Assignment Submissions",
        "Progress Tracking",
        "Grading System"
      ],
      githubUrl: "", // [Add GitHub URL]
      demoUrl: "",
      accent: "blue"
    },
    {
      id: "library-management-system",
      title: "Library Management System",
      description:
        "Developed an application for managing book records, borrowing, returning, and availability status.",
      tags: [
        "Book Records Management",
        "Borrowing & Returning Flow",
        "Availability Tracking",
        "Data Organization"
      ],
      githubUrl: "", // [Add GitHub URL]
      demoUrl: "",
      accent: "indigo"
    },
    {
      id: "e-voting-system",
      title: "E-Voting System",
      description:
        "Developed a role based online voting platform with Voters, Candidates and Admin modules enabling authenticated voters to select candidates and cast votes with Admin controlled election completion and result publication.",
      tags: [
        "Voter Authentication",
        "Candidate & Admin Modules",
        "Election Lifecycle Control",
        "Result Publication",
        "Role-Based Security"
      ],
      githubUrl: "", // [Add GitHub URL]
      demoUrl: "",
      accent: "purple"
    }
  ],

  certifications: [
    {
      title: "Automation Developer Associate Training",
      organization: "UiPath Academy",
      category: "Robotic Process Automation",
      description: "Professional training on building and orchestrating enterprise automation workflows.",
      credentialUrl: ""
    },
    {
      title: "Advanced Image Analysis for Geospatial Professionals",
      organization: "ISRO",
      category: "Geospatial Data & Imagery",
      description: "Advanced principles and methodologies in processing and analyzing satellite geospatial imagery.",
      credentialUrl: ""
    },
    {
      title: "Design and Analysis of Algorithms",
      organization: "NPTEL",
      category: "Computer Science Foundation",
      description: "Comprehensive certification covering algorithmic design, asymptotic complexity, divide-and-conquer, dynamic programming, and data structures.",
      credentialUrl: ""
    },
    {
      title: "MongoDB Basics for Students",
      organization: "MongoDB",
      category: "Database Engineering",
      description: "Hands-on foundation in document-oriented NoSQL database modeling, querying, indexing, and aggregation pipelines.",
      credentialUrl: ""
    }
  ],

  achievements: [
    {
      title: "First Place – Freshothon",
      event: "Freshothon",
      organization: "Rajalakshmi Institute of Technology",
      description: "Secured First Place in the institutional hackathon/innovation challenge, evaluating problem-solving speed and solution design.",
      highlight: "1st Place Winner"
    },
    {
      title: "First Place – Inter-College Hackathon",
      event: "Inter-College Hackathon",
      organization: "Madha Engineering College",
      description: "Awarded First Place among competing college teams with a ₹2,000 Cash Prize for innovative technical solution delivery.",
      highlight: "₹2,000 Cash Prize Winner"
    },
    {
      title: "Best Paper Award",
      event: 'Research Paper Presentation on "Fault Tolerance"',
      organization: "Rajalakshmi Institute of Technology",
      description: 'Received the Best Paper Award for technical presentation and research rigor on "Fault Tolerance" systems and reliability.',
      highlight: "Best Paper Distinction"
    }
  ],

  skills: {
    // Grouped logically based strictly on resume credentials and projects
    domains: [
      {
        name: "Databases & Data Modeling",
        skills: ["MongoDB (Certified)", "Data Organization", "Querying & Record Management"]
      },
      {
        name: "Core Computer Science",
        skills: [
          "Design & Analysis of Algorithms (NPTEL)",
          "Fault Tolerance Systems (Research)",
          "Data Structures & Complexity Analysis"
        ]
      },
      {
        name: "Data Analytics & Intelligent Systems",
        skills: [
          "DWLR Sensor Data Processing",
          "Predictive Analytics",
          "Real-Time Visualization",
          "Geospatial Image Analysis (ISRO)"
        ]
      },
      {
        name: "Process Automation & Methodologies",
        skills: [
          "Automation Developer Associate (UiPath)",
          "Software Development Concepts",
          "Development Methodologies & Workflows",
          "Industrial Operations Analysis (HVF)"
        ]
      },
      {
        name: "Application Architecture",
        skills: [
          "Role-Based Access Control (RBAC)",
          "Multi-Module Platforms (Admin / Candidate / Voter / Student / Teacher)",
          "State & Availability Management"
        ]
      }
    ],
    softSkills: [
      "Communication",
      "Problem Solving",
      "Team Collaboration",
      "Continuous Learning"
    ]
  }
};

