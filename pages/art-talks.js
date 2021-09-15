import Head from "next/head";
import Layout from "../layouts/Layout";
import { getStaticPropsForTina } from "tinacms";
import { useRouter } from "next/dist/client/router";
import TemplateRenderer from "../components/TemplateRenderer";

export default function ARTTalks(props) {
  const { locale } = useRouter();
  console.log(props);
  return (
    <Layout>
      <main>
        <section className="bg-aapl-red mt-5">
          <h1 className="text-center text-5xl py-5 px-5 text-gray-50">
            {props.data?.getArttalksDocument?.data?.mainTitle?.[locale || "en"]}
          </h1>
        </section>
        <section className="mt-10">
          <h2 className="uppercase text-gray-400 font-bold text-6xl">
            ART-Talks
          </h2>
          <p className="mt-8 text-xl">
            {
              props?.data?.getArttalksDocument?.data?.description[
                locale || "en"
              ]
            }
          </p>
        </section>
        <section className="mt-10">
          <ul className="space-y-10">
            {props?.data?.getArttalksDocument?.data?.days.map((day) => (
              <li key={day.title}>
                <details className="text-6xl cursor-pointer">
                  <summary className="list-none pl-5 py-10 text-white bg-gray-500">
                    <span className="font-bold">
                      {day.title[locale || "en"]}
                    </span>
                    :
                    <span className="font-normal">
                      {day?.subtitle[locale || "en"]}
                    </span>
                  </summary>
                  <div className="text-xl mt-5 px-5">
                    {day.body?.map((component) => (
                      <TemplateRenderer component={component} />
                    ))}
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const tinaProps = await getStaticPropsForTina({
    query: `
    query($relativePath: String!) {
      getArttalksDocument(relativePath: $relativePath) {
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
            body {
              __typename
              ... on ArttalksDaysBodyText {
                title {
                  en
                  fr
                  kor
                }
              }
              ... on ArttalksDaysBodyVideo {
                vimeoUrl
              }
              ... on ArttalksDaysBodyImage {
                caption {
                  en
                  fr
                  kor
                }
                imageUrl
              }
            }
          }
        }
      }
    }    
  `,
    variables: { relativePath: "arttalks.json" },
  });
  return {
    props: {
      ...tinaProps,
    },
  };
};
