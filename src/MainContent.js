import React from "react";
import "./MainContent.css"; 
import Footer from "./Footer";
import content from "./content.json";

function MainContent({ selectedItem, searchTerm, isSidebarCollapsed }) {
 
  const TabbedParagraph = ({
    text,
    isTabbed,
    searchTerm,
    highlightSearchTerm,
  }) => {
    const style = {
      paddingLeft: isTabbed ? "2em" : "0",
    };

    return <p style={style}>{highlightSearchTerm(text, searchTerm)}</p>;
  };

  const highlightSearchTerm = (text, term) => {
    if (!term) return text;
    const parts = text.split(new RegExp(`(${term})`, "gi"));
    return (
      <>
        {parts.map((part, index) => (
          <span
            key={index}
            className={
              part.toLowerCase() === term.toLowerCase() ? "highlight" : ""
            }
          >
            {part}
          </span>
        ))}
      </>
    );
  };

  const renderContent = (selectedItem) => {
    const itemContent = content[selectedItem];
    if (!itemContent) return null;

    return (
      <div>

        {itemContent.heading && <h2>{itemContent.heading}</h2>}
        {itemContent.image1 && (
          <img src={itemContent.image1} alt={itemContent.heading} />
        )}
        {itemContent.paragraphs &&
          itemContent.paragraphs.length > 0 &&
          itemContent.paragraphs.map((paragraph, index) => (
            <TabbedParagraph
              key={index}
              text={paragraph}
              isTabbed={paragraph.startsWith("●")}
              searchTerm={searchTerm}
              highlightSearchTerm={highlightSearchTerm}
            />
          ))}
        {itemContent.image2 && (
          <img
            src={itemContent.image2}
            alt={itemContent.heading}
            className="content-image"
          />
        )}
        {itemContent.paragraphs2 &&
          itemContent.paragraphs2.length > 0 &&
          itemContent.paragraphs2.map((paragraph, index) => (
            <TabbedParagraph
              key={index}
              text={paragraph}
              isTabbed={paragraph.startsWith("●")}
              searchTerm={searchTerm}
              highlightSearchTerm={highlightSearchTerm}
            />
          ))}

        {itemContent.bulletPoints && (
          <ul>
            {itemContent.bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
        {itemContent.homeimage && (
          <img
            src={itemContent.homeimage}
            alt={itemContent.heading}
            className="content-homeimage"
          />
        )}

        {itemContent.image && (
          <img
            src={itemContent.image}
            alt={itemContent.heading}
            className="content-image"
          />
        )}

        {itemContent.paragraphs1 &&
          itemContent.paragraphs1.length > 0 &&
          itemContent.paragraphs1.map((paragraph, index) => (
            <TabbedParagraph
              key={index}
              text={paragraph}
              isTabbed={paragraph.startsWith("●")}
              searchTerm={searchTerm}
              highlightSearchTerm={highlightSearchTerm}
            />
          ))}

        {itemContent.image3 && (
          <img
            src={itemContent.image3}
            alt={itemContent.heading}
            className="content-image"
          />
        )}
        <Footer />
      </div>
    );
  };
  return (
    <div
      className="main-content"
      style={{ marginLeft: isSidebarCollapsed ? "4%" : "20%" }}
    >
      {renderContent(selectedItem)}
    </div>
  );
}

export default MainContent;
