import Head from "next/head";
import Layout from "../layouts/Layout";
import { getStaticPropsForTina } from "tinacms";
import { useRouter } from "next/dist/client/router";

export default function Home(props) {
  const { locale } = useRouter();
  console.log(locale);
  return (
    <Layout>
      <main>
        <section className="bg-aapl-red mt-20">
          <h1 className="text-center text-5xl py-5 px-5 text-gray-50">
            {props.data?.getHomeDocument?.data.mainTitle[locale || "en"]}
          </h1>
        </section>
        <section className="mt-20">
          <h2 className="uppercase text-gray-400 font-bold text-6xl">
            ART-Talks
          </h2>
          <p className="mt-10">
            {props?.data?.getHomeDocument?.data?.description[locale || "en"]}
          </p>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const tinaProps = await getStaticPropsForTina({
    query: `
    query {
      getHomeDocument(relativePath: "home.json") {
        data {
          mainTitle {
            en
            fr
            kor
          }
          description {
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
