import React from 'react'
import {
	AiFillTwitterCircle,
	AiFillInstagram,
	AiFillYoutube,
	AiFillLinkedin,
} from 'react-icons/ai'

import { FaDiscord } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import { BsTiktok } from 'react-icons/bs'

const Footer = () => {
	return (
		<footer className="flex justify-between md:justify-center md:gap-16 mt-20 mb-4">
			<a
				href="https://twitter.com/pathfainder_"
				target="_blank"
				rel="noreferrer"
				className="hover:opacity-50 transition duration-150"
				aria-label="Twitter"
			>
				<AiFillTwitterCircle size={20} />
			</a>
			<a
				href="https://discord.gg/n27qEW2q"
				target="_blank"
				rel="noreferrer"
				className="hover:opacity-50 transition duration-150"
				aria-label="Discord"
			>
				<FaDiscord size={20} />
			</a>
			<a
				href="https://www.youtube.com/@pathfainder"
				target="_blank"
				rel="noreferrer"
				className="hover:opacity-50 transition duration-150"
				aria-label="Youtube"
			>
				<AiFillYoutube size={20} />
			</a>
			<a
				href="https://www.google.com"
				target="_blank"
				rel="noreferrer"
				className="hover:opacity-50 transition duration-150"
				aria-label="google"
			>
				<TbWorldWww size={20} />
			</a>
			<a
				href="https://www.instagram.com/pathfainder_/"
				target="_blank"
				rel="noreferrer"
				className="hover:opacity-50 transition duration-150"
				aria-label="Instagram"
			>
				<AiFillInstagram size={20} />
			</a>
			<a
				href="https://www.linkedin.com/in/thomas-berchet-107043300/"
				target="_blank"
				rel="noreferrer"
				className="hover:opacity-50 transition duration-150"
				aria-label="Linkedin"
			>
				<AiFillLinkedin size={20} />
			</a>
		</footer>
	)
}

export default Footer
