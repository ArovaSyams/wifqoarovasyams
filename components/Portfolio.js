import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
    return (
        <section>
            <div className="my-16">
                <h1 className="font-bold text-4xl text-center">Portfolio</h1>
            </div>
            <div className="flex space-x-10 justify-center">
                <div className="h-auto w-1/4 p-6 bg-white rounded-xl">
                    <div className="w-full">
                        <a href="https://github.com/ArovaSyams/ecommerce-python-data-analysis" target="_blank">
                            <Image 
                                src="/images/ecommerce.jpeg" 
                                width={10000} 
                                height={2000}
                            />
                        </a>
                        
                    </div>
                    <div className="mt-2">
                        <h2 className="font-semibold text-xl">Data Analysis on Stackware E-commerce</h2>
                        <span className="text-gray-500 text-sm">Apr 2024</span>
                        <p className="mt-2">As a Data Scientist, I try to analysis data at Stackware E-commerce, focusing on gaining deep insights ...<span className="text-gray-500"><a href="#">See More</a></span></p>
                    </div>
                </div>
                <div className="h-auto w-1/4 p-6 bg-white rounded-xl">
                    <div className="w-full">
                        <a href="https://github.com/ArovaSyams/ecommerce-python-data-analysis" target="_blank"> 
                            <Image 
                                src="/images/Tastybite.png" 
                                width={10000} 
                                height={2000}
                            />
                        </a>
                        
                    </div>
                    <div className="mt-2">
                        <h2 className="font-semibold text-xl">DataCamp Certification: Predicting High-Traffic Recipes with Data Science</h2>
                        <span className="text-gray-500 text-sm">Apr 2024</span>
                        <p className="mt-3">In my recent Data Scientist Professional Practical Exam, I tackled the challenge of predicting high-traffic recipes for a recipe platform. ...<span className="text-gray-500"><a href="#">See More</a></span></p>
                    </div>
                </div>
                <div className="h-auto w-1/4 p-6 bg-white rounded-xl">
                    <div className="w-full">
                        <a href="https://github.com/ArovaSyams/hand-gesture-classifier-deep-learning" target="_blank">
                            <Image 
                                src="/images/handgesture.jpeg" 
                                width={10000} 
                                height={2000}
                            />
                        </a>
                        
                    </div>
                    <div className="mt-2">
                        <h2 className="font-semibold text-xl">Gesture Recognition: Hand Gestures for Scissors, Rock, Paper</h2>
                        <span className="text-gray-500 text-sm">Nov 2024</span>
                        <p className="mt-3">This project utilizes TensorFlow to create a deep learning neural network capable of accurately classifying hand gestures representing scissors, rock, or paper. ...<span className="text-gray-500"><a href="#">See More</a></span></p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <Link href="#" className="bg-sky-500 text-white p-3 rounded-lg">See More</Link>
            </div>
        </section>
    )
}

export default Portfolio;