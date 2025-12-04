import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadComponent: () => import('./Pages/home/home.component').then(m => m.HomeComponent), title: 'Home page' },
  { path: 'about', loadComponent: () => import('./Pages/about/about.component').then(m => m.AboutComponent), title: 'About page' },
  { path: 'contact', loadComponent: () => import('./Pages/contact/contact.component').then(m => m.ContactComponent), title: 'Contact page' },
  { path: 'blog', loadComponent: () => import('./Pages/blog/blog.component').then(m => m.BlogComponent), title: 'Blog page' },

  { path: 'register', loadComponent: () => import('./Pages/register/register.component').then(m => m.RegisterComponent), title: 'Register' },

  { path: 'product', loadComponent: () => import('./Pages/product/product.component').then(m => m.ProductComponent), title: 'Product page' },
  { path: 'product/:id', loadComponent: () => import('./Pages/product/product-detail.component').then(m => m.ProductDetailComponent), title: 'Product Details' },
  { path: 'store', loadComponent: () => import('./Pages/store/store.component').then(m => m.CandelsComponent), title: 'Store' },
  { path: 'login', loadComponent: () => import('./log-in/log-in.component').then(m => m.LogInComponent), title: 'Log In' },
  {
    path: 'dashbord',
    loadComponent: () => import('./Pages/dashbord/dashbord.component').then(m => m.DashbordComponent),
    title: 'Dashbord page',
    children: [
      { path: 'state', loadComponent: () => import('./Pages/dashbord/state/state.component').then(m => m.StateComponent) },
      { path: 'uesrs', loadComponent: () => import('./Pages/dashbord/uesrs/uesrs.component').then(m => m.UesrsComponent) },
      { path: 'apps', loadComponent: () => import('./Pages/dashbord/apps/apps.component').then(m => m.AppsComponent) }
    ]
  },

  { path: '**', loadComponent: () => import('./Pages/notfound/notfound.component').then(m => m.NotfoundComponent) }
];
