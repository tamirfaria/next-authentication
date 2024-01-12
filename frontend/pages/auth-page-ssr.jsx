import nookies from "nookies";
import { tokenService } from "../src/services/token/token-service";

const AuthPageSSR = () => {
  const accessToken = tokenService.get();
  return (
    <div>
      <h1>Auth Page Server Side Render</h1>
      <pre>{JSON.stringify(accessToken, null, 2)}</pre>
    </div>
  );
};

export default AuthPageSSR;

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  console.log({ cookies });
  return {
    props: {
      token: tokenService.get(ctx),
    },
  };
}

// Se tentarmos chamar a função tokenService.get() nessa página e dermos um console.log() nossa aplicação irá quebrar. Isso por conta da página rodar no servidor, e o tokenService usa funções nativas do navegador.AuthPageSSR

// Para tratar esse problema usaremos cookies.

// Sempre que precisarmos salvar um token em aplicações SSR, é necessário usar cookies
