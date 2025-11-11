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
import "./ServicesTabs.css";

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
    <>
      <Container>
        <h1 className="services-header">Our Web Development Services</h1>
        <div className="divider-line-services"></div>
      </Container>

      <Container
        className="rounded-4 mt-5"
        style={{
          background: "linear-gradient(135deg, #e0f0ff 0%, #f5faff 100%)",
          boxShadow: "0 4px 12px rgba(155, 155, 155, 0.1)",
        }}
      >
        {/* Tab Cards */}
        <Row
          className="justify-content-center  mb-5"
          style={{
            backgroundColor: "#BDC8DFB2",
            borderRadius: "10px",
            boxShadow: "0 8px 16px rgba(143, 102, 102, 0.1)",
          }}
        >
          {tabs.map((tab) => (
            <Col
              key={tab.key}
              md={2}
              sm={4}
              xs={6}
              className="d-flex justify-content-center mb-3"
            >
              <motion.div>
                <Card
                  onClick={() => setActiveTab(tab.key)}
                  className="text-center border-0 bg-transparent mt-4"
                  style={{
                    cursor: "pointer",
                    width: "110px",
                    display: "flex",
                    alignItems: "center",
                    boxShadow: "none",
                  }}
                >
                  <motion.div
                    className={`mb-2 d-flex justify-content-center align-items-center rounded `}
                    style={{
                      width: "60px",
                      height: "60px",
                      boxShadow:
                        activeTab === tab.key
                          ? "0 4px 12px rgba(13, 110, 253, 0.3)"
                          : "0 2px 6px rgba(108, 117, 125, 0.2)",
                      transition: "all 0.3s ease",
                      backgroundColor:
                        activeTab === tab.key ? "#0d6efd" : "#E6EAEE",
                      color: activeTab === tab.key ? "#fff" : "#6c757d",
                    }}
                    whileHover={{ scale: 1 }}
                  >
                    {React.cloneElement(tab.icon, {
                      color: activeTab === tab.key ? "#fff" : "#6c757d",
                    })}
                  </motion.div>

                  <h6
                    className="mb-0 text-center"
                    style={{
                      fontSize: "13px",
                      lineHeight: "1.3",
                      // color: activeTab === tab.key ? "#0d6efd" : "#6c757d",
                    }}
                  >
                    {tab.title}
                  </h6>
                </Card>
                {activeTab === tab.key && (
                  <div className="divider-line-services-tabs"></div>
                )}
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
    </>
  );
};

export default ServiceTabs;
