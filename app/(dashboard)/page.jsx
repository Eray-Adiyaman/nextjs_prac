import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maxime
        delectus rem nulla ut eos saepe mollitia quas perferendis modi quod
        quos, fugiat explicabo nostrum perspiciatis dignissimos optio eaque
        aliquid.
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          corrupti ex dolore rem aut dignissimos ullam quisquam exercitationem
          alias in fugiat, sequi dicta hic accusamus neque mollitia asperiores
          eaque esse.
        </p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ut tempore adipisci vero mollitia! Reprehenderit, quis aut facere
          minima corporis deleniti voluptate. Neque commodi quasi at ab. Ea,
          adipisci vero?
        </p>
      </div>
    </main>
  );
}
