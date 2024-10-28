import React from 'react'
import { motion } from 'framer-motion'

const LinkButton = (props) => {
    return (
        <a
            href={props.href}
            className='w-7/12 h-14 flex flex-col min-w-80 my-2'
        >
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='relative h-full flex items-center text-neutral-50 font-semibold font border-2 border-gray-400 rounded-xl shadow-lg backdrop-blur-xl hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-100'
            >
                <img
                    src={props.image}
                    alt={props.imageAlt}
                    className='absolute left-1 max-w-11'
                />
                <span
                    className='flex-1 text-xl tracking-wide text-neutral-50'
                >{props.text}</span>
            </motion.button>
        </a>
    )
}

export default LinkButton