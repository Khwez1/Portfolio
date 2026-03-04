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
          { name: "Python", icon: "logos:drizzle-ORM" },
          { name: "PostgresSQL", icon: "logos:postgresql" },
          { name: "OpenAI", icon: "simple-icons:openai" }
        ]
      },
      uiUx: {
        description:
          "I design smooth, user-centered interfaces and high-fidelity prototypes.",
        tools: [
          { name: "Figma", icon: "logos:figma" },
          { name: "Framer", icon: "simple-icons:framer", color: "#0055FF" },
          { name: "Notion", icon: "logos:notion-icon" },
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
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1-3",
        ],
        category: "Applications",
        details:
          "A feature-rich digital banking app built with React and TailwindCSS, integrating seamless animations via Framer Motion. Designed with a mobile-first approach and a modular component system powered by TypeScript and Vite.",
        github: "https://github.com/Khwez1/Portfolio.git",
        live: "https://example.com",
        tech: [
          { name: "React", icon: "logos:react" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "Expo", icon: "simple-icons:expo" },
        ],
      },
      {
        id: 2,
        title: "E-commerce Platform",
        description:
          "Scalable and responsive online store with dynamic product filtering and intuitive cart management.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2-3",
        ],
        category: "Web Development",
        details:
          "A fully functional e-commerce platform built with React and TailwindCSS. Features product listings, advanced filters, cart and checkout system, and a modern UI with responsive design for all devices.",
        github: "https://github.com",
        live: "https://example.com",
        tech: [
          { name: "React", icon: "logos:react" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "PostgreSQL", icon: "logos:postgresql" },
        ],
      },
      {
        id: 3,
        title: "Travel Booking System",
        description:
          "Comprehensive booking platform for flights, hotels, and rentals with live availability.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3-3",
        ],
        category: "Web Development",
        details:
          "A modern travel booking system built with Next.js and TailwindCSS. Users can search and book flights, hotels, and car rentals with real-time availability and intuitive UI components powered by HeroUI.",
        github: "https://github.com",
        live: "https://example.com",
        tech: [
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
        ],
      },
      {
        id: 4,
        title: "AI Chat Assistant",
        description:
          "Smart customer support assistant with contextual awareness and real-time replies.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4-3",
        ],
        category: "Applications",
        details:
          "AI-powered chat assistant developed with React and TailwindCSS. Integrated with OpenAI’s GPT API for contextual conversations, deployed via Vercel with real-time response and adaptive UI.",
        github: "https://github.com",
        live: "https://example.com",
        tech: [
          { name: "React", icon: "logos:react" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "OpenAI API", icon: "simple-icons:openai" },
          { name: "Vercel", icon: "simple-icons:vercel" },
        ],
      },
      {
        id: 5,
        title: "Portfolio API & CMS",
        description:
          "Headless API backend with admin-friendly CMS capabilities.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5-3",
        ],
        category: "Backend Services",
        details:
          "A modular REST API built with Node.js and Express, powering dynamic portfolio websites. It includes JWT-based authentication, MySQL integration, and a Swagger-documented CMS interface for easy content management by non-developers.",
        github: "https://github.com",
        tech: [
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "MySQL", icon: "logos:mysql-icon" },
          { name: "JWT", icon: "simple-icons:jsonwebtokens" },
          { name: "Swagger", icon: "simple-icons:swagger" },
        ],
      },
      {
        id: 6,
        title: "Fitness Tracker App",
        description:
          "Monitor workouts, calorie intake, and goals in one place.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6-3",
        ],
        category: "Applications",
        details:
          "A cross-platform fitness application developed with React Native and styled using TailwindCSS via Expo. It offers calorie tracking, workout logging, analytics via charts, and custom goal-setting—all within a mobile-optimized interface.",
        github: "https://github.com",
        live: "https://example.com",
        tech: [
          { name: "React Native", icon: "logos:react" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "Expo", icon: "simple-icons:expo" },
        ],
      },
      {
        id: 7,
        title: "Content Scheduler",
        description:
          "Plan, schedule, and automate your social media posts effortlessly.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=7",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=7",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=7-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=7-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=7-3",
        ],
        category: "Applications",
        details:
          "A productivity app designed for content creators featuring calendar syncing, automated post publishing, rich media previews, and cloud synchronization for seamless cross-device access.",
        github: "https://github.com",
        live: "https://example.com",
        tech: [
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "MySQL", icon: "logos:mysql-icon" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
        ],
      },
      {
        id: 8,
        title: "Real Estate Dashboard",
        description:
          "Comprehensive dashboard to manage properties, leads, and sales pipelines effectively.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=8",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=8",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=8-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=8-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=8-3",
        ],
        category: "Web Development",
        details:
          "An admin panel tailored for real estate professionals featuring interactive data visualizations, lead tracking, and CRM system integrations to streamline client and property management.",
        github: "https://github.com",
        live: "https://example.com",
        tech: [
          { name: "React", icon: "logos:react" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "Chart.js", icon: "simple-icons:chartdotjs" },
        ],
      },
      {
        id: 9,
        title: "Crypto Wallet API",
        description:
          "Robust backend API for secure cryptocurrency operations and blockchain interactions.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=9",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=9",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=9-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=9-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=9-3",
        ],
        category: "Backend Services",
        details:
          "Secure Node.js API supporting Ethereum and Bitcoin transactions. Features transaction signing, wallet address creation, and real-time blockchain event monitoring using Web3.js. Enhanced with hardware security module (HSM) integration for secure key management.",
        github: "https://github.com",
        tech: [
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "Ethereum", icon: "logos:ethereum" },
          { name: "Web3.js", icon: "simple-icons:web3dotjs" },
          { name: "PostgreSQL", icon: "logos:postgresql" },
          { name: "JWT", icon: "simple-icons:jsonwebtokens" },
        ],
      },
      {
        id: 10,
        title: "SaaS Subscription API",
        description:
          "Backend API managing SaaS subscriptions, billing, and user accounts.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10",
        gallery: [
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10-1",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10-2",
          "https://img.heroui.chat/image/dashboard?w=600&h=400&u=10-3",
        ],
        category: "Backend Services",
        details:
          "RESTful API supporting SaaS subscription workflows with Stripe integration, usage metering, tiered pricing, webhook handling, trial periods, and analytics. Optimized for high concurrency with Redis caching.",
        github: "https://github.com",
        tech: [
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "Stripe", icon: "logos:stripe" },
          { name: "PostgreSQL", icon: "logos:postgresql" },
          { name: "Redis", icon: "logos:redis" },
          { name: "JWT", icon: "simple-icons:jsonwebtokens" },
        ],
      },
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
