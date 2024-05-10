import bgImage from "./../assets/image.png";
import locationIcon from "./../assets/Icons/location.png";
import phoneIcon from "./../assets/Icons/phone.png";
import sphereIcon from "./../assets/Icons/sphere.png";
import Menu from "./Menu.jsx";

function App() {
  return (
    <>
      <div id="home" className="mt-24 bg-background">
        <img
          src={bgImage}
          alt="Imagen de comida"
          className="m-0 h-[80vh] w-full object-cover p-0"
        ></img>
      </div>
      <Menu />

      <div
        id="contact"
        className="relative z-0 flex h-screen w-full flex-col items-center justify-center gap-[30px] bg-background font-Helvetica"
      >
        <div className="flex items-center justify-start xsm:w-72 md:w-96">
          <div className="relative h-16 w-16 rounded-full bg-principal">
            <img
              src={phoneIcon}
              alt="icono de telefono"
              className="absolute left-1/2 top-1/2 h-8 -translate-x-1/2 -translate-y-1/2 invert"
            ></img>
          </div>
          <a
            href="tel:637169284"
            className="ml-5 text-xl font-bold text-principal"
          >
            637 16 92 84
          </a>
        </div>
        <div className="flex items-center justify-start xsm:w-72 md:w-96">
          <div className="relative h-16 w-16 rounded-full bg-principal">
            <img
              src={sphereIcon}
              alt="icono de web"
              className="absolute left-1/2 top-1/2 h-8 -translate-x-1/2 -translate-y-1/2 invert"
            ></img>
          </div>
          <p className="ml-5 text-xl text-principal">thelila.es</p>
        </div>
        <div className="flex items-center justify-start xsm:w-72 md:w-96">
          <div className="relative h-16 w-16 min-w-16 rounded-full bg-principal">
            <img
              src={locationIcon}
              alt="icono de ubicacion"
              className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 invert"
            ></img>
          </div>
          <a
            href="https://www.google.com/maps/place/C.+Villamarchante,+2,+46183+La+Eliana,+Valencia,+Espa%C3%B1a/@39.5661856,-0.5306503,17z/data=!3m1!4b1!4m6!3m5!1s0xd605954e06838e3:0xe15b511dc09f8212!8m2!3d39.5661856!4d-0.5280754!16s%2Fg%2F11c5ptsskg?entry=ttu"
            target="_blank"
            className="ml-5 text-xl text-principal"
          >
            C/Villamarchante, N2, bajo 46183 La Eliana Valencia
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
