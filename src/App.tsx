
const products = [
  {
    icon: "🧁",
    title: "Homemade Baked Goods",
    description:
      "Fresh muffins, cookies, brownies and homemade breads.",
  },
  {
    icon: "🎨",
    title: "Paint Your Own Kits",
    description:
      "Choose a figurine, pick your colors and create!",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#fff9f3]">
      <header className="bg-white px-6 py-6 shadow-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <div className="text-2xl font-bold text-[#945b7b]">
            ✿ Sprinkles & Wonder
          </div>
          <span className="text-sm text-[#9b738b]">
            Homemade with Love
          </span>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-br from-pink-100 via-rose-50 to-amber-50 px-6 py-24 text-center">
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-[#945b7b] md:text-6xl">
            A Little Sweetness,
            <br />
            A Lot of Wonder
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8">
            Homemade treats and creative paint kits,
            made with love for every occasion.
          </p>

          <a
            href="#products"
            className="mt-9 inline-block rounded-full bg-[#945b7b] px-8 py-4 font-semibold text-white hover:bg-[#75405f]"
          >
            Explore What We Make
          </a>
        </section>

        <section
          id="products"
          className="mx-auto max-w-6xl px-6 py-20 text-center"
        >
          <h2 className="text-3xl font-bold text-[#945b7b]">
            Made With Love
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.title}
                className="rounded-3xl bg-white p-10 shadow-sm"
              >
                <div className="text-6xl">
                  {product.icon}
                </div>
                <h3 className="mt-5 text-2xl font-bold text-[#945b7b]">
                  {product.title}
                </h3>
                <p className="mt-4 leading-7">
                  {product.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#945b7b] px-6 py-8 text-center text-white">
        <p>© {new Date().getFullYear()} Sprinkles & Wonder</p>
        <p className="mt-2 text-sm">Homemade with Love</p>
      </footer>
    </div>
  );
}

export default App;
