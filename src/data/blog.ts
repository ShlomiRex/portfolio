export type BlogTopic = "Machine Learning" | "Emulator" | "Operating Systems" | "Cyber";

export interface BlogPost {
    title: string;
    topic: BlogTopic;
    publishDate: string;
    description: string;
    imageUrl: string;
    link: string;
    overlayImage?: string;
}

export const blogPosts: BlogPost[] = [
    {
        title: "The Hidden Security Risks of AI-Generated Code",
        topic: "Machine Learning",
        publishDate: "November 4, 2025",
        description: "When GitHub Copilot suggested a seemingly innocuous example domain that turned out to be a live phishing endpoint, it revealed a blind spot in relying on AI for code. This issue was uncovered during my day-to-day work with AI systems at AIdome, highlighting real-world risks and how to mitigate them.",
        imageUrl: "/images/blog/aidome_copilot_phishing.png",
        link: "https://www.aidome.co/post/when-github-copilot-placeholder-turns-into-a-phishing-hook-aidome-uncovers-a-hidden-risk-in-ai-g",
        overlayImage: "/images/work/Aidome.png"
    },
    {
        title: "Traffic Analysis Exercise 2025-01-22: Download From Fake Software Site",
        topic: "Cyber",
        publishDate: "March 30, 2025",
        description: "My solution to the Malware Traffic Analysis Exercise 2025-01-22: Download From Fake Software Site. I showcase my SOC/Security Analyst knowledge and review Wireshark network traffic to answer questions.",
        imageUrl: "/images/blog/mta-2025-01-22.png",
        link: "https://blog.shlomidom.com/Malware-Traffic-Analysis-Download-From-Fake-Software-Site"
    },
    {
        title: "Fixing VAE model reconstructions - training with different loss function: why and why it works",
        topic: "Machine Learning",
        publishDate: "November 25, 2024",
        description: "I've fixed a VAE model that had bad reconstructions. I've trained the model with different loss functions and I understood the reason why it works. In this post, I'll explain my small victory over loss functions.",
        imageUrl: "/images/blog/mse.png",
        link: "https://blog.shlomidom.com/Fixing-VAE-model-reconstructions"
    },
    {
        title: "How I optimized Java Swing pixel drawing in terms of CPU, memory, and GPU",
        topic: "Emulator",
        publishDate: "August 02, 2023",
        description: "In this post, I'll show you how I optimize code for drawing pixels in Java Swing, I am trying to squash CPU and memory regressions in my NES emulator.",
        imageUrl: "/images/blog/nes_emulator.gif",
        link: "https://blog.shlomidom.com/How-I-optimized-Java-Swing-pixel-drawing"
    },
    {
        title: "How to create an operation system from scratch",
        topic: "Operating Systems",
        publishDate: "July 02, 2023",
        description: "A step-by-step guide to create your own operating system from scratch. The bootloader is written in Assembly x86 and the kernel in C++.",
        imageUrl: "/images/blog/os_from_scratch.png",
        link: "https://blog.shlomidom.com/how-to-create-an-operation-system-from-scratch"
    },
    {
        title: "Why linux sucks for desktop users",
        topic: "Operating Systems",
        publishDate: "July 16, 2020",
        description: "A comprehensive look at why Linux still struggles to gain widespread adoption among desktop users, exploring the challenges and limitations that make it less appealing for everyday use.",
        imageUrl: "/images/blog/why_linux_sucks.jpg",
        link: "https://blog.shlomidom.com/Why-linux-sucks-for-desktop-users"
    }
];

export const blogTopics: BlogTopic[] = [
    "Machine Learning",
    "Emulator",
    "Operating Systems",
    "Cyber"
];
