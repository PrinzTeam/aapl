import { useRouter } from "next/dist/client/router";
import { getStaticPropsForTina } from "tinacms";
import Layout from "../layouts/Layout";

const ArchivePage = (props) => {
  const { locale } = useRouter();
  return (
    <Layout>
      <section className="mt-10 md:mt-32">
        <div
          className="text-2xl mx-auto"
          dangerouslySetInnerHTML={{
            __html:
              props.data.getArchiveDocument.data.description[locale || "en"],
          }}
        ></div>
        <section className="mt-10 ">
          <a
            href="https://koreanfilm.ca/archives/art-talks/2020"
            target="_blank"
            referrerPolicy="no-referrer"
            className="bg-aapl-red text-white px-4 py-5 rounded-xl font-semibold"
          >
            Go to Archive
          </a>
        </section>
      </section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const tinaProps = await getStaticPropsForTina({
    query: `
    {
        getArchiveDocument(relativePath: "archive.json") {
          data {
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

export default ArchivePage;
