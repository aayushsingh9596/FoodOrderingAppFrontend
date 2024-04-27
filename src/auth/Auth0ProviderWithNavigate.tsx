import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
};

export const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const domain = "dev-xspz3anttt2uuks6.us.auth0.com";

  const clientId = "Ks4cg2fWIgWXmfL9dmbCkSWrgo5u8lFZ";

  const redirect_uri = "https://eatscom.netlify.app/";

  if (!domain || !clientId || !redirect_uri) {
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
        redirect_uri: redirect_uri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );

  return <div>Auth0ProviderWithNavigate</div>;
};
