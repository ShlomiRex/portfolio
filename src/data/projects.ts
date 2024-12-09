import { ProjectTopic } from "@/components/projects/ProjectCard";

export interface Project {
  title: string;
  description: string;
  topic: ProjectTopic;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Interactive Digit Classifier",
    description: "Draw on a canvas digit and the CNN model will predict the digit interactively. The model has 421k parameters and trained on MNIST dataset. The interactive program is uses TkInter.",
    topic: "Machine Learning",
    technologies: ["Python", "PyTorch", "TkInter", "Neural Networks"],
    imageUrl: "/lovable-uploads/f9e09425-49c4-4dfb-b749-c1b62375de95.png",
    githubUrl: "https://github.com/ShlomiRex/interactive_digit_classifier"
  },
  {
    title: "Interactive VAE Digit Interpolation",
    description: "I implemented and trained variational autoencoder from scratch and used it to interactively interpolate between two images with slider. The model has only 1.1M parameters, which is significantly less than previous autoencoder-only models that I created.",
    topic: "Machine Learning",
    technologies: ["Python", "PyTorch", "Neural Networks", "TkInter"],
    imageUrl: "/lovable-uploads/1d5b7d7b-5f12-4908-8a7d-931bf870ccca.png",
    githubUrl: "https://github.com/ShlomiRex/interactive_vae_digit_interpolation"
  },
  {
    title: "Interactive Denoiser",
    description: "Interactively and automatically load image from MNIST, add noise to the image, and the model will automatically denoise the image (run the trained model). Trained a CNN autoencoder with 5.6M parameters.",
    topic: "Machine Learning",
    technologies: ["Python", "PyTorch", "Neural Networks", "TkInter"],
    imageUrl: "/lovable-uploads/7f326a4a-894f-4566-9e8f-33a1deaca70d.png",
    githubUrl: "https://github.com/ShlomiRex/interactive_denoiser"
  },
  {
    title: "TypingBot-OCR",
    description: "Python bot that automatically beats any human in website tests. It uses tesseract to read the text from the image, and then it types the text using PyAutoGUI. Very easy and simple application.",
    topic: "Machine Learning",
    technologies: ["Python", "Tesseract", "PyAutoGUI", "OCR"],
    imageUrl: "/lovable-uploads/ff26392e-d9a8-4745-be63-a0234cf7d196.png",
    githubUrl: "https://github.com/ShlomiRex/TypingBOT-OCR"
  },
  {
    title: "ScreenCropper: Screenshot Python Library",
    description: "Simple python library that takes screenshot of region of the screen. Can also be used to determine coordinates of a region, or get the region image. Can be used as executable or as standalone library.",
    topic: "Application",
    technologies: ["Python", "PyAutoGUI", "Screenshot", "Library"],
    imageUrl: "/lovable-uploads/902e22b2-cb46-4cfa-aa8f-c9765ec7b3db.png",
    githubUrl: "https://github.com/ShlomiRex/screencropper"
  },
  {
    title: "Sorting Algorithms Visualizer",
    description: "A website that visualizes sorting algorithms. Written in pure JavaScript, you can see how sorting algorithms work in real time. It also comes with sound effects.",
    topic: "Application",
    technologies: ["JavaScript", "HTML", "CSS"],
    imageUrl: "/lovable-uploads/3fb15bc2-81e0-43d9-ac91-1b44df98f66f.png",
    githubUrl: "https://shlomirex.github.io/sorting-algo-visualizer/"
  },
  {
    title: "OS From Scratch",
    description: "A basic bootloader written in assembly and basic kernel written in C++. I was always fascinated with the linux kernel, and I wanted to learn how to write one completely from scratch. This projects allows me to write full kernel with memory management, process management, and drivers.",
    topic: "Operating Systems",
    technologies: ["Assembly", "C++", "Operating Systems"],
    imageUrl: "/lovable-uploads/b73b8160-39af-4416-96a6-b952058a0d9e.png",
    githubUrl: "https://github.com/ShlomiRex/shlomios"
  },
  {
    title: "OCR Font Classifier",
    description: "An OCR (optical character recognition) font classifier. It detects the font of the text in the image. The model is trained on 5 different fonts. It can predict correctly the font in 96% accuracy. The model was trained on 1684 images which contain 46,503 samples (characters and their font). I used Python and Tensorflow.",
    topic: "Machine Learning",
    technologies: ["Python", "TensorFlow", "OCR", "Machine Learning"],
    imageUrl: "/lovable-uploads/8d2c4389-4b0b-4bba-b92c-8c7778cb46c3.png",
    githubUrl: "https://github.com/ShlomiRex/ocr-font-classifier-model"
  },
  {
    title: "NES Emulator",
    description: "This is my attempt to create basic NES emulator in Java. My goal is to run NES games (particularly Super Mario Bros), and learn how to write emulators. I learned 6502 assembly, hardware emulation and optimizations. This emulator comes with a debugger for CPU and PPU and assembly viewer.",
    topic: "Emulator",
    technologies: ["Java", "Assembly", "Hardware Emulation"],
    imageUrl: "/lovable-uploads/d4a72bbb-9a15-45e5-94f8-53bd3855d3b0.png",
    githubUrl: "https://github.com/ShlomiRex/nes-emulator-java"
  },
  {
    title: "Kaminsky Attack",
    description: "The kaminsky-attack is a DNS cache poisoning attack - my implementation is written in pure C with extremely high performance. We attack the nameservers of the target domain, and inject malicious DNS records into the cache of the nameserver. The attack was first presented in blackhat 2008, and allows the attacker to redirect traffic to malicious servers. The attack is based on the fact that DNS uses UDP protocol, and is vulnerable to spoofing.",
    topic: "Cyber",
    technologies: ["C", "DNS", "Network Security"],
    imageUrl: "/lovable-uploads/7946a024-eb86-460b-aacf-91c1cb878ead.png",
    githubUrl: "https://github.com/ShlomiRex/kaminsky-attack"
  },
  {
    title: "EvilTwin Wifi Attack",
    description: "Create wifi AP that enables users to browse the internet, but in reality, the attacker can sniff all the traffic. This attack also creates evil-portal that can be used to steal credentials from users. For example, if the user tries to connect to Facebook, the user will be redirected to fake Facebook login page, and their credentials will be stolen.",
    topic: "Cyber",
    technologies: ["Wifi", "Network Security", "Social Engineering"],
    imageUrl: "/lovable-uploads/4dbf8418-c743-477a-95ab-d3139e57eee0.png",
    githubUrl: "https://github.com/ShlomiRex/WiFi-EvilTwin"
  }
];

export const topics: ProjectTopic[] = [
  "Machine Learning",
  "Application",
  "Operating Systems",
  "Emulator",
  "Cyber"
];
