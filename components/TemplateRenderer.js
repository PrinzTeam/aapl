import { useRouter } from "next/dist/client/router";
import Image from "next/image";

const TemplateRenderer = ({ component, className }) => {
  const { locale } = useRouter();
  const { __typename } = component;
  switch (__typename) {
    case "ArttalksDaysBodyText":
      const { title } = component;
      return <h1 className={className}>{title[locale || "en"]}</h1>;
    case "ArttalksDaysBodyVideo":
      const { vimeoUrl } = component;
      return <h1>{vimeoUrl}</h1>;
    case "ArttalksDaysBodyImage":
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
