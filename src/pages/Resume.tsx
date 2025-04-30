import AppearMotion from "@/components/motion/AppearMotion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="page-content">
      <AppearMotion>
        <h1>Resume</h1>

        {/* Top section */}
        <div className="flex flex-col sm:flex-row justify-center items-center mb-6 gap-4 text-center">
          <p className="text-lg">
            Here you can view and download my resume:
          </p>

          <div>
            <Button variant="outline">
              <Download className="mr-2" />
              <a href="/files/pdf/resume.pdf" target="_blank">Download Resume</a>
            </Button>
          </div>
        </div>

        {/* PDF */}
        <div>
          <object
            data="/files/pdf/resume.pdf"
            type="application/pdf"
            className="w-full h-[calc(100vh-200px)] rounded-lg border bg-white"
          >
            <p style={{ color: "black", padding: "20px" }}>Your browser does not support PDFs. Download the resume above instead.</p>
          </object>
        </div>

        {/* Images */}
        {/* <div className="mt-8">
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
      </div> */}
      </AppearMotion>
    </div>
  );
};

export default Resume;