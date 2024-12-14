export interface ResearchItem {
  title: string;
  description: string;
  youtubeUrl: string;
  reference: string;
}

export const researchData: ResearchItem[] = [
  {
    title: "Final Paper - Lecture 7 - Imagen Video - 2024 November",
    description: "In my final paper, I lectured my research supervisor about Imagen-Video paper. Imagen Video is a video synthesis model by Google that is based on the Imagen model, which I explained in my 5th lecture. Its a cascaded diffusion model; the pipeline contains 7 diffusion models. It includes spatial super-resolution model (SR3 by Google) to increase spatial resolution and temporal super-resolution model to increase frame rate.",
    youtubeUrl: "https://www.youtube.com/embed/_UqlkxSgayQ",
    reference: "Ho, J., Chan, W., Saharia, C., Whang, J., Gao, R., Gritsenko, A., Kingma, D.P., Poole, B., Norouzi, M., Fleet, D.J. and Salimans, T., 2022. Imagen video: High definition video generation with diffusion models. arXiv preprint arXiv:2210.02303."
  },
  {
    title: "Final Paper - Lecture 6 - Video-LDM - 2024 November",
    description: "In my final paper, I lectured my research supervisor about Video-LDM paper. Video-LDM is a video synthesis model that uses a text-to-image model and modifies it by adding temporal layers (3D convolutions and temporal attention) between spatial frozen layers.",
    youtubeUrl: "https://www.youtube.com/embed/0aZzEMPUwrk",
    reference: "Blattmann, A., Rombach, R., Ling, H., Dockhorn, T., Kim, S.W., Fidler, S. and Kreis, K., 2023. Align your latents: High-resolution video synthesis with latent diffusion models. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (pp. 22563-22575)."
  },
  {
    title: "Final Paper - Lecture 5 - Imagen - 2024 October",
    description: "In my final paper, I lectured my research supervisor about Imagen paper by Google. Imagen is an image synthesis model that is based on cascaded diffusion models: one base diffusion model and two super-resolution models based on SR3 (by Google, which is also a cascaded model).",
    youtubeUrl: "https://www.youtube.com/embed/HshCIWigR3I",
    reference: "Saharia, C., Chan, W., Saxena, S., Li, L., Whang, J., Denton, E.L., Ghasemipour, K., Gontijo Lopes, R., Karagol Ayan, B., Salimans, T. and Ho, J., 2022. Photorealistic text-to-image diffusion models with deep language understanding. Advances in neural information processing systems, 35, pp.36479-36494."
  },
  {
    title: "Research Seminar - 2024 January",
    description: "In this research seminar, I was the lecturer. I summarized two main research papers. The topic was \"detecting phishing websites using machine learning\".",
    youtubeUrl: "https://www.youtube.com/embed/IuxDpPn9ptw",
    reference: "Koide, T., Fukushi, N., Nakano, H. and Chiba, D., 2023. Detecting Phishing Sites Using ChatGPT. arXiv preprint arXiv:2306.05816.\n\nXiang, G., Hong, J., Rose, C.P. and Cranor, L., 2011. Cantina+ a feature-rich machine learning framework for detecting phishing web sites. ACM Transactions on Information and System Security (TISSEC), 14(2), pp.1-28."
  }
];