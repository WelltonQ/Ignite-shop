import { styled } from "..";

export const ContainerDrawer = styled('div', {
  background: '$gray800',
  width: '480px',
  height: '100vh',
  position: 'absolute',
  right: 0,
  top: 0,
  padding: '24px',
})

export const HeaderDrawer = styled('header', {
  display: 'flex',
  justifyContent: 'flex-end',
})

export const Content = styled('div', {
  padding: '24px',
  height: '100%',
  
  strong: {
    fontSize: '20px'
  }
})

export const Card = styled('div', {
  display: 'flex',
  gap: 10,
  fontSize: '18px',
  marginTop: '32px',

})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 102,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',


  img: {
    objectFit: 'cover',
  }
});

export const DetailsBag = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'space-between',


  button: {
    fontSize: '16px',
    border: 0,
    background: 'transparent',
    color: '$green500',
    fontWeight: 'bold',
    cursor: 'pointer',
    
    '&:hover': {
      color: '$green300',
    }
  }
})

export const FooterDrawer = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  marginTop: 'auto',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
  }
})