import { allArticles } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo } from 'next-seo';
import Detail  from '../../components/Article/Detail';

const usedcomponents = {};

const SinglePost = ({ article }) => {
  console.log(article);
  const MDXContent = useMDXComponent(article.body.code);

  return (
    <>
      <NextSeo title={article.title} description={article.seoDescription} />

      <Detail
        image={article.image}
        title={article.title}
        category={article.category}
        author={article.author}
      >
        <MDXContent components={usedcomponents} />
      </Detail>
    </>
  );
};

export default SinglePost;

export async function getStaticPaths() {
  return {
    paths: allArticles.map((article) => ({
      params: { slug: article.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = allArticles.find((article) => article.slug === params.slug);

  return { props: { article } };
}
