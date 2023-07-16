import "../App.css";

export function Home() {
  return (
    <>
      <div className="body">
        <div className="content-text">
          <h1 className="home-title">
            Buy The Best Products Across <br /> The Whole World.
          </h1>
          <p className="home-desc">
            Shop now and join the millions of people who <br /> trust us for all
            their needs.
          </p>
          <div className="home-btn">
            <form action="/products">
              <button id="product">Products</button>
            </form>
            <form action="/contact">
              <button id="contact">Contact</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
