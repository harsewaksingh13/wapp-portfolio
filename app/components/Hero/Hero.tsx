import { ButtonPrimary, LinkButtonPrimary } from ".."

export type HeroProps = {
    title: string
    subtitle?: string
    href?: string | undefined

}


export const Hero = (props: HeroProps) => {

    return (
        <div>
            <div className="lg:2/6 xl:w-2/4 mt-10 lg:ml-2 text-left">
                <div className="text-6xl font-semibold text-primaryText leading-none">Bring all your work together</div>
                <div className="mt-6 text-xl font-light text-primaryText antialiased">A better experience for your clients and less stress you to explain.</div>
                <div className="mt-10">
                    <LinkButtonPrimary to={props.href || '/'}>
                        Projects
                    </LinkButtonPrimary>
                </div>
            </div>
            <div className="mt-10 lg:mt-24 lg:ml-15 text-left">
                <button type="button" className="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </button>
            </div>

        </div>
    )
}