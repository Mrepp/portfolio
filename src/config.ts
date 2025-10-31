export const siteConfig = {
  name: "Matthew Repp",
  title: "AI Trainer & Software Engineer",
  description: "Portfolio website of Matthew Repp (In Progress)",
  accentColor: "#FF991C",
  social: {
    linkedin: "https://www.linkedin.com/in/matthew-repp-464666261/",
    github: "https://github.com/Mrepp",
  },
  aboutMe: `I'm a software engineer focused on AI and problem-solving through technology. I enjoy creating tools and systems that make complex ideas more accessible and useful. My work combines curiosity, analytical thinking, and a hands-on approach to building reliable, meaningful software.`,
  skills: ["Python", "JavaScript", "C++", "React", "TensorFlow", "Next.js"],
  projects: [
    {
      name: "WithinReach",
      description:
        "Local-first travel-time isochrone generator with FastAPI, Dramatiq, and Streamlit. Computes reachable areas offline using local OSM data, supports asynchronous jobs, and provides an interactive map UI.",
      link: "https://github.com/Mrepp/WithinReach",
      skills: [
        "Python",
        "FastAPI",
        "Streamlit",
        "Dramatiq",
        "SQLite",
        "OSM",
        "Geospatial",
      ],
    },
    {
      name: "arxivPod",
      description:
        "AI research podcast studio that turns arXiv papers into narrated podcasts. Features multi-model orchestration, personality-aware SSML narration, and a React-based frontend for episode management.",
      link: "https://github.com/Mrepp/arxivPod",
      skills: [
        "Python",
        "Google Cloud Functions",
        "OpenRouter API",
        "React",
        "SSML",
        "TTS",
        "Terraform",
      ],
    },
    {
    name: "RecipeCrawler",
    description:
      "Distributed, steerable recipe discovery system that crawls, classifies, and ranks full-ingredient recipes using FastAPI, Redis, and Postgres. Workflows are orchestrated with Prefect and can be directed via custom CSE seed queries. Features an ML-driven domain scoring engine with an admin dashboard for adaptive, data-informed crawling.",
    link: "https://github.com/Mrepp/RecipeCrawler",
    skills: [
      "Python",
      "FastAPI",
      "Redis",
      "PostgreSQL",
      "Playwright",
      "Docker",
      "Prefect",
    ],
    },
    {
      name: "College Student Interview Survey — Proof of Concept",
      description:
        "Interactive proof of concept for visualizing and exploring qualitative interview data from college students. Ingests structured JSON outputs, enriches them with text embeddings, and builds a static visualization platform for semantic and full-text search.",
      link: "https://github.com/Mrepp/SESAP-validation-test",
      skills: [
        "Python",
        "React",
        "FAISS",
        "Lunr.js",
        "D3.js",
        "Tailwind",
        "sentence-transformers",
        "JSON Schema",
        "Vite",
        "GitHub Actions"
      ],
    },
  ],
  
  experience: [
    {
      company: "DataAnnotation",
      title: "AI Code Trainer",
      dateRange: "Feb 2023 - Present",
      bullets: [
        "Enhanced LLM coding and agentic performance through evaluation and testing.",
        "Expanded model test coverage with unit and integration tests.",
        "Contributed research to advance agentic AI systems.",
        "Supported human-in-the-loop workflows and annotation review.",
        "Worked across Python, JavaScript, and C++ using frameworks like React and TensorFlow.",
      ],
    },
    {
      company: "Unifreelancer",
      title: "Business Development Consultant",
      dateRange: "Mar 2025 - Jun 2025",
      bullets: [
        "Contributed to go-to-market and commercialization planning.",
        "Supported product research and market positioning.",
        "Developed marketing and pricing strategies for user growth.",
      ],
    },
    {
      company: "Freelance",
      title: "Web Designer",
      dateRange: "Jan 2020 - Apr 2023",
      bullets: [
        "Created responsive websites for diverse businesses.",
        "Improved localization, SEO, and accessibility compliance.",
        "Delivered fast, user-friendly, and inclusive web experiences.",
      ],
    },
  ],
  education: [
    {
      school: "Oregon State University",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2021 - 2026",
      achievements: [
        "Emphasis on product innovation, machine learning, and statistical modeling.",
        "Completed coursework in data-driven decision making, software development, and entrepreneurial strategy.",
        "Recognized on Dean’s List and Honors Roll.",
      ],
    },
  ],
};
