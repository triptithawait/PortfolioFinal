import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  ExternalLink, 
  Play, 
  CheckCircle, 
  Award as Trophy, 
  Send, 
  Menu, 
  X, 
  Layers, 
  Compass, 
  ArrowUpRight,
  Terminal,
  Activity,
  FileText,
  ShieldCheck
} from 'lucide-react';

const RESUME_DATA = {
  name: "Tripti Thawait",
  tagline: "AI/ML Enthusiast & Full-Stack Developer",
  subtagline: "Specializing in precision AI systems, multimodal frameworks, and data-driven solutions.",
  cgpa: "8.99",
  email: "triptithawait20@gmail.com",
  phone: "+91 9009885425",
  location: "Raigarh, C.G., India",
  links: {
    linkedin: "https://www.linkedin.com/in/tripti-thawait-7201b1285", 
    github: "https://github.com/triptithawait"
  },
  education: [
    {
      degree: "Bachelor of Technology",
      spec: "Computer Science & Engineering",
      inst: "Amity University Chhattisgarh",
      period: "2023 - 2027",
      scoreType: "CGPA",
      score: "8.99"
    },
    {
      degree: "Senior Secondary (12th)",
      spec: "Science & Mathematics (CBSE)",
      inst: "Completed 2023",
      scoreType: "Percentage",
      score: "82.20%"
    },
    {
      degree: "Secondary School (10th)",
      spec: "General Science (CBSE)",
      inst: "Completed 2021",
      scoreType: "Percentage",
      score: "92.60%"
    }
  ],
  skills: [
    { name: "TensorFlow", category: "AI/ML", level: 92 },
    { name: "Keras", category: "AI/ML", level: 89 },
    { name: "Scikit-Learn", category: "AI/ML", level: 93 },
    { name: "MobileNetV2", category: "AI/ML", level: 87 },
    { name: "Scikit-Fuzzy", category: "AI/ML", level: 90 },
    { name: "Gemini 2.0 Vision", category: "AI/ML", level: 91 },
    { name: "Groq LLM", category: "AI/ML", level: 88 },
    { name: "NetworkX", category: "AI/ML", level: 85 },
    { name: "Pandas", category: "Data Science", level: 94 },
    { name: "NumPy", category: "Data Science", level: 95 },
    { name: "SciPy", category: "Data Science", level: 87 },
    { name: "Matplotlib", category: "Data Science", level: 91 },
    { name: "Seaborn", category: "Data Science", level: 90 },
    { name: "Google Colab", category: "Data Science", level: 95 },
    { name: "MATLAB", category: "Data Science", level: 82 },
    { name: "React", category: "Full-Stack", level: 92 },
    { name: "Node.js", category: "Full-Stack", level: 87 },
    { name: "Express.js", category: "Full-Stack", level: 86 },
    { name: "FastAPI", category: "Full-Stack", level: 92 },
    { name: "HTML", category: "Full-Stack", level: 95 },
    { name: "CSS", category: "Full-Stack", level: 95 },
    { name: "Chart.js", category: "Full-Stack", level: 89 },
    { name: "jsPDF", category: "Full-Stack", level: 84 },
    { name: "i18next", category: "Full-Stack", level: 83 },
    { name: "MongoDB", category: "Databases", level: 88 },
    { name: "MySQL", category: "Databases", level: 89 },
    { name: "SQLite", category: "Databases", level: 85 },
    { name: "Python", category: "Languages", level: 96 },
    { name: "JavaScript", category: "Languages", level: 90 },
    { name: "C", category: "Languages", level: 85 },
    { name: "C++", category: "Languages", level: 88 },
    { name: "Java", category: "Languages", level: 84 }
  ],
  projects: [
    {
      id: "veganai",
      title: "VeganAI: Multimodal Nutrition Platform",
      status: "Published & Deployed",
      tags: ["FastAPI", "Gemini 2.0 Vision", "Imagen 3.0", "Groq LLM", "React", "Node.js", "jsPDF", "i18next"],
      bullets: [
        "Built a precision nutrition app with photo-to-recipe conversion, personalized macro tracking, and professional PDF nutrition reports.",
        "Implemented an ultra-premium 4K glassmorphism UI for a seamless user experience.",
        "Integrated multi-lingual framework using i18next for global accessibility."
      ],
      publication: "Published in IIRCJ, Vol. 4, Issue 4 (Apr 2026). ISSN: 2584-1491.",
      repoLink: "https://github.com/triptithawait/VeganAI",
      deployedLink: "https://vegan-ai-nu.vercel.app/"
    },
    {
      id: "smartnav",
      title: "Vehicle-Size-Aware Smart Navigation",
      status: "Published Research",
      tags: ["MobileNetV2", "Scikit-Fuzzy", "NetworkX", "Python", "Dijkstra"],
      bullets: [
        "Developed a road-width estimation CNN combined with fuzzy logic vehicle suitability scoring and Dijkstra routing.",
        "Optimizes navigation paths for different vehicle sizes (Hatchback vs. large cargo trucks) on narrow Indian roads.",
        "Prevents heavy vehicle trapping while calculating mathematically optimal detours."
      ],
      publication: "Published research paper in International Journal of Computer Science (Apr-May 2026).",
      repoLink: "https://github.com/triptithawait/VSASNS",
      deployedLink: null
    },
    {
      id: "xorscratch",
      title: "XOR Classifier (From Scratch)",
      status: "Mathematical Demo",
      tags: ["Python", "NumPy", "Manual Backprop", "Matrix Math"],
      bullets: [
        "Implemented a 100% accuracy neural network using manual backpropagation in pure NumPy - zero ML libraries.",
        "Demonstrated a deep conceptual grasp of gradient descent, weight matrix dot products, sigmoid activations, and backpropagation derivatives.",
        "Supports real-time analytical monitoring of weights and learning convergence curves."
      ],
      publication: "Academic Deep-Dive & Open Source Demonstration",
      repoLink: "https://github.com/triptithawait",
      deployedLink: null
    }
  ],
  internships: [
    {
      role: "Data Science Intern",
      company: "Corizo (IIT Bombay's Mood Indigo)",
      period: "Apr 2026 - May 2026",
      location: "Remote",
      bullets: [
        "Successfully completed an intensive internship in Data Science, demonstrating diligence, active participation, and technical innovation.",
        "Worked on high-impact real-world data science projects covering multi-dimensional data analysis.",
        "Developed advanced models targeting semiconductor manufacturing process optimization."
      ]
    },
    {
      role: "Vocational Trainee",
      company: "National Thermal Power Corporation (NTPC)",
      period: "Jun 2025 - Jul 2025",
      location: "Raigarh, C.G.",
      bullets: [
        "Studied thermal power plant operations, SCADA control systems, and complex boiler and turbine maintenance mechanics.",
        "Focused heavily on operational efficiency, predictive maintenance, and control system reliability.",
        "Learned environmental management protocols and occupational health and safety practices in industrial environments."
      ]
    }
  ],
  publications: [
    {
      title: "Vehicle Size-Aware Smart Navigation System",
      journal: "International Journal of Computer Science",
      period: "Apr 2026 - May 2026",
      desc: "Introduces deep learning road-width CNNs coupled with fuzzy logic decision grids to calculate optimal navigation scores for distinct vehicle sizes.",
      link: "https://www.ijcsejournal.org/vehicle-size-aware-smart-navigation/"
    },
    {
      title: "VeganAI - A Multimodal Artificial Intelligence Framework for Personalized Plant-Based Precision Nutrition",
      journal: "IIRCJ, Vol. 4, Issue 4",
      period: "Apr 2026",
      desc: "Details the multi-model architecture incorporating computer vision (Gemini 2.0) and image generation (Imagen 3.0) models for real-time meal planning and tracking. ISSN: 2584-1491.",
      link: "https://zenodo.org/search?q=VeganAI"
    },
    {
      title: "AI-Driven Autonomous Vehicles: A Comprehensive Review of Innovations, Challenges and Future Pathways",
      journal: "IJRASET",
      period: "Sep 2025",
      desc: "Provides an exhaustive review of trajectory prediction, obstacle detection, sensory fusion, and the integration bottlenecks of L4/L5 automation systems.",
      link: "https://www.ijraset.com/research-paper/innovations-challenges-and-future-pathways"
    }
  ],
  achievements: [
    "Ranked 3rd out of 70 teams - Internal Smart India Hackathon 2024, organized by the Ministry of Education, Government of India.",
    "Successfully published 2 first-author research papers and 1 comprehensive review paper before B.Tech graduation.",
    "Maintained an exceptional academic standing with a CGPA of 8.99/10.00 throughout engineering course."
  ],
  certifications: [
    {
      title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      issuer: "Oracle",
      date: "Oct 2025",
      link: null
    },
    {
      title: "Oracle OCI 2025 Data Science Professional",
      issuer: "Oracle",
      date: "Oct 2025",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1019454687F93F651396EF9C247F322D4089C451A72D1DDBFBA65350D8E71CC0"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud Skill Boost",
      date: "Oct 2023",
      link: "https://www.skills.google/public_profiles/1de2e2c1-199a-47ad-882f-2c70c49dbe9f/badges/5552792"
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "Sep 2023",
      link: null
    }
  ],
  strengths: [
    "Problem-Solving", "Creative Thinking", "Adaptability", "Teamwork", 
    "Technical Writing", "Fast Learner", "Attention to Detail"
  ]
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // XOR Simulator States
  const [xorW11, setXorW11] = useState(0.45);
  const [xorW12, setXorW12] = useState(-0.12);
  const [xorW21, setXorW21] = useState(0.78);
  const [xorW22, setXorW22] = useState(0.23);
  const [xorBias, setXorBias] = useState(0.1);
  const [xorLoss, setXorLoss] = useState(0.35);
  const [xorEpoch, setXorEpoch] = useState(0);
  const [isTrainingXOR, setIsTrainingXOR] = useState(false);
  const [trainingSpeed] = useState(80); 

  // Smart Navigation Simulator States
  const [selectedVehicleType, setSelectedVehicleType] = useState('hatchback'); 
  const [scannedRoadWidth, setScannedRoadWidth] = useState(3.2); 
  const [fuzzyScore, setFuzzyScore] = useState(82); 
  const [routingOutput, setRoutingOutput] = useState("Route standard - Fast path available");

  // Conversational Assistant Chat States
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: "Hello! I am Tripti's portfolio assistant. You can ask me standard questions regarding her background, research publications, or the interactive simulators!" }
  ]);
  const [chatInput, setChatInput] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'skills', 'projects', 'demos', 'experience', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let intervalId;
    if (isTrainingXOR) {
      intervalId = setInterval(() => {
        setXorEpoch(prev => {
          const nextEpoch = prev + 1;
          setXorLoss(currLoss => {
            const targetLoss = 0.002;
            if (currLoss <= targetLoss) {
              setIsTrainingXOR(false);
              return targetLoss;
            }
            return Math.max(targetLoss, currLoss - 0.018 * (Math.random() * 0.8 + 0.2));
          });

          setXorW11(w => w + (0.95 - w) * 0.06);
          setXorW12(w => w + (-0.65 - w) * 0.06);
          setXorW21(w => w + (-0.85 - w) * 0.06);
          setXorW22(w => w + (0.90 - w) * 0.06);
          setXorBias(b => b + (-0.3 - b) * 0.06);

          if (nextEpoch >= 200) {
            setIsTrainingXOR(false);
          }
          return nextEpoch;
        });
      }, trainingSpeed);
    }
    return () => clearInterval(intervalId);
  }, [isTrainingXOR, trainingSpeed]);

  const handleResetXOR = () => {
    setIsTrainingXOR(false);
    setXorEpoch(0);
    setXorLoss(0.48);
    setXorW11(Number((Math.random() - 0.5).toFixed(2)));
    setXorW12(Number((Math.random() - 0.5).toFixed(2)));
    setXorW21(Number((Math.random() - 0.5).toFixed(2)));
    setXorW22(Number((Math.random() - 0.5).toFixed(2)));
    setXorBias(Number((Math.random() - 0.5).toFixed(2)));
  };

  const handleVehicleChange = (type) => {
    setSelectedVehicleType(type);
    calculateFuzzyLogic(type, scannedRoadWidth);
  };

  const handleRoadWidthChange = (val) => {
    const width = parseFloat(val);
    setScannedRoadWidth(width);
    calculateFuzzyLogic(selectedVehicleType, width);
  };

  const calculateFuzzyLogic = (vehicle, width) => {
    let maxVehicleWidth = 1.6; 
    if (vehicle === 'suv') maxVehicleWidth = 2.0;
    if (vehicle === 'truck') maxVehicleWidth = 2.8;

    const safetyBuffer = width - maxVehicleWidth;
    let score = 0;

    if (safetyBuffer <= 0.1) {
      score = 5; 
    } else if (safetyBuffer < 0.5) {
      score = 15 + (safetyBuffer * 80);
    } else if (safetyBuffer < 1.2) {
      score = 55 + (safetyBuffer * 30);
    } else {
      score = 95;
    }

    score = Math.min(100, Math.max(0, Math.round(score)));
    setFuzzyScore(score);

    if (score < 25) {
      setRoutingOutput("Dijkstra Flag: BLOCK ROAD. Diverting vehicle to wider alternate highway (+1.4 km).");
    } else if (score < 60) {
      setRoutingOutput("Dijkstra Flag: WARNING route. Proceed with low speed (max 15 km/h). Extreme caution on edges.");
    } else {
      setRoutingOutput("Dijkstra Flag: GREEN route. Optimal width detected. No bypass required.");
    }
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');

    setTimeout(() => {
      const lower = userMsg.toLowerCase();
      let reply = "";

      if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
        reply = "Hello there! I'm Tripti's portfolio assistant. Feel free to ask about her academic standings, publications, or the project simulators below.";
      } else if (lower.includes('cgpa') || lower.includes('gpa') || lower.includes('education')) {
        reply = `Tripti is completing her B.Tech in CSE at Amity University Chhattisgarh with an outstanding CGPA of ${RESUME_DATA.cgpa} (2023-2027 batch). Her senior secondary school scores are: 92.6% (10th) and 82.20% (12th).`;
      } else if (lower.includes('project') || lower.includes('veganai') || lower.includes('smart navigation')) {
        reply = "Tripti developed outstanding projects: 1. VeganAI (Multimodal nutrition platform), 2. Vehicle-Size-Aware Smart Navigation (MobileNetV2 + Scikit-Fuzzy), and 3. XOR Classifier from scratch using pure NumPy.";
      } else if (lower.includes('publication') || lower.includes('paper') || lower.includes('research')) {
        reply = "She has published 3 research papers: on Vehicle Size-Aware Navigation (IJCS), on VeganAI (IIRCJ - ISSN: 2584-1491), and an Autonomous Vehicles review paper in IJRASET.";
      } else if (lower.includes('skill') || lower.includes('language') || lower.includes('stack')) {
        reply = "Tripti's skillset spans AI/ML (TensorFlow, Keras, Scikit-Fuzzy), Data Science (Pandas, NumPy, MATLAB), Full-Stack (FastAPI, React, Node.js), and languages (Python, C++, Java, C).";
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone')) {
        reply = `Reach her directly via email at ${RESUME_DATA.email} or call ${RESUME_DATA.phone}. She is based in Raigarh, C.G., India.`;
      } else if (lower.includes('intern') || lower.includes('experience') || lower.includes('corizo') || lower.includes('ntpc')) {
        reply = "She worked as a Data Science Intern at Corizo (IIT Bombay's Mood Indigo) and completed a Vocational Training at National Thermal Power Corporation (NTPC).";
      } else {
        reply = "Tripti is highly passionate about computer vision, fuzzy controllers, and full-stack integration. Check out the interactive XOR and Road Grader simulators on this web page!";
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 600);
  };

  const sendQuickPrompt = (prompt) => {
    setChatMessages(prev => [...prev, { sender: 'user', text: prompt }]);
    setTimeout(() => {
      let reply = "";
      if (prompt.includes("What is her CGPA?")) {
        reply = `Tripti holds a stellar B.Tech CGPA of ${RESUME_DATA.cgpa} at Amity University Chhattisgarh.`;
      } else if (prompt.includes("Tell me about VeganAI")) {
        reply = "VeganAI is a multimodal platform utilizing Gemini 2.0 Vision & Imagen 3.0 to generate plant-based plans with glassmorphic dashboards, published in IIRCJ in April 2026.";
      } else if (prompt.includes("What are her core skills?")) {
        reply = "Tripti's core skill groups include AI/ML (TensorFlow, Scikit-Fuzzy), Data Science (Pandas, NumPy), and Full-Stack development (FastAPI, React, Node.js).";
      }
      setChatMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 400);
  };

  const filteredSkills = selectedSkillCategory === 'All'
    ? RESUME_DATA.skills
    : RESUME_DATA.skills.filter(s => s.category === selectedSkillCategory);

  const categories = ['All', 'AI/ML', 'Data Science', 'Full-Stack', 'Databases', 'Languages'];

  return (
    <div className="min-h-screen bg-[#020208] text-slate-100 font-sans selection:bg-violet-500 selection:text-white overflow-x-hidden">
      
      {}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Manrope:wght@300;400;500;600;700;800&family=IBM+Plex+Mono:wght@300;400;500;600;700&display=swap');
        
        .font-sans {
          font-family: 'Manrope', sans-serif;
        }
        h1, h2, h3, h4, .font-heading {
          font-family: 'Sora', sans-serif;
        }
        .font-mono {
          font-family: 'IBM Plex Mono', monospace;
        }
      `}</style>

      {}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(139,92,246,0.15),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none z-0 animate-pulse" />
      <div className="absolute top-[50%] left-[-10%] w-[500px] h-[500px] bg-violet-600/5 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b0b1a_1px,transparent_1px),linear-gradient(to_bottom,#0b0b1a_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none opacity-40 z-0" />

      {}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#020208]/80 backdrop-blur-lg border-b border-[#141230] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo-free Header Brand Section matching image_4ae878.png */}
          <div className="flex items-center">
            <div>
              <span className="font-extrabold text-sm tracking-wider text-white uppercase block leading-none font-heading">TRIPTI THAWAIT</span>
              <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase mt-1.5 block">AI/ML & MULTIMODAL SYSTEMS</span>
            </div>
          </div>

          {/* Desktop Navigation Cluster */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#0a0a1a] border border-[#1b193a] p-1 rounded-full">
            {['home', 'education', 'skills', 'projects', 'demos', 'experience', 'achievements', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 rounded-full transition-all duration-200 ${
                  activeSection === item 
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-extrabold shadow-md shadow-violet-500/25' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="mailto:triptithawait20@gmail.com" 
              className="px-4 py-2 bg-gradient-to-r from-violet-950 to-indigo-950 hover:from-violet-900 hover:to-indigo-900 border border-violet-800/50 rounded-lg text-[10px] font-mono text-cyan-300 flex items-center gap-2 transition-all shadow-md shadow-violet-950/20"
            >
              <Mail size={12} /> Contact Gateway
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#050510]/95 border-b border-[#141230] px-4 py-4 flex flex-col gap-2 animate-fadeIn">
            {['home', 'education', 'skills', 'projects', 'demos', 'experience', 'achievements', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs font-mono tracking-wider uppercase py-2.5 px-3 rounded-lg ${
                  activeSection === item ? 'bg-violet-500/10 text-cyan-400 border-l-2 border-cyan-400 font-bold' : 'text-slate-400'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {}
      <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Bento Card 1: Clean, Logo-Free Hero Introduction */}
            <div className="lg:col-span-7 bg-gradient-to-b from-[#0b0b1f] to-[#040410] border border-[#1b1a3d] hover:border-[#2d2963] p-8 rounded-2xl flex flex-col justify-between shadow-xl relative overflow-hidden transition-all duration-300 group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-violet-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-600/20 transition-all duration-300" />
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                    Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">{RESUME_DATA.name}</span>
                  </h1>
                  <p className="text-xs sm:text-sm font-mono text-cyan-400 font-semibold uppercase tracking-widest bg-[#04040c] border border-cyan-950/50 inline-block px-3 py-1 rounded-md">
                    {RESUME_DATA.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-medium">
                  {RESUME_DATA.subtagline}
                </p>

                {/* Styled Contact Outlines */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 font-mono text-[11px] text-slate-400">
                  <div className="flex items-center gap-2.5 bg-[#03030b] border border-[#141230] p-3 rounded-xl hover:border-violet-800/30 transition-all">
                    <Mail size={12} className="text-violet-400" />
                    <span className="truncate">{RESUME_DATA.email}</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-[#03030b] border border-[#141230] p-3 rounded-xl hover:border-violet-800/30 transition-all">
                    <Phone size={12} className="text-violet-400" />
                    <span>{RESUME_DATA.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-[#03030b] border border-[#141230] p-3 rounded-xl hover:border-violet-800/30 transition-all">
                    <MapPin size={12} className="text-violet-400" />
                    <span>{RESUME_DATA.location}</span>
                  </div>
                  <div className="flex items-center justify-around bg-[#03030b] border border-[#141230] p-3 rounded-xl hover:border-violet-800/30 transition-all">
                    <a href={RESUME_DATA.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                      <Linkedin size={11} className="text-violet-400" /> LinkedIn <ArrowUpRight size={8} />
                    </a>
                    <span className="text-slate-800">|</span>
                    <a href={RESUME_DATA.links.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                      <Github size={11} className="text-violet-400" /> GitHub <ArrowUpRight size={8} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-6 border-t border-[#141230] mt-8">
                <a 
                  href="#projects" 
                  className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold rounded-lg text-[10px] font-mono tracking-wider uppercase transition-all flex items-center gap-2 shadow-lg shadow-violet-500/20"
                >
                  Explore Code & Papers <ArrowUpRight size={12} />
                </a>
                <a 
                  href="#demos" 
                  className="px-5 py-2.5 bg-[#050510] hover:bg-[#0c0c20] border border-[#1c193a] text-slate-300 font-bold rounded-lg text-[10px] font-mono tracking-wider uppercase transition-all flex items-center gap-2 hover:border-violet-800/50"
                >
                  <Compass size={12} className="text-cyan-400" /> Lab Sandboxes
                </a>
              </div>
            </div>

            {/* Bento Card 2: Interactive AI Assistant Console */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#060614] to-[#020208] border border-[#1b1a3d] hover:border-[#2d2963] rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300">
              
              <div className="bg-[#0b0b1f] p-4 border-b border-[#1b1a3d] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-[10px] text-slate-300 font-bold">TriptiBot_Core_v2.0</span>
                </div>
                <div className="font-mono text-[8px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded uppercase tracking-wider">
                  online
                </div>
              </div>

              <div className="p-4 h-[260px] overflow-y-auto flex flex-col gap-3 font-mono text-xs">
                {chatMessages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col max-w-[85%] ${msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'}`}
                  >
                    <span className="text-[8px] text-slate-500 mb-0.5 uppercase tracking-wider">
                      {msg.sender === 'user' ? 'RECRUITER' : 'SYSTEM_AI'}
                    </span>
                    <div 
                      className={`p-3 rounded-xl border text-[11px] leading-relaxed ${
                        msg.sender === 'user' 
                          ? 'bg-violet-600/15 border-violet-500/30 text-cyan-300' 
                          : 'bg-[#0b0b1f] border-[#1c1a3b] text-slate-300'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-4 py-2 border-t border-[#141230] bg-[#03030b] flex flex-wrap gap-1.5">
                <button 
                  onClick={() => sendQuickPrompt("What is her CGPA?")}
                  className="text-[9px] font-mono bg-[#0b0b1f] hover:bg-[#151535] border border-[#1c1a3b] px-2.5 py-1 rounded text-slate-400 hover:text-cyan-400 transition-all"
                >
                  CGPA Status
                </button>
                <button 
                  onClick={() => sendQuickPrompt("Tell me about VeganAI")}
                  className="text-[9px] font-mono bg-[#0b0b1f] hover:bg-[#151535] border border-[#1c1a3b] px-2.5 py-1 rounded text-slate-400 hover:text-cyan-400 transition-all"
                >
                  VeganAI Info
                </button>
                <button 
                  onClick={() => sendQuickPrompt("What are her core skills?")}
                  className="text-[9px] font-mono bg-[#0b0b1f] hover:bg-[#151535] border border-[#1c1a3b] px-2.5 py-1 rounded text-slate-400 hover:text-cyan-400 transition-all"
                >
                  Skills Matrix
                </button>
              </div>

              <form onSubmit={handleChatSubmit} className="border-t border-[#1b1a3d] bg-[#0b0b1f] flex items-center">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask standard query (e.g. CGPA, Projects, Papers)..."
                  className="flex-1 bg-transparent border-0 px-4 py-3 text-[11px] font-mono text-slate-200 focus:outline-none focus:ring-0 placeholder:text-slate-600"
                />
                <button 
                  type="submit" 
                  className="p-3 text-cyan-400 hover:text-cyan-300 border-l border-[#1b1a3d] transition-colors"
                >
                  <Send size={12} />
                </button>
              </form>

            </div>

          </div>
        </div>
      </section>

      {}
      <section id="education" className="py-20 border-t border-[#141230] bg-[#03030c] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-widest block mb-1">Academic Credentials</span>
              <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                <GraduationCap className="text-violet-400" size={24} /> Education Timeline
              </h2>
            </div>
            
            <div className="mt-4 md:mt-0 bg-[#060616] border border-[#1c193a] px-4 py-3 rounded-xl flex items-center gap-3">
              <Trophy className="text-amber-500" size={20} />
              <div>
                <span className="block text-[8px] text-slate-500 uppercase font-mono tracking-widest">Active Academic Status</span>
                <span className="font-mono text-xs font-bold text-white">CGPA {RESUME_DATA.cgpa} / 10.00</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESUME_DATA.education.map((edu, idx) => (
              <div 
                key={idx}
                className="group border border-[#1b1a3d] hover:border-violet-500/40 rounded-xl p-6 bg-gradient-to-b from-[#0b0b20] to-[#04040f] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="h-9 w-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-cyan-400">
                      <GraduationCap size={16} />
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 bg-[#020208] px-2 py-1 rounded border border-[#1c193a]">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-sm group-hover:text-cyan-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-[11px] text-violet-400 font-mono mt-1">{edu.spec}</p>
                  <p className="text-[11px] text-slate-400 mt-2 font-medium">{edu.inst}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1c193a] flex items-center justify-between">
                  <span className="text-[8px] text-slate-500 uppercase tracking-widest font-mono">Performance:</span>
                  <span className="font-mono text-[11px] font-bold text-white bg-[#020208] border border-[#1c193a] px-2.5 py-1 rounded">
                    {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section id="skills" className="py-20 border-t border-[#141230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-widest block mb-1">Capability Spectrum</span>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Technical Skill Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Direct competence and hands-on experience in training deep neural architectures, scientific data modeling, full-stack frameworks, and high-performance databases.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedSkillCategory(cat)}
                className={`px-4 py-1.5 rounded-lg font-mono text-[9px] tracking-wider uppercase transition-all ${
                  selectedSkillCategory === cat 
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-extrabold shadow-md shadow-violet-500/25' 
                    : 'bg-[#0b0b1f] border border-[#1c193a] text-slate-400 hover:text-white hover:border-violet-800/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredSkills.map((skill, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-b from-[#08081a] to-[#03030b] border border-[#1b1a3d] hover:border-violet-500/30 p-4 rounded-xl transition-all group flex flex-col justify-between h-28 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">{skill.category}</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-[11px] sm:text-xs tracking-wide group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h4>
                </div>
                <div className="w-full bg-[#020208] h-1 rounded-full overflow-hidden border border-[#141230]">
                  <div 
                    className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-400 h-full rounded-full transition-all duration-1000" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section id="projects" className="py-20 border-t border-[#141230] bg-[#03030c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-widest block mb-1">Production Applications</span>
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Layers size={22} className="text-violet-400" /> Research Projects & Implementations
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
              First-author peer-reviewed models and software frameworks resolving core obstacles in autonomous vehicles routing systems, multimodal diet plans, and mathematical neural nodes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {RESUME_DATA.projects.map((proj, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-b from-[#0b0b20] to-[#04040f] border border-[#1b1a3d] hover:border-violet-500/30 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center border-b border-[#1b1a3d] pb-3">
                    <span className="px-2 py-0.5 bg-violet-500/10 border border-violet-500/20 rounded text-[8px] font-mono font-semibold text-cyan-300 uppercase tracking-widest">
                      {proj.status}
                    </span>
                    <span className="text-[9px] font-mono text-slate-500">
                      SYS://PRJ_{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {proj.title}
                  </h3>

                  <div className="flex flex-wrap gap-1">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 bg-[#020208] border border-[#1b1a3d] text-[8px] font-mono text-slate-300 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 pt-2">
                    {proj.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs text-slate-400 flex items-start gap-2 leading-relaxed">
                        <span className="text-violet-400 mt-1 shrink-0">▪</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-[#040410] border-t border-[#1b1a3d] space-y-3">
                  <div className="flex gap-2 items-start bg-[#020208] border border-[#1b1a3d] p-3 rounded-lg">
                    <BookOpen size={13} className="text-violet-400 shrink-0 mt-0.5" />
                    <p className="text-[9px] text-slate-400 font-mono italic leading-snug">
                      {proj.publication}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {proj.repoLink && (
                      <a 
                        href={proj.repoLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="py-2 bg-[#020208] hover:bg-[#0c0c20] border border-[#1c193a] rounded-lg text-[9px] font-mono uppercase tracking-wider text-center text-slate-300 transition-all flex items-center justify-center gap-1"
                      >
                        <Github size={11} /> Code Repo
                      </a>
                    )}
                    {proj.deployedLink ? (
                      <a 
                        href={proj.deployedLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="py-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-lg text-[9px] font-mono uppercase tracking-wider text-center text-white font-bold transition-all flex items-center justify-center gap-1 shadow-md shadow-violet-600/10"
                      >
                        <ExternalLink size={11} /> Live App
                      </a>
                    ) : (
                      <a 
                        href="#demos" 
                        className="py-2 bg-[#0b0b1f] hover:bg-[#121235] border border-violet-800/30 rounded-lg text-[9px] font-mono uppercase tracking-wider text-center text-cyan-400 transition-all flex items-center justify-center gap-1"
                      >
                        <Play size={10} /> Local Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section id="demos" className="py-20 border-t border-[#141230] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-cyan-300 rounded-full font-mono text-[9px] uppercase tracking-wider">
              Interactive Mathematics Laboratory
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white mt-3">
              Research Algorithm Sandboxes
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Directly interact with model abstractions simulating weights optimization, backpropagation, and vehicle-size-aware fuzzy logic path overrides.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Box A: XOR Backpropagation Machine */}
            <div className="bg-gradient-to-b from-[#0b0b20] to-[#04040f] border border-[#1b1a3d] rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden transition-all duration-300 group hover:border-violet-500/30">
              <div className="absolute top-0 right-0 p-3 text-[8px] font-mono text-slate-500 uppercase tracking-widest">
                numpy calculations from scratch
              </div>

              <div>
                <div className="flex items-center gap-2 text-violet-400 mb-2">
                  <Terminal size={14} />
                  <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-cyan-400">Node: Neural Network Parameter Optimizer</span>
                </div>
                
                <h3 className="text-base font-bold text-white mb-2">XOR Layer Backpropagation Optimizer</h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  Trained using raw Matrix multiplication, weights gradients derivative calculation and weight offsets updating.
                </p>

                <div className="bg-[#020208] p-4 rounded-xl border border-[#1b1a3d] mb-6 space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0b0b20] border border-[#1c1a3b] p-3 rounded-lg">
                      <span className="block text-[8px] text-slate-500 uppercase">Training Steps</span>
                      <span className="text-cyan-400 font-bold text-xs">{xorEpoch} / 200</span>
                    </div>
                    <div className="bg-[#0b0b20] border border-[#1c1a3b] p-3 rounded-lg">
                      <span className="block text-[8px] text-slate-500 uppercase">Calculated L2 Loss</span>
                      <span className={`text-xs font-bold block ${xorLoss < 0.1 ? 'text-cyan-400' : 'text-amber-500'}`}>
                        {xorLoss.toFixed(5)}
                      </span>
                    </div>
                  </div>

                  <div className="w-full bg-[#0b0b20] h-1.5 rounded-full overflow-hidden border border-[#1c193a]">
                    <div 
                      className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-400 h-full rounded-full transition-all duration-300" 
                      style={{ width: `${Math.min(100, (xorEpoch / 200) * 100)}%` }}
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[9px]">
                    <div className="bg-[#0b0b20] border border-[#1c1a3b] p-2 rounded">
                      <span className="block text-[8px] text-slate-500">W1_1 (H1)</span>
                      <span className="text-slate-300 font-bold">{(xorW11).toFixed(3)}</span>
                    </div>
                    <div className="bg-[#0b0b20] border border-[#1c1a3b] p-2 rounded">
                      <span className="block text-[8px] text-slate-500">W1_2 (H2)</span>
                      <span className="text-slate-300 font-bold">{(xorW12).toFixed(3)}</span>
                    </div>
                    <div className="bg-[#0b0b20] border border-[#1c1a3b] p-2 rounded">
                      <span className="block text-[8px] text-slate-500">W2_1 (H1)</span>
                      <span className="text-slate-300 font-bold">{(xorW21).toFixed(3)}</span>
                    </div>
                    <div className="bg-[#0b0b20] border border-[#1c1a3b] p-2 rounded">
                      <span className="block text-[8px] text-slate-500">W2_2 (H2)</span>
                      <span className="text-slate-300 font-bold">{(xorW22).toFixed(3)}</span>
                    </div>
                  </div>

                  <div className="bg-[#0b0b20] p-2 rounded border border-[#1c1a3b] text-center text-[8px] text-slate-500 uppercase tracking-wider">
                    Backprop derivative: <span className="text-violet-400">∂Loss/∂Weights = d_Output * Hidden_State</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                {!isTrainingXOR ? (
                  <button 
                    onClick={() => setIsTrainingXOR(true)}
                    className="flex-1 py-2.5 bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold font-mono text-[10px] rounded-lg flex items-center justify-center gap-2 transition-all shadow-md shadow-violet-500/20"
                  >
                    <Play size={11} /> Start Optimization Loop
                  </button>
                ) : (
                  <button 
                    onClick={() => setIsTrainingXOR(false)}
                    className="flex-1 py-2.5 bg-violet-500/10 border border-violet-500/30 text-cyan-300 font-bold font-mono text-[10px] rounded-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <Activity size={11} className="animate-spin" /> Pause Engine Weights
                  </button>
                )}
                
                <button 
                  onClick={handleResetXOR}
                  className="px-4 py-2.5 bg-[#0b0b1f] hover:bg-[#121235] border border-[#1c1a3b] font-bold font-mono text-[10px] rounded-lg text-slate-400 hover:text-white transition-all"
                >
                  Reset Weights
                </button>
              </div>
            </div>

            {/* Box B: Fuzzy Logic Vehicle Margin Evaluator */}
            <div className="bg-gradient-to-b from-[#0b0b20] to-[#04040f] border border-[#1b1a3d] rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden transition-all duration-300 group hover:border-violet-500/30">
              <div className="absolute top-0 right-0 p-3 text-[8px] font-mono text-slate-500 uppercase tracking-widest">
                fuzzy routing decision
              </div>

              <div>
                <div className="flex items-center gap-2 text-violet-400 mb-2">
                  <Compass size={14} className="text-cyan-400" />
                  <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-cyan-400">Model: Scikit-Fuzzy Logic Simulator</span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">Vehicle-Size-Aware Smart Margin Grader</h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  Runs dynamic mathematical membership scoring based on scanned camera road width to prevent transport gridlock.
                </p>

                <div className="bg-[#020208] p-4 rounded-xl border border-[#1b1a3d] mb-6 space-y-4">
                  
                  <div>
                    <span className="block text-[8px] font-mono text-slate-500 uppercase mb-2 tracking-widest">Select Target Vehicle Dimensions:</span>
                    <div className="grid grid-cols-3 gap-2 font-mono text-[9px]">
                      {[
                        { id: 'hatchback', label: 'Hatchback (1.6m)' },
                        { id: 'suv', label: 'Large SUV (2.0m)' },
                        { id: 'truck', label: 'Cargo Truck (2.8m)' }
                      ].map((v) => (
                        <button
                          key={v.id}
                          onClick={() => handleVehicleChange(v.id)}
                          className={`p-2.5 rounded-lg border text-left transition-all ${
                            selectedVehicleType === v.id 
                              ? 'bg-violet-500/15 border-violet-500/40 text-cyan-300' 
                              : 'bg-[#0b0b20] border border-[#1c193a] text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <span className="font-bold block">{v.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs font-mono mb-1">
                      <span className="text-slate-400 text-[9px]">Scanned Lane Width:</span>
                      <span className="text-cyan-400 font-bold">{scannedRoadWidth.toFixed(1)} m</span>
                    </div>
                    <input 
                      type="range" 
                      min="1.8" 
                      max="6.0" 
                      step="0.1"
                      value={scannedRoadWidth}
                      onChange={(e) => handleRoadWidthChange(e.target.value)}
                      className="w-full accent-cyan-400 bg-[#0b0b20] border border-[#1c193a] rounded-lg h-1.5 appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-[8px] font-mono text-slate-500 pt-1">
                      <span>1.8m (Rural Edge)</span>
                      <span>3.5m (Highway Standard)</span>
                      <span>6.0m (Double Lane)</span>
                    </div>
                  </div>

                  <div className="border-t border-[#1c193a] pt-3 grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch font-mono text-xs">
                    <div className="md:col-span-4 bg-[#0b0b20] border border-[#1c193a] p-2.5 rounded-lg text-center">
                      <span className="block text-[8px] text-slate-500 uppercase">Fuzzy Score</span>
                      <span className={`text-base font-black ${fuzzyScore > 75 ? 'text-cyan-400' : fuzzyScore > 40 ? 'text-amber-500' : 'text-rose-500'}`}>
                        {fuzzyScore}%
                      </span>
                    </div>
                    <div className="md:col-span-8 bg-[#0b0b20] border border-[#1c193a] p-2.5 rounded-lg">
                      <span className="block text-[8px] text-slate-500 uppercase">Dijkstra Override Route Decision</span>
                      <span className="text-[9px] text-slate-300 block mt-0.5 leading-tight font-medium">
                        {routingOutput}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              <div className="text-[9px] font-mono text-slate-500 flex items-center justify-between border-t border-[#1c193a] pt-3">
                <span>Algorithm: Scikit-Fuzzy logic parameters calculation</span>
                <span>Margin Offset: {(scannedRoadWidth - (selectedVehicleType === 'hatchback' ? 1.6 : selectedVehicleType === 'suv' ? 2.0 : 2.8)).toFixed(1)}m</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {}
      <section id="experience" className="py-20 border-t border-[#141230] bg-[#03030c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 max-w-2xl">
            <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-widest block mb-1">Industrial Exposure</span>
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Briefcase className="text-violet-400" size={24} /> Internships & Training
            </h2>
          </div>

          <div className="space-y-8 max-w-4xl relative before:absolute before:inset-0 before:left-3 before:h-full before:w-[1px] before:bg-[#1b1a3d]">
            {RESUME_DATA.internships.map((intern, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div className="absolute left-1.5 top-2.5 h-3.5 w-3.5 rounded-full bg-[#020208] border-2 border-[#1c193a] group-hover:border-cyan-400 group-hover:bg-violet-600 transition-all duration-300" />
                
                <div className="bg-gradient-to-b from-[#0b0b20] to-[#04040f] border border-[#1b1a3d] hover:border-violet-500/30 p-6 rounded-xl transition-all shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {intern.role}
                      </h3>
                      <p className="text-[11px] font-semibold text-violet-400 font-mono mt-0.5">
                        {intern.company}
                      </p>
                    </div>
                    <div className="text-left sm:text-right font-mono text-[10px] text-slate-400">
                      <span className="block font-bold text-white">{intern.period}</span>
                      <span className="block text-slate-500 mt-0.5">{intern.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {intern.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs sm:text-sm text-slate-400 leading-relaxed flex items-start gap-2 font-medium">
                        <span className="h-1 w-1 bg-cyan-400 rounded-full mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section id="achievements" className="py-20 border-t border-[#141230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-widest block mb-1">Verifiable Literature</span>
                <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                  <BookOpen className="text-violet-400" size={24} /> Research Publications
                </h2>
              </div>

              <div className="space-y-4">
                {RESUME_DATA.publications.map((pub, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-xl border border-[#1b1a3d] bg-gradient-to-b from-[#0b0b20] to-[#04040f] hover:border-violet-500/30 transition-all flex gap-4 shadow-sm"
                  >
                    <div className="h-9 w-9 rounded-lg bg-[#020208] border border-[#1b1a3d] flex items-center justify-center text-cyan-400 shrink-0 animate-pulse">
                      <FileText size={16} />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-bold text-white text-xs sm:text-sm leading-snug">
                          {pub.title}
                        </h3>
                        <span className="text-[8px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full shrink-0">
                          {pub.period}
                        </span>
                      </div>
                      <p className="text-[10px] font-semibold text-violet-400 font-mono">{pub.journal}</p>
                      <p className="text-xs text-slate-400 leading-relaxed font-medium mb-3">{pub.desc}</p>
                      {pub.link && (
                        <a 
                          href={pub.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <BookOpen size={10} /> Read Publication Article <ArrowUpRight size={8} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Trophy className="text-amber-500" size={16} /> Key Accomplishments
                </h3>
                <div className="space-y-3">
                  {RESUME_DATA.achievements.map((ach, idx) => (
                    <div key={idx} className="p-4 bg-gradient-to-r from-[#0b0b20] to-[#04040f] border border-[#1b1a3d] rounded-xl flex items-start gap-3 shadow-sm">
                      <CheckCircle className="text-cyan-400 shrink-0 mt-0.5" size={14} />
                      <p className="text-xs text-slate-300 leading-relaxed font-medium">{ach}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Credentials */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="text-violet-400" size={16} /> Certified Credentials
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {RESUME_DATA.certifications.map((cert, idx) => (
                    <div 
                      key={idx}
                      className="p-4 bg-gradient-to-b from-[#0b0b20] to-[#04040f] border border-[#1b1a3d] hover:border-violet-500/30 rounded-xl transition-all space-y-1 flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block">{cert.issuer}</span>
                        <h4 className="text-xs font-bold text-slate-200 leading-snug line-clamp-2">
                          {cert.title}
                        </h4>
                      </div>
                      <div className="pt-2 flex items-center justify-between">
                        <span className="block text-[9px] text-cyan-400 font-mono">{cert.date}</span>
                        {cert.link && (
                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-slate-500 hover:text-cyan-400 transition-colors"
                            title="Verify Sharebadge"
                          >
                            <ExternalLink size={10} />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">General Competence Highlights</h3>
                <div className="flex flex-wrap gap-1">
                  {RESUME_DATA.strengths.map((str, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 bg-[#020208] border border-[#1b1a3d] text-[9px] font-mono text-slate-300 rounded-md"
                    >
                      {str}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {}
      <section id="contact" className="py-20 border-t border-[#141230] bg-[#03030c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto border border-[#1b1a3d] rounded-2xl bg-gradient-to-b from-[#0b0b20] to-[#04040f] p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-36 h-36 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-widest block">Direct Communications Channel</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Let's engineer next-gen machine learning systems.
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                  Available for full-time opportunities, academic joint research, and high-performance multi-modal system setups.
                </p>

                <div className="space-y-3 pt-2 font-mono text-xs">
                  <div className="flex items-center gap-3 text-slate-300 bg-[#020208] border border-[#1c1a3b] p-3 rounded-xl">
                    <Mail size={13} className="text-cyan-400" />
                    <span>triptithawait20@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 bg-[#020208] border border-[#1c1a3b] p-3 rounded-xl">
                    <Phone size={13} className="text-cyan-400" />
                    <span>+91 9009885425</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 bg-[#020208] border border-[#1c1a3b] p-3 rounded-xl">
                    <MapPin size={13} className="text-cyan-400" />
                    <span>Raigarh, Chhattisgarh, India</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col gap-2.5">
                <a 
                  href="mailto:triptithawait20@gmail.com"
                  className="w-full py-3 bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold font-mono text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-violet-500/20 text-center"
                >
                  <Mail size={13} /> Send Email Direct
                </a>
                <a 
                  href={RESUME_DATA.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-[#0b0b20] border border-[#1b1a3d] hover:border-violet-500/50 text-slate-300 hover:text-white font-bold font-mono text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all text-center"
                >
                  <Linkedin size={13} className="text-cyan-400" /> LinkedIn Profile
                </a>
                <a 
                  href={RESUME_DATA.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-[#0b0b20] border border-[#1b1a3d] hover:border-violet-500/50 text-slate-300 hover:text-white font-bold font-mono text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all text-center"
                >
                  <Github size={13} className="text-cyan-400" /> GitHub Codebases
                </a>
              </div>
            </div>

          </div>

          <div className="pt-12 mt-12 border-t border-[#141230] flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[9px] text-slate-500">
            <div>
              <span>© {new Date().getFullYear()} Tripti Thawait. All rights reserved. Verifiable references as detailed in "Resume_Tripti.pdf (4).pdf" are available upon request.</span>
            </div>
            <div className="flex gap-4">
              <span>B.Tech CSE • 2023-2027</span>
              <span>•</span>
              <span>Amity University Chhattisgarh</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}