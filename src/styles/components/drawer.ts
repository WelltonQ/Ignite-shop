import { styled } from "..";

export const ContainerDrawer = styled('div', {
  background: '$gray800',
  width: '480px',
  height: '100%',
  position: 'absolute',
  right: 0,
  top: 0,
})

export const HeaderDrawer = styled('header', {
  display: 'flex',
  justifyContent: 'flex-end',
  paddingTop: '24px',
  paddingRight: '24px',

  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  }
})

export const Content = styled('div', {
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',

  strong: {
    fontSize: '20px'
  }
})

export const Card = styled('div', {
  display: 'flex',
  gap: 10,
  fontSize: '18px',
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
  position: 'absolute',
  bottom: 0,
  padding: '48px',
  width: '100%',
  gap: '7px',
  
  div: {
    display: 'flex',
    justifyContent: 'space-between',

    strong: {
      fontSize: '18px',

      '&:nth-of-type(2)': {
        fontSize: '24px',
      }
    }
  },

  button: {
    background: '$green500',
    color: '$white',
    padding: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.5s',
    marginTop: '57px',

    '&:hover': {
      background: '$green300',
    }
  }
})