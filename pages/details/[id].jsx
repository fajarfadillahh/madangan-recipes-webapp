import Link from "next/link";
import axios from "axios";

import Layout from "@/components/layout";
import Image from "next/image";

export default function DetailsRecipe({ recipe }) {
  return (
    <Layout className="pt-8">
      <section className="grid gap-16">
        <Link
          href="/"
          className="w-max rounded-xl border-[2px] border-gray-200 px-6 py-2 text-[14px] font-semibold text-gray-900 hover:bg-gray-50"
        >
          Kembali
        </Link>

        <h1 className="mx-auto max-w-[700px] text-center text-[42px] font-extrabold leading-[115%] text-gray-900">
          {recipe.name}
        </h1>

        <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-16">
          <Image
            src={recipe.image}
            alt="image"
            width={1000}
            height={1000}
            priority={true}
            className="aspect-square rounded-2xl"
          />

          <div className="grid gap-6">
            <div className="grid gap-2">
              <h3 className="text-3xl font-bold text-gray-900">Instructions</h3>
              <p className="font-medium leading-[160%] text-gray-500">
                {recipe.instructions.join(" ")}
              </p>
            </div>

            <div className="grid gap-2">
              <h3 className="text-3xl font-bold text-gray-900">Ingredients</h3>
              <ul className="grid list-disc gap-1">
                {recipe.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="ml-5 font-medium leading-[160%] text-gray-500"
                  >
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-start gap-8">
              {[
                ["Difficulty", `${recipe.difficulty}`],
                ["Cuisine", `${recipe.cuisine}`],
                ["Calories", `${recipe.caloriesPerServing}`],
              ].map(([text, value], index) => (
                <div key={index} className="grid gap-0.5">
                  <p className="text-sm font-medium text-gray-500">{text}</p>
                  <h4 className="text-[20px] font-bold text-gray-900">
                    {value}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/recipes/${params.id}`,
    );
    const recipe = await response.data;

    return {
      props: {
        recipe,
      },
    };
  } catch (error) {
    console.error(error);

    return null;
  }
}
