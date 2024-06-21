$(document).ready(function () {
  $("#consultaCep").click(function (e) {
    e.preventDefault();

    let cep = $("#cep").val().replace(/\D/g, "");

    let validacep = /^[0-9]{8}$/;

    if (cep != "") {
      $("#erros").text("");
      if (validacep.test(cep) && cep) {
        $.getJSON(
          "https://viacep.com.br/ws/" + cep + "/json/?callback=?",
          function (dados) {
            $("#local").text(dados.localidade);
            $("#estado").text(dados.uf);
            $("#rua").text(dados.logradouro);
          }
        );

        $("#resultadosCep").toggle();
      } else {
        $("#erros").text("CEP inválido").toggle();
      }
    } else {
      $("#erros").text("Preencha o campo de CEP corretamente!").toggle();
    }
  });
});
