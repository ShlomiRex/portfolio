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
                        location="Remote, Raanana (Open University Campus)">
                        I am volunteering as a web developer for the Open University, where I am helping to maintain their website for their students. This involves:
                        
                        <ul className="list-disc pl-6">
                            <li>Wordpress - the basis of the website</li>
                            <li>Monday - for task management</li>
                            <li>Elementor - wordpress plugin</li>
                        </ul>
                    </CardWithDateLocationTitle>
                    
                    <CardWithDateLocationTitle
                        title="RenewSenses Startup - Android Developer"
                        date="November 2018 - March 2019"
                        location="Jerusalem, Tel-Aviv (Google Campus for Startups)">
                        I volunteered as Android Developer for a startup called RenewSenses. This startup is developing a device that helps blind people to navigate in the world by using special glasses that reads the environment and sends the user audio feedback where are objects in the world to avoid them. The glasses uses the user's android device which runs OpenCV locally to detect objects and estimate the distance from the top-left corner to the bottom-right corner.
                        I was responsible for:
                        <ul className="list-disc pl-6">
                            <li>Android app development</li>
                            <li>Fix Tensorflow, OpenCV Android camera module integrations</li>
                            <li>Implement and improve UI/UX on the app</li>
                        </ul>
                    </CardWithDateLocationTitle>
                </div>


            </AppearMotion>
        </div>
    );
};

export default Volunteering;