import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Research = () => {
  return (
    <div className="min-h-screen w-full py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Research
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">
                Final Paper - Lecture 6 - Video-LDM - 2024 November
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed">
                In my final paper, I lectured my research supervisor about Video-LDM paper. Video-LDM is a video synthesis model that uses a text-to-image model and modifies it by adding temporal layers (3D convolutions and temporal attention) between spatial frozen layers.
              </p>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/0aZzEMPUwrk"
                  title="Video-LDM Presentation"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Reference</h3>
                <p className="text-sm text-muted-foreground">
                  Blattmann, A., Rombach, R., Ling, H., Dockhorn, T., Kim, S.W., Fidler, S. and Kreis, K., 2023. Align your latents: High-resolution video synthesis with latent diffusion models. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (pp. 22563-22575).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">
                Final Paper - Lecture 5 - Imagen - 2024 October
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed">
                In my final paper, I lectured my research supervisor about Imagen paper by Google. Imagen is an image synthesis model that is based on cascaded diffusion models: one base diffusion model and two super-resolution models based on SR3 (by Google, which is also a cascaded model).
              </p>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/HshCIWigR3I"
                  title="Imagen Presentation"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Reference</h3>
                <p className="text-sm text-muted-foreground">
                  Saharia, C., Chan, W., Saxena, S., Li, L., Whang, J., Denton, E.L., Ghasemipour, K., Gontijo Lopes, R., Karagol Ayan, B., Salimans, T. and Ho, J., 2022. Photorealistic text-to-image diffusion models with deep language understanding. Advances in neural information processing systems, 35, pp.36479-36494.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">
                Research Seminar - 2024 January
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed">
                In this research seminar, I was the lecturer. I summarized two main research papers. The topic was "detecting phishing websites using machine learning".
              </p>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/IuxDpPn9ptw"
                  title="Research Seminar Presentation"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">References</h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Koide, T., Fukushi, N., Nakano, H. and Chiba, D., 2023. Detecting Phishing Sites Using ChatGPT. arXiv preprint arXiv:2306.05816.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Xiang, G., Hong, J., Rose, C.P. and Cranor, L., 2011. Cantina+ a feature-rich machine learning framework for detecting phishing web sites. ACM Transactions on Information and System Security (TISSEC), 14(2), pp.1-28.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Research;