import React from 'react'
import { ThemeProvider, withTwilight } from 'react-twilight'
import tailwindcssTheme from './tailwindcssTheme'

const Box = withTwilight('div')
const Image = withTwilight('img')
const Form = withTwilight('form')
const List = withTwilight('ul')
const Item = withTwilight('li')
const DescriptionList = withTwilight('dl')
const DescriptionTitle = withTwilight('dt')
const DescriptionDetail = withTwilight('dd')
const Svg = withTwilight('svg')

const Sample = () => (
  <ThemeProvider theme={tailwindcssTheme}>
    <Box
      as='section'
      px={[4, 6, 6, 4, 6]}
      pt={4}
      pb={[4, 6, 6, 4, 6]}
      fontFamily='Inter'
      class='space-y-4'
    >
      <Box
        as='header'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        <Box
          as='h2'
          textSize='lg'
          fontWeight='medium'
          color='black'
          lineHeight={6}
        >
          Projects
        </Box>
        <Box
          display='flex'
          alignItems='center'
          color='lightBlue.600'
          px={4}
          py={2}
          fontWeight='medium'
          textSize='sm'
          bg='lightBlue.100'
          borderRadius='md'
          // hover group
          hover={{ bg: 'lightBlue.100', color: 'lightBlue.800' }}
          class='group cursor-pointer'
        >
          <Svg
            width='12'
            height='20'
            fill='currentColor'
            ignoreProps={['width', 'height', 'fill']}
            mr={2}
            color='lightBlue.500'
            class='group-hover:text-light-blue-600'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z'
            ></path>
          </Svg>
          New
        </Box>
      </Box>
      <Form position='relative'>
        <Svg
          width='20'
          height='20'
          fill='currentColor'
          ignoreProps={['width', 'height', 'fill']}
          position='absolute'
          left={3}
          top={1 / 2}
          color='gray.400'
          class='transform -translate-y-1/2'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
          ></path>
        </Svg>
        <Box
          as='input'
          type='text'
          aria-label='Filter projects'
          placeholder='Filter projects'
          width='full'
          textSize='sm'
          color='black'
          borderColor='gray.200'
          borderRadius='md'
          py={2}
          pl={10}
          class='placeholder-gray-500 border focus:border-light-blue-500 focus:outline-none focus:ring-1 focus:ring-light-blue-500'
        />
      </Form>
      <List display='grid' gridGap={4} gridTemplateColumns={[1, 2, 2, 1, 2]}>
        <Item>
          <Box
            borderWidth={1}
            borderColor='gray.200'
            borderRadius='lg'
            p={4}
            hover={{
              bg: 'lightBlue.500',
              borderColor: 'transparent',
              boxShadow: 'lg'
            }}
            cursor='pointer'
            class='group'
          >
            <DescriptionList
              display={['grid', 'block', 'block', 'grid', 'block']}
              gridTemplateColumns={2}
              gridTemplateRows={2}
              alignItems='center'
            >
              <Box>
                <DescriptionTitle class='sr-only'>Title</DescriptionTitle>
                <DescriptionDetail
                  color='black'
                  lineHeight={6}
                  fontSize='medium'
                  class='group-hover:text-white'
                >
                  API Integration
                </DescriptionDetail>
              </Box>
              <Box>
                <DescriptionTitle class='sr-only'>Category</DescriptionTitle>
                <DescriptionDetail
                  textSize='sm'
                  mb={{ sm: 4, lg: 0, xl: 4 }}
                  fontWeight='medium'
                  class='group-hover:text-light-blue-200 '
                >
                  Engineering
                </DescriptionDetail>
              </Box>
              <Box class='col-start-2 row-start-1 row-end-3'>
                <DescriptionTitle class='sr-only'>Users</DescriptionTitle>
                <DescriptionDetail
                  display='flex'
                  justifyContent={[
                    'flex-end',
                    'flex-start',
                    'flex-start',
                    'flex-end',
                    'flex-start'
                  ]}
                  class='-space-x-2'
                >
                  <Image
                    src='https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80'
                    alt=''
                    loading='lazy'
                    width={16}
                    height={16}
                    size={7}
                    borderRadius='full'
                    borderWidth={2}
                    bg='gray.100'
                    borderColor='white'
                  />
                  <Image
                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80'
                    alt=''
                    loading='lazy'
                    width={16}
                    height={16}
                    size={7}
                    borderRadius='full'
                    borderWidth={2}
                    bg='gray.100'
                    borderColor='white'
                  />
                  <Image
                    src='https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80'
                    alt=''
                    loading='lazy'
                    width={16}
                    height={16}
                    size={7}
                    borderRadius='full'
                    borderWidth={2}
                    bg='gray.100'
                    borderColor='white'
                  />
                  <Image
                    src='https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80'
                    alt=''
                    loading='lazy'
                    width={16}
                    height={16}
                    size={7}
                    borderRadius='full'
                    borderWidth={2}
                    bg='gray.100'
                    borderColor='white'
                  />
                  <Image
                    src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80'
                    alt=''
                    loading='lazy'
                    width={16}
                    height={16}
                    size={7}
                    borderRadius='full'
                    borderWidth={2}
                    bg='gray.100'
                    borderColor='white'
                  />
                </DescriptionDetail>
              </Box>
            </DescriptionList>
          </Box>
        </Item>
        <Item>
          <Box class='group cursor-pointer rounded-lg p-4 border border-gray-200 hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg'>
            <DescriptionList class='grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center'>
              <Box>
                <DescriptionTitle class='sr-only'>Title</DescriptionTitle>
                <DescriptionDetail
                  lineHeight={6}
                  fontSize='medium'
                  color='black'
                  class='group-hover:text-white'
                >
                  New Benefits Plan
                </DescriptionDetail>
              </Box>
              <Box>
                <DescriptionTitle class='sr-only'>Category</DescriptionTitle>
                <DescriptionDetail class='text-sm font-medium group-hover:text-light-blue-200 sm:mb-4 lg:mb-0 xl:mb-4'>
                  Human Resources
                </DescriptionDetail>
              </Box>
              <Box class='col-start-2 row-start-1 row-end-3'>
                <DescriptionTitle class='sr-only'>Users</DescriptionTitle>
                <DescriptionDetail class='flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2'>
                  <Image
                    src='https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80'
                    alt=''
                    loading='lazy'
                    width={16}
                    height={16}
                    size={7}
                    borderRadius='full'
                    borderWidth={2}
                    bg='gray.100'
                    borderColor='white'
                  />
                  <Image
                    src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80'
                    alt=''
                    loading='lazy'
                    width={16}
                    height={16}
                    size={7}
                    borderRadius='full'
                    borderWidth={2}
                    bg='gray.100'
                    borderColor='white'
                  />
                  <Image
                    src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80'
                    alt=''
                    loading='lazy'
                    width={16}
                    height={16}
                    size={7}
                    borderRadius='full'
                    borderWidth={2}
                    bg='gray.100'
                    borderColor='white'
                  />
                  <Image
                    src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80'
                    alt=''
                    loading='lazy'
                    width={16}
                    height={16}
                    size={7}
                    borderRadius='full'
                    borderWidth={2}
                    bg='gray.100'
                    borderColor='white'
                  />
                  <Image
                    src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80'
                    alt=''
                    loading='lazy'
                    width={16}
                    height={16}
                    size={7}
                    borderRadius='full'
                    borderWidth={2}
                    bg='gray.100'
                    borderColor='white'
                  />
                </DescriptionDetail>
              </Box>
            </DescriptionList>
          </Box>
        </Item>
        <Item class='hidden sm:block lg:hidden xl:block'>
          <Box class='group cursor-pointer rounded-lg p-4 border border-gray-200 hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg'>
            <DescriptionList class='grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center'>
              <Box>
                <DescriptionTitle class='sr-only'>Title</DescriptionTitle>
                <DescriptionDetail class='leading-6 font-medium text-black group-hover:text-white'>
                  Onboarding Emails
                </DescriptionDetail>
              </Box>
              <Box>
                <DescriptionTitle class='sr-only'>Category</DescriptionTitle>
                <DescriptionDetail class='text-sm font-medium group-hover:text-light-blue-200 sm:mb-4 lg:mb-0 xl:mb-4'>
                  Customer Success
                </DescriptionDetail>
              </Box>
              <Box class='col-start-2 row-start-1 row-end-3'>
                <DescriptionTitle class='sr-only'>Users</DescriptionTitle>
                <DescriptionDetail class='flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2'>
                  <Image
                    src='https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80'
                    alt=''
                    loading='lazy'
                    width={16}
                    height={16}
                    size={7}
                    borderRadius='full'
                    borderWidth={2}
                    bg='gray.100'
                    borderColor='white'
                  />
                  <Image
                    src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80'
                    alt=''
                    loading='lazy'
                    width={16}
                    height={16}
                    size={7}
                    borderRadius='full'
                    borderWidth={2}
                    bg='gray.100'
                    borderColor='white'
                  />
                  <Image
                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80'
                    alt=''
                    loading='lazy'
                    width={16}
                    height={16}
                    size={7}
                    borderRadius='full'
                    borderWidth={2}
                    bg='gray.100'
                    borderColor='white'
                  />
                  <Image
                    src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80'
                    alt=''
                    loading='lazy'
                    width={16}
                    height={16}
                    size={7}
                    borderRadius='full'
                    borderWidth={2}
                    bg='gray.100'
                    borderColor='white'
                  />
                  <Image
                    src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80'
                    alt=''
                    loading='lazy'
                    width={16}
                    height={16}
                    size={7}
                    borderRadius='full'
                    borderWidth={2}
                    bg='gray.100'
                    borderColor='white'
                  />
                </DescriptionDetail>
              </Box>
            </DescriptionList>
          </Box>
        </Item>
        <Item class='hover:shadow-lg flex rounded-lg'>
          <Box class='hover:border-transparent hover:shadow-xs w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 text-sm font-medium py-4 cursor-pointer'>
            New Project
          </Box>
        </Item>
      </List>
    </Box>
  </ThemeProvider>
)

export default Sample
