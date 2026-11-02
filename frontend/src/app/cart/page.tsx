import BreadCrumb from "@/components/layout/breadcrumb";
export default function Cart() {
  return(
  <main className="w-full max-w-6xl mx-auto p-4 flex-1 flex flex-col gap-4">
    <BreadCrumb currentLabel="سبد خرید"></BreadCrumb>
    <h1>سبد خرید</h1>
  </main>);
}
