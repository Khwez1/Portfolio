export const DATA = {
  home: {
    hero: {
      name: "Khwezi Mbobo ",
      title: "Full stack developer & UI/UX Designer",
      subtitle:
        "I build fast, accessible and visually engaging web experiences.",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription:
        "Specialized in creating modern digital experiences with cutting-edge technologies",
      overview: [
        {
          name: "UI/UX Design",
          icon: "lucide:layout-dashboard",
          color: "primary",
        },
        {
          name: "Frontend Development",
          icon: "lucide:code",
          color: "secondary",
        },
        {
          name: "Mobile Development",
          icon: "lucide:smartphone",
          color: "success",
        },
        {
          name: "Backend Development",
          icon: "lucide:code",
          color: "warning",
        },
      ],
    },
    testimonials: {
      sectionTitle: "Client Testimonials",
      sectionDescription: "What clients say about working together",
      items: [
        {
          id: 1,
          name: "Matthew Brown",
          role: "Lecturer at Life Choices",
          content:
            "Khwezi continually goes above and beyond in whatever he does. His devotion and work ethic make him an valuable team player. Khwezi's analytical skills have been greatly proven. His positive attitude makes him a joy to work with.",
          avatar: "https://cdn-images.imagevenue.com/8b/40/88/ME17GE0C_o.png",
        },
        {
          id: 2,
          name: "Corné Balie",
          role: "Configuration and QA Administrator @ Hepstar",
          content:
            "Khwezi is very resourceful and has always been happy to lend a hand when helping others. He is definitely one of the most reliable classmates I've had and never disappoints in his ability to deliver work.",
          avatar: "https://cdn-thumbs.imagevenue.com/60/96/c7/ME1CCDNW_b.jpg",
        },
        {
          id: 3,
          name: "Damon Raffles",
          role: "QA at Panthera Wildcat conservation",
          content:
            "Khwezi is one of the most calm and collected people you will ever have the joy of meeting and working with. He has a strong will to learn and further his abilities as a developer, is always a pleasure to be around and will be an asset to any workforce.",
          avatar: "https://cdn-images.imagevenue.com/98/f7/a4/ME1CCDI0_o.jpg",
        },
        {
          id: 4,
          name: "Warren Jafta",
          role: "Software Engineer at Achievement Awards Group",
          content:
            "in my short time of knowing Khwezilomso i have found him to be a very intelligent programmer who always thinks outside of the box.",
          avatar: "https://cdn-images.imagevenue.com/68/95/7a/ME1CCDST_o.jpg",
        },
        {
          id: 5,
          name: "Muhammad Rajah",
          role: "Senior Customer Service Executive - EXL",
          content:
            "Khwezi is an exceptional developer with an unwavering dedication to rising to the occasion. He excels in backend logic and consistently operates at the highest level in the field.",
          avatar: "https://cdn-images.imagevenue.com/f8/b1/ef/ME1CCK1O_o.jpeg",
        },
      ],
    },
  },
  about: {
    profile: {
      name: "Khwezi Mbobo",
      title: "Full Stack Developer",
      image:
        "https://cdn-images.imagevenue.com/33/98/e4/ME1CCDV5_o.jpg",
      description: [
        "I'm a creative full-stack developer with a passion for UI/UX design and clean code. I focus on building beautiful, functional, and high-performance websites and web apps.",
        "My approach is both technical and aesthetic — I enjoy turning complex problems into elegant user experiences. I work primarily with modern frameworks like React, Vite, and TailwindCSS.",
        "Outside of code, I enjoy reading technical and non-technical books, product strategy, and always pushing the boundaries of front-end development.",
      ],
    },
    education: [
      {
        title: "Life Choices Academy",
        date: "2023 - 2024",
        icon: "mdi:school",
        description:
          "Earned a Certificate of Excellence, having completed the coding course with an aggregate of over 80%. Aquired my knowlegde and experince in JS, modern frameworks and back-end development through Express and MySQL database.",
      },
      {
        title: "FNB App Academy - IT varsity",
        date: "2025 - 2026",
        icon: "mdi:school-outline",
        description:
          "Earned a Certificate in Full Stack development. Gained strong skills in software development, user interface engineering, data structures, and human-computer interaction.",
      },
    ],
    experience: [
      {
        title: "Lego Robotics Coach",
        date: "2021 - 2022",
        icon: "mdi:briefcase",
        description:
          "Lead young creative, engineering teams to build robot devices that combine innovation with user empathy to solve real world problems. Oversee branding, UI/UX strategy, and development pipelines for tech startups and clients.",
      },
      {
        title: "Software Engineer",
        date: "2024 - 2025",
        icon: "mdi:monitor-dashboard",
        description:
          "Designed and developed a food delivery app with high-fidelity interfaces, geolocation, notifivation and NoSQL database using React-Native/Expo, FCM, Mapbox, Appwrite and Tailwind. Collaborated cross-functionally with developers and designers to craft intuitive user flows and interactions.",
      }
    ],
    technologies: {
      frontend: {
        description:
          "I craft dynamic, responsive UIs using modern JavaScript frameworks and CSS tools.",
        tools: [
          { name: "React", icon: "logos:react" },
          { name: "Vue", icon: "skill-icons:vuejs-dark" },
          { name: "Tailwind", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "HTML5", icon: "logos:html-5" },
          { name: "Nuxt", icon: "logos:nuxt-icon" }
        ],
      },
      backend: {
        description:
          "I build fast APIs and scalable backends using Express.js, SQL, and Php.",
        tools: [
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "Php", icon: "logos:php" },
          { name: ".NET", icon: "logos:dotnet" },
          { name: "Laravel", icon: "logos:laravel" },
          { name: "Python", icon: "logos:drizzle-ORM" },
          { name: "PostgresSQL", icon: "logos:postgresql" },
          { name: "OpenAI", icon: "simple-icons:openai" },
          { name: "AWS", icon: "logos:aws" },
          { name: "Azure", icon: "logos:microsoft-azure" }
        ]
      },
      uiUx: {
        description:
          "I design smooth, user-centered interfaces and high-fidelity prototypes.",
        tools: [
          { name: "Figma", icon: "logos:figma" },
          { name: "Framer", icon: "simple-icons:framer", color: "#0055FF" },
          { name: "Notion", icon: "logos:notion-icon" }
        ],
      },
    },
  },
  projects: {
    sectionTitle: "Featured Projects",
    sectionDescription:
      "A selection of my recent projects showcasing UI/UX design and development expertise",
    work: [
      {
        id: 1,
        title: "Stocks Portfolio Platform",
        description:
          "A streamlined digital stocks portfolio platform interface emphasizing clarity, speed, and intuitive design.",
        image: "https://cdn-images.imagevenue.com/3e/3b/9b/ME1CHB7I_o.png?w=600&h=400&u=1",
        gallery: [
          "https://cdn-images.imagevenue.com/3e/3b/9b/ME1CHB7I_o.png?w=600&h=400&u=1",
          "https://cdn-images.imagevenue.com/88/b3/6f/ME1CHB7J_o.png?w=600&h=400&u=1-1",
          "https://cdn-images.imagevenue.com/b8/a9/bd/ME1CHB7K_o.png?w=600&h=400&u=1-2",
          "https://cdn-images.imagevenue.com/55/a7/da/ME1CHB7L_o.png?w=600&h=400&u=1-3",
          "https://cdn-images.imagevenue.com/68/4c/50/ME1CHB7M_o.png?w=600&h=400&u=1-4",
        ],
        category: "Applications",
        details:
          "A feature-rich stocks portfolio app built with React and TailwindCSS. Designed with a mobile-first approach and a modular component system powered by TypeScript and Vite.",
        github: "https://github.com/Khwez1/stockshop.git",
        live: "https://stock-shop.vercel.app/",
        tech: [
          { name: "React", icon: "logos:react" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: ".NET", icon: "logos:dotnet" },
          { name: "Render", icon: "simple-icons:render" }
        ],
      },
      {
        id: 2,
        title: "E-commerce Platform",
        description:
          "Scalable and responsive online store with dynamic product filtering and intuitive cart management.",
        image: "https://cdn-images.imagevenue.com/d5/62/a1/ME1CH5CQ_o.png?w=600&h=400&u=2",
        gallery: [
          "https://cdn-images.imagevenue.com/d5/62/a1/ME1CH5CQ_o.png?w=600&h=400&u=2",
          "https://cdn-images.imagevenue.com/79/e5/63/ME1CH5CP_o.png?w=600&h=400&u=2-1",
          "https://cdn-images.imagevenue.com/6f/36/42/ME1CH5CO_o.png?w=600&h=400&u=2-2",
        ],
        category: "Web Development",
        details:
          "A fully functional e-commerce platform built with Vue and Bootstrap. Features product listings, advanced filters, cart and checkout system, and a modern UI with responsive design for all devices.",
        github: "https://github.com/Khwez1/Capstone-Project.git",
        live: "https://capstone-project-55c13.web.app/",
        tech: [
          { name: "Vue", icon: "logos:vue" },
          { name: "Bootstrap", icon: "logos:bootstrap" },
          { name: "JavaScript", icon: "logos:javascript" },
          { name: "MySQL", icon: "logos:mysql" }
        ],
      },
      {
        id: 3,
        title: "AI Chat Assistant",
        description:
          "AI assistant with contextual awareness and real-time replies.",
        image: "https://cdn-images.imagevenue.com/27/1c/fa/ME1CH5XF_o.png?w=600&h=400&u=4",
        gallery: [
          "https://cdn-images.imagevenue.com/27/1c/fa/ME1CH5XF_o.png?w=600&h=400&u=4",
          "https://cdn-images.imagevenue.com/32/fa/46/ME1CH5XG_o.png?w=600&h=400&u=4-1"
        ],
        category: "Applications",
        details:
          "AI-powered chat assistant developed with React and TailwindCSS. Integrated with OpenAI’s GPT API for contextual conversations, deployed via Vercel with real-time response and adaptive UI.",
        github: "https://github.com/Khwez1/AI-Chat.git",
        live: "https://ai-chat-seven-ruddy.vercel.app/",
        tech: [
          { name: "Vue", icon: "logos:vue" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "OpenAI API", icon: "simple-icons:openai" },
          { name: "Vercel", icon: "simple-icons:vercel" },
          { name: "Neon", icon: "logos:neon-icon" }
        ],
      },
      {
        id: 4,
        title: "Trading Engine",
        description:
          "A long term project still in progress, check it out for yourself!",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5-3",
        ],
        category: "Backend Services",
        details:
          "Algorithmic deterministic matching core with FIFO price-time priority and market data and fills emitted as events. Built using C# and .NET",
        github: "https://github.com/Khwez1/TradingEngine.git",
        tech: [
          { name: ".NET", icon: "logos:dotnet" },
          { name: "csharp", icon: "devicon:csharp" }
        ],
      }
    ],
  },
  contact: {
    heading:
      "Have a project in mind? Get in touch and let's create something amazing.",
    location: {
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.017947223557!2d18.4108!3d-33.9067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBrooklyn%2C%20Cape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1715701234567!5m2!1sen!2sza",
      address: "Cape Town, WC",
    },
  },
  morphingTexts: {
    about: ["Creative", "Passionate", "Developer"] as const,
    projects: ["My Work", "Creations", "Experiments", "Innovations"] as const,
    contact: ["Let's", "Build", "Together"] as const,
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  footer: {
    name: "Khwezi Mbobo",
    description: "Always interested in new projects and collaborations.",
    contact: {
      email: "khwezimbobo@gmail.com",
      phone: "+27 65 697 8351",
      location: "Cape Town, WC",
    },
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/Khwez1", icon: "mdi:github" },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/khwezi-mbobo",
        icon: "mdi:linkedin",
      },
    ],
    services: ["UI/UX Design", "Web Development", "Mobile Apps"],
  },
} as const;
