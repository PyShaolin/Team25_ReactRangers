"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, User } from "lucide-react"
import { useTranslation } from 'react-i18next'
import i18n from './i18n' 
import { Globe } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { t, i18n } = useTranslation()

  const navItems = [
    { name: t('home'), href: "/" },
    { name: t('categories'), href: "/categories" },
    { name: t('checkEligibility'), href: "/eligibility" },
     // Added new item
    { name: t('assistant'), href: "/assistant"},
    { name: t('about'), href: "/about" },
    { name: t('contact'), href: "/contact" },
    { name: t('profile'), href: "/profile" },
  ]

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'mr', name: 'मराठी' }
  ]

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center mr-3">
                <Search className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">SchemeConnect</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {!isLoggedIn ? (
              <Button className="bg-teal-600 hover:bg-teal-700">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            ) : (
              <Button 
                variant="outline" 
                onClick={() => setIsLoggedIn(false)}
                className="text-teal-600 hover:text-teal-700"
              >
                <User className="w-4 h-4 mr-2" />
                Logout
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                {!isLoggedIn ? (
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                ) : (
                  <Button 
                    variant="outline" 
                    onClick={() => setIsLoggedIn(false)}
                    className="w-full text-teal-600 hover:text-teal-700"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
