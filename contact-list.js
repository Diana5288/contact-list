let listaDeContactos = [
  {
    id: 0,
    nombre: "Yessica Sotomayor",
    Telefono: 57311360510,
    email: "ysotocastro@gmail.com",
  },
  {
    id: 1,
    nombre: "Santiago Forero",
    Telefono: 57314203121,
    email: "ForeroSantiago@gmail.com",
  },
  {
    id: 2,
    nombre: "Fredy Marin",
    Telefono: 573115920832,
    email: "fredy1989@gmail.com",
  },
  {
    id: 3,
    nombre: "Lorena Camargo",
    Telefono: 573204609898,
    email: "lorena123@gmail.com",
  },
];
function ingresarContacto(name, phone, mail) {
  let ultimaposicion = listaDeContactos[listaDeContactos.length - 1].id;
  let NuevoContacto = {
    id: ultimaposicion + 1,
    nombre: name,
    Telefono: phone,
    email: mail,
  };
  listaDeContactos.push(NuevoContacto);
}

ingresarContacto("Ana Arias", 3202187654, "analu@hotmail.com");
ingresarContacto("Tatiana Arenas", 320045678, "tataianarenas@hotmail.com");

function EliminarContacto(name) {
  let Posicion = listaDeContactos.findIndex((data) => data.nombre == name);
  listaDeContactos.splice(Posicion, 1);
}
EliminarContacto("Santiago Forero");

function ImprimirContactos() {
  console.log(listaDeContactos);
}
ImprimirContactos();
