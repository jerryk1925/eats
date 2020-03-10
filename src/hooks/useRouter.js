import { provide, inject } from '@vue/composition-api';

const RouterSymbol = Symbol();

export const provideRouter = (router, route) => {
  provide(RouterSymbol, { router, route });
};

export const useRouter = () => {
  const router = inject(RouterSymbol);
  if (!router) {
    alert('error');
  }

  return router;
};
