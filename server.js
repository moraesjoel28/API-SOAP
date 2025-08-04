const soap = require('soap');
const http = require('http');

const service = {
  UsuarioService: {
    UsuarioPort: {
      SalvarUsuario: (args, callback) => {
        console.log('Esses são os dados recebidos após o envio da requisição:', args);
        callback(null, { status: 'Operação foi executada com sucesso' });
      },
    },
  },
};

const xml = `
  <definitions xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
               xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/"
               xmlns:tns="http://testSOAP.com/servico"
               targetNamespace="http://testSOAP.com/servico">
    <message name="SalvarUsuarioRequest">
      <part name="nome" type="xsd:string"/>
      <part name="dataNascimento" type="xsd:string"/>
      <part name="genero" type="xsd:string"/>
    </message>
    <message name="SalvarUsuarioResponse">
      <part name="status" type="xsd:string"/>
    </message>
    <portType name="UsuarioPortType">
      <operation name="SalvarUsuario">
        <input message="tns:SalvarUsuarioRequest"/>
        <output message="tns:SalvarUsuarioResponse"/>
      </operation>
    </portType>
    <binding name="UsuarioBinding" type="tns:UsuarioPortType">
      <soap:binding style="rpc" transport="http://schemas.xmlsoap.org/soap/http"/>
      <operation name="SalvarUsuario">
        <soap:operation soapAction="http://testSOAP.com/servico/SalvarUsuario"/>
        <input>
          <soap:body use="encoded" namespace="http://testSOAP.com/servico" encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>
        </input>
        <output>
          <soap:body use="encoded" namespace="http://testSOAP.com/servico" encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>
        </output>
      </operation>
    </binding>
    <service name="UsuarioService">
      <port name="UsuarioPort" binding="tns:UsuarioBinding">
        <soap:address location="http://localhost:8080/soap/usuario"/>
      </port>
    </service>
  </definitions>
`;

const server = http.createServer((requisition, response) => {
  response.end('404: Not Found');
});

server.listen(8080, () => {
  soap.listen(server, '/soap/usuario', service, xml);
  console.log('Servidor SOAP está rodando em http://localhost:8080/soap/usuario');
});
