export const foodFormatter = (res) => {
  if (res) {
    const food = res.items.map((e) => {
      return {
        alergenos: e.fields.alergenos,
        dieta: e.fields.dieta,
        ESP: e.fields.nombre,
        ENG: e.fields.nombreIngls,
        precio: e.fields.precio,
        seccion: e.fields.seccin,
      };
    });
    const tapas = food
      .filter((e) => e.seccion === "Tapas")
      .sort((a, b) => a.precio - b.precio);
    const ensaladas = food
      .filter((e) => e.seccion === "Ensaladas")
      .sort((a, b) => a.precio - b.precio);
    const guarniciones = food
      .filter((e) => e.seccion === "Guarniciones")
      .sort((a, b) => a.precio - b.precio);
    const platosDelMundo = food
      .filter((e) => e.seccion === "Platos del mundo")
      .sort((a, b) => a.precio - b.precio);
    const adicional = food
      .filter((e) => e.seccion === "Adicional")
      .sort((a, b) => a.precio - b.precio);
    return { tapas, ensaladas, guarniciones, platosDelMundo, adicional };
  }
};

export const drinkFormatter = (res) => {
  if (res) {
    const food = res.items.map((e) => {
      return {
        alergenos: e.fields.alergenos,
        dieta: e.fields.dieta,
        ESP: e.fields.nombre,
        ENG: e.fields.nombreIngls,
        precio: e.fields.precio,
        seccion: e.fields.seccin,
        comentario: e.fields.comentario,
        comentarioEng: e.fields.comentarioEng,
      };
    });
    const estiloLila = food
      .filter((e) => e.seccion === "Estilo lila")
      .sort((a, b) => a.precio - b.precio);
    const refrescos = food
      .filter((e) => e.seccion === "Refrescos")
      .sort((a, b) => a.precio - b.precio);
    const cafes = food
      .filter((e) => e.seccion === "Cafés y tés")
      .sort((a, b) => a.precio - b.precio);
    return { estiloLila, refrescos, cafes };
  }
};

const allergiesList = [
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

export const allergiesFormatter = (allergies) => {
  if (allergies) {
    const result = allergies.map((e) => {
      return allergiesList.indexOf(e) + 1;
    });

    return result;
  }
};
