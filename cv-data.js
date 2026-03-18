const cvData = {
    name: "Nguyễn Hữu Khắc Phúc",
    role: "Game Developer",
    avatar: "assets/AnhTheP.png",
    contact: {
        email: "nguyenphuc.it14@gmail.com",
        phone: "+84 336 018 244",
        location: "Ho Chi Minh City, Vietnam",
        github: "github.com/nguyenphuc1040",
        linkedin: "linkedin.com/in/nguyenphuc1040",
        portfolio: "https://nguyenphuc1040.github.io/portfolio/"
    },
    summary: `Results-driven Unity / C# Game Developer with 3+ years of professional experience in large-scale commercial ecosystems (20M+ downloads) and successful indie publishing (nearly 1M downloads). Expert in multiplayer netcode (Photon Quantum, Netick, Fishnet) and diverse platforms including Mobile, VR, and Telegram TON. Adept at building reusable internal frameworks and modular systems to accelerate development workflows and ensure code scalability.`,

    experience: [
        {
            title: "Unity Developer",
            company: "Wolffun Game Pte. Ltd",
            date: "Aug 2022 – Dec 2025",
            desc: "Developed mobile applications and games on Unity Engine, optimized performance, built gameplay, game UI, creative model editing features, and managed game resources effectively."
        }
    ],
    projects: [
        {
            name: "Thetan Arena",
            badge: "MOBA / Action",
            downloads: "10M+ Downloads",
            company: "Wolffun Game",
            desc: "Global PvP NFT MOBA game combining competitive gameplay and blockchain technology.",
            responsibilities: [
                "Integrated Thetan SDK (account management, NFT minting & collection) across the game ecosystem, enabling cross-game features",
                "Secured game integrity via Play Integrity API and obfuscation to prevent fraud"
            ],
            tech: ["Unity3D", "C#", "Photon Quantum", "Addressables"],
            links: {
                googlePlay: "https://play.google.com/store/apps/details?id=com.wolffun.thetanarena",
                appStore: "https://apps.apple.com/vn/app/thetan-arena-moba-survival/id1584926372"
            }
        },
        {
            name: "Thetan Immortal",
            badge: "Action / PvP",
            downloads: "100K+ Downloads",
            award: "Google Play Best of 2025",
            company: "Wolffun Game",
            desc: "PvP archery fighting game with unique character skills. Won Google Play's Best of 2025 — Best Game Made in Vietnam.",
            responsibilities: [
                "Built Campaign game mode and character skill system",
                "Integrated with backend to build friendly battle and real-time chat features"
            ],
            tech: ["Unity3D", "C#", "Netick", "Addressables"],
            links: {
                googlePlay: "https://play.google.com/store/apps/details?id=com.wolffun.thetanimmortal",
                appStore: "https://apps.apple.com/us/app/thetan-immortal/id6449538044"
            }
        },        
        {
            name: "Thetan Creator",
            badge: "Art & Design",
            downloads: "50K+ Downloads",
            company: "Wolffun Game",
            desc: "Application to draw, customize costumes, and publish to Thetan game system. Includes social media features and marketplace.",
            responsibilities: [
                "Built character creation tools including publishing, saving, and downloading drawing features",
                "Integrated backend services for user accounts, monetization (IAP/Subscriptions), and social engagement",
                "Built a centralized resource management system to store, and load character models across Thetan games"
            ],
            tech: ["Unity3D", "C#", "Addressables", "IAP"],
            links: {
                googlePlay: "https://play.google.com/store/apps/details?id=com.wolffun.thetanugcapp",
                appStore: "https://apps.apple.com/vn/app/thetan-creator-create-play/id6445906128"
            }
        },
{
            pageBreak: true // ← chèn page-break trước project này khi print
        },
        {
            name: "Thetan Rivals",
            badge: "Party Royale",
            downloads: "500K+ Downloads",
            company: "Wolffun Game",
            desc: "Party royale PvP game featuring fun-filled races, knockout challenges, and customizable characters in a vibrant 3D world.",
            responsibilities: [
                "Built multiplayer game modes using Photon Quantum for real-time PvP synchronization",
                "Integrated Thetan Creator's artworks into game characters and cosmetics",
                "Updated and maintained existing features"
            ],
            tech: ["Unity3D", "Photon Quantum", "Fishnet", "Addressables"],
            links: {
                googlePlay: "https://play.google.com/store/apps/details?id=com.wolffun.thetanrivals",
                appStore: "https://apps.apple.com/vn/app/thetan-rivals-party-royale/id1634375328"
            }
        },
        {
            name: "City Block Jam",
            badge: "Puzzle",
            downloads: "50K+ Downloads",
            company: "Wolffun Game",
            desc: "Sliding block puzzle game blending brain-teasing puzzles, color matching, and strategic city-building fun.",
            responsibilities: [
                "Developed core gameplay mechanics for sliding block puzzles",
                "Built game feature UI/UX ensuring smooth player experience",
                "Developed DDA (Dynamic Difficulty Adjustment) library for the entire puzzle game lineup in the ecosystem"
            ],
            tech: ["Unity3D", "C#", "Addressables"],
            links: {
                googlePlay: "https://play.google.com/store/apps/details?id=com.legendarylabs.city.block.slide.jam.color.puzzle",
                appStore: "https://apps.apple.com/us/app/city-block-jam/id6742809816"
            }
        },
        {
            name: "Otter Loot",
            badge: "Telegram TON",
            company: "Wolffun Game",
            desc: "P2E mini-game on TON blockchain natively playable on Telegram.",
            responsibilities: [
                "Built quest system, mini-event features, and referral event features",
                "Performed maintenance and bug fixes across game features"
            ],
            tech: ["Unity2D", "Telegram APIs", "Addressables"],
            links: {
                telegram: "https://ton.app/en/games/otter-loot?id=2925"
            }
        },

        {
            name: "Dien Bien Phu in the air",
            badge: "Simulation / Action",
            downloads: "500K+ Downloads",
            company: "Pirex Games (Indie)",
            desc: "Simulation game of the victory of Dien Bien Phu in the air. Features MiG-21 interceptor, SAM-2 missile defense, and anti-aircraft artillery modes.",
            responsibilities: [
                "Solo-developed end-to-end: game design, pixel art, programming, and store publishing"
            ],
            tech: ["Unity2D", "C#", "IAP", "IAA", "Localization"],
            links: {
                googlePlay: "https://play.google.com/store/apps/details?id=com.DefaultCompany.NguyenPhuc",
                appStore: "https://apps.apple.com/us/app/id6746174052"
            }
        },
        {
            name: "Battle of Dien Bien Phu",
            badge: "Strategy",
            downloads: "100K+ Downloads",
            company: "Pirex Games (Indie)",
            desc: "Historical simulation game (PvE) recreating the 56-day campaign of Dien Bien Phu (1954).",
            responsibilities: [
                "Solo-developed end-to-end: game design, art, programming, and store publishing across iOS & Android",
                "Achieved #1 on App Store within the first week of release through strategic planning and execution"
            ],
            tech: ["Unity2D", "C#", "IAP", "IAA", "Localization"],
            links: {
                googlePlay: "https://play.google.com/store/apps/details?id=com.pirexgames.battleofdienbienphu",
                appStore: "https://apps.apple.com/us/app/id6747936659"
            }
        },
        {
            name: "Brainbow: Smart Art Puzzle",
            badge: "Puzzle - Nonogram",
            company: "Pirex Games (Indie)",
            desc: "A colorful nonogram-style puzzle game where players discover hidden pixel art by solving color number clues. Only available on Android.",
            responsibilities: [
                "Solo-developed end-to-end: game design, art creation, programming, and Android publishing"
            ],
            tech: ["Unity2D", "C#", "IAA"],
            links: {
                googlePlay: "https://play.google.com/store/apps/details?id=com.pirexgames.brainbow"
            }
        },
    ],

    skills: {
        "Game Engines": ["Unity 3D/2D"],
        "Languages": ["C#", ".NET", "TypeScript"]
    },

    education: {
        degree: "Information System Engineer",
        school: "University of Information Technology – HCM, Vietnam"
    }
};
