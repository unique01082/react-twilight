import React from 'react'
import { withTwilight } from 'react-twilight'

const Box = withTwilight('div')
const Paragraph = withTwilight('p')
const Image = withTwilight('img')
const Span = withTwilight('span')
const Button = withTwilight('button')

const Sample = () => (
  <Box
    px={{ sm: 8 }}
    py={{ sm: 12, md: 16 }}
    display='grid'
    gridTemplateColumns={[1, 2]}
    gridColumnGap={{ sm: 8 }}
    fontFamily='Inter'
  >
    <Box
      position='relative'
      zIndex='10'
      bgImage={{ sm: 'none' }}
      pt={40}
      px={4}
      pb={3}
      gridColumnStart={1}
      gridRowStart={1}
      background='linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)'
    >
      <Paragraph
        color={['white', 'gray.500']}
        textSize='sm'
        fontWeight='medium'
        mb={{ sm: 1 }}
      >
        Entire house
      </Paragraph>
      <Box
        as='h2'
        color={['white', 'black']}
        textSize={['xl', '2xl', '3xl']}
        fontWeight='semibold'
        lineHeight={{ sm: 7 }}
      >
        Beach House in Collingwood
      </Box>
    </Box>
    <Box px={4} pb={{ sm: 16 }} gridColumnStart={1} gridRowStart={2}>
      <Box
        textSize='sm'
        fontWeight='medium'
        my={5}
        mt={{ sm: 2 }}
        mb={{ sm: 4 }}
        display='flex'
        alignItems='center'
      >
        <Box color='violet.600'>
          <svg width='20' height='20' fill='currentColor'>
            <path d='M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z' />
          </svg>
        </Box>
        <Box ml={1}>
          <Span color='black'>4.94</Span>
          <Span display={{ sm: 'none', md: 'inline' }}>(128)</Span>
        </Box>
        <Box textSize='base' fontWeight='normal' mx={2}>
          ·
        </Box>
        <Box>Collingwood, Ontario</Box>
      </Box>
      <Box
        as='hr'
        display={{ _default: 'none', sm: 'block' }}
        w={16}
        borderColor='gray.300'
      />
    </Box>
    {/* https://developer.mozilla.org/en-US/docs/Web/CSS/@property */}
    <Box px={4} gridColumnStart={1} gridRowStart={3}>
      <Paragraph
        color='black'
        textSize='sm'
        fontWeight='medium'
        display='flex'
        alignItems='center'
      >
        <Image
          src='https://tailwindcss.com/_next/static/media/kevin-francis.c9970f19128315df0cfda2b4f54eb981.jpg'
          alt=''
          bg='gray.100'
          mr={2}
          w={6}
          h={6}
          borderRadius='full'
        />
        Hosted by Kevin Francis
      </Paragraph>
      <Button
        color='violet.700'
        bg='violet.100'
        type='button'
        textSize='base'
        px={6}
        py={2}
        fontWeight='semibold'
        borderRadius='lg'
      >
        Check availability
      </Button>
    </Box>
    <Box
      display='flex'
      gridColumnStart={[1, 2]}
      gridRowStart={1}
      gridRow={{ sm: 'span-3' }}
    >
      <Box
        w='full'
        display='grid'
        gridTemplateColumns={3}
        gridTemplateRows={2}
        gridGap={2}
      >
        <Box
          position='relative'
          gridColumn={['span-3', 'span-2']}
          gridRow='span-2'
        >
          <Image
            src='https://tailwindcss.com/_next/static/media/beach-house.dc0f86781422bcb8f89e64d49cd7adf6.jpg'
            alt=''
            bg='gray.100'
            size='full'
            position='absolute'
            borderRadius={{ sm: 'lg' }}
            inset={0}
            objectFit='cover'
          />
        </Box>
        <Box display={{ _default: 'none', md: 'block' }} position='relative'>
          <Image
            src='	https://tailwindcss.com/_next/static/media/beach-house-interior.13945f821153afd28151b5dac3e5d713.jpg'
            alt=''
            bg='gray.100'
            size='full'
            position='absolute'
            borderRadius='lg'
            inset={0}
            objectFit='cover'
          />
        </Box>
        <Box display={{ _default: 'none', md: 'block' }} position='relative'>
          <Image
            src='https://tailwindcss.com/_next/static/media/beach-house-view.bf6f10434bf4589aebba4d3c33834cc2.jpg'
            alt=''
            bg='gray.100'
            size='full'
            position='absolute'
            borderRadius='lg'
            inset={0}
            objectFit='cover'
          />
        </Box>
      </Box>
    </Box>
  </Box>
)

export default Sample
