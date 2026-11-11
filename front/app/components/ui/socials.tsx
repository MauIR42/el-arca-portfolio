import { FaInstagram, FaWhatsapp, FaFacebook, FaTiktok } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { Button } from './button';

export function SocialMedias() {
    return (<div className="flex gap-3 sm:gap-1">
        <a className="group px-4" href="https://www.instagram.com/manualidades.el.arca/"><FaInstagram className="group-hover:text-primaryhover text-gray-500  transition-colors text-2xl " /></a>
        <a className="group px-4" href="https://www.instagram.com/manualidades.el.arca/"><FaWhatsapp className="group-hover:text-primaryhover text-gray-500  transition-colors text-2xl" /></a>
        <a className="group px-4" href="https://www.instagram.com/manualidades.el.arca/"><FaFacebook className="group-hover:text-primaryhover text-gray-500  transition-colors text-2xl" /></a>
        <a className="group px-4" href="https://www.instagram.com/manualidades.el.arca/"><FaTiktok className="group-hover:text-primaryhover text-gray-500  transition-colors text-2xl" /></a>
        <a className="group px-4" href="https://www.instagram.com/manualidades.el.arca/"><MdOutlineMail className="group-hover:text-primaryhover text-gray-500  transition-colors text-2xl" /></a>
    </div>)
}