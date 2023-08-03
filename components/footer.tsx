import Link from "next/link"

// import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
// import { SubscribeToNewsletterForm } from "@/components/forms/subscribe-to-newsletter-form"
import { Icons } from "@/components/icons"
// import { ThemeToggle } from "@/components/layouts/theme-toggle"
import { Shell } from "@/components/shells/shell"
import { SubscribeToNewsletterForm } from "./forms/src/components/forms/subscribe-to-newsletter-form"
import getCategories from "@/actions/get-categories"

export async function Footer() {

  const categories = await getCategories()

  return (
    <footer className="w-full border-t bg-background">
      <Shell as="div">
        <section
          id="footer-content"
          aria-labelledby="footer-content-heading"
          className="flex flex-col gap-10 lg:flex-row lg:gap-20"
        >
          <section
            id="footer-branding"
            aria-labelledby="footer-branding-heading"
          >
            <Link
              aria-label="Home"
              href="/"
              className="flex items-center space-x-2"
            >
              <Icons.logo className="h-6 w-6" aria-hidden="true" />
              {/* <span className="font-bold">{siteConfig.name}</span> */}
              <span className="font-bold">NEXT_STORE</span>
            </Link>
          </section>

          <section
            id="footer-links"
            aria-labelledby="footer-links-heading"
            className="grid flex-1 grid-cols-1 gap-10 xs:grid-cols-2 sm:grid-cols-4"
          >
            <div className="space-y-3">
              <h4 className="text-base font-medium">Categories</h4>
              <ul className="space-y-3">
                {categories.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={`/category/${link.id}`}
                      // target={link?.name ? "_blank" : undefined}
                      rel={link?.name ? "noreferrer" : undefined}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                      <span className="sr-only">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-medium">Help</h4>
              <ul className="space-y-3">
                <li className="text-sm text-muted-foreground transition-colors hover:text-foreground">About</li>
                <li className="text-sm text-muted-foreground transition-colors hover:text-foreground">Contact</li>
                <li className="text-sm text-muted-foreground transition-colors hover:text-foreground">Team</li>
                <li className="text-sm text-muted-foreground transition-colors hover:text-foreground">Support</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-medium">Policies</h4>
              <ul className="space-y-3">
                <li className="text-sm text-muted-foreground transition-colors hover:text-foreground">Career</li>
                <li className="text-sm text-muted-foreground transition-colors hover:text-foreground">Health</li>
                <li className="text-sm text-muted-foreground transition-colors hover:text-foreground">Privacy</li>
                <li className="text-sm text-muted-foreground transition-colors hover:text-foreground">Code Of Conduct</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-base font-medium">Social</h4>
              <ul className="space-y-3">
                <li className="text-sm text-muted-foreground transition-colors hover:text-foreground">Linkedin</li>
                <li className="text-sm text-muted-foreground transition-colors hover:text-foreground">Github</li>
                <li className="text-sm text-muted-foreground transition-colors hover:text-foreground">Discord</li>
                <li className="text-sm text-muted-foreground transition-colors hover:text-foreground">Facebook</li>
              </ul>
            </div>
          </section>


          <section
            id="newsletter"
            aria-labelledby="newsletter-heading"
            className="space-y-3"
          >
            <h4 className="text-base font-medium">
              Subscribe to our newsletter
            </h4>
            <SubscribeToNewsletterForm />
          </section>
        </section>
        <section
          id="footer-bottom"
          aria-labelledby="footer-bottom-heading"
          className="flex items-center space-x-4"
        >
          <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
            Built by{" "}
            <a
              aria-label="Asm Raihan"
              href="https://github.com/asmraihan"
              target="_blank"
              rel="noreferrer"
              className="font-semibold transition-colors hover:text-foreground"
            >
              Asm Raihan
            </a>
            .
          </div>
          <div className="flex items-center space-x-1">
            <Link
              // href={siteConfig.links.github}
              href='/'
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })
                )}
              >
                <Icons.gitHub className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            {/* <ThemeToggle /> */}
          </div>
        </section>
      </Shell>
    </footer>
  )
}