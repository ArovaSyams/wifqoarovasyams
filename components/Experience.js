import Link from "next/link";

const Experience = () => {
    return (
        <section>
            <div className="my-16">
                <h1 className="font-bold text-4xl text-center">Experience</h1>
            </div>
            <div className="w-full">
                <div className="bg-white rounded-2xl p-6 w-1/2  mx-auto mb-8">
                    <p className="text-xl font-semibold pb-3">Web Developer</p>
                    <p>Elecomp Software House - Malang</p>
                    <p className="text-gray-500 text-sm">Jan 2021 - Mar 2021</p>
                </div>
                <div className="bg-white rounded-2xl p-6 w-1/2  mx-auto mb-8">
                    <p className="text-xl font-semibold pb-3">Full-Stack Developer</p>
                    <p>Fiver - Freelance</p>
                    <p className="text-gray-500 text-sm">Jun 2023 - Aug 2023</p>
                </div>
                <div className="bg-white rounded-2xl p-6 w-1/2  mx-auto mb-8">
                    <p className="text-xl font-semibold pb-3">Data Scientist - IDCamp 2023 Indosat Ooredoo Hutchinson X Dicoding</p>
                    <p>Indosat Ooredoo Hutchison Digital Camp - Training</p>
                    <p className="text-gray-500 text-sm">Sep 2023 - Nov 2023</p>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <Link href="#" className="bg-sky-600 text-white p-3 rounded-lg">See More</Link>
            </div>
        </section>
    )
}

export default Experience;