import { withSession } from "../src/services/auth/session";

const AuthPageSSR = (props) => {
  return (
    <div>
      <h1>Auth Page Server Side Render</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default AuthPageSSR;

export const getServerSideProps = withSession((ctx) => {
  return {
    props: {
      session: ctx.req.session,
    },
  };
});

// export async function getServerSideProps(ctx) {
//   try {
//     const session = await authService.getSession(ctx);
//     return { props: { session } };
//   } catch (error) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/?error=unauthorized",
//       },
//     };
//   }
// }

// Se tentarmos chamar a função tokenService.get() nessa página e dermos um console.log() nossa aplicação irá quebrar. Isso por conta da página rodar no servidor, e o tokenService usa funções nativas do navegador.AuthPageSSR

// Para tratar esse problema usaremos cookies.

// Sempre que precisarmos salvar um token em aplicações SSR, é necessário usar cookies
