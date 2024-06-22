import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section >
            <div className="m-32 flex items-center justify-between max-w-screen-2xl">
                <div className="">
                    <div>
                        <h2 className="text-5xl font-bold">WIFQO AROVA SYAMS</h2>
                        <h3 className="text-4xl font-semibold pt-3 pb-8">DATA SCIENTIST</h3>

                        <h4 className="text-xl pb-2">Sivas Cumhuriyet University - Turkey</h4>
                        <h4 className="text-xl">Statistics and Computer Science Major</h4>
                    </div>
                    <div className="mt-8 flex">
                        <div className="rounded-full bg-white h-16 w-16 mr-5 relative">
                            <Link href="https://www.linkedin.com/in/wifqo-arova-syams/" target="_blank">
                                <Image
                                    src="/images/linkedin.png" 
                                    alt="Description of the image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </Link>
                        </div>
                        <div className="rounded-full bg-white h-16 w-16 mr-5 relative">
                            <Link href="https://www.github.com/ArovaSyams/" target="_blank">
                                <Image
                                    src="/images/github.png" 
                                    alt="Description of the image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </Link>
                        </div>
                        <div className="rounded-full bg-white h-16 w-16 mr-5 relative">
                            <Link href="https://www.datacamp.com/portfolio/arovasyams" target="_blank">
                                <Image
                                    src="/images/datacamp.png" 
                                    alt="Description of the image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </Link>
                        </div>
                        <div className="rounded-full bg-white h-16 w-16 mr-5 relative">
                            <Link href="https://medium.com/@arova_syams" target="_blank">
                                <Image
                                    src="/images/medium.png" 
                                    alt="Description of the image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </Link>
                        </div>    
                        <div className="rounded-full bg-white h-16 w-16 mr-5 relative">
                            <Link href="https://dribbble.com/ArovaSyams" target="_blank">
                                <Image
                                    src="/images/dribble.png" 
                                    alt="Description of the image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="bg-white rounded-full h-96 w-96 relative">
                    <Image
                        src="/images/image.jpg" 
                        alt="Description of the image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Hero;
