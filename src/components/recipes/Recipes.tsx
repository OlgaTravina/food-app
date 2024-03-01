import "./Recipes.css";
import ProductCard from '../productCard/ProductCard';
import { useGetFirstThreeTheBestRatingsRecipesQuery } from "../../services/foodApi";


function Recipes() {

  const { data: recipes } = useGetFirstThreeTheBestRatingsRecipesQuery();

  return (
    <section id="recipes" className="container-1248">
      <h1
        className="ourTopRestaurants__text"
        style={{
          textAlign: "center",
          marginTop: "100px",
          marginBottom: "70px",
        }}
      >
        Our Top <span className="highlight-text">Recipes</span>
      </h1>
      <div className="flex-center">
        {recipes?.map((recipe, i) => (
          <ProductCard
            key={i}
            imgUrl={recipe.image}
            tag={recipe.tags[0]}
            title={recipe.name}
            time={recipe.prepTimeMinutes + recipe.cookTimeMinutes + "min •"}
            rating={recipe.rating+""}
          />
        ))}
      </div>

      <hr style={{ marginTop: "232px" }} />
    </section>
  );
}
export default Recipes;
