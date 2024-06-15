"use client";

import Link from "next/link";

interface Props {
  articles: any;
}

const ArticleItemList = ({ articles }: Props) => {
  console.log(articles);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-12">
        {articles.map((article) => (
          <Link key={article.id} href={`/${article.id}`}>
            {article.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleItemList;
