import Head from "next/head";
import Layout from "../layouts/Layout";
import { getStaticPropsForTina } from "tinacms";
import { useRouter } from "next/dist/client/router";
import TemplateRenderer from "../components/TemplateRenderer";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import classNames from "classnames";

export default function ARTTalks(props) {
  const { locale } = useRouter();
  const { artTalks, panels } = props;
  return (
    <Layout>
      <main>
        <section className="mt-10 md:mt-32">
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
            {props?.data?.getArttalksDocument?.data?.days.map((day, index) => (
              <li
                id={"panel" + index}
                className="block w-full"
                key={index + "dau"}
              >
                <Disclosure
                  as="div"
                  className="text-2xl md:text-6xl cursor-pointer block w-full"
                  defaultOpen={index === 0 || index === 1 || index === 2}
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full list-none pl-5 pr-5 md:pr-20 py-10 text-white bg-gray-500 flex items-center">
                        <span className="font-bold">
                          {day.title[locale || "en"]}
                        </span>
                        :
                        <span className="font-normal">
                          {day?.subtitle[locale || "en"]}
                        </span>
                        <ChevronUpIcon
                          className={classNames(
                            "transition-transform ml-auto h-10 md:h-14  text-white",
                            { "rotate-180": open }
                          )}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-xl mt-5 px-5 text-center">
                        {day.body?.map((component) => (
                          <>
                            <TemplateRenderer
                              className="text-4xl font-normal"
                              component={component}
                            />
                            <div className="mt-10 grid md:grid-cols-3 gap-5 md:gap-10 justify-center w-full mx-auto text-center">
                              {panels[index].ids.map((id) => {
                                const art = artTalks.find(
                                  (artalk) => artalk.id === id
                                );
                                if (!art) return null;
                                const { poster, slug, Author } = art;
                                return (
                                  <a
                                    href={`https://koreanfilm.ca/aapl/art-talks/${slug}`}
                                    target="_blank"
                                    className="block mx-auto"
                                  >
                                    <img
                                      className="object-cover w-[300px] h-[300px]"
                                      src={
                                        poster?.formats?.medium?.url ||
                                        poster.url
                                      }
                                    />
                                    <h2 className="mt-2">{Author}</h2>
                                  </a>
                                );
                              })}
                            </div>
                          </>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
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

  const resArt = await fetch(process.env.STRAPI_URL + `/art-talks`);
  const artTalks = await resArt.json();

  const panels = [
    {
      title1: `Panel 1 Oct.15th. 2021`,
      title2: `Back to the roots from women’s perspective`,
      active: true,
      ids: [
        "6160894df701080016add807",
        "616242d225c9f4001628f704",
        "6162444725c9f4001628f711",
        "616245a925c9f4001628f71c",
        "6162468a25c9f4001628f721",
        "6162471325c9f4001628f726",
      ],
    },
    {
      title1: `Panel 2 Oct.22th. 2021`,
      title2: `Through the Lens of Korean Culture`,
      active: true,
      ids: [
        "6162495025c9f4001628f739",
        "616247fa25c9f4001628f72b",
        "617034c42640b70016f40893",
        "61608797f701080016add802",
        "61703d862640b70016f408a2",
      ],
    },
    {
      title1: `Panel 2 Oct.29th. 2021`,
      title2: `International Voices on Asia`,
      active: true,
      ids: [
        "61781fe5c6ed560016c4d6e8",
        "6162452125c9f4001628f717",
        "616243ba25c9f4001628f70c",
        "6179a78272dd230016ff5e15",
        "6179963972dd230016ff5e0a",
        "6176d54f5bb4ec00164b4897",
        "6179670d72dd230016ff5e00",
        "616248df25c9f4001628f734",
      ],
    },
  ];

  return {
    props: {
      ...tinaProps,
      artTalks,
      panels,
    },
  };
};
