import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
};

export const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const domain = "dev-xspz3anttt2uuks6.us.auth0.com";
  //   import.meta.env.VITE_AUTH0_DOMAIN;

  const clientId = "WTxTho52Rb6HyR92OxCLah6yE2YFThlY";
  //   import.meta.env.VITE_AUTH0_CLIENT_ID;

  const redirectUri = "http://localhost:5173";
  //   import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Unable to initialise auth");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("USER", user);
    console.log("appState", appState);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirectUri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );

  return <div>Auth0ProviderWithNavigate</div>;
};
