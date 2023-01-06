import Head from 'next/head'
import { Raleway } from '@next/font/google'
import TopNav from '../containers/TopNav'

const raleway = Raleway({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${raleway.className} text-white bg-gradient-to-br from-indigo-900 to-purple-900 flex flex-col px-10`}>
        <TopNav />
        <span className='text-5xl font-extrabold leading-relaxed text-center py-24'>
          Currently working as a Software Engineer
        </span>

        <div className='p-3'>
          <h2 id="about">About</h2>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut at praesentium animi commodi adipisci quia eius, aliquam voluptatum laborum repudiandae blanditiis, quis ut fugiat voluptatibus quas tempore ab repellat repellendus.
            Consequatur optio inventore eligendi dignissimos aut aperiam saepe explicabo. Omnis culpa distinctio suscipit itaque tenetur cum at repellendus iste beatae accusamus nihil, laudantium placeat libero expedita quis porro hic. Reprehenderit?
            Suscipit atque velit perferendis tempore illum, nulla molestias eius voluptatum, rerum explicabo quasi. Rem reiciendis cumque dolor molestiae quam doloribus ipsa minus tempore? Dicta ut quo est? Assumenda, libero laborum?
            Corporis distinctio esse autem provident eligendi fugit corrupti eaque beatae impedit enim quasi sed culpa odio fugiat ad pariatur quas voluptatibus nostrum, voluptates, velit ipsam magni quos facere! Blanditiis, optio?
            Blanditiis dignissimos hic vel iste placeat temporibus aspernatur libero eveniet ab, nesciunt, sint ducimus velit, omnis aut reprehenderit at rerum atque inventore incidunt quam veritatis quas. Nemo rerum beatae est.
            Aliquid, quaerat! Maiores voluptatem vero, architecto officia voluptates laboriosam dolor eos explicabo! Soluta, dolor at voluptas a laborum ut officiis sunt, deserunt, tempora laboriosam rem nam provident quos nostrum cumque?
            Enim consequuntur repellat, quae libero quos dignissimos quia quod ut illum magnam dolores, quibusdam eum beatae repudiandae eaque, quidem inventore modi provident! Alias dignissimos unde pariatur, quas esse fugiat dolor!
            Porro perferendis fuga ipsa obcaecati totam, repellendus rem consequuntur aut error reprehenderit. Dolores aliquid ipsam repudiandae ad reprehenderit tenetur animi quasi pariatur cumque aspernatur? Sequi facilis odio est consectetur fugit!
            Suscipit harum esse excepturi magni pariatur. Quos commodi dolorem incidunt obcaecati dolor harum eaque beatae iste tenetur fugiat, alias deserunt repudiandae quia veritatis, eligendi dignissimos necessitatibus iure. Possimus, fugiat fuga!
            Adipisci explicabo nemo vitae ipsam voluptates molestias dolorum aperiam ea dicta, repellendus ad qui neque molestiae doloribus. Repudiandae fugiat enim, distinctio, doloribus eaque eum nemo iste hic, corrupti officia dolorem?
          </p>
        </div>

        <div className='p-3'>
          <h2 id="certificates">Certificates</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos molestiae debitis doloremque aliquam qui ad consequuntur excepturi cupiditate cumque ipsa labore tempore architecto blanditiis, sed ullam harum numquam nihil.
          </p>
        </div>

        <div className='p-3'>
          <h2 id="experiences">Experiences</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos molestiae debitis doloremque aliquam qui ad consequuntur excepturi cupiditate cumque ipsa labore tempore architecto blanditiis, sed ullam harum numquam nihil.
          </p>
        </div>

        <div className='p-3'>
          <h2 id="projects">Projects</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos molestiae debitis doloremque aliquam qui ad consequuntur excepturi cupiditate cumque ipsa labore tempore architecto blanditiis, sed ullam harum numquam nihil.
          </p>
        </div>

        <div className='p-3'>
          <h2 id="others">Others</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos molestiae debitis doloremque aliquam qui ad consequuntur excepturi cupiditate cumque ipsa labore tempore architecto blanditiis, sed ullam harum numquam nihil.
          </p>
        </div>

      </main>
    </>
  )
}
