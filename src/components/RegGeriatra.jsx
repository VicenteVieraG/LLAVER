import React from 'react'
import { useState } from 'react'
import Error from './Error'
import Back from './Back'
import PostGeriatras from '../Hooks/PostGeriatras'
import RegGeriatraFormat from '../data/RegGeriatraFormat.json'

const RegGeriatra = ({setRegGeriatra, setValidation, setValidationMessage, setLogin}) => {
    const [tokenAuth, setTokenAuth] = useState(localStorage.getItem("token"));
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [institucion, setInstitucion] = useState("");
    const [mensajeErr, setMensajeErr] = useState("");
    const [err, setErr] = useState(false);
    const [PostGeriatra] = PostGeriatras(RegGeriatraFormat,tokenAuth);
    const handleSubmit = async(e) =>{
        e.preventDefault();

        //validacion de campos
        if([nombre,apellido,password,confirmPassword,email,institucion].includes("")){
            setErr(true);
            setTimeout(() => setErr(false),3000)
            setMensajeErr("No se permiten campos vacios");

            return;
        }else if(password !== confirmPassword){
            setErr(true);
            setTimeout(() => setErr(false),3000)
            setMensajeErr("Las contraseñas no coinciden");

            return;
        }

        RegGeriatraFormat.nombre=nombre;
        RegGeriatraFormat.apellido=apellido;
        RegGeriatraFormat.password=password;
        RegGeriatraFormat.email=email;

        await PostGeriatra().then(res => console.log(res));

        //datos validos
        //reseteamos los campos
        setNombre("");
        setPassword("");
        setConfirmPassword("");
        setEmail("");
        setInstitucion("");
        setMensajeErr("");

        //mostramos validacion
        setRegGeriatra(false);
        setValidationMessage("Geriatra registrado con exito");
        setValidation(true);

    }

    return(
        <div class="bg-white rounded-lg mx-auto w-1/2 mt-12">
            <Back setActualPage={setRegGeriatra} setBackPage={setLogin}/>
            <div class = "text-center text-xl font-bold py-5">
                Registro de Geriatras
            </div>
            <hr class = "mb-5"/>
            <form
                onSubmit={handleSubmit}
            >
                {err && <Error>{mensajeErr}</Error>}
                <div>
                    <label
                        htmlFor="Nombre"
                        class={`block mx-5 ${(err & nombre == "") ? 'text-red-700' : ""}`}
                        >Nombre*</label>
                    <input
                        id="Nombre"
                        type="text"
                        placeholder="Ej: Francisco"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        class="rounded-br-full border mx-5 w-4/5"
                    />
                </div>
                <div>
                    <label
                        htmlFor="Apellido"
                        class={`block mx-5 mt-5 ${(err & apellido == "") ? 'text-red-700' : ""}`}
                        >Apellido*</label>
                    <input
                        id="Apellido"
                        type="text"
                        placeholder="Ej: García"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        class="rounded-br-full border mx-5 w-4/5"
                    />
                </div>
                <div>
                    <label
                        htmlFor="Password"
                        class={`block mx-5 mt-5 ${(err & password == "" | err & password != confirmPassword) ? 'text-red-700' : ""}`}
                    >Password*</label>
                    <input
                        id="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        class="rounded-br-full border mx-5 w-4/5"
                    />
                    <label
                        htmlFor="PasswordCheck"
                        class={`block mx-5 mt-5 ${(err & confirmPassword == "" | err & password != confirmPassword) ? 'text-red-700' : ""}`}
                    >Confirme Password*</label>
                    <input
                        id="PasswordCheck"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        class="rounded-br-full border mx-5 w-4/5"
                    />
                    <label
                        htmlFor="Correo"
                        class={`block mx-5 mt-5 ${(err & email == "") ? 'text-red-700' : ""}`}
                    >Correo electronico*</label>
                    <input
                        id="Correo"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        class="rounded-br-full border mx-5 w-4/5"
                    />
                    <label
                        htmlFor="Institucion"
                        class={`block mx-5 mt-5 ${(err & institucion == "") ? 'text-red-700' : ""}`}
                    >Institucion*</label>
                    <input
                        id="Institucion"
                        type="text"
                        value={institucion}
                        onChange={(e) => setInstitucion(e.target.value)}
                        class="rounded-br-full border mx-5 w-4/5"
                    />
                    <p class= "text-sm mx-5">  *Datos requeridos</p>
                    <div class="flex justify-center text-white py-2">
                        <input
                            type="submit"
                            value="Sign in"
                            class="mt-5 border rounded-full py-2 px-8 md:w-2/5 bg-gradient-to-r from-cyan-500 to-blue-500"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegGeriatra
