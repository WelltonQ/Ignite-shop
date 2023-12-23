import { AppProps } from "next/app"
import Image from "next/future/image"

import { globalStyles } from "../styles/global"
import logoImg from "../assets/logo.svg"
import bagImg from "../assets/bag.svg"
import { Container, Header } from "../styles/pages/app"
import { CartProvider } from "use-shopping-cart"
import Link from "next/link"
import { Drawer } from "../components/Drawer"


globalStyles()

function App({ Component, pageProps }: AppProps) {

  const stripeKey = process.env.STRIPE_PUBLIC_KEY as string

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="Logo Ignite" />
        <Link href='/'>
          <Image src={bagImg} alt="Sacola de compras" />
        </Link>
      </Header>
      <CartProvider
        mode="payment"
        cartMode="checkout-session"
        stripe={stripeKey}
        currency="USD"
      >
        <Component {...pageProps} />
        <Drawer />
      </CartProvider>
    </Container>
  )
}

export default App