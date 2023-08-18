import { notFound, redirect } from "next/navigation";

import { Post, User } from "@/lib/prisma";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { authOptions } from "@/lib/auth";

import { Editor } from "@/components/editor";

async function getPostForUser(postId: Post["id"], userId: User["id"]) {
  return await db.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  });
}

interface EditorPageProps {
  params: { postId: string };
}

export default async function EditorPage({ params }: EditorPageProps) {
  const user = await getCurrentUser();

  if (!user) {
    return redirect(authOptions.pages.signIn);
  }

  const post = await getPostForUser(params.postId, user.id);

  if (!post) {
    notFound();
  }

  return (
    <Editor
      post={{
        id: post.id,
        title: post.title,
        content: post.content,
        published: post.published,
      }}
    />
  );
}
