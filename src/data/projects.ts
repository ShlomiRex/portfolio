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
    title: "NES Emulator",
    description: "This is my attempt to create basic NES emulator in Java. My goal is to run NES games (particularly Super Mario Bros), and learn how to write emulators. I learned 6502 assembly, hardware emulation and optimizations. This emulator comes with a debugger for CPU and PPU and assembly viewer.",
    topic: "Emulator",
    technologies: ["Java", "Assembly", "Hardware Emulation"],
    imageUrl: "/images/projects/nes_emulator.gif",
    githubUrl: "https://github.com/ShlomiRex/nes-emulator-java"
  },
  {
    title: "Interactive VAE Digit Interpolation",
    description: "I implemented and trained variational autoencoder from scratch and used it to interactively interpolate between two images with slider. The model has only 1.1M parameters, which is significantly less than previous autoencoder-only models that I created.",
    topic: "Machine Learning",
    technologies: ["Python", "PyTorch", "Neural Networks", "TkInter"],
    imageUrl: "/images/projects/interactive_vae_digit_interpolation.gif",
    githubUrl: "https://github.com/ShlomiRex/interactive_vae_digit_interpolation"
  },
  {
    title: "Sorting Algorithms Visualizer",
    description: "A website that visualizes sorting algorithms. Written in pure JavaScript, you can see how sorting algorithms work in real time. It also comes with sound effects.",
    topic: "Application",
    technologies: ["JavaScript", "HTML", "CSS"],
    imageUrl: "/images/projects/sorting_algo_visualizer.gif",
    githubUrl: "https://shlomirex.github.io/sorting-algo-visualizer/"
  },
  {
    title: "Interactive Digit Classifier",
    description: "Draw on a canvas digit and the CNN model will predict the digit interactively. The model has 421k parameters and trained on MNIST dataset. The interactive program is uses TkInter.",
    topic: "Machine Learning",
    technologies: ["Python", "PyTorch", "TkInter", "Neural Networks"],
    imageUrl: "/images/projects/interactive_digit_classifier.gif",
    githubUrl: "https://github.com/ShlomiRex/interactive_digit_classifier"
  },
  {
    title: "OS From Scratch",
    description: "A basic bootloader written in assembly and basic kernel written in C++. I was always fascinated with the linux kernel, and I wanted to learn how to write one completely from scratch. This projects allows me to write full kernel with memory management, process management, and drivers.",
    topic: "Operating Systems",
    technologies: ["Assembly", "C++", "Operating Systems"],
    imageUrl: "/images/projects/os_from_scratch.png",
    githubUrl: "https://github.com/ShlomiRex/shlomios"
  },
  {
    title: "SeeFood Android App",
    description: "A silicon valley parody app that tells you if your food is a hotdog or not a hotdog, using state of the art machine learning. The app is built using Android SDK and Java. The app communicates with a server that runs the machine learning model (ResNet-50) with simple REST API. The server that runs the machine learning model is built using Flask and Python.",
    topic: "Application",
    technologies: ["Android", "Java", "Python", "Flask", "Machine Learning"],
    imageUrl: "/images/projects/seefood.gif",
    githubUrl: "https://github.com/ShlomiRex/seefood-app"
  },
  {
    title: "EvilTwin Wifi Attack",
    description: "Create wifi AP that enables users to browse the internet, but in reality, the attacker can sniff all the traffic. This attack also creates evil-portal that can be used to steal credentials from users. For example, if the user tries to connect to Facebook, the user will be redirected to fake Facebook login page, and their credentials will be stolen.",
    topic: "Cyber",
    technologies: ["Wifi", "Network Security", "Social Engineering"],
    imageUrl: "/images/projects/wifi_evil_twin.jpg",
    githubUrl: "https://github.com/ShlomiRex/WiFi-EvilTwin"
  },
  {
    title: "Portfolio Website",
    description: "This project is this website that you are currently on. Created using TypeScript, React, Vite, and Tailwind CSS. The website is responsive and includes a dark mode.",
    topic: "Website",
    technologies: ["TypeScript", "React", "JavaScript", "Vite", "Tailwind"],
    imageUrl: "/images/projects/portfolio_website.gif",
    githubUrl: "https://github.com/ShlomiRex/portfolio"
  },
  {
    title: "Chip-8 Emulator",
    description: "A chip-8 emulator written in Java. I wrote it as prerequisites for my Nintendo Entertainment System emulator (NES). CHIP-8 is an interpreted programming language that runs on a virtual machine. It runs on 1802 microprocessor.",
    topic: "Emulator",
    technologies: ["Java", "Emulation", "Virtual Machine"],
    imageUrl: "/images/projects/chip_8_emulator.gif",
    githubUrl: "https://github.com/ShlomiRex/chip-8-emulator"
  },
  {
    title: "Raspberry Pi Wardrive",
    description: "A wardriving project using Raspberry Pi. The project includes GPS module, external wifi adapter, and power bank. The project is used to collect data about wifi networks in the area. The data is then analyzed and visualized on a map.",
    topic: "Cyber",
    technologies: ["Python", "Raspberry Pi", "GPS", "Wifi", "Hardware"],
    imageUrl: "/images/projects/raspberrypi_wardrive.png",
    githubUrl: "https://github.com/ShlomiRex/raspberry-pi-wardrive"
  },
  {
    title: "Typing Bot",
    description: "A bot that uses OCR (Optical Character Recognition) to read text from images and type it automatically. The bot is written in Python and uses Tesseract OCR engine. It can be used to automatically type text from images, making it useful for transcription tasks.",
    topic: "Application",
    technologies: ["Python", "Tesseract OCR", "PyAutoGUI", "OpenCV"],
    imageUrl: "/images/projects/typing_bot_ocr.gif",
    githubUrl: "https://github.com/ShlomiRex/TypingBot"
  },
  {
    title: "Screen Cropper",
    description: "A simple screen cropping tool that allows you to crop any part of your screen and save it as an image. The tool is written in Python and uses PyQt5 for the GUI. It also includes a feature to automatically upload the cropped image to Imgur.",
    topic: "Application",
    technologies: ["Python", "PyQt5", "GUI", "Imgur API"],
    imageUrl: "/images/projects/screencropper.gif",
    githubUrl: "https://github.com/ShlomiRex/screencropper"
  },
  {
    title: "OCR Font Classifier",
    description: "An OCR (optical character recognition) font classifier. It detects the font of the text in the image. The model is trained on 5 different fonts. It can predict correctly the font in 96% accuracy. The model was trained on 1684 images which contain 46,503 samples (characters and their font). I used Python and Tensorflow.",
    topic: "Machine Learning",
    technologies: ["Python", "TensorFlow", "OCR", "Machine Learning"],
    imageUrl: "/images/projects/ocr_font_classifier.png",
    githubUrl: "https://github.com/ShlomiRex/ocr-font-classifier-model"
  },
  {
    title: "Kaminsky Attack",
    description: "The kaminsky-attack is a DNS cache poisoning attack - my implementation is written in pure C with extremely high performance. We attack the nameservers of the target domain, and inject malicious DNS records into the cache of the nameserver. The attack was first presented in blackhat 2008, and allows the attacker to redirect traffic to malicious servers. The attack is based on the fact that DNS uses UDP protocol, and is vulnerable to spoofing.",
    topic: "Cyber",
    technologies: ["C", "DNS", "Network Security"],
    imageUrl: "/images/projects/kaminsky_attack.png",
    githubUrl: "https://github.com/ShlomiRex/kaminsky-attack"
  },
  {
    title: "Interactive Denoiser",
    description: "Interactively and automatically load image from MNIST, add noise to the image, and the model will automatically denoise the image (run the trained model). Trained a CNN autoencoder with 5.6M parameters.",
    topic: "Machine Learning",
    technologies: ["Python", "PyTorch", "Neural Networks", "TkInter"],
    imageUrl: "/images/projects/interactive_denoiser.gif",
    githubUrl: "https://github.com/ShlomiRex/interactive_denoiser"
  },
  {
    title: "e-xterm",
    description: "Cross-platform (Windows, Mac, Linux) electron based SSH client, with managed bookmarks, and tab system for managing sessions. Written in Electron framework, Typescript, and React. Also comes with SFTP support and drag-and-drop remote file explorer, and remote monitoring tools.",
    topic: "Application",
    technologies: ["Electron", "TypeScript", "React", "SSH", "SFTP"],
    imageUrl: "/images/projects/e_xterm.png",
    githubUrl: "https://github.com/ShlomiRex/e-xterm"
  },
  {
    title: "Game of Life",
    description: "Game of Life game written in Python. Game of life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. The game is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. The result is interesting evolution patterns over time.",
    topic: "Application",
    technologies: ["Python", "Cellular Automaton", "Simulation"],
    imageUrl: "/images/projects/game_of_life.gif",
    githubUrl: "https://github.com/ShlomiRex/GameOfLife_Python"
  },
  {
    title: "OpenCV Demos",
    description: "An OpenCV demonstration of various computer vision algorithms. The project is written in Python and OpenCV. The project includes the following algorithms: Canny edge detection, color tracking, stereo depth (convert images to 3D objects), fast fourier transform, filters, gradients, noise and histogram normalization.",
    topic: "Application",
    technologies: ["Python", "OpenCV", "Computer Vision", "Image Processing"],
    imageUrl: "/images/projects/opencv_demos.gif",
    githubUrl: "https://github.com/ShlomiRex/opencv-demos"
  },
  {
    title: "MNIST Classifier",
    description: "I built a CNN classifier to recognize handwritten digits using the MNIST dataset with 98% accuracy. This project demonstrates my ability to design, train, and evaluate CNN models for image classification tasks.",
    topic: "Machine Learning",
    technologies: ["Python", "PyTorch", "CNN", "Deep Learning"],
    imageUrl: "/images/projects/mnist_classifier.png",
    githubUrl: "https://github.com/ShlomiRex/mnist_classifier"
  },
  {
    title: "Command Line Text Editor",
    description: "This is a command-line based text editor. Just like 'vi'. A user can view and edit files in the command line. The user can print lines and delete lines. The functionality is simillar to 'ed' - a text applicatiton for the terminal.",
    topic: "Application",
    technologies: ["Command Line", "Text Editor", "Terminal", "File I/O"],
    imageUrl: "/images/projects/command_line_text_editor.gif",
    githubUrl: "https://github.com/ShlomiRex/line-oriented-text-editor"
  },
  {
    title: "MessageU",
    description: "This applications allow users to send and received end-to-end encrypted messages and files. Using RSA for key exchange and AES CBS for encryption. Plain text is also supported.",
    topic: "Application",
    technologies: ["End-to-End Encryption", "RSA", "AES", "File Transfer", "Messaging"],
    imageUrl: "/images/projects/message_u.png",
    githubUrl: "https://github.com/ShlomiRex/MessageU-Client"
  }
];

export const topics: ProjectTopic[] = [
  "Machine Learning",
  "Application",
  "Operating Systems",
  "Emulator",
  "Cyber",
  "Website"
];
