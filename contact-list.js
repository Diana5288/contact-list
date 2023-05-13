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

function eliminarContacto(name, lastName) {
  let Posicion = listaDeContactos.findIndex(
    (data) => data.nombre == name && data.Apellidos == lastName
  );
  listaDeContactos.splice(Posicion, 1);
}
eliminarContacto("Santiago", "Forero");

function imprimirContactos() {
  console.log(listaDeContactos);
}
imprimirContactos();

function actualizarContacto(Id, name, lastName, phone, mail, city, address) {
  let contactoParaEditar = listaDeContactos.filter(
    (value) => value.id === Id
  )[0];
  let actualizacionDato = {
    nombre: name,
    Apellidos: lastName,
    Telefono: phone,
    email: mail,
    Ubicacion: {
      ciudad: city,
      Dirección: address,
    },
  };
  contactoParaEditar.nombre = actualizacionDato.nombre;
  contactoParaEditar.Apellidos = actualizacionDato.Apellidos;
  contactoParaEditar.Telefono = actualizacionDato.Telefono;
  contactoParaEditar.Ubicaciones = actualizacionDato.Ubicacion;
  contactoParaEditar.email = actualizacionDato.email;
  console.log("contacto actualizado exitosamente");
}
actualizarContacto(
  3,
  "jhon",
  "paniagua",
  93768065,
  "jhon@hotmail.com",
  "medellìn",
  "carrera 20"
);
console.log(listaDeContactos);
