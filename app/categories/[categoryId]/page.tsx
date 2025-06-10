import { CategorySchemesPage } from "@/components/category-schemes-page"

export default function CategorySchemes({ params }: { params: { categoryId: string } }) {
  return <CategorySchemesPage categoryId={params.categoryId} />
}
