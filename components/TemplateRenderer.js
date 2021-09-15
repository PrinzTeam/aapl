import { useRouter } from "next/dist/client/router";
import Image from "next/image";

const TemplateRenderer = ({ component }) => {
  const { locale } = useRouter();
  const { __typename } = component;
  console.log({ component, __typename });
  switch (__typename) {
    case "HomeDaysBodyText":
      const { title } = component;
      return <h1>{title[locale || "en"]}</h1>;
    case "HomeDaysBodyVideo":
      const { vimeoUrl } = component;
      return <h1>{vimeoUrl}</h1>;
    case "HomeDaysBodyImage":
      const { caption, imageUrl } = component;
      return (
        <Image
          height={500}
          width={500}
          src={imageUrl}
          alt={caption[locale || "en"]}
        />
      );
    default:
      return null;
  }
};

export default TemplateRenderer;
