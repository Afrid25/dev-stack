const Footer = () => {
    return (
        <footer className="w-full border-t border-slate-100 bg-white text-slate-600">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-tr from-purple-600 to-pink-500 text-xs font-bold text-white">
                                DS
                            </span>
                            <span className="text-lg font-bold text-slate-900">
                                Dev<span className="text-pink-500">Stack</span>
                            </span>
                        </div>
                        <p className="mt-3 max-w-sm text-xs leading-relaxed text-slate-500">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>
                        <div className="mt-6 flex items-center gap-4 text-xs font-medium text-slate-600">
                            <a href="#github" className="hover:text-slate-900">GitHub</a>
                            <a href="#twitter" className="hover:text-slate-900">Twitter</a>
                            <a href="#linkedin" className="hover:text-slate-900">LinkedIn</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Product</h4>
                        <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
                            <li><a href="#home" className="hover:text-slate-900">Home</a></li>
                            <li><a href="#technology" className="hover:text-slate-900">Technologies</a></li>
                            <li><a href="#project" className="hover:text-slate-900">Projects</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Company</h4>
                        <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
                            <li><a href="#about" className="hover:text-slate-900">About</a></li>
                            <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
                            <li><a href="#careers" className="hover:text-slate-900">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Legal</h4>
                        <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
                            <li><a href="#privacy" className="hover:text-slate-900">Privacy Policy</a></li>
                            <li><a href="#terms" className="hover:text-slate-900">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#privacy" className="hover:text-slate-600">Privacy</a>
                        <a href="#terms" className="hover:text-slate-600">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer