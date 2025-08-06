'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Menu, Contact, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

import LogoPath from '@/assets/logo.png';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    {
      name: 'Contact Us',
      href: 'mailto:hello@streetchat.app?subject=Support',
      icon: Contact,
    },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
          : 'bg-white'
      )}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link href='/' className='flex items-center space-x-2'>
              <Image
                src={LogoPath}
                alt='streetchat logo'
                className='w-[27px] h-[25px] md:w-10 md:h-9'
              />

              <h1 className='text-xl font-bold text-green-800 font-mono'>
                Streetchat
              </h1>
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className='hidden md:flex items-center space-x-4'>
            <nav className='hidden md:flex items-center space-x-8'>
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group'
                >
                  {item.name}
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full'></span>
                </Link>
              ))}
            </nav>

            <div className='mr-2' />

            <Link href={'https://streetchat.app/auth/sign-in'} passHref>
              <Button
                size='sm'
                variant={'outline'}
                className='hover:cursor-pointer'
              >
                Sign In
              </Button>
            </Link>

            <Link href={'https://streetchat.app/auth/sign-up'} passHref>
              <Button
                size='sm'
                className=' bg-green-500 hover:bg-green-600 hover:cursor-pointer'
              >
                {' '}
                Sign Up{' '}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className='flex md:hidden'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant='ghost' size='md' className='p-2'>
                  <Menu size={25} />
                  <span className='sr-only'>Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
                <div className='flex flex-col h-full'>
                  {/* Mobile Header */}
                  <div className='flex items-center justify-between p-4 border-b border-green-600'>
                    <Link
                      href='/'
                      className='flex items-center space-x-2'
                      onClick={() => setIsOpen(false)}
                    >
                      <Image
                        src={LogoPath}
                        alt='streetchat logo'
                        className='w-[27px] h-[25px]'
                      />
                      <span className='font-bold text-xl'>Streetchat</span>
                    </Link>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className='flex flex-col py-6 space-y-1'>
                    {navigationItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <SheetClose key={item.name} asChild>
                          <Link
                            href={item.href}
                            className='flex items-center space-x-3 px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors duration-200'
                          >
                            <IconComponent className='h-5 w-5' />
                            <span>{item.name}</span>
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </nav>

                  {/* Mobile CTA Buttons */}
                  <div className='mt-auto p-3 border-t space-y-3 border-green-600'>
                    <Link href={'https://streetchat.app/auth/sign-in'} passHref>
                      <Button variant='outline' className='w-full '>
                        Sign In
                      </Button>
                    </Link>

                    <div className='mt-2 md:mt-0'>
                      <Link
                        href={'https://streetchat.app/auth/sign-up'}
                        passHref
                      >
                        <Button className='w-full bg-green-500'>Sign Up</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
