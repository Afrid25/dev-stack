const NavActions = () => {
    return (
        <div className="flex items-center gap-5">
            <a
                className="inline bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-sm font-semibold text-transparent transition-opacity hover:opacity-80 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
                href="#sign-in"
            >
                Sign in
            </a>
            <a
                className="rounded-md bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500"
                href="#sign-up"
            >
                Sign up
            </a>
        </div>
    )
}

export default NavActions
