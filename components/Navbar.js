const Navbar = () => {
    return (
        <nav class="bg-gray-100 flex items-center justify-center my-7">
            <ul class="flex space-x-4">
                <li class="px-4 py-2 font-bold text-black hover:text-slate-700"><a href="#">HOME</a></li>
                <li class="px-4 py-2 font-bold text-black hover:text-slate-700"><a href="#">ABOUT ME</a></li>
                <li class="px-4 py-2 font-bold text-black hover:text-slate-700"><a href="#">PORTFOLIO</a></li>
                <li class="px-4 py-2 font-bold text-black hover:text-slate-700"><a href="#">CERTIFICATION</a></li>
                <li class="px-4 py-2 font-bold text-black hover:text-slate-700"><a href="#">EXPERIENCE</a></li>
                <li class="px-4 py-2 font-bold text-black hover:text-slate-700"><a href="#">SKILLS</a></li>
                <li class="px-4 py-2 font-bold text-black hover:text-slate-700"><a href="#">CONTACT ME</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
