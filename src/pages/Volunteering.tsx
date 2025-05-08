import AppearMotion from "@/components/motion/AppearMotion";
import VolunteeringCard from "@/components/volunteering/VolunteeringCard";

const Volunteering = () => {
    return (
        <div className="page-content">
            <AppearMotion>
                <h1>Volunteering</h1>


                <div className="space-y-4">
                    <p>
                        I have volunteered for various organizations, including:
                    </p>

                    <VolunteeringCard 
                        name="Scholar Website at the Open University Volunteering"
                        date="April 2025 - Now"
                        location="Remote">
                        I am volunteering as a web developer for the Open University, where I am helping to maintain their website for their students. This involves Wordpress, Monday and Elementor.
                    </VolunteeringCard>
                </div>


            </AppearMotion>
        </div>
    );
};

export default Volunteering;