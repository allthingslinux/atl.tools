import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';

import {
  FiMail,
  FiClipboard,
  FiLock,
  FiTool,
  FiBookOpen,
  FiUser,
} from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='min-h-screen bg-[#1a1a2e] text-white'>
      <header className='flex items-center justify-between p-4 bg-[#181825]'>
        <div className='flex items-center space-x-2'>
          <h1 className='text-xl font-bold'>atl.tools</h1>
        </div>
        <div className='flex items-center space-x-4'>
          <Button variant='ghost'>
            <FiLock className='mr-1' />
            Panel
          </Button>
          <Button variant='ghost'>
            <FiUser className='mr-1' />
            Register
          </Button>
        </div>
      </header>
      <main className='p-8 space-y-12'>
        <section className='text-center'>
          <h2 className='text-4xl font-bold'>welcome to atl.tools</h2>
          <p className='text-lg text-muted-foreground'>
            self hosted applications for nerds, by nerds
          </p>
          <div className='flex justify-center'>
            <div className='w-full h-1 bg-[#313244] m-6'></div>
          </div>
        </section>
        <section>
          <h3 className='text-2xl font-bold'>what we host</h3>

          <p className='text-muted-foreground'>
            we host many projects not just atl.tools, here are some of our other
            projects
          </p>

          <div className='grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-4'>
            <Card className='flex flex-col bg-[#F38BA8]'>
              <CardHeader className='flex-grow'>
                <CardTitle>.gg/linux</CardTitle>
                <CardDescription className='text-primary'>
                  a extremely popular linux server for any skill level
                </CardDescription>
              </CardHeader>
              <CardFooter className='mt-auto'>
                <Button variant='default'>
                  <FaDiscord className='mr-1' />
                  join the discord
                </Button>
              </CardFooter>
            </Card>

            <Card className='flex flex-col bg-[#A6E3A1]'>
              <CardHeader className='flex-grow'>
                <CardTitle>atl.wiki</CardTitle>
                <CardDescription className='text-primary'>
                  a linux wiki designed with beginners in mind
                </CardDescription>
              </CardHeader>
              <CardFooter className='mt-auto'>
                <Button variant='default'>
                  <FiBookOpen className='mr-1' />
                  visit atl.wiki
                </Button>
              </CardFooter>
            </Card>

            <Card className='flex flex-col bg-[#89B4FA]'>
              <CardHeader className='flex-grow'>
                <CardTitle>atl.tools</CardTitle>
                <CardDescription className='text-primary'>
                  selfhosted applications for nerds, by nerds
                </CardDescription>
              </CardHeader>
              <CardFooter className='mt-auto'>
                <Button variant='default'>
                  <FiTool className='mr-1' />
                  you are here
                </Button>
              </CardFooter>
            </Card>

            <Card className='flex flex-col bg-[#F9E2AF]'>
              <CardHeader className='flex-grow'>
                <CardTitle>???</CardTitle>
                <CardDescription className='text-primary'>
                  and more to come.. we are making new projects extremely fast
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section>
          <h3 className='text-2xl font-bold'>self hosted services</h3>
          <div className='grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-4'>
            <Card className='flex flex-col bg-[#BB9AEB]'>
              <CardHeader className='flex-grow'>
                <CardTitle>privatebin</CardTitle>
                <CardDescription className='text-primary'>
                  a minimalist, open source online pastebin where the server has
                  zero knowledge of pasted data
                </CardDescription>
              </CardHeader>
              <CardFooter className='mt-auto'>
                <Button variant='default'>
                  <FiClipboard className='mr-1' />
                  start pasting
                </Button>
              </CardFooter>
            </Card>

            <Card className='flex flex-col bg-[#A6E3A1]'>
              <CardHeader className='flex-grow'>
                <CardTitle>mail</CardTitle>
                <CardDescription className='text-primary'>
                  (currently registrations are closed) a mail server powered by
                  mailcow
                </CardDescription>
              </CardHeader>
              <CardFooter className='mt-auto'>
                <Button variant='default'>
                  <FiMail className='mr-1' />
                  visit mail
                </Button>
              </CardFooter>
            </Card>

            <Card className='flex flex-col bg-[#89B4FA]'>
              <CardHeader className='flex-grow'>
                <CardTitle>cyberchef</CardTitle>
                <CardDescription className='text-primary'>
                  a swiss army knife for encryption, encoding, compression and
                  data analysis
                </CardDescription>
              </CardHeader>
              <CardFooter className='mt-auto'>
                <Button variant='default'>
                  <FiLock className='mr-1' />
                  start cooking
                </Button>
              </CardFooter>
            </Card>

            <Card className='flex flex-col bg-[#F9E2AF]'>
              <CardHeader className='flex-grow'>
                <CardTitle>???</CardTitle>
                <CardDescription className='text-primary'>
                  and more to come..
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
