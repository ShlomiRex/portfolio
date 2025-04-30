import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="page-content">
      <h1>Resume</h1>

      {/* Download Button */}
      <div className="flex justify-center mb-6">
        <Button variant="outline">
          <Download className="mr-2" />
          <a href="/files/pdf/resume.pdf" target="_blank">Download Resume</a>
        </Button>
      </div>

      {/* PDF */}
      <div>
        <object
          data="/files/pdf/resume.pdf"
          type="application/pdf"
          className="w-full h-[calc(100vh-200px)] rounded-lg border bg-white"
        >
          <p style={{ color: "black" }}>
            <h1>Your browser does not support PDFs.</h1>
            <a href="/files/pdf/resume.pdf" target="_blank" className="ml-2 underline">
              Download the PDF
            </a>
          </p>
        </object>
      </div>

      {/* Images */}
      <div className="mt-8">
        <div className="flex justify-center gap-8 mb-8">
          <div className="bg-white rounded-lg p-4 border">
            <img
              src="/images/work/meta.png"
              alt="Meta logo"
              className="h-6 w-auto"
            />
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <img
              src="/images/work/bank_hapoalim.png"
              alt="Bank Hapoalim logo"
              className="h-6 w-auto"
            />
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <img
              src="/images/work/check_point.png"
              alt="Check Point logo"
              className="h-6 w-auto"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Resume;