import CommonWebDevelopmentSection from "./CommonWebDevelopmentSection";
import ECommerceImage from "../../assets/web-development/full-stack.png";

export default function ECommerceDevelopment() {
  const contents = [
    {
      title: "Our E-commerce Services Include:",
      items: [
        "Shopify, WooCommerce, Magento, or Custom E-commerce Solutions",
        "Payment Gateway Integration",
        "Product Catalogs and Inventory Management",
        "Customized Shopping Cart and Checkout Systems",
        "Mobile and Tablet Optimized Shopping Experience",
      ],
    },
  ];

  return (
    <CommonWebDevelopmentSection
      title="E-Commerce Development"
      description="Grow your online business with a fully integrated E-commerce platform built to scale. We design and develop secure, user-friendly e-commerce websites that provide smooth, intuitive shopping experiences."
      contents={contents}
      image={ECommerceImage}
    />
  );
}
