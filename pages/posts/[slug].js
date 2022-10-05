import Head from 'next/head';
import { getPostFromSlug, getSlugs } from '../../src/api';

const Post = ({ post }) => {
  return (
    <div>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <h1 className='text-4xl text-fuchsia-500 font-sans font-semibold select-none tracking-tight'>
        {post.meta.title}
      </h1>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, meta } = getPostFromSlug(slug);
  // const mdxSource = await serialize(content);

  return { props: { post: { meta } } };
};

export const getStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export default Post;
