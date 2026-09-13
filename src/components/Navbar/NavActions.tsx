const NavActions = () => {
    return (
        <div className="flex items-center gap-5">
            <a
                className="text-sm font-medium text-slate-600 transition-colors hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
                href="#sign-in"
            >
                Sign in
            </a>
            <a
                className="rounded-md bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
                href="#sign-up"
            >
                Sign up
            </a>
        </div>
    )
}

export default NavActions
