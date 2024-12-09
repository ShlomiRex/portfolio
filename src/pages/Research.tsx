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
                Final Paper - Lecture 7 - Imagen Video - 2024 November
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed">
                In my final paper, I lectured my research supervisor about Imagen-Video paper. Imagen Video is a video synthesis model by Google that is based on the Imagen model, which I explained in my 5th lecture. Its a cascaded diffusion model; the pipeline contains 7 diffusion models. It includes spatial super-resolution model (SR3 by Google) to increase spatial resolution and temporal super-resolution model to increase frame rate.
              </p>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/_UqlkxSgayQ"
                  title="Imagen Video Presentation"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Reference</h3>
                <p className="text-sm text-muted-foreground">
                  Ho, J., Chan, W., Saharia, C., Whang, J., Gao, R., Gritsenko, A., Kingma, D.P., Poole, B., Norouzi, M., Fleet, D.J. and Salimans, T., 2022. Imagen video: High definition video generation with diffusion models. arXiv preprint arXiv:2210.02303.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Research;