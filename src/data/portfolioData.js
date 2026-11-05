export const portfolioData = {
  profile: {
    fullName: {
      en: "Chadapan Yukkriroek",
      th: "ชฎาพรรณ ยุคไกรฤกษ์"
    },
    nickname: {
      en: "Ploy",
      th: "พลอย"
    },
    title: {
      en: "Junior Software Developer",
      th: "โปรแกรมเมอร์"
    },
    status: {
      en: "Open to work",
      th: "Open to work"
    },
    year: "2026",
    location: {
      en: "Bangkok, Thailand",
      th: "กรุงเทพมหานคร, ประเทศไทย"
    },
    email: "chadapan.y58@gmail.com",
    github: "https://github.com/PloyIIV",
    linkedin: "https://www.linkedin.com/in/chadapanyukkriroek/",
    bio: {
      en: "Junior Software Developer specializing in Frontend engineering and the MERN stack. Backed by 2 years of prior experience as a Motion Graphic Designer and a degree in Creative Media Technology, I craft responsive, visually engaging, and high-performance web applications.",
      th: "Junior Software Developer ที่เชี่ยวชาญการพัฒนา Frontend และ MERN Stack ด้วยประสบการณ์ 2 ปีด้าน Motion Graphic Design และเกียรตินิยมอันดับ 1 ด้านเทคโนโลยีสื่อสร้างสรรค์ จึงพร้อมผสานความสวยงามของดีไซน์เข้ากับโค้ดที่สะอาดและมีประสิทธิภาพ"
    },
    cvUrl: "#contact"
  },

  nav: {
    about: { en: "About", th: "เกี่ยวกับฉัน" },
    projects: { en: "Projects", th: "ผลงาน" },
    experience: { en: "Experience", th: "ประสบการณ์" },
    stack: { en: "Stack", th: "เครื่องมือ" },
    contact: { en: "Contact", th: "ติดต่อ" }
  },

  projects: [
    {
      id: "gearverse",
      badge: "E-COMMERCE WEB APP",
      title: "GearVerse",
      subtitle: {
        en: "E-Commerce Web Application for Gaming Gear & Tech Peripherals",
        th: "เว็บแอปพลิเคชันอีคอมเมิร์ซสำหรับอุปกรณ์เกมมิ่งเกียร์และอุปกรณ์เสริม"
      },
      description: {
        en: "A comprehensive e-commerce platform specifically built for gaming gear enthusiasts. It features a high-performance responsive storefront, catalog filtering by brand and category, interactive cart management, price calculation, and a full RESTful API integration for order processing.",
        th: "แพลตฟอร์มอีคอมเมิร์ซที่พัฒนาขึ้นสำหรับคนรักเกมมิ่งเกียร์โดยเฉพาะ มีหน้าร้านที่โหลดเร็ว ตอบสนองทุกขนาดหน้าจอ พร้อมระบบกรองสินค้าตามแบรนด์และสเปก ระบบตะกร้าสินค้าแบบเรียลไทม์ และเชื่อมต่อ RESTful API เต็มรูปแบบ"
      },
      stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "REST API"],
      github: "https://github.com/nookarin/team-07-ProjectGV-Sprint2",
      demo: "https://team-07-project-gv-sprint2.vercel.app/",
      details: {
        architecture: {
          en: "MERN Stack architectural model with separation of concerns. Node.js & Express server handling endpoints for products and users, while MongoDB Atlas serves as the document store.",
          th: "สถาปัตยกรรม MERN Stack แยกเลเยอร์ชัดเจน ฝั่งเซิร์ฟเวอร์ใช้ Node.js และ Express จัดการ API ส่วนฐานข้อมูลใช้ MongoDB Atlas"
        },
        keyFeatures: {
          en: [
            "Dynamic product filtering by peripheral category, brand, and pricing tier",
            "State-driven interactive shopping cart with item quantity updates & real-time totals",
            "Responsive and modern UI styled with Tailwind CSS",
            "Deployed on Vercel with smooth client-side routing"
          ],
          th: [
            "ระบบกรองสินค้าแยกตามหมวดหมู่ แบรนด์ และช่วงราคา",
            "ระบบตะกร้าสินค้าที่จัดการ State แบบเรียลไทม์ ปรับจำนวนและคำนวณราคาทันที",
            "หน้าตาเว็บทันสมัย Responsive ทุกอุปกรณ์ด้วย Tailwind CSS",
            "Deploy ขึ้น Vercel และเชื่อมโยง API รวดเร็ว"
          ]
        }
      }
    },
    {
      id: "merry-match",
      badge: "DATING & SOCIAL PLATFORM",
      title: "Merry Match",
      subtitle: {
        en: "Next-Generation Online Dating & Social Networking Web App",
        th: "เว็บแอปพลิเคชันหาคู่และสร้างเครือข่ายสังคมออนไลน์ยุคใหม่"
      },
      description: {
        en: "Merry Match is a modern social discovery platform designed for people wanting to find romantic partners, make new companions, expand personal networks, or meet locals while traveling. Engineered with clean authentication, relational databases, and a delightful matching interface.",
        th: "เว็บแอปพลิเคชันหาคู่และพบปะเพื่อนใหม่ที่ตอบโจทย์ไลฟ์สไตล์ยุคใหม่ ไม่ว่าจะเป็นการหาคู่จริงจัง การหาเพื่อนร่วมทริป หรือการพูดคุยกับผู้คนรอบตัว ออกแบบด้วยระบบฐานข้อมูลเชิงสัมพันธ์ที่ปลอดภัย และ UI ที่ใช้งานง่าย เพลิดเพลิน"
      },
      stack: ["React.js", "Express.js", "Node.js", "Supabase PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/PloyIIV/Merry-Mathch-Final-Project",
      demo: "https://merry-mathch-final-project-zhap.vercel.app/",
      details: {
        architecture: {
          en: "Built with React frontend and Express backend, powered by Supabase PostgreSQL for relational user profiles, preference matching schemas, and secure data storage.",
          th: "พัฒนาด้วย React ในฝั่งหน้าบ้าน และ Express ในฝั่งหลังบ้าน จัดเก็บข้อมูลโปรไฟล์และจับคู่ความชอบผ่าน Supabase PostgreSQL"
        },
        keyFeatures: {
          en: [
            "Secure user authentication and profile customization system",
            "Interactive partner discovery and preference matching interface",
            "PostgreSQL relational schema for structured user relationships",
            "Fast, mobile-first responsive layout with fluid UI interactions"
          ],
          th: [
            "ระบบสมัครสมาชิกและจัดการข้อมูลโปรไฟล์ผู้ใช้อย่างปลอดภัย",
            "หน้าจอค้นหาและจับคู่คนที่สนใจร่วมกันแบบ Interactive",
            "ออกแบบ Schema ฐานข้อมูลเชิงสัมพันธ์ด้วย PostgreSQL",
            "รองรับการใช้งานบนมือถืออย่างลื่นไหล (Mobile-First)"
          ]
        }
      }
    }
  ],

  /* Strictly chronological order: latest to oldest */
  experience: [
    {
      id: "edu-generation",
      type: "education",
      category: { en: "BOOTCAMP & CERTIFICATION", th: "บูทแคมป์ & การอบรม" },
      period: "Jul 2026 - Oct 2026",
      role: {
        en: "Junior Software Developer Bootcamp",
        th: "หลักสูตรพัฒนาซอฟต์แวร์ระดับเข้มข้น (Junior Software Developer)"
      },
      company: {
        en: "Generation Thailand",
        th: "Generation Thailand"
      },
      description: {
        en: "Intensive training in modern software engineering practices, collaborative Agile/Scrum development, modern JavaScript, and team-based fullstack project delivery.",
        th: "หลักสูตรฝึกอบรมเข้มข้นด้านการพัฒนาซอฟต์แวร์ การทำงานเป็นทีมด้วยระเบียบวิธี Agile/Scrum การเขียน JavaScript สมัยใหม่ และการแก้ปัญหาทางเทคนิคจริง"
      }
    },
    {
      id: "edu-techup",
      type: "education",
      category: { en: "BOOTCAMP & CERTIFICATION", th: "บูทแคมป์ & การอบรม" },
      period: "Jun 2023 - Oct 2023",
      role: {
        en: "Fullstack Software Development Bootcamp",
        th: "หลักสูตร Fullstack Software Development"
      },
      company: {
        en: "TechUp",
        th: "TechUp"
      },
      description: {
        en: "Full-time immersive bootcamp mastering the MERN stack (MongoDB, Express, React, Node.js), relational database architectures, REST API engineering, and automated cloud deployments.",
        th: "หลักสูตรเจาะลึกการพัฒนาเว็บแอปพลิเคชันแบบเต็มรูปแบบ (Fullstack) ด้วย MERN Stack ฐานข้อมูลทั้งแบบ Document และ Relational และการ Deploy ขึ้น Cloud"
      }
    },
    {
      id: "exp-freelance",
      type: "work",
      category: { en: "WORK EXPERIENCE", th: "ประสบการณ์ทำงาน" },
      period: "Dec 2021 - May 2023",
      role: {
        en: "Motion Graphic Designer (Freelance)",
        th: "โมชันกราฟิกดีไซเนอร์ (ฟรีแลนซ์)"
      },
      company: {
        en: "Freelance",
        th: "รับงานอิสระ / ฟรีแลนซ์"
      },
      description: {
        en: "Designed and produced high-impact motion graphics, animated explainer videos, brand identity animations, and kinetic typography. Refined storytelling rhythms and aesthetic timing that now inform my UI/UX engineering.",
        th: "ออกแบบและผลิตแอนิเมชัน โมชันกราฟิกโปรโมตแบรนด์ วิดีโอแนะนำผลิตภัณฑ์ และ Kinetic Typography ฝึกฝนความแม่นยำด้านจังหวะการเคลื่อนไหวและความสวยงามของภาพ ซึ่งนำมาประยุกต์ใช้กับการทำ Web Animation ได้อย่างลงตัว"
      }
    },
    {
      id: "exp-edutech",
      type: "work",
      category: { en: "WORK EXPERIENCE", th: "ประสบการณ์ทำงาน" },
      period: "May 2020 - Nov 2020",
      role: {
        en: "Motion Graphic Designer",
        th: "โมชันกราฟิกดีไซเนอร์"
      },
      company: {
        en: "Education Technology Co., Ltd",
        th: "บริษัท เอ็ดดูเคชั่น เทคโนโลยี จำกัด"
      },
      description: {
        en: "Created interactive e-learning media assets, 2D animations, and instructional graphic content adhering to rigorous project deadlines and pedagogical standards.",
        th: "ผลิตสื่อการเรียนรู้ออนไลน์ แอนิเมชัน 2D และกราฟิกประกอบบทเรียนดิจิทัล ทำงานร่วมกับทีมพัฒนาหลักสูตรตามกำหนดการส่งมอบที่แม่นยำ"
      }
    },
    {
      id: "edu-rsu",
      type: "education",
      category: { en: "UNIVERSITY DEGREE", th: "การศึกษาระดับปริญญาตรี" },
      period: "May 2015 - Sep 2018",
      role: {
        en: "Bachelor of Technology in Creative Media Technology",
        th: "เทคโนโลยีบัณฑิต สาขาเทคโนโลยีสื่อสร้างสรรค์"
      },
      company: {
        en: "Rangsit University (GPA 3.65 · First-Class Honors)",
        th: "มหาวิทยาลัยรังสิต (เกียรตินิยมอันดับ 1 · เกรดเฉลี่ย 3.65)"
      },
      description: {
        en: "Studied interactive digital media, animation principles, visual communication, and media technology. Graduated with First-Class Honors (GPA 3.65).",
        th: "ศึกษาการออกแบบสื่อปฏิสัมพันธ์ (Interactive Media) พื้นฐานแอนิเมชัน การสื่อสารด้วยภาพ และเทคโนโลยีมัลติมีเดีย สำเร็จการศึกษาด้วยเกียรตินิยมอันดับหนึ่ง"
      }
    }
  ],

  stack: [
    {
      category: {
        en: "Frontend",
        th: "หน้าบ้าน"
      },
      icon: "layout",
      items: [
        { name: "React.js", level: "Primary", highlight: true },
        { name: "JavaScript (ES6+)", level: "Primary", highlight: true },
        { name: "TypeScript", level: "Intermediate", highlight: false },
        { name: "Tailwind CSS", level: "Primary", highlight: true },
        { name: "HTML5 & CSS3", level: "Advanced", highlight: false },
        { name: "Responsive UI/UX", level: "Advanced", highlight: false }
      ]
    },
    {
      category: {
        en: "Backend & APIs",
        th: "หลังบ้าน & API"
      },
      icon: "server",
      items: [
        { name: "Node.js", level: "Primary", highlight: true },
        { name: "Express.js", level: "Primary", highlight: true },
        { name: "RESTful APIs", level: "Primary", highlight: true },
        { name: "Postman", level: "Advanced", highlight: false }
      ]
    },
    {
      category: {
        en: "Databases",
        th: "ฐานข้อมูล"
      },
      icon: "database",
      items: [
        { name: "MongoDB", level: "Primary (MERN)", highlight: true },
        { name: "Mongoose ODM", level: "Primary", highlight: false },
        { name: "Supabase PostgreSQL", level: "Primary", highlight: true }
      ]
    },
    {
      category: {
        en: "Motion & Design",
        th: "โมชันกราฟิก & ออกแบบ"
      },
      icon: "palette",
      items: [
        { name: "Adobe After Effects", level: "2+ Years Exp", highlight: true },
        { name: "Adobe Premiere Pro", level: "Advanced", highlight: false },
        { name: "Figma", level: "UI/UX Prototyping", highlight: true },
        { name: "Photoshop & Illustrator", level: "Graphic Assets", highlight: false }
      ]
    },
    {
      category: {
        en: "DevOps & Tools",
        th: "เครื่องมือพัฒนา & Deploy"
      },
      icon: "terminal",
      items: [
        { name: "Git & GitHub", level: "Daily Workflow", highlight: true },
        { name: "Vercel", level: "Cloud Deploy", highlight: false },
        { name: "Vite", level: "Build Tool", highlight: false },
        // { name: "npm", level: "Package Mgr", highlight: false }
      ]
    }
  ]
};
