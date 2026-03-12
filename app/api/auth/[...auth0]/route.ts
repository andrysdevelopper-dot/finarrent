import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0';

const handler = handleAuth({
  login: handleLogin({
    returnTo: '/dashboard',
    authorizationParams: {
      prompt: 'login',
    },
  }),
  logout: handleLogout({
    returnTo: '/',
  }),
});

export { handler as GET, handler as POST };
