import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { researchData } from "@/data/research";

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
          <p className="text-muted-foreground">
            My main research area revolves around the vision domain. Specifically, image and video synthesis models. I mostly use PyTorch for my research work.
          </p>
          <p className="text-muted-foreground">
            Here are some of the research papers and seminars I have presented in my academic career.
          </p>
          {researchData.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed">
                  {item.description}
                </p>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={item.youtubeUrl}
                    title={item.title}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Reference</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {item.reference}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Research;