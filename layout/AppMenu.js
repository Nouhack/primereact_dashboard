import getConfig from 'next/config';
import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';

const AppMenu = () => {
  const { layoutConfig } = useContext(LayoutContext);
  const contextPath = getConfig().publicRuntimeConfig.contextPath;
  const model = [
    {
      label: 'Home',
      items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
      label: 'Vehicule',
      items: [
        { label: 'Gerer les vehicules', icon: 'pi pi-fw pi-circle', to: '/uikit/test' },
        { label: 'Depense energetique du vehicule', icon: 'pi pi-fw pi-circle', to: '/uikit/test' }

      ]
    },
    {
      label: 'Prime Blocks',
      items: [
        { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', to: '/blocks', badge: 'NEW' },
        { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-react', target: '_blank' }
      ]
    },
    {
      label: 'Utilities',
      items: [
        { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', to: '/utilities/icons' },
        { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: 'https://www.primefaces.org/primeflex/', target: '_blank' }
      ]
    },
    {
      label: 'Pages',
      icon: 'pi pi-fw pi-briefcase',
      to: '/pages',
      items: [
        {
          label: 'Landing',
          icon: 'pi pi-fw pi-globe',
          to: '/landing'
        },
        {
          label: 'Auth',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: 'Login',
              icon: 'pi pi-fw pi-sign-in',
              to: '/auth/login'
            },
            {
              label: 'Error',
              icon: 'pi pi-fw pi-times-circle',
              to: '/auth/error'
            },
            {
              label: 'Access Denied',
              icon: 'pi pi-fw pi-lock',
              to: '/auth/access'
            }
          ]
        },
        {
          label: 'Crud',
          icon: 'pi pi-fw pi-pencil',
          to: '/pages/crud'
        },
        {
          label: 'Timeline',
          icon: 'pi pi-fw pi-calendar',
          to: '/pages/timeline'
        },
        {
          label: 'Not Found',
          icon: 'pi pi-fw pi-exclamation-circle',
          to: '/pages/notfound'
        },
        {
          label: 'Empty',
          icon: 'pi pi-fw pi-circle-off',
          to: '/pages/empty'
        }
      ]
    },
    {
      label: 'Hierarchy',
      items: [
        {
          label: 'Submenu 1',
          icon: 'pi pi-fw pi-bookmark',
          items: [
            {
              label: 'Submenu 1.1',
              icon: 'pi pi-fw pi-bookmark',
              items: [
                { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
              ]
            },
            {
              label: 'Submenu 1.2',
              icon: 'pi pi-fw pi-bookmark',
              items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
            }
          ]
        },
        {
          label: 'Submenu 2',
          icon: 'pi pi-fw pi-bookmark',
          items: [
            {
              label: 'Submenu 2.1',
              icon: 'pi pi-fw pi-bookmark',
              items: [
                { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
              ]
            },
            {
              label: 'Submenu 2.2',
              icon: 'pi pi-fw pi-bookmark',
              items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
            }
          ]
        }
      ]
    },
    {
      label: 'Get Started',
      items: [
        {
          label: 'Documentation',
          icon: 'pi pi-fw pi-question',
          to: '/documentation'
        },
        {
          label: 'View Source',
          icon: 'pi pi-fw pi-search',
          url: 'https://github.com/primefaces/sakai-react',
          target: '_blank'
        }
      ]
    }
  ];

  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model.map((item, i) => {
          return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
        })}

        <Link href="https://www.primefaces.org/primeblocks-react">
          <a target="_blank" style={{ cursor: 'pointer' }}>
            <img alt="Prime Blocks" className="w-full mt-3" src={`${contextPath}/layout/images/banner-primeblocks${layoutConfig.colorScheme === 'light' ? '' : '-dark'}.png`} />
          </a>
        </Link>
      </ul>
    </MenuProvider>
  );
};

export default AppMenu;