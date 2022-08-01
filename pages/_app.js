import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { NextSeo } from 'next-seo';
config.autoAddCss = false;
import headshot from "../public/asset/headshot.jpg"


function MyApp({ Component, pageProps }) {


return (
  <>
  <NextSeo
  title="Wisdom Ekpotu's Portfolio"
  titleTemplate="Wisdom Ekpotu's Portfolio"
  defaultTitle="Wisdom Ekpotu's Portfolio"
  description="I’m a software engineer specializing in building exceptional digital experiences."
  canonical="https://wisdomekpotu.com"
  openGraph={{
    url: "https://wisdomekpotu.com",
    title: "Wisdom Ekpotu's Portfolio",
    description: "I’m a software engineer who loves building exceptional digital experiences on the web.",
    images: [
      {
        url: {headshot},
        width: 800,
        height: 420,
        alt: "headshot image",
      },
    ],
  }}
  twitter={{
    handle: "@wisdomekpotu",
    site: "wisdomekpotu.com",
    cardType: "summary_large_image",
  }}
/>
<Component {...pageProps} />
</>
)

}

export default MyApp
