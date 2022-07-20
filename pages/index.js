import { commerce } from '../lib/commerce';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';


export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const {data: categories} = await commerce.categories.list();
  const {data: products} = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  }
};

export default function Index({ merchant, products, categories }) {

    return (
        <>
            <h1>{merchant.data[0].name}</h1>
            <CategoryList categories={categories} />
            <ProductList products={products} />
        </>
        )
  };