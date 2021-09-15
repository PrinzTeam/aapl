import Head from "next/head";
import Layout from "../layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <main>
        <section className="bg-aapl-red mt-20">
          <h1 className="text-center text-5xl py-5 px-5 text-gray-50">
            Call for submissions Deadline: Sept.30
          </h1>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {};
