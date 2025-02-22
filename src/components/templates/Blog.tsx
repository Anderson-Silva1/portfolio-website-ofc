import BlogContent from "../BlogContent";

const Blog = () => {
  return (
    <>
      <section className="m-auto min-h-screen w-full bg-principal" id="blog">
        <div className="m-auto w-full max-w-[1280px]">
          <BlogContent />
        </div>
      </section>
    </>
  );
};

export default Blog;
