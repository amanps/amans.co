import BlogLink from '../components/blog-link';

export default function Page() {
  return (
    <div className="flex w-full flex-col">
      <div className="prose prose-neutral dark:prose-invert">
        <p>{`A collection of micro-tools I need on the regular. Instead of visiting websites riddled with ads, I had AI develop them for me.`}</p>
      </div>
      <BlogLink name="JSON Formatter" slug="pretty-json" />
    </div>
  );
}
