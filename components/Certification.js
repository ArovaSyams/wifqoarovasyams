import Image from "next/image";
import Link from "next/link";

const Certification = () => {
    return (
        <section>
            <div className="my-16">
                <h1 className="font-bold text-4xl text-center">Certification</h1>
            </div>
            <div className="flex justify-center space-x-10">
                <div className="w-1/4 rounded-xl">
                    <div className="w-full">
                        <Image src="/images/DL.jpg" className="rounded-xl" height={100} width={100000}/>
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="w-full">
                        <Image src="/images/DS_.jpg" className="rounded-xl" height={100} width={100000}/>
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="w-full">
                        <Image src="/images/AIF.jpg" className="rounded-xl" height={100} width={100000}/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <Link href="#" className="bg-sky-600 text-white p-3 rounded-lg">See More</Link>
            </div>
        </section>
    )
}

export default Certification;