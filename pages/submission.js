import { useRouter } from "next/dist/client/router";
import { getStaticPropsForTina } from "tinacms";
import Layout from "../layouts/Layout";

const SubmissionPage = (props) => {
  const { locale } = useRouter();
  console.log(props.data);
  return (
    <Layout>
      <section className="mt-10 md:mt-32">
        <div
          className="text-2xl mx-auto"
          dangerouslySetInnerHTML={{
            __html:
              props.data.getSubmissionDocument.data.description[locale || "en"],
          }}
        ></div>
        <section className="mt-10 ">
          <a
            href="https://forms.gle/nxvp3ofKJFfF5cnP8"
            target="_blank"
            referrerPolicy="no-referrer"
            className="bg-aapl-red text-white px-4 py-5 rounded-xl font-semibold"
          >
            Submission form
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
        getSubmissionDocument(relativePath: "submission.json") {
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

export default SubmissionPage;
