import BreadCrumb from "@/components/layout/breadcrumb";
export default function Products() {
  return (
    <main className="w-full max-w-6xl mx-auto p-4 flex-1 flex flex-col gap-4">
      <BreadCrumb currentLabel="محصولات"></BreadCrumb>
      <h1>محصولات</h1>
    </main>
  );
}
