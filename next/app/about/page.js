const fetchExample = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

export default async function About ({ params }) {
  const posts = await fetchExample()

  return (
    <>
      <h1>About - Related Posts</h1>
      <section>
        {posts.slice(0, 5).map(post => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </section>
    </>
  )
}
