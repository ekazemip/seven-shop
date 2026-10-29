
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans ">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-surface  sm:items-start">
        <div className="bg-primary-soft text-primary"><h1>ضمانت اصالت کالا</h1></div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-foreground ">
            سون کالا
          </h1>
          <p className="max-w-md text-lg leading-8 text-muted ">
            آسایش، در انتخاب‌های شما
          </p>
        </div>

      </main>
    </div>
  );
}
