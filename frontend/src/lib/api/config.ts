const backendUrl = process.env.DJANGO_API_BASE_URL;

if (!backendUrl){
  throw new Error('DJANGO_API_BASE_URL is not configured');
}
export { backendUrl };
