import Head from "next/head";
import Layout from "../layouts/Layout";
import { getStaticPropsForTina } from "tinacms";
import { useRouter } from "next/dist/client/router";
import TemplateRenderer from "../components/TemplateRenderer";

export default function Home(props) {
  console.log(props);
  const { locale } = useRouter();
  return (
    <Layout>
      <main>
        <section className="mt-32">
          <h2 className="uppercase text-gray-400 font-bold text-6xl">
            ART-Talks
          </h2>
          <p className="mt-10">
            {props?.data?.getHomeDocument?.data?.description[locale || "en"]}
          </p>
        </section>
        <section className="mt-10 flex  gap-x-5">
          {props?.data?.getHomeDocument?.data?.days.map((day) => (
            <div className="flex flex-col items-center justify-evenly py-5 text-gray-100  w-1/4 h-[20rem] bg-gray-400">
              <span className="text-5xl font-bold">
                {" "}
                {day.title[locale || "en"]}
              </span>
              <span className="text-4xl"> {day.subtitle[locale || "en"]}</span>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const tinaProps = await getStaticPropsForTina({
    query: `
    query{
      getHomeDocument(relativePath: "home.json"){
        data {
          description {
            en
            fr
            kor
          }
          days {
            title {
              en
              fr
              kor
            }
            subtitle {
              en
              fr
              kor
            }
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
