import { useState } from "react";
import { Form, Link } from "react-router-dom";
import logo from "../../assets/Logo.gif";
import aim from "../../assets/game-pad.gif";
import pad from "../../assets/pad.gif";
import "./Login.css";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  // Manejo del cambio en el campo de email
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const styles = {
    main: "w-full relative min-h-screen bg-st pt-14 flex items-center justify-center",
    content: "flex flex-col items-center p-4 w-82 rounded-lg",
    helpText: 'text-gray-400 text-center text-sm mb-4',
    logoBox: "absolute top-20 p-8",
    logo: 'size-full object-contain',
    form: {
      title: "text-center text-rd font-bold w-full",
      main: "w-full flex flex-col items-end gap-2",
      inputBox: "w-full h-10 ",
      input: "w-full bg-nd h-full px-2 text-white size-full outline-none shadow-[0px_0px_4px_0px] shadow-rd rounded-lg focus:shadow-th",
      button: "bg-rd hover:bg-th active:bg-th text-nd h-12 w-full py-2 text-lg font-bold mt-4 rounded-lg",
    },
    links: "text-white active:text-th hover:text-th underline text-sm my-2",
  };

  return (
    <section className={styles.main}>
      {/* Logo */}
      <picture className={styles.logoBox}>
        <img src={logo} alt="Game-Over-Logo" />
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

            {/* Texto de ayuda */}
        <p className={styles.helpText}>
          Las Instrucciones para recuperar tu contraseña,
          llegaran al correo que registraste.
        </p>

        <Form className={styles.form.main}>
          <h2 className={styles.form.title}>Recuperar Contraseña</h2>

          {/* Input para el email */}
          <span className={styles.form.inputBox}>
            <input
              type="email"
              className={styles.form.input}
              placeholder="Ingrese su correo electrónico"
              onChange={handleEmailChange}
              value={email}
            />
          </span>

          {/* Botón para enviar solicitud de recuperación */}
          <button type="submit" className={styles.form.button}>
            Enviar Instrucciones
          </button>
        </Form>

        {/* Enlace para volver al inicio de sesión */}
        <Link className={styles.links} to="/accounts/login">
          ¿Ya recordaste tu contraseña? Inicia sesión
        </Link>
      </div>

    </section>
  );
};
