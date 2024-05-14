import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Button,
} from "@react-email/components";

interface YelpRecentLoginEmailProps {
  userFirstName?: string;
  loginDate?: Date;
  loginDevice?: string;
  loginLocation?: string;
  loginIp?: string;
}

import logoSolutis from "./assets/logo-solutis.png";
import logoLabs from "./assets/image.png";

export const NoParticipantesEmail = () => {
  return (
    <Html>
      <Head />
      <Preview>Digital Assets</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row>
              <Img style={image} width={620} src={logoLabs} />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    color: "#000",
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Olá, Jhon!
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    color: "#000",
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Esperamos que esteja bem!
                </Heading>
                <Text style={paragraph}>
                  Gostaríamos de agradecer sua participação na bancada{" "}
                  <b>Digital Assets</b> do Solutis LabS. Foi ótimo ter você
                  conosco!
                </Text>

                <Text style={paragraph}>
                  Entendemos que ás vezes surgem imprevistos e compromissos
                  podem se acumular, sentimos falta da sua contribuição.
                  Queremos lembrar que ainda temos muitas oportunidades para
                  aprender e crescer juntos.
                </Text>

                <Text style={paragraph}>
                  Estamos aqui para apoiá-lo em sua jornada de aprendizado e
                  garantir que você se sinta parte integrante deste grupo.
                </Text>

                <Text style={paragraph}>
                  Mas atenção, a aventura continua! Temos mais desafios
                  disponíveis e contamos com você nessa jornada do conhecimento.{" "}
                </Text>

                <Text style={paragraph}>
                  Acesse o canal do teams e fique por dentro.
                </Text>

                <Row style={{ ...boxInfos }}>
                  <Column style={containerButton} colSpan={2}>
                    <Button style={button}>LabS - Digital Assets</Button>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px 0",
            }}
          >
            <Img
              src={logoSolutis}
              style={{
                width: "10%",
                height: "10%",
              }}
            />
          </div>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | Solutis LabS | Digital Assests
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

NoParticipantesEmail.PreviewProps = {
  userFirstName: "Alan",
  loginDate: new Date("September 7, 2022, 10:58 am"),
  loginDevice: "Chrome on Mac OS X",
  loginLocation: "Upland, California, United States",
  loginIp: "47.149.53.167",
} as YelpRecentLoginEmailProps;

export default NoParticipantesEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 17,
  color: "#000",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#7030A0",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
  margin: "16px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  marginTop: "20px",
  padding: "20px",
};
