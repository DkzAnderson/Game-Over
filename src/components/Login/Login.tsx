import { useState } from "react";
import { Form, Link } from "react-router-dom";
import logo from "../../assets/Logo.gif";
import aim from "../../assets/game-pad.gif";
import pad from "../../assets/pad.gif";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Manejo de cambios en los campos del formulario
  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  // Alternar visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const styles = {
    main: "w-full relative min-h-screen bg-st pt-16 flex items-center justify-center",
    content: "flex flex-col items-center p-4 w-82 rounded-lg",
    logoBox: "absolute top-20 p-8",
    logo: 'size-full object-contain',
    form: {
      title: "text-center text-rd font-bold w-full",
      main: "w-full flex flex-col items-end gap-2",
      inputBox: "w-full h-10 ",
      input: "w-full bg-nd h-full px-2 text-white size-full outline-none shadow-[0px_0px_4px_0px] shadow-rd rounded-lg focus:shadow-th",
      button: "bg-rd hover:bg-th active:bg-th text-nd h-12 w-full py-2 text-lg font-bold rounded-lg",
    },
    links: "text-white active:text-th hover:text-th underline text-sm my-2",
  };

  return (
    <section className={styles.main}>
      {/* Logo */}
      <picture className={styles.logoBox}>
        <img
          className={styles.logo} 
          src={logo} 
          alt="Game-Over-Logo"
        />
      </picture>

      {/* Animación del ícono 'aim' */}
      <span className="aim absolute size-20 bottom-20 left-10">
        <img className="size-full object-contain" src={aim} alt="aim-icon" />
      </span>

      {/* Animación del ícono 'pad' */}
      <span className="pad absolute size-20 bottom-20 right-10">
        <img className="size-full object-contain" src={pad} alt="pad-icon" />
      </span>

      {/* Contenido principal */}
      <div className={styles.content}>
        <Form className={styles.form.main}>
          <h2 className={styles.form.title}>Iniciar sesión con e-mail y contraseña</h2>

          {/* Input de email */}
          <span className={styles.form.inputBox}>
            <input
              type="email"
              className={styles.form.input}
              placeholder="Ej:ejemplo@gmail.com"
              onChange={handleInputChange(setEmail)}
              value={email}
            />
          </span>

          {/* Input de contraseña con botón para mostrar/ocultar */}
          <span className={styles.form.inputBox} style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              className={styles.form.input}
              placeholder="Ingrese su contraseña"
              onChange={handleInputChange(setPassword)}
              value={password}
            />
            <button
              type="button"
              className="absolute right-2 top-2"
              onClick={togglePasswordVisibility}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <img src={showPassword ? "tu-imagen-mostrar.gif" : "tu-imagen-ocultar.gif"} alt="toggle-password" />
            </button>
          </span>

          {/* Enlace "Olvidé mi contraseña" */}
          <Link className={styles.links} to="/accounts/forgot-password">
            Olvidé mi contraseña
          </Link>

          {/* Botón de inicio de sesión */}
          <button type="submit" className={styles.form.button}>
            Entrar
          </button>
        </Form>

        {/* Enlace para registrarse */}
        <Link className={styles.links} to="/accounts/register">
          ¿No tiene una cuenta? Regístrese
        </Link>
      </div>
    </section>
  );
};
