let listaDeContactos = [
  {
    id: 0,
    nombre: "Yessica",
    Apellidos: "Sotomayor",
    Telefono: 57311360510,
    email: "ysotocastro@gmail.com",
    Ubicaciones: {
      Ciudad: "Cali",
      Dirección: "cra 20 n 21-14",
    },
  },
  {
    id: 1,
    nombre: "Santiago",
    Apellidos: "Forero",
    Telefono: 57314203121,
    email: "ForeroSantiago@gmail.com",
    Ubicaciones: {
      Ciudad: "Bogotá",
      Dirección: "calle 72 n 3-20",
    },
  },
  {
    id: 2,
    nombre: "Fredy",
    Apellidos: "Marin",
    Telefono: 573115920832,
    email: "fredy1989@gmail.com",
    Ubicaciones: {
      Ciudad: "Bogotá",
      Dirección: "calle 72 n 3-20",
    },
  },
  {
    id: 3,
    nombre: "Lorena",
    Apellidos: "Camargo",
    Telefono: 573204609898,
    email: "lorena123@gmail.com",
    Ubicaciones: {
      Ciudad: "Bogotá",
      Dirección: "Avenida 26 n 5-10",
    },
  },
];
function ingresarContacto(
  name,
  lastName,
  phone,
  mail,
  location,
  city,
  address
) {
  let ultimaposicion = listaDeContactos[listaDeContactos.length - 1].id;
  let NuevoContacto = {
    id: ultimaposicion + 1,
    nombre: name,
    Apellidos: lastName,
    Telefono: phone,
    email: mail,
    Ubicacion: location,
    ciudad: city,
    Dirección: address,
  };
  listaDeContactos.push(NuevoContacto);
  console.log(ingresarContacto);
}
ingresarContacto(
  "Ana",
  "Arias",
  3202187654,
  "analu@hotmail.com",
  "",
  "Bogotá",
  "clle 2 2-20"
);
ingresarContacto(
  "Tatiana",
  "Arenas",
  320045678,
  "tataianarenas@hotmail.com",
  "",
  "Bogotá",
  "clle 1 1-20"
);

function EliminarContacto(name, lastName) {
  let Posicion = listaDeContactos.findIndex(
    (data) => data.nombre == name && data.Apellidos == lastName
  );
  listaDeContactos.splice(Posicion, 1);
}
EliminarContacto("Santiago", "Forero");

function ImprimirContactos() {
  console.log(listaDeContactos);
}
ImprimirContactos();
