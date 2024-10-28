import React from 'react'
import { Link } from 'react-router-dom'
import LinkButton from "../components/LinkButton"


const HomePage = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-white">
                <div
                    className="rounded-full size-40 border-2 border-solid border-white my-4 overflow-hidden"
                >
                    <img src="/greimerath_240906.jpg"></img>
                </div>

                <div className='w-7/12 min-w-80 bg-opacity-50 backdrop-filter backdrop-blur-2xl text-center rounded-3xl overflow-hidden border-2 border-gray-400 mb-6 mt4'>
                    <p className='text-3xl font-bold mb-2 text-center bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text'>Ramón-Niemitz</p>
                    <p className="text-xl font-bold mb-2 text-center bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">Musician & Software Engineer</p>
                </div>

                <LinkButton text="Instagram" href="https://www.instagram.com/ramon_n96" image="svg/instagram.svg" imageAlt="Instagram Brand Logo" />
                <LinkButton text="Youtube" href="https://www.youtube.com/@RamonNiemitz" image="svg/youtube-brands.svg" imageAlt="YouTube Brand Logo" />
                <LinkButton text="TikTok" href="https://www.tiktok.com/@ramon.n96" image="svg/tiktok-brand.svg" imageAlt="Tik Tok Brand Logo" />
                <LinkButton text="Facebook" href="https://www.facebook.com/RamonNiemitz/" image="svg/facebook-brands.svg" imageAlt="Facebook Brand Logo" />
                <LinkButton text="Spotify" href="https://open.spotify.com/user/1143040657?si=6905bf7c694a4339" image="svg/spotify.svg" imageAlt="Spotify Brand Logo" />
                <LinkButton text="Paradise Will Fall" href="https://paradisewillfall.de" image="svg/microphone.svg" imageAlt="Microphone" />
                <LinkButton text="GitHub" href="https://github.com/RamonNiemitz" image="svg/github-brands.svg" imageAlt="Github Brand Logo" />
            </div>

            <footer className="sticky top-[100vh] backdrop-blur overflow-hidden border-t-2" >
                <div className="text-white text-center mt-1">
                    <Link to="/impressum" className="mx-10 hover:underline">Impressum</Link>
                    <Link to="/dsgvo" className="mx-10 hover:underline">Datenschutz</Link>
                </div>
                <p
                    className="text-white text-center my-2"
                >&copy; {new Date().getFullYear()} Ramón-Nico Niemitz</p>
            </footer>
        </>
    )
}

export default HomePage