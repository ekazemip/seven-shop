import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import Input from '@/components/ui/input';
import CartIcon from '@/components/icons/cart-icon';
import SearchIcon from '@/components/icons/search-icon';
import ProfileIcon from '@/components/icons/profile-icon';
import Badge from '@/components/ui/badge';
import Chip from '@/components/ui/chip';
import ChipDemo from '@/components/examples/chip-demo';
import Alert from '@/components/ui/alert';
import QuantityDemo from '@/components/examples/quantity-demo';
import CheckboxDemo from '@/components/examples/checkbox-demo';
import SwitchDemo from '@/components/examples/switch-demo';
import ProductCard from '@/components/products/product-card';

export default function StyleGuidePage() {
  return (
    <main className="p-4 flex flex-col gap-8">
      <h1>راهنمای طراحی سون کالا</h1>
      <p>نمونه‌ی رنگ‌ها و اجزای رابط کاربری سون کالا</p>
      <section className="flex flex-col gap-4">
        <h2>رنگ ها</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-primary text-on-primary">رنگ اصلی</div>
          <div className="p-4 bg-soft text-link">زمینه تاکیدی</div>
          <div className="p-4 bg-surface text-text">سطح کارت</div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2>تایپوگرافی</h2>
        <div className="flex flex-col gap-4 ">
          <p className="text-body">انتخاب مطمئن برای خانه‌ی شما</p>
          <p className="text-label">محصولات لوازم خانگی را بررسی و انتخاب کنید</p>
          <p className="text-display">لوازم خانگی مطمئن</p>
          <p className="text-heading-1">پرفروش‌ترین یخچال‌ها</p>
          <p className="text-heading-2">ماشین لباسشویی ۹ کیلویی</p>
          <p className="text-heading-3">ضمانت اصالت و سلامت کالا</p>
          <p className="text-body-lg">ارسال سریع به تهران و ارسال مطمئن به سراسر کشور.</p>
          <p className="text-body">همه کالاها با گارانتی معتبر و فاکتور رسمی عرضه می‌شوند.</p>
          <p className="text-label">برند سازنده</p>
          <p className="text-caption">کد کالا: ۱۲۰۴۵</p>
          <p className="text-price">۸۴٬۹۰۰٬۰۰۰ تومان</p>
          <p className="text-body-sm">یخچال مناسب بالای ۱۰۰ میلیون تومان</p>
          <p className="text-button"> ثبت نام</p>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2>دکمه ها </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Button>
            افزودن به سبد خرید
            <CartIcon></CartIcon>
          </Button>
          <Button variant="secondary">انصراف</Button>
          <Button disabled={true}>افزودن</Button>
          <Button variant="secondary" disabled={true}>
            انصراف
          </Button>

          <Button variant="accent">
            accent
            <CartIcon></CartIcon>
          </Button>
          <Button variant="accent" disabled={true}>
            accent
            <CartIcon></CartIcon>
          </Button>

          <Button variant="ghost">
            ghost
            <CartIcon></CartIcon>
          </Button>
          <Button variant="ghost" disabled={true}>
            ghost
            <CartIcon></CartIcon>
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
        <h2>بج ها</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="accent">20% تخفیف</Badge>
          <Badge variant="success">موجود</Badge>
          <Badge variant="warning">موجودی محدود</Badge>
          <Badge variant="danger">ناموجود</Badge>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2>چیپ ها</h2>
        <div className="flex flex-wrap gap-2">
          <Chip selected={true}>یخجال و فریزر</Chip>
          <Chip selected={false}>یخجال و فریزر</Chip>
          <ChipDemo />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2>الارم ها</h2>
        <div className="flex flex-col gap-4">
          <Alert variant="warning">موجودی این کالا محدود است.</Alert>
          <Alert variant="success">سفارش شما ثبت شد.</Alert>
          <Alert variant="info">وضعیت سفارش از بخش حساب کاربری قابل پیگیری است.</Alert>
          <Alert variant="danger">ثبت سفارش ناموفق بود. دوباره تلاش کنید.</Alert>
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
          <Button variant="secondary" aria-label="جست‌و‌جو">
            <SearchIcon></SearchIcon>
          </Button>
          <Button variant="secondary" aria-label="سبد خرید">
            <CartIcon></CartIcon>
          </Button>
          <Button variant="secondary" aria-label="حساب کاربری">
            <ProfileIcon></ProfileIcon>
          </Button>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <QuantityDemo></QuantityDemo>
          <CheckboxDemo></CheckboxDemo>
          <SwitchDemo></SwitchDemo>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <ProductCard
            title="یخچال فریزر ساید بای ساید ۳۲ فوت"
            category="یخچال و فریزر"
            price={84900000}
            originalPrice={106125000}
            inStock={true}
            rating={4.7}
            reviewCount={128}
          ></ProductCard>

          <ProductCard
            title="یخچال فریزر ساید بای ساید ۲۸ فوت"
            category="یخچال و فریزر"
            price={82100000}
            inStock={true}
            rating={4.7}
            reviewCount={128}
          ></ProductCard>

          <ProductCard
            title="یخچال فریزر ساید بای ساید ۳۶ فوت"
            category="یخچال و فریزر"
            price={106125000}
            inStock={false}
            rating={4.7}
            reviewCount={128}
          ></ProductCard>
        </div>
      </section>
      <section>
        <h2>سطح شیشه ای </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 bg-primary rounded-2xl bg-linear-to-br relative from-primary to-soft overflow-hidden ">
            <div className="glass p-6 rounded-2xl border  shadow-md   relative overflow-hidden ">
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none bg-linear-to-br from-white/20 to-transparent"
              ></div>
              <div className="relative">
                <h3 className="text-text">انتخابی برای خانهی شما</h3>
                <p className="text-text">یک توضیح کوتاه </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
