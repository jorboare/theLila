import { useEffect, useState } from "react";
import { getFood, getDrinks } from "../services/Services";
import {
  foodFormatter,
  allergiesFormatter,
  drinkFormatter,
} from "../utils/res-formatter";
import Eng from "../assets/flags/united-kingdom.png";
import Esp from "../assets/flags/spain.png";
import { CircularProgress } from "@mui/material";

const allergies = [
  "Apio",
  "Gluten",
  "Huevo",
  "Lupin",
  "Lactosa",
  "Mostaza",
  "Frutos secos",
  "Sésamo",
  "Cacahuete",
  "Sulfitos",
  "Soja",
];
const allergiesEng = [
  "Celery",
  "Gluten",
  "Egg",
  "Lupin",
  "Lactose",
  "Mustard",
  "Nuts",
  "Sesame",
  "Peanut",
  "Sulfites",
  "Soy",
];
const Menu = () => {
  const [food, setFood] = useState();
  const [drinks, setDrinks] = useState();
  const [language, setLanguage] = useState("ESP");

  useEffect(() => {
    const foodRequest = async () => {
      const res = await getFood();
      const formattedRes = foodFormatter(res);
      setFood(formattedRes);
    };
    foodRequest();
    const drinkRequest = async () => {
      const res = await getDrinks();
      const formattedRes = drinkFormatter(res);
      setDrinks(formattedRes);
    };
    drinkRequest();
  }, []);

  return (
    <>
      {!food || !drinks ? (
        <div
          id="carta"
          className="flex h-[100vh] items-center justify-center bg-background"
        >
          <CircularProgress style={{ color: "#840c80" }} />
        </div>
      ) : (
        <div
          id="carta"
          className="flex flex-col items-center justify-center bg-background py-32"
        >
          <h2 className="font-Titles text-[40px] text-principal md:text-[50px]">
            {language === "ESP" ? "CARTA" : "MENU"}
          </h2>
          <button
            onClick={() => setLanguage(language === "ESP" ? "ENG" : "ESP")}
            className="flex items-center text-principal"
          >
            {language === "ESP" ? "ENG" : "ESP"}{" "}
            <img
              src={language === "ESP" ? Eng : Esp}
              className="ml-1 inline-block h-4"
            ></img>
          </button>
          <div className="w-[80%] max-w-[700px]">
            <h2 className="font-Titles text-[40px] text-principal md:text-[50px]">
              TAPAS
            </h2>
            {food &&
              food.tapas.map((e, idx) => {
                const alergenos = allergiesFormatter(e.alergenos);
                return (
                  <div key={idx} className="mt-1 flex justify-between gap-5">
                    <p className="text-principal">
                      {language === "ESP" ? e.ESP : e.ENG}{" "}
                      {e.dieta && (
                        <span>
                          {e.dieta.map((item) => `[${item}]`).join(" ")}
                        </span>
                      )}{" "}
                      {alergenos && <span>({alergenos.join(",")})</span>}
                    </p>
                    <p className="font-bold text-principal">
                      {e.precio && `${e.precio.toFixed(2)}€`}
                    </p>
                  </div>
                );
              })}
            <h2 className="mt-5 font-Titles text-[40px] text-principal md:text-[50px]">
              {language === "ESP" ? "ENSALADAS" : "SALADS"}
            </h2>
            {food &&
              food.ensaladas.map((e, idx) => {
                const alergenos = allergiesFormatter(e.alergenos);
                return (
                  <div key={idx} className="mt-1 flex justify-between gap-5">
                    <p className="text-principal">
                      {language === "ESP" ? e.ESP : e.ENG}{" "}
                      {e.dieta && (
                        <span>
                          {e.dieta.map((item) => `[${item}]`).join(" ")}
                        </span>
                      )}{" "}
                      {alergenos && <span>({alergenos.join(",")})</span>}
                    </p>
                    <p className="font-bold text-principal">
                      {e.precio && `${e.precio.toFixed(2)}€`}
                    </p>
                  </div>
                );
              })}
            <h2 className=" mt-5 font-Titles text-[40px] text-principal md:text-[50px]">
              {language === "ESP" ? "GUARNICIONES" : "SIDE DISHES"}
            </h2>
            {food &&
              food.guarniciones.map((e, idx) => {
                const alergenos = allergiesFormatter(e.alergenos);
                return (
                  <div key={idx} className="mt-1 flex justify-between gap-5">
                    <p className="text-principal">
                      {language === "ESP" ? e.ESP : e.ENG}{" "}
                      {e.dieta && (
                        <span>
                          {e.dieta.map((item) => `[${item}]`).join(" ")}
                        </span>
                      )}{" "}
                      {alergenos && <span>({alergenos.join(",")})</span>}
                    </p>
                    <p className="font-bold text-principal">
                      {e.precio && `${e.precio.toFixed(2)}€`}
                    </p>
                  </div>
                );
              })}
            <h2 className="mt-5 font-Titles text-[40px] text-principal md:text-[50px]">
              {language === "ESP"
                ? "PLATOS DEL MUNDO"
                : "DISHES FROM AROUND THE WORLD"}
            </h2>
            {food &&
              food.platosDelMundo.map((e, idx) => {
                const alergenos = allergiesFormatter(e.alergenos);
                return (
                  <div key={idx} className="mt-1 flex justify-between gap-5">
                    <p className="text-principal">
                      {language === "ESP" ? e.ESP : e.ENG}{" "}
                      {e.dieta && (
                        <span>
                          {e.dieta.map((item) => `[${item}]`).join(" ")}
                        </span>
                      )}{" "}
                      {alergenos && <span>({alergenos.join(",")})</span>}
                    </p>
                    <p className="font-bold text-principal">
                      {e.precio && `${e.precio.toFixed(2)}€`}
                    </p>
                  </div>
                );
              })}
            <h2 className=" mt-5 font-Titles text-[40px] text-principal md:text-[50px]">
              {language === "ESP" ? "ADICIONAL" : "EXTRAS"}
            </h2>
            {food &&
              food.adicional.map((e, idx) => {
                const alergenos = allergiesFormatter(e.alergenos);
                return (
                  <div key={idx} className="mt-1 flex justify-between gap-5">
                    <p className="text-principal">
                      {language === "ESP" ? e.ESP : e.ENG}{" "}
                      {e.dieta && (
                        <span>
                          {e.dieta.map((item) => `[${item}]`).join(" ")}
                        </span>
                      )}{" "}
                      {alergenos && <span>({alergenos.join(",")})</span>}
                    </p>
                    <p className="font-bold text-principal">
                      {e.precio && `${e.precio.toFixed(2)}€`}
                    </p>
                  </div>
                );
              })}
          </div>
          <div className="mt-24 text-center text-xl font-bold text-principal">
            {language === "ESP" ? (
              <>
                <h3>POSTRES CASEROS DEL DÍA</h3>
                <h3>O</h3>
                <h3>FRUTA DE TEMPORADA</h3>
              </>
            ) : (
              <>
                <h3>HOMEMADE DESSERTS OF THE DAY</h3>
                <h3>OR</h3>
                <h3>SEASONAL FRUIT</h3>
              </>
            )}
          </div>
          <div className="mt-24 w-[80%] max-w-[700px]">
            <h2 className="mt-5 font-Titles text-[40px] text-principal md:text-[50px]">
              {language === "ESP" ? "BEBIDAS" : "DRINKS"}
            </h2>
            <h2 className="mt-5 font-Titles text-[40px] text-principal md:text-[50px]">
              {language === "ESP" ? "ESTILO LILA" : "LILA STYLE"}
            </h2>
            {drinks &&
              drinks.estiloLila.map((e, idx) => {
                const alergenos = allergiesFormatter(e.alergenos);
                return (
                  <div key={idx} className="mt-1 flex justify-between gap-5">
                    <p className="text-principal">
                      {language === "ESP" ? e.ESP : e.ENG}{" "}
                      {e.comentario &&
                        (language === "ESP"
                          ? `(${e.comentario})`
                          : `(${e.comentarioEng})`)}
                      {e.dieta && (
                        <span>
                          {e.dieta.map((item) => `[${item}]`).join(" ")}
                        </span>
                      )}{" "}
                      {alergenos && <span>({alergenos.join(",")})</span>}
                    </p>
                    <p className="font-bold text-principal">
                      {e.precio && `${e.precio.toFixed(2)}€`}
                    </p>
                  </div>
                );
              })}
            <h2 className="mt-5 font-Titles text-[40px] text-principal md:text-[50px]">
              {language === "ESP" ? "REFRESCOS" : "SOFT DRINKS"}
            </h2>
            {drinks &&
              drinks.refrescos.map((e, idx) => {
                const alergenos = allergiesFormatter(e.alergenos);
                return (
                  <div key={idx} className="mt-1 flex justify-between gap-5">
                    <p className="text-principal">
                      {language === "ESP" ? e.ESP : e.ENG}{" "}
                      {e.comentario &&
                        (language === "ESP"
                          ? `(${e.comentario})`
                          : `(${e.comentarioEng})`)}
                      {e.dieta && (
                        <span>
                          {e.dieta.map((item) => `[${item}]`).join(" ")}
                        </span>
                      )}{" "}
                      {alergenos && <span>({alergenos.join(",")})</span>}
                    </p>
                    <p className="font-bold text-principal">
                      {e.precio && `${e.precio.toFixed(2)}€`}
                    </p>
                  </div>
                );
              })}
            <h2 className="mt-5 font-Titles text-[40px] text-principal md:text-[50px]">
              {language === "ESP" ? "CAFÉS Y TÉS" : "COFFEES AND TEAS"}
            </h2>
            {drinks &&
              drinks.cafes.map((e, idx) => {
                const alergenos = allergiesFormatter(e.alergenos);
                return (
                  <div key={idx} className="mt-1 flex justify-between gap-5">
                    <p className="text-principal">
                      {language === "ESP" ? e.ESP : e.ENG}{" "}
                      {e.comentario &&
                        (language === "ESP"
                          ? `(${e.comentario})`
                          : `(${e.comentarioEng})`)}
                      {e.dieta && (
                        <span>
                          {e.dieta.map((item) => `[${item}]`).join(" ")}
                        </span>
                      )}{" "}
                      {alergenos && <span>({alergenos.join(",")})</span>}
                    </p>
                    <p className="font-bold text-principal">
                      {e.precio && `${e.precio.toFixed(2)}€`}
                    </p>
                  </div>
                );
              })}
          </div>
          <div className="mt-10 flex w-[80%] max-w-[700px] flex-wrap justify-between text-principal">
            <div className="flex flex-wrap gap-5">
              <h3 className="m-0 mt-10 text-left text-2xl font-bold">
                {language === "ESP" ? "Alérgenos:" : "Allergens:"}
              </h3>
              <div className="flex flex-col flex-wrap">
                {language === "ESP"
                  ? allergies.map((e, idx) => (
                      <p key={idx} className="inline-block font-bold">
                        {idx + 1}. {e}
                      </p>
                    ))
                  : allergiesEng.map((e, idx) => (
                      <p key={idx} className="inline-block font-bold">
                        {idx + 1}. {e}
                      </p>
                    ))}
              </div>
            </div>
            <div className="text-xl">
              <p>{language === "ESP" ? "V = Vegano" : "V = Vegan"}</p>
              <p>
                {language === "ESP" ? "SG = Sin Gluten" : "SG = Gluten Free"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
