"use client"

import { TbUser } from "react-icons/tb";
import { FiLock } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";

export function LoginForm(){
    const [showPass, setShowPass] = useState(false);

    return (<form>
        <div>
            <label htmlFor="email" className="block text-gray-700 text-sm">Email</label>
            <div className="relative">
                <TbUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={24}></TbUser>
                <input type="email"
                name="email" className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D4516A] focus:outline-none transition-colors"
                placeholder="tu-email@madera.com"
                ></input>
            </div>
            
        </div>
        <div className="mt-2">
            <label htmlFor="pass" className="block text-gray-700 text-sm">Contraseña</label>
            <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={24}></FiLock>
                <input type="password" name="pass" className="
                w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D4516A] focus:outline-none transition-colors"
                placeholder="********"></input>
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={()=>setShowPass((show: boolean) =>!show)}>
                    {/* <FiLock ></FiLock> */}
                    {!showPass &&<FaRegEye className="text-gray-400  hover:text-gray-600"></FaRegEye>}
                    {showPass &&<FaRegEyeSlash className="text-gray-400 hover:text-gray-600 "></FaRegEyeSlash>}
                </button>
                
            </div>
            
        </div>
        <div className="flex justify-end mt-2">
            <a href="/forgot" className="cursor-pointer ml-auto w-full text-primary text-end text-sm">¿Olvidaste tu contraseña?</a>
        </div>
        <button className="rounded-2xl text-white bg-primary w-full py-3 mt-4" > Iniciar sesión</button>
    </form>)
}