// Portfolio data — Muhammad Abriq

export const profile = {
  name: "Muhammad Abriq",
  title: "Python Engineer",
  tagline: "AI/LLMs • FastAPI • RAG Systems • Data Analysis",
  bio: "Python engineer specializing in data analysis, AI/LLMs, and scalable FastAPI services. I build intelligent apps, RAG systems, and high-performance web crawlers. Passionate about turning complex ideas into production-ready solutions.",
  avatar: "https://avatars.githubusercontent.com/u/201606183?v=4",
  location: "Pakistan",
  email: "mrabriq756@gmail.com",
  whatsapp: "+923177142606",
  github: "https://github.com/Malikabriq",
  linkedin: "https://www.linkedin.com/in/muhammad-abriq-b119023b7",
  githubUsername: "Malikabriq",
};

export const skills = [
  {
    category: "Languages",
    icon: "💻",
    items: ["Python", "JavaScript", "SQL", "Bash"],
  },
  {
    category: "AI & ML",
    icon: "🤖",
    items: ["LLMs", "LangChain", "RAG Systems", "Transformers (BART)", "Embeddings", "OpenAI API", "Prompt Engineering"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: ["FastAPI", "SQLAlchemy", "Pydantic", "JWT Auth", "RBAC", "Rate Limiting", "Alembic"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: ["PostgreSQL", "SQLite", "Vector DBs"],
  },
  {
    category: "Tools & Infra",
    icon: "🛠️",
    items: ["Docker", "GitHub Actions", "Git", "Streamlit", "Twilio", "REST APIs", "Web Scraping"],
  },
  {
    category: "Data",
    icon: "📊",
    items: ["Data Analysis", "Pandas", "NumPy", "Web Crawling", "ETL Pipelines"],
  },
];

export const projects = [
  {
    id: 1,
    name: "SupportPilot AI",
    description: "An AI agent that classifies support tickets, drafts intelligent replies, and automates customer support operations end-to-end — reducing manual workload significantly.",
    tech: ["Python", "LLMs", "FastAPI", "AI Agents"],
    github: "https://github.com/Malikabriq/SupportPilot-AI",
    color: "from-violet-500 to-purple-600",
    accent: "#7c3aed",
    emoji: "🎯",
    stars: 0,
    image: "project_supportpilot.png",
  },
  {
    id: 2,
    name: "ConversaAI",
    description: "An AI-powered WhatsApp assistant built with Twilio and agent-based architecture. Receives messages via WhatsApp, processes them through an intelligent AI agent with tool access, and delivers real-time automated responses.",
    tech: ["Python", "Twilio", "AI Agents", "WhatsApp API"],
    github: "https://github.com/Malikabriq/ConversaAI",
    color: "from-cyan-500 to-blue-600",
    accent: "#0891b2",
    emoji: "💬",
    stars: 0,
    image: "project_conversaai.png",
  },
  {
    id: 3,
    name: "WebMind",
    description: "A Streamlit-based AI web app that scrapes news from any site, extracts metadata (title, author, date, tags), summarizes content using local BART model, and builds semantic embeddings for retrieval — zero API keys needed.",
    tech: ["Python", "Streamlit", "BART", "NLP", "Web Scraping"],
    github: "https://github.com/Malikabriq/webmind",
    color: "from-emerald-500 to-teal-600",
    accent: "#059669",
    emoji: "🧠",
    stars: 2,
    image: "project_webmind.png",
  },
  {
    id: 4,
    name: "CodeNova AI",
    description: "An AI-powered coding assistant leveraging advanced LLMs to help developers write, debug, and optimize code — designed as a production-grade intelligent development companion.",
    tech: ["Python", "LLMs", "FastAPI", "Code Generation"],
    github: "https://github.com/Malikabriq/CodeNova-Ai",
    color: "from-orange-500 to-red-500",
    accent: "#ea580c",
    emoji: "🚀",
    stars: 1,
    image: "project_codenova.png",
  },
  {
    id: 5,
    name: "FastAPI Task Manager (Full)",
    description: "Full-featured task management API with Role-Based Access Control (RBAC), admin/user roles, JWT authentication, task CRUD operations, and rate-limiting middleware. Production-ready architecture.",
    tech: ["FastAPI", "Python", "JWT", "RBAC", "PostgreSQL"],
    github: "https://github.com/Malikabriq/FastAPI-based-Task-Manager-API-fully-developed-",
    color: "from-blue-500 to-indigo-600",
    accent: "#4f46e5",
    emoji: "📋",
    stars: 2,
    image: "project_taskmanager.png",
  },
  {
    id: 6,
    name: "Course Management System",
    description: "A full-featured LMS with course creation, assessments, user management, reporting, and content delivery. Built with FastAPI and PostgreSQL, complete with analytics, quizzes, and notifications.",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "LMS", "Python"],
    github: "https://github.com/Malikabriq/course-management-system",
    color: "from-pink-500 to-rose-600",
    accent: "#e11d48",
    emoji: "🎓",
    stars: 2,
    image: "project_coursemgmt.png",
  },
];

export const experience = [
  {
    role: "AI Developer",
    company: "Revnix",
    period: "Oct 2025 – Present",
    description: "Working on a real professional product, developing Python-based data workflows and leveraging LLMs, LangChain, and RAG techniques to build production-grade AI features.",
    highlights: [
      "Developed Python-based data workflow using NumPy, Pandas, and FastAPI",
      "Built applications leveraging LLMs, LangChain, and RAG techniques",
      "Designed and integrated generative AI features, model pipelines, and optimized backend services",
    ],
  },
  {
    role: "AI & ML Intern",
    company: "Ranking GROW",
    period: "May 2024 – July 2024",
    description: "Developed AI-driven solutions to improve business analytics and decision-making through machine learning and large-scale data analysis.",
    highlights: [
      "Developed AI-driven solutions to improve business analytics and decision-making",
      "Built ML models and analyzed large datasets with Python, Pandas, and NumPy",
    ],
  },
  {
    role: "Python / AI Engineer",
    company: "Freelance & Open Source",
    period: "2024 – Present",
    description: "Building AI-powered applications including RAG systems, LLM-based agents, and intelligent automation tools. Specializing in FastAPI backend services with production-grade architecture.",
    highlights: [
      "Built AI agents for support automation (SupportPilot, ConversaAI)",
      "Developed RAG systems with local embedding models",
      "Created high-performance web crawlers & NLP pipelines",
      "Designed RESTful APIs with JWT auth & RBAC",
    ],
  },
];

export const stats = [
  { value: "17+", label: "GitHub Repositories" },
  { value: "6+", label: "AI Projects Built" },
  { value: "10+", label: "GitHub Stars" },
  { value: "100%", label: "Python Stack" },
];
