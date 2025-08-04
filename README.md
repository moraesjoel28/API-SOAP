# API-SOAP

Exemplo de SOAP API - Web Services

## Como executar a API usando Postman

1. **Setar novo Workspace**

2. **Configurar método e URL**  
   - Método: `POST`  
   - URL: `http://localhost:8080/soap/usuario`

3. **Inserir as informações abaixo na aba Headers**  
   | Key          | Value                                                  |
   |--------------|--------------------------------------------------------|
   | Content-Type | text/xml;charset=UTF-8                                 |
   | SOAPAction   | http://testSOAP.com/servico/SalvarUsuario              |

4. **Na aba Body**  
   - Selecione a opção `Raw`  
   - Insira o seguinte conteúdo:

   ```xml
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

5. **Executar o servidor**
   - No diretório aberto no VS Code, execute os comandos: `npm install soap` e depois `node server.js`
