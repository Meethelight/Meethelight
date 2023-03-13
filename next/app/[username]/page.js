export default function User ({ params }) {
  const { username } = params

  return <h1>Username: {username}</h1>
}
