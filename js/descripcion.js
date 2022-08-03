$(() => {
  let datoUrl = window.location.search;

  $("#titulo").append(
    datoUrl.split("?nombre=")[1].split("%20").join(" ").split("&")[0]
  );
  $("#imagencard").attr("src", datoUrl.split("&")[1]);

  $("#location").append(datoUrl.split("&")[2].split("%20").join(" "));

  $("#status").append(datoUrl.split("&")[3]);

  $("#origen").append(datoUrl.split("&")[4].split("%20").join(" "));

  $("#gender").append(datoUrl.split("&")[5]);
});

//el split transforma en un array, asi puedo usar la posicion de cada elemento en la URL
