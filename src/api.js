import path from 'path';
import { sync } from 'glob';
import fs from 'fs';
import matter from 'gray-matter';

const POSTS_PATH = path.join(process.cwd(), 'posts').replace(/\\/g, '/');

export const getSlugs = () => {
  const paths = sync(`${POSTS_PATH}/*.md`);

  return paths.map((path) => {
    const parts = path.split('/');
    const [slug, _ext] = parts[parts.length - 1].split('.');
    return slug;
  });
};

export const getAllPosts = () => {
  const posts = getSlugs().map((slug) => getPostFromSlug(slug));
  return posts;
};

export const getPostFromSlug = (slug) => {
  const postPath = path.join(POSTS_PATH, `${slug}.md`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      title: data.title,
      // excerpt: data.excerpt,
      // date: data.date.toString(),
    },
  };
};
