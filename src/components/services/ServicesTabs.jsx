import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  Code,
  Database,
  ShoppingCart,
  Monitor,
  Globe,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import FullStackDevelopment from "./FullStackDevelopment";
import MernStackDevelopment from "./MernStackDevelopment";
import ECommerceDevelopment from "./ECommerceDevelopment";
import CustomWebDevelopment from "./CustomWebDevelopment";
import WebApplicationDevelopment from "./WebApplicationDevelopment";
import SEOIntregration from "./SEOIntregration";

const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState("fullstack");

  const tabs = [
    {
      key: "fullstack",
      title: "Full Stack Web Development",
      icon: <Monitor size={30} />,
      content: <FullStackDevelopment />,
    },
    {
      key: "mern",
      title: "Mern Stack Development",
      icon: <Database size={30} />,
      content: <MernStackDevelopment />,
    },
    {
      key: "custom",
      title: "Custom Web Development",
      icon: <Code size={30} />,
      content: <CustomWebDevelopment />,
    },
    {
      key: "ecommerce",
      title: "E-Commerce Development",
      icon: <ShoppingCart size={30} />,
      content: <ECommerceDevelopment />,
    },
    {
      key: "webapp",
      title: "Web Application Development",
      icon: <Globe size={30} />,
      content: <WebApplicationDevelopment />,
    },
    {
      key: "seo",
      title: "SEO Integration for Web Development",
      icon: <Search size={30} />,
      content: <SEOIntregration />,
    },
  ];

  const currentTab = tabs.find((tab) => tab.key === activeTab);

  return (
    <Container className="py-5">
      {/* Tab Cards */}
      <Row className="justify-content-center g-3 mb-5">
        {tabs.map((tab) => (
          <Col key={tab.key} md={2} sm={4} xs={6}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card
                onClick={() => setActiveTab(tab.key)}
                className={`text-center p-3 shadow-sm border-0 ${
                  activeTab === tab.key ? "bg-primary text-white" : "bg-light"
                }`}
                style={{
                  cursor: "pointer",
                  borderRadius: "15px",
                  transition: "all 0.3s ease",
                  minHeight: "120px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  className="mb-2 d-flex justify-content-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {React.cloneElement(tab.icon, {
                    color: activeTab === tab.key ? "#fff" : "#0d6efd",
                  })}
                </motion.div>
                <h6
                  className="mb-0"
                  style={{ fontSize: "14px", lineHeight: "1.3" }}
                >
                  {tab.title}
                </h6>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Content Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {currentTab.content}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default ServiceTabs;
