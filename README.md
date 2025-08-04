# API-SOAP
Exemplo de SOAP API - Web services

Para executar a API usando Postman, siga os passos:

1 - Setar novo Workspace
2 - Método Post e URL http://localhost:8080/soap/usuario
3 - Inserir as informações abaixo na aba Headers
  * Content-Type no campo key
  * text/xml;charset=UTF-8 no campo value
  * SOAPAction no campo key
  * http://testSOAP.com/servico/SalvarUsuario no campo value
4 - Na aba Body, selecione a opção Raw e insira os campos abaixo:
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                      xmlns:web="http://testSOAP.com/servico">
       <soapenv:Header/>
       <soapenv:Body>
          <web:SalvarUsuario>
             <web:nome>Joel Moraes</web:nome>
             <web:dataNascimento>2000-06-28</web:dataNascimento>
             <web:genero>Masculino</web:genero>
          </web:SalvarUsuario>
       </soapenv:Body>
    </soapenv:Envelope>
5 - Execute o comando node server.js no diretório aberto no VS Code
