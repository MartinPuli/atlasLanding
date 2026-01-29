"use client";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/icons/Icon";
import { Language, content, socialLinks } from "@/lib/content";

interface FooterSectionProps {
  lang: Language;
}

export function FooterSection({ lang }: FooterSectionProps) {
  const t = content[lang].footer;

  return (
    <footer id="footer" className="relative py-20 sm:py-28 lg:py-36 bg-black/60">
      <Container>
        <div className="flex flex-col items-center text-center gap-10 sm:gap-14 lg:gap-20">
          {/* Logo */}
          <a 
            href="#" 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text"
          >
            Atlas One
          </a>

          {/* Tagline */}
          <p className="
            text-lg sm:text-xl md:text-2xl
            text-muted max-w-2xl
            leading-relaxed
          ">
            {t.tagline}
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 sm:gap-8">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20
                  rounded-2xl sm:rounded-3xl
                  bg-white/5 hover:bg-white/10
                  border border-white/10 hover:border-accent/30
                  flex items-center justify-center
                  text-muted hover:text-accent
                  transition-all duration-300
                  hover:scale-110
                "
                aria-label={social.name}
              >
                <Icon 
                  type={social.icon} 
                  className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" 
                />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Copyright */}
          <p className="text-sm sm:text-base text-muted/60">
            {t.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
