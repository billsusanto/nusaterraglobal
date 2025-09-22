import { Metadata } from "next";
import { getProductById, getOtherProducts, products } from "../../lib/products";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";

interface ProductDetailPageProps {
  params: { productId: string };
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { productId } = await params;
  const product = getProductById(productId as string);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: `${product.name} - Nusaterra Global Resources`,
    description: product.description.substring(0, 160),
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }));
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { productId } = await params;
  const product = getProductById(productId as string);
  if (!product) {
    return notFound();
  }
  const otherProducts = getOtherProducts(productId as string);
  return (
    <ProductDetailClient product={product} otherProducts={otherProducts} />
  );
}
