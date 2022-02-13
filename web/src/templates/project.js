import { graphql } from "gatsby";
import Project from "../components/project";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`;

const ProjectTemplate = (props) => {
  const { data, errors } = props;
  const project = data && data.project;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {project && (
        <SEO
          title={project.title || "Untitled"}
          description={toPlainText(project._rawExcerpt)}
          image={project.mainImage}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {project && <Project {...project} />}
    </Layout>
  );
};

export default ProjectTemplate;
