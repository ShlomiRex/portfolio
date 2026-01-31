export interface Conference {
    title: string;
    date: string;
    location: string;
    description: string;
    images: { src: string; keepAspect?: boolean; wide?: boolean }[];
}

export const conferences: Conference[] = [
    {
        title: "Cybertech Expo Tel Aviv",
        date: "27 Jan, 2026",
        location: "Expo Tel Aviv, Tel Aviv",
        description: "I attended the Cybertech Global Tel Aviv event at Expo Tel Aviv, which brought together multiple startups and industry leaders. The main topics of the event were Cybersecurity and Artificial Intelligence. I had the honor of representing my company, Aidome™.",
        images: [
            { src: "/images/conferences/cybertech jan 2026/img4.jpeg", keepAspect: true, wide: false },
            { src: "/images/conferences/cybertech jan 2026/img6.jpeg", keepAspect: true, wide: true },
            { src: "/images/conferences/cybertech jan 2026/img1.jpeg", keepAspect: true, wide: false },
            { src: "/images/conferences/cybertech jan 2026/img5.jpeg", keepAspect: false, wide: false },
            { src: "/images/conferences/cybertech jan 2026/img8.jpeg", keepAspect: false, wide: true },
        ]
    },
    {
        title: "AWS Summit",
        date: "28 May, 2025",
        location: "Expo Tel Aviv, Tel Aviv",
        description: "I explored the latest in AWS cloud and AI technologies, such as biomedical research (protein folding), AI agents (for example in DATADOG and other companies), Generative AI, and I also visited my old employer (Check Point) and took a photo home 😊",
        images: [
            { src: "/images/conferences/aws summit/IMG_3595.jpeg", keepAspect: false, wide: false },
            { src: "/images/conferences/aws summit/IMG_3601.jpeg", keepAspect: false, wide: false },
            { src: "/images/conferences/aws summit/IMG_3609.jpeg", keepAspect: false, wide: false },
            { src: "/images/conferences/aws summit/IMG_3614.jpeg", keepAspect: false, wide: false },
            { src: "/images/conferences/aws summit/IMG_3618.jpeg", keepAspect: false, wide: false },
            { src: "/images/conferences/aws summit/IMG_3613.jpeg", keepAspect: false, wide: false }
        ]
    },
    {
        title: "Elastic: Next Gen Security Summit",
        date: "7 May, 2025",
        location: "Riverside Expo, Tel Aviv",
        description: `Agenda:
• How elastic can be integrated into SIEM and other security solutions to better understand attacks and digest the most important data (i.e. process 100 alerts and the SOC will only focus on a few)
• AI and Generative AI in security: ML Agents, analytics-driven investigations, and finding threats missing by others
• Elastic Attack Discovery: a short summary of all the alerts, without SOC analyst needing to analyze them all
• Attack Discovery which uses LLM to analyze SIEM alerts and automatically generate summary for which alerts are relevant and returns visual analytics showing the attack timeline, type of attack, who or what was affected, when, and even suggest mitigations.`,
        images: [
            { src: "/images/conferences/elastic next gen summit/IMG_3505.jpeg", keepAspect: false, wide: false },
            { src: "/images/conferences/elastic next gen summit/IMG_3528.jpeg", keepAspect: false, wide: false },
            { src: "/images/conferences/elastic next gen summit/IMG_3506.jpeg", keepAspect: false, wide: false },
            { src: "/images/conferences/elastic next gen summit/IMG_3520.jpeg", keepAspect: false, wide: false },
            { src: "/images/conferences/elastic next gen summit/IMG_3510.jpeg", keepAspect: false, wide: false },
            { src: "/images/conferences/elastic next gen summit/IMG_3514.jpeg", keepAspect: false, wide: false }
        ]
    },
    {
        title: "AWS Experience",
        date: "18 March, 2025",
        location: "Azrieli College of Engineering, Jerusalem",
        description: `Speakers:
• Liat Tzur (Sr. Technical Account Manager)
• Adi Jabkowsky (Sr. Gen AI Specialist)
• Dr. Assaf B. Spanier (Head of M.Sc. Program in Software Engineering @ Azrieli College of Engineering)

Agenda:
• Deep dive into AWS cloud technologies and how they impact the future of scalable infrastructure.
• Dr. Assaf B. Spanier's lecture about "Behind the Scenes: Understanding GPT's Technology"
• Personal Q&A with AWS employees about any question regarding AWS services

I also got free AI generated magnet images of my face 😊`,
        images: [
            { src: "/images/conferences/aws experience jerusalem/IMG_3328.jpeg", keepAspect: false, wide: false },
            { src: "/images/conferences/aws experience jerusalem/IMG_3329.jpeg", keepAspect: false, wide: false },
            { src: "/images/conferences/aws experience jerusalem/IMG_3326.jpeg", keepAspect: false, wide: false },
            { src: "/images/conferences/aws experience jerusalem/IMG_3317.jpeg", keepAspect: false, wide: false }
        ]
    },
    {
        title: "Hack-AU - Ariel University Hackathon",
        date: "April 2018",
        location: "Ariel University, Ariel",
        description: "I learned a lot about how to work in a team and how to navigate difficult tasks. As a team leader, although I didn't win, my team came in second, about 3 minutes after the first team!\n\nOur task was to navigate cyber attacks and find secret messages and navigate clues to get to the correct answer.",
        images: [
            { src: "/images/conferences/hack-au/20180502_050714.jpg", keepAspect: false, wide: false },
            { src: "/images/conferences/hack-au/IMG-20180316-WA0048.jpeg", keepAspect: false, wide: false },
            { src: "/images/conferences/hack-au/IMG-20180316-WA0042.jpg", keepAspect: false, wide: false },
            { src: "/images/conferences/hack-au/20180502_070040.jpg", keepAspect: false, wide: false },
            { src: "/images/conferences/hack-au/20180317_193700.jpg", keepAspect: false, wide: false },
            { src: "/images/conferences/hack-au/20180317_193630.jpg", keepAspect: false, wide: false }
        ]
    }
];
