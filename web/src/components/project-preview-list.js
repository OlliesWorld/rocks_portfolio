import * as styles from "./project-preview-list.module.css";
import ProjectPreview from "./project-preview";
import { Link } from "gatsby";
import React from "react";

function ProjectPreviewGrid(props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map((node) => (
            <li key={node.id}>
              <ProjectPreview {...node} isInList />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

ProjectPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default ProjectPreviewGrid;
