import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import Input from '@/components/ui/input';
import { Search, ShoppingCart, User } from 'lucide-react';
export default function StyleGuidePage() {
  return (
    <main className="p-4 flex flex-col gap-8">
      <h1>راهنمای طراحی سون کالا</h1>
      <p>نمونه‌ی رنگ‌ها و اجزای رابط کاربری سون کالا</p>
      <section className="flex flex-col gap-4">
        <h2>رنگ ها</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-primary text-on-primary">رنگ اصلی</div>
          <div className="p-4 bg-primary-soft text-primary">زمینه تاکیدی</div>
          <div className="p-4 bg-surface text-foreground">سطح کارت</div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2>تایپوگرافی</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <h3 className="font-bold text-2xl">انتخاب مطمئن برای خانه‌ی شما</h3>
          <p className="text-base">محصولات لوازم خانگی را بررسی و انتخاب کنید</p>
          <p className="text-muted text-sm">اطلاعات ارسال در مرحله‌ی بعد نمایش داده می‌شود</p>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2>دکمه ها </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Button>
            افزودن به سبد خرید
            <ShoppingCart size={20}></ShoppingCart>
          </Button>
          <Button variant="secondary">انصراف</Button>
          <Button disabled={true}>افزودن</Button>
          <Button variant="secondary" disabled={true}>
            انصراف
          </Button>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2>اینپوت ها</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Input id="phone" label="phone" placeholder="phone number" />
          <Input id="name" label="name" placeholder="name" disabled={true} />
          <Input id="code" label="code" error="your code must be 10 " />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2>کارت ها</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3>خلاصه سفارش</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque eaque assumenda quod,
              facilis ea fugit!
            </p>
            <Button variant="secondary">کارت</Button>
          </Card>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Button variant="secondary" aria-label='جست‌و‌جو'>
            <Search ></Search>
          </Button>
          <Button variant="secondary" aria-label='سبد خرید'>
            <ShoppingCart></ShoppingCart>
          </Button>
          <Button variant="secondary" aria-label='حساب کاربری'>
            <User></User>
          </Button>
        </div>
      </section>
      <section>
        <h2>سطح شیشه ای </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 bg-primary rounded-2xl bg-linear-to-br relative from-primary to-primary-soft overflow-hidden ">
            <div className="glass p-6 rounded-2xl border  shadow-md   relative overflow-hidden ">
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none bg-linear-to-br from-white/20 to-transparent"
              ></div>
              <div className="relative">
                <h3 className="text-foreground">انتخابی برای خانهی شما</h3>
                <p className="text-foreground">یک توضیح کوتاه </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
