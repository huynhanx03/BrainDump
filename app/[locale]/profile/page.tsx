"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, Quote } from "lucide-react"
import siteConfig from "@/config/site.json"
import { useTranslations } from 'next-intl'

export default function ProfilePage() {
  const t = useTranslations('Profile')

  return (
    <div className="max-w-4xl mx-auto py-20 px-6 space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-12 border-b border-primary/5 pb-16">
        <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-primary/0 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <Avatar className="h-40 w-40 border-8 border-background shadow-2xl relative">
              <AvatarImage src={siteConfig.avatar} alt={siteConfig.name} className="object-cover" />
              <AvatarFallback className="text-4xl font-black font-mono bg-primary/5 text-primary/40">
                {siteConfig.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
        </div>
        
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              {siteConfig.name}
            </h1>
            <p className="text-base font-black uppercase tracking-[0.3em] text-primary opacity-60">
              {siteConfig.title}
            </p>
          </div>
          
          {siteConfig.quote && (
            <div className="relative py-4">
              <Quote className="absolute -top-2 -left-4 h-8 w-8 text-primary/10 -z-10 rotate-12" />
              <p className="text-lg italic font-serif text-muted-foreground/80 leading-relaxed italic">
                "{siteConfig.quote}"
              </p>
            </div>
          )}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* About Section */}
        <section className="lg:col-span-8 space-y-6">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/40 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-primary/20" />
            {t('about')}
          </h2>
          <div className="prose prose-sm prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground/90 font-medium">
              {siteConfig.bio}
            </p>
          </div>
        </section>

        {/* Connect Section */}
        <section className="lg:col-span-4 space-y-8">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/40 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-primary/20" />
            {t('connect')}
          </h2>
          <div className="flex flex-col gap-3">
            <SocialLink icon={<Github className="h-5 w-5" />} href={siteConfig.social.github} label="GitHub" username="@huynhanx03" />
            <SocialLink icon={<Linkedin className="h-5 w-5" />} href={siteConfig.social.linkedin} label="LinkedIn" username="huynhnhan03" />
            <SocialLink icon={<Mail className="h-5 w-5" />} href={siteConfig.social.email} label="Email" username="Direct Message" />
          </div>
        </section>
      </div>
    </div>
  )
}

function SocialLink({ icon, href, label, username }: { icon: React.ReactNode, href: string, label: string, username: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-between p-4 bg-primary/[0.02] hover:bg-primary/[0.05] rounded-xl border border-primary/5 transition-all duration-300 group"
    >
      <div className="flex items-center gap-4">
        <div className="p-2 bg-background rounded-lg border border-primary/10 text-muted-foreground group-hover:text-primary transition-colors">
            {icon}
        </div>
        <div className="text-left">
            <p className="text-[10px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary/60 transition-colors uppercase">{label}</p>
            <p className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">{username}</p>
        </div>
      </div>
      <span className="text-primary/0 group-hover:text-primary/40 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
        →
      </span>
    </a>
  )
}
