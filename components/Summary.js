import Image from "next/image";

const Summary = () => {
    return (
        <section>
            <div className="flex justify-center space-x-6">
                <div className="p-6 bg-sky-300 w-1/4 flex rounded-xl">
                    <div className="w-20">
                        <Image src="/images/project.png" width="200" height="200"/>
                    </div>
                    <div className="ml-6">
                        <p className="font-bold text-5xl">3</p>
                        <p>Projects Completed</p>
                    </div>
                </div>  
                <div className="p-6 bg-sky-300 w-1/4 flex rounded-xl">
                    <div className="w-20">
                        <Image src="/images/certificate.png" width="200" height="200"/>
                    </div>
                    <div className="ml-6">
                        <p className="font-bold text-5xl">34</p>
                        <p>Certificate Achived</p>
                    </div>
                </div>  
                <div className="p-6 bg-sky-300 w-1/4 flex rounded-xl">
                    <div className="w-20">
                        <Image src="/images/scholarship.png" width="200" height="200" className="fill-"/>
                    </div>
                    <div className="ml-6">
                        <p className="font-bold text-5xl">3</p>
                        <p>Certificate Awarded</p>
                    </div>
                </div>  
            </div>
        </section>
    )
}

export default Summary;