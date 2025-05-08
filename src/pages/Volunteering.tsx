import CardWithDateLocationTitle from "@/components/CardWithDateLocationTitle";
import AppearMotion from "@/components/motion/AppearMotion";

const Volunteering = () => {
    return (
        <div className="page-content">
            <AppearMotion>
                <h1>Volunteering</h1>


                <div className="space-y-4">
                    <p>
                        I have volunteered for various organizations, including:
                    </p>

                    <CardWithDateLocationTitle 
                        title="Scholar Website at the Open University"
                        date="April 2025 - Now"
                        location="Remote">
                        I am volunteering as a web developer for the Open University, where I am helping to maintain their website for their students. This involves:
                        
                        <ul className="list-disc pl-6">
                            <li>Wordpress - the basis of the website</li>
                            <li>Monday for task managment</li>
                            <li>Elementor - wordpress plugin</li>
                        </ul>
                    </CardWithDateLocationTitle>
                </div>


            </AppearMotion>
        </div>
    );
};

export default Volunteering;