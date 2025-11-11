import CommonWebDevelopmentSection from "./CommonWebDevelopmentSection";
import SEOImage from "../../assets/web-development/seo.png";
const SEOIntegration = () => {
  const contents = [
    {
      title: "Our SEO Services Include:",
      items: [
        "On-page optimization (keywords, meta tags, alt text)",
        "Fast loading speeds",
        "SEO-friendly URL structure",
        "Mobile-first design",
        "Mobile and Tablet Optimized Shopping Experience",
      ],
    },
  ];

  return (
    <CommonWebDevelopmentSection
      title="SEO Integration for Web Development"
      description="At Coderlity, we ensure that every website we build is optimized for search engines, helping you rank better and reach a broader audience. We implement best practices for on-page SEO to make sure your website performs well on Google and other search engines."
      contents={contents}
      image={SEOImage}
    />
  );
};

export default SEOIntegration;
