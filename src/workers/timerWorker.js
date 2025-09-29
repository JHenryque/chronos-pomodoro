self.onmessage = function (e) {
  console.log("WORKER recebeu", e.data);

  switch (e.data) {
    case "FAVOR": {
      self.postMessage("Sim, posso fazer um favor");

      break;
    }

    case "FALA_OI": {
      self.postMessage("OK: OI!");

      break;
    }

    case "FECHAR": {
      self.postMessage("Tá bom, vou fechar");

      self.close();

      break;
    }

    default:
      self.postMessage("Não entendi");
  }
};
