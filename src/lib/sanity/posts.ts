import { sanityFetch } from "./fetch";
import {
  ALL_POSTS_QUERY,
  POST_BY_SLUG_QUERY,
  ALL_POST_SLUGS_QUERY,
} from "../../../sanity/lib/queries";
import type { Post } from "../../../sanity/lib/types";
import { calculateReadingTime } from "../portable-text-utils";

function enrichPost(post: Post): Post {
  return {
    ...post,
    readingTime: post.body ? calculateReadingTime(post.body) : "1 min de lecture",
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await sanityFetch<Post[]>(
    ALL_POSTS_QUERY,
    {},
    { tags: ["posts"] },
  );
  return posts.map(enrichPost);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = await sanityFetch<Post | null>(
    POST_BY_SLUG_QUERY,
    { slug },
    { tags: ["posts"] },
  );
  return post ? enrichPost(post) : null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  return sanityFetch<string[]>(ALL_POST_SLUGS_QUERY, {}, { tags: ["posts"] });
}

export async function getLatestPosts(limit: number = 3): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}
