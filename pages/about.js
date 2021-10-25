import { useRouter } from "next/dist/client/router";
import { getStaticPropsForTina } from "tinacms";
import Layout from "../layouts/Layout";

const AboutPage = (props) => {
  const { locale } = useRouter();
  return (
    <Layout>
      <section className="mt-10 md:mt-32">
        <div
          className="text-2xl prose mx-auto"
          dangerouslySetInnerHTML={{
            __html: props.data.getAboutDocument.data.content[locale || "en"],
          }}
        ></div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const tinaProps = await getStaticPropsForTina({
    query: `
      query {
        getAboutDocument(relativePath: "about.json") {
          data {
            content {
              en
              fr
              kor
            }
          }
        }
      }
      
    `,
  });
  return {
    props: {
      ...tinaProps,
    },
  };
};

export default AboutPage;
