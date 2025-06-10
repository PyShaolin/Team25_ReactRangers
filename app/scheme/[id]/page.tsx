import { SchemeDetails } from "@/components/scheme-details"

export default function SchemeDetailsPage({ params }: { params: { id: string } }) {
  return <SchemeDetails schemeId={params.id} />
}
