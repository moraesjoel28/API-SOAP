function salvarUsuario(nome, dataNascimento, genero) {
  const url = 'https://testSOAP.com/servico/soap';
  const envelopeSOAP = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://testSOAP.com/servico">
      <soapenv:Header/>
      <soapenv:Body>
        <web:SalvarUsuario>
          <web:Nome>${nome}</web:nome>
          <web:dataNascimento>${dataNascimento}</web:dataNascimento>
          <web:genero>${genero}</web:genero>
        </web:SalvarUsuario>
      </soapenv:Body>
    </soapenv:Envelope>
  `;

  const httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', url, true);
  httpRequest.setRequestHeader('Content-Type', 'text/xml');
  httpRequest.setRequestHeader('SOAPAction', 'http://testSOAP.com/servico/SalvarUsuario');

  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        console.log('O user foi salvo com sucesso!');
      } else {
        console.error('Erro ao salvar usuário:', httpRequest.status, httpRequest.statusText);
      }
    }
  };

  httpRequest.send(envelopeSOAP);
}

//salvarUsuario('Joel Mores', '2000-06-28', 'Masculino');
