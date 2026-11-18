'use client';
import { useState } from 'react';
import Input from '../ui/input';
import Button from '../ui/button';
import Alert from '../ui/alert';
import type { FormEvent } from 'react';
import { isApiErrorResponse, isApiSuccessResponse } from '@/lib/api/guards';
export default function OtpRequestForm() {
  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [step, setStep] = useState<'request' | 'verify'>('request');
  const [submittedPhone, setSubmittedPhone] = useState('');
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isPending) {
      return;
    }
    setErrorMessage(null);
    setSuccessMessage(null);
    const formData = new FormData(event.currentTarget);
    const phoneNumber = step === 'request' ? formData.get('phone_number') : submittedPhone;
    const code = formData.get('code');
    if (typeof phoneNumber !== 'string') {
      setErrorMessage('شماره موبایل را وارد کنید.');
      return;
    }
    if (step === 'verify') {
      if (typeof code !== 'string' || code.trim() === '') {
        setErrorMessage('کد را وارد کنید.');
        return;
      }
    }
    setIsPending(true);
    try {
      const pathFetch = step === 'request' ? '/api/auth/otp/request/' : '/api/auth/otp/verify/';
      const bodyFetch =
        step === 'request' ? { phone_number: phoneNumber } : { phone_number: phoneNumber, code };
      const response = await fetch(pathFetch, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyFetch),
      });
      const body: unknown = await response.json();
      if (!response.ok) {
        if (isApiErrorResponse(body)) {
          setErrorMessage(body.error.message);
        } else {
          setErrorMessage('درخواست ناموفق بود.');
        }
        return;
      }
      if (isApiSuccessResponse(body)) {
        if (step === 'request') {
          setSuccessMessage(body.message ?? 'کد ورود ارسال شد.');
          setSubmittedPhone(phoneNumber);
          setStep('verify');
        } else {
          setSuccessMessage('ورود با موفقیت تایید شد.');
        }
      } else {
        setErrorMessage('ساختار پاسخ دریافتی معتبر نیست.');
      }
    } catch {
      setErrorMessage('ارسال درخواست انجام نشد. دوباره تلاش کنید.');
    } finally {
      setIsPending(false);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      {step === 'request' ? (
        <Input id="otp-phone" name="phone_number" label="شماره موبایل" key="phone" />
      ) : (
        <div>
          <p>کد راسال شده برای {submittedPhone}را وارد کنید</p>
          <Input id="otp-code" name="code" label="کد ارسال شده" key="code" />
        </div>
      )}
      {errorMessage !== null && <Alert variant="danger">{errorMessage}</Alert>}
      {successMessage !== null && <Alert variant="success">{successMessage}</Alert>}
      {step === 'request' ? (
        <Button type="submit" disabled={isPending}>
          {isPending ? 'درحال ارسال....' : 'دریافت کد ورود'}{' '}
        </Button>
      ) : (
        <Button type="submit" disabled={isPending}>
          {isPending ? 'در حال ارسال…' : 'تأیید کد ورود'}
        </Button>
      )}
    </form>
  );
}
