import Link from "next/link"


const notfound = () => {
  return (
    <div>
      <h1>page not found </h1>
      <Link href="/">return to HomePage</Link>
    </div>
  )
}

export default notfound
