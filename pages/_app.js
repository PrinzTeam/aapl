import dynamic from "next/dynamic";
import { TinaEditProvider } from "tinacms/dist/edit-state";
const TinaCMS = dynamic(() => import("tinacms"), { ssr: false });
import { MarkdownFieldPlugin, HtmlFieldPlugin } from "react-tinacms-editor";
import "tailwindcss/tailwind.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <TinaEditProvider
        editMode={
          <TinaCMS
            clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
            branch={process.env.NEXT_PUBLIC_EDIT_BRANCH}
            organization={process.env.NEXT_PUBLIC_ORGANIZATION_NAME}
            isLocalClient={Boolean(
              Number(process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT ?? true)
            )}
            cmsCallback={(cms) => {
              cms.plugins.add(HtmlFieldPlugin);
              cms.plugins.add(MarkdownFieldPlugin);
            }}
            {...pageProps}
          >
            {(livePageProps) => <Component {...livePageProps} />}
          </TinaCMS>
        }
      >
        <Component {...pageProps} />
      </TinaEditProvider>
    </>
  );
};

export default App;
