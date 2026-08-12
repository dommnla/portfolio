import type { Project } from "../types/Project";

const asset = (path: string) =>
    `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const portfolio = {
    personal: {
        firstName: "Dominique",
        lastName: "Evangelista",
        fullName: "Dominique Evangelista",

        role: "Full Stack Developer",

        tagline:
            "Building scalable full-stack applications using React, ASP.NET Core, SQL Server, and modern web technologies.",

        about:
            "I'm an easy-going and creative developer who has been interested in technology since I was young, largely because of my love for games and computers. I learn best by doing—building things, experimenting, and figuring things out along the way. I'm working toward becoming a full-stack or game developer, and I enjoy exploring new technologies and creative projects. Outside of development, I enjoy gaming, riding motorcycles, playing basketball, and discovering new fragrances."
    },

    contact: {
        email: "dominiqueaevangelista12@gmail.com",

        github: "https://github.com/dommnla",

        linkedin: "https://www.linkedin.com/in/dominique-evangelista-524a77387/",
        
        facebook: "https://www.facebook.com/DomMNL/"
    },

    resume: {
        file: asset("/documents/resume.pdf")
    },

    skills: [
        {
            category: "Languages",
            items: [
                "C#",
                "Java",
                "Python",
                "SQL",
                "JavaScript",
                "TypeScript"
            ]
        },

        {
            category: "Frameworks & Technologies",
            items: [
                "ASP.NET Core",
                "React",
                "Unity",
                "ARCore"
            ]
        },

        {
            category: "Tools",
            items: [
                "Git",
                "Visual Studio",
                "VS Code",
                "Blender",
                "MySQL"
            ]
        }
    ],

    experience: [
        {
            company: "North Logic IT Solutions Inc.",
            position: "Full Stack Developer Intern",
            period: "January 2025 - May 2025",

            description:
                "Worked on Kaizen ERP and Kaizen Payroll using ASP.NET Core MVC, C#, SQL, and JavaScript. Implemented UI improvements, permission-based functionality, auto-increment transaction numbering, reusable components, and database-related features.",

            contributions: [
                "Built the ERP database relationship map to document relationships between tables and modules.",
                "Developed a database-based theme selector for dynamically switching application themes.",
                "Implemented permission-based UI behavior and read-only roles.",
                "Created reusable form button components to improve consistency across ERP forms.",
                "Implemented automatic transaction numbering for ERP forms.",
                "Developed global form-state functionality for managing form behavior.",
                "Documented the company's databases and their structures."
            ]
        },

        {
            company: "Freelance",
            position: "Computer Technician",
            period: "2022 - Present",

            description:
                "Built, upgraded, and repaired desktop computers while diagnosing hardware and software issues for clients."
        },

        {
            company: "Despised MNL",
            position: "Founder",
            period: "2020 - Present",

            description:
                "Started and managed an independent clothing brand, handling branding, marketing, product launches, and customer engagement."
        }
    ],

    projects: [
        {
            id: 1,
            slug: "i-am",
            title: "I AM: AR Human Anatomy",

            description:
                "An augmented reality mobile application designed to help Grade 4–6 students learn human anatomy through interactive 3D models and educational content.",

            technologies: [
                "Unity",
                "C#",
                "ARCore",
                "Blender",
                "Photoshop"
            ],

            image: asset("/projects/IAM.png"),
            download: "",

            sections: [
                {
                    type: "text",
                    title: "About the Project",

                    content:
                        "I AM is an augmented reality mobile application designed to make learning human anatomy more interactive and engaging for Grade 4–6 students. The application combines educational content with interactive 3D models, allowing students to explore different parts of the human body through an immersive learning experience."
                },

                {
                    type: "video",
                    title: "Project Commercial",

                    description:
                        "The project's commercial introduces I AM as an interactive learning experience that combines augmented reality, 3D visualization, and educational content. It highlights the application's goal of making anatomy more engaging and accessible to younger students.",

                    video: asset("/projects/i-am/IAMCommercial.mp4")
                },

                {
                    type: "portrait-video",
                    title: "Application Demonstration",

                    description:
                        "These demonstrations showcase the core mobile application in use, including the navigation and interaction with the application's anatomy modules and 3D models.",

                    videos: [
                        asset("/projects/i-am/IAMDemo1.mp4"),
                        asset("/projects/i-am/IAMDemo2.mp4")
                    ]
                },

                {
                    type: "showcase",
                    title: "Application & Web Portal",

                    description:
                        "I AM consists of both a mobile learning application and a supporting web portal. The mobile application provides students with access to interactive anatomy modules, while the web portal provides management tools for authorized users.",

                    items: [
                        {
                            image: asset("/projects/i-am/IAMScreenshot.jpg"),
                            label: "Mobile Application"
                        },

                        {
                            image: asset("/projects/i-am/IAMWebPortal.jpg"),
                            label: "Web Portal"
                        }
                    ]
                },

                {
                    type: "team",
                    title: "Development Team",

                    description:
                        "I AM was developed as a collaborative capstone project. The team worked together across development, design, 3D asset creation, and project implementation to bring the application from concept to a functional educational experience.",

                    image: asset("/projects/i-am/IAMDevTeam.png"),

                    members: [
                        "Aaron Fernandez",
                        "Dominique Evangelista",
                        "Dave Cleofe",
                        "Rainier Barsaga"
                    ]
                },

                {
                    type: "text",
                    title: "Web Portal",

                    content:
                        "The project includes a supporting web portal with separate accounts for administrators and teachers. The portal provides authorized users with tools for managing student-related information and educational content, extending the application beyond the mobile experience."
                },

                {
                    type: "text",
                    title: "My Role",

                    content:
                        "I contributed primarily to the UI/UX design and 3D modeling aspects of the project. I worked on the visual structure and user experience of the application while also creating and preparing 3D assets used to represent anatomical structures within the learning experience."
                }
            ]
        },

        {
            id: 2,
            slug: "kanto-siete",
            title: "Kanto Siete",

            description:
                "A single-player first-person horror game where players explore a haunted slum, retrieve three cursed objects, and deliver them to their designated altars while evading an increasingly aggressive Ghost Bride.",

            technologies: [
                "Unity",
                "C#",
                "Blender",
                "Photoshop",
                "Video Editing",
                "3D Animation"
            ],

            image: asset("/projects/KANTOSIETE.png"),
            download: "",

            sections: [
                {
                    type: "text",
                    title: "About the Game",

                    content:
                        "Kanto Siete was developed as a collaborative project for our Game Development subject. The game is a single-player first-person horror experience where players explore a haunted slum, retrieve three cursed objects, and deliver them to their designated altars while avoiding the increasingly aggressive Ghost Bride. My primary responsibilities focused on the game's flow, UI/UX, and 3D modeling. I designed and implemented the progression and interaction flow, worked on the user interface and overall player experience, and created the 3D assets and environment used throughout the game."
                },

                {
                    type: "video",
                    title: "Game Environment",

                    video: asset("/projects/kanto-siete/KantoEnv.mp4"),

                    description:
                        "The game's environment was designed and created by me as part of my 3D modeling responsibilities. I worked on the streets, buildings, interiors, and other environmental elements used to construct the game's haunted setting."
                },

                {
                    type: "development-showcase",
                    title: "Development",

                    portrait: asset("/projects/kanto-siete/KantoDev1.jpg"),

                    landscape: [
                        asset("/projects/kanto-siete/KantoDev2.png"),
                        asset("/projects/kanto-siete/KantoDev3.png")
                    ],

                    description:
                        "These images show different stages of Kanto Siete's development. My work focused on creating the game's 3D assets and environment, as well as shaping the game's flow and player experience."
                },

                {
                    type: "video",
                    title: "Custom Death Animation",

                    video: asset(
                        "/projects/kanto-siete/KantoDeathAnimation.mp4"
                    ),

                    description:
                        "I created the custom death animation used in Kanto Siete to make the player's death sequence more distinctive and reinforce the game's horror atmosphere."
                }
            ]
        },

        {
            id: 3,
            slug: "daily-crossword",
            title: "Daily Crossword",

            description:
                "A desktop crossword puzzle game developed as a mini-capstone project using C# and Windows Forms.",

            technologies: [
                "C#",
                "Windows Forms",
                "Visual Studio",
                "Photoshop"
            ],

            image: asset("/projects/DAILYCROSSWORD.gif"),
            download: "",

            sections: [
                {
                    type: "text",
                    title: "About the Project",

                    content:
                        "Daily Crossword is a desktop crossword puzzle game developed as a mini-capstone project. The project was created under the requirement to use Windows Forms, giving the team a limited framework in which to design and implement a functional game experience. The application features an interactive crossword grid, numbered entries, and a real-time game timer."
                },

                {
                    type: "image",
                    title: "Development",

                    description:
                        "The game was developed using C# and Windows Forms as part of a mini-capstone project. Working within the limitations of the required framework, the team focused on creating an interactive crossword experience with a functional puzzle interface and game timer.",

                    image: asset(
                        "/projects/daily-crossword/CrosswordScreen.png"
                    )
                },

                {
                    type: "text",
                    title: "My Role",

                    content:
                        "I contributed to the UI/UX design and application development, helping design the game's interface and navigation while assisting with the implementation of its core functionality. I also participated in testing and debugging to ensure the application provided a reliable and user-friendly experience."
                },
            ]
        },

        {
            id: 4,
            slug: "developer-portfolio",
            title: "Developer Portfolio",

            description:
                "A responsive full-stack developer portfolio built to showcase my experience, projects, technical skills, and professional background.",

            technologies: [
                "React",
                "TypeScript",
                "Tailwind CSS",
                "ASP.NET Core"
            ],

            image: asset("/projects/WEBSITE.jpg"),
            download: null,

            sections: [
                {
                    type: "text",
                    title: "About This Project",

                    content:
                        "This portfolio is being built as a full-stack web application using React, TypeScript, Tailwind CSS, and ASP.NET Core."
                }
            ]
        }
    ] satisfies Project[]
};