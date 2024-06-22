import Image from "next/image";
import Link from "next/link";

const Aboutme = () => {
    return (
        <section>
            <div className="my-16">
                <h1 className="font-bold text-4xl text-center">About Me</h1>
            </div>
            <div className="flex justify-center">
                <div className="bg-white h-auto w-3/4 p-10 flex rounded-xl">
                    <div>
                        <div className="bg-white rounded-full h-48 w-48 relative">
                            <Image
                                src="/images/image.jpg" 
                                alt="Description of the image"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div> 
                    </div>
                    <div className="m-10">
                        <p className="mb-8">A young student enrolled in one of Turkeys esteemed universities pursuing a degree in Statistics and Computer Science, my academic journey revolves around the intricate fusion of statistical paradigms and computer techniques in data analysis, central to the realm of data science.</p>
                        <Link href="#" className="bg-sky-500 text-white p-3 rounded-lg">Know More</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutme;