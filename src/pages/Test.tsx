import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Brain, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import "@/styles/Page.css";
import ResearchCard from "@/components/ResearchCard";

// Test page

const Test = () => {
  return (
    <div className="page-content">
      <h1>Research</h1>

      <div className="space-y-6">
        <p>
          My main research area revolves around the vision domain. Specifically, image and video synthesis models. I mostly use PyTorch for my research work.
        </p>

        <p>
          Here are some of the research papers and seminars I have presented in my academic career.
        </p>
      </div>

      <div className="space-y-6 mt-6">
        <ResearchCard
          title="Final Paper - An Overview of Deep Learning Techniques for Image and Video Generation"
          date="March 2025"
          description='My final paper, titled "An Overview of Deep Learning Techniques for Image and Video Generation" provides a comprehensive overview of the current state-of-the-art in image and video synthesis models, including GANs, VAEs, and diffusion models. The paper also discusses the challenges and future directions in this rapidly evolving field.'
        >
          <iframe
            src={"https://drive.google.com/file/d/1ET-7XS6SbQeIffXx0BdRKkO3XOwpNPZW/preview"}
            title={"An Overview of Deep Learning Techniques for Image and Video Generation"}
            width="100%"
            height="600"
            style={{ border: 0 }}
            className="rounded-3xl"
            allow="autoplay">
          </iframe>
        </ResearchCard>

        <ResearchCard
          title="Final Paper - Lecture 8 - Make-a-Video"
          date="December 2024"
          description="Make-a-Video by Meta AI is a text-to-video generation model that builds upon text-to-image models by introducing temporal coherence without requiring text-video pairs for training. It achieves this by leveraging large-scale text-image datasets and incorporating spatiotemporal layers to generate short, coherent video clips from text prompts. It employs a pipeline of pseudo-spatial-super resolution and pseudo-temporal-super-resolution models."
          youtubeUrl="https://youtube.com/embed/h1eM_46tRp8"
          references={["Singer, U., Polyak, A., Hayes, T., Yin, X., An, J., Zhang, S., Hu, Q., Yang, H., Ashual, O., Gafni, O. and Parikh, D., 2022. Make-a-video: Text-to-video generation without text-video data. arXiv preprint arXiv:2209.14792."]}
        />

        <ResearchCard
          title="Final Paper - Lecture 7 - Imagen Video"
          date="November 2024"
          description="Imagen Video by Google AI is a video synthesis model by Google that is based on the Imagen model, which I explained in my 5th lecture. Its a cascaded diffusion model; the pipeline contains 7 diffusion models. It includes spatial super-resolution model (SR3 by Google) to increase spatial resolution and temporal super-resolution model to increase frame rate."
          youtubeUrl="https://www.youtube.com/embed/_UqlkxSgayQ"
          references={["Ho, J., Chan, W., Saharia, C., Whang, J., Gao, R., Gritsenko, A., Kingma, D.P., Poole, B., Norouzi, M., Fleet, D.J. and Salimans, T., 2022. Imagen video: High definition video generation with diffusion models. arXiv preprint arXiv:2210.02303."]}
          />

        <ResearchCard
          title="Final Paper - Lecture 6 - Video-LDM"
          date="November 2024"
          description="Video-LDM is a video synthesis model that uses a text-to-image model and modifies it by adding temporal layers (3D convolutions and temporal attention) between spatial frozen layers."
          youtubeUrl="https://www.youtube.com/embed/0aZzEMPUwrk"
          references={["Blattmann, A., Rombach, R., Ling, H., Dockhorn, T., Kim, S.W., Fidler, S. and Kreis, K., 2023. Align your latents: High-resolution video synthesis with latent diffusion models. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (pp. 22563-22575)."]}
          />

        <ResearchCard
          title="Final Paper - Lecture 5 - Imagen"
          date="October 2024"
          description="Imagen by Google AI is an image synthesis model that is based on cascaded diffusion models: one base diffusion model and two super-resolution models based on SR3 (by Google, which is also a cascaded model)."
          youtubeUrl="https://www.youtube.com/embed/HshCIWigR3I"
          references={["Saharia, C., Chan, W., Saxena, S., Li, L., Whang, J., Denton, E.L., Ghasemipour, K., Gontijo Lopes, R., Karagol Ayan, B., Salimans, T. and Ho, J., 2022. Photorealistic text-to-image diffusion models with deep language understanding. Advances in neural information processing systems, 35, pp.36479-36494."]}
          />
          
          <ResearchCard
            title="Research Seminar - Detecting Phishing Websites using Machine Learning"
            date="January 2024"
            description='In this research seminar, I was the lecturer. I summarized two main research papers. The topic was "detecting phishing websites using machine learning".'
            youtubeUrl="https://www.youtube.com/embed/IuxDpPn9ptw"
            references={["Koide, T., Fukushi, N., Nakano, H. and Chiba, D., 2023. Detecting Phishing Sites Using ChatGPT. arXiv preprint arXiv:2306.05816.", "Xiang, G., Hong, J., Rose, C.P. and Cranor, L., 2011. Cantina+ a feature-rich machine learning framework for detecting phishing web sites. ACM Transactions on Information and System Security (TISSEC), 14(2), pp.1-28."]} />
      </div>
    </div>
  );
};

export default Test;