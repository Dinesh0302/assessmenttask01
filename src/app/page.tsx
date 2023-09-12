import Link  from 'next/link'

export default function Home() {
  return (
    <main className=" homepage">
      <div className='homepage'>
        <h1>Welcome to the Assessment task</h1>
        
        <Link href="/users">Click here to see all the Users List</Link>
      </div>
    </main>
  )
}
