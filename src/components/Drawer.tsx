import Image from 'next/image'
import React from 'react'

import imgX from '../assets/x.svg'
import { Content, DetailsBag, HeaderDrawer, ImageContainer, ContainerDrawer, Card, FooterDrawer } from '../styles/components/drawer'

export function Drawer() {
  return (
    <ContainerDrawer>
      <HeaderDrawer>
        <Image src={imgX} width={24} height={24} alt='' />
      </HeaderDrawer>
      <Content>
        <strong>Sacola de compras</strong>

        <Card>
          <ImageContainer>
            <Image src={imgX} width={94} height={94} alt='' />
          </ImageContainer>
          <DetailsBag>
            <span>Camiseta Beyond the Limits</span>
            <strong>R$ 79,90</strong>
            <button>Remover</button>
          </DetailsBag>
        </Card>

        <FooterDrawer>
            <div>
              <span>Quantidade</span>
              <span>3 itens</span>
            </div>
            <div>
              <strong>Valor total</strong>
              <strong>R$ 270.00</strong>
            </div>

            <button>Finalizar compra</button>
        </FooterDrawer>
      </Content>
    </ContainerDrawer>
  )
}
